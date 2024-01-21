export interface Client {
  rut: string;
  names: string;
  lastNames: string;
  address: string;
  phone: string;
}

export const InitialStateClient: Client = {
  address: "",
  lastNames: "",
  names: "",
  phone: "",
  rut: "",
};

export interface ErrorsClient {
  address?: boolean;
  lastNames?: boolean;
  names?: boolean;
  phone?: boolean;
  rut?: boolean;
}
