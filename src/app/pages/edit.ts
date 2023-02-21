/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { updateCustomer } from '../api/index.js';
import '../layouts/customer-form/index.js';
import { CustomerFormProps } from '../layouts/customer-form/index.js';
import "../layouts/customer-layout/customer-edit/index.js";
import '../layouts/navbar/index.js';
import { changeRoute } from '../utils/index.js';

@customElement('defie-page-customer-edit')
export class App extends LitElement {
  @property() categories: any = {}
  @property() customer!: CustomerFormProps

  connectedCallback() {
    super.connectedCallback();
    const customer_data = this.getAttribute('data-customer') as string;
    this.customer = JSON.parse(customer_data);
  } 

  protected handler = (name: string, value: string) => {
    this.customer[name] = value;
  }

  protected handleSave = async () => {
    await updateCustomer(this.customer);
    changeRoute('/customers');
  }

  render() {
    return html`
      <defie-navbar active="create" id="L. Duong"></defie-navbar>
      <defie-customer-edit customer_id=${this.customer?.customer_id}>
        <defie-customer-form
          .values=${this.customer} 
          .handleChange=${this.handler}
          .categories=${this.categories}
        ></defie-customer-form>
      </defie-customer-edit>
    `;
  }
}