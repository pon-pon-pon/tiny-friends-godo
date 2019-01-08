import React from 'react';
import styled from 'styled-components';

import Chapter from './Chapter';
import Participant from './Participant';
import {
    ResponsiveBr,
    ResponsiveBrReverse
} from './ResponsiveBr';

const ParticipantsWrapper = styled.div`
    display:            flex;
    flex-flow:          row wrap;
    justify-content:    space-around;
    align-items:        flex-start;
    align-content:      center;

    padding: 10px;
`

const Participants = (props) => {

    const { participants } = props;

    const participantComponents = [];
    for ( let i = 0;i<participants.length;i++ ) {
        if (participants[i].assent){
            participantComponents.push(
                <Participant model={participants[i]} key={i}/>
            );
        }
    }

    return (
        <Chapter name="参加者一覧">
            <p>
                五十音順。敬称略。<ResponsiveBr/>
                確認が取れた方から順次掲載させてだきます。<ResponsiveBr/>
                <a href="https://twipla.jp/events/343022" target="_blank">TwiPlaの参加者リストの方が正確です．</a>
            </p>
            <ParticipantsWrapper>
                {participantComponents}
            </ParticipantsWrapper>
        </Chapter>
    );
};

export default Participants;