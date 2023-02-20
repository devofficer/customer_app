import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./filters-css.js";
import { template } from "./filters-template.js";

@customElement('defie-datatable-filter')
export class Template extends LitElement {
  static styles = styles;
  
  @property() type:string = "";
  @property() keyword: string = "";

  render() {
    return template({
      type: this.type,
      keyword: this.keyword
    });
  }
}