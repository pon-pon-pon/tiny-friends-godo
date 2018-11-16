import React from 'react';
import styled from 'styled-components';

const ResponsiveBr = () => {
    const Br = styled.br`
        display: none;
        @media screen and (max-width: 667px) {
            display:inline;
        }
    `;
    return <Br/>
}

export default ResponsiveBr;