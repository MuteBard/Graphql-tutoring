# GraphQL Boilerplate

A boilerplate project to get you started with GraphQL.

## Getting Started

### Installation

First, install the necessary dependencies:

```bash
npm install
```

### Running

Run the application with the following

```bash
npm start
```

### Testing the API

You can test the GraphQL API using Postman or any other API client. After starting the server, you should be able to access the GraphQL Playground at the specified URL.

![Alt text](operational.png)

### Features

- Modularized schema and resolvers
- Express server setup
- Apollo Server integration

Create your schemas in the schemas folder, 
They then feed into the aggregated schema.js. 
Which is then used with apollo.js which creates a server.
The server is then used within src.js to launch your express server as a graphql app.

Next we will create more useful TypeDefs and Resolvers