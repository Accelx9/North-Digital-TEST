export interface Client {
  id: string;
  rut: string;
  name: string;
  lastName: string;
  address: string;
  phone: string;
}

export const InitialStateClient: Client = {
  address: "",
  lastName: "",
  name: "",
  phone: "",
  rut: "",
  id: "",
};

export interface ErrorsClient {
  address?: boolean;
  lastName?: boolean;
  name?: boolean;
  phone?: boolean;
  rut?: boolean;
}
