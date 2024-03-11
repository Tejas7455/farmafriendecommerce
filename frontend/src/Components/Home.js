import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';
function Home() {
  return (

  <main className='mt-4'>
    <div className='container'>
      {/* Latest Product */}
      <h3 className='mb-4'>Latest Products<NavLink to='/allproducts' className='float-end btn btn-sm btn-secondary'>View All Product 
      <i className="fa-solid fa-arrow-right-long"></i></NavLink></h3>
      {/* Product Area*/}
      <div className='row mb-4'>
        <SingleProduct title="Seeds 1"/>
        <SingleProduct title="Seeds 2"/>
        <SingleProduct title="Seeds 3"/>
        <SingleProduct title="Seeds 4"/>
    </div>
    {/* End Latest product */}

     {/* Popular Category */}
     <h3 className='mb-4'>Popular Category<a href='#' className='float-end btn btn-sm btn-secondary'>View All Category <i className="fa-solid fa-arrow-right-long"></i></a></h3>
    <div className="row mb-4">

      {/* Popular Category*/}
    <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
      </div>
      <div className='card-footer'>
       Product Download: 100
      </div>

    </div>
    </div>
    {/*popular End*/}
       {/* Product Category*/}
       <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
        </div>
        <div className='card-footer'>
        Product Download: 100
        </div>
    </div>
    </div>
    {/*Product End*/}
       {/* Product category*/}
    <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
        </div>
        <div className='card-footer'>
        Product Download: 100
        </div>
    </div>
    </div>
    {/*Product End*/}

    
     {/* Product Category*/}
     <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
        </div>
        <div className='card-footer'>
        Product Download: 100
        </div>

    </div>
    </div>
    {/*Product End*/}
    </div>
    
    {/* Popular Products */}
    <h3 className='mb-4'>Popular Products<a href='#' className='float-end btn btn-sm btn-secondary'>View All Popular Products <i className="fa-solid fa-arrow-right-long"></i></a></h3>
    <div className="row mb-4">

      {/* Popular Products */}
    <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
      </div>
      <div className='card-footer'>
       Product Download: 100
      </div>

    </div>
    </div>
    {/*Product End*/}
       {/*Popular Products*/}
       <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
        </div>
        <div className='card-footer'>
        Product Download: 100
        </div>
    </div>
    </div>
    {/*Product End*/}
       {/*Popular Products*/}
    <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
        </div>
        <div className='card-footer'>
        Product Download: 100
        </div>
    </div>
    </div>
    {/*Product End*/}

    
     {/*Popular Products*/}
     <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title">Product title</h4>
        </div>
        <div className='card-footer'>
        Product Download: 100
        </div>

    </div>
    </div>
    {/*Product End*/}
    </div>
    </div>
    
    </main>
    
  )
}

export default Home;