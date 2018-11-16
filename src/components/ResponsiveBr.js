import React from 'react';
import styled from 'styled-components';

export const ResponsiveBr = () => {
    const Br = styled.br`
        display: none;
        @media screen and (max-width: 780px) {
            display: inline;
        }
    `;
    return <Br/>
}

export const ResponsiveBrReverse = () => {
    const Br = styled.br`
        display: inline;
        @media screen and (max-width: 780px) {
            display: none;
        }
    `;
    return <Br/>
}