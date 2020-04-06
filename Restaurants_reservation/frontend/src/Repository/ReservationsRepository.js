import axios from '../Axios/axios'

const ReservationRepository = {

    fetchAllCreatedReservations: ()=> {
        return axios.get("/api/reservation/created");
    }


}
export default ReservationRepository;