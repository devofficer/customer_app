import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "../customer-layout-css";
import { template } from "./customer-view-template";

@customElement('defie-customer-view')
export class CustomerView extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}