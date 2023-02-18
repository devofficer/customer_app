import { html } from 'lit';

export const template = () => {
  return html`
    <div class="wrapper">
      <md-filled-button trailingIcon label="Logout" @click=${() => console.log('abc')}></md-filled-button>
    </div>
  `;
}