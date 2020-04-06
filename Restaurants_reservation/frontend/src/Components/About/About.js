
import React,{Component} from "react";
import BookTable from "../Shared/BookTable";
import Footer from "../Shared/Footer";
import Testimony from "../Shared/Testimony";

class About extends Component {

    render()
    {
        return (
            <div>

                <div id="page">
                    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(images/about.jpg)'}} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="display-t js-fullheight">
                                        <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                            <h1>About <em>our</em> Restaurant</h1>
                                            <h2>Learn some of the restaurant's long history</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="fh5co-about" className="fh5co-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-pull-6 img-wrap animate-box" data-animate-effect="fadeInLeft">
                                    <img src="images/small_about.jpg"  />
                                </div>
                                <div className="col-md-5 col-md-push-1 animate-box">
                                    <div className="section-heading">
                                        <h2>The Restaurant</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae neque quisquam at deserunt ab praesentium architecto tempore saepe animi voluptatem molestias, eveniet aut laudantium alias, laboriosam excepturi, et numquam? Atque tempore iure tenetur perspiciatis, aliquam, asperiores aut odio accusamus, unde libero dignissimos quod aliquid neque et illo vero nesciunt. Sunt!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam iure reprehenderit nihil nobis laboriosam beatae assumenda tempore, magni ducimus abentey.</p>
                                        <p><a href="#" className="btn btn-primary btn-outline">Our History</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="fh5co-timeline">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-0">
                                    <ul className="timeline animate-box">
                                        <li className="timeline-heading text-center animate-box">
                                            <div><h3>Our Experience</h3></div>
                                        </li>
                                        <li className="animate-box timeline-unverted">
                                            <div className="timeline-badge"><i className="icon-genius" /></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">The Founders Meet</h3>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted animate-box">
                                            <div className="timeline-badge"><i className="icon-genius" /></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Create A Restaurant</h3>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="animate-box timeline-unverted">
                                            <div className="timeline-badge"><i className="icon-genius" /></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Added 200+ Employees</h3>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <br />
                                        <li className="timeline-heading text-center animate-box">
                                            <div><h3>More Restaurants Outlet</h3></div>
                                        </li>
                                        <li className="timeline-inverted animate-box">
                                            <div className="timeline-badge"><i className="icon-genius" /></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Stablished Restaurant in Europe</h3>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="animate-box timeline-unverted">
                                            <div className="timeline-badge"><i className="icon-genius" /></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Franchise Restaurants Brooklyn</h3>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted animate-box">
                                            <div className="timeline-badge"><i className="icon-genius" /></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Added 100K More Employees</h3>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="animate-box timeline-unverted">
                                            <div className="timeline-badge"><i className="icon-genius" /></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Stablished Marketing</h3>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <Testimony/>
                </div>
                <BookTable/>
                <Footer/>
                <div className="gototop js-top">
                    <a href="#" className="js-gotop"><i className="icon-arrow-up22" /></a>
                </div>
            </div>
        );
    }

}export default About;