import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "../customer-layout-css.js";
import { template } from "./customer-view-template.js";
import { CustomerFormProps } from "../../customer-form/index.js";

@customElement('defie-customer-view')
export class CustomerView extends LitElement {
  static styles = styles;

  @property() customer_id:string = "";

  render() {
    return template(this.customer_id);
  }
}