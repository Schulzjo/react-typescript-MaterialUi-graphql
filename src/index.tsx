import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './index.css';
import AppMui from './AppMui';

const client = new ApolloClient({
    uri: 'https://spacexdata.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <AppMui />
    </ApolloProvider>,
    document.getElementById('root')
);


