import React from 'react';

import Chapter from './Chapter';
import {
    ResponsiveBr,
    ResponsiveBrReverse
} from './ResponsiveBr';

const Contact = (props) => {
    return (
        <Chapter name="お問い合わせ">
            <p>
                主催：しょうぽん
            </p>
            <p>
            E-mail: shoponimage●gmail.com<ResponsiveBr/>（●を@に変えて）
            </p>
            <p>
                Twitter(<a href="https://twitter.com/shopon1201" target="_blank">@shopon1201</a>)での<ResponsiveBr/>
                ダイレクトメッセージも受け付けております。
            </p>
        </Chapter>
    );
};

export default Contact;