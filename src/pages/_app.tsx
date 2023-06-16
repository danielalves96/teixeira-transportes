import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../../apollo';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
