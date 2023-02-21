import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "../customer-layout-css.js";
import { template } from "./customer-edit-template.js";
import { CustomerFormProps } from "../../customer-form/index.js";

@customElement('defie-customer-edit')
export class CustomerEdit extends LitElement {
  static styles = styles;

  @property() customer_id:string = "";

  render() {
    return template(this.customer_id);
  }
}