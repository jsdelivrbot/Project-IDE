//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var th = moment.defineLocale('th', {
    months : 'à¸¡à¸à¸£à¸²à¸à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸à¸±à¸à¸à¹_à¸¡à¸µà¸à¸²à¸à¸¡_à¹à¸¡à¸©à¸²à¸¢à¸_à¸à¸¤à¸©à¸ à¸²à¸à¸¡_à¸¡à¸´à¸à¸¸à¸à¸²à¸¢à¸_à¸à¸£à¸à¸à¸²à¸à¸¡_à¸ªà¸´à¸à¸«à¸²à¸à¸¡_à¸à¸±à¸à¸¢à¸²à¸¢à¸_à¸à¸¸à¸¥à¸²à¸à¸¡_à¸à¸¤à¸¨à¸à¸´à¸à¸²à¸¢à¸_à¸à¸±à¸à¸§à¸²à¸à¸¡'.split('_'),
    monthsShort : 'à¸¡.à¸._à¸.à¸._à¸¡à¸µ.à¸._à¹à¸¡.à¸¢._à¸.à¸._à¸¡à¸´.à¸¢._à¸.à¸._à¸ª.à¸._à¸.à¸¢._à¸.à¸._à¸.à¸¢._à¸.à¸.'.split('_'),
    monthsParseExact: true,
    weekdays : 'à¸­à¸²à¸à¸´à¸à¸¢à¹_à¸à¸±à¸à¸à¸£à¹_à¸­à¸±à¸à¸à¸²à¸£_à¸à¸¸à¸_à¸à¸¤à¸«à¸±à¸ªà¸à¸à¸µ_à¸¨à¸¸à¸à¸£à¹_à¹à¸ªà¸²à¸£à¹'.split('_'),
    weekdaysShort : 'à¸­à¸²à¸à¸´à¸à¸¢à¹_à¸à¸±à¸à¸à¸£à¹_à¸­à¸±à¸à¸à¸²à¸£_à¸à¸¸à¸_à¸à¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹_à¹à¸ªà¸²à¸£à¹'.split('_'), // yes, three characters difference
    weekdaysMin : 'à¸­à¸²._à¸._à¸­._à¸._à¸à¸¤._à¸¨._à¸ª.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'YYYY/MM/DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY à¹à¸§à¸¥à¸² H:mm',
        LLLL : 'à¸§à¸±à¸ddddà¸à¸µà¹ D MMMM YYYY à¹à¸§à¸¥à¸² H:mm'
    },
    meridiemParse: /à¸à¹à¸­à¸à¹à¸à¸µà¹à¸¢à¸|à¸«à¸¥à¸±à¸à¹à¸à¸µà¹à¸¢à¸/,
    isPM: function (input) {
        return input === 'à¸«à¸¥à¸±à¸à¹à¸à¸µà¹à¸¢à¸';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'à¸à¹à¸­à¸à¹à¸à¸µà¹à¸¢à¸';
        } else {
            return 'à¸«à¸¥à¸±à¸à¹à¸à¸µà¹à¸¢à¸';
        }
    },
    calendar : {
        sameDay : '[à¸§à¸±à¸à¸à¸µà¹ à¹à¸§à¸¥à¸²] LT',
        nextDay : '[à¸à¸£à¸¸à¹à¸à¸à¸µà¹ à¹à¸§à¸¥à¸²] LT',
        nextWeek : 'dddd[à¸«à¸à¹à¸² à¹à¸§à¸¥à¸²] LT',
        lastDay : '[à¹à¸¡à¸·à¹à¸­à¸§à¸²à¸à¸à¸µà¹ à¹à¸§à¸¥à¸²] LT',
        lastWeek : '[à¸§à¸±à¸]dddd[à¸à¸µà¹à¹à¸¥à¹à¸§ à¹à¸§à¸¥à¸²] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'à¸­à¸µà¸ %s',
        past : '%sà¸à¸µà¹à¹à¸¥à¹à¸§',
        s : 'à¹à¸¡à¹à¸à¸µà¹à¸§à¸´à¸à¸²à¸à¸µ',
        m : '1 à¸à¸²à¸à¸µ',
        mm : '%d à¸à¸²à¸à¸µ',
        h : '1 à¸à¸±à¹à¸§à¹à¸¡à¸',
        hh : '%d à¸à¸±à¹à¸§à¹à¸¡à¸',
        d : '1 à¸§à¸±à¸',
        dd : '%d à¸§à¸±à¸',
        M : '1 à¹à¸à¸·à¸­à¸',
        MM : '%d à¹à¸à¸·à¸­à¸',
        y : '1 à¸à¸µ',
        yy : '%d à¸à¸µ'
    }
});

return th;

})));
