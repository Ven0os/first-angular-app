import { Location } from './locations';
import { DateAge } from './date';
import { Login } from './login';

export interface Personne {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  dob: DateAge;
  registered: DateAge;
  email: string;
  login: Login;
  phone: string;
  cell: string;
  id: {
    name: any;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
