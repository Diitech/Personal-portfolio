import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3>Joy Lucky</h3>
        <p>© {new Date().getFullYear()} All rights reserved.</p>

        <div className="footer__socials">
          <a href="https://github.com/Diitech" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer__icon" />
          </a>
          <a href="https://linkedin.com/in/lucky-j-33583322a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer__icon" />
          </a>
          <a href="https://twitter.com/DamzelDelia" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
