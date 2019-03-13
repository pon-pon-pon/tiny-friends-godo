import React from 'react';
import styled from 'styled-components';

import ICON_PIX from '../assets/icon_pix.jpg';
import ICON_TWI from '../assets/icon_twi.jpg';
import ICON_WEB from '../assets/icon_web.jpg';
import ICON_TUM from '../assets/icon_tum.jpg';

const ParticipantWrapper = styled.div`
    width:              25%;
    min-width:          200px;
    display:            flex;
    flex-direction:     column;
    @media screen and (max-width: 780px) {
        flex-direction: row;
    }
    justify-content:    center;
    align-items:        center;
    margin: 20px;

    position:           relative;
`;

const LinkWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const LinkOfTwi = styled.a`
    width: 25px;
    height: 25px;
    background-image: url(${ICON_TWI});
    background-size: cover;
`;

const LinkOfPix = styled.a`
    width: 25px;
    height: 25px;
    background-image: url(${ICON_PIX});
    background-size: cover;
`;

const LinkOfWeb = styled.a`
    width: 25px;
    height: 25px;
    background-image: url(${ICON_WEB});
    background-size: cover;
`;

const LinkOfTum = styled.a`
    width: 25px;
    height: 25px;
    background-image: url(${ICON_TUM});
    background-size: cover;
`;

const Participant = (props) => {

    const { model } = props;

    const Icon = styled.div`
        max-width:          100%;
        max-height:         100%;
        width:              200px;
        height:             200px;
        @media screen and (max-width: 780px) {
            height: 100px;
        }
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

    const Name = styled.p`
        letter-spacing:     .064em;
        font-size:          1.3rem;
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
        @media screen and (max-width: 780px) {
            color: #2d293e;
            top: 90%;
            left: 50%;
            letter-spacing: -0.064em;
            font-size: 17px;
        }
        ${model.nameStyle ? model.nameStyle : ""}
    `;

    return (
        <ParticipantWrapper>
            <Icon />
            <Name>{model.name}</Name>
            <LinkWrapper>
                {(() => {
                    if (model.twitter) return <LinkOfTwi href={model.twitter} target="_blank" />;
                })()}
                {(() => {
                    if (model.pixiv) return <LinkOfPix href={model.pixiv} target="_blank" />;
                })()}
                {(() => {
                    if (model.web) return <LinkOfWeb href={model.web} target="_blank" />;
                })()}
                {(() => {
                    if (model.tumblr) return <LinkOfTum href={model.tumblr} target="_blank" />;
                })()}
            </LinkWrapper>
        </ParticipantWrapper>
    );
};

export default Participant;