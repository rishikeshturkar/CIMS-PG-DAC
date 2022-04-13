import axios from "axios";
const base_url="http://localhost:8080/";
class UserService{
getUser(){
    return axios.get(base_url+"users")
}

addUser(user){
         return axios.post(base_url+"users",user,{
             headers:{
                 'Content-Type':'application/json'
             }
         });
}
getByEmail(data){
    return axios.post(base_url+"users/login",data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

updateUser(user){
    return axios.put(base_url+"users/"+user.email,user,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
deleteUser(email){
    return axios.delete(base_url+"users/"+email);
}

}

export default new UserService();