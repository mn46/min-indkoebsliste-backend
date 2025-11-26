import http from "../http-common";

class UsersDataService {
    getUser(id) {
    return http.get(`/users/${id}`);
  }
    signup(data){
        return http.post("/users/sign-up", data );
    }
    signin(data){
        return http.post("/users/sign-in", data);
    }
    

}
export default new UsersDataService();