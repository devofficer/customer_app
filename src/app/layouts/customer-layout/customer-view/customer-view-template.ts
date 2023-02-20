import { html } from "lit";
import "../../customer-form-container/customer-form-header/index.js";
import "../../customer-form-container/customer-form-footer/index.js";
import "../../../components/form-elements/form-button/index.js";

export const template = () => {
  const handleClick = () => {
    location.href = "/create";
  }

  return html`
    <div class="create-panel-container">
      <div class="panel">
        <defie-form-header>
          <div slot="desc">
            <span>CustomerId: 123123123</span>
            <span>Date: 03/31/2022</span>
          </div>
        </defie-form-header>
        <div class="panel-body">
          <slot></slot>
        </div>
      </div>
    </div>
  `;
}