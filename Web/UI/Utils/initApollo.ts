// UI/ui/lib/initApollo.tsx
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { OperationDefinitionNode } from 'graphql';
import WS from 'ws';
import { createHttpLink } from 'apollo-link-http';
import { ApolloCache } from 'apollo-cache';

interface InitClientParams {
  baseUrl: string;
  initialState?: NormalizedCacheObject;
  token?: string;
  cache?: ApolloCache<any>;
}

export const initApollo = ({
  baseUrl,
  initialState,
  token,
  cache = new InMemoryCache().restore(initialState || {})
}: InitClientParams): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink({
    uri: `${baseUrl}/graphql`,
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  })

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: `${baseUrl.replace(/(http)(s)?\:\/\//, 'ws$2://')}/graphql`,
    options: {
      lazy: true,
      reconnect: true,
    },
    webSocketImpl: !process.browser ? WS : WebSocket,
  });

  const terminatingLink = split(
    ({ query: { definitions } }) =>
      definitions.some(node => {
        const { kind, operation } = node as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      }),
    wsLink,
    httpLink,
  );

  const link = ApolloLink.from([terminatingLink]);
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link,
    cache: cache
  });
}
  
