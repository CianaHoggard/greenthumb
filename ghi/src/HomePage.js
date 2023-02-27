import { useToken, getTokenInternal } from './Token';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";


function HomePage() {

  const [plants, setPlants] = useState([]);
  const { token } = useToken();
  const navigate = useNavigate();


  // const getPlants = async () => {
  //   const token = await getTokenInternal();
  //   const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/category/Fern/`;
  //   try {
  //     const response = await fetch(url, {
  //       method: 'get',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       credentials: 'include'
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setPlants(data);
  //     }
  //   } catch (error) {
  //   }
  // }


  const isLoggedIn = async () => {
    const token = await getTokenInternal()
    if (!token) {
      setTimeout(() => {
        navigate("/login");
      }, 0);
    }
  }


  useEffect(() => {
    // getPlants();
    isLoggedIn();
  }, [token]);


  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1>Green Thumb</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          house plant care website
        </p>
      </div>
      {/* {plants.map((plant) => ( */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          {/* <Link to={`/plants/${plant.api_id}`}> */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
                <img src="http://www.tropicopia.com/house-plant/thumbnails/5556.jpg" className="w-25" alt="" />
          </div>
          <div className="carousel-item">
              <img src="http://www.tropicopia.com/house-plant/thumbnails/5725.jpg" className="w-25" alt="..." />
          </div>
          <div className="carousel-item">
              <img src="http://www.tropicopia.com/house-plant/thumbnails/5491.jpg" className="w-25" alt="..." />
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
          {/* </Link> */}
      </div>
    {/* ))} */}
    </div>
  );
}

export default HomePage;
