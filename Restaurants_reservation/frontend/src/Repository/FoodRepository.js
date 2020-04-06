import axios from '../Axios/axios'

const FoodRepository = {

    fetchAllFood: ()=> {
        return axios.get("/api/food");

    }


    }
    export default FoodRepository;