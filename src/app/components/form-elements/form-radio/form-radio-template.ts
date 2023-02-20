import { html } from "lit";

interface CheckBoxProps {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
  readonly: boolean;
  handler: (event: Event) => void;
}

export const template = (props: CheckBoxProps) => {
  return html`
    <div>
      ${
        props.checked ? 
        html`<input class="form-radio" type="radio" checked id=${props.id} name=${props.name} value=${props.value} @change=${props.handler}/>` :
        html`<input class="form-radio" type="radio" id=${props.id} name=${props.name} value=${props.value} @change=${props.handler}/>`
      }
      ${
        props.checked ? 
        html`<label class="form-radios" for=${props.id}>${props.label}</label>` :
        html`<label class="form-radios" for=${props.id}>${props.label}</label>`
      }
    </div>
  `;
}