import React from 'react';
import styled from 'styled-components';
import {
  ResponsiveBr,
  ResponsiveBrReverse
} from './ResponsiveBr';

import LOGO_IMAGE from '../assets/logo.png';
import JUMBOTRON_IMAGE from '../assets/jumbotron.jpg';
import TweetButton from './TweetButton';

function clickEntry(e){
    e.preventDefault();
    window.open('https://twipla.jp/events/343022', '_blank');
}

const JumbotronImage = styled.div`
  content: '';
  background-image: url(${JUMBOTRON_IMAGE});
  background-position: center center;
  background-size: cover;
  filter: brightness(80%) sepia(50%) blur(10px);
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const JumbptronContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 0px;
  padding: 0px;
  width: 80%;
`;

const EntryLink = styled.a`
  cursor: pointer;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #3d2a3f;
  color: #FFF !important;
  border-bottom: solid 4px #0d090e;
  border-radius: 3px;
  &:active {
    transform: translateY(4px);/*下に動く*/
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
    border-bottom: none
  }
`;

const FlavorText = styled.p`
  font-size: 20px;
  font-weight: 200;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const Logo = styled.img`
  max-width: 100%;
`;

const DeadLine = styled(FlavorText)`
  font-weight: bold;
  text-decoration: underline red;
`;

class Top extends React.Component{
  constructor(){
    super();
    this.state = {
      height: window.screen.height
    };
  }
  componentDidMount(){

    //スマートフォンの場合，画面サイズの変更がバーの自動収納によってもonresizeが呼ばれてしまうため
    //呼ばれるとtweet buttonが正常に動作しない場合がある
    if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      if(!window.onresize){
        window.onresize = () => {
          setTimeout(() => {
            this.setState({
              height: window.innerHeight
            });
          })
        }
      }
    }
  }
  render(){

    const JumbotronWrapper = styled.div`
      position: relative;
      widht: 100%;
      height: ${this.state.height}px;
    `;

    return (
      <JumbotronWrapper id="Top">
        <JumbotronImage/>
          <JumbptronContent>
            <Logo src={LOGO_IMAGE} />
              <FlavorText>
                手乗りサイズにちっちゃくなった<ResponsiveBr/><ResponsiveBrReverse/>
                東方Projectのキャラクターとの<ResponsiveBr/>
                生活を描いた合同誌
              </FlavorText>
            <DeadLine>参加締め切り<br/>2018/12/15 23:59:59まで</DeadLine>
            <EntryLink onClick={clickEntry}>参加する(TwiPlaに飛びます)</EntryLink>
            <TweetButton/>
        </JumbptronContent>
      </JumbotronWrapper>
    );
  }
}

export default Top;