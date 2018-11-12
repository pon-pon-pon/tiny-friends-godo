import PARTICIPANT_ICONS from './assets/participant-icon';

const Constants = {
    participants: [
        {
            name: '雨野みるは',
            twitter: 'https://twitter.com/yukihaaya',
            pixiv: 'https://www.pixiv.net/member.php?id=17246239',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_AMANO});
                background-size: 100%;
            `,
        },
        {
            name: 'うとい',
            twitter: 'https://twitter.com/namekotake',
            pixiv: 'https://t.co/ROSyqx3c9C',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_UTOI});
                background-size: 100%;
            `,
        },
        {
            name: 'かげ',
            twitter: 'https://twitter.com/numa_kage',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_KAGE});
                background-size: 100%;
            `,
        },
        {
            name: 'しょうぽん',
            twitter: 'https://twitter.com/shopon1201',
            pixiv: 'https://www.pixiv.net/member.php?id=2500405',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_SHOPON});
                background-size: 100%;
            `,
        },
        {
            name: 'ろりもやし',
            twitter: 'https://twitter.com/Lolimoya4444',
            pixiv: 'https://www.pixiv.net/member.php?id=1925535',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_LOLIMOYA});
                background-size: 100%;
                background-position: center center;
            `,
        },
    ],
};

function replaceDscriptionForIcon(nameList){
    for (let i = 0;i<Constants.participants.length;i++){
        if (nameList.indexOf(Constants.participants[i].name)==-1){
            Constants.participants[i].name = 'ペンネーム';
            Constants.participants[i].icon = `
                background-image: url(${PARTICIPANT_ICONS.ICON_DUMMY});
                background-size: 100%;
            `;
        }
    }
    return Constants
};

//export default Constants;

export default replaceDscriptionForIcon(['しょうぽん', 'うとい'])