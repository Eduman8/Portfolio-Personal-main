import { contactLinks } from '../data/portfolio.js';

const footerMeta = [
  {
    label: 'Argentina',
    icon: 'location',
  },
  {
    label: 'Open to remote opportunities',
    icon: 'globe',
  },
];

const footerLinks = [
  {
    label: 'Email',
    href: contactLinks.email,
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: contactLinks.linkedin,
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'GitHub',
    href: contactLinks.github,
    icon: 'github',
    external: true,
  },
];

function FooterIcon({ name }) {
  const icons = {
    location: (
      <>
        <path d="M12 21s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4c2 2.2 3 4.8 3 8s-1 5.8-3 8" />
        <path d="M12 4c-2 2.2-3 4.8-3 8s1 5.8 3 8" />
      </>
    ),
    email: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="m5 8 7 5 7-5" />
      </>
    ),
    linkedin: (
      <path d="M6.7 19H4V9h2.7v10ZM5.35 7.7A1.55 1.55 0 1 1 5.35 4.6a1.55 1.55 0 0 1 0 3.1ZM20 19h-2.7v-5.1c0-1.2-.4-2-1.5-2-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.7V19h-2.7V9h2.7v1.4c.4-.6 1-1.6 2.5-1.6 1.8 0 3.3 1.2 3.3 3.9V19Z" />
    ),
    github: (
      <path d="M12 3.8a8.2 8.2 0 0 0-2.6 16c.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1-2.8-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 2 1 2.4.8.1-.5.3-.9.5-1.1-1.8-.2-3.8-.9-3.8-4a3.1 3.1 0 0 1 .9-2.2 2.9 2.9 0 0 1 .1-2.2s.7-.2 2.3.9a8 8 0 0 1 4.2 0c1.6-1.1 2.3-.9 2.3-.9.5 1.3.2 2.2.1 2.2.5.6.9 1.3.9 2.2 0 3.1-1.9 3.8-3.8 4 .3.2.6.7.6 1.5v2.1c0 .2.2.5.6.4A8.2 8.2 0 0 0 12 3.8Z" />
    ),
  };

  return (
    <span className="footer-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {icons[name]}
      </svg>
    </span>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-content">
          <div className="footer-profile">
            <a className="footer-name" href="#top">
              Eduardo Gómez
            </a>
            <p>Junior Front-End / Full-Stack Developer</p>
          </div>

          <div className="footer-meta" aria-label="Location and availability">
            {footerMeta.map((item) => (
              <div className="footer-meta-item" key={item.label}>
                <FooterIcon name={item.icon} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <nav className="footer-links" aria-label="Footer contact links">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                key={link.label}
              >
                <FooterIcon name={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Eduardo Gómez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
