!function(){var t,o,e,i,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},s=n.parcelRequire0232;null==s&&((s=function(t){if(t in a)return a[t].exports;if(t in r){var o=r[t];delete r[t];var e={id:t,exports:{}};return a[t]=e,o.call(e.exports,e,e.exports),e.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,o){r[t]=o},n.parcelRequire0232=s),s("g6ZeJ"),s("8e9SS");var l=s("i7mVp"),c=s("4tSb9"),l=s("i7mVp"),f=s("juqrk"),m=s("bNI6E"),c=s("4tSb9"),p=s("dIxxU"),u=function(){"use strict";function t(){(0,f._)(this,t),this.requestParam="",this.options={headers:{accept:"application/json"}}}return(0,m._)(t,[{key:"getRequest",value:function(){var t=this;return(0,l._)(function(){return(0,c.__generator)(this,function(o){switch(o.label){case 0:return[4,(0,p.default).get("".concat("https://books-backend.p.goit.global/books/").concat(t.param),t.options)];case 1:return[2,o.sent()]}})})()}},{key:"param",get:function(){return this.requestParam},set:function(t){this.requestParam=t}}]),t}(),y={};function d(t){var o=document.querySelector(t);o.classList.contains("hidden")&&o.classList.remove("hidden")}function x(t){var o=document.querySelector(t);o.classList.contains("hidden")||o.classList.add("hidden")}t=void 0!==n?n:"undefined"!=typeof window?window:y,o=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var o,e={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},i={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},n=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},a=function(o){return o||(o="head"),null!==t.document[o]||(n('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},r=function(o,e){if(!a("head"))return!1;if(null!==o()&&!t.document.getElementById(e)){var i=t.document.createElement("style");i.id=e,i.innerHTML=o(),t.document.head.appendChild(i)}},s=function(){var t={},o=!1,e=0;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],e++);e<arguments.length;e++)!function(e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o&&"[object Object]"===Object.prototype.toString.call(e[i])?t[i]=s(t[i],e[i]):t[i]=e[i])}(arguments[e]);return t},l=function(o){var e=t.document.createElement("div");return e.innerHTML=o,e.textContent||e.innerText||""},c=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,m=function(n,r,c,m){if(!a("body"))return!1;o||p.Notify.init({});var u=s(!0,o,{});if("object"==typeof c&&!Array.isArray(c)||"object"==typeof m&&!Array.isArray(m)){var y={};"object"==typeof c?y=c:"object"==typeof m&&(y=m),o=s(!0,o,y)}var d=o[n.toLocaleLowerCase("en")];f++,"string"!=typeof r&&(r="Notiflix "+n),o.plainText&&(r=l(r)),!o.plainText&&r.length>o.messageMaxLength&&(o=s(!0,o,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>o.messageMaxLength&&(r=r.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(d.fontAwesomeIconColor=d.background),o.cssAnimation||(o.cssAnimationDuration=0);var x=t.document.getElementById(i.wrapID)||t.document.createElement("div");if(x.id=i.wrapID,x.style.width=o.width,x.style.zIndex=o.zindex,x.style.opacity=o.opacity,"center-center"===o.position?(x.style.left=o.distance,x.style.top=o.distance,x.style.right=o.distance,x.style.bottom=o.distance,x.style.margin="auto",x.classList.add("nx-flex-center-center"),x.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.justifyContent="center",x.style.alignItems="center",x.style.pointerEvents="none"):"center-top"===o.position?(x.style.left=o.distance,x.style.right=o.distance,x.style.top=o.distance,x.style.bottom="auto",x.style.margin="auto"):"center-bottom"===o.position?(x.style.left=o.distance,x.style.right=o.distance,x.style.bottom=o.distance,x.style.top="auto",x.style.margin="auto"):"right-bottom"===o.position?(x.style.right=o.distance,x.style.bottom=o.distance,x.style.top="auto",x.style.left="auto"):"left-top"===o.position?(x.style.left=o.distance,x.style.top=o.distance,x.style.right="auto",x.style.bottom="auto"):"left-bottom"===o.position?(x.style.left=o.distance,x.style.bottom=o.distance,x.style.top="auto",x.style.right="auto"):(x.style.right=o.distance,x.style.top=o.distance,x.style.left="auto",x.style.bottom="auto"),o.backOverlay){var g=t.document.getElementById(i.overlayID)||t.document.createElement("div");g.id=i.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=o.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=d.backOverlayColor||o.backOverlayColor,g.className=o.cssAnimation?"nx-with-animation":"",g.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(i.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(i.wrapID)||t.document.body.appendChild(x);var b=t.document.createElement("div");b.id=o.ID+"-"+f,b.className=o.className+" "+d.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!=typeof c?"nx-with-close-button":"")+" "+("function"==typeof c?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),b.style.fontSize=o.fontSize,b.style.color=d.textColor,b.style.background=d.background,b.style.borderRadius=o.borderRadius,b.style.pointerEvents="all",o.rtl&&(b.setAttribute("dir","rtl"),b.classList.add("nx-rtl-on")),b.style.fontFamily='"'+o.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',o.cssAnimation&&(b.style.animationDuration=o.cssAnimationDuration+"ms");var h="";if(o.closeButton&&"function"!=typeof c&&(h='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+d.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon){if(o.useFontAwesome)b.innerHTML='<i style="color:'+d.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+d.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(o.closeButton?h:"");else{var w="";n===e.Success?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+d.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===e.Failure?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+d.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===e.Warning?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+d.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===e.Info&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+d.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),b.innerHTML=w+'<span class="nx-message nx-with-icon">'+r+"</span>"+(o.closeButton?h:"")}}else b.innerHTML='<span class="nx-message">'+r+"</span>"+(o.closeButton?h:"");if("left-bottom"===o.position||"right-bottom"===o.position){var v=t.document.getElementById(i.wrapID);v.insertBefore(b,v.firstChild)}else t.document.getElementById(i.wrapID).appendChild(b);var k=t.document.getElementById(b.id);if(k){var N,I,C=function(){k.classList.add("nx-remove");var o=t.document.getElementById(i.overlayID);o&&x.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(N)},S=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),x.childElementCount<=0&&null!==x.parentNode){x.parentNode.removeChild(x);var o=t.document.getElementById(i.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(I)};if(o.closeButton&&"function"!=typeof c&&t.document.getElementById(b.id).querySelector("span.nx-close-button").addEventListener("click",function(){C();var t=setTimeout(function(){S(),clearTimeout(t)},o.cssAnimationDuration)}),("function"==typeof c||o.clickToClose)&&k.addEventListener("click",function(){"function"==typeof c&&c(),C();var t=setTimeout(function(){S(),clearTimeout(t)},o.cssAnimationDuration)}),!o.closeButton&&"function"!=typeof c){var z=function(){N=setTimeout(function(){C()},o.timeout),I=setTimeout(function(){S()},o.timeout+o.cssAnimationDuration)};z(),o.pauseOnHover&&(k.addEventListener("mouseenter",function(){k.classList.add("nx-paused"),clearTimeout(N),clearTimeout(I)}),k.addEventListener("mouseleave",function(){k.classList.remove("nx-paused"),z()}))}}if(o.showOnlyTheLastOne&&f>0)for(var L=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+f+"])"),W=0;W<L.length;W++){var A=L[W];null!==A.parentNode&&A.parentNode.removeChild(A)}o=s(!0,o,u)},p={Notify:{init:function(t){o=s(!0,i,t),r(c,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return n("You have to initialize the Notify module before call Merge function."),!1;o=s(!0,o,t)},success:function(t,o,i){m(e.Success,t,o,i)},failure:function(t,o,i){m(e.Failure,t,o,i)},warning:function(t,o,i){m(e.Warning,t,o,i)},info:function(t,o,i){m(e.Info,t,o,i)}}};return"object"==typeof t.Notiflix?s(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],function(){return o(t)}):"object"==typeof y?y=o(t):t.Notiflix=o(t);var g={categoryList:document.querySelector(".js-category-block")},b=new u;function h(){return(h=(0,l._)(function(){var t,o;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,b.getRequest()];case 1:if(!(t=e.sent()).data)return(0,y.Notify).warning("Sorry, an error occurred!"),[2,[]];return 0===t.data.length&&(0,y.Notify).warning("Sorry, the search result is empty!"),[2,t.data];case 2:return o=e.sent(),(0,y.Notify).failure(o.message),[2,[]];case 3:return[2]}})})).apply(this,arguments)}function w(){return(w=(0,l._)(function(){var t,o;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,function(){return h.apply(this,arguments)}()];case 1:return t=e.sent().map(function(t){var o=t.list_name;return'<li class="category-item">\n      <a class="category-link" href="#">'.concat(o,"</a></li>")}).join(""),[2,'<ul class="category-list">\n      <li class="category-item current-category"><a class="category-link" href="#">All categories</a></li>\n      '.concat(t,"\n    </ul>")];case 2:return o=e.sent(),(0,y.Notify).failure(o.message),[2,'<ul class="category-list">\n      <li class="category-item current-category"><a href="#">All categories</a></li>\n    </ul>'];case 3:return[2]}})})).apply(this,arguments)}b.param="category-list",d(".categories .loader"),(function(){return w.apply(this,arguments)})().then(function(t){g.categoryList.innerHTML=t,x(".categories .loader")}).catch(function(t){(0,y.Notify).failure(t.message),g.categoryList.innerHTML='<ul class="category-list"><li class="category-item"><a href="#">All categories</a></li></ul>'}),s("xpKCW");var l=s("i7mVp"),c=s("4tSb9"),v={books:document.querySelector(".js-books")},k=window.innerWidth;e=k>=1440?5:k>=768?3:1;var N=new u;function I(){return(I=(0,l._)(function(){var t,o;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,N.getRequest()];case 1:if(!(t=e.sent()).data)return(0,y.Notify).warning("Sorry, an error occurred!"),[2,[]];return 0===t.data.length&&(0,y.Notify).warning("Sorry, the search result is empty!"),[2,t.data];case 2:return o=e.sent(),(0,y.Notify).failure(o.message),[2,[]];case 3:return[2]}})})).apply(this,arguments)}function C(){return(C=(0,l._)(function(){var t;return(0,c.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,function(){return I.apply(this,arguments)}()];case 1:return[2,o.sent().map(function(t){for(var o=t.list_name,i=t.books,n="",a=0;a<e;a+=1)n+='<li class="book-item">\n          <a class="book-item-link" href="#" data-bookid="'.concat(i[a]._id,'">  \n            <img class="book-item-img" src="').concat(i[a].book_image,'" alt="').concat(i[a].title,'" loading="lazy">\n            <p class="book-title">').concat(i[a].title,'</p>\n            <p class="book-author">').concat(i[a].author,"</p>\n          </a>\n        </li>\n        ");return'<div class="one-category"><h2 class="topbook-title">'.concat(o,'</h2><ul class="topbooks-list">')+n+'</ul><div class="btn-div" ><button type="button" class="btn-category" data-open-category>see more</button></div></div>'}).join("")];case 2:return t=o.sent(),(0,y.Notify).failure(t.message),[2,'<div>\n    <p>Sorry, an error occurred!</p>\n    <img src="#" alt="Empty block">\n    </div>'];case 3:return[2]}})})).apply(this,arguments)}N.param="top-books",d(".books .loader"),(function(){return C.apply(this,arguments)})().then(function(t){v.books.innerHTML=t,x(".books .loader")}).catch(function(t){(0,y.Notify).failure(t.message),v.categoryList.innerHTML='<div>\n    <p>Sorry, an error occurred!</p>\n    <img src="#" alt="Empty block">\n    </div>'});var l=s("i7mVp"),c=s("4tSb9"),S={categoryList:document.querySelector(".js-category-block"),books:document.querySelector(".js-books"),title:document.querySelector(".best-sellers")},z=window.innerWidth;i=z>=1440?5:z>=768?3:1,S.categoryList.addEventListener("click",function(t){return W.apply(this,arguments)});var L=new u;function W(){return(W=(0,l._)(function(t){var o,e,i,n,a;return(0,c.__generator)(this,function(r){switch(r.label){case 0:if(t.preventDefault(),!t.target.classList.contains("category-link"))return[2];r.label=1;case 1:if(r.trys.push([1,6,,7]),o="All categories"===t.target.textContent?"top-books":"category?category=".concat(t.target.textContent),e=t.currentTarget.querySelector(".current-category"),L.param=o,d(".books .loader"),"top-books"!==o)return[3,3];return[4,function(){return E.apply(this,arguments)}()];case 2:return n=r.sent(),[3,5];case 3:return[4,function(){return T.apply(this,arguments)}()];case 4:n=r.sent(),r.label=5;case 5:return i=n,S.books.innerHTML=i,x(".books .loader"),e&&e.classList.remove("current-category"),t.target.classList.add("current-category"),[3,7];case 6:return a=r.sent(),(0,y.Notify).failure(a.message),S.categoryList.innerHTML='<div>\n    <p>Sorry, an error occurred!</p>\n    <img src="#" alt="Empty block">\n    </div>',[3,7];case 7:return[2]}})})).apply(this,arguments)}function A(){return _.apply(this,arguments)}function _(){return(_=(0,l._)(function(){var t,o;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,L.getRequest()];case 1:if(!(t=e.sent()).data)return(0,y.Notify).warning("Sorry, an error occurred!"),[2,[]];return 0===t.data.length&&(0,y.Notify).warning("Sorry, the search result is empty!"),[2,t.data];case 2:return o=e.sent(),(0,y.Notify).failure(o.message),[2,[]];case 3:return[2]}})})).apply(this,arguments)}function T(){return(T=(0,l._)(function(){var t,o,e,i,n;return(0,c.__generator)(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,A()];case 1:return console.log(e=(o=(t=a.sent())[0].list_name.split(" ")).filter(function(t,e){return e<o.length-1}).join(" ")),console.log(i=o[o.length-1]),S.title.innerHTML="".concat(e,' <span class="title-color">').concat(i,"</span>"),[2,'<div class="one-category"><ul class="topbooks-list">'+t.map(function(t){var o=t._id,e=t.book_image,i=t.title,n=t.author;return'<li class="book-item">\n          <a class="book-item-link" href="#" data-bookid="'.concat(o,'">  \n            <img class="book-item-img" src="').concat(e,'" alt="').concat(i,'" loading="lazy">\n            <p class="book-title">').concat(i,'</p>\n            <p class="book-author">').concat(n,"</p>\n          </a>\n        </li>\n        ")}).join("")+"</ul></div>"];case 2:return n=a.sent(),(0,y.Notify).failure(n.message),[2,'<div>\n    <p>Sorry, an error occurred!</p>\n    <img src="#" alt="Empty block">\n    </div>'];case 3:return[2]}})})).apply(this,arguments)}function E(){return(E=(0,l._)(function(){var t,o;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,A()];case 1:return t=e.sent(),S.title.innerHTML='Best Sellers <span class="title-color">Books</span>',[2,t.map(function(t){for(var o=t.list_name,e=t.books,n="",a=0;a<i;a+=1)n+='<li class="book-item">\n          <a class="book-item-link" href="#" data-bookid="'.concat(e[a]._id,'">  \n            <img class="book-item-img" src="').concat(e[a].book_image,'" alt="').concat(e[a].title,'" loading="lazy">\n            <p class="book-title">').concat(e[a].title,'</p>\n            <p class="book-author">').concat(e[a].author,"</p>\n          </a>\n        </li>\n        ");return'<div class="one-category"><h2 class="topbook-title">'.concat(o,'</h2><ul class="topbooks-list">')+n+'</ul><div class="btn-div" ><button type="button" class="btn-category" data-open-category>see more</button></div></div>'}).join("")];case 2:return o=e.sent(),(0,y.Notify).failure(o.message),[2,'<div>\n    <p>Sorry, an error occurred!</p>\n    <img src="#" alt="Empty block">\n    </div>'];case 3:return[2]}})})).apply(this,arguments)}s("iNcuh"),s("aqJoK"),s("i8Q71")}();
//# sourceMappingURL=index.990acfaa.js.map
