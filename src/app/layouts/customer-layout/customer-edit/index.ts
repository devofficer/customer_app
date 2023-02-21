import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "../customer-layout-css.js";
import { template } from "./customer-edit-template.js";

@customElement('defie-customer-edit')
export class CustomerEdit extends LitElement {
  static styles = styles;

  @property() customer_id:string = "";
  @property() handleSave!:() => void;

  render() {
    return template({
      customer_id: this.customer_id,
      handleSave: this.handleSave
    });
  }
}