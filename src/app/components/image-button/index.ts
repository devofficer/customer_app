import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./image-button-css.js";
import { template } from "./image-button-template.js";

@customElement('defie-image-button')
export class Template extends LitElement {
  static styles = styles;

  @property()
  handler!: () => void;

  render() {
    return template({
      handler: this.handler
    });
  }
}