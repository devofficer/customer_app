import { html } from "lit";
import { TableHeaderProps } from "./index.js";

export const template = (headers: TableHeaderProps[]) => {
  return html`
    <div class="header-wrapper">
      ${headers.map((header) => {
        if(header.width)
          return html`<span class="header-item" style="width: ${header.width}px">${header.title}</span>`
        return html`<span class="header-item hidden-${header.hidden} flex-${header.flex}">${header.title}</span>`
      })}
    </div>
  `;
}