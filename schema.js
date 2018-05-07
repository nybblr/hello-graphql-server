const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve(parent, args, ctx) {
          console.log(parent, args, ctx);
          return 'world';
        }
      }
    }
  })
});

module.exports = schema;
