function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-card">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s talk about how I can contribute to your team.</h2>
        <p>
          I am open to junior front-end and full-stack opportunities where I can
          contribute to real products, keep improving and build clean,
          functional web applications.
        </p>
        <div className="contact-links">
          <a href="mailto:eduardo.gomez@example.com">Email me</a>
          <a href="#">LinkedIn</a>{' '}
          {/* TODO: Replace with your LinkedIn profile URL. */}
          <a href="#">GitHub</a>{' '}
          {/* TODO: Replace with your GitHub profile URL. */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
