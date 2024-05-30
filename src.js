const express = require('express');
const { server } = require('./apollo');
const bodyParser = require('body-parser');
const cors = require('cors');

const startServer = async () => {
    const app = express();

    app.use(cors());  // Note the function call here
    app.use(bodyParser.json());

    await server.start();  // Start the server
    server.applyMiddleware({ app, path: '/' });  // Apply middleware

    // Start the Express server
    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
};

startServer();