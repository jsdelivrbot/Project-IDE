//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'ÞÞ¬ÞÞªÞÞ¦ÞÞ©',
    'ÞÞ¬ÞÞ°ÞÞªÞÞ¦ÞÞ©',
    'ÞÞ§ÞÞ¨ÞÞª',
    'ÞÞ­ÞÞ°ÞÞ©ÞÞª',
    'ÞÞ­',
    'ÞÞ«ÞÞ°',
    'ÞÞªÞÞ¦ÞÞ¨',
    'ÞÞ¯ÞÞ¦ÞÞ°ÞÞª',
    'ÞÞ¬ÞÞ°ÞÞ¬ÞÞ°ÞÞ¦ÞÞª',
    'ÞÞ®ÞÞ°ÞÞ¯ÞÞ¦ÞÞª',
    'ÞÞ®ÞÞ¬ÞÞ°ÞÞ¦ÞÞª',
    'ÞÞ¨ÞÞ¬ÞÞ°ÞÞ¦ÞÞª'
];
var weekdays = [
    'ÞÞ§ÞÞ¨ÞÞ°ÞÞ¦',
    'ÞÞ¯ÞÞ¦',
    'ÞÞ¦ÞÞ°ÞÞ§ÞÞ¦',
    'ÞÞªÞÞ¦',
    'ÞÞªÞÞ§ÞÞ°ÞÞ¦ÞÞ¨',
    'ÞÞªÞÞªÞÞª',
    'ÞÞ®ÞÞ¨ÞÞ¨ÞÞª'
];

var dv = moment.defineLocale('dv', {
    months : months,
    monthsShort : months,
    weekdays : weekdays,
    weekdaysShort : weekdays,
    weekdaysMin : 'ÞÞ§ÞÞ¨_ÞÞ¯ÞÞ¦_ÞÞ¦ÞÞ°_ÞÞªÞÞ¦_ÞÞªÞÞ§_ÞÞªÞÞª_ÞÞ®ÞÞ¨'.split('_'),
    longDateFormat : {

        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/M/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ÞÞ|ÞÞ/,
    isPM : function (input) {
        return 'ÞÞ' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ÞÞ';
        } else {
            return 'ÞÞ';
        }
    },
    calendar : {
        sameDay : '[ÞÞ¨ÞÞ¦ÞÞª] LT',
        nextDay : '[ÞÞ§ÞÞ¦ÞÞ§] LT',
        nextWeek : 'dddd LT',
        lastDay : '[ÞÞ¨ÞÞ°ÞÞ¬] LT',
        lastWeek : '[ÞÞ§ÞÞ¨ÞÞªÞÞ¨] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ÞÞ¬ÞÞ­ÞÞ¦ÞÞ¨ %s',
        past : 'ÞÞªÞÞ¨ÞÞ° %s',
        s : 'ÞÞ¨ÞÞªÞÞ°ÞÞªÞÞ®ÞÞ¬ÞÞ°',
        m : 'ÞÞ¨ÞÞ¨ÞÞ¬ÞÞ°',
        mm : 'ÞÞ¨ÞÞ¨ÞÞª %d',
        h : 'ÞÞ¦ÞÞ¨ÞÞ¨ÞÞ¬ÞÞ°',
        hh : 'ÞÞ¦ÞÞ¨ÞÞ¨ÞÞª %d',
        d : 'ÞÞªÞÞ¦ÞÞ¬ÞÞ°',
        dd : 'ÞÞªÞÞ¦ÞÞ° %d',
        M : 'ÞÞ¦ÞÞ¬ÞÞ°',
        MM : 'ÞÞ¦ÞÞ° %d',
        y : 'ÞÞ¦ÞÞ¦ÞÞ¬ÞÞ°',
        yy : 'ÞÞ¦ÞÞ¦ÞÞª %d'
    },
    preparse: function (string) {
        return string.replace(/Ø/g, ',');
    },
    postformat: function (string) {
        return string.replace(/,/g, 'Ø');
    },
    week : {
        dow : 7,  // Sunday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return dv;

})));
