import Koa from 'koa';
import Router from '@koa/router';
import staticFiles from 'koa-static';
import { Readable } from 'stream';
import { render } from '@lit-labs/ssr';
import { nodeResolve } from 'koa-node-resolve';
import { renderCreatePage, renderUpdatePage, renderViewPage } from './app/render.js';
import { generateMock, getCustomers } from './mock/api.js';

const app = new Koa();
const router = new Router();

// generating mock customer information for testing
generateMock(200);

// registering routes
router.get('/', (req) => {
  req.redirect('/customers?page=1');
})

router.get('/customers', (req) => {
  if(!req.request.query.page) 
    req.redirect('/customers?page=1')

  const page = parseInt(req.request.query.page as string);
  const type = req.request.query.type as string;
  const keyword = req.request.query.keyword as string;

  const customers = getCustomers(page, type, keyword);

  req.type = 'text/html';
  req.body = Readable.from(render(renderViewPage(customers)));
});

router.get('/update', (req) => {
  req.type = 'text/html';
  req.body = Readable.from(render(renderUpdatePage()));
});

router.get('/create', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = Readable.from(render(renderCreatePage()));
});

app.use(router.routes());
app.use(nodeResolve());

// for node_modules
app.use(staticFiles('.'));

// for components and public
app.use(staticFiles('./dist'));
app.use(staticFiles('./dist/app/public'));

app.listen(3000, () => {
  console.log('App is running on the port 3000');
});
