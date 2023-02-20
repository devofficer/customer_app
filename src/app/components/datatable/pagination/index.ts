import { LitElement, isServer } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./pagination-css.js";
import { template } from "./pagination-template.js";

@customElement('defie-datatable-pagination')
export class Template extends LitElement {
  static styles = styles;

  @property()
  totalItems: number = 0;

  @property()
  itemsPerPage: number = 25;

  @property()
  currentPage: number = 1;
  
  render() {
    return template({
      totalItems: this.totalItems,
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage
    });
  }
}