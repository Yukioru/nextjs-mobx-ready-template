import '../styles/globals.css';
import { StoreProvider } from '../components/StoreProvider';
import RootStore from '../stores/Root.store';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider
      store={{
        name: 'rootStore',
        Store: RootStore,
      }}
      {...pageProps}
    >
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
