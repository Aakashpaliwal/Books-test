import React, { Component } from 'react';
import './Checkout.css';
import {Link} from 'react-router-dom';
import { SSL_OP_NO_TLSv1_1 } from 'constants';

class Checkout extends Component {
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
                <h3 className="cart-header">Shopping Cart</h3>
                <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
            </div>
          </div>
        </div>

      </div>
</div>

{/*checkout content */}
<section className="checkout-content">
<div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="custom-card">No shadow</div>
        </div>
        </div>
                <br /><br />
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="checkout-left-content">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h3>Billing Details</h3>
                    <hr />
                    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Company Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Tesla" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Email Address</label>
      <input type="email" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Country</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Phone</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
    <div className="form-group col-md-12">
    <label for="inputZip">Order Note</label>
    <textarea className="form-control" rows="6" placeholder="Order Note"></textarea>
    </div>
  </div>
</form>
            </div>

            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="checkout-right-content">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3>YOur Order</h3>
                        <hr />
                        <div class="custom-card">
                            <span className="text-left"><strong>Product</strong></span>
                            <span className="text-right custom-right-span"><strong>Total</strong></span>
                        </div>
                        </div>
                        </div>
                        <div className="row checkout-thumb">
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                               <img src={require('../img/products/thumb-1.jpg')} className="img-fluid"/> 
                              &nbsp;&nbsp; <span>World Class book</span>        
                            </div>

                              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                              <p>$15.00</p>        
                            </div>
                        </div>
                        <hr />
                        <div className="row checkout-price">
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                              <p>SubTotal</p>
                            </div>

                              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                              <p>$15.00</p>        
                            </div>
                        </div>
                        <hr />
                        <div className="row checkout-order">
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                              <p>Order Total</p>
                            </div>

                              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                              <p>$15.00</p>        
                            </div>
                        </div>

                        <br />

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter Coupon" aria-label="" aria-describedby="basic-addon2" />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Apply</button>
  </div>
</div>
                            </div>
                        </div>

                        <div className="payment-here row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="pay-data">
                                    <h3>Payment Method</h3>
                                    <div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
   <strong>Cheque Payment</strong>
  </label>
</div>
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
    <strong>Direct Bank Transfer</strong>
  </label>
</div>
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
    <strong>Paypal</strong>
  </label>
</div>

<button type="button" className="btn btn-success form-control custom-place-btn">PLACE ORDER&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>

    </div>
</div>

</section>

{/*end checkout content */}
            </div>
            </React.Fragment>
        );
    }
}

export default Checkout;