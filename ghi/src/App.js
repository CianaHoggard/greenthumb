import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, getToken, useToken } from './Token';
import './App.css';
import Nav from './Nav';
import FeaturePage from './Non-Auth/FeaturePage';
import LoginPage from './Non-Auth/LoginPage';
import SignUpPage from './Non-Auth/SignUpPage';
import CategoriesPage from "./CategoriesPage1";
import FavoritesPage from "./FavoritesPage";
import PlantDetails from "./PlantDetails";
import HomePage from "./HomePage";
import CategoryPage from "./GetByCategory"
import Loader from "./Loader"
import AboutUsPage from "./AboutUs";


function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null;
}

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <GetToken />
        <div className="container">
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<FeaturePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/plants/:id" element={<PlantDetails />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
