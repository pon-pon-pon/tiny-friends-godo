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
                <li>2019年博麗神社例大祭<ResponsiveBr/>もしくはコミックマーケット96で頒布予定。</li>
                <li>大きさ：B5</li>
                <li>頒布価格：未定</li>
            </ul>
        </Chapter>
    );
}

export default Information;