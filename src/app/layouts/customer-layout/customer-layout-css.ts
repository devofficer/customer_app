import { css } from 'lit';

export const styles = css`
  :host {
    color: black;
    font-weight: bold;
  }

  .create-panel-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .panel {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .panel-body {
    padding: 10px;
  }
`;