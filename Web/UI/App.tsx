// UI/UI/App.tsx
import React from 'react';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'UI/Components/Style/Theme';
import useRouter from 'use-react-router';
import AppRouter from './Components/Router';
import { useRoute } from './Components/Router/useRoute';

const LoadingProgress = (): React.ReactElement => {
  return <></>;
};

const CssBaseline = Loadable({
  loader: () => import('@material-ui/core/CssBaseline'),
  loading: LoadingProgress,
  modules: ['@material-ui/core/esm/CssBaseline/index.js']
});

const NavDrawer = Loadable({
  loader: () => import('UI/Components/Layout/NavBar'),
  loading: LoadingProgress,
  modules: ['Components/Layout/NavBar/index.tsx']
});

const AppBar = Loadable({
  loader: () => import('UI/Components/Layout/AppBar'),
  loading: LoadingProgress,
  modules: ['Components/Layout/AppBar/index.tsx']
});

function AppBody(): React.ReactElement {
  const { location } = useRouter();
  const route = useRoute(location.pathname);

  const isAuthorized = !route || typeof route.role === 'undefined';
  return (
    <>
      {!route || !route.hideUI ? <AppBar /> : <></>}
      {!route || !route.hideUI ? <NavDrawer /> : <></>}
      <main
        style={{
          height: '100%'
        }}
      >
        <AppRouter />
      </main>
    </>
  );
}

export function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBody />
    </ThemeProvider>
  );
}

export default App;
