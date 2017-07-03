//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

import moment from '../moment';

var symbolMap = {
    '1': 'à¯§',
    '2': 'à¯¨',
    '3': 'à¯©',
    '4': 'à¯ª',
    '5': 'à¯«',
    '6': 'à¯¬',
    '7': 'à¯­',
    '8': 'à¯®',
    '9': 'à¯¯',
    '0': 'à¯¦'
}, numberMap = {
    'à¯§': '1',
    'à¯¨': '2',
    'à¯©': '3',
    'à¯ª': '4',
    'à¯«': '5',
    'à¯¬': '6',
    'à¯­': '7',
    'à¯®': '8',
    'à¯¯': '9',
    'à¯¦': '0'
};

export default moment.defineLocale('ta', {
    months : 'à®à®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®à¯_à®à®ªà¯à®°à®²à¯_à®®à¯_à®à¯à®©à¯_à®à¯à®²à¯_à®à®à®¸à¯à®à¯_à®à¯à®ªà¯à®à¯à®®à¯à®ªà®°à¯_à®à®à¯à®à¯à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®à®¿à®à®®à¯à®ªà®°à¯'.split('_'),
    monthsShort : 'à®à®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®à¯_à®à®ªà¯à®°à®²à¯_à®®à¯_à®à¯à®©à¯_à®à¯à®²à¯_à®à®à®¸à¯à®à¯_à®à¯à®ªà¯à®à¯à®®à¯à®ªà®°à¯_à®à®à¯à®à¯à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®à®¿à®à®®à¯à®ªà®°à¯'.split('_'),
    weekdays : 'à®à®¾à®¯à®¿à®±à¯à®±à¯à®à¯à®à®¿à®´à®®à¯_à®¤à®¿à®à¯à®à®à¯à®à®¿à®´à®®à¯_à®à¯à®µà¯à®µà®¾à®¯à¯à®à®¿à®´à®®à¯_à®ªà¯à®¤à®©à¯à®à®¿à®´à®®à¯_à®µà®¿à®¯à®¾à®´à®à¯à®à®¿à®´à®®à¯_à®µà¯à®³à¯à®³à®¿à®à¯à®à®¿à®´à®®à¯_à®à®©à®¿à®à¯à®à®¿à®´à®®à¯'.split('_'),
    weekdaysShort : 'à®à®¾à®¯à®¿à®±à¯_à®¤à®¿à®à¯à®à®³à¯_à®à¯à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯à®³à¯à®³à®¿_à®à®©à®¿'.split('_'),
    weekdaysMin : 'à®à®¾_à®¤à®¿_à®à¯_à®ªà¯_à®µà®¿_à®µà¯_à®'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, HH:mm',
        LLLL : 'dddd, D MMMM YYYY, HH:mm'
    },
    calendar : {
        sameDay : '[à®à®©à¯à®±à¯] LT',
        nextDay : '[à®¨à®¾à®³à¯] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[à®¨à¯à®±à¯à®±à¯] LT',
        lastWeek : '[à®à®à®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s à®à®²à¯',
        past : '%s à®®à¯à®©à¯',
        s : 'à®à®°à¯ à®à®¿à®² à®µà®¿à®¨à®¾à®à®¿à®à®³à¯',
        m : 'à®à®°à¯ à®¨à®¿à®®à®¿à®à®®à¯',
        mm : '%d à®¨à®¿à®®à®¿à®à®à¯à®à®³à¯',
        h : 'à®à®°à¯ à®®à®£à®¿ à®¨à¯à®°à®®à¯',
        hh : '%d à®®à®£à®¿ à®¨à¯à®°à®®à¯',
        d : 'à®à®°à¯ à®¨à®¾à®³à¯',
        dd : '%d à®¨à®¾à®à¯à®à®³à¯',
        M : 'à®à®°à¯ à®®à®¾à®¤à®®à¯',
        MM : '%d à®®à®¾à®¤à®à¯à®à®³à¯',
        y : 'à®à®°à¯ à®µà®°à¯à®à®®à¯',
        yy : '%d à®à®£à¯à®à¯à®à®³à¯'
    },
    ordinalParse: /\d{1,2}à®µà®¤à¯/,
    ordinal : function (number) {
        return number + 'à®µà®¤à¯';
    },
    preparse: function (string) {
        return string.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯à®à®±à¯|à®à®¾à®²à¯|à®¨à®£à¯à®ªà®à®²à¯|à®à®±à¯à®ªà®¾à®à¯|à®®à®¾à®²à¯/,
    meridiem : function (hour, minute, isLower) {
        if (hour < 2) {
            return ' à®¯à®¾à®®à®®à¯';
        } else if (hour < 6) {
            return ' à®µà¯à®à®±à¯';  // à®µà¯à®à®±à¯
        } else if (hour < 10) {
            return ' à®à®¾à®²à¯'; // à®à®¾à®²à¯
        } else if (hour < 14) {
            return ' à®¨à®£à¯à®ªà®à®²à¯'; // à®¨à®£à¯à®ªà®à®²à¯
        } else if (hour < 18) {
            return ' à®à®±à¯à®ªà®¾à®à¯'; // à®à®±à¯à®ªà®¾à®à¯
        } else if (hour < 22) {
            return ' à®®à®¾à®²à¯'; // à®®à®¾à®²à¯
        } else {
            return ' à®¯à®¾à®®à®®à¯';
        }
    },
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'à®¯à®¾à®®à®®à¯') {
            return hour < 2 ? hour : hour + 12;
        } else if (meridiem === 'à®µà¯à®à®±à¯' || meridiem === 'à®à®¾à®²à¯') {
            return hour;
        } else if (meridiem === 'à®¨à®£à¯à®ªà®à®²à¯') {
            return hour >= 10 ? hour : hour + 12;
        } else {
            return hour + 12;
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

