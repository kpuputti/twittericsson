/*jslint white: true, browser: true, devel: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true */
/*global google:false, $:false, jQuery:false*/

// Logger for Firebug/Webkit console.
var LOG = function (s) {
    try {
        console.log(s);
    } catch (e) {}
};

// Global namespace for all code.
var TE = {};

TE.init = function () {
    LOG('init app');
};

$(document).ready(function () {
    TE.init();
});
