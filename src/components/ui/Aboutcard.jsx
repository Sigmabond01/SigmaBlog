import React from 'react';
import styled from 'styled-components';

const Aboutcard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-overlay" />
        <div className="card-inner">
          <p>
            I go by <strong>Sigmabond</strong> — dev, builder, and engineering student navigating the chaos of code and creation.
            <br /><br />
            I started this blog to document the unfiltered journey: the things I build, the lessons I bleed for, and the mindset it takes to go from average to lethal.
            <br /><br />
            This isn’t a portfolio. It’s proof of work.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .card {
    --bg: #0b0f1a;
    --contrast: #111827;
    --grey: #27272a;
    position: relative;
    padding: 12px;
    background-color: var(--bg);
    border-radius: 35px;
    box-shadow: 
      rgba(72, 43, 150, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.5) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    max-width: 400px;
    width: 100%;
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-conic-gradient(var(--bg) 0.0000001%, var(--grey) 0.000104%) 60% 60%/600% 600%;
    filter: opacity(8%) contrast(105%);
    border-radius: 35px;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: var(--contrast);
    border-radius: 30px;
    padding: 1.5rem;
    font-size: 0.9rem;
    font-weight: 400;
    color: #cbd5e1; /* slate-300 */
    text-align: center;
    font-family: 'Fira Code', monospace;
    line-height: 1.6;
  }

  strong {
    color: #7f5af0; /* signature violet */
    font-weight: 700;
  }
`;

export default Aboutcard;
