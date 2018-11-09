import React from 'react';

import Chapter from './Chapter';

const Contact = (props) => {
    return (
        <Chapter name="お問い合わせ">
            <p>
                主催：しょうぽん
            </p>
            <p>
            E-mail: shoponimage●gmail.com（●を@に変えて）
            </p>
            <p>
                Twitter: <a href="https://twitter.com/shopon1201" target="_blank">@shopon1201</a>
            </p>
        </Chapter>
    );
};

export default Contact;