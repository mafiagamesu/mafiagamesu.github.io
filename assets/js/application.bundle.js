webpackJsonp([1],{0:function(e,n,o){"use strict";o(1),o(2);var t={filename:o.p+"assets/images/svg-build/buttons.svg"};o(9)(t)},2:function(e,n){},9:function(e,n){var o=function(e){var n=!1,o=void 0;if(e&&e.filename?n=e.filename:null,!n)return!1;var t,s=new XMLHttpRequest;"undefined"!=typeof XDomainRequest&&(s=new XDomainRequest),"undefined"==typeof o&&(o="undefined"!=typeof window.baseUrl?window.baseUrl:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),t=(o+"/"+n).replace(/([^:]\/)\/+/g,"$1"),s.open("GET",t,!0),s.onprogress=function(){},s.onload=function(){if(!s.responseText||"<svg"!==s.responseText.substr(0,4))throw Error("Invalid SVG Response");if(!(s.status<200||s.status>=300)){var e=document.createElement("div");e.innerHTML=s.responseText,document.body.insertBefore(e,document.body.childNodes[0])}},s.send()};e.exports=o}});
//# sourceMappingURL=application.bundle.js.map