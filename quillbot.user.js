// ==UserScript==
// @name         Quillbot by Binod Rijal
// @version      0.4
// @description  Unlocks Quillbot Premium 
// @author       Binod Rijal
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://raw.githubusercontent.com/Binod-Rijal/quillbot/main/Quillbot%20Premium%20Unlocker.js
// @run-at       document-start
// @grant        none
// @license      none
// ==/UserScript==
/* global ajaxHooker*/
(function() {
    'use strict';
    // How's it going filthy code looker
    ajaxHooker.hook(request => {
        if (request.url.endsWith('get-account-details')) {
            request.response = res => {
                const json=JSON.parse(res.responseText);
                const a="data" in json?json.data:json;
                a.profile.accepted_premium_modes_tnc=true;
                a.profile.premium=true;
                res.responseText=JSON.stringify("data" in json?(json.data=a,json):a);
            };
        }
    });
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
