import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:7070/home';

class HomeService{
      Home(log){
      return axios.post(USER_API_BASE_URL,log);
    }
}

export default new HomeService();