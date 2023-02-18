import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./panel-header-css";
import { template } from "./panel-header-template";

@customElement('defie-template')
export class Template extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}