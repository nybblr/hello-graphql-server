const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

let UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    userId: {
      type: GraphQLString,
      resolve: user => user.userId
    },
  }
});

let RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    me: {
      type: UserType,
      resolve: (parent, args, ctx) => ctx.user
    }
  }
});

let schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = schema;
