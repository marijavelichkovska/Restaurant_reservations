import React, {Component} from "react";

class Testimony extends Component {

    render() {
        return(
        <div id="fh5co-featured-testimony" className="fh5co-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 fh5co-heading">
                        <h2 style={{textAlign: "left"}}>Testimony</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{textAlign: "left"}}> What our clients have had to say about their visits to our restaurant.Within the good and the bad, you can find gems that make it easier to adjust and adapt the customer experience over time. In short, feedback is the way to keep your community at the heart of everything you do.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 animate-box img-to-responsive">
                        <img style={{width: '700px', height: '500px'}} src="images/guy.jpg" alt=""/>
                    </div>
                    <div className="col-md-7 animate-box">
                        <blockquote>
                            <p style={{fontSize: "30px", textAlign: "right"}}> “A warm and friendly welcome with fantastic customer service. Always great, tasty food served piping hot- just the way we like it. Would definitely recommend. We have been many times and it has consistently exceeded our expectations.”</p>
                            <p className="author" style={{textAlign: "right"}}><cite>— Jane Smith</cite></p>
                        </blockquote>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}export default Testimony;