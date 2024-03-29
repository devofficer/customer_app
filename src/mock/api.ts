import { categories, customers } from './data.js';

let mock_customers:any[] = [];

function generateRandomString(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
  const start = (page - 1) * pagePerCount;
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

export const addCustomer = (customer: any) => {
  const customer_id = generateRandomString(32);
  mock_customers.unshift({
    customer_id: customer_id,  
    ...customer
  });
  console.log(mock_customers[0]);
}

export const updateCustomer = (information: any) => {
  const customer_id = information.customer_id;
  const index = mock_customers.findIndex((customer) => customer.customer_id === customer_id);
  if(index != -1)
    mock_customers[index] = {...information};
}

export const getCustomer = (customer_id: string) => {
  const customer = mock_customers.find((customer) => customer.customer_id === customer_id);
  return customer;
}

export const getCategories = () => {
  return categories;
}

