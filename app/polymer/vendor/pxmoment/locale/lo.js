//! moment.js locale configuration
//! locale : lao (lo)
//! author : Ryan Hart : https://github.com/ryanhart2

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var lo = moment.defineLocale('lo', {
        months : 'àº¡àº±àºàºàº­àº_àºàº¸àº¡àºàº²_àº¡àºµàºàº²_à»àº¡àºªàº²_àºàº¶àºàºªàº°àºàº²_àº¡àº´àºàº¸àºàº²_àºà»àº¥àº°àºàº»àº_àºªàº´àºàº«àº²_àºàº±àºàºàº²_àºàº¸àº¥àº²_àºàº°àºàº´àº_àºàº±àºàº§àº²'.split('_'),
        monthsShort : 'àº¡àº±àºàºàº­àº_àºàº¸àº¡àºàº²_àº¡àºµàºàº²_à»àº¡àºªàº²_àºàº¶àºàºªàº°àºàº²_àº¡àº´àºàº¸àºàº²_àºà»àº¥àº°àºàº»àº_àºªàº´àºàº«àº²_àºàº±àºàºàº²_àºàº¸àº¥àº²_àºàº°àºàº´àº_àºàº±àºàº§àº²'.split('_'),
        weekdays : 'àº­àº²àºàº´àº_àºàº±àº_àº­àº±àºàºàº²àº_àºàº¸àº_àºàº°àº«àº±àº_àºªàº¸àº_à»àºªàº»àº²'.split('_'),
        weekdaysShort : 'àºàº´àº_àºàº±àº_àº­àº±àºàºàº²àº_àºàº¸àº_àºàº°àº«àº±àº_àºªàº¸àº_à»àºªàº»àº²'.split('_'),
        weekdaysMin : 'àº_àº_àº­àº_àº_àºàº«_àºªàº_àºª'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'àº§àº±àºdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /àºàº­àºà»àºàº»à»àº²|àºàº­àºà»àº¥àº/,
        isPM: function (input) {
            return input === 'àºàº­àºà»àº¥àº';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'àºàº­àºà»àºàº»à»àº²';
            } else {
                return 'àºàº­àºà»àº¥àº';
            }
        },
        calendar : {
            sameDay : '[àº¡àº·à»àºàºµà»à»àº§àº¥àº²] LT',
            nextDay : '[àº¡àº·à»àº­àº·à»àºà»àº§àº¥àº²] LT',
            nextWeek : '[àº§àº±àº]dddd[à»à»àº²à»àº§àº¥àº²] LT',
            lastDay : '[àº¡àº·à»àº§àº²àºàºàºµà»à»àº§àº¥àº²] LT',
            lastWeek : '[àº§àº±àº]dddd[à»àº¥à»àº§àºàºµà»à»àº§àº¥àº²] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'àº­àºµàº %s',
            past : '%sàºà»àº²àºàº¡àº²',
            s : 'àºà»à»à»àºàº»à»àº²à»àºàº§àº´àºàº²àºàºµ',
            m : '1 àºàº²àºàºµ',
            mm : '%d àºàº²àºàºµ',
            h : '1 àºàº»à»àº§à»àº¡àº',
            hh : '%d àºàº»à»àº§à»àº¡àº',
            d : '1 àº¡àº·à»',
            dd : '%d àº¡àº·à»',
            M : '1 à»àºàº·àº­àº',
            MM : '%d à»àºàº·àº­àº',
            y : '1 àºàºµ',
            yy : '%d àºàºµ'
        },
        ordinalParse: /(àºàºµà»)\d{1,2}/,
        ordinal : function (number) {
            return 'àºàºµà»' + number;
        }
    });

    return lo;

}));