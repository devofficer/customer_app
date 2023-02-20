import { html } from "lit";

export const template = () => {
  return html`
     <span class="pagination-item"><slot></slot></span>
  `;
}