import { LitElement, isServer } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./customer-form-css.js";
import { template } from "./customer-form-template.js";

export interface CustomerFormProps {
 [key:string]: string | boolean
}

@customElement('defie-customer-form')
export class CustomerForm extends LitElement {
  static styles = styles;

  @property() readonly: boolean = false; 
  @property() categories: any = {};
  @property() handleChange!: (name: string, value: string) => void;
  
  render() {
    return template({
      readonly: this.readonly,
      categories: this.categories,
      handler: this.handleChange,
    });
  }
}