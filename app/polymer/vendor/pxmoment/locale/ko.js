//! moment.js locale configuration
//! locale : korean (ko)
//!
//! authors
//!
//! - Kyungwook, Park : https://github.com/kyungw00k
//! - Jeeeyul Lee <jeeeyul@gmail.com>

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var ko = moment.defineLocale('ko', {
        months : '1ì_2ì_3ì_4ì_5ì_6ì_7ì_8ì_9ì_10ì_11ì_12ì'.split('_'),
        monthsShort : '1ì_2ì_3ì_4ì_5ì_6ì_7ì_8ì_9ì_10ì_11ì_12ì'.split('_'),
        weekdays : 'ì¼ìì¼_ììì¼_íìì¼_ììì¼_ëª©ìì¼_ê¸ìì¼_í ìì¼'.split('_'),
        weekdaysShort : 'ì¼_ì_í_ì_ëª©_ê¸_í '.split('_'),
        weekdaysMin : 'ì¼_ì_í_ì_ëª©_ê¸_í '.split('_'),
        longDateFormat : {
            LT : 'A hì më¶',
            LTS : 'A hì më¶ sì´',
            L : 'YYYY.MM.DD',
            LL : 'YYYYë MMMM Dì¼',
            LLL : 'YYYYë MMMM Dì¼ A hì më¶',
            LLLL : 'YYYYë MMMM Dì¼ dddd A hì më¶'
        },
        calendar : {
            sameDay : 'ì¤ë LT',
            nextDay : 'ë´ì¼ LT',
            nextWeek : 'dddd LT',
            lastDay : 'ì´ì  LT',
            lastWeek : 'ì§ëì£¼ dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s í',
            past : '%s ì ',
            s : 'ëª ì´',
            ss : '%dì´',
            m : 'ì¼ë¶',
            mm : '%dë¶',
            h : 'í ìê°',
            hh : '%dìê°',
            d : 'íë£¨',
            dd : '%dì¼',
            M : 'í ë¬',
            MM : '%dë¬',
            y : 'ì¼ ë',
            yy : '%dë'
        },
        ordinalParse : /\d{1,2}ì¼/,
        ordinal : '%dì¼',
        meridiemParse : /ì¤ì |ì¤í/,
        isPM : function (token) {
            return token === 'ì¤í';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? 'ì¤ì ' : 'ì¤í';
        }
    });

    return ko;

}));