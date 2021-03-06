//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var zhHk = moment.defineLocale('zh-hk', {
    months : 'ä¸æ_äºæ_ä¸æ_åæ_äºæ_å­æ_ä¸æ_å«æ_ä¹æ_åæ_åä¸æ_åäºæ'.split('_'),
    monthsShort : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
    weekdays : 'æææ¥_ææä¸_ææäº_ææä¸_ææå_ææäº_ææå­'.split('_'),
    weekdaysShort : 'é±æ¥_é±ä¸_é±äº_é±ä¸_é±å_é±äº_é±å­'.split('_'),
    weekdaysMin : 'æ¥_ä¸_äº_ä¸_å_äº_å­'.split('_'),
    longDateFormat : {
        LT : 'Ahé»mmå',
        LTS : 'Ahé»måsç§',
        L : 'YYYYå¹´MMMDæ¥',
        LL : 'YYYYå¹´MMMDæ¥',
        LLL : 'YYYYå¹´MMMDæ¥Ahé»mmå',
        LLLL : 'YYYYå¹´MMMDæ¥ddddAhé»mmå',
        l : 'YYYYå¹´MMMDæ¥',
        ll : 'YYYYå¹´MMMDæ¥',
        lll : 'YYYYå¹´MMMDæ¥Ahé»mmå',
        llll : 'YYYYå¹´MMMDæ¥ddddAhé»mmå'
    },
    meridiemParse: /åæ¨|æ©ä¸|ä¸å|ä¸­å|ä¸å|æä¸/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'åæ¨' || meridiem === 'æ©ä¸' || meridiem === 'ä¸å') {
            return hour;
        } else if (meridiem === 'ä¸­å') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'ä¸å' || meridiem === 'æä¸') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return 'åæ¨';
        } else if (hm < 900) {
            return 'æ©ä¸';
        } else if (hm < 1130) {
            return 'ä¸å';
        } else if (hm < 1230) {
            return 'ä¸­å';
        } else if (hm < 1800) {
            return 'ä¸å';
        } else {
            return 'æä¸';
        }
    },
    calendar : {
        sameDay : '[ä»å¤©]LT',
        nextDay : '[æå¤©]LT',
        nextWeek : '[ä¸]ddddLT',
        lastDay : '[æ¨å¤©]LT',
        lastWeek : '[ä¸]ddddLT',
        sameElse : 'L'
    },
    ordinalParse: /\d{1,2}(æ¥|æ|é±)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + 'æ¥';
            case 'M' :
                return number + 'æ';
            case 'w' :
            case 'W' :
                return number + 'é±';
            default :
                return number;
        }
    },
    relativeTime : {
        future : '%så§',
        past : '%så',
        s : 'å¹¾ç§',
        m : '1 åé',
        mm : '%d åé',
        h : '1 å°æ',
        hh : '%d å°æ',
        d : '1 å¤©',
        dd : '%d å¤©',
        M : '1 åæ',
        MM : '%d åæ',
        y : '1 å¹´',
        yy : '%d å¹´'
    }
});

return zhHk;

})));
