//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion ElensÃºle : https://github.com/Oire

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'ÑÐ²ÑÐ»ÑÐ½Ð°_ÑÐ²ÑÐ»ÑÐ½Ñ_ÑÐ²ÑÐ»ÑÐ½' : 'ÑÐ²ÑÐ»ÑÐ½Ñ_ÑÐ²ÑÐ»ÑÐ½Ñ_ÑÐ²ÑÐ»ÑÐ½',
        'hh': withoutSuffix ? 'Ð³Ð°Ð´Ð·ÑÐ½Ð°_Ð³Ð°Ð´Ð·ÑÐ½Ñ_Ð³Ð°Ð´Ð·ÑÐ½' : 'Ð³Ð°Ð´Ð·ÑÐ½Ñ_Ð³Ð°Ð´Ð·ÑÐ½Ñ_Ð³Ð°Ð´Ð·ÑÐ½',
        'dd': 'Ð´Ð·ÐµÐ½Ñ_Ð´Ð½Ñ_Ð´Ð·ÑÐ½',
        'MM': 'Ð¼ÐµÑÑÑ_Ð¼ÐµÑÑÑÑ_Ð¼ÐµÑÑÑÐ°Ñ',
        'yy': 'Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ_Ð³Ð°Ð´Ð¾Ñ'
    };
    if (key === 'm') {
        return withoutSuffix ? 'ÑÐ²ÑÐ»ÑÐ½Ð°' : 'ÑÐ²ÑÐ»ÑÐ½Ñ';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'Ð³Ð°Ð´Ð·ÑÐ½Ð°' : 'Ð³Ð°Ð´Ð·ÑÐ½Ñ';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}

var be = moment.defineLocale('be', {
    months : {
        format: 'ÑÑÑÐ´Ð·ÐµÐ½Ñ_Ð»ÑÑÐ°Ð³Ð°_ÑÐ°ÐºÐ°Ð²ÑÐºÐ°_ÐºÑÐ°ÑÐ°Ð²ÑÐºÐ°_ÑÑÐ°ÑÐ½Ñ_ÑÑÑÐ²ÐµÐ½Ñ_Ð»ÑÐ¿ÐµÐ½Ñ_Ð¶Ð½ÑÑÐ½Ñ_Ð²ÐµÑÐ°ÑÐ½Ñ_ÐºÐ°ÑÑÑÑÑÐ½ÑÐºÐ°_Ð»ÑÑÑÐ°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ'.split('_'),
        standalone: 'ÑÑÑÐ´Ð·ÐµÐ½Ñ_Ð»ÑÑÑ_ÑÐ°ÐºÐ°Ð²ÑÐº_ÐºÑÐ°ÑÐ°Ð²ÑÐº_ÑÑÐ°Ð²ÐµÐ½Ñ_ÑÑÑÐ²ÐµÐ½Ñ_Ð»ÑÐ¿ÐµÐ½Ñ_Ð¶Ð½ÑÐ²ÐµÐ½Ñ_Ð²ÐµÑÐ°ÑÐµÐ½Ñ_ÐºÐ°ÑÑÑÑÑÐ½ÑÐº_Ð»ÑÑÑÐ°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½Ñ'.split('_')
    },
    monthsShort : 'ÑÑÑÐ´_Ð»ÑÑ_ÑÐ°Ðº_ÐºÑÐ°Ñ_ÑÑÐ°Ð²_ÑÑÑÐ²_Ð»ÑÐ¿_Ð¶Ð½ÑÐ²_Ð²ÐµÑ_ÐºÐ°ÑÑ_Ð»ÑÑÑ_ÑÐ½ÐµÐ¶'.split('_'),
    weekdays : {
        format: 'Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑÑÐ¾ÑÐ°Ðº_ÑÐµÑÐ°Ð´Ñ_ÑÐ°ÑÐ²ÐµÑ_Ð¿ÑÑÐ½ÑÑÑ_ÑÑÐ±Ð¾ÑÑ'.split('_'),
        standalone: 'Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑÑÐ¾ÑÐ°Ðº_ÑÐµÑÐ°Ð´Ð°_ÑÐ°ÑÐ²ÐµÑ_Ð¿ÑÑÐ½ÑÑÐ°_ÑÑÐ±Ð¾ÑÐ°'.split('_'),
        isFormat: /\[ ?[ÐÐ²] ?(?:Ð¼ÑÐ½ÑÐ»ÑÑ|Ð½Ð°ÑÑÑÐ¿Ð½ÑÑ)? ?\] ?dddd/
    },
    weekdaysShort : 'Ð½Ð´_Ð¿Ð½_Ð°Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
    weekdaysMin : 'Ð½Ð´_Ð¿Ð½_Ð°Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY Ð³.',
        LLL : 'D MMMM YYYY Ð³., HH:mm',
        LLLL : 'dddd, D MMMM YYYY Ð³., HH:mm'
    },
    calendar : {
        sameDay: '[Ð¡ÑÐ½Ð½Ñ Ñ] LT',
        nextDay: '[ÐÐ°ÑÑÑÐ° Ñ] LT',
        lastDay: '[Ð£ÑÐ¾ÑÐ° Ñ] LT',
        nextWeek: function () {
            return '[Ð£] dddd [Ñ] LT';
        },
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[Ð£ Ð¼ÑÐ½ÑÐ»ÑÑ] dddd [Ñ] LT';
                case 1:
                case 2:
                case 4:
                    return '[Ð£ Ð¼ÑÐ½ÑÐ»Ñ] dddd [Ñ] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'Ð¿ÑÐ°Ð· %s',
        past : '%s ÑÐ°Ð¼Ñ',
        s : 'Ð½ÐµÐºÐ°Ð»ÑÐºÑ ÑÐµÐºÑÐ½Ð´',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : relativeTimeWithPlural,
        hh : relativeTimeWithPlural,
        d : 'Ð´Ð·ÐµÐ½Ñ',
        dd : relativeTimeWithPlural,
        M : 'Ð¼ÐµÑÑÑ',
        MM : relativeTimeWithPlural,
        y : 'Ð³Ð¾Ð´',
        yy : relativeTimeWithPlural
    },
    meridiemParse: /Ð½Ð¾ÑÑ|ÑÐ°Ð½ÑÑÑ|Ð´Ð½Ñ|Ð²ÐµÑÐ°ÑÐ°/,
    isPM : function (input) {
        return /^(Ð´Ð½Ñ|Ð²ÐµÑÐ°ÑÐ°)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'Ð½Ð¾ÑÑ';
        } else if (hour < 12) {
            return 'ÑÐ°Ð½ÑÑÑ';
        } else if (hour < 17) {
            return 'Ð´Ð½Ñ';
        } else {
            return 'Ð²ÐµÑÐ°ÑÐ°';
        }
    },
    ordinalParse: /\d{1,2}-(Ñ|Ñ|Ð³Ð°)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-Ñ' : number + '-Ñ';
            case 'D':
                return number + '-Ð³Ð°';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return be;

})));
