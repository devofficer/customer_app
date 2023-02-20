import { html } from "lit";
import '../../components/form-elements/form-textfield/index.js';
import '../../components/form-elements/form-checkbox/index.js';
import '../../components/form-elements/form-button/index.js';
import '../../components/form-elements/form-select/index.js';
import '../../components/form-elements/form-label/index.js';

export const template = (readonly: boolean, categories: any) => {

  const handleChange = (name: string, value: string) => {
    console.log(name, ' ', value);
  }

  const handleClick = () => {
    alert('click');
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
               label="Customer *"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="attention"
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
               label="Zip Code
               *" .handler=${handleChange}>
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
               label="Phone *"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="domain"
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
               label="Ship To
               " .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="reference"
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
               label="Zip Code
               *" .handler=${handleChange}>
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
               label="Name"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="contact_email"
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
               label="Phone"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="contact_mobile"
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
               label="Name"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="acct_mgr_email"
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
               label="Phone"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="acct_mgr_mobile"
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
               label="Credit Limit (USD)" 
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="reseller_permit"
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
                label="Tax District"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="federal_tax_id"
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
                label="AR Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ar_email"
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
                label="AR Title"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ar_phone"
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
               label="Past-Due (USD)" 
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="open_credit"
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
               label="Open Sales Order(USD)" 
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="ytd_sales"
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
                label="Balance (USD)"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="last_invoice_date"
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
                label="Bank Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name="bank1_account_no"
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
                label="Route No"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
                name="bank1_swift_no"
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
               label="Address"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield
                .readonly=${readonly}
                name=" bank1_contact"
                label="Contact Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="bank1_phone"
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
               label="Email"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="bank1_contact_title"
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
                label="Company Name"
                .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
                name="account_id"
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
               label="Contact"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="phone"
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
               label="Email"
               .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield
               .readonly=${readonly}
               name="title"
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
               label="Credit Limit (USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}