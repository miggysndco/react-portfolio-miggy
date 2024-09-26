import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer_container container">
            <div class="footer_left">
                <h1 class="footer_title">Miggy.</h1>
                <span class="footer_copy">&#169; Miguel Sandico. All rights reserved</span>
            </div>

            <div class="footer_social">
                <ul class="footer_list">
                    <li>
                        <a href="#about" class="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#services" class="footer_link">Services</a>
                    </li>

                    <li>
                        <a href="#projects" class="footer_link">Projects</a>
                    </li>
                </ul>

                <div class="footer_social-icons">
                    <a href="https://instagram.com" className="footer_social-link" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://facebook.com" className="footer_social-link" target="_blank">
                        <i class="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://github.com" className="footer_social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
