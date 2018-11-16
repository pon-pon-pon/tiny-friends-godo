import React from 'react';
import styled from 'styled-components';
import Chapter from './Chapter';
import {
    ResponsiveBr,
    ResponsiveBrReverse
} from './ResponsiveBr';
import TEXT_IMG from '../assets/text.png';
import JUMB_IMG from '../assets/jumbotron.jpg';

const AboutWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

const Column = styled.div`
    min-width: 300px;
    width: 50%;
    @media screen and (max-width: 667px) {
        flex-grow: 1;
    }
`;

const ImageWrapper = styled.div`
    display: inline-block;
    position: relative;
    margin: 10px;
    &:after {
        position: absolute;
        display: block;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        transform: rotate(3deg);
        background: #fff;
        z-index: -1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const FlavorText = styled.p`
    text-align: center;
    margin: 5px;
    work-wrap: break-word;
`;

const TextImage = styled.img`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
`;


const About = (props) => {
    return (
        <Chapter name="概要">
            <AboutWrapper>
                <Column>
                    <ImageWrapper>
                        <Image src={JUMB_IMG}></Image>
                    </ImageWrapper>
                </Column>
                <Column>
                    <TextImage src={TEXT_IMG}></TextImage>
                    <FlavorText>
                        ちいさくなったあのこが<ResponsiveBr/>手乗りサイズで側にいる日常。
                    </FlavorText>
                    <FlavorText>
                        手乗りサイズになった<ResponsiveBr/>
                        東方Projectのキャラクターを中心とする<ResponsiveBr/><ResponsiveBrReverse/>
                        漫画、イラスト、小説の日常系合同誌。
                    </FlavorText>
                </Column>
            </AboutWrapper>
        </Chapter>
    );
}

export default About;