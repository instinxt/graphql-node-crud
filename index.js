const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema  = require('./schema');
const resolvers = require('resolvers'); 
const dotenv= require('dotenv');
const connectDB = require('./db'); // Import your database connection

dotenv.config();
const app = express();

const startServer = async () => {
  await connectDB(); // Connect to MongoDB before starting the server

  const server = new ApolloServer({ typeDefs: schema, resolvers });
  server.applyMiddleware({ app });

  // Port definition and server logs
  const port = process.env.PORT || 4000; // Use environment variable for port or default to 4000
  app.listen(port, () =>
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
};

startServer();
