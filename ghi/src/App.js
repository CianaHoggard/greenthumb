import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, getToken, useToken } from './Token';
import './App.css';
import Nav from './Nav';
import HomePage from './Non-Auth/HomePage';
import LoginPage from './Non-Auth/LoginPage';
import SignUpPage from './Non-Auth/SignUpPage';
import CategoriesPage from "./CategoriesPage";
import FavoritesPage from "./FavoritesPage";
import CategoryPage from "./GetByCategory"

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
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
