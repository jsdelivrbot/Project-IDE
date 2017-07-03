//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': 'à©§',
    '2': 'à©¨',
    '3': 'à©©',
    '4': 'à©ª',
    '5': 'à©«',
    '6': 'à©¬',
    '7': 'à©­',
    '8': 'à©®',
    '9': 'à©¯',
    '0': 'à©¦'
};
var numberMap = {
    'à©§': '1',
    'à©¨': '2',
    'à©©': '3',
    'à©ª': '4',
    'à©«': '5',
    'à©¬': '6',
    'à©­': '7',
    'à©®': '8',
    'à©¯': '9',
    'à©¦': '0'
};

var paIn = moment.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
    months : 'à¨à¨¨à¨µà¨°à©_à¨«à¨¼à¨°à¨µà¨°à©_à¨®à¨¾à¨°à¨_à¨à¨ªà©à¨°à©à¨²_à¨®à¨_à¨à©à¨¨_à¨à©à¨²à¨¾à¨_à¨à¨à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨à¨à¨¤à©à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°'.split('_'),
    monthsShort : 'à¨à¨¨à¨µà¨°à©_à¨«à¨¼à¨°à¨µà¨°à©_à¨®à¨¾à¨°à¨_à¨à¨ªà©à¨°à©à¨²_à¨®à¨_à¨à©à¨¨_à¨à©à¨²à¨¾à¨_à¨à¨à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨à¨à¨¤à©à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°'.split('_'),
    weekdays : 'à¨à¨¤à¨µà¨¾à¨°_à¨¸à©à¨®à¨µà¨¾à¨°_à¨®à©°à¨à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©à¨à¨°à¨µà¨¾à¨°'.split('_'),
    weekdaysShort : 'à¨à¨¤_à¨¸à©à¨®_à¨®à©°à¨à¨²_à¨¬à©à¨§_à¨µà©à¨°_à¨¸à¨¼à©à¨à¨°_à¨¸à¨¼à¨¨à©'.split('_'),
    weekdaysMin : 'à¨à¨¤_à¨¸à©à¨®_à¨®à©°à¨à¨²_à¨¬à©à¨§_à¨µà©à¨°_à¨¸à¨¼à©à¨à¨°_à¨¸à¨¼à¨¨à©'.split('_'),
    longDateFormat : {
        LT : 'A h:mm à¨µà¨à©',
        LTS : 'A h:mm:ss à¨µà¨à©',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm à¨µà¨à©',
        LLLL : 'dddd, D MMMM YYYY, A h:mm à¨µà¨à©'
    },
    calendar : {
        sameDay : '[à¨à¨] LT',
        nextDay : '[à¨à¨²] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[à¨à¨²] LT',
        lastWeek : '[à¨ªà¨¿à¨à¨²à©] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s à¨µà¨¿à©±à¨',
        past : '%s à¨ªà¨¿à¨à¨²à©',
        s : 'à¨à©à¨ à¨¸à¨à¨¿à©°à¨',
        m : 'à¨à¨ à¨®à¨¿à©°à¨',
        mm : '%d à¨®à¨¿à©°à¨',
        h : 'à¨à©±à¨ à¨à©°à¨à¨¾',
        hh : '%d à¨à©°à¨à©',
        d : 'à¨à©±à¨ à¨¦à¨¿à¨¨',
        dd : '%d à¨¦à¨¿à¨¨',
        M : 'à¨à©±à¨ à¨®à¨¹à©à¨¨à¨¾',
        MM : '%d à¨®à¨¹à©à¨¨à©',
        y : 'à¨à©±à¨ à¨¸à¨¾à¨²',
        yy : '%d à¨¸à¨¾à¨²'
    },
    preparse: function (string) {
        return string.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'à¨°à¨¾à¨¤') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'à¨¸à¨µà©à¨°') {
            return hour;
        } else if (meridiem === 'à¨¦à©à¨ªà¨¹à¨¿à¨°') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'à¨¸à¨¼à¨¾à¨®') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'à¨°à¨¾à¨¤';
        } else if (hour < 10) {
            return 'à¨¸à¨µà©à¨°';
        } else if (hour < 17) {
            return 'à¨¦à©à¨ªà¨¹à¨¿à¨°';
        } else if (hour < 20) {
            return 'à¨¸à¨¼à¨¾à¨®';
        } else {
            return 'à¨°à¨¾à¨¤';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return paIn;

})));
