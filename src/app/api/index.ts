import { CustomerFormProps } from "../layouts/customer-form/index.js";

export const createCustomer = async (information: CustomerFormProps) => {
  const response = await fetch('/create/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(information)
  });
  const result = await response.json();
  console.log(result);
}

export const updateCustomer = async (information: CustomerFormProps) => {
  const response = await fetch('/update/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(information)
  });
  const result = await response.json();
}