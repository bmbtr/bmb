var langs = {
    en: {
        textTitle1: 'These pets are',
        textTitle2: 'looking for a home',
        textQ1: 'Are you ready to get a homeless pet?',
        textQ2: 'Do you think you’re responsible enough to take the care of a pet?',
        textQ3: 'Would you like to adopt a pet that will love you till the end of the days?',
        textThank: 'Thank you!',
        textThankAfter: 'You can see the list of pets who are in your area and their pictures.',
        textBtnk: 'Find my Pet!'
};


$(document).ready(function () {
    var langBrowser =
    navigator.language || (navigator.languages && navigator.languages[0]),
    param = langs[langBrowser];
    if (param == undefined && langBrowser && langBrowser.length > 0) {
        var parsedLang = langBrowser.slice(0, 2);
        if (langs[parsedLang]) {
            param = langs[parsedLang];
        }
    }

    if (param == undefined) {
        // required parameter
        param = langs["en"];
        // 'en' - default language, if you want change language, please select in object abbreviation. Example: 'fr', 'ru' etc.
    }

    $(".text-title-1").text(param.textTitle1);
    $(".text-title-2").text(param.textTitle2);
    $(".text-q-1").text(param.textQ1);
    $(".text-q-2").text(param.textQ2);
    $(".text-q-3").text(param.textQ3);
    $(".text-thank").text(param.textThank);
    $(".text-thank-after").text(param.textThankAfter);
    $(".text-btn").text(param.textBtnk);
});
