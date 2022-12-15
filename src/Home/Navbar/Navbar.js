import React, { useState } from "react"
import Login from "../../pages/Login/Login";

import "./Navbar.css";
const Navbar=(props)=>{
  const [isLogin,setLogin] =useState(false)

  const modalClosehandler=(value)=>{
    setLogin(value)
  }
  
    return(
        <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a href="/" className="btn shadow-none d-flex align-items-center justify-content-between bg-clr text-white w-100" data-toggle="collapse" >
                    <h6 className="m-0">Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                    <div className="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                        <div className="nav-item dropdown">
                            <a href="/" className="nav-link" data-toggle="dropdown" aria-expanded="false">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute border-0 rounded-0 w-100 m-0">
                                <a href="/" className="dropdown-item">Men's Dresses</a>
                                <a href="/" className="dropdown-item">Women's Dresses</a>
                                <a href="/" className="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href="/" className="nav-item nav-link">Shirts</a>
                        <a href="/" className="nav-item nav-link">Jeans</a>
                        <a href="/" className="nav-item nav-link">Swimwear</a>
                        <a href="/" className="nav-item nav-link">Sleepwear</a>
                        <a href="/" className="nav-item nav-link">Sportswear</a>
                        <a href="/" className="nav-item nav-link">Jumpsuits</a>
                        <a href="/" className="nav-item nav-link">Blazers</a>
                        <a href="/" className="nav-item nav-link">Jackets</a>
                        <a href="/" className="nav-item nav-link">Shoes</a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    
                    <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse justify-content-between collapse" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/" className="nav-item nav-link">Shop</a>
                            <a href="/" className="nav-item nav-link">Shop Detail</a>
                            <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="/" className="dropdown-item">Shopping Cart</a>
                                    <a href="/" className="dropdown-item">Checkout</a>
                                </div>
                            </div>
                            <a href="/" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <button onClick={()=>setLogin(false)} href="/" className="nav-item nav-link">Login</button>
                            <a href="/" className="nav-item nav-link">Register</a>
                        </div>
                        <div>
                          {isLogin && <Login modalClose={modalClosehandler} />}
                        </div>
                    </div>
                </nav>
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" style={{height: "410px"}}>
                            <img className="img-fluid" src="https://technext.github.io/eshopper/img/carousel-1.jpg" alt="Imag"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <a href="/" className="btn btn-light text-dark py-2 px-3 ">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{height: "410px",padding:"20px"}}>
                            <img className="img-fluid" src="https://technext.github.io/eshopper/img/carousel-2.jpg" alt="Imag"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3 d-md-block">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4 ">Reasonable Price</h3>
                                    <a href="/" className="btn btn-light text-dark py-2 px-3 button ">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="/" data-slide="prev">
                        <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="/" data-slide="next">
                        <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Navbar;
  
    