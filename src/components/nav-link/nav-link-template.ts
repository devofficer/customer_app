import { html } from "lit";

interface NavlinkProps {
  label: string;
  link: string;
  active?: boolean;
}

export const template = ({label, link, active}: NavlinkProps) => {
  console.log(active);
  return html`
    <a class=${active ? 'nav-link active' : 'nav-link'} href=${link}>${label}</a>
  `;
}