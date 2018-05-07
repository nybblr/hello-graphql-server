const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const {
  graphqlKoa: graphql,
  graphiqlKoa: graphiql,
} = require('apollo-server-koa');

const schema = require('./schema');

let app = new Koa();
let api = Router();

api.post('/graphql', bodyParser(), graphql({ schema }));
api.get('/graphiql', graphiql({ endpointURL: '/graphql' }));

app.use(api.routes());
app.use(api.allowedMethods());

app.listen(5000);
