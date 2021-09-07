let isKotsOpen = 'true';
let today = new Date();
let hourInAthens = today.getUTCHours() + 3;
let dayOfWeek = today.getDay();

if (dayOfWeek == 0) {
    if (hourInAthens < 11 || hourInAthens >= 16) {
        isKotsOpen = 'false';
    }
}
else if (dayOfWeek == 6) {
    // if it's before 10 or after 6, we're closed
    if (hourInAthens < 10 || hourInAthens >= 18) {
        isKotsOpen = 'false';
    }
} else {
    // if it's before 10 or after 8, we're closed
    if (hourInAthens < 10 || hourInAthens >= 20) {
        isKotsOpen = 'false';
    }

}

let code_plan = 'd217df3f-3dfe-4d5a-b91d-f8eb5284b708';  //isKotsOpen='true'
//code_plan = 'b2f5efc7-a2a5-4055-9965-0bb88a00c47a'; //isKotsOpen='false'

if (isKotsOpen == 'false') {
    code_plan = 'b2f5efc7-a2a5-4055-9965-0bb88a00c47a';
}

var btnDivId = "comm100-button-" + code_plan;
var newDiv = document.createElement('div');
newDiv.id = btnDivId;
document.body.appendChild(newDiv);

var Comm100API = Comm100API || {}; (function (t) { function e(e) { var a = document.createElement("script"), c = document.getElementsByTagName("script")[0]; a.type = "text/javascript", a.async = !0, a.src = e + t.site_id, c.parentNode.insertBefore(a, c) } t.chat_buttons = t.chat_buttons || [], t.chat_buttons.push({ code_plan: code_plan, div_id: btnDivId }), t.site_id = 7000003, t.main_code_plan = code_plan, e("https://vue.comm100.com/livechat.ashx?siteId="), setTimeout(function () { t.loaded || e("https://standby.comm100vue.com/livechat.ashx?siteId=") }, 5e3) })(Comm100API || {})

//window.isKotsOpen = isKotsOpen;