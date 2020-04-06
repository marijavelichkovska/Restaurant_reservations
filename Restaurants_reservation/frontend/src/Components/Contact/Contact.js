import React, {Component} from "react";

import NavigationBar from "../Shared/NavigationBar";
import Footer from "../Shared/Footer";

class Contact extends Component{

    render(){

        return (
            <div>

                <div id="page">
                    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(images/restaurant.jpg)'}} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="display-t js-fullheight">
                                        <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                            <h1>Get <em>in</em> Touch</h1>
                                            <h2>Feel free to reach us anytime</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="fh5co-contact" className="fh5co-section animate-box">
                        <div className="container">
                            <div className="row animate-box">
                                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                    <h2>Don't be shy, let's chat.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim quae vitae cupiditate, sequi quam ea id dolor reiciendis consectetur repudiandae. Rem quam, repellendus veniam ipsa fuga maxime odio? Eaque!</p>
                                    <p><a href="mailto:info@yourdomainname.com" className="btn btn-primary btn-outline">Contact Us</a></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-md-push-6 col-sm-6 col-sm-push-6">
                                    <form action="#" id="form-wrap">
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="name">Your Name</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="email">Your Email</label>
                                                <input type="text" className="form-control" id="email" />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea name id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input type="submit" className="btn btn-primary btn-outline btn-lg" defaultValue="Submit Form" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gototop js-top">
                    <a href="#" className="js-gotop"><i className="icon-arrow-up22" /></a>
                </div>
                <Footer/>
            </div>
        );


    }



}export default Contact;