import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <img src={logo} className="img-thumnail" alt="logo" />
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

    </section>
  )
}

export default ProductDetail;