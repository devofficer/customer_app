import { html, isServer } from "lit";

interface CheckBoxProps {
  name: string;
  label: string;
  readonly: boolean;
  categories: any;
  defaultValue: string;
  handler: (event: Event) => void;
}

export const template = (props: CheckBoxProps) => {
  return html`
    <div class="form-item-element">
      <span class="form-item-label">${props.label}</span>
      <div class="input-wrapper">
        ${
          props.readonly ? 
          html`<input ?readonly=${props.readonly} value=${props.defaultValue} class="form-input" name="${props.name}" @change=${props.handler} />` : 
          html`<div class="select-wrapper">
              <select @change=${props.handler} name="${props.name}" class="form-select">
              <option value=""></option>
                ${isServer && Object.keys(props.categories ? props.categories : {}).map((key:any) => {
                  return html`<option ?selected=${props.categories[key] === props.defaultValue} value=${props.categories[key]}>${key}</option>`
                })}
              </select>
            </div>
          `
        }
      </div>
    </div>
  `;
}