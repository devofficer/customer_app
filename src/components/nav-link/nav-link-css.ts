import { css } from 'lit';

export const styles = css`
  .nav-link {
    text-decoration: none;
    color: black;
    padding: 0px 8px;
    font-size: 18px;
    font-weight: bold;
  }

  .nav-link:hover {
    color: gray;
  }

  .nav-link.active {
    color: blue;
  }
`;