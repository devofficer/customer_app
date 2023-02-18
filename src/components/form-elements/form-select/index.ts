import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "../form-elements-css";
import { template } from "./form-select-template";

@customElement('defie-form-select')
export class CheckBox extends LitElement {
  static styles = styles;

  @property()
  name: string = '';

  @property()
  label: string = '';

  @property()
  readonly: boolean = true;

  @property()
  handler!: (name: string, value: string) => void; 

  handleChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.handler(element.name, element.value);
  }

  render() {
  return template({
      name: this.name,
      label: this.label,
      readonly: this.readonly,
      handler: this.handleChange,
    });
  }
}