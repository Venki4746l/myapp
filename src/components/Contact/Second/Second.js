import React from 'react';
import './Second.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Second = () => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className='d-flex'>

            <div>
                <h5 className="font-weight-bold mb-3">Get In Touch</h5>
                {/* font-weight is for text font-model & mb is for  margin bottom */}
                <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                    <div className="d-flex flex-column mb-3">
                        <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                        <p className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#D19C97" style={{height:'20px',width:'20px'}}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>  123 Street, New York, USA</p>
                        <p className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#D19C97" style={{height:'20px',width:'20px'}}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>  info@example.com</p>
                        <p className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#D19C97" style={{height:'20px',width:'20px'}}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>  +012 345 67890</p>
                    </div>
                   
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Second;
