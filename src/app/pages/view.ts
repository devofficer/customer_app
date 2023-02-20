/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../layouts/customer-form/index.js';
import "../layouts/customer-layout/customer-view/index.js";
import '../layouts/navbar/index.js';
import { CustomerFormProps } from '../layouts/customer-form/index.js';

@customElement('defie-page-customer-view')
export class App extends LitElement {
  @property() categories: any = {}
  @property() customer!: CustomerFormProps;  

  
  render() {
    return html`
      <defie-navbar active="create" id="L. Duong"></defie-navbar>
      <defie-customer-view customer_id=${this.customer?.customer_id}>
        <defie-customer-form
          .values=${this.customer} 
          .readonly=${true} 
        ></defie-customer-form>
      </defie-customer-view>
    `;
  }
}