//! moment.js locale configuration
//! locale : chinese (zh-cn)
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var zh_cn = moment.defineLocale('zh-cn', {
        months : 'ä¸æ_äºæ_ä¸æ_åæ_äºæ_å­æ_ä¸æ_å«æ_ä¹æ_åæ_åä¸æ_åäºæ'.split('_'),
        monthsShort : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
        weekdays : 'æææ¥_ææä¸_ææäº_ææä¸_ææå_ææäº_ææå­'.split('_'),
        weekdaysShort : 'å¨æ¥_å¨ä¸_å¨äº_å¨ä¸_å¨å_å¨äº_å¨å­'.split('_'),
        weekdaysMin : 'æ¥_ä¸_äº_ä¸_å_äº_å­'.split('_'),
        longDateFormat : {
            LT : 'Ahç¹mmå',
            LTS : 'Ahç¹måsç§',
            L : 'YYYY-MM-DD',
            LL : 'YYYYå¹´MMMDæ¥',
            LLL : 'YYYYå¹´MMMDæ¥Ahç¹mmå',
            LLLL : 'YYYYå¹´MMMDæ¥ddddAhç¹mmå',
            l : 'YYYY-MM-DD',
            ll : 'YYYYå¹´MMMDæ¥',
            lll : 'YYYYå¹´MMMDæ¥Ahç¹mmå',
            llll : 'YYYYå¹´MMMDæ¥ddddAhç¹mmå'
        },
        meridiemParse: /åæ¨|æ©ä¸|ä¸å|ä¸­å|ä¸å|æä¸/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'åæ¨' || meridiem === 'æ©ä¸' ||
                    meridiem === 'ä¸å') {
                return hour;
            } else if (meridiem === 'ä¸å' || meridiem === 'æä¸') {
                return hour + 12;
            } else {
                // 'ä¸­å'
                return hour >= 11 ? hour : hour + 12;
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
            sameDay : function () {
                return this.minutes() === 0 ? '[ä»å¤©]Ah[ç¹æ´]' : '[ä»å¤©]LT';
            },
            nextDay : function () {
                return this.minutes() === 0 ? '[æå¤©]Ah[ç¹æ´]' : '[æå¤©]LT';
            },
            lastDay : function () {
                return this.minutes() === 0 ? '[æ¨å¤©]Ah[ç¹æ´]' : '[æ¨å¤©]LT';
            },
            nextWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.diff(startOfWeek, 'days') >= 7 ? '[ä¸]' : '[æ¬]';
                return this.minutes() === 0 ? prefix + 'dddAhç¹æ´' : prefix + 'dddAhç¹mm';
            },
            lastWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix()  ? '[ä¸]' : '[æ¬]';
                return this.minutes() === 0 ? prefix + 'dddAhç¹æ´' : prefix + 'dddAhç¹mm';
            },
            sameElse : 'LL'
        },
        ordinalParse: /\d{1,2}(æ¥|æ|å¨)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + 'æ¥';
            case 'M':
                return number + 'æ';
            case 'w':
            case 'W':
                return number + 'å¨';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%så',
            past : '%så',
            s : 'å ç§',
            m : '1 åé',
            mm : '%d åé',
            h : '1 å°æ¶',
            hh : '%d å°æ¶',
            d : '1 å¤©',
            dd : '%d å¤©',
            M : '1 ä¸ªæ',
            MM : '%d ä¸ªæ',
            y : '1 å¹´',
            yy : '%d å¹´'
        },
        week : {
            // GB/T 7408-1994ãæ°æ®ååäº¤æ¢æ ¼å¼Â·ä¿¡æ¯äº¤æ¢Â·æ¥æåæ¶é´è¡¨ç¤ºæ³ãä¸ISO 8601:1988ç­æ
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return zh_cn;

}));