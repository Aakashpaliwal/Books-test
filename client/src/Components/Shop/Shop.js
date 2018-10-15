import React, { Component } from 'react';
import './Shop.css';
import {Link} from 'react-router-dom';
class Shop extends Component {
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

{/*content here */}
<section className="shop-content">
<div className="container">
    <div className="row">
    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <div className="left-side-content">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-item">
            <div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<a href="shop-single.html"><img src={require('../img/products/image-1.jpg')} className="img-fluid" />
											</a>
										</figure>
										<div class="item-options clearfix">
											<a href="shopping-cart.html" class="btn_shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to cart
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-heart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to Fav
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-eye" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                View
                                            </div>
                                            </a>
										</div>
									</div>
									<div class="product_description">
										<div class="rating">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
										</div>
										<h3><a href="shop-single.html">Travel Book</a></h3>
										<div class="price">
											<span class="offer">$20.00</span> $15.00
										</div>
									</div>
								</div>
            </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-item">
            <div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<a href="shop-single.html"><img src={require('../img/products/image-2.jpg')} className="img-fluid" />
											</a>
										</figure>
										<div class="item-options clearfix">
											<a href="shopping-cart.html" class="btn_shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to cart
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-heart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to Fav
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-eye" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                View
                                            </div>
                                            </a>
										</div>
									</div>
									<div class="product_description">
										<div class="rating">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
										</div>
										<h3><a href="shop-single.html">Travel Book</a></h3>
										<div class="price">
											<span class="offer">$20.00</span> $15.00
										</div>
									</div>
								</div>
            </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-item">
            <div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<a href="shop-single.html"><img src={require('../img/products/image-3.jpg')} className="img-fluid" />
											</a>
										</figure>
										<div class="item-options clearfix">
											<a href="shopping-cart.html" class="btn_shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to cart
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-heart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to Fav
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-eye" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                View
                                            </div>
                                            </a>
										</div>
									</div>
									<div class="product_description">
										<div class="rating">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
										</div>
										<h3><a href="shop-single.html">Travel Book</a></h3>
										<div class="price">
											<span class="offer">$20.00</span> $15.00
										</div>
									</div>
								</div>
            </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-item">
            <div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<a href="shop-single.html"><img src={require('../img/products/image-4.jpg')} className="img-fluid" />
											</a>
										</figure>
										<div class="item-options clearfix">
											<a href="shopping-cart.html" class="btn_shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to cart
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-heart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to Fav
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-eye" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                View
                                            </div>
                                            </a>
										</div>
									</div>
									<div class="product_description">
										<div class="rating">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
										</div>
										<h3><a href="shop-single.html">Travel Book</a></h3>
										<div class="price">
											<span class="offer">$20.00</span> $15.00
										</div>
									</div>
								</div>
            </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-item">
            <div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<a href="shop-single.html"><img src={require('../img/products/image-5.jpg')} className="img-fluid" />
											</a>
										</figure>
										<div class="item-options clearfix">
											<a href="shopping-cart.html" class="btn_shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to cart
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-heart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to Fav
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-eye" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                View
                                            </div>
                                            </a>
										</div>
									</div>
									<div class="product_description">
										<div class="rating">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
										</div>
										<h3><a href="shop-single.html">Travel Book</a></h3>
										<div class="price">
											<span class="offer">$20.00</span> $15.00
										</div>
									</div>
								</div>
            </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-item">
            <div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<a href="shop-single.html"><img src={require('../img/products/image-6.jpg')} className="img-fluid" />
											</a>
										</figure>
										<div class="item-options clearfix">
											<a href="shopping-cart.html" class="btn_shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to cart
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-heart" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                Add to Fav
                                            </div>
                                            </a>
											<a href="shop-single.html" class="btn_shop"><i class="fa fa-eye" aria-hidden="true"></i>
                                            <div class="tool-tip">
                                                View
                                            </div>
                                            </a>
										</div>
									</div>
									<div class="product_description">
										<div class="rating">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
										</div>
										<h3><a href="shop-single.html">Travel Book</a></h3>
										<div class="price">
											<span class="offer">$20.00</span> $15.00
										</div>
									</div>
								</div>
            </div>
            <hr />
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <hr />
                <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                </div>
            </div>
            </div>
            </div>
                
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="right-side-content">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">
    <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </div>
</div>
                        </div>
                       
                    </div>
                    <hr />
                    <div className="row categories-row">
                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 categories">
                            <h3>Categories</h3>
                            <br />
                            <p>Places To Visit</p>
                            <hr />
                            <p>Top Tours</p>
                            <hr />
                            <p>Tips for traveller</p>
                            <hr />
                            <p>Events</p>
                           <hr />
                       </div>     
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 categories">
                            <h3>Top Rated</h3>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="right-book-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <img src={require('../img/products/thumb-1.jpg')} className="img-fluid" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 thumb-para">
                                    <p className="text-left">Grunge Fashion</p>
                                    <p className="text-left">$ 15.00</p>
                                    <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <img src={require('../img/products/thumb-2.jpg')} className="img-fluid" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 thumb-para">
                                    <p className="text-left">Grunge Fashion</p>
                                    <p className="text-left">$ 15.00</p>
                                    <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <img src={require('../img/products/thumb-3.jpg')} className="img-fluid" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 thumb-para">
                                    <p className="text-left">Grunge Fashion</p>
                                    <p className="text-left">$ 15.00</p>
                                    <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <hr />
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

export default Shop;