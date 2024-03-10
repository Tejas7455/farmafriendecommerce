import React from 'react'
import logo from '../logo.svg'
import SingleProduct from './SingleProduct'; 

function AllProducts() {
  return (
    <section className='container mt-4'>
       {/* Category Product */}
       <h3 className='mb-4'>All Products</h3>
     
       <div className="row mb-3">
        <SingleProduct title="Seeds 1"/>
        <SingleProduct title="Seeds 2"/>
        <SingleProduct title="Seeds 3"/>
        <SingleProduct title="Seeds 4"/>
        
        </div>
       
         {/* Product Area*/}
       <div className="col-12 col-md-3 mb-4">
       <div className="card">
       <img src={logo} className="card-img-top" alt="logo" />
       <div className="card-body">
           <h4 className="card-title">Product title</h4>
           <h5 className="card-title text-muted">Price : Rs 300</h5>
           </div>
       <div className='card-footer'>
         <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
         <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
       </div>
       </div>
       
       {/*Product End*/}
        </div> 
        {/*Pagination*/} 
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
       </section>
  )
}

export default AllProducts;