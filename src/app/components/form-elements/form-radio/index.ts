import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "../form-elements-css.js";
import { template } from "./form-radio-template.js";

@customElement('defie-form-radio')
export class Radio extends LitElement {
  static styles = styles;

  @property()
  id: string = '';

  @property()
  name: string = '';

  @property()
  label: string = '';

  @property()
  value: string = '';

  @property()
  checked: boolean = false;

  @property()
  readonly: boolean = true;

  @property()
  handler!: (event: Event) => void;

  handleChange(event: Event) {
    this.handler(event);
  }

  render() {
    return template({
      id: this.id,
      name: this.name,
      label: this.label,
      value: this.value,
      checked: this.checked,
      readonly: this.readonly,
      handler: this.handleChange,
    });
  }
}