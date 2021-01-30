import React, { useCallback, useState } from 'react';
import { sliderImages } from '../../common/constants';
import Slider from '../Slider/Slider';
import TopNav from '../TopNav/TopNav';
import VertCounter from '../VertCounter/VertCounter';
import './AppLeft.scss';

export default function AppLeft() {
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    const sliderOnTimerElapsed = useCallback(() => {
        setCurrentSliderIndex(index => (index + 1) % 5);
    }, []);

    return (
        <div className="AppLeft">
            <TopNav />
            <Slider
                index={currentSliderIndex}
                images={sliderImages.map(si => `assets/images/sliders/${si}`)} />
            <VertCounter
                total={5}
                current={currentSliderIndex + 1}
                timerElapsed={sliderOnTimerElapsed} />
        </div>
    )
}