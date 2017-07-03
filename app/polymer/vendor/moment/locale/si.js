//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


/*jshint -W100*/
var si = moment.defineLocale('si', {
    months : 'à¶¢à¶±à·à·à¶»à·_à¶´à·à¶¶à¶»à·à·à¶»à·_à¶¸à·à¶»à·à¶­à·_à¶à¶´à·âà¶»à·à¶½à·_à¶¸à·à¶ºà·_à¶¢à·à¶±à·_à¶¢à·à¶½à·_à¶à¶à·à·à·à¶­à·_à·à·à¶´à·à¶­à·à¶¸à·à¶¶à¶»à·_à¶à¶à·à¶­à·à¶¶à¶»à·_à¶±à·à·à·à¶¸à·à¶¶à¶»à·_à¶¯à·à·à·à¶¸à·à¶¶à¶»à·'.split('_'),
    monthsShort : 'à¶¢à¶±_à¶´à·à¶¶_à¶¸à·à¶»à·_à¶à¶´à·_à¶¸à·à¶ºà·_à¶¢à·à¶±à·_à¶¢à·à¶½à·_à¶à¶à·_à·à·à¶´à·_à¶à¶à·_à¶±à·à·à·_à¶¯à·à·à·'.split('_'),
    weekdays : 'à¶à¶»à·à¶¯à·_à·à¶³à·à¶¯à·_à¶à¶à·à¶»à·à·à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·âà¶»à·à·à·à¶´à¶­à·à¶±à·à¶¯à·_à·à·à¶à·à¶»à·à¶¯à·_à·à·à¶±à·à·à¶»à·à¶¯à·'.split('_'),
    weekdaysShort : 'à¶à¶»à·_à·à¶³à·_à¶à¶_à¶¶à¶¯à·_à¶¶à·âà¶»à·_à·à·à¶à·_à·à·à¶±'.split('_'),
    weekdaysMin : 'à¶_à·_à¶_à¶¶_à¶¶à·âà¶»_à·à·_à·à·'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'a h:mm',
        LTS : 'a h:mm:ss',
        L : 'YYYY/MM/DD',
        LL : 'YYYY MMMM D',
        LLL : 'YYYY MMMM D, a h:mm',
        LLLL : 'YYYY MMMM D [à·à·à¶±à·] dddd, a h:mm:ss'
    },
    calendar : {
        sameDay : '[à¶à¶¯] LT[à¶§]',
        nextDay : '[à·à·à¶§] LT[à¶§]',
        nextWeek : 'dddd LT[à¶§]',
        lastDay : '[à¶à¶ºà·] LT[à¶§]',
        lastWeek : '[à¶´à·à·à¶à·à¶º] dddd LT[à¶§]',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sà¶à·à¶±à·',
        past : '%sà¶à¶§ à¶´à·à¶»',
        s : 'à¶­à¶­à·à¶´à¶» à¶à·à·à·à¶´à¶º',
        m : 'à¶¸à·à¶±à·à¶­à·à¶­à·à·',
        mm : 'à¶¸à·à¶±à·à¶­à·à¶­à· %d',
        h : 'à¶´à·à¶º',
        hh : 'à¶´à·à¶º %d',
        d : 'à¶¯à·à¶±à¶º',
        dd : 'à¶¯à·à¶± %d',
        M : 'à¶¸à·à·à¶º',
        MM : 'à¶¸à·à· %d',
        y : 'à·à·à¶»',
        yy : 'à·à·à¶» %d'
    },
    ordinalParse: /\d{1,2} à·à·à¶±à·/,
    ordinal : function (number) {
        return number + ' à·à·à¶±à·';
    },
    meridiemParse : /à¶´à·à¶» à·à¶»à·|à¶´à·à· à·à¶»à·|à¶´à·.à·|à¶´.à·./,
    isPM : function (input) {
        return input === 'à¶´.à·.' || input === 'à¶´à·à· à·à¶»à·';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'à¶´.à·.' : 'à¶´à·à· à·à¶»à·';
        } else {
            return isLower ? 'à¶´à·.à·.' : 'à¶´à·à¶» à·à¶»à·';
        }
    }
});

return si;

})));
