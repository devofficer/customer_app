/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './layouts/navbar/index.js';
import './layouts/customer-form/index.js';
import "./layouts/customer-layout/customer-create/index.js";
import "./layouts/customer-layout/customer-view/index.js";
import "./components/datatable/index.js";

@customElement('defie-app')
export class App extends LitElement {
  @property()
  route: string = 'list';
  
  // private _router = new Router(this, [
  //   {
  //     path: '/', 
  //     render: () => {
  //       return html`
  //         <defie-customer-view>
  //           <defie-datatable></defie-datatable>
  //         </defie-customer-view>
  //       `
  //     }
  //   },
  //   {
  //     path: '/create', 
  //     render: () => {
  //       return html`
  //         <defie-customer-create>
  //           <defie-customer-form></defie-customer-form>
  //         </defie-customer-create>
  //       `
  //     }
  //   },
  // ]);

  render() {
    return html`
      <defie-navbar id="L. Duong"></defie-navbar>
      <defie-customer-view>
        <defie-datatable></defie-datatable>
      </defie-customer-view>
    `;
  }
}