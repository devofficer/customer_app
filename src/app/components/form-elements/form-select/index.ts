import { LitElement } from "lit";
import { customElement, eventOptions, property } from "lit/decorators.js";
import { styles } from "../form-elements-css.js";
import { template } from "./form-select-template.js";

@customElement('defie-form-select')
export class SelectBox extends LitElement {
  static styles = styles;

  @property()
  name: string = '';

  @property()
  label: string = '';

  @property()
  readonly: boolean = true;

  @property()
  handler!: (name: string, value: string) => void; 

  @property()
  categories: any = {};

  @property()
  defaultValue: string = '';

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
      categories: this.categories,
      defaultValue: this.defaultValue
    });
  }
}