import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./Components/Shared/NavigationBar";
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';

import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import FoodRepository from "./Repository/FoodRepository";
import Login from "./Components/LoginUser/RegisterLoginContainer";
import Administrator from "./Components/Administrator/Administrator";
import Reservation from "./Components/Reservation/Reservation";
import SuccessReservation from "./Components/Reservation/SuccessReservation";
import UserRepository from "./Repository/UserRepository";
import LoginAdministrator from "./Components/LoginAdministartor/LoginAdministrator";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            food : [],
            emails: [],
            loggedUser: null
        }


        }

    componentDidMount() {
        FoodRepository.fetchAllFood().then((data)=>{

           this.setState({
               food: data.data

           })
        });

    }
    async  getJSONAsync(){

        // The await keyword saves us from having to write a .then() block.
        let json = await UserRepository.findUserById(localStorage.getItem("currentUserID"));

        // The result of the GET request is available in the json variable.
        // We return it just like in a regular synchronous function.
        return json;
    }
    async userOrAdministrator () {
        let emails = ["marija@gmail.com","andrej@gmail.com","filip@gmail.com","mks"]
        let bool = null;
        await this.getJSONAsync().then(
            function (result) {

                bool =  emails.includes(result.data.email);

            }
        )
        return bool;

    }



    render(){
        return(
            <Router>
                <div className="App">
                    <NavigationBar/>
                   <Switch>
                       <Route path={"/home"} exact component={Home} />
                    <Route path={"/about"} exact component={About} />
                    <Route path={"/gallery"} exact component={Gallery} />
                    <Route path={"/contact"} exact component={Contact} />
                    <Route  path="/reservation" render={(props) => {return localStorage.getItem("currentUserID") ? <Reservation {...props}/> : <Login {...props}  />}}/>
                    <Route  path="/administration" render={(props) => {return localStorage.getItem("currentAdminID") ? <Administrator {...props}/> : <LoginAdministrator {...props}  />}}/>
                    <Route path={"/success"} exact component={SuccessReservation}/>
                    <Redirect to={"/home"}/>
                   </Switch>
                </div>

            </Router>

            );
    }






} export default App;
