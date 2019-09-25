// Web/UI/Routes/Lab/Shell.tsx
import React from 'react'
import { RouteComponentProps, Redirect } from 'react-router'
import { ContainerShell } from '../../Components/Docker/Container/Shell'

export default function ContainerShellRoute(props: RouteComponentProps<{ containerId: string }>): React.ReactElement {
  if (!props.match.params.containerId) return <Redirect to='/' />
  else return <ContainerShell containerId={props.match.params.containerId} />
}