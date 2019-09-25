import * as Types from '../../../GraphQL/graphqlTypes.gen';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export const StartContainerDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"startContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"Id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}}}],"directives":[]}]}}]};
export type StartContainerMutationFn = ApolloReactCommon.MutationFunction<StartContainerMutation, StartContainerMutationVariables>;

    export function useStartContainerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartContainerMutation, StartContainerMutationVariables>) {
      return ApolloReactHooks.useMutation<StartContainerMutation, StartContainerMutationVariables>(StartContainerDocument, baseOptions);
    }
export type StartContainerMutationHookResult = ReturnType<typeof useStartContainerMutation>;
export type StartContainerMutationResult = ApolloReactCommon.MutationResult<StartContainerMutation>;
export type StartContainerMutationOptions = ApolloReactCommon.BaseMutationOptions<StartContainerMutation, StartContainerMutationVariables>;export type StartContainerMutationVariables = {
  containerId: Types.Scalars['String']
};


export type StartContainerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'startContainer'>
);
