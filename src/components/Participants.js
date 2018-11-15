import React from 'react';
import styled from 'styled-components';

import Chapter from './Chapter';
import Participant from './Participant';

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
            <p><small>五十音順。敬称略。確認が取れた方から順次掲載させてだきます。</small></p>
            <ParticipantsWrapper>
                {participantComponents}
            </ParticipantsWrapper>
        </Chapter>
    );
};

export default Participants;