/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { CustomerFormProps } from '../layouts/customer-form/index.js';
import { createCustomer } from '../api/index.js';
import '../layouts/navbar/index.js';
import '../layouts/customer-form/index.js';
import "../layouts/customer-layout/customer-create/index.js";
import { changeRoute } from '../utils/index.js';

@customElement('defie-page-customer-view')
export class App extends LitElement {
  @property() categories: any = {}

  render() {
    return html`
      <defie-navbar active="create" id="L. Duong"></defie-navbar>
      <defie-customer-create>
        <defie-customer-form 
          .readonly=${false} 
        ></defie-customer-form>
      </defie-customer-create>
    `;
  }
}