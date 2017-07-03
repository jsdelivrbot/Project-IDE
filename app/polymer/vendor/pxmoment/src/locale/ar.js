//! moment.js locale configuration
//! Locale: Arabic (ar)
//! Author: Abdel Said: https://github.com/abdelsaid
//! Changes in months, weekdays: Ahmed Elkhatib
//! Native plural forms: forabi https://github.com/forabi

import moment from '../moment';

var symbolMap = {
    '1': 'Ù¡',
    '2': 'Ù¢',
    '3': 'Ù£',
    '4': 'Ù¤',
    '5': 'Ù¥',
    '6': 'Ù¦',
    '7': 'Ù§',
    '8': 'Ù¨',
    '9': 'Ù©',
    '0': 'Ù '
}, numberMap = {
    'Ù¡': '1',
    'Ù¢': '2',
    'Ù£': '3',
    'Ù¤': '4',
    'Ù¥': '5',
    'Ù¦': '6',
    'Ù§': '7',
    'Ù¨': '8',
    'Ù©': '9',
    'Ù ': '0'
}, pluralForm = function (n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
}, plurals = {
    s : ['Ø£ÙÙ ÙÙ Ø«Ø§ÙÙØ©', 'Ø«Ø§ÙÙØ© ÙØ§Ø­Ø¯Ø©', ['Ø«Ø§ÙÙØªØ§Ù', 'Ø«Ø§ÙÙØªÙÙ'], '%d Ø«ÙØ§Ù', '%d Ø«Ø§ÙÙØ©', '%d Ø«Ø§ÙÙØ©'],
    m : ['Ø£ÙÙ ÙÙ Ø¯ÙÙÙØ©', 'Ø¯ÙÙÙØ© ÙØ§Ø­Ø¯Ø©', ['Ø¯ÙÙÙØªØ§Ù', 'Ø¯ÙÙÙØªÙÙ'], '%d Ø¯ÙØ§Ø¦Ù', '%d Ø¯ÙÙÙØ©', '%d Ø¯ÙÙÙØ©'],
    h : ['Ø£ÙÙ ÙÙ Ø³Ø§Ø¹Ø©', 'Ø³Ø§Ø¹Ø© ÙØ§Ø­Ø¯Ø©', ['Ø³Ø§Ø¹ØªØ§Ù', 'Ø³Ø§Ø¹ØªÙÙ'], '%d Ø³Ø§Ø¹Ø§Øª', '%d Ø³Ø§Ø¹Ø©', '%d Ø³Ø§Ø¹Ø©'],
    d : ['Ø£ÙÙ ÙÙ ÙÙÙ', 'ÙÙÙ ÙØ§Ø­Ø¯', ['ÙÙÙØ§Ù', 'ÙÙÙÙÙ'], '%d Ø£ÙØ§Ù', '%d ÙÙÙÙØ§', '%d ÙÙÙ'],
    M : ['Ø£ÙÙ ÙÙ Ø´ÙØ±', 'Ø´ÙØ± ÙØ§Ø­Ø¯', ['Ø´ÙØ±Ø§Ù', 'Ø´ÙØ±ÙÙ'], '%d Ø£Ø´ÙØ±', '%d Ø´ÙØ±Ø§', '%d Ø´ÙØ±'],
    y : ['Ø£ÙÙ ÙÙ Ø¹Ø§Ù', 'Ø¹Ø§Ù ÙØ§Ø­Ø¯', ['Ø¹Ø§ÙØ§Ù', 'Ø¹Ø§ÙÙÙ'], '%d Ø£Ø¹ÙØ§Ù', '%d Ø¹Ø§ÙÙØ§', '%d Ø¹Ø§Ù']
}, pluralize = function (u) {
    return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
            str = plurals[u][pluralForm(number)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
    };
}, months = [
    'ÙØ§ÙÙÙ Ø§ÙØ«Ø§ÙÙ ÙÙØ§ÙØ±',
    'Ø´Ø¨Ø§Ø· ÙØ¨Ø±Ø§ÙØ±',
    'Ø¢Ø°Ø§Ø± ÙØ§Ø±Ø³',
    'ÙÙØ³Ø§Ù Ø£Ø¨Ø±ÙÙ',
    'Ø£ÙØ§Ø± ÙØ§ÙÙ',
    'Ø­Ø²ÙØ±Ø§Ù ÙÙÙÙÙ',
    'ØªÙÙØ² ÙÙÙÙÙ',
    'Ø¢Ø¨ Ø£ØºØ³Ø·Ø³',
    'Ø£ÙÙÙÙ Ø³Ø¨ØªÙØ¨Ø±',
    'ØªØ´Ø±ÙÙ Ø§ÙØ£ÙÙ Ø£ÙØªÙØ¨Ø±',
    'ØªØ´Ø±ÙÙ Ø§ÙØ«Ø§ÙÙ ÙÙÙÙØ¨Ø±',
    'ÙØ§ÙÙÙ Ø§ÙØ£ÙÙ Ø¯ÙØ³ÙØ¨Ø±'
];

export default moment.defineLocale('ar', {
    months : months,
    monthsShort : months,
    weekdays : 'Ø§ÙØ£Ø­Ø¯_Ø§ÙØ¥Ø«ÙÙÙ_Ø§ÙØ«ÙØ§Ø«Ø§Ø¡_Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡_Ø§ÙØ®ÙÙØ³_Ø§ÙØ¬ÙØ¹Ø©_Ø§ÙØ³Ø¨Øª'.split('_'),
    weekdaysShort : 'Ø£Ø­Ø¯_Ø¥Ø«ÙÙÙ_Ø«ÙØ§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®ÙÙØ³_Ø¬ÙØ¹Ø©_Ø³Ø¨Øª'.split('_'),
    weekdaysMin : 'Ø­_Ù_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/\u200FM/\u200FYYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /Øµ|Ù/,
    isPM : function (input) {
        return 'Ù' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'Øµ';
        } else {
            return 'Ù';
        }
    },
    calendar : {
        sameDay: '[Ø§ÙÙÙÙ Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        nextDay: '[ØºØ¯ÙØ§ Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        nextWeek: 'dddd [Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        lastDay: '[Ø£ÙØ³ Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        lastWeek: 'dddd [Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'Ø¨Ø¹Ø¯ %s',
        past : 'ÙÙØ° %s',
        s : pluralize('s'),
        m : pluralize('m'),
        mm : pluralize('m'),
        h : pluralize('h'),
        hh : pluralize('h'),
        d : pluralize('d'),
        dd : pluralize('d'),
        M : pluralize('M'),
        MM : pluralize('M'),
        y : pluralize('y'),
        yy : pluralize('y')
    },
    preparse: function (string) {
        return string.replace(/\u200f/g, '').replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (match) {
            return numberMap[match];
        }).replace(/Ø/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, 'Ø');
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

