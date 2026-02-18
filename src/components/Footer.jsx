const styles = `
  .footer {
    background: #191A23;
    border-radius: 45px 45px 0 0;
    padding: 56px 60px 48px;
  }
  .footer-top {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 60px;
  }
  .footer-logo {
    display: flex; align-items: center; gap: 10px;
    font-size: 20px; font-weight: 700; color: #fff; text-decoration: none;
  }
  .footer-links { display: flex; gap: 36px; list-style: none; }
  .footer-links a { color: #fff; text-decoration: underline; font-size: 16px; }
  .footer-socials { display: flex; gap: 14px; }
  .footer-social {
    width: 38px; height: 38px; border-radius: 50%; background: #fff;
    display: flex; align-items: center; justify-content: center; cursor: pointer;
  }
  .footer-social svg { width: 18px; height: 18px; fill: #191A23; }

  .footer-mid {
    display: flex; align-items: flex-start; justify-content: space-between; gap: 40px;
    padding: 56px 0; border-top: 1px solid #fff; border-bottom: 1px solid #fff;
    margin-bottom: 40px;
  }
  .footer-contact h4 {
    background: #B9FF66; display: inline-block;
    border-radius: 7px; padding: 4px 12px;
    font-size: 18px; font-weight: 700; color: #191A23; margin-bottom: 24px;
  }
  .footer-contact p { color: #fff; font-size: 16px; margin-bottom: 8px; line-height: 1.6; }

  .footer-newsletter {
    background: #292A32; border-radius: 14px;
    padding: 32px 36px; display: flex; gap: 16px; align-items: center; flex-shrink: 0;
  }
  .footer-input {
    background: transparent; border: 1px solid #fff; border-radius: 14px;
    padding: 16px 22px; font-size: 16px; color: #fff;
    font-family: 'Space Grotesk', sans-serif; outline: none; width: 280px;
  }
  .footer-input::placeholder { color: rgba(255,255,255,0.5); }
  .footer-subscribe {
    background: #B9FF66; border: none; border-radius: 14px;
    padding: 16px 28px; font-size: 16px;
    font-family: 'Space Grotesk', sans-serif;
    cursor: pointer; color: #191A23; font-weight: 500; white-space: nowrap;
  }
  .footer-bottom { display: flex; align-items: center; gap: 40px; }
  .footer-bottom p { color: #fff; font-size: 16px; }
  .footer-bottom a { color: #fff; font-size: 16px; text-decoration: underline; }

  @media (max-width: 1024px) {
    .footer { padding: 40px 32px; }
    .footer-top { flex-wrap: wrap; gap: 20px; }
    .footer-mid { flex-direction: column; gap: 32px; }
  }
  @media (max-width: 640px) {
    .footer-top { flex-direction: column; }
    .footer-newsletter { flex-direction: column; }
    .footer-input { width: 100%; }
  }
`;

const AsteriskIcon = () => (
  <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
    <path d="M20 4V36M4 20H36M7 7L33 33M33 7L7 33"
      stroke="#fff" strokeWidth="4.5" strokeLinecap="round"/>
  </svg>
);

export default function Footer() {
  return (
    <>
      <style>{styles}</style>
      <footer className="footer">
        <div className="footer-top">
          <a className="footer-logo" href="#">
            <AsteriskIcon />
            Positivus
          </a>
          <ul className="footer-links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className="footer-socials">
            <div className="footer-social">
              <svg viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="footer-social">
              <svg viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </div>
            <div className="footer-social">
              <svg viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="footer-mid">
          <div className="footer-contact">
            <h4>Contact us:</h4>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
          </div>
          <div className="footer-newsletter">
            <input className="footer-input" type="email" placeholder="Email" />
            <button className="footer-subscribe">Subscribe to news</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
}