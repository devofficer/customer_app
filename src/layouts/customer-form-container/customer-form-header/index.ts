import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "../customer-form-container-module";
import { template } from "./customer-form-header-template";

@customElement('defie-form-header')
export class CustomerFormHeader extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}