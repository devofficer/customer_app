import { html } from "lit";
import { TableHeaderProps } from "./header/index.js";
import { TableItemRenderer } from "./body/index.js";
import "./filters/index.js";
import "./pagination/index.js";
import "./header/index.js";
import "./body/index.js";

const headers: TableHeaderProps[] = [
  { title: 'Edit', dataIndex: 'edit', flex: 1 },
  { title: 'Customer ID', dataIndex: 'customer_id', flex: 3 },
  { title: 'Customer', flex: 2, dataIndex: 'customer', hidden: 'sm' },
  { title: 'City', flex: 1, dataIndex: 'city', hidden: 'md' },
  { title: 'Country', flex: 1, dataIndex: 'country', hidden: 'md' },
  { title: 'Phone', flex: 2, dataIndex: 'phone', hidden: 'sm' },
  { title: 'Contact', flex: 2, dataIndex: 'contact', hidden: 'sm' },
  { title: 'Email', flex: 4, dataIndex: 'email' }
];

export const template = (customers: any) => {
  const renderers: TableItemRenderer = {
    edit: (cellValue: string) => {
      return html`<img class="icon-button" src="./assets/buttons/edit.png" alt="${cellValue}"/>`
    },
    customer_id: (cellValue: string) => {
      return html`<a class="link-button">${cellValue}</a>`
    }
  }

  return html`
    <div>
      <defie-datatable-filter>
      </defie-datatable-filter>
      <defie-datatable-pagination 
        .totalItems=${customers.totalItems} 
        .currentPage=${customers.currentPage} 
        .itemsPerPage=${customers.itemsPerPage}>
      </defie-datatable-pagination>
      <defie-datatable-header 
        .headers=${headers}>
      </defie-datatable-header>
      <defie-datatable-body 
        .headers=${headers} 
        .items=${customers.data} 
        .renderers=${renderers}>
      </defie-datatable-body>
    </div>
  `;
}