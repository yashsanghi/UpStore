import React from 'react';
import './ServiceStyles.css';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="brand">
                <a href="https://upstore.in/">
                  <img src={require('../Images/UpLogoFinal.png')} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="topbar">
                <div className="topbar-col">
                  <a href="tel:+012 345 67890">
                    <i className="fa fa-phone-alt"></i>+91 8605921423
                  </a>
                </div>
                <div className="topbar-col">
                  <a href="mailto:upstore101@gmail.com">
                    <i className="fa fa-envelope"></i>upstore101@gmail.com
                  </a>
                </div>
                <div className="topbar-col">
                  <div className="topbar-social">
                    <a href="https://upstore.in/services">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://upstore.in/services">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://upstore.in/services">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://upstore.in/services">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://upstore.in/services">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div className="navbar-nav ml-auto">
                    <a href="https://upstore.in/services" className="btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Header End -->


            <!-- Page Header Start --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Services</h2>
            </div>
            <div className="col-12">
              <a href="https://upstore.in/services">Home</a>
              <a href="https://upstore.in/services">Services</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End -->


            <!-- Service Start --> */}
      <div className="service">
        <div className="container-fluid">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium ornare velit non</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>Web Design</h3>
                <img src={require('../img/icon-service-1.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>Development</h3>
                <img src={require('../img/icon-service-2.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>UI Design</h3>
                <img src={require('../img/icon-service-3.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>Programming</h3>
                <img src={require('../img/icon-service-4.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>Graphic Design</h3>
                <img src={require('../img/icon-service-5.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>Video Editing</h3>
                <img src={require('../img/icon-service-6.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>SEO</h3>
                <img src={require('../img/icon-service-7.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <h3>Online Marketing</h3>
                <img src={require('../img/icon-service-8.png')} alt="Service" />
                <p>Lorem ipsum dolor sit amet elit pretium ornare</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End -->


            <!-- Service Row Start --> */}
      <div className="service-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-md-none d-block">
              <div className="service-row-img">
                <img src={require('../img/service-1.png')} alt="Service" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-row-text">
                <h2 className="section-title">Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
              </div>
            </div>
            <div className="col-md-6 d-md-block d-none">
              <div className="service-row-img">
                <img src={require('../img/service-1.png')} alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Row End -->


            <!-- Service Row Start --> */}
      <div className="service-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="service-row-img">
                <img src={require('../img/service-2.png')} alt="Service" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-row-text">
                <h2 className="section-title">Web Development</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Row End -->


            <!-- Service Row Start --> */}
      <div className="service-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-md-none d-block">
              <div className="service-row-img">
                <img src={require('../img/service-3.png')} alt="Service" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-row-text">
                <h2 className="section-title">Web Security</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
              </div>
            </div>
            <div className="col-md-6 d-md-block d-none">
              <div className="service-row-img">
                <img src={require('../img/service-3.png')} alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Row End -->


            <!-- Service Row Start --> */}
      <div className="service-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="service-row-img">
                <img src={require('../img/service-4.png')} alt="Service" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-row-text">
                <h2 className="section-title">Online Marketing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Row End -->


            <!-- Call to Action Start --> */}
      <div className="call-to-action">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9">
              <h2>Get A Free Quote</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet metus sit amet</p>
            </div>
            <div className="col-md-3">
              <a href="https://upstore.in/services" className="btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to Action End -->


            <!-- Footer Start --> */}

      {/* <!-- Footer End --> */}
    </div>
  );
}
