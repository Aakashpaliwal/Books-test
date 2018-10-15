import React, { Component } from 'react';
import './Single.css';
import {Link} from 'react-router-dom';
class Single extends Component {
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
                <h3 className="cart-header">Shop</h3>
            </div>
          </div>
        </div>

      </div>
</div>

{/*single-content*/}
    <section className="single-content">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div className="single-left-content">
                        <div className="upper-icons text-center">
                            <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img src = {require('../img/icons_search/pizza_italian.png')} className="img-fluid"/>
                                <p>Pizza / Italian </p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <i className="fa fa-wheelchair" aria-hidden="true"></i>
                                <p>Accessibiliy</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                                <p>144 Likes</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <i i class="fa fa-paw" aria-hidden="true"></i>
                                <p>Pet Allowed</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <i class="fa fa-car" aria-hidden="true"></i>
                                <p>Parking</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <p>No Smoking</p>
                            </div>
                           
                            </div>
                            <hr />

                        </div>

                        <div className="single-description">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <h3>Description</h3>
                                </div>

                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <h3>About Us</h3>
                                    <p>Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.</p>

                                    <h3>Menu and dishes</h3>
                                    <p>Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi.</p>

                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>No scripta electram necessitatibus sit</li>
                                        <li>Quidam percipitur instructior an eum</li>
                                        <li>Ut est saepe munere ceteros</li>
                                        <li>No scripta electram necessitatibus sit</li>
                                        <li>Quidam percipitur instructior an eum</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </div>

                        <div className="single-opening">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <h3>Opening Time</h3>
                                </div>

                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">1st March to 31 Oct</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Monday</td>
      <td></td>
      <td></td>
      <td>10.00 - 17.30</td>
    </tr>
    <tr>
    <td scope="row">Tuesday</td>
      <td></td>
      <td></td>
      <td>10.00 - 17.30</td>
    </tr>
    <tr>
    <td scope="row">Wednesday</td>
      <td></td>
      <td></td>
      <td>10.00 - 17.30</td>
    </tr>
    <tr>
    <td scope="row">Thursday</td>
      <td></td>
      <td></td>
      <td>10.00 - 17.30</td>
    </tr>
    <tr>
    <td scope="row">Friday</td>
      <td></td>
      <td></td>
      <td>10.00 - 17.30</td>
    </tr>
    <tr>
    <td scope="row">Saturday</td>
      <td></td>
      <td></td>
      <td>10.00 - 17.30</td>
    </tr>
    <tr>
    <td scope="row">Sunday</td>
      <td></td>
      <td></td>
      <td>10.00 - 17.30</td>
    </tr>
  </tbody>
</table>
                                </div>
                            </div>
                            <hr />
                        </div>

                         <div className="single-reviews">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <h3>Reviews</h3>
                                </div>

                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                        <div className="reviews-para">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                  <span> 11 Reviews 
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                   </span>           
                                                </div>
                                            </div>

                                                <div className="below-review-rating">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                  <div className="reviews-position">
                                                        <div className="row">
                                                           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                <p>Position</p>
                                                           </div>
                                                           <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                           <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                           </div>         
                                                        </div>
                                                  </div>          
                                                </div>

                                                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                  <div className="reviews-position">
                                                        <div className="row">
                                                           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                <p>Price</p>
                                                           </div>
                                                           <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                           <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                           </div>         
                                                        </div>
                                                  </div>          
                                                </div>
                                            </div>
                                                    
                                                       <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                  <div className="reviews-position">
                                                        <div className="row">
                                                           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                <p>Service</p>
                                                           </div>
                                                           <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                           <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                           </div>         
                                                        </div>
                                                  </div>          
                                                </div>

                                                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                  <div className="reviews-position">
                                                        <div className="row">
                                                           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                <p>Quality</p>
                                                           </div>
                                                           <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                           <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o checked" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                                                           </div>         
                                                        </div>
                                                  </div>          
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
               </div> 

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <button type="button" className="btn btn-primary map-btn form-control">View On Map</button>
               </div>
            </div>
         </div>   
    </section>
{/*end content */}
                
            </div>
            </React.Fragment>
        );
    }
}

export default Single;