ï»¿/*!
 * numbro.js language configuration
 * language : Korean
 * author (numbro.js Version): Randy Wilander : https://github.com/rocketedaway
 * author (numeral.js Version) : Rich Daley : https://github.com/pedantic-git
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'ko-KR',
        cultureCode: 'ko-KR',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'ì²',
            million: 'ë°±ë§',
            billion: 'ì­ìµ',
            trillion: 'ì¼ì¡°'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'â©'
        }
    };

    // CommonJS
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && window.numbro && window.numbro.culture) {
        window.numbro.culture(language.cultureCode, language);
    }
}.call(typeof window === 'undefined' ? this : window));
