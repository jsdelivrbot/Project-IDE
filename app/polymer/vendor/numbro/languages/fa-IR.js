/*!
 * numbro.js language configuration
 * language : Farsi
 * locale: Iran
 * author : neo13 : https://github.com/neo13
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'fa-IR',
        cultureCode: 'fa-IR',
        delimiters: {
            thousands: 'Ø',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'ÙØ²Ø§Ø±',
            million: 'ÙÛÙÛÙÙ',
            billion: 'ÙÛÙÛØ§Ø±Ø¯',
            trillion: 'ØªØ±ÛÙÛÙÙ'
        },
        ordinal: function () {
            return 'Ø§Ù';
        },
        currency: {
            symbol: 'ï·¼'
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
