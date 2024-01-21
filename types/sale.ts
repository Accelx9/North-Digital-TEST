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
  salePrice: number;
}
