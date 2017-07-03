//! moment.js locale configuration
//! locale : kyrgyz (ky)
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz


import moment from '../moment';

var suffixes = {
    0: '-ÑÒ¯',
    1: '-ÑÐ¸',
    2: '-ÑÐ¸',
    3: '-ÑÒ¯',
    4: '-ÑÒ¯',
    5: '-ÑÐ¸',
    6: '-ÑÑ',
    7: '-ÑÐ¸',
    8: '-ÑÐ¸',
    9: '-ÑÑ',
    10: '-ÑÑ',
    20: '-ÑÑ',
    30: '-ÑÑ',
    40: '-ÑÑ',
    50: '-ÑÒ¯',
    60: '-ÑÑ',
    70: '-ÑÐ¸',
    80: '-ÑÐ¸',
    90: '-ÑÑ',
    100: '-ÑÒ¯'
};

export default moment.defineLocale('ky', {
    months : 'ÑÐ½Ð²Ð°ÑÑ_ÑÐµÐ²ÑÐ°Ð»Ñ_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐµÐ»Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ½ÑÑÐ±ÑÑ_Ð¾ÐºÑÑÐ±ÑÑ_Ð½Ð¾ÑÐ±ÑÑ_Ð´ÐµÐºÐ°Ð±ÑÑ'.split('_'),
    monthsShort : 'ÑÐ½Ð²_ÑÐµÐ²_Ð¼Ð°ÑÑ_Ð°Ð¿Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ_Ð½Ð¾Ñ_Ð´ÐµÐº'.split('_'),
    weekdays : 'ÐÐµÐºÑÐµÐ¼Ð±Ð¸_ÐÒ¯Ð¹ÑÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑÐµÐ¼Ð±Ð¸_Ð¨Ð°ÑÑÐµÐ¼Ð±Ð¸_ÐÐµÐ¹ÑÐµÐ¼Ð±Ð¸_ÐÑÐ¼Ð°_ÐÑÐµÐ¼Ð±Ð¸'.split('_'),
    weekdaysShort : 'ÐÐµÐº_ÐÒ¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ_ÐÐµÐ¹_ÐÑÐ¼_ÐÑÐµ'.split('_'),
    weekdaysMin : 'ÐÐº_ÐÐ¹_Ð¨Ð¹_Ð¨Ñ_ÐÐ¹_ÐÐ¼_ÐÑ'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[ÐÒ¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ] LT',
        nextDay : '[Ð­ÑÑÐµÒ£ ÑÐ°Ð°Ñ] LT',
        nextWeek : 'dddd [ÑÐ°Ð°Ñ] LT',
        lastDay : '[ÐÐµÑÐµ ÑÐ°Ð°Ñ] LT',
        lastWeek : '[Ó¨ÑÐºÐµÐ½ Ð°Ð¿ÑÐ°Ð½ÑÐ½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s Ð¸ÑÐ¸Ð½Ð´Ðµ',
        past : '%s Ð¼ÑÑÑÐ½',
        s : 'Ð±Ð¸ÑÐ½ÐµÑÐµ ÑÐµÐºÑÐ½Ð´',
        m : 'Ð±Ð¸Ñ Ð¼Ò¯Ð½Ó©Ñ',
        mm : '%d Ð¼Ò¯Ð½Ó©Ñ',
        h : 'Ð±Ð¸Ñ ÑÐ°Ð°Ñ',
        hh : '%d ÑÐ°Ð°Ñ',
        d : 'Ð±Ð¸Ñ ÐºÒ¯Ð½',
        dd : '%d ÐºÒ¯Ð½',
        M : 'Ð±Ð¸Ñ Ð°Ð¹',
        MM : '%d Ð°Ð¹',
        y : 'Ð±Ð¸Ñ Ð¶ÑÐ»',
        yy : '%d Ð¶ÑÐ»'
    },
    ordinalParse: /\d{1,2}-(ÑÐ¸|ÑÑ|ÑÒ¯|ÑÑ)/,
    ordinal : function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});
