import { useToken } from '../Token';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


function HomePage() {

  const { token } = useToken()
  const [testClass, setTestClass] = useState()

  const isLoggedIn = () => {
    if (!token) {
      setTestClass("display-5 fw-bold d-none")
    } else {
      setTestClass("display-5 fw-bold")
    }
  }

  useEffect(() => {
    isLoggedIn();
  });


  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className={testClass}>Green Thumb</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          house plant care website
        </p>
      </div>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="..."
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="..."
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="..."
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default HomePage;
