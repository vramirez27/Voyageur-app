import React from 'react';
import Button  from 'components/Button/Button.js';
import 'components/Footer/Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className = 'footer-container'>
            <section className = 'footer-subscription'>
                <h2 className = 'footer-subscription-header'>
                    Join the Voyageur newsletter to receive our hot deals
                </h2>
                <small className = 'footer-subscription-text'>
                    Unsubscribe at any time
                </small>
                <div className = 'input-areas'>
                    <form >
                         <input type = 'email' name= 'email' placeholder = 'Your Email Address'
                         className = 'footer-input'/>
                         <Button  buttonStyle = 'btn--outline'>Subscribe</Button>
                    </form>
                </div>

            </section>
                <div className = 'footer-links'>
                    <div className = 'footer-link-wrapper'>
                        <div className = 'footer-link-items'>
                            <h2>About Us</h2>
                            <Link to = '/sign-up'>How We Work</Link>
                            <Link to = '/'>We Make  Memories</Link>
                            <Link to = '/'>Careers</Link>
                            <Link to = '/'>Invest In US</Link>
                            <Link to = '/'>Terms of Services</Link>


                        </div>
                        <div className = 'footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to = '/sign-up'>Contact</Link>
                            <Link to = '/'>Support Us</Link>
                            <Link to = '/'>Our Destinations</Link>
                            <Link to = '/'>Sponsorships</Link>
                            


                        </div>
                    </div>
                    <div className = 'footer-link-wrapper'>
                        <div className = 'footer-link-items'>
                            <h2>Our Videos</h2>
                            <Link to = '/'>Submit videos</Link>
                            <Link to = '/'>Ambassadors</Link>
                            <Link to = '/'>Agency</Link>
                            <Link to = '/'>Influencer</Link>
                           


                        </div>
                        <div className = 'footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to = '/'>Instagram</Link>
                            <Link to = '/'>Facebook</Link>
                            <Link to = '/'>Youtube</Link>
                            <Link to = '/'>Twitter</Link>
                           
                        </div>
                    </div>
                </div>
                <section className = 'social-media'>
                    <div className = 'social-media-wrap'>
                        <div className = 'footer-logo'>
                            <Link to = '/' className = 'social-logo'>
                                <i className="fa fa-globe" /> VOYAGEUR </Link>
                        </div>
                        <small className = 'website-rights'>VOYAGEUR ©2020</small>
                        <small className='creator'>SYLVAIN YABRE</small>
                        <div className= 'social-icons'>
                            <Link className= 'social-icon-link facebook'
                            to = '/'
                            target = '_blank'
                            aria-label = 'Facebook'><i className = 'fab fa-facebook-f'/>
                            </Link>
                            <Link className= 'social-icon-link instagram'
                            to = '/'
                            target = '_blank'
                            aria-label = 'Instagram'><i className = 'fab fa-instagram'/>
                            </Link>
                            <Link className= 'social-icon-link twitter'
                            to = '/'
                            target = '_blank'
                            aria-label = 'Twitter'><i className = 'fab fa-twitter'/>
                    
                            </Link>
                            <Link className= 'social-icon-link linkedin'
                            to = '/'
                            target = '_blank'
                            aria-label = 'Linkedin'><i className = 'fab fa-linkedin'/>
                            </Link>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Footer
