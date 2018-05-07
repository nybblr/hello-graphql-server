const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const JWTParser = require('koa-jwt');
const {
  graphqlKoa: graphql,
  graphiqlKoa: graphiql,
} = require('apollo-server-koa');

const schema = require('./schema');
const SIGNATURE = 'its-a-secret';

let bodyParser = BodyParser();
let jwtParser = JWTParser({ secret: SIGNATURE });

let app = new Koa();
let api = Router();

api.post('/graphql', jwtParser, bodyParser,
  graphql(ctx => ({ ...schema, context: ctx.state }))
);
api.get('/graphiql', graphiql({ endpointURL: '/graphql' }));

app.use(api.routes());
app.use(api.allowedMethods());

app.listen(5000);
