import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./[template]-css";
import { template } from "./[template]-template";

@customElement('defie-template')
export class Template extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}