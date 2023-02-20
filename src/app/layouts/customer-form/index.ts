import { LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./customer-form-css.js";
import { template } from "./customer-form-template.js";

export interface CustomerFormProps {
  customer: string
  attention: string
  bill_to_street: string
  bill_to_city: string
  bill_to_state: string
  bill_to_zip_code: string
  bill_to_country: string
  bill_to_phone: string
  domain: string
  ship_to: string
  reference: string
  ship_to_street: string
  ship_to_city: string
  ship_to_state: string
  ship_to_zip_code: string
  ship_to_country: string
  ship_to_phone: string
  nexus: string
  contact_name: string
  contact_email: string
  contact_phone: string
  contact_mobile: string
  contact_title: string
  contact_department: string
  contact_address: string
  acct_mgr_name: string
  acct_mgr_email: string
  acct_mgr_phone: string
  acct_mgr_mobile: string
  acct_mgr_title: string
  acct_mgr_department: string
  acct_mgr_address: string
  customer_term: string
  effective_date: string
  customer_credit_limit: string
  reseller_permit: string
  tax_district: string
  federal_tax_id: string
  tax_rate: string
  tax_code: string
  credit_hold: boolean
  credit_hold_reason: string
  recurring_billing: boolean
  recurring_date: string
  ar_name: string
  ar_email: string
  ar_title: string
  ar_phone: string
  created_on: string
  status: string
  past_due: string
  open_credit: string
  open_sales_orders: string
  ytd_sales: string
  balance: string
  last_invoice_date: string
  bank1_name: string
  bank1_account_no: string
  bank1_route_no: string
  bank1_swift_no: string
  bank1_address: string
  bank1_contact: string
  bank1_phone: string
  bank1_email: string
  bank1_contact_title: string
  company_name: string
  account_id: string
  address: string
  contact: string
  phone: string
  email: string
  title: string
  term: string
  credit_limit: string
}

@customElement('defie-customer-form')
export class CustomerForm extends LitElement {
  static styles = styles;

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

  @property() readonly: boolean = false; 
  @property() categories: any = {};

  render() {
    return template(this.readonly, this.categories);
  }
}