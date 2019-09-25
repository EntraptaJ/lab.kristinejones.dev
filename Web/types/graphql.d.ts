
declare module '*/containerExec.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const containerLogs: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/execCommand.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const execCommand: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createContainer.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createContainer: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/startContainer.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const startContainer: DocumentNode;

  export default defaultDocument;
}
    