import React, { Component } from 'react';
import './Wishlist.css';
import {Link} from 'react-router-dom';
class Wishlist extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
            <div className="background-img-custom" id="home">
        <div className="bg-div">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            {/* <h3>Your <span className="custom-inner-header"><strong>Comfort Partner</strong></span></h3>
            <button type="button" className="btn btn-primary btn-custom-radius">LEARN MORE</button> */}
                <h3 className="cart-header">Your Wishlist</h3>
                <p className="admin-upper-most-para">Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
            </div>
          </div>
        </div>

      </div>
</div>
{/*wishlist content here */}
<section className="wishlist-content">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <button type="button" className="btn btn-info custom-wishlist-btn form-control">View On Map</button>

            <div className="filter-content left-side-content-detail">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h5>Filter</h5>
                    <hr />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>Price</p>
                    <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
   From $10 to $50
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
   From $10 to $50
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
   From $10 to $50
  </label>
</div>
<hr />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>Rating</p>
                    <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  </label>
</div>

<div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  </label>
</div>

<div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  <i class="fa fa-smile-o checked" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  <i class="fa fa-smile-o" aria-hidden="true"></i>
  </label>
</div>
<hr />
                </div>

                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>Type</p>
                    <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
   City Tour
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  Hotel
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input custom-money-box" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  Transfers
  </label>
</div>
<hr />
                </div>
            </div>
            </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="right-side-content-detail">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-right-bg">
                        <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                  </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 custom-col-hr">
                            <div className="custom-middle-content">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>

                        <h5>ARCH TRIOMPHE </h5>
                        <p className="right-side-para">Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....</p>
                        </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <button type="button" className="btn btn-info custom-right-detail-btn">Detail</button>
                        
                        </div>
                    </div>
                </div>
                <br />
                <div className="right-side-content-detail">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-right-bg">
                        <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                  </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 custom-col-hr">
                            <div className="custom-middle-content">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>

                        <h5>ARCH TRIOMPHE </h5>
                        <p className="right-side-para">Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....</p>
                        </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <button type="button" className="btn btn-info custom-right-detail-btn">Detail</button>
                        
                        </div>
                    </div>
                </div>
                <br />
                <div className="right-side-content-detail">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-right-bg">
                        <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                  </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 custom-col-hr">
                            <div className="custom-middle-content">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>

                        <h5>ARCH TRIOMPHE </h5>
                        <p className="right-side-para">Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....</p>
                        </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <button type="button" className="btn btn-info custom-right-detail-btn">Detail</button>
                        
                        </div>
                    </div>
                </div>
                <br />
                <div className="right-side-content-detail">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-right-bg">
                        <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                  </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 custom-col-hr">
                            <div className="custom-middle-content">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>

                        <h5>ARCH TRIOMPHE </h5>
                        <p className="right-side-para">Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....</p>
                        </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <button type="button" className="btn btn-info custom-right-detail-btn">Detail</button>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>

{/*end wishlist content */}

                
            </div>
            </React.Fragment>
        );
    }
}

export default Wishlist;