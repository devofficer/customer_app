import { css } from 'lit';

export const styles = css`
  :host {
    padding: 10px;
    width: 100%;
  }

  .body-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 14px;
  }

  .body-item {
    padding: 8px 4px;
    text-align: left;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .flex-1 {
    flex: 1;
  }

  .flex-2 {
    flex: 2;
  }

  .flex-3 {
    flex: 3;
  }

  .flex-4 {
    flex: 4;
  }

  @media only screen and (max-width: 1440px) {
    .hidden-md {
      display: none;
    }
  }

  @media only screen and (max-width: 700px) {
    .hidden-sm {
      display: none;
    }
  }

  .icon-button {
    width: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .link-button {
    color: blue;
  }
`;