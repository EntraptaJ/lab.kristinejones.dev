// API/src/Modules/Docker/DockerInput.ts
import { InputType, Field } from 'type-graphql';
import { DockerEnvironment } from './Environment';

@InputType()
export class CreateContainerInput {
  @Field()
  image: string;

  @Field(() => [DockerEnvironment], {
    nullable: true,
    description: 'Container Environment Variables',
    defaultValue: []
  })
  environment: DockerEnvironment[];

  @Field()
  interactive: boolean;

  @Field({ nullable: true })
  command?: string;

}
