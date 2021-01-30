import React from 'react';
import './FooterMenuItem.scss';

export default function FooterMenuItem({ icon: Icon, title, subTitle, date }) {
    return (
        <div className="FooterMenuItem">
            <div className="FooterMenuItem__left">
                <Icon />
            </div>
            <div className="FooterMenuItem__right">
                <span className="title">{title}</span>
                <span className="sub-title">{subTitle}</span>
                <span className="date">{date}</span>
            </div>
        </div>
    )
}