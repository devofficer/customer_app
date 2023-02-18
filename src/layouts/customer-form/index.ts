import { LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styles } from "./customer-form-css";
import { template } from "./customer-form-template";

@customElement('defie-customer-form')
export class CustomerForm extends LitElement {
  static styles = styles;

  @state()
  information = {
    credit_hold: false,
    credit_hold_reason: '',
  }

  render() {
    return template();
  }
}