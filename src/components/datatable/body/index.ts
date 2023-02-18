import { LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./body-css";
import { template } from "./body-template";
import { TableHeaderProps } from "../header";

export interface TableItemProps {
  [key: string]: string
}

export interface TableItemRenderer {
  [key: string]: (cellValue: string) => TemplateResult;
}

@customElement('defie-datatable-body')
export class Template extends LitElement {
  static styles = styles;
  
  @property()
  headers: TableHeaderProps[] =[]

  @property()
  items: TableItemProps[] = []

  @property()
  renderers: TableItemRenderer = {}
  
  render() {
    return template({
      headers: this.headers,
      items: this.items,
      renderers: this.renderers
    });
  }
}