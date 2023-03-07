import { useLocation } from "react-router-dom"
import './Footer.css';
import { Link } from "react-router-dom";


function Footer() {

    const location = useLocation()

    if (location.pathname === "/about") {
        return null
    } else {
        return (
            <footer id="footer">
                <div>
                    <Link className="footer-text" to="/about">About (Click here to meet the team! 😃)</Link>
                </div>
                <div>
                    <span className="footer-text">© 2023 GreenThumb™. Galvanize Hack Reactor - SJP Nov CT 2022.</span>
                </div>
            </footer>
        )
    }
}

export default Footer
