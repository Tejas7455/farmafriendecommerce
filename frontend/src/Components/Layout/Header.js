import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
            <NavLink className="navbar-brand" to="/">FarmaFriend</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/categories">Categories</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">Pricing</NavLink>
                </li>
            </ul>
            <span className="navbar-text">
                FarmaFriend
            </span>

            </div>
        </div>
        </nav>
    </>
  )
}

export default Header