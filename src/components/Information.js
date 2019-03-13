import React from 'react';
import Chapter from './Chapter';
import {
    ResponsiveBr,
    ResponsiveBrReverse
} from './ResponsiveBr';

const Information = (props) => {
    return (
        <Chapter name="頒布情報">
            <ul style={{listStyle: 'none', padding:0}}>
                <li>2019年5月5日 第十六回博麗神社例大祭</li>
                <li>場所：東京ビッグサイト お33a「えんどろ〜る」</li>
                <li>サイズ：B5</li>
                <li>予定価格：1000円</li>
                <li>それ以後の頒布については、<ResponsiveBr/>C96、委託を検討中。</li>
            </ul>
        </Chapter>
    );
}

export default Information;