import { html } from "lit";
import '@material/web/button/filled-button';
import '@material/web/textfield/filled-text-field';
import '../../components/form-elements/form-textfield';
import '../../components/form-elements/form-checkbox';
import '../../components/form-elements/form-button';
import '../../components/form-elements/form-select';
import '../../components/form-elements/form-label';

export const template = () => {

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
              <defie-form-textfield name="textfield" label="Customer *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Attention *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Street *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="City *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="billing-state" label="State *" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Zip Code *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="billing-country" label="Country *" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Phone *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Domain *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Ship To" class="form-group">
          <defie-form-label label="Ship To">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Ship To*" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Reference *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Street *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="City *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="ship-state" label="State *" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Zip Code *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="ship-state" label="Country *" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Phone *" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="ship-state" label="Nexus *" .handler=${handleChange}>
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
              <defie-form-textfield name="textfield" label="Name" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Email" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Phone" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Mobile" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select name="billing-state" label="Title" .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="billing-state" label="Department" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Address" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Account Manager" class="form-group">
          <defie-form-label label="Account Manager">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Name" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Email" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Phone" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Mobile" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select name="ship-state" label="Title" .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="ship-state" label="Department" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Address" .handler=${handleChange}>
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
              <defie-form-select name="billing-state" label="Term" .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Effective date" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Credit Limit(USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Reseller Permit" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Tax District" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Federal Tax ID" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Tax Rate(%)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="billing-state" label="Tax Code" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-checkbox name="credit_hold" label="Credit Hold" .handler=${handleChange}>
              </defie-form-checkbox>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Credit Hold Reason" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-checkbox name="recurring_billing" label="Recurring Billing" .handler=${handleChange}>
              </defie-form-checkbox>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Recurring Date" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Accounts Receivable" class="form-group">
          <defie-form-label label="Accounts Receivable">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="AR Name" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="AR Email" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="AR Title" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="AR Phone" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Created On" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-select name="ship-state" label="Status" .handler=${handleChange}>
              </defie-form-select>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Past-Due(USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Open Credit(USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Oopen Sales Order(USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="YTD Sales(USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Balance (USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Last Invoice Date" .handler=${handleChange}>
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
              <defie-form-textfield name="textfield" label="Bank Name" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Account No" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Route No" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Swift No" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Address" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Contact Name" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Phone" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Email" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Title" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
        <div name="Trade" class="form-group">
          <defie-form-label label="Trade">
          </defie-form-label>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Company Name" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Account ID" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
    
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Address" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Contact" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Phone" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Email" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Title" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
          <div class="form-line">
            <div class="form-item-wrapper">
              <defie-form-select name="ship-state" label="Term" .handler=${handleChange}>
              </defie-form-select>
            </div>
            <div class="form-item-wrapper">
              <defie-form-textfield name="textfield" label="Credit Limit(USD)" .handler=${handleChange}>
              </defie-form-textfield>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}