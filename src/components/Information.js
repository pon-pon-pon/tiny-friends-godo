import React from 'react';
import Chapter from './Chapter';


const Information = (props) => {
    return (
        <Chapter name="頒布情報">
            <ul style={{listStyle: 'none', padding:0}}>
                <li>2019年博麗神社例大祭もしくはコミックマーケット96で頒布予定。</li>
                <li>頒布価格：未定</li>
            </ul>
        </Chapter>
    );
}

export default Information;