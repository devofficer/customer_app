import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./filters-css";
import { template } from "./filters-template";

@customElement('defie-datatable-filter')
export class Template extends LitElement {
  static styles = styles;
  
  render() {
    return template();
  }
}