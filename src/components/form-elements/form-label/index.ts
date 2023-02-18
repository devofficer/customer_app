import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./form-label-css.js";
import { template } from "./form-label-template.js";

@customElement('defie-form-label')
export class FormLabel extends LitElement {
  static styles = styles;

  @property()
  label:string = '';

  render() {
    return template({label: this.label});
  }
}