import http from './HttpService';
class UserService {

  login = async ({ email, password }) => {
    try {
      const response = await http.post("/auth/token", { email, password });
      return response.data.access_token;
    } catch (error) {
      throw new Error(error.response.data.detail);
    }
  }

  register = async ({ email, name, licenseNo, password, confirmPassword }) => {
    try {
      const response = await http.post("/users", { role: "ROLE_SELLER", email, name, licenseNo, password, confirmPassword });
      return response.data.access_token;
    } catch (error) {
      throw new Error(error.response.data.detail);
    }
  }

}

const userService = new UserService();
export default userService;