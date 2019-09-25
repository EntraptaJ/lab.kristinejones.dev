// API/src/Modules/Docker/Utils/generateArgs.ts
import { CreateContainerInput } from '../DockerInput';
import { ContainerCreateOptions } from 'dockerode';

interface ContainerArgs extends ContainerCreateOptions {
  Image: string;
  Env: string[];
  Tty?: boolean;
}

export function generateContainerArgs({
  image,
  environment,
  interactive,
  command
}: CreateContainerInput): ContainerArgs {
  const interactiveArgs: Partial<ContainerArgs> = interactive
    ? {
        Tty: true,
        OpenStdin: true,
        AttachStdin: true,
        AttachStderr: true,
        AttachStdout: true,
        StdinOnce: false
      }
    : {};

  return {
    Image: image,
    Env: environment.map(({ key, value }) => `${key}=${value}`),
    Cmd: [command],
    ...interactiveArgs
  };
}
