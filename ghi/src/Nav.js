import { NavLink, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useAuthContext, useToken } from './Token'
import logo from './small_green_thumb_logo.png'
import reverseLogo from './small_green_thumb_logo_reverse.png'

function Nav () {
  const { token } = useAuthContext()
  const { logout } = useToken()
  const [nonAuthButtons, setNonAuthButtons] = useState('')
  const [AuthButtons, setAuthButtons] = useState('')

  const isLoggedIn = () => {
    if (!token) {
      setNonAuthButtons('ml-auto')
      setAuthButtons('dropdown d-none')
    } else {
      setNonAuthButtons('ml-auto d-none')
      setAuthButtons('dropdown')
    }
  }

  useEffect(() => {
    isLoggedIn()
  })

  const handleLogOut = async () => {
    await logout()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar" style={{ backgroundColor: '#396955' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={token ? '/home' : '/'}>
          <img width="20%" src={logo} alt="" />
        </NavLink>
        <div className={nonAuthButtons}>
          <Link to="/signup">
            <button className="btn btn-outline-dark me-2">Sign up</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-dark">Login</button>
          </Link>
        </div>

        <div className={AuthButtons}>
          <button id="id-button" className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
            ≡
          </button>
          <ul id="dropdown" className="dropdown-menu dropdown-menu-end">
            <li>
              <NavLink className="dropdown-item" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" aria-current="page" to="/favorites">Favorites</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" aria-current="page" to="/categories">Categories</NavLink>
            </li>
            <li>
              <button className="dropdown-item" onClick={handleLogOut}>Log Out</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <span><img src={logo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={reverseLogo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={logo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={logo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={reverseLogo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={logo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={reverseLogo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={logo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={reverseLogo} alt="..." style={{ width: '50%' }} /></span>
        <span><img src={logo} alt="..." style={{ width: '50%' }} /></span>
      </div>
    </nav >
  )
}

export default Nav
