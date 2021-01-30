import React from 'react';
import './AppFooterLeft.scss';
import { BiChevronRightCircle } from 'react-icons/bi'
import { footerMenuItems } from '../../common/constants';
import FooterMenuItem from '../FooterMenuItem/FooterMenuItem';

export default function AppFooterLeft() {
    return (
        <div className="AppFooterLeft">
            <div className="AppFooterLeft__cto">
                <div className="cto__title">
                    <span>travels</span>
                    <BiChevronRightCircle className="icon" />
                </div>
                <div className="cto__sub-title">
                    Start your free trip today.
                    No credit card requires.
                </div>
            </div>
            <div className="AppFooterLeft__menu">
                {
                    footerMenuItems.map((item, key) =>
                        <FooterMenuItem key={key}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    )
}
