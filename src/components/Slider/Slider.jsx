import React from 'react';
import './Slider.scss';

export default function Slider({ images = [], index = 0 }) {
    return (
        <div className="Slider">
            {
                images.map((image, key) =>
                    <img key={key}
                        src={image}
                        className={`${key === index ? 'active' : ''}`} />)
            }
        </div>
    )
}