import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, useToken } from './Token';
import './App.css';
import Nav from './Nav';
import HomePage from './Non-Auth/HomePage';
import LoginPage from './Non-Auth/LoginPage';
import SignUpPage from './Non-Auth/SignUp';


function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GetToken />
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
