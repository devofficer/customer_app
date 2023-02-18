import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./datatable-css";
import { template } from "./datatable-template";

@customElement('defie-datatable')
export class Template extends LitElement {
  static styles = styles;
  
  render() {
    return template();
  }
}