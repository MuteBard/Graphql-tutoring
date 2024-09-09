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

![Alt text](p1.png)

### Features

- Modularized schema and resolvers
- Express server setup
- Apollo Server integration

### Summary for 5/29/2024
Create your schemas in the schemas folder, 
They then feed into the aggregated schema.js. 
Which is then used with apollo.js which creates a server.
The server is then used within src.js to launch your express server as a graphql app.

Next we will create more useful TypeDefs and Resolvers

### Summary for 9/8/2024
Able to use both Queries and Mutations (no db, not able to save)

### Summary for 9/9/2024
Able to effictively search per field, can create, update and delete mutations (has db, can save)

