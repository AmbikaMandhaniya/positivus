const styles = `
  .services { padding: 80px 60px; }

  .section-header {
    display: flex;
    align-items: center;
    gap: 36px;
    margin-bottom: 70px;
  }
  .section-tag {
    background: #B9FF66;
    border-radius: 7px;
    padding: 6px 14px;
    font-size: 26px;
    font-weight: 700;
    color: #191A23;
    white-space: nowrap;
    line-height: 1;
  }
  .section-desc {
    font-size: 16px;
    line-height: 1.55;
    color: #191A23;
    max-width: 500px;
  }
  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .svc-card {
    border: 1px solid #191A23;
    border-radius: 45px;
    padding: 50px 58px 60px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    min-height: 220px;
    box-shadow: 4px 4px 0 0 #191A23;
  }
  .svc-card.gray  { background: #F3F3F3; }
  .svc-card.green { background: #B9FF66; }
  .svc-card.dark  { background: #191A23; }

  .svc-card-left {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  .svc-card-title { font-size: 26px; font-weight: 700; line-height: 1.35; }

  .hl-green {
    background: #B9FF66; border-radius: 7px;
    padding: 2px 8px; display: inline-block; margin-bottom: 3px;
  }
  .hl-white {
    background: #fff; border-radius: 7px;
    padding: 2px 8px; display: inline-block; margin-bottom: 3px;
  }

  .learn-more {
    display: flex; align-items: center; gap: 14px;
    text-decoration: none; color: #191A23;
    font-size: 18px; font-weight: 400;
  }
  .learn-more.on-dark { color: #fff; }
  .learn-icon {
    width: 36px; height: 36px; border-radius: 50%;
    background: #191A23;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .learn-more.on-dark .learn-icon { background: #fff; }
  .svc-card-img { flex-shrink: 0; display: flex; align-items: flex-end; }

  @media (max-width: 1024px) {
    .services { padding: 60px 32px; }
    .services-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
    .svc-card { padding: 36px; flex-direction: column; align-items: flex-start; gap: 24px; }
    .svc-card-title { font-size: 22px; }
  }
`;

const ArrowNE = ({ onDark }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 14L14 2M14 2H4M14 2V12"
      stroke={onDark ? '#191A23' : '#fff'}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SEOImg = () => (
  <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
    <circle cx="70" cy="70" r="60" stroke="#191A23" strokeWidth="2"/>
    <ellipse cx="70" cy="70" rx="32" ry="60" stroke="#191A23" strokeWidth="2"/>
    <line x1="10" y1="70" x2="130" y2="70" stroke="#191A23" strokeWidth="1.5"/>
    <line x1="70" y1="10" x2="70" y2="130" stroke="#191A23" strokeWidth="1" strokeDasharray="6 5"/>
    <circle cx="70" cy="70" r="9" fill="#191A23"/>
    <circle cx="128" cy="28" r="24" fill="#B9FF66" stroke="#191A23" strokeWidth="2"/>
    <circle cx="124" cy="24" r="11" stroke="#191A23" strokeWidth="2" fill="transparent"/>
    <line x1="132" y1="32" x2="140" y2="40" stroke="#191A23" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const PPCImg = () => (
  <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
    <rect x="4" y="18" width="112" height="86" rx="10" stroke="#191A23" strokeWidth="2" fill="transparent"/>
    <rect x="4" y="18" width="112" height="28" rx="10" fill="#191A23"/>
    <circle cx="18" cy="32" r="5.5" fill="#fff" opacity="0.6"/>
    <circle cx="33" cy="32" r="5.5" fill="#B9FF66" opacity="0.9"/>
    <rect x="18" y="62" width="70" height="7" rx="3" fill="#191A23" opacity="0.22"/>
    <rect x="18" y="78" width="52" height="7" rx="3" fill="#191A23" opacity="0.18"/>
    <path d="M118 82 L138 108 L142 93 L156 99 L140 76 Z" fill="#191A23"/>
    <circle cx="138" cy="122" r="17" stroke="#191A23" strokeWidth="1.8" fill="transparent"/>
    <ellipse cx="138" cy="122" rx="9" ry="17" stroke="#191A23" strokeWidth="1.8"/>
    <line x1="121" y1="122" x2="155" y2="122" stroke="#191A23" strokeWidth="1.5"/>
  </svg>
);


const SERVICES = [
  {
    bg: 'gray',
    title: <><span className="hl-green">Search engine</span><br /><span className="hl-green">optimization</span></>,
    Img: SEOImg, dark: false
  },
  {
    bg: 'green',
    title: <><span className="hl-white">Pay-per-click</span><br /><span className="hl-white">advertising</span></>,
    Img: PPCImg, dark: false
  }
];

export default function Services() {
  return (
    <>
      <style>{styles}</style>
      <section className="services">
        <div className="section-header">
          <span className="section-tag">Services</span>
          <p className="section-desc">
            At our digital marketing agency, we offer a range of services to help businesses grow and
            succeed online. These services include:
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map(({ bg, title, Img, dark }, i) => (
            <div key={i} className={`svc-card ${bg}`}>
              <div className="svc-card-left">
                <div className="svc-card-title">{title}</div>
                <a href="#" className={`learn-more${dark ? ' on-dark' : ''}`}>
                  <span className="learn-icon">
                    <ArrowNE onDark={!dark} />
                  </span>
                  Learn more
                </a>
              </div>
              <div className="svc-card-img"><Img /></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}