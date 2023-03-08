import { useToken, getTokenInternal } from "./Token";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./HomePage.css";
import Footer from "./Footer";

import Loader from "./Loader";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [plants, setPlants] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const isLoggedIn = async () => {
    const token = await getTokenInternal();
    if (!token) {
      setTimeout(() => {
        navigate("/login");
      }, 0);
    }
  };

  const splitCommonName = (plant) => {
    if (plant.common_name == null) {
      return (plant.common_name = "No common name found");
    }
    let formattedName = plant.common_name[0];
    if (plant.common_name.length >= 2) {
      for (let i = 1; i < plant.common_name.length; i++) {
        formattedName += ", " + plant.common_name[i];
      }
    }
    plant.common_name = formattedName;
  };

  const getFavoritesList = async (favorites) => {
    const token = await getTokenInternal();
    const promises = favorites.map(async (favorite) => {
      try {
        const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${favorite[1]}/`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });
        if (response.ok) {
          const favoriteData = await response.json();
          return favoriteData;
        }
      } catch (error) { }
    });
    const favoritesList = await Promise.all(promises);
    favoritesList.sort((p1, p2) =>
      p1.latin_name > p2.latin_name ? 1 : p1.latin_name < p2.latin_name ? -1 : 0
    );
    favoritesList.map((plant) => {
      splitCommonName(plant);
    });
    setPlants(favoritesList);
  };

  const getFavorites = async () => {
    const token = await getTokenInternal();
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/favorites`;
    try {
      const response = await fetch(url, {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setFavorites(data);
        getFavoritesList(favorites);
        setTimeout(() => setIsLoading(false), 2000);
      }
    } catch (error) { }
  };

  useEffect(() => {
    isLoggedIn();
    getFavorites();
  }, [isLoading]);

  return (
    <>
      <div className="plant-background">
        <div className="px-4 mt-1 pt-1 text-center">
          <h1 className="name">Green Thumb</h1>
          <div className="col-lg-6 mx-auto">
            <h1 className="display-6">House plant care website</h1>
          </div>
          {isLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <>
              <div>
                <h3 className="space">Staff Picks</h3>
              </div>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="chinese_hibiscus.jpg"
                      className="flower"
                      alt="Chinese Hibiscus"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <Link
                        to={`/plants/dfa12209-629d-5044-a07d-36ee25775ceb`}
                        className="link"
                      >
                        <h5>Chinese Hibiscus</h5>
                      </Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="orchid_cactus.jpeg"
                      className="flower"
                      alt="Orchid Cactus"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <Link
                        to={`/plants/7a698b73-71e7-5f59-b2eb-113383159521`}
                        className="link"
                      >
                        <h5>Orchid Cactus</h5>
                      </Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="golden_trumpet.png"
                      className="flower"
                      alt="Golden Trumpet"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <Link
                        to={`/plants/fe7fd0b2-2842-5ff5-8ffa-c7bc8fe1d6bf`}
                        className="link"
                      >
                        <h5>Golden Trumpet</h5>
                      </Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="moth_orchid.jpg"
                      className="flower"
                      alt="Moth Orchid"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <Link
                        to={`/plants/e6af814b-953d-5397-bf94-827042967a25`}
                        className="link"
                      >
                        <h5>Moth Orchid</h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-controls">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="favorites">
                <h2>Favorite Plants Quick Care</h2>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Latin Name</th>
                    <th>Common Name</th>
                    <th>Pruning</th>
                    <th>Watering</th>
                  </tr>
                </thead>
                <tbody>
                  {plants.map((plants) => {
                    return (
                      <tr key={plants.api_id}>
                        <td>{plants.latin_name}</td>
                        <td>{plants.common_name}</td>
                        <td>{plants.pruning}</td>
                        <td>{plants.watering}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div style={{ marginTop: 20, padding: '20px', display: 'flex', justifyContent: 'space-around', marginBottom: -500 }}>
                <img src="/plant1.png" alt="Plant 1" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
                <img src="/plant5.png" alt="Plant 2" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
                <img src="/plant3.png" alt="Plant 3" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
                <img src="/plant5.png" alt="Plant 3" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
                <img src="/plant4.png" alt="Plant 3" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
              </div>
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
