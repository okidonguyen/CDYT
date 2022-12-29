// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function RegisterOnline(args) {
    return (
        <div style={{ zIndex: 999 }}>
            <a href={'https://www.messenger.com/t/101848558696310/'} target="_blank">
                <img src={require('~/assets/images/facebook.ico')} width="50px" />
            </a>
            <br />
            <a href={'https://www.messenger.com/t/101848558696310/'} target="_blank">
                <img src={require('~/assets/images/zalo_icon.png')} width="80px" />
            </a>
            <br />
            <a href={'tel:02623845678'} target="_blank">
                <img src={require('~/assets/images/call_icon.png')} width="50px" />
            </a>
        </div>
    );
}

export default RegisterOnline;
