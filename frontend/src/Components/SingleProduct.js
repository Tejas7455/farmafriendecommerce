import React from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';
function SingleProduct(props) {
  return (
      <div>
        {/* Single Product*/}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
      <NavLink to="/product/python-timer/123">
        <img src={logo} className="card-img-top" alt="logo" />
      </NavLink>
      <div className="card-body"> 
          <h4 className="card-title"><NavLink to="/product/python-timer/123">{props.title}</NavLink></h4>
          <h5 className="card-title text-muted">Price : Rs 300</h5>
        </div>
           <div className='card-footer'>
         <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
         <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
       </div>
       </div>
       </div>
       {/*Product End*/}
    </div>
  )
}

export default SingleProduct;