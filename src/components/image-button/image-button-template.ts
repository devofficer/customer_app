import { html } from "lit";

interface ButtonProps {
  handler: () => void;
}

export const template = (props: ButtonProps) => {
  return html`
    <button @click=${props.handler} class="img-button">
      <slot></slot>
    </button>
  `;
}