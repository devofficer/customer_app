import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { template } from "./navbar-template";
import { styles } from "./navbar-styles";

@customElement("defie-navbar")
export class Navbar extends LitElement {
  static styles = styles;

  @property()
  id: string = '';

  render() {
    return template({
      id: this.id
    });
  }
}