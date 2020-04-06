import axios from '../Axios/axios'

const UserRepository = {

    findUserById: (id)=> {
        return axios.get(`/api/user/getuser/${id}`);
    }

}
export default UserRepository;