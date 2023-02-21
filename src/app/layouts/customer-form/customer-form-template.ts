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
                name="customer"
                label="Customer *"
                .readonly=${readonly}
                .defaultValue=${values.customer}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="attention"
                label="Attention *"
                .readonly=${readonly}
                .defaultValue=${values?.attention}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                label="Street *"
                name="bill_to_street"
                .readonly=${readonly}
                .defaultValue=${values?.bill_to_street}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                label="City *"
                name="bill_to_city"
                .readonly=${readonly}
                .defaultValue=${values?.bill_to_city}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                label="State *" 
                name="bill_to_state" 
                .readonly=${readonly} 
                .defaultValue=${values.bill_to_state}
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                label="Zip Code*" 
                name="bill_to_zip_code"
                .readonly=${readonly}
                .defaultValue=${values?.bill_to_zip_code}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                name="bill_to_country" 
                label="Country *" 
                .readonly=${readonly} 
                .defaultValue=${values.bill_to_country}
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bill_to_phone"
                label="Phone *"
                .readonly=${readonly}
                .defaultValue=${values?.bill_to_phone}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="domain"
                label="Domain *"
                .readonly=${readonly}
                .defaultValue=${values?.domain}
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
                name="ship_to"
                label="Ship To"
                .readonly=${readonly}
                .defaultValue=${values?.ship_to}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="reference"
                label="Reference *"
                .readonly=${readonly}
                .defaultValue=${values?.reference}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                label="Street *"
                name="ship_to_street"
                .readonly=${readonly}
                .defaultValue=${values?.ship_to_street}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                label="City *"
                name="ship_to_city"
                .readonly=${readonly}
                .defaultValue=${values?.ship_to_city}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                label="State *" 
                name="ship_to_state" 
                .readonly=${readonly} 
                .defaultValue=${values.ship_to_state}
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                label="Zip Code*" 
                name="ship_to_zip_code"
                .readonly=${readonly}
                .defaultValue=${values?.ship_to_zip_code}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                label="Country *" 
                name="ship_to_country" 
                .defaultValue=${values?.ship_to_country}
                .readonly=${readonly} 
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
                name="nexus" 
                label="Nexus *" 
                .defaultValue=${values?.nexus}
                .readonly=${readonly} 
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
                label="Name"
                name="contact_name"
                .readonly=${readonly}
                .defaultValue=${values?.contact_name}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Email"
              name="contact_email"
              .readonly=${readonly}
              .defaultValue=${values?.contact_email}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Phone"
              name="contact_phone"
              .readonly=${readonly}
              .defaultValue=${values?.contact_phone}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Mobile"
              name="contact_mobile"
              .readonly=${readonly}
              .defaultValue=${values?.contact_mobile}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select 
                label="Title" 
                name="contact_title" 
                .defaultValue=${values?.contact_title}
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                label="Department" 
                name="contact_department" 
                .defaultValue=${values?.contact_department}
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Address"
              name="contact_address"
              .readonly=${readonly}
              .defaultValue=${values?.contact_address}
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
              label="Name"
              name="acct_mgr_name"
              .readonly=${readonly}
              .defaultValue=${values?.acct_mgr_name}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Email"
              name="acct_mgr_email"
              .readonly=${readonly}
              .defaultValue=${values?.acct_mgr_email}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Phone"
              name="acct_mgr_phone"
              .readonly=${readonly}
              .defaultValue=${values?.acct_mgr_phone}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Mobile"
              name="acct_mgr_mobile"
              .readonly=${readonly}
              .defaultValue=${values?.acct_mgr_mobile}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select 
                label="Title" 
                name="acct_mgr_title" 
                .defalutValue=${values?.acct_mgr_title}
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                label="Department" 
                name="acct_mgr_department" 
                .defaultValue=${values?.acct_mgr_department}
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Address"
              name="acct_mgr_address"
              .readonly=${readonly}
              .defaultValue=${values?.acct_mgr_address}
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
                label="Term" 
                name="customer_term" 
                .categories=${categories.customerTermType} 
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="effective_date"
                label="Effective date"
                .readonly=${readonly}
                .defaultValue=${values?.effective_date}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
              label="Credit Limit (USD)" 
              name="customer_credit_limit"
              .readonly=${readonly}
              .defaultValue=${values?.customer_credit_limit}
              .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="reseller_permit"
                label="Reseller Permit"
                .readonly=${readonly}
                .defaultValue=${values?.reseller_permit}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="tax_district"
                label="Tax District"
                .readonly=${readonly}
                .defaultValue=${values?.tax_district}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="federal_tax_id"
                label="Federal Tax ID"
                .readonly=${readonly}
                .defaultValue=${values?.federal_tax_id}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="tax_rate"
                label="Tax Rate (%)"
                .readonly=${readonly}
                .defaultValue=${values?.tax_rate}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                label="Tax Code" 
                name="tax_code" 
                .readonly=${readonly}
                .defaultValue=${values?.tax_code}
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-checkbox 
                name="credit_hold" 
                label="Credit Hold" 
                .readonly=${readonly} 
                .checked=${values?.credit_hold} 
                .handler=${handleChange}>
              </defie-form-checkbox>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="credit_hold_reason"
                label="Credit Hold Reason" 
                .readonly=${readonly}
                .defaultValue=${values?.credit_hold_reason}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-checkbox 
                name="recurring_billing" 
                label="Recurring Billing" 
                .checked=${values?.recurring_billing}
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-checkbox>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="recurring_date"
                label="Recurring Date"
                .readonly=${readonly}
                .defaultValue=${values?.recurring_date}
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
                name="ar_name"
                label="AR Name"
                .readonly=${readonly}
                .defaultValue=${values?.ar_name}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="ar_email"
                label="AR Email"
                .readonly=${readonly}
                .defaultValue=${values?.ar_email}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="ar_title"
                label="AR Title"
                .readonly=${readonly}
                .defaultValue=${values?.ar_title}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="ar_phone"
                label="AR Phone"
                .readonly=${readonly}
                .defaultValue=${values?.ar_phone}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="created_on"
                label="Created On"
                .readonly=${readonly}
                .defaultValue=${values?.created_on}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select 
                name="status" 
                label="Status" 
                .categories=${categories.statusType} 
                .defaultValue=${values.status}
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="past_due"
                label="Past-Due (USD)" 
                .readonly=${readonly}
                .defaultValue=${values?.past_due}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="open_credit"
                label="Open Credit (USD)" 
                .readonly=${readonly}
                .defaultValue=${values?.open_credit}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="open_sales_orders"
                label="Open Sales Order(USD)" 
                .readonly=${readonly}
                .defaultValue=${values?.open_sales_orders}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="ytd_sales"
                label="YTD Sales (USD)" 
                .readonly=${readonly}
                .defaultValue=${values?.ytd_sales}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="balance"
                label="Balance (USD)"
                .readonly=${readonly}
                .defaultValue=${values?.balance}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="last_invoice_date"
                label="Last Invoice Date" 
                .readonly=${readonly}
                .defaultValue=${values?.last_invoice_date}
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
                name="bank1_name"
                label="Bank Name"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_name}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_account_no"
                label="Account No"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_accoun_no}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_route_no"
                label="Route No"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_route_no}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_swift_no"
                label="Swift No"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_swift_no}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_address"
                label="Address"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_address}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_contact"
                label="Contact Name"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_contact}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_phone"
                label="Phone"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_phone}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_email"
                label="Email"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_email}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="bank1_contact_title"
                label="Title"
                .readonly=${readonly}
                .defaultValue=${values?.bank1_contact_title}
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
                name="company_name"
                label="Company Name"
                .readonly=${readonly}
                .defaultValue=${values?.company_name}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="account_id"
                label="Account ID"
                .readonly=${readonly}
                .defaultValue=${values?.account_id}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="address"
                label="Address"
                .readonly=${readonly}
                .defaultValue=${values?.address}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="contact"
                label="Contact"
                .readonly=${readonly}
                .defaultValue=${values?.contact}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="phone"
                label="Phone"
                .readonly=${readonly}
                .defaultValue=${values?.phone}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="email"
                label="Email"
                .readonly=${readonly}
                .defaultValue=${values?.email}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="title"
                label="Title"
                .readonly=${readonly}
                .defaultValue=${values?.title}
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select 
                name="term" 
                label="Term" 
                .defaultValue=${values?.term}
                .categories=${categories.customerTermType} 
                .readonly=${readonly} 
                .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                name="credit_limit"
                label="Credit Limit (USD)" 
                .handler=${handleChange}
                .readonly=${readonly}
                .defaultValue=${values?.credit_limit}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}