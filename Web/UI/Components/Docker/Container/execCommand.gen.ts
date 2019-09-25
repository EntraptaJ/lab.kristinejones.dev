import * as Types from '../../../GraphQL/graphqlTypes.gen';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export const ExecCommandDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"execCommand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"command"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"execCommand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"containerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"command"},"value":{"kind":"Variable","name":{"kind":"Name","value":"command"}}}],"directives":[]}]}}]};
export type ExecCommandMutationFn = ApolloReactCommon.MutationFunction<ExecCommandMutation, ExecCommandMutationVariables>;

    export function useExecCommandMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ExecCommandMutation, ExecCommandMutationVariables>) {
      return ApolloReactHooks.useMutation<ExecCommandMutation, ExecCommandMutationVariables>(ExecCommandDocument, baseOptions);
    }
export type ExecCommandMutationHookResult = ReturnType<typeof useExecCommandMutation>;
export type ExecCommandMutationResult = ApolloReactCommon.MutationResult<ExecCommandMutation>;
export type ExecCommandMutationOptions = ApolloReactCommon.BaseMutationOptions<ExecCommandMutation, ExecCommandMutationVariables>;export type ExecCommandMutationVariables = {
  containerId: Types.Scalars['String'],
  command: Types.Scalars['String']
};


export type ExecCommandMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'execCommand'>
);
