import { html } from "lit";

export const template = () => {
  console.log("defie-datatable-filter");
  return html`
    <div class="filter-wrapper">
      <div class="filter-searchbar">
        <div class="filter-input-wrapper">
          <input class="filter-input" type="search" />
          <img src="./assets/buttons/search.png" alt="search" />
        </div>
        <div class="filter-radio-wrapper">
          <div class="filter-radio">
            <input type="radio" id="customerId" name="searchType" value="customerId" />
            <label for="customerId">Customer ID</label>
          </div>
          <div class="filter-radio">
            <input type="radio" id="customer" name="searchType" value="customer" />
            <label for="customer">Customer</label>
          </div>
          <div class="filter-radio">
            <input type="radio" id="contact" name="searchType" value="contact" />
            <label for="contact">Contact</label>
          </div>
          <div class="filter-radio">
            <input type="radio" id="email" name="searchType" value="email" />
            <label for="email">Email</label>
          </div>
        </div>
      </div>
    </div>
  `;
}