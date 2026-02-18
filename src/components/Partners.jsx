const styles = `
  .partners {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 60px;
    border-top: 1px solid #191A23;
    border-bottom: 1px solid #191A23;
    gap: 20px;
    flex-wrap: wrap;
  }
  .partner { color: #191A23; display: flex; align-items: center; gap: 6px; font-weight: 700; }
  .partner.amazon   { font-size: 26px; letter-spacing: -1px; }
  .partner.dribbble { font-size: 22px; font-style: italic; }
  .partner.hubspot  { font-size: 22px; }
  .partner.notion   { font-size: 20px; font-weight: 500; }
  .partner.netflix  { font-size: 22px; letter-spacing: 3px; }
  .partner.zoom     { font-size: 22px; }
  .notion-box {
    width: 22px; height: 22px; background: #191A23; border-radius: 4px;
    display: inline-flex; align-items: center; justify-content: center;
    color: #fff; font-size: 13px; font-weight: 700; flex-shrink: 0;
  }
  @media (max-width: 768px) {
    .partners { padding: 20px 24px; gap: 16px; }
    .partner.amazon { font-size: 20px; }
    .partner.netflix { font-size: 18px; }
  }
`;

export default function Partners() {
  return (
    <>
      <style>{styles}</style>
      <div className="partners">
        <span className="partner amazon">amazon</span>
        <span className="partner dribbble">dribbble</span>
        <span className="partner hubspot">HubSpot</span>
        <span className="partner notion">
          <span className="notion-box">N</span>Notion
        </span>
        <span className="partner netflix">NETFLIX</span>
        <span className="partner zoom">zoom</span>
      </div>
    </>
  );
}