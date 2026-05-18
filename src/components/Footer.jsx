import { contactLinks } from '../data/portfolio.js';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-profile">
          <a className="footer-name" href="#top">
            Eduardo Gómez
          </a>
          <p>Junior Front-End / Full-Stack Developer</p>
        </div>
        <div className="footer-meta" aria-label="Location and availability">
          <span>Argentina</span>
          <span>Open to remote opportunities</span>
        </div>
        <div className="footer-links" aria-label="Footer contact links">
          <a href={contactLinks.email}>Email</a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contactLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
