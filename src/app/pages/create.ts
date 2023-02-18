/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../layouts/navbar/index.js';
import '../layouts/customer-form/index.js';
import "../layouts/customer-layout/customer-create/index.js";
import "../layouts/customer-layout/customer-view/index.js";
import "../components/datatable/index.js";

@customElement('defie-page-customer-create')
export class App extends LitElement {
  render() {
    return html`
      <defie-navbar id="L. Duong"></defie-navbar>
      <defie-customer-create>
        <defie-customer-form></defie-customer-form>
      </defie-customer-create>
    `;
  }
}