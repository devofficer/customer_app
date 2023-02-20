import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "../customer-layout-css.js";
import { template } from "./customer-list-template.js";

@customElement('defie-customer-list')
export class CustomerView extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}