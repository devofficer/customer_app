import { LitElement, isServer } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./item-css.js";
import { template } from "./item-template.js";
import { generateQueryUrl } from "../../../../utils/index.js";

@customElement('defie-datatable-pagination-item')
export class Template extends LitElement {
  static styles = styles;

  constructor() {
    super();
    if(!isServer)
      this.addEventListener('click', this.handlePageChange);
  }

  handlePageChange(event: Event) {
    const element = event.target as HTMLSpanElement;
    const page = element.getAttribute('data-page');
    generateQueryUrl({ page: page });
  }
  
  render() {
    return template();
  }
}