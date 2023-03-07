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
        <div className='text-lg-start categories p-3'>
          <h3>Search a plant by a category</h3>
        </div>
        <div className='text-lg-start p-3'>
          <h3>Browse different plants by a category</h3>
        </div>
        <div className='text-lg-start p-3'>
          <h3>Favorite your plants to view them in My Plants</h3>
        </div>
      </div>
      <main>
      <Footer />
      </main>
    </>
  );
}

export default FeaturePage;
