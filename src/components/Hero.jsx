const styles = `
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 60px 80px;
    gap: 20px;
  }
  .hero-left { max-width: 530px; }
  .hero-left h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 32px;
    color: #191A23;
    letter-spacing: -1px;
  }
  .hero-left p {
    font-size: 18px;
    line-height: 1.6;
    color: #191A23;
    margin-bottom: 36px;
    max-width: 440px;
  }
  .hero-btn {
    background: #191A23;
    border: none;
    padding: 20px 36px;
    border-radius: 14px;
    font-size: 20px;
    font-family: 'Space Grotesk', sans-serif;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
  }
  .hero-btn:hover { opacity: 0.85; }
  .hero-right { flex-shrink: 0; }

  @media (max-width: 1024px) {
    .hero { flex-direction: column; padding: 40px 32px 60px; }
    .hero-left h1 { font-size: 44px; }
    .hero-right svg { width: 360px; height: 270px; }
  }
  @media (max-width: 640px) {
    .hero-left h1 { font-size: 36px; }
    .hero-right svg { width: 300px; height: 225px; }
  }
`;

export default function Hero() {
  return (
    <>
      <style>{styles}</style>
      <section className="hero">
        <div className="hero-left">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="hero-btn">Book a consultation</button>
        </div>
        <div className="hero-right">
          <svg width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Orbit ellipse dashed */}
            <ellipse cx="228" cy="188" rx="192" ry="112" stroke="#191A23" strokeWidth="2" strokeDasharray="10 7"/>
            {/* Green orbit dot */}
            <circle cx="112" cy="108" r="12" fill="#B9FF66"/>
            {/* Star decoration */}
            <path d="M44 50 L47 60 L57 60 L49 66 L52 76 L44 70 L36 76 L39 66 L31 60 L41 60 Z" fill="#191A23"/>
            {/* Megaphone body green */}
            <path d="M125 158 L222 136 L222 238 L125 216 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="2"/>
            {/* Megaphone wide dark */}
            <path d="M222 136 L335 82 L335 292 L222 238 Z" fill="#191A23" stroke="#191A23" strokeWidth="1.5"/>
            {/* Handle */}
            <rect x="98" y="158" width="38" height="55" rx="11" fill="#191A23"/>
            {/* Sound waves */}
            <path d="M348 145 Q372 187 348 230" stroke="#191A23" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M364 125 Q398 187 364 250" stroke="#191A23" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Heart icon */}
            <circle cx="390" cy="82" r="30" fill="#191A23"/>
            <path d="M390 97 C390 97 373 84 373 73 C373 66 379 62 385 64 C387 65 389 68 390 71 C391 68 393 65 395 64 C401 62 407 66 407 73 C407 84 390 97 390 97Z" fill="#FF5D8F"/>
            {/* Share icon */}
            <circle cx="444" cy="122" r="28" fill="#191A23"/>
            <circle cx="435" cy="116" r="4.5" fill="#fff"/>
            <circle cx="451" cy="109" r="4.5" fill="#fff"/>
            <circle cx="451" cy="129" r="4.5" fill="#fff"/>
            <path d="M439 117.5 L448 111M439 118.5 L448 127" stroke="#fff" strokeWidth="1.8"/>
            {/* Play icon */}
            <circle cx="458" cy="170" r="28" fill="#191A23"/>
            <path d="M450 158 L450 182 L470 170 Z" fill="#fff"/>
            {/* Location icon */}
            <circle cx="432" cy="222" r="28" fill="#B9FF66"/>
            <path d="M432 208 C424 208 418 214 418 222 C418 232 432 244 432 244 C432 244 446 232 446 222 C446 214 440 208 432 208Z" fill="#191A23"/>
            <circle cx="432" cy="222" r="6" fill="#B9FF66"/>
          </svg>
        </div>
      </section>
    </>
  );
}