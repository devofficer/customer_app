import { html } from "lit";

interface CheckBoxProps {
  name: string;
  label: string;
  readonly: boolean;
  defaultValue: string;
  handler: (event: Event) => void;
}

export const template = (props: CheckBoxProps) => {
  return html`
    <div class="form-item-element">
      <span class="form-item-label">${props.label}</span>
      <div class="input-wrapper">
        <input ?readonly=${props.readonly} class="form-input" name="${props.name}" value=${props.defaultValue} @change=${props.handler} />
      </div>
    </div>
  `;
}