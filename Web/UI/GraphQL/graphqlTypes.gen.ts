export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CreateContainerInput = {
  image: Scalars['String'],
  /** Container Environment Variables */
  environment?: Maybe<Array<DockerEnvironment>>,
  interactive: Scalars['Boolean'],
  command?: Maybe<Scalars['String']>,
};

export type DockerContainer = {
   __typename?: 'DockerContainer',
  id: Scalars['ID'],
};

export type DockerEnvironment = {
  key: Scalars['String'],
  value: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createContainer: DockerContainer,
  pullImage: Scalars['Boolean'],
  execCommand: Scalars['Boolean'],
  startContainer: Scalars['Boolean'],
  removeContainer: Scalars['Boolean'],
};


export type MutationCreateContainerArgs = {
  input: CreateContainerInput
};


export type MutationPullImageArgs = {
  image: Scalars['String']
};


export type MutationExecCommandArgs = {
  command: Scalars['String'],
  containerId: Scalars['String']
};


export type MutationStartContainerArgs = {
  Id: Scalars['String']
};


export type MutationRemoveContainerArgs = {
  Id: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  containerLogs: Scalars['String'],
  containerFiles: Scalars['String'],
};


export type SubscriptionContainerLogsArgs = {
  containerId: Scalars['String']
};


export type SubscriptionContainerFilesArgs = {
  path: Scalars['String'],
  containerId: Scalars['String']
};
export type ContainerLogsSubscriptionVariables = {
  containerId: Scalars['String']
};


export type ContainerLogsSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Subscription, 'containerLogs'>
);

export type ExecCommandMutationVariables = {
  containerId: Scalars['String'],
  command: Scalars['String']
};


export type ExecCommandMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'execCommand'>
);

export type CreateContainerMutationVariables = {
  input: CreateContainerInput
};


export type CreateContainerMutation = (
  { __typename?: 'Mutation' }
  & { createContainer: (
    { __typename?: 'DockerContainer' }
    & Pick<DockerContainer, 'id'>
  ) }
);

export type StartContainerMutationVariables = {
  containerId: Scalars['String']
};


export type StartContainerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'startContainer'>
);
