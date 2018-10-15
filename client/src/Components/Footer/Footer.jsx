import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
   email: ""
  
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
        //   if (
        //     this.state.category === "" ||
        //     this.state.subcategory === "" ||
        //     this.state.company === "" ||
        //     this.state.model === "" ||
        //     this.state.manufacturing_year === ""
           
        //  ) {
        //     alert("Unable to contact because fields were left blank");
        //     }else {
        //         fetch(`/contact`,{
        //             method : "POST",
        //             headers : {
        //                 "Content-Type": "application/json; charset=utf-8"
        //             },
        //             body: JSON.stringify(this.state)
        //         }
        //         ).then(this.getWebsite);
        //       }
          this.setState ({
            email : ""

          })
          //replace /contact with server url
          fetch('/subscribe', {
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
        <footer>
            <div class="container">
                <div class="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h3>Need Help?</h3>
                    <i class="fa fa-phone" aria-hidden="true"></i><span className="fa-para">+45 423 445 99</span>
                    <br />
                    <i class="fa fa-envelope-o" aria-hidden="true"></i><span className="fa-para">help@citytours.com</span>
                </div>

                 <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h3>About</h3>
                  <ul>
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Terms &amp; Condition</li>
                  </ul>
                </div>

                 <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h3>Discover</h3>
                    <ul>
                  <li>Community Blog</li>
                  <li>Tour Guide</li>
                  <li>Wishlist</li>
                  <li>Gallery</li>
                  </ul>
                </div>

                 <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h3>Settings</h3>
                      <select className="form-control">
                      <option>English</option>
                      <option>Spain</option>
                      <option>Britain</option>
                      <option>Russian</option>
                      </select>
                      <br />

                       <select className="form-control">
                      <option>USD</option>
                      <option>RS</option>
                      <option>ZEN</option>
                      <option>YEN</option>
                      </select>
                </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="footer-social-icons text-center">
                        <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-pinterest-p" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
                        </ul>
                      </div>
                  </div>
                  <br />
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <p className="copy-para">Design And Developed by <strong>NEO404</strong></p>
                  </div>
                </div>
                </div>

                </footer>
    {/* end foter */}
      </div>
    )
  }
}

export default Footer
