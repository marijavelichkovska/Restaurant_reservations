import React , {Component} from 'react';
import BookTable from "../Shared/BookTable";
import Footer from "../Shared/Footer";
import Testimony from "../Shared/Testimony";
import {Link,NavLink} from 'react-router-dom';

class Home extends Component {

    render()
    {
        return (


                <div id="page">
                    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(images/home.jpg)'}} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="display-t js-fullheight">
                                        <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                            <h1>The Best Coffee <em>&amp;</em> Restaurant <em>in</em> Skopje</h1>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="fh5co-about" className="fh5co-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-pull-4 img-wrap animate-box" data-animate-effect="fadeInLeft">
                                    <img src="images/un-client-mysterieux-meurt-dans-un-restaurant.jpg" style={{width: "900px", height: "500px"}} alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co" />
                                </div>
                                <div className="col-md-5 col-md-push-1 animate-box">
                                    <div className="section-heading">
                                        <h2 style={{textAlign: "left"}}>The Restaurant</h2>
                                        <p style={{textAlign: "left"}}>We brew the best coffee we can find from roasters we trust, tea from farms smaller than 15 acres and cook delicious brunches based on sourdough bread, organic eggs, seasonal produce & preserves. We like to experiment and make as much as we can in house and whatever we can't make comes from producers that aren't based too far away. Our counter is always stocked with cakes and cookies. With a bit of notice we can bake things to order. Just send us an email.</p>
                                        <p ><Link  className="btn btn-primary btn-outline" to={"/about"}> Our history</Link>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="fh5co-featured-menu" >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 fh5co-heading animate-box">
                                    <h2 style={{textAlign: "left"}}>Today's Menu</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p style={{textAlign: "left"}}>The carousel of rotating chefs at this Hackney wine bar and shop are currently responsible for some of the capital’s most arresting gourmet artistry. This is the pared-back playground for some of the world’s most innovative and movable chefs. Amazingly — given use of only three inductions hobs — over the past two years, chefs William Gleave, Tim Spedding, George Tomlin and Giuseppes Lacorazza and Belvedere, respectively, have positioned P. Franco as one of the most exciting and ‘now’ showcases in town. River Cafe and Rochelle Canteen alumna Anna Tobias followed, with new chef Seb Myers now reasserting its debt to Parisian cave traditions, with thoughtful, idiosyncratic comfort food including a red mullet tartine and inky cuttlefish rice.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                                    <div className="fh5co-item">
                                        <img src="images/download (2).jpg" className="img-responsive" />
                                        <h3>Bake Potato Pizza</h3>
                                        <span className="fh5co-price">$20<sup>.50</sup></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                                    <div className="fh5co-item margin_top">
                                        <img src="images/download (3).jpg" className="img-responsive"  />
                                        <h3>Salted Fried Chicken</h3>
                                        <span className="fh5co-price">$19<sup>.00</sup></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                                    </div>
                                </div>
                                <div className="clearfix visible-sm-block visible-xs-block" />
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                                    <div className="fh5co-item">
                                        <img src="images/download (4).jpg" className="img-responsive"  />
                                        <h3>Italian Sauce Mushroom</h3>
                                        <span className="fh5co-price">$17<sup>.99</sup></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                                    <div className="fh5co-item margin_top">
                                        <img src="images/download (5).jpg" className="img-responsive"  />
                                        <h3>Fried Potato w/ Garlic</h3>
                                        <span className="fh5co-price">$22<sup>.50</sup></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Testimony/>
                    <div id="fh5co-slider" className="fh5co-section animate-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 animate-box">
                                    <div className="fh5co-heading">
                                        <h2 style={{textAlign: "left"}}>Our Best <em>&amp;</em> Unique Menu</h2>
                                        <p style={{textAlign: "left"}} > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis!</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-push-1 animate-box">
                                    <aside id="fh5co-slider-wrwap">
                                        <div className="flexslider">
                                            <ul className="slides">
                                                <li style={{backgroundImage: 'url(images/food/crab1.jpg)'}}>
                                                    <div className="overlay-gradient" />
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
                                                                <div className="slider-text-inner">
                                                                    <div className="desc" style={{textAlign: "right"}}>
                                                                        <h2>Crab <em>with</em> Curry Sources</h2>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eveniet quae, numquam magnam doloribus eligendi ratione rem, consequatur quos natus voluptates est totam magni! Nobis a temporibus, ipsum repudiandae dolorum.</p>
                                                                        <p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li style={{backgroundImage: 'url(images/food/tuna1.jpg)'}}>
                                                    <div className="overlay-gradient" />
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
                                                                <div className="slider-text-inner">
                                                                    <div className="desc" style={{textAlign: "right"}}>
                                                                        <h2>Tuna <em>&amp;</em> Roast Beef</h2>
                                                                        <p>A combination of a minimal and modern design template. The features are big slider on homepage, smooth animation, product listing and many more</p>
                                                                        <p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li style={{backgroundImage: 'url(images/food/egg1.jpeg)'}}>
                                                    <div className="overlay-gradient" />
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
                                                                <div className="slider-text-inner">
                                                                    <div className="desc" style={{textAlign: "right"}}>
                                                                        <h2>Egg <em>with</em> Mushroom</h2>
                                                                        <p> perfect for any type of websites. A combination of a minimal and modern design template. The features are big slider on homepage, smooth animation, product listing and many more</p>
                                                                        <p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="fh5co-blog" >
                        <div className="container">
                            <div className="row animate-box">
                                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                    <h2>Events</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, consequatur. Aliquam quaerat pariatur repellendus veniam nemo, saepe, culpa eius aspernatur cumque suscipit quae nobis illo tempora. Eum veniam necessitatibus, blanditiis facilis quidem dolore! Dolorem, molestiae.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="fh5co-blog animate-box">
                                        <a href="#" className="blog-bg" style={{backgroundImage: 'url(images/buffet-button.jpg)'}} />
                                        <div className="blog-text">
                                            <span className="posted_on">Feb. 15th 2016</span>
                                            <h3><a href="#">Photoshoot On The Street</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <ul className="stuff">
                                                <li><i className="icon-heart2" />1.2K</li>
                                                <li><i className="icon-eye2" />2K</li>
                                                <li><a href="#">Read More<i className="icon-arrow-right22" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="fh5co-blog animate-box">
                                        <a href="#" className="blog-bg" style={{backgroundImage: 'url(images/1a.jpg)'}} />
                                        <div className="blog-text">
                                            <span className="posted_on">Feb. 15th 2016</span>
                                            <h3><a href="#">Surfing at Philippines</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <ul className="stuff">
                                                <li><i className="icon-heart2" />1.2K</li>
                                                <li><i className="icon-eye2" />2K</li>
                                                <li><a href="#">Read More<i className="icon-arrow-right22" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="fh5co-blog animate-box">
                                        <a href="#" className="blog-bg" style={{backgroundImage: 'url(images/cat.jpg)'}} />
                                        <div className="blog-text">
                                            <span className="posted_on">Feb. 15th 2016</span>
                                            <h3><a href="#">Focus On Uderwater</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <ul className="stuff">
                                                <li><i className="icon-heart2" />1.2K</li>
                                                <li><i className="icon-eye2" />2K</li>
                                                <li><a href="#">Read More<i className="icon-arrow-right22" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <BookTable/>
                <Footer/>
                <div className="gototop js-top">
                    <a href="#" className="js-gotop"><i className="icon-arrow-up22" /></a>
                </div>
            </div>
        );
    }
}export default Home;
