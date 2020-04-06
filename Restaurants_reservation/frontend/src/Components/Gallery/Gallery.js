import React , {Component} from 'react';
import Testimony from "../Shared/Testimony";
import BookTable from "../Shared/BookTable";
import Footer from "../Shared/Footer";

class Gallery extends Component{

    render()
    {
        return (
            <div>

                <div id="page">
                    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(images/ss.jpg)'}} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="display-t js-fullheight">
                                        <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                            <h1>See <em>Our</em> Gallery</h1>
                                            <h2>Brought to you by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="fh5co-gallery" className="fh5co-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 fh5co-heading animate-box">
                                    <h2>Our Gallery</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/1.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/2.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-6 col-sm-6 fh5co-gallery_item">
                                    <div className="fh5co-bg-img fh5co-gallery_big" style={{backgroundImage: 'url(images/food/3.jpg'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/4.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/5.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/6.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/7.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/8.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/9.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-6 col-sm-6 fh5co-gallery_item">
                                    <div className="fh5co-bg-img fh5co-gallery_big" style={{backgroundImage: 'url(images/food/10.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/11.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/12.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-6 col-sm-6 fh5co-gallery_item">
                                    <div className="fh5co-bg-img fh5co-gallery_big" style={{backgroundImage: 'url(images/food/13.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/14.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/15.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/16.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/17.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-3 col-sm-3 fh5co-gallery_item">
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/18.jpg)'}} data-trigger="zoomerang" />
                                    <div className="fh5co-bg-img" style={{backgroundImage: 'url(images/food/19.jpg)'}} data-trigger="zoomerang" />
                                </div>
                                <div className="col-md-6 col-sm-6 fh5co-gallery_item">
                                    <div className="fh5co-bg-img fh5co-gallery_big" style={{backgroundImage: 'url(images/food/20.jpg)'}} data-trigger="zoomerang" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gototop js-top">
                    <a href="#" className="js-gotop"><i className="icon-arrow-up22" /></a>
                </div>
                <Testimony/>
                <BookTable/>
                <Footer/>
            </div>
        );
    }

}export default Gallery;