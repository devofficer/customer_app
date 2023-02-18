import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "../customer-layout-css.js";
import { template } from "./customer-view-template.js";

@customElement('defie-customer-view')
export class CustomerView extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}