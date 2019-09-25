// UI/UI/Components/Router/AppRoutes.tsx
import { AppRoute } from 'UI/Components/Router/types';
import { Loadable } from './Loadable';

export const AppRoutes: AppRoute[] = [
  {
    label: 'Home',
    path: '/',
    to: '/',
    exact: true,
    Loadable: Loadable(import('UI/Routes/Home/index'), 'Routes/Home/index.tsx'),
  },
  {
    label: 'Lab',
    path: 'Lab',
    to: '/Lab/',
    role: 'USER',
    children: [
      {
        label: 'Create',
        path: 'Create',
        role: 'USER',
        to: '/Lab/Create',
        Loadable: Loadable(import('UI/Routes/Lab/CreateContainer'), 'Routes/Lab/CreateContainer.tsx')
      },
      {
        label: 'Shell',
        path: 'Shell/:containerId',
        to: '/Shell/:containerId',
        role: 'USER',
        hidden: true,
        Loadable: Loadable(import('UI/Routes/Lab/Shell'), 'Routes/Lab/Shell.tsx')
      }
    ]
  }
];
