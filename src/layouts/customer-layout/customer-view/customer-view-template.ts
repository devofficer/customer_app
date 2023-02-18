import { html } from "lit";
import "../../customer-form-container/customer-form-header/index.js";
import "../../customer-form-container/customer-form-footer/index.js";
import "../../../components/image-button/index.js";

export const template = () => {
  const handleClick = () => {

  }

  return html`
    <div class="create-panel-container">
      <div class="panel">
        <defie-form-header>
          <defie-form-button .handler=${handleClick}>
            <span>New</span>
          </defie-form-button>
        </defie-form-header>
        <div class="panel-body">
          <slot></slot>
        </div>
        <defie-form-footer>
          <defie-form-button .handler=${handleClick}>
            <span>New</span>
          </defie-form-button>
        </defie-form-footer>
      </div>
    </div>
  `;
}