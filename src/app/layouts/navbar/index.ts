import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { template } from "./navbar-template.js";
import { styles } from "./navbar-styles.js";

@customElement("defie-navbar")
export class Navbar extends LitElement {
  static styles = styles;

  @property()
  id: string = '';

  @property()
  active: string = 'view';

  render() {
    return template({
      active: this.active,
      id: this.id
    });
  }
}