import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./nav-link-css.js";
import { template } from "./nav-link-template.js";

@customElement('defie-nav-link')
export class Template extends LitElement {
  static styles = styles;

  @property()
  label: string = "";
  
  @property()
  link: string = "";

  @property()
  active?: boolean;

  render() {
    console.log('nav-link');
    return template({
      label: this.label,
      link: this.link,
      active: this.active
    });
  }
}