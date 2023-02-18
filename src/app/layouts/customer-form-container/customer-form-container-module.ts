import { css } from 'lit';

export const styles = css`
  .panel-header-item {
    padding: 10px;
    display: flex;
    margin-top: 5px;
    justify-content: space-between;
  }

  .panel-header-desc * {
    margin-left: 4px;
    margin-right: 4px;
  }

  @media only screen and (max-width: 700px) {
    .panel-header-item {
      display: flex;
      margin-top: 5px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
`;