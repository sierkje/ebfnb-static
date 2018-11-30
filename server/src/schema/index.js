const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = [
  `
    type Query {
      test: Boolean!
    }
  `,
]

const resolvers = {
  Query: {
    test: () => true,
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
