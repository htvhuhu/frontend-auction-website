import http from './HttpService';
class UserService {

  login = async ({email, password}) => {
    try {
      const response = await http.post("/auth/token", {email, password});
      return response.data.access_token;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  }

}

const userService = new UserService();
export default userService;