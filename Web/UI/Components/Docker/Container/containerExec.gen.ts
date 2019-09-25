import * as Types from '../../../GraphQL/graphqlTypes.gen';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export const ContainerLogsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"containerLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"containerLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"containerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}}}],"directives":[]}]}}]};

    export function useContainerLogsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ContainerLogsSubscription, ContainerLogsSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<ContainerLogsSubscription, ContainerLogsSubscriptionVariables>(ContainerLogsDocument, baseOptions);
    }
export type ContainerLogsSubscriptionHookResult = ReturnType<typeof useContainerLogsSubscription>;
export type ContainerLogsSubscriptionResult = ApolloReactCommon.SubscriptionResult<ContainerLogsSubscription>;export type ContainerLogsSubscriptionVariables = {
  containerId: Types.Scalars['String']
};


export type ContainerLogsSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Types.Subscription, 'containerLogs'>
);
