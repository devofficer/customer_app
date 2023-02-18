import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./logo-css.js";
import { template } from "./logo-template.js";

@customElement('defie-logo')
export class Logo extends LitElement {
  static styles = styles;

  render() {
    return template();
  }
}