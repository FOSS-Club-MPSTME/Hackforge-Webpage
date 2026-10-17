import { FaLocationDot, FaEnvelope, FaPhone, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { footer, footerExplore, contact, socials, footerLink } from '../data/event'

const socialIcons = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  github: FaGithub,
}

export default function Footer() {
  return (
    <footer className="foss-footer">
      <div className="ft-grid">
        <div className="ft-brand">
          <div className="ft-brand-top">
            <img src={footer.logo} alt="" />
            <span>{footer.name}</span>
          </div>

          {footer.graphic && (
            <div className="ft-brand-art">
              <div className="ft-graphic">
                <img src={footer.graphic} alt="FOSS Club" />
              </div>
            </div>
          )}
        </div>

        <nav className="ft-col" aria-label="Explore">
          <h4>EXPLORE</h4>
          <ul className="ft-links">
            {footerExplore.map((item) => (
              <li key={item.label}>
                <a href={item.href || '#'}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ft-col">
          <h4>CONTACT</h4>
          <ul className="ft-contact">
            <li>
              <FaLocationDot aria-hidden="true" />
              <div>
                <span className="ft-org">{contact.organisation}</span>
                {contact.address}
              </div>
            </li>
            {contact.email && (
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            {contact.phone && (
              <li>
                <FaPhone aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </li>
            )}
          </ul>
        </div>

        <div className="ft-col">
          <h4>FOLLOW US</h4>
          <div className="ft-socials">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.url || '#'}
                  target={social.url ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  {Icon && <Icon aria-hidden="true" />}
                </a>
              )
            })}
          </div>
          <a
            className="ft-united"
            href={footerLink.url || '#'}
            target={footerLink.url ? '_blank' : undefined}
            rel="noreferrer"
          >
            {footerLink.label} →
          </a>
        </div>
      </div>
    </footer>
  )
}