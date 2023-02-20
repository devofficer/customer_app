/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../layouts/navbar/index.js';
import '../layouts/customer-form/index.js';
import "../layouts/customer-layout/customer-create/index.js";

@customElement('defie-page-customer-create')
export class App extends LitElement {
  @property() categories:any = {}

  render() {
    return html`
      <defie-navbar active="create" id="L. Duong"></defie-navbar>
      <defie-customer-create>
        <defie-customer-form .readonly=${false} .categories=${this.categories}></defie-customer-form>
      </defie-customer-create>
    `;
  }
}