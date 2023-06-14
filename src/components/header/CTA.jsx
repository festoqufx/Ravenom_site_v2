import React from 'react';
import CV from '../../assets/resume4.pdf';

const CTA = () => {
  return (
    <div className="cta">

      <a href={CV} download className="btn">
        Download CV
      </a>
      {/* <a href="#contact" className="btn btn-primary">
        Let's talk
      </a> */}
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
};

export default CTA;
