import { html } from "lit";
import '../../components/form-elements/form-textfield/index.js';
import '../../components/form-elements/form-checkbox/index.js';
import '../../components/form-elements/form-button/index.js';
import '../../components/form-elements/form-select/index.js';
import '../../components/form-elements/form-label/index.js';
import { CustomerFormProps } from "./index.js";

interface CustomerFormViewProps {
  readonly: boolean
  categories: any
  values: CustomerFormProps; 
  handler: (name: string, value: string | boolean) => void;
}

export const template = ({ readonly, categories, handler, values }: CustomerFormViewProps) => {
  const handleChange = (name: string, value: string | boolean) => {
    handler(name, value);
  }

  return html`
    <div class="panel-wrapper">
      <div class="panel-line-wrapper">
        <div name="Bill To" class="form-group">
          <defie-form-label label="Bill To">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="customer"
              .defaultValue=${values.customer}
              label="Customer *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="attention"
              .defaultValue=${values?.attention}
              label="Attention *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bill_to_street"
              .defaultValue=${values?.bill_to_street}
              label="Street *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bill_to_city"
              .defaultValue=${values?.bill_to_city}
              label="City *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select .readonly=${readonly} name="bill_to_state" label="State *" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bill_to_zip_code"
              .defaultValue=${values?.bill_to_zip_code}
              label="Zip Code*" 
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select .readonly=${readonly} name="bill_to_country" label="Country *" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bill_to_phone"
              .defaultValue=${values?.bill_to_phone}
              label="Phone *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="domain"
              .defaultValue=${values?.domain}
              label="Domain *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Ship To" class="form-group">
          <defie-form-label label="Ship To">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="ship_to"
              .defaultValue=${values?.ship_to}
              label="Ship To
              " .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="reference"
              .defaultValue=${values?.reference}
              label="Reference *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="ship_to_street"
              .defaultValue=${values?.ship_to_street}
              label="Street *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="ship_to_city"
              .defaultValue=${values?.ship_to_city}
              label="City *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select .readonly=${readonly} name="ship_to_state " label="State *" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="ship_to_zip_code"
              .defaultValue=${values?.ship_to_zip_code}
              label="Zip Code*" 
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                .readonly=${readonly} 
                name="ship_to_country" 
                label="Country *" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="ship_to_phone"
              .defaultValue=${values?.ship_to_phone}
              label="Phone *"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                .readonly=${readonly} 
                name="nexus" 
                label="Nexus *" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-line-wrapper">
        <div name="Contact" class="form-group">
          <defie-form-label label="Contact">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="contact_name"
              .defaultValue=${values?.contact_name}
              label="Name"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="contact_email"
              .defaultValue=${values?.contact_email}
              label="Email"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="contact_phone"
              .defaultValue=${values?.contact_phone}
              label="Phone"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="contact_mobile"
              .defaultValue=${values?.contact_mobile}
              label="Mobile"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select 
                .readonly=${readonly} 
                name="contact_title" 
                label="Title" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                .readonly=${readonly} 
                name="contact_department" 
                label="Department" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="contact_address"
              .defaultValue=${values?.contact_address}
              label="Address"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Account Manager" class="form-group">
          <defie-form-label label="Account Manager">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="acct_mgr_name"
              .defaultValue=${values?.acct_mgr_name}
              label="Name"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="acct_mgr_email"
              .defaultValue=${values?.acct_mgr_email}
              label="Email"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="acct_mgr_phone"
              .defaultValue=${values?.acct_mgr_phone}
              label="Phone"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="acct_mgr_mobile"
              .defaultValue=${values?.acct_mgr_mobile}
              label="Mobile"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select 
                .readonly=${readonly} 
                name="acct_mgr_title" 
                label="Title" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                .readonly=${readonly} 
                name="acct_mgr_department" 
                label="Department" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="acct_mgr_address"
              .defaultValue=${values?.acct_mgr_address}
              label="Address"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-line-wrapper">
        <div name="Receivable" class="form-group">
          <defie-form-label label="Receivable">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select 
                .categories=${categories.customerTermType} 
                .readonly=${readonly} 
                name="customer_term" 
                label="Term" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="effective_date"
                .defaultValue=${values?.effective_date}
                label="Effective date"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="customer_credit_limit"
              .defaultValue=${values?.customer_credit_limit}
              label="Credit Limit (USD)" 
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="reseller_permit"
                .defaultValue=${values?.reseller_permit}
                label="Reseller Permit"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="tax_district"
                .defaultValue=${values?.tax_district}
                label="Tax District"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="federal_tax_id"
              .defaultValue=${values?.federal_tax_id}
              label="Federal Tax
              ID" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="tax_rate"
              .defaultValue=${values?.tax_rate}
              label="Tax Rate
              %)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select .readonly=${readonly} name="tax_code" label="Tax Code" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-checkbox .readonly=${readonly} name="credit_hold" label="Credit Hold" .handler=${handleChange}>
              </defie-form-checkbox>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="credit_hold_reason"
              .defaultValue=${values?.credit_hold_reason}
              label="Credit Hold
              Reason" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-checkbox 
                .readonly=${readonly} 
                name="recurring_billing" 
                label="Recurring Billing" 
                .handler=${handleChange}>
              </defie-form-checkbox>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="recurring_date"
                .defaultValue=${values?.recurring_date}
                label="Recurring Date"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Accounts Receivable" class="form-group">
          <defie-form-label label="Accounts Receivable">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ar_name"
                .defaultValue=${values?.ar_name}
                label="AR Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ar_email"
                .defaultValue=${values?.ar_email}
                label="AR Email"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ar_title"
                .defaultValue=${values?.ar_title}
                label="AR Title"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ar_phone"
                .defaultValue=${values?.ar_phone}
                label="AR Phone"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="created_on"
                .defaultValue=${values?.created_on}
                label="Created On"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                .categories=${categories.statusType} 
                .readonly=${readonly} 
                name="status" 
                label="Status" 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="past_due"
              .defaultValue=${values?.past_due}
              label="Past-Due (USD)" 
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="open_credit"
              .defaultValue=${values?.open_credit}
              label="Open Credit (USD)" 
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="open_sales_orders"
              .defaultValue=${values?.open_sales_orders}
              label="Open Sales Order(USD)" 
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ytd_sales"
                .defaultValue=${values?.ytd_sales}
                label="YTD Sales (USD)" 
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="balance"
                .defaultValue=${values?.balance}
                label="Balance (USD)"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="last_invoice_date"
              .defaultValue=${values?.last_invoice_date}
              label="Last Invoice Date" 
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-line-wrapper">
        <div name="Banking" class="form-group">
          <defie-form-label label="Banking">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="bank1_name"
                .defaultValue=${values?.bank1_name}
                label="Bank Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="bank1_account_no"
                .defaultValue=${values?.bank1_accoun_no}
                label="Account No"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="bank1_route_no"
                .defaultValue=${values?.bank1_route_no}
                label="Route No"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
                name="bank1_swift_no"
                .defaultValue=${values?.bank1_swift_no}
                label="Swift No"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bank1_address"
              .defaultValue=${values?.bank1_address}
              label="Address"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="bank1_contact"
                .defaultValue=${values?.bank1_contact}
                label="Contact Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bank1_phone"
              .defaultValue=${values?.bank1_phone}
              label="Phone"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bank1_email"
              .defaultValue=${values?.bank1_email}
              label="Email"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="bank1_contact_title"
              .defaultValue=${values?.bank1_contact_title}
              label="Title"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Trade" class="form-group">
          <defie-form-label label="Trade">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="company_name"
                .defaultValue=${values?.company_name}
                label="Company Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
                name="account_id"
                .defaultValue=${values?.account_id}
                label="Account ID"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="address"
              .defaultValue=${values?.address}
              label="Address"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="contact"
              .defaultValue=${values?.contact}
              label="Contact"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="phone"
              .defaultValue=${values?.phone}
              label="Phone"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="email"
              .defaultValue=${values?.email}
              label="Email"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="title"
              .defaultValue=${values?.title}
              label="Title"
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select .categories=${categories.customerTermType} .readonly=${readonly} name="term" label="Term" .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              .readonly=${readonly}
              name="credit_limit"
              .defaultValue=${values?.credit_limit}
              label="Credit Limit (USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}