import { html } from 'lit';

interface NavbarProps {
  id: string
}

export const template = (props : NavbarProps) => {
  return html`<p>${props.id}</p>`;
}