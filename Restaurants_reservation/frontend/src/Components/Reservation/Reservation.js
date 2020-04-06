import React from "react";
import axios from "../../Axios/axios"
import UserRepository from "../../Repository/UserRepository";
import CheckBox from "../Shared/CheckBox/CheckBox";
import FoodRepository from "../../Repository/FoodRepository";
import './Reservasion.css'
import Testimony from "../Shared/Testimony";
import Footer from "../Shared/Footer";

class Reservation extends React.Component {


    getAllFood(){
        let foodList = [];
       FoodRepository.fetchAllFood().then((data) => {
           for (let i =0; i<data.data.length; i++)
           {
               let food = {"id": data.data[i].id, "value" : data.data[i].name,"description": data.data[i].description,"price": data.data[i].price,"image":
                       data.data[i].image,"isChecked":false}
               foodList[i] = food;
               };


       }
       )
        return foodList;

    }


    constructor(props) {
        super(props);

        this.state = {
            day: "",
            time: "",
            numberPeople: "",
            user:"",
            welcomeMessage:"",
            food: this.getAllFood(),
            reservedFood:[],
            fields: {},
            errors: {},
            errorInNumberOfPeople: false

        };
        this.onLogout = this.onLogout.bind(this)

    }
    componentDidMount() {
        const currentUserId = localStorage.getItem("currentUserID");
        this.setState(
            {
                food: this.getAllFood()
            }
        )
        if(currentUserId!=null)
        {
            UserRepository.findUserById(currentUserId).then((data) => {

                this.setState({
                    user: data.data,
                    welcomeMessage: "Make your reservation, "+ data.data.name + " " + data.data.surname
                });

            });

        }
    }

    submitReservation = (e)=> {
        e.preventDefault();
        if (this.handleValidation()) {

            let food = this.state.food;
            let foodItem = null;
            let reservedFood = this.state.reservedFood
            for (let i = 0; i < food.length; i++) {
                foodItem = {
                    "id": food[i].id,
                    "name": food[i].value,
                    "description": food[i].description,
                    "price": food[i].price,
                    "image":
                    food[i].image
                }
                if (food[i].isChecked) {

                    reservedFood.push(food[i])

                }
            }
            ;


            this.setState(
                {
                    reservedFood: reservedFood
                }
            )
            console.log(this.state.reservedFood)

            axios.post("api/reservation/create", this.state)
                .then(data => {
                        console.log(data)
                        if (data.data == "CREATED") {
                            this.props.history.push("/success")
                        }
                        else{
                            alert("Slot is occupied");
                        }
                    }
                )
                .catch(error => console.log(error));

        }
        }
    handleCheckChieldElement = (event) => {
        let food = this.state.food
        food.forEach(foodItem => {
            if (foodItem.value === event.target.value)
                foodItem.isChecked =  event.target.checked
        })
        this.setState({food: food})
    }


    changeValue (field, e){


        this.setState({[e.target.name] : e.target.value})
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    onLogout(){
        localStorage.clear();
        this.props.history.push("/reservation")
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["day"]){
            formIsValid = false;
            errors["day"] = "You must enter the date.";
        }
        else{
            errors["day"]="";
        }

        if(!fields["time"]){
            formIsValid = false;
            errors["time"] = "You must choose the time from the dropdown.";
        }
        else{
            errors["time"]="";
        }
        if(fields["numberPeople"] )
        {
            const re = /^[0-9\b]+$/;

                if (!re.test(fields["numberPeople"])) {
                    let error = this.state.errors;
                    formIsValid = false;
                    errors["numberPeople"] = "Enter only numbers";
                }
                else {
                    errors["numberPeople"] = "";
                }

            }


        this.setState({errors: errors});
        return formIsValid && !this.state.errorInNumberOfPeople;

    }

    render() {
        const {day,time,numberPeople} = this.state;

        return (

        <div>

            <div id="fh5co-gallery" className="fh5co-section">
                <button onClick={this.onLogout} style={{float: "right",marginRight:"70px"}} type="button" className="btn btn-secondary">Log out</button>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 fh5co-heading animate-box">
                            <h2 style={{marginTop: "30px"}}>{this.state.welcomeMessage}</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <form
                                        onSubmit={this.submitReservation} id="form-wrap">
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="day">Enter the day:</label>
                                                <input type="text" className="form-control" name="day" ref="day"  onChange={this.changeValue.bind(this, "day")}   placeholder="e.g. 12.01.2020" id="day" />
                                                <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["day"]}</span>

                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="time">Choose the time:</label>

                                                <select style={{margin: '30px',color: "black",background:"grey"}} ref="time"  onChange={this.changeValue.bind(this, "time")}  id="time" name="time">
                                                    <option value="14:00">14:00</option>
                                                    <option value="16:00">16:00</option>
                                                    <option value="18:00">18:00</option>
                                                    <option value="20:00">20:00</option>
                                                    <option value="22:00">22:00</option>
                                                </select>
                                                <input type="text" id="timeHolder" className="form-control"  name="timeHolder"  defaultValue={time}/>
                                                <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["time"]}</span>

                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="numberPeople">Number of people:</label>
                                                <input type="text" name="numberPeople" ref="numberPeople"  onChange={this.changeValue.bind(this, "numberPeople")}   className="form-control"  id="numberPeople" />
                                                <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["numberPeople"]}</span>

                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label >Choose food to reserve:</label>
                                                <hr/>
                                                    {
                                                        this.state.food.map((foodItem) => {
                                                            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...foodItem} />)
                                                        })
                                                    }

                                            </div>
                                        </div>


                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input style={{float:"right"}}type="submit"  className="btn btn-primary btn-outline btn-lg" defaultValue="Submit Form" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></div></div>
            <Testimony/>
            <Footer/>
        </div>

    );
    }

}export default Reservation;