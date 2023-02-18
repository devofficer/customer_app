import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./pagination-css";
import { template } from "./pagination-template";

@customElement('defie-datatable-pagination')
export class Template extends LitElement {
  static styles = styles;

  @property()
  totalItems: number = 1500;

  @property()
  itemsPerPage: number = 10;

  @property()
  currentPage: number = 6;
  
  render() {
    return template({
      totalItems: this.totalItems,
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage
    });
  }
}