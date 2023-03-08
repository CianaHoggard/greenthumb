import '../HomePage.css';
import Footer from '../Footer';

function FeaturePage() {

  return (
    <>
      <div className="px-1 py-2 my-2 text-center">
        <h1 className='name'>Green Thumb</h1>
        <div className="col-lg-6 mx-auto">
          <h1 className="display-6">
            House plant care website
          </h1>
        </div>
        <div className="text-lg-start">
          <h2>Sign Up to enjoy our sites features</h2>
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
                className="feature"
                alt="Search a plant by a category"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ textShadow: "2px black" }}>Search a plant by a category</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="orchid_cactus.jpeg"
                className="feature"
                alt="Browse different plants by a category"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ textShadow: "2px black" }}>Browse different plants by a category</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="golden_trumpet.png"
                className="feature"
                alt="Favorite your plants to view them in My Plants"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ textShadow: "2px black" }}>Add a plant to view in Favorites</h5>
              </div>
            </div>
            {/* <div className="carousel-item">
              <img
                src="moth_orchid.jpg"
                className="flower"
                alt="Moth Orchid"
              />
              <div className="carousel-caption d-none d-md-block">
                  <h5>Moth Orchid</h5>
              </div>
            </div> */}
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
        {/* <div className='text-lg-start categories p-3'>
          <h3>Search a plant by a category</h3>
        </div>
        <div className='text-lg-start p-3'>
          <h3>Browse different plants by a category</h3>
        </div>
        <div className='text-lg-start p-3'>
          <h3>Favorite your plants to view them in My Plants</h3>
        </div> */}
      </div>
      <main>
        <Footer style={{ position: "fixed" }} />
      </main>
    </>
  );
}

export default FeaturePage;
