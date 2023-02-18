import { html } from "lit";

interface LabelProps {
  label: string;
}

export const template = (props: LabelProps) => {
  return html`
    <div class="form-label-wrapper">
      <span>${props.label}</span>
    </div>
  `;
}