import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./image-button-css";
import { template } from "./image-button-template";

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