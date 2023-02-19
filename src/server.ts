import Router from '@koa/router';
import { render } from '@lit-labs/ssr';
import Koa from 'koa';
import { nodeResolve } from 'koa-node-resolve';
import staticFiles from 'koa-static';


import { Readable } from 'stream';
import { renderCreatePage, renderViewPage } from './app/render.js';

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = Readable.from(render(renderViewPage()));
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
