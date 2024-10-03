import React from 'react'
import '../Footer.css';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h3>Company</h3>
                        <ul>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/careers'>Careers</a></li>
                            <li><a href='/press'>Press</a></li>
                            <li><a href='/blog'>Blog</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Support</h3>
                        <ul>
                            <li><a href='/help'>Help Center</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                            <li><a href='/faq'>FAQ</a></li>
                            <li><a href='/shipping'>Shipping & Returns</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href='https://facebook.com'>Facebook</a></li>
                            <li><a href='https://twitter.com'>Twitter</a></li>
                            <li><a href='https://instagram.com'>Instagram</a></li>
                            <li><a href='https://linkedin.com'>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom text-center'>
                    <p className='text-center'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer