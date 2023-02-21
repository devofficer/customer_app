import { html } from "lit";
import "../../customer-form-container/customer-form-header/index.js";
import "../../customer-form-container/customer-form-footer/index.js";
import "../../../components/form-elements/form-button/index.js";

interface CustomerEditProps {
  customer_id: string
  handleSave: () => void
}

export const template = ({customer_id, handleSave}: CustomerEditProps) => {
  return html`
    <div class="create-panel-container">
      <div class="panel">
        <defie-form-header>
          <defie-form-button slot="action" .handler=${handleSave}>
            <span>Save</span>
          </defie-form-button>
          <div slot="desc">
            <span>CustomerId: </span>
            <span>${customer_id}</span>
          </div>
        </defie-form-header>
        <div class="panel-body">
          <slot></slot>
        </div>
        <defie-form-footer>
          <defie-form-button .handler=${handleSave}>
            <span>Save</span>
          </defie-form-button>
        </defie-form-footer>
      </div>
    </div>
  `;
}