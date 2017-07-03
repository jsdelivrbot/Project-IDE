//! moment.js locale configuration
//! locale : portuguese (pt)
//! author : Jefferson : https://github.com/jalex79

import moment from '../moment';

export default moment.defineLocale('pt', {
    months : 'Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado'.split('_'),
    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b'.split('_'),
    weekdaysMin : 'Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY HH:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Hoje Ã s] LT',
        nextDay: '[AmanhÃ£ Ã s] LT',
        nextWeek: 'dddd [Ã s] LT',
        lastDay: '[Ontem Ã s] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Ãltimo] dddd [Ã s] LT' : // Saturday + Sunday
                '[Ãltima] dddd [Ã s] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : 'hÃ¡ %s',
        s : 'segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mÃªs',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    ordinalParse: /\d{1,2}Âº/,
    ordinal : '%dÂº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

