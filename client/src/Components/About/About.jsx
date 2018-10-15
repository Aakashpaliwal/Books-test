import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './About.css'

class About extends Component {
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
                <h3 className="cart-header">About US</h3>
            </div>
          </div>
        </div>

      </div>
</div>

{/*content begins here */}
<section className="about-content">
    <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
         <h1>SOME GOOD REASON</h1>
         <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>   
      </div>      
    </div>
            
      <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="customer-left-side-box">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <i className="fa fa-user-o"></i>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <h3><span>+ 1000</span> Customers</h3>
                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                </div>
              </div>
            </div>
            </div>

             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <div className="customer-left-side-box">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <i class="fa fa-flag-o" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <h3><span>10 Languages</span> available</h3>
                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                </div>
              </div>
            </div>
            </div>
      </div>

      
      <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="customer-left-side-box">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <i class="fa fa-wheelchair" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <h3><span>Accesibility</span> managment</h3>
                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                </div>
              </div>
            </div>
            </div>

             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <div className="customer-left-side-box">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <i class="fa fa-paw" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <h3><span>Pet</span> Allowed</h3>
                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                </div>
              </div>
            </div>
            </div>
      </div> 

      <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="customer-left-side-box">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <i class="fa fa-headphones" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <h3><span>H24</span> support</h3>
                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                </div>
              </div>
            </div>
            </div>

             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <div className="customer-left-side-box">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <h3><span>+120</span> Premium city tours</h3>
                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                </div>
              </div>
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

<section className="background-about-here">
<div className="container-fluid">
<div className="row">
<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-img-600">
<div className="">
</div>
</div>
<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-pink-bg">
<div className="">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
<button type="button" className="btn btn-light custom-btn-pink">READ MORE</button>
</div>
</div>
</div>
</div>
</section>

{/*end here */}
                
            </div>
            </React.Fragment>
        );
    }
}

export default About;