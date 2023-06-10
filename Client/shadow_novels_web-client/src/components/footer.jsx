import React from 'react';
import '../styles/footer.scss';
import { Link } from 'react-router-dom';

const Footer=()=>{
    return (
        <div className='footer'>
            <div className="footerListItems">
            <Link className='listItem' to={'/'}>Home</Link>
            <Link className='listItem' to={'/'}>About Us</Link>
            <Link className='listItem' to={'/'}>Privacy Policy</Link>
            <Link className='listItem' to={'/'}>Terms of Use</Link>
            </div>
            <div className="copyrightLable">Copyright © 2023 - Shadow Novels</div>
        </div>
    );
};

export default Footer;