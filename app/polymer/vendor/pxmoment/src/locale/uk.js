//! moment.js locale configuration
//! locale : ukrainian (uk)
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion ElensÃºle : https://github.com/Oire

import moment from '../moment';

function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'ÑÐ²Ð¸Ð»Ð¸Ð½Ð°_ÑÐ²Ð¸Ð»Ð¸Ð½Ð¸_ÑÐ²Ð¸Ð»Ð¸Ð½' : 'ÑÐ²Ð¸Ð»Ð¸Ð½Ñ_ÑÐ²Ð¸Ð»Ð¸Ð½Ð¸_ÑÐ²Ð¸Ð»Ð¸Ð½',
        'hh': withoutSuffix ? 'Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½' : 'Ð³Ð¾Ð´Ð¸Ð½Ñ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½',
        'dd': 'Ð´ÐµÐ½Ñ_Ð´Ð½Ñ_Ð´Ð½ÑÐ²',
        'MM': 'Ð¼ÑÑÑÑÑ_Ð¼ÑÑÑÑÑ_Ð¼ÑÑÑÑÑÐ²',
        'yy': 'ÑÑÐº_ÑÐ¾ÐºÐ¸_ÑÐ¾ÐºÑÐ²'
    };
    if (key === 'm') {
        return withoutSuffix ? 'ÑÐ²Ð¸Ð»Ð¸Ð½Ð°' : 'ÑÐ²Ð¸Ð»Ð¸Ð½Ñ';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'Ð³Ð¾Ð´Ð¸Ð½Ð°' : 'Ð³Ð¾Ð´Ð¸Ð½Ñ';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}
function weekdaysCaseReplace(m, format) {
    var weekdays = {
        'nominative': 'Ð½ÐµÐ´ÑÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÑÐ»Ð¾Ðº_Ð²ÑÐ²ÑÐ¾ÑÐ¾Ðº_ÑÐµÑÐµÐ´Ð°_ÑÐµÑÐ²ÐµÑ_Ð¿âÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð¾ÑÐ°'.split('_'),
        'accusative': 'Ð½ÐµÐ´ÑÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÑÐ»Ð¾Ðº_Ð²ÑÐ²ÑÐ¾ÑÐ¾Ðº_ÑÐµÑÐµÐ´Ñ_ÑÐµÑÐ²ÐµÑ_Ð¿âÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð¾ÑÑ'.split('_'),
        'genitive': 'Ð½ÐµÐ´ÑÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÑÐ»ÐºÐ°_Ð²ÑÐ²ÑÐ¾ÑÐºÐ°_ÑÐµÑÐµÐ´Ð¸_ÑÐµÑÐ²ÐµÑÐ³Ð°_Ð¿âÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð¾ÑÐ¸'.split('_')
    },
    nounCase = (/(\[[ÐÐ²Ð£Ñ]\]) ?dddd/).test(format) ?
        'accusative' :
        ((/\[?(?:Ð¼Ð¸Ð½ÑÐ»Ð¾Ñ|Ð½Ð°ÑÑÑÐ¿Ð½Ð¾Ñ)? ?\] ?dddd/).test(format) ?
            'genitive' :
            'nominative');
    return weekdays[nounCase][m.day()];
}
function processHoursFunction(str) {
    return function () {
        return str + 'Ð¾' + (this.hours() === 11 ? 'Ð±' : '') + '] LT';
    };
}

export default moment.defineLocale('uk', {
    months : {
        'format': 'ÑÑÑÐ½Ñ_Ð»ÑÑÐ¾Ð³Ð¾_Ð±ÐµÑÐµÐ·Ð½Ñ_ÐºÐ²ÑÑÐ½Ñ_ÑÑÐ°Ð²Ð½Ñ_ÑÐµÑÐ²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑÐ¿Ð½Ñ_Ð²ÐµÑÐµÑÐ½Ñ_Ð¶Ð¾Ð²ÑÐ½Ñ_Ð»Ð¸ÑÑÐ¾Ð¿Ð°Ð´Ð°_Ð³ÑÑÐ´Ð½Ñ'.split('_'),
        'standalone': 'ÑÑÑÐµÐ½Ñ_Ð»ÑÑÐ¸Ð¹_Ð±ÐµÑÐµÐ·ÐµÐ½Ñ_ÐºÐ²ÑÑÐµÐ½Ñ_ÑÑÐ°Ð²ÐµÐ½Ñ_ÑÐµÑÐ²ÐµÐ½Ñ_Ð»Ð¸Ð¿ÐµÐ½Ñ_ÑÐµÑÐ¿ÐµÐ½Ñ_Ð²ÐµÑÐµÑÐµÐ½Ñ_Ð¶Ð¾Ð²ÑÐµÐ½Ñ_Ð»Ð¸ÑÑÐ¾Ð¿Ð°Ð´_Ð³ÑÑÐ´ÐµÐ½Ñ'.split('_')
    },
    monthsShort : 'ÑÑÑ_Ð»ÑÑ_Ð±ÐµÑ_ÐºÐ²ÑÑ_ÑÑÐ°Ð²_ÑÐµÑÐ²_Ð»Ð¸Ð¿_ÑÐµÑÐ¿_Ð²ÐµÑ_Ð¶Ð¾Ð²Ñ_Ð»Ð¸ÑÑ_Ð³ÑÑÐ´'.split('_'),
    weekdays : weekdaysCaseReplace,
    weekdaysShort : 'Ð½Ð´_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
    weekdaysMin : 'Ð½Ð´_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY Ñ.',
        LLL : 'D MMMM YYYY Ñ., HH:mm',
        LLLL : 'dddd, D MMMM YYYY Ñ., HH:mm'
    },
    calendar : {
        sameDay: processHoursFunction('[Ð¡ÑÐ¾Ð³Ð¾Ð´Ð½Ñ '),
        nextDay: processHoursFunction('[ÐÐ°Ð²ÑÑÐ° '),
        lastDay: processHoursFunction('[ÐÑÐ¾ÑÐ° '),
        nextWeek: processHoursFunction('[Ð£] dddd ['),
        lastWeek: function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
                return processHoursFunction('[ÐÐ¸Ð½ÑÐ»Ð¾Ñ] dddd [').call(this);
            case 1:
            case 2:
            case 4:
                return processHoursFunction('[ÐÐ¸Ð½ÑÐ»Ð¾Ð³Ð¾] dddd [').call(this);
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'Ð·Ð° %s',
        past : '%s ÑÐ¾Ð¼Ñ',
        s : 'Ð´ÐµÐºÑÐ»ÑÐºÐ° ÑÐµÐºÑÐ½Ð´',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : 'Ð³Ð¾Ð´Ð¸Ð½Ñ',
        hh : relativeTimeWithPlural,
        d : 'Ð´ÐµÐ½Ñ',
        dd : relativeTimeWithPlural,
        M : 'Ð¼ÑÑÑÑÑ',
        MM : relativeTimeWithPlural,
        y : 'ÑÑÐº',
        yy : relativeTimeWithPlural
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /Ð½Ð¾ÑÑ|ÑÐ°Ð½ÐºÑ|Ð´Ð½Ñ|Ð²ÐµÑÐ¾ÑÐ°/,
    isPM: function (input) {
        return /^(Ð´Ð½Ñ|Ð²ÐµÑÐ¾ÑÐ°)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'Ð½Ð¾ÑÑ';
        } else if (hour < 12) {
            return 'ÑÐ°Ð½ÐºÑ';
        } else if (hour < 17) {
            return 'Ð´Ð½Ñ';
        } else {
            return 'Ð²ÐµÑÐ¾ÑÐ°';
        }
    },
    ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
    ordinal: function (number, period) {
        switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
            return number + '-Ð¹';
        case 'D':
            return number + '-Ð³Ð¾';
        default:
            return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

