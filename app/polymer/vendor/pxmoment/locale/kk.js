//! moment.js locale configuration
//! locale : kazakh (kk)
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var suffixes = {
        0: '-ÑÑ',
        1: '-ÑÑ',
        2: '-ÑÑ',
        3: '-ÑÑ',
        4: '-ÑÑ',
        5: '-ÑÑ',
        6: '-ÑÑ',
        7: '-ÑÑ',
        8: '-ÑÑ',
        9: '-ÑÑ',
        10: '-ÑÑ',
        20: '-ÑÑ',
        30: '-ÑÑ',
        40: '-ÑÑ',
        50: '-ÑÑ',
        60: '-ÑÑ',
        70: '-ÑÑ',
        80: '-ÑÑ',
        90: '-ÑÑ',
        100: '-ÑÑ'
    };

    var kk = moment.defineLocale('kk', {
        months : 'ÒÐ°Ò£ÑÐ°Ñ_Ð°ÒÐ¿Ð°Ð½_Ð½Ð°ÑÑÑÐ·_ÑÓÑÑÑ_Ð¼Ð°Ð¼ÑÑ_Ð¼Ð°ÑÑÑÐ¼_ÑÑÐ»Ð´Ðµ_ÑÐ°Ð¼ÑÐ·_ÒÑÑÐºÒ¯Ð¹ÐµÐº_ÒÐ°Ð·Ð°Ð½_ÒÐ°ÑÐ°ÑÐ°_Ð¶ÐµÐ»ÑÐ¾ÒÑÐ°Ð½'.split('_'),
        monthsShort : 'ÒÐ°Ò£_Ð°ÒÐ¿_Ð½Ð°Ñ_ÑÓÑ_Ð¼Ð°Ð¼_Ð¼Ð°Ñ_ÑÑÐ»_ÑÐ°Ð¼_ÒÑÑ_ÒÐ°Ð·_ÒÐ°Ñ_Ð¶ÐµÐ»'.split('_'),
        weekdays : 'Ð¶ÐµÐºÑÐµÐ½Ð±Ñ_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ_ÑÓÑÑÐµÐ½Ð±Ñ_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ'.split('_'),
        weekdaysShort : 'Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓÑ_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½'.split('_'),
        weekdaysMin : 'Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ_Ð±Ð¹_Ð¶Ð¼_ÑÐ½'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[ÐÒ¯Ð³ÑÐ½ ÑÐ°ÒÐ°Ñ] LT',
            nextDay : '[ÐÑÑÐµÒ£ ÑÐ°ÒÐ°Ñ] LT',
            nextWeek : 'dddd [ÑÐ°ÒÐ°Ñ] LT',
            lastDay : '[ÐÐµÑÐµ ÑÐ°ÒÐ°Ñ] LT',
            lastWeek : '[Ó¨ÑÐºÐµÐ½ Ð°Ð¿ÑÐ°Ð½ÑÒ£] dddd [ÑÐ°ÒÐ°Ñ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ÑÑÑÐ½Ð´Ðµ',
            past : '%s Ð±Ò±ÑÑÐ½',
            s : 'Ð±ÑÑÐ½ÐµÑÐµ ÑÐµÐºÑÐ½Ð´',
            m : 'Ð±ÑÑ Ð¼Ð¸Ð½ÑÑ',
            mm : '%d Ð¼Ð¸Ð½ÑÑ',
            h : 'Ð±ÑÑ ÑÐ°ÒÐ°Ñ',
            hh : '%d ÑÐ°ÒÐ°Ñ',
            d : 'Ð±ÑÑ ÐºÒ¯Ð½',
            dd : '%d ÐºÒ¯Ð½',
            M : 'Ð±ÑÑ Ð°Ð¹',
            MM : '%d Ð°Ð¹',
            y : 'Ð±ÑÑ Ð¶ÑÐ»',
            yy : '%d Ð¶ÑÐ»'
        },
        ordinalParse: /\d{1,2}-(ÑÑ|ÑÑ)/,
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

    return kk;

}));