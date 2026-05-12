function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Eduardo Gómez. All rights reserved.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
