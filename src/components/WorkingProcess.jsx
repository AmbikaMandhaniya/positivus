import { useState } from 'react';

const styles = `
  .process { padding: 80px 60px; }
  .process-header {
    display: flex;
    align-items: center;
    gap: 36px;
    margin-bottom: 70px;
  }
  .process-tag {
    background: #B9FF66;
    border-radius: 7px;
    padding: 6px 14px;
    font-size: 26px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;
  }
  .process-desc {
    font-size: 16px;
    line-height: 1.55;
    max-width: 400px;
  }
  .process-list { display: flex; flex-direction: column; gap: 24px; }

  .proc-item {
    border: 1px solid #191A23;
    border-radius: 45px;
    box-shadow: 4px 4px 0 0 #191A23;
    overflow: hidden;
  }
  .proc-body { display: none; }
  .proc-body-text {
    font-size: 16px;
    line-height: 1.7;
    color: #191A23;
    padding: 40px 56px 28px;
  }
  .proc-divider {
    border: none;
    border-top: 1px solid #191A23;
    margin: 0 56px;
  }
  .proc-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38px 56px;
    background: #F3F3F3;
    cursor: pointer;
  }
  .proc-row-left { display: flex; align-items: center; gap: 24px; }
  .proc-num   { font-size: 46px; font-weight: 700; color: #191A23; }
  .proc-title { font-size: 26px; font-weight: 700; color: #191A23; }
  .proc-toggle {
    width: 46px; height: 46px; border-radius: 50%;
    border: 1px solid #191A23; background: transparent;
    font-size: 26px; display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: #191A23; font-family: 'Space Grotesk', sans-serif;
    flex-shrink: 0; line-height: 1;
  }
  .proc-item.open .proc-body   { display: block; background: #B9FF66; }
  .proc-item.open .proc-row    { background: #B9FF66; }
  .proc-item.open .proc-toggle { background: #191A23; color: #fff; border-color: #191A23; }

  @media (max-width: 1024px) { .process { padding: 60px 32px; } }
  @media (max-width: 640px) {
    .process-header { flex-direction: column; align-items: flex-start; gap: 16px; }
    .proc-row { padding: 28px; }
    .proc-num { font-size: 36px; }
    .proc-title { font-size: 18px; }
    .proc-body-text { padding: 28px 28px 20px; }
    .proc-divider { margin: 0 28px; }
  }
`;

const STEPS = [
  {
    num: '01', title: 'Consultation',
    desc: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    num: '02', title: 'Research and Strategy Development',
    desc: 'We conduct thorough market research and competitive analysis to develop a data-driven strategy tailored specifically to your business goals and target audience.'
  }
];

export default function WorkingProcess() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{styles}</style>
      <section className="process">
        <div className="process-header">
          <span className="process-tag">Our Working Process</span>
          <p className="process-desc">Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <div className="process-list">
          {STEPS.map((step, i) => {
            const isOpen = open === i;
            const toggle = () => setOpen(isOpen ? -1 : i);
            return (
              <div key={i} className={`proc-item${isOpen ? ' open' : ''}`}>
                {/* Description shown ABOVE header row when open */}
                <div className="proc-body">
                  <p className="proc-body-text">{step.desc}</p>
                  <hr className="proc-divider" />
                </div>
                <div className="proc-row" onClick={toggle}>
                  <div className="proc-row-left">
                    <span className="proc-num">{step.num}</span>
                    <span className="proc-title">{step.title}</span>
                  </div>
                  <button
                    className="proc-toggle"
                    onClick={e => { e.stopPropagation(); toggle(); }}
                  >
                    {isOpen ? '−' : '+'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}