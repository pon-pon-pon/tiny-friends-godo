import React from 'react';
import styled from 'styled-components';

import Top from './Top';
import Participants from './Participants';
import Information from './Information';
import Contact from './Contact';
import NavBar from './NavBar';
import About from './About';

import Constants from '../Constants';

const AppWrapper = styled.div``;

export default class App extends React.Component{
    render(){
        // mock data
        return (
            <AppWrapper>
                <div>
                    <Top/>
                    <NavBar/>
                    <About/>
                    <Information />
                    <Participants participants={Constants.participants} />
                    <Contact/>
                </div>
            </AppWrapper>
        );
    }
};