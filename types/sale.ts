import { Client, Detail } from ".";

export interface Sale {
  client: Client;
  branchOffice: BranchOffice;
  currency: {
    name: string;
    id: string;
  };
  details: Detail[];
  date: Date;
  id: string;
  totalSale: number;
}

export interface ErrorsSale {
  client?: boolean;
  branchOffice?: boolean;
}

export interface Product {
  id: string;
  name: string;
  stock: number | string;
  price: number | string;
}

export interface BranchOffice {
  id: string;
  name: string;
  country: string;
  currency: string[];
}
