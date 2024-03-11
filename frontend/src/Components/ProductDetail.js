import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import SingleProduct from './SingleProduct';

function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4"> 
        <div id="productThumbnailSlider" className="carousel carousel-dark slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logo} className="img-thumbnail mb-5" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src={logo} className="img-thumbnail mb-5" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src={logo} className="img-thumbnail mb-5" alt="logo" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
        </div>
        <div className="col-8">
          <h3>Product Title</h3>
          <p>
           The standard chunk of Lorem Ipsum used since the 1500s
           is reproduced below for those interested. 
           Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
          </p>
          <h5 className='card-title'>Price: Rs.100</h5>
          <p className='mt-3'>
          <NavLink title="Demo" target="blank" className='btn btn-dark btn-sm'><i className="fa-solid fa-video"></i> Demo</NavLink>
          <button title="Add to Cart" className='btn btn-primary btn-sm ms-2'><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
          <button title="buy Now" className='btn btn-success btn-sm ms-2'><i className="fa-solid fa-bag-shopping"></i> Buy Now</button>
          <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i> Wishlist</button>
          </p>
          <hr />
          <div className='producttags'>
            <h5 className='mt-3'>Tags</h5>
            <p>
              <NavLink to="#" className="badge bg-secondary text-white me-1">Seeds</NavLink>
              <NavLink to="#" className="badge bg-secondary text-white me-1"> Pesticides</NavLink>
              <NavLink to="#" className="badge bg-secondary text-white me-1"> Compost</NavLink>
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <h5 className='mt-5 mb-3'>Related Product</h5>
      <div id="relatedProductSlider" className="carousel carousel-dark slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
         <div className='row mb-4'>
          <SingleProduct title="Seeds 1"/>
          <SingleProduct title="Seeds 1"/>
          <SingleProduct title="Seeds 1"/>
          <SingleProduct title="Seeds 1"/>
         </div>
        </div>
        <div className="carousel-item">
        <div className='row mb-4'>
          <SingleProduct title="Seeds 2"/>
          <SingleProduct title="Seeds 2"/>
          <SingleProduct title="Seeds 2"/>
          <SingleProduct title="Seeds 2"/>
         </div>
        </div>
        <div className="carousel-item">
        <div className='row mb-4'>
          <SingleProduct title="Seeds 3"/>
          <SingleProduct title="Seeds 3"/>
          <SingleProduct title="Seeds 3"/>
          <SingleProduct title="Seeds 3"/>
         </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      {/* End Related Products*/}
    </section>
  )
}

export default ProductDetail;