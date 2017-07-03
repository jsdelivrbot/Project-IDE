/*!
 * numbro.js language configuration
 * language : Hebrew
 * locale : IL
 * author : Eli Zehavi : https://github.com/eli-zehavi
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'he-IL',
        cultureCode: 'he-IL',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '×××£',
            million: '×××××',
            billion: '×××××',
            trillion: '××¨×××××'
        },
        currency: {
            symbol: 'âª',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: 'âª ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: 'âª ,0'
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

