import { html } from 'lit';
import "../../components/nav-link/index.js";
import "../../components/profile/index.js";
import "../../components/logout/index.js";
import "../../components/logo/index.js";

interface NavbarProps {
  id: string
}

export const template = (props : NavbarProps) => {
  return html`
    <div class="navbar-container">
      <div class="navbar-navs">
        <defie-logo></defie-logo>
        <nav>
          <defie-nav-link active=${true} label="View" link="/"></defie-nav-link>
          <defie-nav-link label="Create" link="/create"></defie-nav-link>
          <defie-nav-link label="Edit" link="/edit"></defie-nav-link>
        </nav>
      </div>
      <div class="navbar-profile-wrapper">
        <defie-profile id="${props.id}"></defie-profile>
        <defie-logout></defie-logout>
      </div>
    </div>
  `;
}