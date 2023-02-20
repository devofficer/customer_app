import { customers } from './data.js';

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

export const getCategories = () => {
  const categories = {
    statusType: {
      ACTIVE: 0,
      INACTIVE: 1,
      REACTIVATE: 2
    },
    customerTermType: {
      COD: 0,
      CREDIT_CARED: 1,
      NET_1: 2,
      NET_30: 3,
      NET_60: 4
    }
  };
  return categories;
}

