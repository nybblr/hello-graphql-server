const { makeExecutableSchema } = require('graphql-tools');

let typeDefs = `
  type Query {
    me: UserType
  }

  type UserType {
    userId: String
  }
`;

let resolvers = {
  Query: {
    me: (parent, args, ctx) => ctx.user
  }
};

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
