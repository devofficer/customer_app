import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./form-button-css.js";
import { template } from "./form-button-template.js";

@customElement('defie-form-button')
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