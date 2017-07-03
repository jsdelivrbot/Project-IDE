//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion ElensÃºle : https://github.com/Oire
//! author : ÐÐ¾ÑÐµÐ½Ð±ÐµÑÐ³ ÐÐ°ÑÐº : https://github.com/socketpair

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
        'mm': withoutSuffix ? 'Ð¼Ð¸Ð½ÑÑÐ°_Ð¼Ð¸Ð½ÑÑÑ_Ð¼Ð¸Ð½ÑÑ' : 'Ð¼Ð¸Ð½ÑÑÑ_Ð¼Ð¸Ð½ÑÑÑ_Ð¼Ð¸Ð½ÑÑ',
        'hh': 'ÑÐ°Ñ_ÑÐ°ÑÐ°_ÑÐ°ÑÐ¾Ð²',
        'dd': 'Ð´ÐµÐ½Ñ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹',
        'MM': 'Ð¼ÐµÑÑÑ_Ð¼ÐµÑÑÑÐ°_Ð¼ÐµÑÑÑÐµÐ²',
        'yy': 'Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ'
    };
    if (key === 'm') {
        return withoutSuffix ? 'Ð¼Ð¸Ð½ÑÑÐ°' : 'Ð¼Ð¸Ð½ÑÑÑ';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}
var monthsParse = [/^ÑÐ½Ð²/i, /^ÑÐµÐ²/i, /^Ð¼Ð°Ñ/i, /^Ð°Ð¿Ñ/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑÐ½/i, /^Ð¸ÑÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];

// http://new.gramota.ru/spravka/rules/139-prop : Â§ 103
// Ð¡Ð¾ÐºÑÐ°ÑÐµÐ½Ð¸Ñ Ð¼ÐµÑÑÑÐµÐ²: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
var ru = moment.defineLocale('ru', {
    months : {
        format: 'ÑÐ½Ð²Ð°ÑÑ_ÑÐµÐ²ÑÐ°Ð»Ñ_Ð¼Ð°ÑÑÐ°_Ð°Ð¿ÑÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³ÑÑÑÐ°_ÑÐµÐ½ÑÑÐ±ÑÑ_Ð¾ÐºÑÑÐ±ÑÑ_Ð½Ð¾ÑÐ±ÑÑ_Ð´ÐµÐºÐ°Ð±ÑÑ'.split('_'),
        standalone: 'ÑÐ½Ð²Ð°ÑÑ_ÑÐµÐ²ÑÐ°Ð»Ñ_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐµÐ»Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ½ÑÑÐ±ÑÑ_Ð¾ÐºÑÑÐ±ÑÑ_Ð½Ð¾ÑÐ±ÑÑ_Ð´ÐµÐºÐ°Ð±ÑÑ'.split('_')
    },
    monthsShort : {
        // Ð¿Ð¾ CLDR Ð¸Ð¼ÐµÐ½Ð½Ð¾ "Ð¸ÑÐ»." Ð¸ "Ð¸ÑÐ½.", Ð½Ð¾ ÐºÐ°ÐºÐ¾Ð¹ ÑÐ¼ÑÑÐ» Ð¼ÐµÐ½ÑÑÑ Ð±ÑÐºÐ²Ñ Ð½Ð° ÑÐ¾ÑÐºÑ ?
        format: 'ÑÐ½Ð²._ÑÐµÐ²Ñ._Ð¼Ð°Ñ._Ð°Ð¿Ñ._Ð¼Ð°Ñ_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ._Ð¾ÐºÑ._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.'.split('_'),
        standalone: 'ÑÐ½Ð²._ÑÐµÐ²Ñ._Ð¼Ð°ÑÑ_Ð°Ð¿Ñ._Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ._Ð¾ÐºÑ._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.'.split('_')
    },
    weekdays : {
        standalone: 'Ð²Ð¾ÑÐºÑÐµÑÐµÐ½ÑÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑÐ½Ð¸Ðº_Ð²ÑÐ¾ÑÐ½Ð¸Ðº_ÑÑÐµÐ´Ð°_ÑÐµÑÐ²ÐµÑÐ³_Ð¿ÑÑÐ½Ð¸ÑÐ°_ÑÑÐ±Ð±Ð¾ÑÐ°'.split('_'),
        format: 'Ð²Ð¾ÑÐºÑÐµÑÐµÐ½ÑÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑÐ½Ð¸Ðº_Ð²ÑÐ¾ÑÐ½Ð¸Ðº_ÑÑÐµÐ´Ñ_ÑÐµÑÐ²ÐµÑÐ³_Ð¿ÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð±Ð¾ÑÑ'.split('_'),
        isFormat: /\[ ?[ÐÐ²] ?(?:Ð¿ÑÐ¾ÑÐ»ÑÑ|ÑÐ»ÐµÐ´ÑÑÑÑÑ|ÑÑÑ)? ?\] ?dddd/
    },
    weekdaysShort : 'Ð²Ñ_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
    weekdaysMin : 'Ð²Ñ_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
    monthsParse : monthsParse,
    longMonthsParse : monthsParse,
    shortMonthsParse : monthsParse,

    // Ð¿Ð¾Ð»Ð½ÑÐµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ Ñ Ð¿Ð°Ð´ÐµÐ¶Ð°Ð¼Ð¸, Ð¿Ð¾ ÑÑÐ¸ Ð±ÑÐºÐ²Ñ, Ð´Ð»Ñ Ð½ÐµÐºÐ¾ÑÐ¾ÑÑÑ, Ð¿Ð¾ 4 Ð±ÑÐºÐ²Ñ, ÑÐ¾ÐºÑÐ°ÑÐµÐ½Ð¸Ñ Ñ ÑÐ¾ÑÐºÐ¾Ð¹ Ð¸ Ð±ÐµÐ· ÑÐ¾ÑÐºÐ¸
    monthsRegex: /^(ÑÐ½Ð²Ð°Ñ[ÑÑ]|ÑÐ½Ð²\.?|ÑÐµÐ²ÑÐ°Ð»[ÑÑ]|ÑÐµÐ²Ñ?\.?|Ð¼Ð°ÑÑÐ°?|Ð¼Ð°Ñ\.?|Ð°Ð¿ÑÐµÐ»[ÑÑ]|Ð°Ð¿Ñ\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑÐ½[ÑÑ]|Ð¸ÑÐ½\.?|Ð¸ÑÐ»[ÑÑ]|Ð¸ÑÐ»\.?|Ð°Ð²Ð³ÑÑÑÐ°?|Ð°Ð²Ð³\.?|ÑÐµÐ½ÑÑÐ±Ñ[ÑÑ]|ÑÐµÐ½Ñ?\.?|Ð¾ÐºÑÑÐ±Ñ[ÑÑ]|Ð¾ÐºÑ\.?|Ð½Ð¾ÑÐ±Ñ[ÑÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ[ÑÑ]|Ð´ÐµÐº\.?)/i,

    // ÐºÐ¾Ð¿Ð¸Ñ Ð¿ÑÐµÐ´ÑÐ´ÑÑÐµÐ³Ð¾
    monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ[ÑÑ]|ÑÐ½Ð²\.?|ÑÐµÐ²ÑÐ°Ð»[ÑÑ]|ÑÐµÐ²Ñ?\.?|Ð¼Ð°ÑÑÐ°?|Ð¼Ð°Ñ\.?|Ð°Ð¿ÑÐµÐ»[ÑÑ]|Ð°Ð¿Ñ\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑÐ½[ÑÑ]|Ð¸ÑÐ½\.?|Ð¸ÑÐ»[ÑÑ]|Ð¸ÑÐ»\.?|Ð°Ð²Ð³ÑÑÑÐ°?|Ð°Ð²Ð³\.?|ÑÐµÐ½ÑÑÐ±Ñ[ÑÑ]|ÑÐµÐ½Ñ?\.?|Ð¾ÐºÑÑÐ±Ñ[ÑÑ]|Ð¾ÐºÑ\.?|Ð½Ð¾ÑÐ±Ñ[ÑÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ[ÑÑ]|Ð´ÐµÐº\.?)/i,

    // Ð¿Ð¾Ð»Ð½ÑÐµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ Ñ Ð¿Ð°Ð´ÐµÐ¶Ð°Ð¼Ð¸
    monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ[ÑÑ]|ÑÐµÐ²ÑÐ°Ð»[ÑÑ]|Ð¼Ð°ÑÑÐ°?|Ð°Ð¿ÑÐµÐ»[ÑÑ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑÐ½[ÑÑ]|Ð¸ÑÐ»[ÑÑ]|Ð°Ð²Ð³ÑÑÑÐ°?|ÑÐµÐ½ÑÑÐ±Ñ[ÑÑ]|Ð¾ÐºÑÑÐ±Ñ[ÑÑ]|Ð½Ð¾ÑÐ±Ñ[ÑÑ]|Ð´ÐµÐºÐ°Ð±Ñ[ÑÑ])/i,

    // ÐÑÑÐ°Ð¶ÐµÐ½Ð¸Ðµ, ÐºÐ¾ÑÐ¾ÑÐ¾Ðµ ÑÐ¾Ð¾ÑÐ²ÐµÑÑÐ²ÑÐµÑ ÑÐ¾Ð»ÑÐºÐ¾ ÑÐ¾ÐºÑÐ°ÑÑÐ½Ð½ÑÐ¼ ÑÐ¾ÑÐ¼Ð°Ð¼
    monthsShortStrictRegex: /^(ÑÐ½Ð²\.|ÑÐµÐ²Ñ?\.|Ð¼Ð°Ñ[Ñ.]|Ð°Ð¿Ñ\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑÐ½[ÑÑ.]|Ð¸ÑÐ»[ÑÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ?\.|Ð¾ÐºÑ\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY Ð³.',
        LLL : 'D MMMM YYYY Ð³., HH:mm',
        LLLL : 'dddd, D MMMM YYYY Ð³., HH:mm'
    },
    calendar : {
        sameDay: '[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT',
        nextDay: '[ÐÐ°Ð²ÑÑÐ° Ð²] LT',
        lastDay: '[ÐÑÐµÑÐ° Ð²] LT',
        nextWeek: function (now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[Ð ÑÐ»ÐµÐ´ÑÑÑÐµÐµ] dddd [Ð²] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[Ð ÑÐ»ÐµÐ´ÑÑÑÐ¸Ð¹] dddd [Ð²] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[Ð ÑÐ»ÐµÐ´ÑÑÑÑÑ] dddd [Ð²] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[ÐÐ¾] dddd [Ð²] LT';
                } else {
                    return '[Ð] dddd [Ð²] LT';
                }
            }
        },
        lastWeek: function (now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[Ð Ð¿ÑÐ¾ÑÐ»Ð¾Ðµ] dddd [Ð²] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[Ð Ð¿ÑÐ¾ÑÐ»ÑÐ¹] dddd [Ð²] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[Ð Ð¿ÑÐ¾ÑÐ»ÑÑ] dddd [Ð²] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[ÐÐ¾] dddd [Ð²] LT';
                } else {
                    return '[Ð] dddd [Ð²] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'ÑÐµÑÐµÐ· %s',
        past : '%s Ð½Ð°Ð·Ð°Ð´',
        s : 'Ð½ÐµÑÐºÐ¾Ð»ÑÐºÐ¾ ÑÐµÐºÑÐ½Ð´',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : 'ÑÐ°Ñ',
        hh : relativeTimeWithPlural,
        d : 'Ð´ÐµÐ½Ñ',
        dd : relativeTimeWithPlural,
        M : 'Ð¼ÐµÑÑÑ',
        MM : relativeTimeWithPlural,
        y : 'Ð³Ð¾Ð´',
        yy : relativeTimeWithPlural
    },
    meridiemParse: /Ð½Ð¾ÑÐ¸|ÑÑÑÐ°|Ð´Ð½Ñ|Ð²ÐµÑÐµÑÐ°/i,
    isPM : function (input) {
        return /^(Ð´Ð½Ñ|Ð²ÐµÑÐµÑÐ°)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'Ð½Ð¾ÑÐ¸';
        } else if (hour < 12) {
            return 'ÑÑÑÐ°';
        } else if (hour < 17) {
            return 'Ð´Ð½Ñ';
        } else {
            return 'Ð²ÐµÑÐµÑÐ°';
        }
    },
    ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return number + '-Ð¹';
            case 'D':
                return number + '-Ð³Ð¾';
            case 'w':
            case 'W':
                return number + '-Ñ';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return ru;

})));
