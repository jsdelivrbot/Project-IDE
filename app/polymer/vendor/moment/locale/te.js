//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var te = moment.defineLocale('te', {
    months : 'à°à°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°à°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±_à°à±à°¨à±_à°à±à°²à±à±_à°à°à°¸à±à°à±_à°¸à±à°ªà±à°à±à°à°¬à°°à±_à°à°à±à°à±à°¬à°°à±_à°¨à°µà°à°¬à°°à±_à°¡à°¿à°¸à±à°à°¬à°°à±'.split('_'),
    monthsShort : 'à°à°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°à°¿_à°à°ªà±à°°à°¿._à°®à±_à°à±à°¨à±_à°à±à°²à±à±_à°à°._à°¸à±à°ªà±._à°à°à±à°à±._à°¨à°µ._à°¡à°¿à°¸à±.'.split('_'),
    monthsParseExact : true,
    weekdays : 'à°à°¦à°¿à°µà°¾à°°à°_à°¸à±à°®à°µà°¾à°°à°_à°®à°à°à°³à°µà°¾à°°à°_à°¬à±à°§à°µà°¾à°°à°_à°à±à°°à±à°µà°¾à°°à°_à°¶à±à°à±à°°à°µà°¾à°°à°_à°¶à°¨à°¿à°µà°¾à°°à°'.split('_'),
    weekdaysShort : 'à°à°¦à°¿_à°¸à±à°®_à°®à°à°à°³_à°¬à±à°§_à°à±à°°à±_à°¶à±à°à±à°°_à°¶à°¨à°¿'.split('_'),
    weekdaysMin : 'à°_à°¸à±_à°®à°_à°¬à±_à°à±_à°¶à±_à°¶'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[à°¨à±à°¡à±] LT',
        nextDay : '[à°°à±à°ªà±] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[à°¨à°¿à°¨à±à°¨] LT',
        lastWeek : '[à°à°¤] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s à°²à±',
        past : '%s à°à±à°°à°¿à°¤à°',
        s : 'à°à±à°¨à±à°¨à°¿ à°à±à°·à°£à°¾à°²à±',
        m : 'à°à° à°¨à°¿à°®à°¿à°·à°',
        mm : '%d à°¨à°¿à°®à°¿à°·à°¾à°²à±',
        h : 'à°à° à°à°à°',
        hh : '%d à°à°à°à°²à±',
        d : 'à°à° à°°à±à°à±',
        dd : '%d à°°à±à°à±à°²à±',
        M : 'à°à° à°¨à±à°²',
        MM : '%d à°¨à±à°²à°²à±',
        y : 'à°à° à°¸à°à°µà°¤à±à°¸à°°à°',
        yy : '%d à°¸à°à°µà°¤à±à°¸à°°à°¾à°²à±'
    },
    ordinalParse : /\d{1,2}à°µ/,
    ordinal : '%dà°µ',
    meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°à°¦à°¯à°|à°®à°§à±à°¯à°¾à°¹à±à°¨à°|à°¸à°¾à°¯à°à°¤à±à°°à°/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'à°°à°¾à°¤à±à°°à°¿') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'à°à°¦à°¯à°') {
            return hour;
        } else if (meridiem === 'à°®à°§à±à°¯à°¾à°¹à±à°¨à°') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'à°¸à°¾à°¯à°à°¤à±à°°à°') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'à°°à°¾à°¤à±à°°à°¿';
        } else if (hour < 10) {
            return 'à°à°¦à°¯à°';
        } else if (hour < 17) {
            return 'à°®à°§à±à°¯à°¾à°¹à±à°¨à°';
        } else if (hour < 20) {
            return 'à°¸à°¾à°¯à°à°¤à±à°°à°';
        } else {
            return 'à°°à°¾à°¤à±à°°à°¿';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return te;

})));
