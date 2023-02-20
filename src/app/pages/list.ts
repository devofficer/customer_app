/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../layouts/navbar/index.js';
import "../layouts/customer-layout/customer-list/index.js";
import "../components/datatable/index.js";
import { CustomersProps } from '../types/types.js';

@customElement('defie-page-customer-list')
export class App extends LitElement {
  @property()
  customers: CustomersProps = {
    totalItems: 0,
    currentPage: 1,
    itemsPerPage: 25,
    data: []
  };

  render() {
    return html`
      <defie-navbar active="view" id="L. Duong"></defie-navbar>
      <defie-customer-list>
        <defie-datatable .customers=${this.customers}></defie-datatable>
      </defie-customer-list>
    `;
  }
}