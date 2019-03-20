// ==UserScript==
// @name          iRacing RingLaps Highlighter
// @namespace     http://www.fuzzwahracing.com/p/ringlaps-highlighter.html
// @match         http://ringlaps.nickthissen.nl/*
// @version       1.19.03.21.01
// @author        fuzzwah
// @copyright     2019+, fuzzwah (https://github.com/fuzzwah)
// @license       MIT; https://raw.githubusercontent.com/fuzzwah/iRacing-RingLaps-Highlighter/master/LICENSE
// @homepageURL   http://www.fuzzwahracing.com/p/results-highlighter.html
// @updateURL     https://raw.githubusercontent.com/fuzzwah/iRacing-RingLaps-Highlighter/master/iRacing-RingLaps-Highlighter.user.js
// @grant         GM_addStyle
// ==/UserScript==

window.addEventListener('load', function() {
    var anchors = document.getElementsByTagName('a');
    var i = 0
    for(i = 0; i < anchors.length; i++ ) {
        if(anchors[i].getAttribute('title') == 'Manage') {
            var name = anchors[i].text.slice(6, -1);
            i = anchors.length;
        }
    }
    var trs = document.getElementsByTagName('tr');
    for (i = 0; i < trs.length; i++) {
        var elmRow = trs[i];
        if(elmRow.innerHTML.indexOf(name) !== -1) {
            elmRow.style.background = "#fff3b3";
            i = trs.length;
        }
    }
}, false);
