import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "../customer-form-container-module.js";
import { template } from "./customer-form-footer-template.js";

@customElement('defie-form-footer')
export class CustomerFormFooter extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}