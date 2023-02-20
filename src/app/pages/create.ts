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

@customElement('defie-page-customer-create')
export class App extends LitElement {
  @property() categories: any = {}

  @state()
  information: CustomerFormProps = {
    customer: '',
    attention: '',
    bill_to_street: '',
    bill_to_city: '',
    bill_to_state: '',
    bill_to_zip_code: '',
    bill_to_country: '',
    bill_to_phone: '',
    domain: '',
    ship_to: '',
    reference: '',
    ship_to_street: '',
    ship_to_city: '',
    ship_to_state: '',
    ship_to_zip_code: '',
    ship_to_country: '',
    ship_to_phone: '',
    nexus: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    contact_mobile: '',
    contact_title: '',
    contact_department: '',
    contact_address: '',
    acct_mgr_name: '',
    acct_mgr_email: '',
    acct_mgr_phone: '',
    acct_mgr_mobile: '',
    acct_mgr_title: '',
    acct_mgr_department: '',
    acct_mgr_address: '',
    customer_term: '',
    effective_date: '',
    customer_credit_limit: '',
    reseller_permit: '',
    tax_district: '',
    federal_tax_id: '',
    tax_rate: '',
    tax_code: '',
    credit_hold: false,
    credit_hold_reason: '',
    recurring_billing: false,
    recurring_date: '',
    ar_name: '',
    ar_email: '',
    ar_title: '',
    ar_phone: '',
    created_on: '',
    status: '',
    past_due: '',
    open_credit: '',
    open_sales_orders: '',
    ytd_sales: '',
    balance: '',
    last_invoice_date: '',
    bank1_name: '',
    bank1_account_no: '',
    bank1_route_no: '',
    bank1_swift_no: '',
    bank1_address: '',
    bank1_contact: '',
    bank1_phone: '',
    bank1_email: '',
    bank1_contact_title: '',
    company_name: '',
    account_id: '',
    address: '',
    contact: '',
    phone: '',
    email: '',
    title: '',
    term: '',
    credit_limit: '',
  }

  protected handler = (name: string, value: string) => {
    this.information[name] = value;
  }

  protected handleSave = async () => {
    await createCustomer(this.information);
    changeRoute('/customers');
  }

  render() {
    return html`
      <defie-navbar active="create" id="L. Duong"></defie-navbar>
      <defie-customer-create .handleSave=${this.handleSave}>
        <defie-customer-form 
          .readonly=${false} 
          .handleChange=${this.handler} 
          .categories=${this.categories}
        ></defie-customer-form>
      </defie-customer-create>
    `;
  }
}