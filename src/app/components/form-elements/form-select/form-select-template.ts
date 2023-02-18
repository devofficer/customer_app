import { html } from "lit";

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
        ${
          props.readonly ? 
          html`<input ?readonly=${props.readonly} class="form-input" name="${props.name}" @change=${props.handler} />` : 
          html`<div class="select-wrapper">
              <select @change=${props.handler} name="${props.name}" class="form-select">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
              </select>
            </div>
          `
        }
      </div>
    </div>
  `;
}