/*!
 * numbro.js language configuration
 * language : Chinese (Taiwan)
 * author (numbro.js Version): Randy Wilander : https://github.com/rocketedaway
 * author (numeral.js Version) : Rich Daley : https://github.com/pedantic-git
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'zh-TW',
        cultureCode: 'zh-TW',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'å',
            million: 'ç¾è¬',
            billion: 'åå',
            trillion: 'å'
        },
        ordinal: function () {
            return 'ç¬¬';
        },
        currency: {
            symbol: 'NT$'
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
