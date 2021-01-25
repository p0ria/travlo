import React, { FC, useEffect, useRef } from 'react';
import './VertCounter.scss';

interface VertCounterProps {
    current: number;
    total: number;
    intervalDuration?: number;
    timerElapsed?: () => void;
}

const VertCounter: FC<VertCounterProps> = ({ current, total, intervalDuration = 3000, timerElapsed = () => { } }: VertCounterProps) => {
    const progressEl: any = useRef();
    const lower = Math.min(current, total);
    useEffect(() => {
        progressEl.current.style.transform = `scaleY(${lower / total})`;
    })
    useEffect(() => {
        const interval = setInterval(() => {
            timerElapsed();
        }, intervalDuration)
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div className="VertCounter">
            <div className="VertCounter__progressbar">
                <div className="VertCounter__progressbar__value" ref={progressEl}></div>
            </div>
            <span>{lower.toString().padStart(2, '0')}</span>
            <span>/</span>
            <span>{total.toString().padStart(2, '0')}</span>
        </div>
    )
}

export default VertCounter;

