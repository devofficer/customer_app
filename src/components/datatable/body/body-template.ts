import { html } from "lit";
import { TableItemProps, TableItemRenderer } from ".";
import { TableHeaderProps } from "../header";

interface TableBodyProps {
  headers: TableHeaderProps[],
  items: TableItemProps[],
  renderers: TableItemRenderer
}

export const template = ({ headers, items, renderers }: TableBodyProps) => {
  console.log(items);
  return html`
    ${items.map((item) => {
      return html`
        <div class="body-wrapper">
        ${headers.map((header) => {
          const dataIndex = header.dataIndex;
          const cellValue = item[dataIndex as keyof TableItemProps];
          const renderer = renderers[dataIndex as keyof TableItemRenderer];



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