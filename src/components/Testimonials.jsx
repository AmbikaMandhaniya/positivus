import { useState } from 'react';

const styles = `
  .testimonials { padding: 80px 60px; }
  .testi-header {
    display: flex;
    align-items: center;
    gap: 36px;
    margin-bottom: 70px;
  }
  .testi-tag {
    background: #B9FF66;
    border-radius: 7px;
    padding: 6px 14px;
    font-size: 26px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;
  }
  .testi-desc { font-size: 16px; line-height: 1.55; max-width: 500px; }

  .testi-wrap {
    border: 1px solid #5B3FBF;
    border-radius: 45px;
    background: #191A23;
    padding: 80px 56px 60px;
    overflow: hidden;
  }
  .testi-track-wrap { overflow: hidden; }
  .testi-track {
    display: flex;
    gap: 28px;
    transition: transform 0.5s ease;
  }
  .testi-card {
    border: 1px solid #B9FF66;
    border-radius: 40px;
    padding: 40px 48px 48px;
    flex: 0 0 calc(33.333% - 19px);
    min-width: calc(33.333% - 19px);
    position: relative;
  }
  .testi-card::after {
    content: '';
    position: absolute;
    bottom: -22px; left: 52px;
    width: 0; height: 0;
    border-left: 22px solid transparent;
    border-top: 22px solid #B9FF66;
  }
  .testi-text   { font-size: 16px; line-height: 1.75; color: #fff; margin-bottom: 44px; }
  .testi-author { color: #B9FF66; font-size: 18px; font-weight: 700; margin-bottom: 4px; }
  .testi-role   { color: #fff; font-size: 15px; }

  .testi-controls {
    display: flex; align-items: center; justify-content: center;
    gap: 28px; margin-top: 60px;
  }
  .testi-arrow {
    background: transparent; border: none; cursor: pointer;
    display: flex; align-items: center; padding: 0;
  }
  .testi-dots { display: flex; gap: 14px; align-items: center; }
  .testi-dot {
    width: 13px; height: 13px; border-radius: 50%;
    border: 1.5px solid #fff; cursor: pointer;
    background: transparent; transition: background 0.2s, border-color 0.2s;
  }
  .testi-dot.active { background: #B9FF66; border-color: #B9FF66; }

  @media (max-width: 1024px) {
    .testimonials { padding: 60px 32px; }
    .testi-card { flex: 0 0 80%; min-width: 80%; }
  }
  @media (max-width: 640px) {
    .testi-header { flex-direction: column; align-items: flex-start; gap: 16px; }
    .testi-wrap { padding: 48px 24px 40px; border-radius: 24px; }
    .testi-card { flex: 0 0 90%; min-width: 90%; padding: 28px; }
  }
`;

const ITEMS = [
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: 'John Smith', role: 'Marketing Director at XYZ Corp'
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: 'John Smith', role: 'Marketing Director at XYZ Corp'
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: 'John Smith', role: 'Marketing Director at XYZ Corp'
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: 'John Smith', role: 'Marketing Director at XYZ Corp'
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: 'John Smith', role: 'Marketing Director at XYZ Corp'
  }
];

export default function Testimonials() {
  const [slide, setSlide] = useState(0);
  const VISIBLE  = 3;
  const maxSlide = ITEMS.length - VISIBLE;

  return (
    <>
      <style>{styles}</style>
      <section className="testimonials">
        <div className="testi-header">
          <span className="testi-tag">Testimonials</span>
          <p className="testi-desc">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital
            Marketing Services
          </p>
        </div>

        <div className="testi-wrap">
          <div className="testi-track-wrap">
            <div
              className="testi-track"
              style={{ transform: `translateX(calc(-${slide} * (33.333% + 9.33px)))` }}
            >
              {ITEMS.map((t, i) => (
                <div key={i} className="testi-card">
                  <p className="testi-text">{t.text}</p>
                  <p className="testi-author">{t.author}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="testi-controls">
            <button
              className="testi-arrow"
              onClick={() => setSlide(s => Math.max(s - 1, 0))}
              aria-label="Previous"
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="17" r="16" stroke="#fff" strokeWidth="1.5"/>
                <path d="M21 9L13 17L21 25" stroke="#fff" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="testi-dots">
              {ITEMS.map((_, i) => (
                <div
                  key={i}
                  className={`testi-dot${slide === i ? ' active' : ''}`}
                  onClick={() => setSlide(Math.min(i, maxSlide))}
                />
              ))}
            </div>

            <button
              className="testi-arrow"
              onClick={() => setSlide(s => Math.min(s + 1, maxSlide))}
              aria-label="Next"
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="17" r="16" stroke="#fff" strokeWidth="1.5"/>
                <path d="M13 9L21 17L13 25" stroke="#fff" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}