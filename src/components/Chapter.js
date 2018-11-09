import React from 'react';
import styled from 'styled-components';

const ChapterWrapper = styled.div`
   margin: 5%;
`;
const ChapterTitle = styled.h2`
    line-height: 4rem;
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 100;
`;

const Hr = styled.hr`
    margin-bottom: .5rem;
`;

const Chapter = (props) => {
    const { children, name } = props;
    return (
        <div>
        <Hr id={name}/>
        <ChapterWrapper>
            <ChapterTitle>{name}</ChapterTitle>
            {children}
        </ChapterWrapper>
        </div>
    );
}

export default Chapter;