// ==UserScript==
// @name TweetdeckQLC
// @namespace TweetdeckQLC
// @version 1.0.1
// @description Automatically put the tweet link on the clipboard when you click "copy link"
// @author Favna
// @icon https://raw.githubusercontent.com/Favna/TweetdeckQLC/master/assets/icon.png
// @homepage https://github.com/Favna/TweetdeckQLC
// @twitterURL https://twitter.com/Favna_
// @contactURL https://www.reddit.com/message/compose/?to=Favna
// @supportURL https://github.com/Favna/TweetdeckQLC/issues
// @downloadURL https://raw.githubusercontent.com/Favna/TweetdeckQLC/master/TweetdeckQLC.user.js
// @updateURL https://raw.githubusercontent.com/Favna/TweetdeckQLC/master/TweetdeckQLC.user.js
// @include https://tweetdeck.twitter.com/*
// @include http://tweetdeck.twitter.com/*
// @domain tweetdeck.twitter.com
// @match https://tweetdeck.twitter.com/*
// @match http://tweetdeck.twitter.com/*
// @grant unsafeWindow
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_getMetadata
// @grant none
// ==/UserScript==

/*
 *   This file is part of TweetdeckQLC
 *   Copyright (C) 2018 Favna
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 of the License
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *   Additional Terms 7.b and 7.c of GPLv3 apply to this file:
 *       * Requiring preservation of specified reasonable legal notices or
 *         author attributions in that material or in the Appropriate Legal
 *         Notices displayed by works containing it.
 *       * Prohibiting misrepresentation of the origin of that material,
 *         or requiring that modified versions of such material be marked in
 *         reasonable ways as different from the original version.
 */

function rafAsync() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve); //faster than set time out
    });
};

function checkElement(selector) {
    if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
    } else {
        return Promise.resolve(true);
    }
};

function addlistener() {
    checkElement("[data-action='reference-to']")
        .then((element) => {
            console.log("wow");
            console.info(element);
            if (element) {
                const twiID = $("[data-action='reference-to']").parent().parent().parent().parent().prev().attr('data-chirp-id'),
                    twiHandle = $("[data-action='reference-to']").parent().parent().parent().parent().parent().parent().parent().prev().prev().children().attr('href');
                GM_setClipboard(`${twiHandle}/status/${twiID}`);

                setTimeout(function () {
                    addlistener();
                }, 2000);
            }
        });
};

addlistener();