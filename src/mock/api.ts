import { customers } from './data.js';

let mock_customers:any[] = [];

export const generateMock = (total: number) => {
  const result = [];
  let customer_id = 0;
  for(let i = 0; i < total; i++) {
    for(let j = 0; j < customers.length; j++) {
      const customer = customers[j];
      const mock_customer:{[key: string]: string} = {};
      for(let key in customer) {
        if(key === 'customer_id' || key === 'customer')
          mock_customer[key] = customer[key] + customer_id;
        else mock_customer[key] = customer[key];
      }
      customer_id++;
      result.push(mock_customer);
    }
  }
  mock_customers = result;
}

export const getCustomers = (page: number, type: string, keyword: string, pagePerCount: number = 25) => {
  const start = (page - 1) * pagePerCount + 1;
  const end = start + pagePerCount;

  let filteredCustomers = mock_customers;
  if(type && keyword) {
    filteredCustomers = mock_customers.filter((customer) => {
      return customer[type].includes(keyword);
    })
  }
  
  const result = {
    totalItems: filteredCustomers.length,
    currentPage: page,
    type: type,
    keyword: keyword,
    itemsPerPage: pagePerCount,
    data: filteredCustomers.slice(start, end),
  }
  return result;
}

