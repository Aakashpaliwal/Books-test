import React, { Component } from 'react'
import './Home.css';
// import './slider';
export class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    first_name : "",
    last_name : "",
    email : "",
    subject : "",
    contact_number : ""
  
    };
  }
   
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () => {
        fetch("/")
    };
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
          this.setState ({
            first_name : "",
            last_name : "",
            email : "",
            subject : "",
            contact_number : ""

          })
          //replace /contact with server url
          fetch('/partner', {
            method : "POST",
            headers : {
              "Content-Type" : "application/json; chardet=utf-8"
            },
            body : JSON.stringify(this.state)
          }).then(this.getWebsite);

      };
  render() {
    return (
      <div>
          <div>
    {/*SLIDER HERE */}
      <div className="background-img-custom" id="home">
        <div className="bg-div">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom-upper-tabs">
            {/* <h3>Your <span className="custom-inner-header"><strong>Comfort Partner</strong></span></h3>
            <button type="button" className="btn btn-primary btn-custom-radius">LEARN MORE</button> */}
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
<div class="tab-content custom-tab-content-bg" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Search Terms</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Search Item" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Things To Do</label>
      <select className="form-control">
      <option>All Tours</option>
      <option>City Sighting</option>
      <option>Museum Tours</option>
      <option>Historic Buildings</option>
      </select>
    </div>
    <div class="form-group col-md-6">
    <label for="inputAddress">Date</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="Enter Date" />
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">Time</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="12:30 P.M." />
  </div>
  </div>

  <button type="submit" class="btn btn-success">Search Now</button>
</form>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Search Terms</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Search Item" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Things To Do</label>
      <select className="form-control">
      <option>All Tours</option>
      <option>City Sighting</option>
      <option>Museum Tours</option>
      <option>Historic Buildings</option>
      </select>
    </div>
    <div class="form-group col-md-6">
    <label for="inputAddress">Date</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="Enter Date" />
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">Time</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="12:30 P.M." />
  </div>
  </div>

  <button type="submit" class="btn btn-success">Search Now</button>
</form>

  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Search Terms</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Search Item" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Things To Do</label>
      <select className="form-control">
      <option>All Tours</option>
      <option>City Sighting</option>
      <option>Museum Tours</option>
      <option>Historic Buildings</option>
      </select>
    </div>
    <div class="form-group col-md-6">
    <label for="inputAddress">Date</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="Enter Date" />
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">Time</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="12:30 P.M." />
  </div>
  </div>

  <button type="submit" class="btn btn-success">Search Now</button>
</form>
  </div>
</div>
            </div>
          </div>
        </div>

      </div>
</div>


    {/* END SLIDER HERE */}
    {/*upper four boxes */}
      {/* <section className="custom-upper-boxes">
        <div className="container">
          <div className = "row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section> */}
    {/*end upper four boxes */}
      
    {/* offer section */}
        <section className = "service-nikhil-content" id="service">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center">PARIS TOP TOURS</h2>
            <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
            </div>

            </div>
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

               
              <div className="row custom-image-rows">
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

            <div className="row custom-image-rows">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <button type="button" className="btn btn-info">View More&nbsp;&nbsp;<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
</button>
              </div>
            </div>
             



              </div>





          </div>
        </section>



    {/* end offer section */}
    {/*choose us section */}
      <section className="belong-anywhere">
      <div className="belong-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <h3>BELONG ANYWHERE</h3>
            <p>
						Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex.
					</p>
          <i className="fa fa-play" aria-hidden="true"></i>

          </div>
        </div>
        </div>
        </div>
      </section>
    {/* end choose us section*/}
    {/*choose us blocks*/}
 
    {/*end blocks */}
    {/*custom counter */}
    {/* <section class="custom-clients text-center  ">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="300" data-speed="1500"></h2>
       <p class="count-text ">Our Clients</p>
    </div>

   <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="1700" data-speed="1500"></h2>
      <p class="count-text ">Projects</p>
    </div>

   <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="11900" data-speed="1500"></h2>
      <p class="count-text ">Happy Clients</p>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="157" data-speed="1500"></h2>
      <p class="count-text ">Our Domestic Projects</p>
    </div>
</div>
                    </div>
                </section> */}
    {/*end custom counter */}
     {/*software solutions */}
    <section className="good-reasons">
       <div className="container">
          <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <h3 className="good-first-header">Some <span className="colored-header">good</span> reasons</h3>
                <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat. </p>  
             </div>     
          </div>  

          <div className="row">
             <div className="col-lg-4 col-md-4 co-sm-12 col-xs-12">
                <div className="good-content-here text-center">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <h3><span className="colored-header">+120</span> Premium Tours</h3>
                <p>
							Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
            <button type = "button" className="btn btn-outline-secondary custom-read-btns">READ MORE</button>
                </div>  
             </div>     

              <div className="col-lg-4 col-md-4 co-sm-12 col-xs-12">
                <div className="good-content-here text-center">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <h3><span className="colored-header">+1000</span> Customers</h3>
                <p>
							Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
            <button type = "button" className="btn btn-outline-secondary custom-read-btns">READ MORE</button>
                </div>  
             </div>     

              <div className="col-lg-4 col-md-4 co-sm-12 col-xs-12">
                <div className="good-content-here text-center">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <h3><span className="colored-header">H24</span> Support</h3>
                <p>
							Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
            <button type = "button" className="btn btn-outline-secondary custom-read-btns">READ MORE</button>
                </div>  
             </div>    
            
          </div>  
          <hr /> 

          <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="city-content">
                 <img src = {require('../img/laptop.png')} className="img-fluid" /> 
                 </div>
              </div>    

               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="city-content">
                 <h3><span>Get Started</span> with CityTours</h3>
                 <p>
						Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
					</p>
          <ol>
          <li> Select your preferred tours</li>
          <li> Purchase tickets and options</li>
          <li>Pick them directly from your office</li>
          </ol> 
          <button type="button" className="btn btn-info">START NOW</button>
                 </div>
              </div>    
          </div>    
       </div>            
     </section>           
          {/*end softwae solutions */}

          
          </div>
        
      </div>
    )
  }
}
export default Home