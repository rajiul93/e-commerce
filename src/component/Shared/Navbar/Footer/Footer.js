import React from 'react';

const Footer = () => {
    return (
        <footer className='' style={{background:'white', padding:"1rem ", marginTop:"12px"}}>
            <hr />

            <div> <p className='text-center'> &copy; | <a target="blank" style={{textDecoration:"none", textAlign:"center", alignItem:"center" }} href="/">Rajiul Islam</a> | {(new Date()).getFullYear()}</p> </div>
        </footer>
    );
};

export default Footer;