import PARTICIPANT_ICONS from './assets/participant-icon';

const Constants = {
    participants: [
        {
            name: '秋乃 楓',
            twitter: 'https://twitter.com/otiba_kaede',
            pixiv: 'https://www.pixiv.net/member.php?id=2546991',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_KAEDE});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: '雨野みるは',
            twitter: 'https://twitter.com/yukihaaya',
            pixiv: 'https://www.pixiv.net/member.php?id=17246239',
            web: 'https://amano0212miruha.wixsite.com/ammano',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_AMANO});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: 'うとい',
            twitter: 'https://twitter.com/namekotake',
            pixiv: 'https://t.co/ROSyqx3c9C',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_UTOI});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: 'おねぶ',
            twitter: 'https://twitter.com/oneb',
            web: 'http://maru9.org/',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_ONEB});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: 'かげ',
            twitter: 'https://twitter.com/numa_kage',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_KAGE});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: '群青狼',
            twitter: 'https://twitter.com/Gunjou_row',
            pixiv: 'https://www.pixiv.net/member.php?id=28855649',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_GUNJOUROW});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: 'しょうぽん',
            twitter: 'https://twitter.com/shopon1201',
            pixiv: 'https://www.pixiv.net/member.php?id=2500405',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_SHOPON});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: '橘宗虎',
            twitter: 'https://twitter.com/mu_tachibana',
            pixiv: 'https://www.pixiv.net/member.php?id=7493430',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_TACHIBANA});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: 'ぱらがす',
            twitter: 'https://twitter.com/parags112',
            pixiv: 'https://www.pixiv.net/member.php?id=5209859',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_PARAGS});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: 'ほの太',
            twitter: 'https://twitter.com/xxhonot',
            pixiv: 'https://www.pixiv.net/member.php?id=3834162',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_HONOTA});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: '南沢',
            twitter: 'https://twitter.com/mnm_pixiv',
            pixiv: 'https://www.pixiv.net/member.php?id=6507496',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_MNM});
                background-size: 100%;
            `,
            assent: true,
        },
        {
            name: '蘭戸せる',
            twitter: 'https://twitter.com/Landsale_TL',
            pixiv: 'https://www.pixiv.net/member.php?id=5499',
            icon:`
                background-image: url(${PARTICIPANT_ICONS.ICON_LANDSALE});
                background-size: 100%;
            `,
            assent: true,
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
            assent: true,
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

export default Constants;

//export default replaceDscriptionForIcon(['しょうぽん', ''])