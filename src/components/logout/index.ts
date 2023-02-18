import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./logout-css.js";
import { template } from "./logout-template.js";

@customElement('defie-logout')
export class Logout extends LitElement {
  static styles = styles;
  
  render() {
    return template();
  }
}
