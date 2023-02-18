import { html } from "lit";
import '@material/web/textfield/filled-text-field'

interface CheckBoxProps {
  name: string;
  label: string;
  readonly: boolean;
  handler: (event: Event) => void;
}

export const template = (props: CheckBoxProps) => {
  return html`
    <div class="form-item-element">
      <span class="form-item-label">${props.label}</span>
      <div class="input-wrapper">
        <input ?readonly=${props.readonly} class="form-input" name="${props.name}" @change=${props.handler} />
      </div>
    </div>
  `;
}