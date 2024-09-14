
import React from 'react';
import './Footer.css';
import facebookLogo from './img/Facebook-Logo-PNG-Isolated-HD.png';
import instaLogo from './img/insta logo.jpg';
import twitterLogo from './img/twitter-logo-twitter-icon-twitter-symbol-free-free-vector.jpg';

export default function Footer() {
    return (
        <div>
            <>
                <footer>
                    <ul>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                        <li><a href="#">Latter we will update this portion.</a></li>
                    </ul>

                    <ul>
                        <li><a href="https://www.facebook.com"><img src={facebookLogo} alt="facebook" /></a></li>
                        <li><a href="https://www.instagram.com"><img src={instaLogo} alt="instagram" /></a></li>
                        <li><a href="https://www.twitter.com"><img src={twitterLogo} alt="twitter" /></a></li>
                    </ul>
                </footer>
            </>
        </div>
    )
}
