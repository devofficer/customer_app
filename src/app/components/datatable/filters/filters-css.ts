import { css } from 'lit';

export const styles = css`
  .filter-wrapper {
    display: flex;
    width: 100%;
  }

  .filter-searchbar {
    width: 100%;
  }

  .filter-input-wrapper {
    width: 100%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
  }

  .filter-input-wrapper > img {
    width: 25px;
  }

  .filter-input {
    flex: 1;
    border: none;
    outline: none;
  }

  .filter-radio-wrapper {
    display: flex;
  }

  @media only screen and (max-width: 450px) {
    .filter-radio-wrapper {
      flex-direction: column;
    }
  }
`;