import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useToken } from './Token';
import './App.css';
import Nav from './Nav';
import MainPage from './MainPage';
import LoginPage from './LoginPage'
import SignUp from './SignUp'


function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null;
}


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="login" element={<LoginPage />} />
          {/* <AuthProvider>
            <GetToken />

          </AuthProvider> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
