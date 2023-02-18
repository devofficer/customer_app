import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./header-css.js";
import { template } from "./header-template.js";

export interface TableHeaderProps {
  title: string
  width?: number
  flex?: number
  dataIndex?: string
  hidden?: "xs" | "sm" | "md"
}

@customElement('defie-datatable-header')
export class Template extends LitElement {
  static styles = styles;

  @property()
  headers: TableHeaderProps[] = []
  
  render() {
    return template(this.headers);
  }
}