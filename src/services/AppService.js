import { environment } from '../environments';
import axios from 'axios';

class AppService {

  constructor() {
    this.http = axios.create({
      baseURL: environment.apiMain,
    });  
    this.http.defaults.params = {};
  } 
}

export default AppService;
