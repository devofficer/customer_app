/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { customElement, html, LitElement } from 'lit-element';
import './layouts/navbar';
import './layouts/customer-form';
import "./layouts/customer-layout/customer-create";
import "./layouts/customer-layout/customer-view";
import "./components/datatable";
import { Router } from '@lit-labs/router';

@customElement('defie-app')
export class App extends LitElement {
  private _router = new Router(this, [
    {
      path: '/', 
      render: () => {
        return html`
          <defie-customer-view>
            <defie-datatable></defie-datatable>
          </defie-customer-view>
        `
      }
    },
    {
      path: '/create', 
      render: () => {
        return html`
          <defie-customer-create>
            <defie-customer-form></defie-customer-form>
          </defie-customer-create>
        `
      }
    },
  ]);
  
  render () {
    return html`
      <defie-navbar id="L. Duong"></defie-navbar>
      ${this._router.outlet()}
    `;
  }
}

console.log('app started...');