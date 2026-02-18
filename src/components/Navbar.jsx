const styles = `
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 60px;
  }
  .nav-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 700;
    color: #191A23;
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    gap: 38px;
    list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    color: #191A23;
    font-size: 16px;
    font-weight: 400;
  }
  .nav-links a:hover { text-decoration: underline; }
  .nav-btn {
    border: 1px solid #191A23;
    padding: 14px 28px;
    border-radius: 14px;
    background: transparent;
    font-size: 16px;
    font-family: 'Space Grotesk', sans-serif;
    cursor: pointer;
    color: #191A23;
    transition: background 0.2s, color 0.2s;
  }
  .nav-btn:hover { background: #191A23; color: #fff; }

  @media (max-width: 768px) {
    .nav { padding: 16px 24px; }
    .nav-links { display: none; }
  }
`;

const AsteriskIcon = () => (
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
    <path d="M20 4V36M4 20H36M7 7L33 33M33 7L7 33"
      stroke="#191A23" strokeWidth="4.5" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <a className="nav-logo" href="#">
          <AsteriskIcon />
          Positivus
        </a>
        <ul className="nav-links">
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <button className="nav-btn">Request a quote</button>
      </nav>
    </>
  );
}