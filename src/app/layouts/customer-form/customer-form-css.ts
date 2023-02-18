import { css } from 'lit';

export const styles = css`
  :host {
    color: black;
  }

  .panel-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 1440px) {
    .panel-line-wrapper {
      display: flex;
      flex-direction: column;
    }

    .panel-line-wrapper > :first-child {
      margin-right: 0px !important;
    }

    .panel-line-wrapper > :last-child {
      margin-left: 0px !important;
    } 
  }

  .panel-line-wrapper {
    display: flex;
    padding: 6px;
  }

  .panel-line-wrapper > :first-child {
    margin-right: 20px;
  }

  .panel-line-wrapper > :last-child {
    margin-left: 20px;
  } 

  .form-line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-group {
    margin-top: 30px;
  }

  .form-item-wrapper {
    width : 100%;
    padding: 2px 4px;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
  }

  @media only screen and (max-width: 700px) {
    .form-line {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .panel-line-wrapper {
      padding: 6px;
      width: 400px;
    }
  }

  @media only screen and (max-width: 450px) {
    .form-line {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .panel-line-wrapper {
      padding: 6px;
      width: 350px;
    }
  }

  .full-width {
    width: 100%;
  }

  .form-item-checkbox {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    padding: 2px 4px;
    border-bottom: 2px solid #A4A4A4; 
    background: #F3F3F3;
  }
  
`;