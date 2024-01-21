import { Detail } from ".";

export interface Sale {
  client: {
    name: string;
    id: string;
  };

  branchOffice: {
    name: string;
    id: string;
  };
  currency: {
    name: string;
    id: string;
  };
  details: Detail[];
  date: Date;
  id: string;
  totalSale: number;
}

export interface Client {
  id: string;
  rut: string;
  name: string;
  lastName: string;
  address: string;
  phone: string;
}

export interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
}

export interface BranchOffice {
  id: string;
  name: string;
  country: string;
  currency: string;
}
