export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Iaddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface Iaddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Igeo;
}

export interface Igeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
