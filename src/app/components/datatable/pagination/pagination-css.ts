import { css } from 'lit';

export const styles = css`
  .pagination-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .pagination-item {
    font-weight: normal;
    cursor: pointer;
    padding: 2px;
  }

  .pagination-item.selected {
    color: blue;
    font-weight: bold;
  }

  .tool-btn {
    margin: 0px 10px;
  }
`;