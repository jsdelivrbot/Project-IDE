//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ja = moment.defineLocale('ja', {
    months : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
    monthsShort : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
    weekdays : 'æ¥ææ¥_æææ¥_ç«ææ¥_æ°´ææ¥_æ¨ææ¥_éææ¥_åææ¥'.split('_'),
    weekdaysShort : 'æ¥_æ_ç«_æ°´_æ¨_é_å'.split('_'),
    weekdaysMin : 'æ¥_æ_ç«_æ°´_æ¨_é_å'.split('_'),
    longDateFormat : {
        LT : 'Ahæmå',
        LTS : 'Ahæmåsç§',
        L : 'YYYY/MM/DD',
        LL : 'YYYYå¹´MæDæ¥',
        LLL : 'YYYYå¹´MæDæ¥Ahæmå',
        LLLL : 'YYYYå¹´MæDæ¥Ahæmå dddd'
    },
    meridiemParse: /åå|åå¾/i,
    isPM : function (input) {
        return input === 'åå¾';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'åå';
        } else {
            return 'åå¾';
        }
    },
    calendar : {
        sameDay : '[ä»æ¥] LT',
        nextDay : '[ææ¥] LT',
        nextWeek : '[æ¥é±]dddd LT',
        lastDay : '[æ¨æ¥] LT',
        lastWeek : '[åé±]dddd LT',
        sameElse : 'L'
    },
    ordinalParse : /\d{1,2}æ¥/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + 'æ¥';
            default:
                return number;
        }
    },
    relativeTime : {
        future : '%så¾',
        past : '%så',
        s : 'æ°ç§',
        m : '1å',
        mm : '%då',
        h : '1æé',
        hh : '%dæé',
        d : '1æ¥',
        dd : '%dæ¥',
        M : '1ã¶æ',
        MM : '%dã¶æ',
        y : '1å¹´',
        yy : '%då¹´'
    }
});

return ja;

})));
