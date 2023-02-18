import Koa from 'koa';
import Router from '@koa/router';
import staticFiles from 'koa-static';
import { nodeResolve } from 'koa-node-resolve';
import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';
import { render } from '@lit-labs/ssr';


import { renderPage, renderStatic } from './app/render.js';
import { Readable } from 'stream';

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = Readable.from(render(renderStatic('view')))
  // ctx.body = new RenderResultReadable(renderPage('view'));
});

router.get('/create', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = new RenderResultReadable(renderPage('create'));
});

app.use(router.routes());
app.use(nodeResolve());
app.use(staticFiles('./app/public'));
app.listen(3000, () => {
  console.log('App is running on the port 3000');
});
