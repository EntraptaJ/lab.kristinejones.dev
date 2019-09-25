import * as Types from '../../../GraphQL/graphqlTypes.gen';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export const CreateContainerDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateContainerInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]};
export type CreateContainerMutationFn = ApolloReactCommon.MutationFunction<CreateContainerMutation, CreateContainerMutationVariables>;

    export function useCreateContainerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateContainerMutation, CreateContainerMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateContainerMutation, CreateContainerMutationVariables>(CreateContainerDocument, baseOptions);
    }
export type CreateContainerMutationHookResult = ReturnType<typeof useCreateContainerMutation>;
export type CreateContainerMutationResult = ApolloReactCommon.MutationResult<CreateContainerMutation>;
export type CreateContainerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateContainerMutation, CreateContainerMutationVariables>;export type CreateContainerMutationVariables = {
  input: Types.CreateContainerInput
};


export type CreateContainerMutation = (
  { __typename?: 'Mutation' }
  & { createContainer: (
    { __typename?: 'DockerContainer' }
    & Pick<Types.DockerContainer, 'id'>
  ) }
);
