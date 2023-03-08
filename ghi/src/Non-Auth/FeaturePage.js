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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: "15px" }}>
            <img src='/categories.png' alt='Categories Page' style={{ height: '200px', marginRight: '20px', boxShadow: '-3px 5px 10px grey', borderRadius: '5px' }} />
            <div>
              <h3>Categories Page</h3>
              <p style={{ fontSize: '14pt' }}>Browse over 20+ different types of house-plants in the new categories feature!</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: "15px", paddingRight: '170px' }}>
            <div>
              <h3>By Category Page</h3>
              <p style={{ fontSize: '14pt' }}>Search over 300+ types of different house-plants in each category by Latin or Common Name!</p>
            </div>
            <img src='/getbycategory.png' alt='By Categories Page' style={{ height: '200px', marginRight: '0px', marginLeft: '20px', boxShadow: '3px 5px 10px grey', borderRadius: '5px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: "15px" }}>
            <img src='/plantdetail.png' alt='Categories Page' style={{ height: '200px', marginRight: '20px', boxShadow: '-3px 5px 10px grey', borderRadius: '5px' }} />
            <div>
              <h3>Plant Details</h3>
              <p style={{ fontSize: '14pt' }}>Explore each plant and their descriptions to find a plant you like or have!</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: "15px" }}>
            <div>
              <h3>Favorites Page</h3>
              <p style={{ fontSize: '14pt' }}>Manage your top 5 favorite house-plants and get access to our Quick Care feature!</p>
            </div>
            <img src='/favorites.png' alt='Categories Page' style={{ height: '200px', marginRight: '0px', marginLeft: '20px', boxShadow: '3px 5px 10px grey', borderRadius: '5px' }} />
          </div>
        </div>
      </div>
      <main>
        <div style={{ marginTop: 20, padding: '20px', display: 'flex', justifyContent: 'space-around', marginBottom: -500 }}>
          <img src="/plant1.png" alt="Plant 1" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
          <img src="/plant5.png" alt="Plant 2" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
          <img src="/plant3.png" alt="Plant 3" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
          <img src="/plant5.png" alt="Plant 4" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
          <img src="/plant4.png" alt="Plant 5" style={{ margin: '0 10px', height: '200px', width: 'auto' }} />
        </div>
        <Footer style={{ position: "fixed" }} />
      </main>
    </>
  );
}

export default FeaturePage;
