import './AboutUs.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons'

function AboutUsPage () {
  return (
        <div className="container pt-5">

            <div className="row">
                <div className="col-lg-4">
                    <div className="section-title" data-aos="fade-right">
                        <h2>From the team</h2>
                        <p>Hi and Welcome!</p>
                        <p id="thankyou">Thanks for coming here to meet us. 😊</p>
                        <p>Our names are Christian, Ciana, Matthew, and Megan, and
                            we are team 4 from the November 2022 CT Cohort of Galvanize Hack Reactor.</p>
                        <p>Green Thumb is a project we made for our software engineering course and we hope you enjoy it.</p>
                        <p></p>
                        <div>To make this vision come to life 🌱, we have combined:
                            <ul>
                                <li>Python</li>
                                <li>SQL</li>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            in a tech stack comprised of:
                            <ul>
                                <li>FASTapi</li>
                                <li>PostgreSQL</li>
                                <li>React.js</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <p>The plant data throughout the website all come from a third party API named House Plants API
                            which you can find on RapidAPI. Currently, there are many limitations that we have had to work around therefore one
                            of our stretch goals for this project is to find a more suitable API and adjust our project for it. Otherwise,
                            we hope you have fun exploring!
                        </p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                <div className="pic"><img src="christian.jpg" className="id-img" alt="christian" /></div>
                                <div className="member-info">
                                    <h4>Christian Rodriguez</h4>
                                    <span>Fullstack Software Engineer</span>
                                    <p>Long Island, New York</p>
                                    <div className="social">
                                        <Link to="https://www.linkedin.com/in/christian-arodriguez/" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                size="2x"
                                                className="icon" />
                                        </Link>
                                        <Link to="https://gitlab.com/ChrisARod" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faGitlab}
                                                size="2x"
                                                style={{ color: '#ffaa2e' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member" data-aos="zoom-in" data-aos-delay="200">
                                <div className="pic"><img src="ciana.jpg" className="id-img" alt="ciana" /></div>
                                <div className="member-info">
                                    <h4>Ciana Hoggard</h4>
                                    <span>Fullstack Software Engineer</span>
                                    <p>Potomac, Maryland</p>
                                    <div className="social">
                                        <Link to="https://www.linkedin.com/in/cianahoggard/" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                size="2x"
                                                className="icon" />
                                        </Link>
                                        <Link to="https://gitlab.com/cianahoggard" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faGitlab}
                                                size="2x"
                                                style={{ color: '#ffaa2e' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member" data-aos="zoom-in" data-aos-delay="300">
                                <div className="pic"><img src="matt.jpg" className="id-img" alt="matt" /></div>
                                <div className="member-info">
                                    <h4>Matthew Sun</h4>
                                    <span>Fullstack Software Engineer</span>
                                    <p>Brooklyn, New York</p>
                                    <div className="social">
                                        <Link to="https://www.linkedin.com/in/matthewsun220/" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                size="2x"
                                                className="icon" />
                                        </Link>
                                        <Link to="https://gitlab.com/msun220" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faGitlab}
                                                size="2x"
                                                style={{ color: '#ffaa2e' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src="megan.jpg" className="id-img" alt="megan" /></div>
                                <div className="member-info">
                                    <h4>Megan Rodriguez</h4>
                                    <span>Fullstack Software Engineer</span>
                                    <p>Houston, Texas</p>
                                    <div className="social">
                                        <Link to="https://www.linkedin.com/in/megan-rodriguez10/" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                size="2x"
                                                className="icon" />
                                        </Link>
                                        <Link to="https://gitlab.com/megann1006" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faGitlab}
                                                size="2x"
                                                style={{ color: '#ffaa2e' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="footer-message">
                        <p>Connect with us! 🤗</p>
                        <p>Repo Link Here: <Link to="https://gitlab.com/megann1006/module3-project-gamma" target="_blank">Click me!</Link></p>
                    </div>

                </div>
            </div>

        </div>
  )
}

export default AboutUsPage
