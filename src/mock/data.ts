import { TableItemProps } from "../app/components/datatable/body/index.js";

export const customers: TableItemProps[] = [
  { edit: 'customer_id', customer_id: 'e0i88gix-aszgkzmd', customer: 'Intel Corp.', city: 'Santa Clara', country: 'USA', phone: '408 237 4455', contact: 'Lisa Hammer', email: 'lisa@intel.com' },
  { edit: 'customer_id', customer_id: '874nkgyn-ad1xxcdd', customer: 'Linear Technology', city: 'Fremont', country: 'USA', phone: '510 748 5511', contact: 'Julie Patterson', email: 'july@linear.com' },
  { edit: 'customer_id', customer_id: 'hb9dk6bs-9fnccsdf', customer: 'Neutophonics', city: 'San Jose', country: 'USA', phone: '408 999 4545', contact: 'Jon M.', email: 'jon@neutophonics.co' },
  { edit: 'customer_id', customer_id: '50j35uq7-1j3ddddd', customer: 'ABC', city: 'Fremont', country: 'USA', phone: '510 599 4500', contact: 'Todd K', email: 'todd@abc.com' },
  { edit: 'customer_id', customer_id: 'ickqorv5-jd8zzcvd', customer: 'Anda', city: 'Fremont', country: 'USA', phone: '510 222 7777', contact: 'Lily Scott', email: 'lily@anda.com' },
];

export const categories = {
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
  },
  state: {
    California: 'California',
    Texas: 'Texas',
  },
  country: {
    USA: 'USA',
    UK: 'UK'
  },
  nexus: {
    Yes: 'Yes',
    No: 'No'
  },
  title: {
    Title1: 'Title1',
    Title2: 'Title2'
  },
  department: {
    Department1: 'Department1',
    Department2: 'Department2'
  },
  tax_code: {
    TX1: 'TX-1',
    TX2: 'TX-2',
    TX3: 'TX-3'
  }
};