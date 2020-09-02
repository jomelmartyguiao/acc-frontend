import React from 'react';
import footerimage from '../../assets/images/logo-acc.png'

export const Footer = () => {
  return(
    <div className="footer-wrapper">
      <img src={footerimage} alt="footer" />
      <p className="body-text">All rights reserved</p>
    </div>
  );
}