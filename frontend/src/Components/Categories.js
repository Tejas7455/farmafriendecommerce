import React from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'

function Categories() {
  return (
    <section className='container mt-4'>
         
    {/* Popular Products */}
    <h3 className='mb-4'>All Categories<a href='#' className='float-end btn btn-sm btn-secondary'>All Categories<i className="fa-solid fa-arrow-right-long"></i></a></h3>
    <div className="row mb-4">

      {/* Popular Products */}
    <div className="col-12 col-md-3 mb-4">
    <div className="card">
    <img src={logo} className="card-img-top" alt="logo" />
    <div className="card-body">
        <h4 className="card-title"><NavLink to="/category/seeds/1">Product title</NavLink></h4>
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
        <h4 className="card-title"><NavLink>Product title</NavLink></h4>
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
        <h4 className="card-title"><NavLink>Product title</NavLink></h4>
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
        <h4 className="card-title"><NavLink>Product title</NavLink></h4>
        </div>
        <div className='card-footer'>
        Product Download: 100
        </div>

    </div>
    </div>
    {/*Product End*/}
    </div>
    </section>
  )
}

export default Categories;