import { css } from 'lit';

export const styles = css`
  @media only screen and (max-width: 700px) {
    .form-item-element {
      width: 300px;
    }
  }

  .form-item-label {
    font-size: 14px;
    font-weight: bold;
    margin-right: 5px;
    width: 100px;
  }

  .form-item-element {
    width: 100%;
    display: flex;
    align-items: center;
    height: 30px;
  }

  .form-input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    padding: 2px 4px;
    border-bottom: 2px solid #A4A4A4; 
    background: #F3F3F3;
  }

  .form-select {
    width: calc(100% + 8px);
    height: 30px;
    border: none;
    outline: none;
    padding: 2px 4px;
    border-bottom: 2px solid #A4A4A4; 
    background: #F3F3F3;
  }

  .form-checkbox {
    width: 15px;
    height: 20px;
    border: none;
    outline: none;
    padding: 2px 4px;
    border-bottom: 2px solid #A4A4A4; 
    background: #F3F3F3;
  }

  .input-wrapper {
    flex: 1;
  }

  .form-input:focus {
    border-bottom: 2px solid #434343;
  }
`;