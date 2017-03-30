const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const route = require('koa-route');

//logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
//serve static content first
app.use(serve('./static'));



const api = {
  email: (ctx) => {
    ctx.body = ' send a email ';
  },

  show: (ctx, name) => {
    ctx.body = 'my name is ' + name;
  }
};
app.use(route.get('/email', api.email));
app.use(route.post('/show/:name', api.show));


//redirect others to 404 html page
app.use(ctx => {
  ctx.redirect('/404.html');
});

app.listen(3000);
