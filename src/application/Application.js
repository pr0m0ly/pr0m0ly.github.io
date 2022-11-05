import Initializer from './components/initializer';
import Layout from './components/layout/Layout';
import GlobalStyles from './style/global-style';
import AppProviders from './components/app-providers/AppProviders';

const Application = () => {
  return (
    <Initializer>
      <AppProviders>
        <GlobalStyles />
        <Layout />
      </AppProviders>
    </Initializer>
  );
};

export default Application;
