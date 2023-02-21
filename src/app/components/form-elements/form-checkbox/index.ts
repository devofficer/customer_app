import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "../form-elements-css.js";
import { template } from "./form-checkbox-template.js";

@customElement('defie-form-checkbox')
export class CheckBox extends LitElement {
  static styles = styles;

  @property()
  name: string = '';

  @property()
  label: string = '';

  @property()
  readonly: boolean = false;

  @property()
  handler!: (name: string, value: boolean) => void;

  @property()
  checked: boolean = false;

  handleChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.handler(element.name, element.checked);
  }

  render() {
    return template({
      name: this.name,
      label: this.label,
      readonly: this.readonly,
      handler: this.handleChange,
      checked: this.checked
    });
  }
}