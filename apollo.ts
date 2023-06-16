import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clim4c9ij0kec01ujd5d9eoy8/master', // Substitua pela URL da sua API GraphQL
  cache: new InMemoryCache(),
});

export default client;
