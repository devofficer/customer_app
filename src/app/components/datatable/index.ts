import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./datatable-css.js";
import { template } from "./datatable-template.js";
import { CustomersProps } from "../../types/types.js";

@customElement('defie-datatable')
export class Template extends LitElement {
  static styles = styles;

  @property()
  customers?: CustomersProps;
  
  render() {
    return template(this.customers);
  }
}