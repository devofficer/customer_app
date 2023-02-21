import Router from '@koa/router';
import { render } from '@lit-labs/ssr';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { nodeResolve } from 'koa-node-resolve';
import staticFiles from 'koa-static';
import { Readable } from 'stream';
import { CustomerFormProps } from './app/layouts/customer-form/index.js';
import { renderCreatePage, renderEditPage, renderListPage, renderViewPage } from './app/render.js';
import { addCustomer, generateMock, getCategories, getCustomer, getCustomers, updateCustomer } from './mock/api.js';

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
  req.body = Readable.from(render(renderListPage(customers)));
});

router.get('/view', (req) => {
  if(!req.request.query.id)
    req.redirect('/customers?page=1');

  const customer_id = req.request.query.id as string;
  const customer = getCustomer(customer_id);

  req.type = 'text/html';
  req.body = Readable.from(render(renderViewPage(customer)));
});

router.get('/edit', (req) => {
  if(!req.request.query.id)
    req.redirect('/customers?page=1');

  const customer_id = req.request.query.id as string;
  const customer = getCustomer(customer_id);
  const categories = getCategories();

  req.type = 'text/html';
  req.body = Readable.from(render(renderEditPage(customer, categories)));
});


router.get('/create', (ctx) => {
  const categories = getCategories();
  ctx.type = 'text/html';
  ctx.body = Readable.from(render(renderCreatePage(categories)));
});

router.post('/create/customer', (ctx) => {
  const customer = ctx.request.body as CustomerFormProps;
  addCustomer(customer);
  
  ctx.type = 'text/html';
  ctx.body = {success: true};
});

router.post('/update/customer', (ctx) => {
  const customer = ctx.request.body as CustomerFormProps;
  updateCustomer(customer);
  
  ctx.type = 'text/html';
  ctx.body = {success: true};
});

app.use(bodyParser());
app.use(router.routes());
app.use(nodeResolve());

// for node_modules
app.use(staticFiles('.'));

// for components and public
app.use(staticFiles('./dist'));
app.use(staticFiles('./dist/app/public'));

app.listen(3005, () => {
  console.log('App is running on the port 3005');
});
