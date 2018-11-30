const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./schema')

const PORT = 4000
const GRAPHIQL_PATH = '/graphql'

const apollo = new ApolloServer({ schema })

const app = express()
apollo.applyMiddleware({ app, path: GRAPHIQL_PATH })

app.listen({ port: PORT }, () => console.log(
  `🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}`
))
