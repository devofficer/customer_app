import { html } from "lit";

export const template = () => {
  return html`
    <div class="panel-header">
      <div class="panel-header-item">
        <div></div>
        <slot></slot>
      </div>
    </div>
  `;
}