export interface User {
  uuid: string;
  name: string;
  lastName: string;
  birthDate: Date;
}

export interface UserForUpdate {
  name: string;
  birthDate: Date;
  lastName: string;
}

export interface UserForCreation {
  name: string;
  lastName: string;
  birthDate: Date;
}
