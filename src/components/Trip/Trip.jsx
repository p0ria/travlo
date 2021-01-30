import React from 'react';
import { BiPlus } from 'react-icons/bi';
import './Trip.scss';

export default function Trip({ imageUrl, title, subTitle }) {
    return (
        <div className="Trip" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="Trip__texts">
                <div className="title">{title}</div>
                <div className="sub-title">{subTitle}</div>
            </div>
            <div className="Trip__btn">
                <BiPlus />
            </div>
        </div>
    )
}