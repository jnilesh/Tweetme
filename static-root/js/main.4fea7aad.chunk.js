(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),l=(a(14),a(7)),s=a.n(l),i=(a(15),a(2)),u=a(1);function m(e,t,a,n){var c;n&&(c=JSON.stringify(n));var r=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);r.responseType="json";var l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,o),r.setRequestHeader("Content-Type","application/json"),l&&(r.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",l)),r.onload=function(){a(r.response,r.status)},r.onerror=function(e){console.log(e),a({message:"The request was an error"},400)},r.send(c)}function d(e){var t=c.a.createRef(),a=e.didtweeet,n=function(e,t){201===t?a(e):(console.log(e),alert("An error occured please try again"))};return c.a.createElement("div",{className:"props.className"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;m("POST","/tweets/create/",n,{content:a}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}var f=a(8);function p(e){var t=e.tweet,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,o=e.className?e.className:"btn btn-primary btn-sm",l=a.display?a.display:"Action",s=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},i="like"===a.type?"".concat(r," ").concat(l):l;return c.a.createElement("button",{className:o,onClick:function(e){e.preventDefault(),function(e,t,a){m("POST","/tweets/action/",a,{id:e,action:t})}(t.id,a.type,s)}},i)}function w(e){var t=e.tweet;return t.parent?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},c.a.createElement("p",{className:"mb-0 text-muted small"},"Retweet"),c.a.createElement(b,{hideActions:!0,className:" ",tweet:t.parent}))):null}function b(e){var t=e.tweet,a=e.didRetweet,r=e.hideActions,o=Object(n.useState)(e.tweet?e.tweet:null),l=Object(u.a)(o,2),s=l[0],i=l[1],m=e.className?e.className:"col-10 mx-auto col-md-6",d=window.location.pathname.match(Object(f.a)(/([0-9]+)/,{tweetid:1})),b=d?d.groups.tweetid:-1,E="".concat(t.id)==="".concat(b),v=function(e,t){200===t?i(e):201===t&&a&&a(e)};return c.a.createElement("div",{className:m},c.a.createElement("div",null,c.a.createElement("p",null,t.id," - ",t.content),c.a.createElement(w,{tweet:t})),c.a.createElement("div",{className:"btn btn-group"},s&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{tweet:s,didPerformAction:v,action:{type:"like",display:"Likes"}}),c.a.createElement(p,{tweet:s,didPerformAction:v,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(p,{tweet:s,didPerformAction:v,action:{type:"retweet",display:"Retweet"}})),!0===E?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))}function E(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),d=s[0],f=s[1],p=Object(n.useState)(!1),w=Object(u.a)(p,2),E=w[0],v=w[1];Object(n.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==d.length&&f(t)}),[e.newTweets,d,r]),Object(n.useEffect)((function(){if(!1===E){!function(e,t){var a="/tweets/";e&&(a="/tweets/?useername=".concat(e)),m("GET",a,t)}(e.username,(function(e,t){200===t?(o(e),v(!0)):alert("There was an error")}))}}),[r,E,v,e.username]);var h=function(e){var t=Object(i.a)(r);t.unshift(e),o(t);var a=Object(i.a)(d);a.unshift(d),f(a)};return d.map((function(e,t){return c.a.createElement(b,{tweet:e,didRetweet:h,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function v(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],l="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===l&&c.a.createElement(d,{didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),o(t)},className:"col-12 mb-3"}),c.a.createElement(E,Object.assign({newTweets:r},e)))}function h(e){var t=e.tweetId,a=Object(n.useState)(!1),r=Object(u.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(null),i=Object(u.a)(s,2),d=i[0],f=i[1],p=function(e,t){200===t?f(e):alert("There was an error finding your tweet.")};return Object(n.useEffect)((function(){!1===o&&(!function(e,t){m("GET","/tweets/".concat(e,"/"),t)}(t,p),l(!0))}),[t,o,l]),null===d?null:c.a.createElement(b,{tweet:d,className:e.className})}var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(v,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=document.getElementById("root");j&&o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),j);var y=document.getElementById("tweetme"),N=c.a.createElement;y&&o.a.render(N(v,y.dataset),y),document.querySelectorAll(".tweetme-detail").forEach((function(e){o.a.render(N(h,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4fea7aad.chunk.js.map