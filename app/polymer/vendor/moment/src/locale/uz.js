//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff

import moment from '../moment';

export default moment.defineLocale('uz', {
    months : 'ÑÐ½Ð²Ð°Ñ_ÑÐµÐ²ÑÐ°Ð»_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑÐ½_Ð¸ÑÐ»_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ½ÑÑÐ±Ñ_Ð¾ÐºÑÑÐ±Ñ_Ð½Ð¾ÑÐ±Ñ_Ð´ÐµÐºÐ°Ð±Ñ'.split('_'),
    monthsShort : 'ÑÐ½Ð²_ÑÐµÐ²_Ð¼Ð°Ñ_Ð°Ð¿Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½_Ð¸ÑÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ_Ð½Ð¾Ñ_Ð´ÐµÐº'.split('_'),
    weekdays : 'Ð¯ÐºÑÐ°Ð½Ð±Ð°_ÐÑÑÐ°Ð½Ð±Ð°_Ð¡ÐµÑÐ°Ð½Ð±Ð°_Ð§Ð¾ÑÑÐ°Ð½Ð±Ð°_ÐÐ°Ð¹ÑÐ°Ð½Ð±Ð°_ÐÑÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°'.split('_'),
    weekdaysShort : 'Ð¯ÐºÑ_ÐÑÑ_Ð¡ÐµÑ_Ð§Ð¾Ñ_ÐÐ°Ð¹_ÐÑÐ¼_Ð¨Ð°Ð½'.split('_'),
    weekdaysMin : 'Ð¯Ðº_ÐÑ_Ð¡Ðµ_Ð§Ð¾_ÐÐ°_ÐÑ_Ð¨Ð°'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'D MMMM YYYY, dddd HH:mm'
    },
    calendar : {
        sameDay : '[ÐÑÐ³ÑÐ½ ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
        nextDay : '[Ð­ÑÑÐ°Ð³Ð°] LT [Ð´Ð°]',
        nextWeek : 'dddd [ÐºÑÐ½Ð¸ ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
        lastDay : '[ÐÐµÑÐ° ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
        lastWeek : '[Ð£ÑÐ³Ð°Ð½] dddd [ÐºÑÐ½Ð¸ ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'Ð¯ÐºÐ¸Ð½ %s Ð¸ÑÐ¸Ð´Ð°',
        past : 'ÐÐ¸Ñ Ð½ÐµÑÐ° %s Ð¾Ð»Ð´Ð¸Ð½',
        s : 'ÑÑÑÑÐ°Ñ',
        m : 'Ð±Ð¸Ñ Ð´Ð°ÐºÐ¸ÐºÐ°',
        mm : '%d Ð´Ð°ÐºÐ¸ÐºÐ°',
        h : 'Ð±Ð¸Ñ ÑÐ¾Ð°Ñ',
        hh : '%d ÑÐ¾Ð°Ñ',
        d : 'Ð±Ð¸Ñ ÐºÑÐ½',
        dd : '%d ÐºÑÐ½',
        M : 'Ð±Ð¸Ñ Ð¾Ð¹',
        MM : '%d Ð¾Ð¹',
        y : 'Ð±Ð¸Ñ Ð¹Ð¸Ð»',
        yy : '%d Ð¹Ð¸Ð»'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 4th is the first week of the year.
    }
});

