import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import NavigationBar from "../Shared/NavigationBar";
import BookTable from "../Shared/BookTable"
import Footer from "../Shared/Footer"
import './Administrator.css';
import FoodRepository from "../../Repository/FoodRepository";
import ReservationRepository from "../../Repository/ReservationsRepository";
import AdministratorRepository from "../../Repository/AdministratorRepository";

class Administrator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            clicked:[]
        }
        this.onLogout = this.onLogout.bind(this)
    }
    approveReservation(id){
        let click = this.state.clicked;
        click[id] = true;
        AdministratorRepository.approveReservation(id).then( (data) => {console.log("approved res"); this.setState({

            clicked: click

        });
        });
    }


    renderTableData() {

        return this.state.reservations.map((reservation, index) => {
            return (
                <tr key={reservation.idRes}>
                    <td>{index+1}</td>
                    <td>{reservation.day}</td>

                    <td>{reservation.time}</td>
                    <td style={{textAlign : 'center'}}>{reservation.numberPeople}</td>
                    <td>{this.foodIsReserved(reservation.reservedFood) ? this.listReservedFood(reservation.reservedFood) : "food not reserved"}</td>
                    <td>
                        <button hidden={this.state.clicked[reservation.idRes]===true} onClick={() => this.approveReservation(reservation.idRes)} type="button" className="btn btn-outline-warning">Approve</button>
                        <button hidden={this.state.clicked[reservation.idRes]!==true} disabled type="button" className="btn btn-outline-warning">Approved</button>

                    </td>
                </tr>
            )
        })
    }
    foodIsReserved(food){
        if (food.length ===0)
        {
            return false;
        }
        else{
            return true;
        }
    }
    listReservedFood(food)
    {
        var reservedFood ="";
        for (var i=0; i<food.length-1; i++)
        {
            reservedFood+=food[i].name;
            reservedFood+=", "
        }
        reservedFood+=food[i].name;
        return reservedFood;
    }
    componentDidMount() {
        ReservationRepository.fetchAllCreatedReservations().then((data)=>{

            this.setState({
                reservations: data.data

            })
        })
    }
    onLogout(){

        localStorage.clear();
        this.props.history.push("/administration");

    }


    render() {
        return (
            <div>

                <div id="fh5co-gallery" className="fh5co-section">
                    <button onClick={this.onLogout} style={{float: "right",marginRight:"70px"}} type="button" className="btn btn-secondary">Log out</button>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 fh5co-heading animate-box">
                                <h2>Reservations</h2>
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table">
                                            <thead className="thead-light">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Day</th>
                                                <th scope="col">Time</th>
                                                <th style={{textAlign : 'center'}} scope="col">Number of people</th>
                                                <th  scope="col">Reserved food</th>
                                                <th scope="col"></th>

                                            </tr>
                                            </thead>

                                            <tbody>

                                            {this.state.reservations.length>0 ?  this.renderTableData() : <span style={{marginTop:"50px"}}>There are no reservations, yet.</span>}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        )
    }


}export default Administrator;