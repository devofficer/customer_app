import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "../customer-form-container-module";
import { template } from "./customer-form-footer-template";

@customElement('defie-form-footer')
export class CustomerFormFooter extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}