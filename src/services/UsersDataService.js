import http from "../http-common";

class UsersDataService {
    signup(data){
        return http.post("/users/sign-up", data );
    }
    signin(data){
        return http.post("/users/sign-in", data);
    }
    

}
export default new UsersDataService();