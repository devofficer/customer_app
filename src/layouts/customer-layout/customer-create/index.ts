import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "../customer-layout-css.js";
import { template } from "./customer-create-template.js";

@customElement('defie-customer-create')
export class CustomerCreate extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}