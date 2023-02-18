import { css } from 'lit';

export const styles = css`
  .navbar-container {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    background-color: rgb(25, 118, 210);
  }

  .navbar-profile-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`