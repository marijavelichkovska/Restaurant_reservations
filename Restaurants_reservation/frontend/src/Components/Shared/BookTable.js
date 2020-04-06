
import React,{Component} from "react";
import {Link,NavLink} from 'react-router-dom';
class BookTable extends Component{

    render(){
        return(
            <div id="fh5co-started" className="fh5co-section animate-box" style={{backgroundImage: 'url(images/booktable.jpg)'}} data-stellar-background-ratio="1">

<div className="overlay" />
    <div className="container">
    <div className="row animate-box">
    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
    <h2>Book a Table</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim quae vitae cupiditate, sequi quam ea id dolor reiciendis consectetur repudiandae. Rem quam, repellendus veniam ipsa fuga maxime odio? Eaque!</p>
    <p><Link to={"/reservation"} className="btn btn-primary btn-outline">Book Now</Link></p>
</div>
</div>
</div>
</div>);}
    } export default BookTable;