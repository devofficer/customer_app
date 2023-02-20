import { html, isServer } from "lit";
import "../../form-elements/form-radio/index.js";
import { generateQueryUrl } from "../../../utils/index.js";

interface FilterProps {
  [key: string]: string
}

export const template = ({ type, keyword }: FilterProps) => {
  const filter: FilterProps = {
    type: type,
    keyword: keyword
  };

  const handleChangeFilter = (event: Event, type: string) => {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    filter[type] = value;
    const url = generateQueryUrl(filter);
  }

  const handleChangeKeyword = (event: Event) => {
    handleChangeFilter(event, 'keyword');
  }

  const handleChangeType = (event: Event) => {
    handleChangeFilter(event, 'type');
  }

  console.log(filter.type === 'customer_id')

  return html`
    <div class="filter-wrapper">
      <div class="filter-searchbar">
        <div class="filter-input-wrapper">
          <input class="filter-input" type="search" value=${keyword} @change=${handleChangeKeyword}/>
          <img src="./assets/buttons/search.png" alt="search" />
        </div>
        <div class="filter-radio-wrapper">
          <div class="filter-radio">
            <defie-form-radio 
              id="customer_id" 
              name="searchType" 
              value="customer_id" 
              label="Customer ID" 
              .checked=${filter.type === 'customer_id'} 
              .handler=${handleChangeType}
            ></defie-form-radio>
          </div>
          <div class="filter-radio">
            <defie-form-radio 
              id="customer" 
              name="searchType" 
              value="customer" 
              label="Customer" 
              .checked=${filter.type === 'customer'} 
              .handler=${handleChangeType}
            ></defie-form-radio>
          </div>
          <div class="filter-radio">
            <defie-form-radio 
              id="contact" 
              name="searchType" 
              value="contact" 
              label="Contact" 
              .checked=${filter.type === 'contact'} 
              .handler=${handleChangeType}
            ></defie-form-radio>
          </div>
          <div class="filter-radio">
            <defie-form-radio 
              id="email" 
              name="searchType" 
              value="email" 
              label="Email" 
              .checked=${filter.type === 'email'} 
              .handler=${handleChangeType}
            ></defie-form-radio>
          </div>
        </div>
      </div>
    </div>
  `;
}