import React from 'react';
import Camera from '../../images/hero/camera.jpg';
import earphone from '../../images/hero/earphone.jpg';
import smartWatch from '../../images/hero/smartwatch.jpg';

const Hero = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner text-center">

          <div className="carousel-item active " data-bs-interval="1000">
              <h2 className='my-3' >Apple Camera</h2>
            <img style={{maxHeight:'500px'}} src={Camera} className="img-fluid mx-auto d-block  " width={500} alt="camera"/>
              <h3>Price: 33000Tk</h3>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
              <h2 className='my-3'>Apple Smart-Watch</h2>
            <img style={{maxHeight:'500px'}} src={smartWatch} className="img-fluid mx-auto d-block  " width={500} alt="smart watch"/>
              <h3>Price: 2400Tk</h3>
            </div>

          <div className="carousel-item" data-bs-interval="2000">
              <h2 className='my-3'>Apple-Earphone</h2>
            <img style={{maxHeight:'500px'}} src={earphone} className="img-fluid mx-auto d-block  " width={500} alt="earphone"/>
              <h3>Price: 1600Tk</h3>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Hero;