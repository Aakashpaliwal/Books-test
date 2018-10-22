import $ from 'jquery';
import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
// import './Customadmin';

class Admin extends Component {
  btn1div = e => {
    // $('#btn1').click(function(e) {
      // console.log('btn1-click');
      e.preventDefault(); // prevent submitting forms by accident
      $('#img1').show();
      $('#img2').hide();
  
  }
  btn2div = e => {
    // $('#btn2').click(function(e) {
      e.preventDefault(); // prevent submitting forms by accident
      $('#img1').hide();
      $('#img2').show();
  
  }
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
                <h3 className="cart-header">Hello USERNAME</h3>
                <p className="admin-upper-most-para">Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
            </div>
          </div>
        </div>

      </div>
</div>

{/*admin content here */}
<section className="admin-content">
    <div className="container-fluid">
       <div className="row admin-tab-content">
       <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 left-side-border">
       <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
  <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;&nbsp; Books
  </a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
  <i class="fa fa-heart" aria-hidden="true"></i>&nbsp;&nbsp;Wishlist</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
  <i class="fa fa-lock" aria-hidden="true"></i>&nbsp;&nbsp;Settings</a>
  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
&nbsp;&nbsp;Profile</a>
</div>
</div>
<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 right-side-padding">
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      {/* <div className="admin-hotel-content">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i class="fa fa-h-square" aria-hidden="true"></i>
                   
                <span>HOTEL MARIOTT PARIS</span>
                <p className="hotel-first-para">2 Adults 2 Nights</p>
                
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-right">
                <p className="admin-booking-para"><strong>BOOKING ID</strong></p>
                <p className="para-color">23442</p>

                     <p className="admin-booking-para"><strong>BOOKED ON</strong></p>
                <p className="para-color">SAt. 23 Dec. 2015</p>

                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 center-block">
                    <button type="button" className="btn btn-info custom-admin-edit-btn form-control">EDIT</button>
                    <button type="button" className="btn btn-light custom-admin-edit-btn form-control">CANCEL</button>
                </div>
               
            </div>
            <hr />

             <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i class="fa fa-h-square" aria-hidden="true"></i>
                   
                <span>HOTEL MARIOTT PARIS</span>
                <p className="hotel-first-para">2 Adults 2 Nights</p>
                
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-right">
                <p className="admin-booking-para"><strong>BOOKING ID</strong></p>
                <p className="para-color">23442</p>

                     <p className="admin-booking-para"><strong>BOOKED ON</strong></p>
                <p className="para-color">SAt. 23 Dec. 2015</p>

                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 center-block">
                    <button type="button" className="btn btn-info custom-admin-edit-btn form-control">EDIT</button>
                    <button type="button" className="btn btn-light custom-admin-edit-btn form-control">CANCEL</button>
                </div>
               
            </div>
            <hr />

             <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i class="fa fa-h-square" aria-hidden="true"></i>
                   
                <span>HOTEL MARIOTT PARIS</span>
                <p className="hotel-first-para">2 Adults 2 Nights</p>
                
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-right">
                <p className="admin-booking-para"><strong>BOOKING ID</strong></p>
                <p className="para-color">23442</p>

                     <p className="admin-booking-para"><strong>BOOKED ON</strong></p>
                <p className="para-color">SAt. 23 Dec. 2015</p>

                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 center-block">
                    <button type="button" className="btn btn-info custom-admin-edit-btn form-control">EDIT</button>
                    <button type="button" className="btn btn-light custom-admin-edit-btn form-control">CANCEL</button>
                </div>
               
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i class="fa fa-h-square" aria-hidden="true"></i>
                   
                <span>HOTEL MARIOTT PARIS</span>
                <p className="hotel-first-para">2 Adults 2 Nights</p>
                
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-right">
                <p className="admin-booking-para"><strong>BOOKING ID</strong></p>
                <p className="para-color">23442</p>

                     <p className="admin-booking-para"><strong>BOOKED ON</strong></p>
                <p className="para-color">SAt. 23 Dec. 2015</p>

                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 center-block">
                    <button type="button" className="btn btn-info custom-admin-edit-btn form-control">EDIT</button>
                    <button type="button" className="btn btn-light custom-admin-edit-btn form-control">CANCEL</button>
                </div>
               
            </div>
            <hr />
      </div> */}

      <div className="admin-hotel-content">
        <div className="custom-hotel-buttons text-center">
        <button type="button" className="btn btn-primary custom-add-btn active" id="btn-1" value="btn1div" onClick={e => this.btn1div(e)}><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add</button>
        <button type="button" className="btn btn-info custom-view-btn" id="btn-2" value="btn2div" onClick={e => this.btn2div(e)}><i class="fa fa-eye" aria-hidden="true"></i> &nbsp;&nbsp;View</button>
        </div>

        <div className="custom-hotel-form custom-form-display" id="img1">
          <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      {/* <label for="inputEmail4">Enter Book Name</label> */}
      <input type="text" class="form-control custom-book-input" placeholder="Enter Book Title" />
    </div>
    <div class="form-group col-md-6">
      {/* <label for="inputPassword4">Enter Author's Name</label> */}
      <input type="text" class="form-control custom-book-input" placeholder="Enter Author's Name" />
    </div>
    <div class="form-group col-md-6">
      {/* <label for="inputPassword4">Enter Author's Name</label> */}
      <input type="text" class="form-control custom-book-input" placeholder="Enter Publisher's Name" />
    </div>
    <div class="form-group col-md-6">
      {/* <label for="inputPassword4">Enter Author's Name</label> */}
      <input type="number" class="form-control custom-book-input" placeholder="Enter Price" />
    </div>
  </div>
  <button type="submit" class="btn form-control book-sbmt-btn">Submit</button>
</form>
</div>

<div className="custom-hotel-table custom-table-display" id="img2">
<table class="table table-striped table-hover">
  <thead className="bg-info">
    <tr>
      <th scope="col">Book's Title</th>
      <th scope="col">Author's Name</th>
      <th scope="col">Publisher's Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Digital Fortress</td>
      <td>Dan Brown</td>
      <td>Croosword</td>
      <td>399</td>
    </tr>
    <tr>
    <td>Angels & Demons</td>
      <td>Dan Brown</td>
      <td>Croosword</td>
      <td>399</td>
    </tr>
    <tr>
    <td>Da Vinci's Code</td>
      <td>Dan Brown</td>
      <td>Croosword</td>
      <td>399</td>
    </tr>
  </tbody>
</table>
</div>
      </div>
  </div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <div className="wihlist-content">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                </div>
            </div>
      </div>
  </div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className="setting-content">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h4>Change your password</h4>
                    <form>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="inputEmail4">Old Password</label>
      <input type="password" class="form-control" id="inputEmail4" placeholder="old password" />
    </div>
    <div class="form-group col-md-12">
      <label for="inputPassword4">New Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="New Password" />
    </div>
    <div class="form-group col-md-12">
      <label for="inputPassword4">Confirm Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password" />
    </div>
  </div>
  <button type="submit" class="btn book-sbmt-btn-sign form-control">Sign in</button>
</form>
                </div>
            </div>
      </div>
  </div>
  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <div className="profile-content">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h4>Your Profile</h4>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <table class="table table-striped">
  <thead>
    {/* <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr> */}
  </thead>
  <tbody>
    <tr>
      <th scope="row">USERNAME</th>
      <td></td>
      <td></td>
      <td>info@clara.com</td>
    </tr>
    <tr>
    <th scope="row">FIRST NAME</th>
      <td></td>
      <td></td>
      <td>Clara</td>
    </tr>
    <tr>
    <th scope="row">PHONE NUMBER</th>
      <td></td>
      <td></td>
      <td>+00 032 42366</td>
    </tr>
    <tr>
    <th scope="row">DATE OF BIRTH</th>
      <td></td>
      <td></td>
      <td>13/04/1975</td>
    </tr>
    <tr>
    <th scope="row">STREET ADDRESS</th>
      <td></td>
      <td></td>
      <td>24 Rue de Rivoli</td>
    </tr>
    <tr>
    <th scope="row">TOWN/CITY</th>
      <td></td>
      <td></td>
      <td>Paris</td>
    </tr>
    <tr>
    <th scope="row">ZIP CODE</th>
      <td></td>
      <td></td>
      <td>002843</td>
    </tr>
    <tr>
    <th scope="row">COUNTRY</th>
      <td></td>
      <td></td>
      <td>France</td>
    </tr>
  </tbody>
</table>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src={require('../img/tourist_guide_pic.jpg')} className="img-fluid"/>
                </div>
            </div>
      </div>
  </div>
</div>
</div>
          
       </div>     
    </div>
</section>


{/*end content here */}
            </div>
            </React.Fragment>
        );
    }
}

export default Admin;