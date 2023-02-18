import { html } from 'lit';

interface ProfileProps {
  id: string;
}

export const template = ({ id }: ProfileProps) => {
  return html`
    <div class="profile-wrapper">
      <span>${id}</span>
    </div>
  `;
}