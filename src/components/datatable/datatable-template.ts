import { html } from "lit";
import { TableHeaderProps } from "./header";
import { TableItemProps, TableItemRenderer } from "./body";
import "./filters";
import "./pagination";
import "./header";
import "./body";

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

const items: TableItemProps[] = [
  { edit: 'edit', customer_id: 'e0i88gix-asz..', customer: 'Intel Corp.', city: 'Santa Clara', country: 'USA', phone: '408 237 4455', contact: 'Lisa Hammer', email: 'lisa@intel.com' },
  { edit: 'edit', customer_id: '874nkgyn-ad1...', customer: 'Linear Technology', city: 'Fremont', country: 'USA', phone: '510 748 5511', contact: 'Julie Patterson', email: 'july@linear.com' },
  { edit: 'edit', customer_id: 'hb9dk6bs-9fn...', customer: 'Neutophonics', city: 'San Jose', country: 'USA', phone: '408 999 4545', contact: 'Jon M.', email: 'jon@neutophonics.co' },
  { edit: 'edit', customer_id: '50j35uq7-1j3...', customer: 'ABC', city: 'Fremont', country: 'USA', phone: '510 599 4500', contact: 'Todd K', email: 'todd@abc.com' },
  { edit: 'edit', customer_id: 'ickqorv5-jd8...', customer: 'Anda', city: 'Fremont', country: 'USA', phone: '510 222 7777', contact: 'Lily Scott', email: 'lily@anda.com' },
];

export const template = () => {
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
      <defie-datatable-pagination>
      </defie-datatable-pagination>
      <defie-datatable-header 
        .headers=${headers}>
      </defie-datatable-header>
      <defie-datatable-body 
        .headers=${headers} 
        .items=${items} 
        .renderers=${renderers}>
      </defie-datatable-body>
      <defie-datatable-pagination>
      </defie-datatable-pagination>
    </div>
  `;
}