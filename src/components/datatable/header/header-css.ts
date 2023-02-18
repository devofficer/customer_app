import { css } from 'lit';

export const styles = css`
  :host {
    padding: 10px;
    width: 100%;
  }

  .header-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    background-color: #f0f4c3;
    font-size: 14px;
  }

  .header-item {
    padding: 8px 4px;
    text-align: left;
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
`;