import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { template } from "./profile-template.js";
import { styles } from './profile-css.js';

@customElement('defie-profile')
export class Profile extends LitElement {
  static styles = styles;

  @property()
  id: string = '';

  render() {
    return template({ id: this.id });
  }
}