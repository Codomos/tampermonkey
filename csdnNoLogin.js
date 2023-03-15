// ==UserScript==
// @name         CSDN Optimize
// @version      0.8
//author       albert
// @description  Optimize CSDN for non-login users
// @license      MIT
// @icon         https://www.csdn.net/favicon.ico
// @match        *://*.csdn.net/*

//@grant GM_addStyle

// @grant        GM_xmlhttpRequest

// @grant        GM_registerMenuCommand
// @grant        GM_openInTab

// ==/UserScript==





(function () {
    'use strict';
    //change one attribute of ele user-select
    $("pre,code").css("user-select", "auto");

    //using inner-function to change the attribute of ele user-select
    GM_addStyle(`pre,code{user-select:auto !important}.signin{display: none !important;}`)


    //


})();


GM_xmlhttpRequest({
    headers: {
        'content-type': 'application/json',
    },
    responseType: 'json',
    url: 'https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed',
    data: '{"id_type":2,"sort_type":200,"cate_id":"6809637767543259144","cursor":"0","limit":20}',
    method: 'POST',
    onreadystatechange: (res) => {
        if (res.readyState === 4) {
            console.log(res.response)
        }
    },
})


// 右键搜索
GM_registerMenuCommand("GitHub 搜索", function () {
    const str = document.getSelection().toString();
    if (str) {
        GM_openInTab(`https://github.com/search?q=${str}`, { active: true });
    }
});

GM_registerMenuCommand("NPM 搜索", function () {
    const str = document.getSelection().toString();
    if (str) {
        GM_openInTab(`https://www.npmjs.com/search?q=${str}`, { active: true });
    }
});


