import { html } from "lit";

interface CheckBoxProps {
  name: string
  label: string
  readonly: boolean
  checked: boolean
  handler: (event: Event) => void;
}

export const template = (props: CheckBoxProps) => {
  return html`
    <div class="form-item-element">
      <span class="form-item-label">${props.label}</span>
      <div class="input-wrapper">
        <input ?disabled=${props.readonly} ?checked=${props.checked} type="checkbox" class="form-checkbox" name="${props.name}" @change=${props.handler} />
      </div>
    </div>
  `;
}