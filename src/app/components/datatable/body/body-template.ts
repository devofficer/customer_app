import { html, isServer } from "lit";
import { TableItemProps, TableItemRenderer } from "./index.js";
import { TableHeaderProps } from "../header/index.js";

interface TableBodyProps {
  headers: TableHeaderProps[],
  items: TableItemProps[],
  renderers: TableItemRenderer
}

export const template = ({ headers, items, renderers }: TableBodyProps) => {
  return html`
    ${isServer && items.map((item) => {
      return html`
        <div class="body-wrapper">
        ${headers.map((header) => {
          let dataIndex = header.dataIndex;
          const renderIndex = header.dataIndex;
          if(dataIndex === 'edit')
            dataIndex = 'customer_id';
          const cellValue = item[dataIndex as keyof TableItemProps];
          const renderer = renderers[renderIndex as keyof TableItemRenderer];
          if(header.width)
            return html`<span class="body-item" style="width: ${header.width}px">
              ${renderer ? renderer(cellValue) : cellValue}
            </span>`
          return html`<span class="body-item hidden-${header.hidden} flex-${header.flex}">
            ${renderer ? renderer(cellValue) : cellValue}
          </span>`
        })}
        </div>
      `
    })}
  `;
}