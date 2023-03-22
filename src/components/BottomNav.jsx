import React from 'react';
import { Link } from 'react-router-dom';

export function BottomNav() {
    return <div className='bottom-nav-container'>
        <div className='bottom-nav'>
            <Link to="/">
                <img width={20} src="public/phone.svg" alt="Feed" />
            </Link>
            <Link to="/details">
                <img width={20} src="public/user.svg" alt="Feed" />
            </Link>
            <Link to="/dial">
                <img width={70} src="public/dial.svg" alt="Feed" />
            </Link>
            <Link to="/configuration">
                <img width={20} src="public/cog.svg" alt="Feed" />
            </Link>
            <Link to="/">
                <img width={20} src="public/dotbutton.svg" alt="Feed" />
            </Link>
        </div>
    </div>;
}