import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer__rights'>
        All rights reserved © {year} STAR WARS
      </div>
      <div className='footer__terms'>Privacy | Terms</div>
      <div className='footer__lang'>English</div>
    </div>
  );
};

export default Footer;
