import http from "./httpService";

const usersService = {
    getUsers: function () { 
        return http.get('https://jsonplaceholder.typicode.com/users');
    }
}

export default usersService;