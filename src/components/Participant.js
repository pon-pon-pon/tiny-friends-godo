import React from 'react';
import styled from 'styled-components';

import ICON_P from '../assets/icon_p.png';
import ICON_T from '../assets/icon_t.png';

const Name = styled.p`
    letter-spacing:     .064em;
    font-size:          1.5rem;
    font-weight:        200;
    transition:         transform .3s ease-out;
    transform:          translateY(-1rem);
    position:           absolute;
    top:                75%;
    left:               0;
    bottom:             0;
    right:              0;
    display:            flex;
    flex-direction:     column;
    justify-content:    flex-start;
    align-items:        center;
    color:              #fffef7;
`;

const ParticipantWrapper = styled.div`
    width:              25%;
    min-width:          200px;
    display:            flex;
    flex-direction:     column;
    justify-content:    center;
    align-items:        center;
    margin: 10px;

    position:           relative;
`;

const LinkWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const LinkOfTwitter = styled.a`
    width: 25px;
    height: 25px;
    background-image: url(${ICON_T});
    background-size: cover;
`;

const LinkOfPixiv = styled.a`
    width: 25px;
    height: 25px;
    background-image: url(${ICON_P});
    background-size: cover;
`;

const Participant = (props) => {

    const { model } = props;

    const Icon = styled.div`
        max-width:          100%;
        max-height:         100%;
        width:              200px;
        height:             200px;
        border-radius:      100000000px;
        border:             3px solid #fff;

        display:            flex;
        flex-direction      column;
        overflow:           hidden;
        justify-content:    flex-end;

        position:           relative;
        &:after {
            content:            "";
            position:           absolute;
            top:                50%;
            left:               0;
            right:              0;
            bottom:             0;
            background-color:   rgba(0,0,0,.4);
            transform-origin:   50% 0;
            transform:          scaleX(1.5) translateY(3rem);
            transition:         transform .3s ease-out;
            overflow:           hidden;
        }
        ${model.icon}
    `;

    return (
        <ParticipantWrapper>
            <Icon />
            <Name>{model.name}</Name>
            <LinkWrapper>
                {(() => {
                    if (model.twitter) return <LinkOfTwitter href={model.twitter} target="_blank" />;
                })()}
                {(() => {
                    if (model.pixiv) return <LinkOfPixiv href={model.pixiv} target="_blank" />;
                })()}
            </LinkWrapper>
        </ParticipantWrapper>
    );
};

export default Participant;