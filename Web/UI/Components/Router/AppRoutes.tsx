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
    Loadable: Loadable(import('UI/Routes/Lab'), 'Routes/Lab/index.tsx'),
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
        Loadable: Loadable(import('UI/Routes/Lab/Shell'), 'Routes/Lab/Shell.tsx')
      }
    ]
  },
  {
    label: 'Admin',
    path: 'Admin',
    to: '/Admin',
    role: 'ADMIN',
    Loadable: Loadable(import('UI/Routes/Admin/Home'), 'Routes/Admin/Home.tsx'),
  },
];
