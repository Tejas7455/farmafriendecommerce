import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

function Checkout(props) {
  return (
        <div className='container mt-4'>
            <h3 className='mb-4'>All Items(4)</h3>
            <div className='row'>
                <div className='col-md-8 col-12'>
                <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Products</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Seeds</p></NavLink>
                            </td>
                            <td>Rs. 100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Pesticides</p></NavLink>
                            </td>
                            <td>Rs. 150</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Fertilizers</p></NavLink>
                            </td>
                            <td>Rs. 250</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Organic</p></NavLink>
                            </td>
                            <td>Rs. 300</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total Amount</th>
                            <th>Rs. 500</th>
                        </tr>
                        <tr>
                            <td colSpan='3' align='center'> 
                                    <NavLink to='/categories' className='btn btn-secondary'>Continue Shopping</NavLink>
                                    <NavLink className='btn btn-primary ms-2'>Proceed to Payment</NavLink>
                            </td>
                            
                        </tr>
                    </tfoot>

                </table>
            </div>
                </div>
            </div>
            
        
        </div>
  )
}

export default Checkout