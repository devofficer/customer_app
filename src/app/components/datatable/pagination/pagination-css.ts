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
    font-weight: bold;
  }

  .pagination-item a {
    text-decoration: none;
  }

  .pagination-item a {
    color: black;
  }

  .pagination-item a:hover {
    color: gray;
  }

  .pagination-item.selected a {
    color: blue;
  }

  .tool-btn {
    margin: 0px 10px;
  }
`;