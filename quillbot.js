// ==UserScript==
// @name         Quillbot by Binod Rijal
// @namespace    quillbot.taozhiyu.gitee.io
// @version      0.3
// @description  Unlocks Quillbot Premium.
// @author       Binod Rjal
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://greasyfork.org/scripts/455943-ajaxhooker/code/ajaxHooker.js?version=1124435
// @run-at       document-start
// @grant        none
// @license      none
// @downloadURL  https://update.greasyfork.org/scripts/465276/Quillbot%20Premium%20Unlocker.user.js
// @updateURL    https://update.greasyfork.org/scripts/465276/Quillbot%20Premium%20Unlocker.meta.js
// ==/UserScript==
/* global ajaxHooker */
(function() {
    'use strict';

    // Function to unlock premium features
    const unlockPremium = (request) => {
        if (request.url.endsWith('get-account-details')) {
            request.response = (res) => {
                const json = JSON.parse(res.responseText);
                const accountData = "data" in json ? json.data : json;
                accountData.profile.accepted_premium_modes_tnc = true;
                accountData.profile.premium = true;
                res.responseText = JSON.stringify("data" in json ? { ...json, data: accountData } : accountData);
            };
        }
    };

    // Hook the request to unlock premium
    ajaxHooker.hook(unlockPremium);

    // Function to create and append the button
    const createRedirectButton = () => {
        const button = document.createElement('button');
        Object.assign(button.style, {
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            zIndex: '1000',
            backgroundColor: '#000',
            color: '#FFF',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '5px',
            fontSize: '12px'
        });
        button.textContent = 'Created by Binod Rijal';
        button.addEventListener('click', () => {
            window.location.href = 'http://binod.rf.gd';
        });
        document.body.appendChild(button);
    };

    // Wait until the DOM is fully loaded before creating the button
    window.addEventListener('load', createRedirectButton);
})();
