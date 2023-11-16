import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';
const clientApollo = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: createHttpLink({
        uri: process.env.NEXT_PUBLIC_WP_URI
    }),
    cache: new InMemoryCache(),

});

export default clientApollo;