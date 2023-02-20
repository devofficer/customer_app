import { LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./customer-form-css.js";
import { template } from "./customer-form-template.js";

@customElement('defie-customer-form')
export class CustomerForm extends LitElement {
  static styles = styles;

  @state()
  information = {
    credit_hold: false,
    credit_hold_reason: '',
  }

  @property() readonly: boolean = false; 
  @property() categories: any = {};

  render() {
    return template(this.readonly, this.categories);
  }
}