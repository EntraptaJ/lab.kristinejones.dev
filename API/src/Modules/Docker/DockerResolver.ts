// API/src/Modules/Docker/DockerResolver.ts
import Docker from 'dockerode';
import { compress } from 'iltorb';
import {
  Arg,
  Mutation,
  Query,
  Resolver,
  Root,
  Subscription
} from 'type-graphql';
import { CreateContainerInput } from './DockerInput';
import { DockerContainer } from './DockerModel';
import { filesPubSub } from './FilesPubSub';
import { Containers, logsPubSub } from './LogsPubSub';
import { generateContainerArgs } from './Utils/generateArgs';

export const docker = new Docker();

@Resolver()
export class DockerResolver {
  @Query(() => String)
  hello(): string {
    return 'HelloWorld';
  }
  @Mutation(() => DockerContainer)
  async createContainer(
    @Arg('input')
    input: CreateContainerInput
  ): Promise<DockerContainer> {
    await docker.pull(input.image, {})
    const container = await docker.createContainer(
      generateContainerArgs(input)
    );

    const newContainer = await DockerContainer.create({
      containerId: container.id
    }).save();

    setTimeout(() => container.remove({ force: true }), 1800000);

    return newContainer;
  }

  @Mutation(() => Boolean)
  async pullImage(@Arg('image') image: string): Promise<boolean> {
    await docker.pull(image, {});
    return true;
  }

  @Mutation(() => Boolean)
  async execCommand(
    @Arg('containerId') containerId: string,
    @Arg('command') command: string
  ): Promise<boolean> {
    const { stream } = Containers.find(({ id }) => id === containerId);
    stream.write(`${command}\n`);
    return true;
  }

  @Mutation(() => Boolean)
  async startContainer(@Arg('Id') Id: string): Promise<boolean> {
    const { containerId } = await DockerContainer.findOneOrFail(Id);
    const container = docker.getContainer(containerId);
    await container.start();
    return true;
  }

  @Mutation(() => Boolean)
  async removeContainer(@Arg('Id') Id: string): Promise<boolean> {
    const container = await DockerContainer.findOneOrFail(Id);
    const dockerContainer = docker.getContainer(container.containerId);
    await Promise.all([
      dockerContainer.remove({ force: true }),
      container.remove()
    ]);
    return true;
  }

  @Subscription({
    // @ts-ignore
    subscribe: async (stuff, args) => {
      const test = await logsPubSub.subscribe(args);
      return test;
    }
  })
  public containerLogs(
    @Arg('containerId') containerId: string,
    @Root() buffer: Buffer
  ): String {
    return buffer.toString();
  }

  @Subscription(() => String, {
    // @ts-ignore
    subscribe: async (a, args) => filesPubSub.subscribe(args)
  })
  async containerFiles(
    @Arg('containerId') containerId: string,
    @Arg('path') path: string,
    @Root() root: Buffer
  ): Promise<string> {
    return (await compress(root)).toString('hex');
  }
}
