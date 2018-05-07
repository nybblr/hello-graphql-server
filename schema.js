const {
  buildSchema,
} = require('graphql');

let schema = buildSchema(`
  type Query {
    me: UserType
  }

  type UserType {
    userId: String
  }
`);

let rootValue = {
  me: (parent, ctx) => ctx.user
};

module.exports = { schema, rootValue };
