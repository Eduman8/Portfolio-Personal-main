function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container hero-content">
        <p className="eyebrow">Available for junior developer opportunities</p>
        <h1>Hi, I&apos;m Eduardo Gómez</h1>
        <h2>Junior Front-End / Full-Stack Developer</h2>
        <p className="hero-description">
          I build clean, responsive and functional web applications using React,
          Node.js and PostgreSQL.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
