import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./datatable-css.js";
import { template } from "./datatable-template.js";

@customElement('defie-datatable')
export class Template extends LitElement {
  static styles = styles;
  
  render() {
    return template();
  }
}