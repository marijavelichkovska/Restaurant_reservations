import React , {Component} from 'react';

class Footer extends Component{

render(){
    return(

        <div>

            <footer style={{height: "250px"}} id="fh5co-footer" role="contentinfo" className="fh5co-section">
                <div className="container">
                    <div className="row row">
                        <div className="col-md-4 fh5co-widget">
                            <h4>Tasty</h4>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque
                                dicta adipisci architecto culpa amet.</p>
                        </div>
                        <div className="col-md-2 col-md-push-1 fh5co-widget">
                            <h4>Links</h4>
                            <ul className="fh5co-footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-md-push-1 fh5co-widget">
                            <h4>Categories</h4>
                            <ul className="fh5co-footer-links">
                                <li><a href="#">Landing Page</a></li>
                                <li><a href="#">Real Estate</a></li>
                                <li><a href="#">Personal</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">e-Commerce</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-md-push-1 fh5co-widget">
                            <h4>Contact Information</h4>
                            <ul className="fh5co-footer-links">
                                <li>198 West 21th Street, <br/> Suite 721 New York NY 10016</li>
                                <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                                <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                                <li><a href="http://https://freehtml5.co">freehtml5.co</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>

        </div>

);}}
    export default Footer;