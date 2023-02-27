import { useToken, getTokenInternal } from './Token';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";


function HomePage() {

  const { token } = useToken();
  const navigate = useNavigate();


  const isLoggedIn = async () => {
    const token = await getTokenInternal()
    if (!token) {
      setTimeout(() => {
        navigate("/login");
      }, 0);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [token]);


  return (
    <div className="plant-background">
      <div className="px-4 py-5 my-5 text-center">
        <h1>Green Thumb</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            house plant care website
          </p>
        </div>
        <div>
          <h3>Staff Picks</h3>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="chinese_hibiscus.jpg" className="w-50" alt="Chinese Hibiscus" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Chinese Hibiscus</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="orchid_cactus.jpeg" className="w-50 h-60" alt="Orchid Cactus" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Orchid Cactus</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="golden_trumpet.png" className="w-50" alt="Golden Trumpet" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Golden Trumpet</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="moth_orchid.jpg" className="w-50" alt="Moth Orchid" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Moth Orchid</h5>
              </div>
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
    </div >
  );
}

export default HomePage;
