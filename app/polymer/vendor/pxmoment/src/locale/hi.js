//! moment.js locale configuration
//! locale : hindi (hi)
//! author : Mayank Singhal : https://github.com/mayanksinghal

import moment from '../moment';

var symbolMap = {
    '1': 'à¥§',
    '2': 'à¥¨',
    '3': 'à¥©',
    '4': 'à¥ª',
    '5': 'à¥«',
    '6': 'à¥¬',
    '7': 'à¥­',
    '8': 'à¥®',
    '9': 'à¥¯',
    '0': 'à¥¦'
},
numberMap = {
    'à¥§': '1',
    'à¥¨': '2',
    'à¥©': '3',
    'à¥ª': '4',
    'à¥«': '5',
    'à¥¬': '6',
    'à¥­': '7',
    'à¥®': '8',
    'à¥¯': '9',
    'à¥¦': '0'
};

export default moment.defineLocale('hi', {
    months : 'à¤à¤¨à¤µà¤°à¥_à¤«à¤¼à¤°à¤µà¤°à¥_à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¥à¤²_à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²à¤¾à¤_à¤à¤à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤à¤à¥à¤à¥à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°'.split('_'),
    monthsShort : 'à¤à¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¥._à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²._à¤à¤._à¤¸à¤¿à¤¤._à¤à¤à¥à¤à¥._à¤¨à¤µ._à¤¦à¤¿à¤¸.'.split('_'),
    monthsParseExact: true,
    weekdays : 'à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥à¤®à¤µà¤¾à¤°_à¤®à¤à¤à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤à¥à¤°à¥à¤µà¤¾à¤°_à¤¶à¥à¤à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°'.split('_'),
    weekdaysShort : 'à¤°à¤µà¤¿_à¤¸à¥à¤®_à¤®à¤à¤à¤²_à¤¬à¥à¤§_à¤à¥à¤°à¥_à¤¶à¥à¤à¥à¤°_à¤¶à¤¨à¤¿'.split('_'),
    weekdaysMin : 'à¤°_à¤¸à¥_à¤®à¤_à¤¬à¥_à¤à¥_à¤¶à¥_à¤¶'.split('_'),
    longDateFormat : {
        LT : 'A h:mm à¤¬à¤à¥',
        LTS : 'A h:mm:ss à¤¬à¤à¥',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm à¤¬à¤à¥',
        LLLL : 'dddd, D MMMM YYYY, A h:mm à¤¬à¤à¥'
    },
    calendar : {
        sameDay : '[à¤à¤] LT',
        nextDay : '[à¤à¤²] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[à¤à¤²] LT',
        lastWeek : '[à¤ªà¤¿à¤à¤²à¥] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s à¤®à¥à¤',
        past : '%s à¤ªà¤¹à¤²à¥',
        s : 'à¤à¥à¤ à¤¹à¥ à¤à¥à¤·à¤£',
        m : 'à¤à¤ à¤®à¤¿à¤¨à¤',
        mm : '%d à¤®à¤¿à¤¨à¤',
        h : 'à¤à¤ à¤à¤à¤à¤¾',
        hh : '%d à¤à¤à¤à¥',
        d : 'à¤à¤ à¤¦à¤¿à¤¨',
        dd : '%d à¤¦à¤¿à¤¨',
        M : 'à¤à¤ à¤®à¤¹à¥à¤¨à¥',
        MM : '%d à¤®à¤¹à¥à¤¨à¥',
        y : 'à¤à¤ à¤µà¤°à¥à¤·',
        yy : '%d à¤µà¤°à¥à¤·'
    },
    preparse: function (string) {
        return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'à¤°à¤¾à¤¤') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'à¤¸à¥à¤¬à¤¹') {
            return hour;
        } else if (meridiem === 'à¤¦à¥à¤ªà¤¹à¤°') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'à¤¶à¤¾à¤®') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'à¤°à¤¾à¤¤';
        } else if (hour < 10) {
            return 'à¤¸à¥à¤¬à¤¹';
        } else if (hour < 17) {
            return 'à¤¦à¥à¤ªà¤¹à¤°';
        } else if (hour < 20) {
            return 'à¤¶à¤¾à¤®';
        } else {
            return 'à¤°à¤¾à¤¤';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

