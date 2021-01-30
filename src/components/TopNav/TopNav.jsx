import React from 'react';
import './TopNav.scss';

export default function TopNav() {
    return (
        <div className="TopNav">
            <div className="TopNav__logo">Travlo.</div>
            <div className="TopNav__langs">
                <div className="lang">EN</div>
                <div className="lang">DE</div>
            </div>
        </div>
    )
}