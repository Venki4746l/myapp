import React, { useState } from "react";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Login from "../../pages/Login/Login";

const Navbar = () => {
  const [isLogin, setLogin] = useState(false);

  const modalClosehandler = (value) => {
    setLogin(value);
  };
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100"
              data-toggle="collapse"
<<<<<<< HEAD
              href="..."
              style={{height:"65px",backgroundColor:"#D19C97",marginTop:"-1px",padding:"0 30px",ariaExpanded:"true",}}
=======
              href="#navbar-vertical"
              style={{
                height: "65px",
                backgroundColor: "#D19C97",
                marginTop: "-1px",
                padding: "0 30px",
                ariaExpanded: "true",
              }}
>>>>>>> origin/Venkateswara_rao
            >
              <h6 className="m-4 text-dark">Categories</h6>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="m-3"
                style={{ height: "20px", width: "80px" }}
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </a>
            <nav
              className="navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 collapse show"
              id="navbar-vertical"
              style={{}}
            >
              <div
                className="navbar-nav w-100 overflow-hidden navslide"
                style={{ height: "410px" }}
              >
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    Dresses &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="m-3"
                      style={{ height: "20px", width: "80px" }}
                    >
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg> */}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
<<<<<<< HEAD
                    <Dropdown.Item href="...">Men's Dresses</Dropdown.Item>
                    <Dropdown.Item href="...">Women's Dresses</Dropdown.Item>
                    <Dropdown.Item href="...">Baby's Dresses</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                  <a href="..." className="nav-item nav-link">Shirts</a>
                  <a href="..." className="nav-item nav-link">Jeans</a>
                  <a href="..." className="nav-item nav-link">Swimwear</a>
                  <a href="..." className="nav-item nav-link">Sleepwear</a>
                  <a href="..." className="nav-item nav-link">Sportswear</a>
                  <a href="..." className="nav-item nav-link">Jumpsuits</a>
                  <a href="..." className="nav-item nav-link">Blazers</a>
                  <a href="..." className="nav-item nav-link">Jackets</a>
                  <a href="..." className="nav-item nav-link">Shoes</a>
=======
                    <Dropdown.Item href="#/action-1">
                      Men's Dresses
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Women's Dresses
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Baby's Dresses
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <a href="kd" className="nav-item nav-link">
                  Shirts
                </a>
                <a href="kd" className="nav-item nav-link">
                  Jeans
                </a>
                <a href="kd" className="nav-item nav-link">
                  Swimwear
                </a>
                <a href="kd" className="nav-item nav-link">
                  Sleepwear
                </a>
                <a href="kd" className="nav-item nav-link">
                  Sportswear
                </a>
                <a href="kd" className="nav-item nav-link">
                  Jumpsuits
                </a>
                <a href="kd" className="nav-item nav-link">
                  Blazers
                </a>
                <a href="kd" className="nav-item nav-link">
                  Jackets
                </a>
                <a href="kd" className="nav-item nav-link">
                  Shoes
                </a>
>>>>>>> origin/Venkateswara_rao
              </div>
            </nav>
          </div>

          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="..." className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  <span className="heading">Shopper</span>
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between d-lg-block"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
<<<<<<< HEAD
                  <a href="..." className="nav-item nav-link items">Home</a>
                  <a href="..." className="nav-item nav-link items">Shop</a>
                  <a href="..." className="nav-item nav-link items">Shop Detail</a>
                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="...">Shopping Cart</NavDropdown.Item>
                    <NavDropdown.Item href="...">Checkout</NavDropdown.Item>
                  </NavDropdown>
                  <a href="..." className="nav-item nav-link items">Contact</a>
=======
                  <a href="index.html" className="nav-item nav-link items">
                    Home
                  </a>
                  <a href="shop.html" className="nav-item nav-link items">
                    Shop
                  </a>
                  <a href="detail.html" className="nav-item nav-link items">
                    Shop Detail
                  </a>
                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Shopping Cart
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Checkout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <a href="contact.html" className="nav-item nav-link items">
                    Contact
                  </a>
>>>>>>> origin/Venkateswara_rao
                </div>
                
                <div className="navbar-nav ml-auto py-0">
<<<<<<< HEAD
                  <a href="..." className="nav-item nav-link items">Login</a>
                  <a href="..." className="nav-item nav-link items">Register</a>
=======
                  <button
                    onClick={() => setLogin(true)}
                    className="border-0 nav-item nav-link items"
                  >
                    Login
                  </button>
                  <a href=".." className="nav-item nav-link items">
                    Register
                  </a>
>>>>>>> origin/Venkateswara_rao
                </div>
                {isLogin && <Login modalClose={modalClosehandler} />}
              </div>
            </nav>

            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
<<<<<<< HEAD
                  <img src="https://technext.github.io/eshopper/img/carousel-1.jpg" className="d-block w-100" alt="Images"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                          <h3 className="display-4 text-white font-weight-bold mb-4">Reasonable Price</h3>
                            <a href="..." className="btn btn-light py-2 px-3">Shop Now</a>
                      </div>
=======
                  <img
                    src="https://technext.github.io/eshopper/img/carousel-1.jpg"
                    className="d-block w-100"
                    alt="Images"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        10% Off Your First Order
                      </h4>
                      <h3 className="display-4 text-white font-weight-bold mb-4">
                        Reasonable Price
                      </h3>
                      <a href="kd" className="btn btn-light py-2 px-3">
                        Shop Now
                      </a>
>>>>>>> origin/Venkateswara_rao
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
<<<<<<< HEAD
                  <img src="https://technext.github.io/eshopper/img/carousel-2.jpg" className="d-block w-100" alt="Images"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                          <h3 className="display-4 text-white font-weight-bold mb-4">Fashionable Dress</h3>
                            <a href="..." className="btn btn-light py-2 px-3">Shop Now</a>
                      </div>
=======
                  <img
                    src="https://technext.github.io/eshopper/img/carousel-2.jpg"
                    className="d-block w-100"
                    alt="Images"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        10% Off Your First Order
                      </h4>
                      <h3 className="display-4 text-white font-weight-bold mb-4">
                        Fashionable Dress
                      </h3>
                      <a href="kd" className="btn btn-light py-2 px-3">
                        Shop Now
                      </a>
>>>>>>> origin/Venkateswara_rao
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
