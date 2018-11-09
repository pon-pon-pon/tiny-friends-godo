import React from 'react';
import styled from 'styled-components';
import Chapter from './Chapter';
import TEXT_IMG from '../assets/text.png';

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
    text-align left;
    margin: 5px;
    work-wrap: break-word;
`;

const TextImage = styled.img`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`;


const About = (props) => {
    return (
        <Chapter name="概要">
            <AboutWrapper>
                <Column>
                    <ImageWrapper>
                        <Image src="https://twipla.jp/imgs/1810/208588303497899.png"></Image>
                    </ImageWrapper>
                </Column>
                <Column>
                    <TextImage src={TEXT_IMG}></TextImage>
                    <FlavorText>
                        手乗りサイズにちいさくなった（デフォルメや妖精さんサイズ）にした
                        東方Projectのキャラクターを中心の日常もの合同誌（全年齢向け）になります。
                    </FlavorText>
                    <FlavorText>
                        漫画、イラスト、小説の中から選んでご参加ください。
                        R-18及びR-18G描写は禁止とさせていただきます。
                    </FlavorText>
                </Column>
            </AboutWrapper>
        </Chapter>
    );
}

export default About;