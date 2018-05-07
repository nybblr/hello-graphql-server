const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const {
  graphqlKoa: graphql,
  graphiqlKoa: graphiql,
} = require('apollo-server-koa');

let app = new Koa();
let api = Router();

api.post('/graphql', bodyParser(), async (ctx) => console.log(ctx.request.body));
api.get('/graphiql', async (ctx) => ctx.body = 'GraphiQL');

app.use(api.routes());
app.use(api.allowedMethods());

app.listen(5000);
