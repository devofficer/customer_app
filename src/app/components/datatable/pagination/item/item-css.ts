import { css } from 'lit';

export const styles = css`
  .pagination-item {
    font-weight: normal;
    cursor: pointer;
    padding: 2px;
  }

  .pagination-item.selected {
    font-weight: bold;
  }

  .pagination-item:hover {
    color: gray;
  }

  .tool-btn {
    margin: 0px 10px;
  }
`;