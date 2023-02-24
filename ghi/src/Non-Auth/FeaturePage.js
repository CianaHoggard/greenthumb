import { useToken } from '../Token';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


function FeaturePage() {

  // const { token } = useToken()
  // const [testClass, setTestClass] = useState()

  // const isLoggedIn = () => {
  //   if (!token) {
  //     setTestClass("display-5 fw-bold d-none")
  //   } else {
  //     setTestClass("display-5 fw-bold")
  //   }
  // }

  // useEffect(() => {
  //   isLoggedIn();
  // });


  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className='display-5 fw-bold'>Green Thumb</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          house plant care website
        </p>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default FeaturePage;
