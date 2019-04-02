import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// const client = new ApolloClient ({
//     uri: 'https://api.github.com/graphql',
//     request: async operation => {
//         // const token = await  aed762f3c4f7e021047d8673bcc5d5261157ded9 
//         operation.setContext({
//             headers: {
//                 authorization: `token aed762f3c4f7e021047d8673bcc5d5261157ded9`
//             }
//         });
//     }
// })


ReactDOM.render(
        <App/>,
    document.getElementById('root')
);

serviceWorker.unregister();

