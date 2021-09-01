(this["webpackJsonpspace-travelers-hub"]=this["webpackJsonpspace-travelers-hub"]||[]).push([[0],{17:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(12),i=c.n(r),a=c(4),o=c(9),j=c(2),l=(c(17),c.p+"static/media/planet.3f6fb274.png"),d=c(1),b=function(){return Object(d.jsxs)("div",{className:"Nav-Container",children:[Object(d.jsxs)("div",{className:"Header-Logo",children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("img",{src:l,alt:"Logo"})}),Object(d.jsx)("h1",{className:"Header-Title",children:"Space Travelers Hub"})]}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"Nav-Items",children:[Object(d.jsx)("li",{className:"Nav-Item",children:Object(d.jsx)(o.b,{to:"/rockets",children:"Rockets"})}),Object(d.jsx)("li",{className:"Nav-Item",children:Object(d.jsx)(o.b,{to:"/missions",children:"Missions"})}),Object(d.jsx)("li",{className:"divider Nav-Item",children:Object(d.jsx)("p",{children:"|"})}),Object(d.jsx)("li",{className:"Nav-Item",children:Object(d.jsx)(o.b,{to:"/profile",children:"My Profile"})})]})})]})},u=function(e){var t=e.mission,c=e.joinMission;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h3",{children:t.mission_name})}),Object(d.jsx)("td",{children:t.description}),t.reserved&&Object(d.jsx)("td",{children:Object(d.jsx)("span",{className:"active-member",children:"Active Member"})}),!t.reserved&&Object(d.jsx)("td",{children:Object(d.jsx)("span",{className:"not-member",children:"NOT A MEMBER"})}),t.reserved&&Object(d.jsx)("td",{children:Object(d.jsx)("button",{value:t.mission_id,type:"button",className:"leave-mission",onClick:c,children:"Leave Mission"})}),!t.reserved&&Object(d.jsx)("td",{children:Object(d.jsx)("button",{value:t.mission_id,type:"button",className:"join-mission",onClick:c,children:"Join Mission"})})]})},O=c(3),h=c(13),m=c.n(h),x="missions/GET_MISSIONS",p="missions/CHANGE_STATUS",v=[],f=function(){return function(e){m.a.get("https://api.spacexdata.com/v3/missions").then((function(t){var c=t.data.map((function(e){return{mission_id:e.mission_id,mission_name:e.mission_name,description:e.description}}));e({type:x,payload:c})}))}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;case p:return e.map((function(e){return e.mission_id===t.payload?Object(O.a)(Object(O.a)({},e),{},{reserved:!e.reserved}):e}));default:return e}},N=function(){var e=Object(a.c)((function(e){return e.missionsReducer})),t=Object(a.b)();Object(s.useEffect)((function(){e.length||t(f())}),[]);var c=function(e){var c;t((c=e.target.value,{type:p,payload:c}))};return Object(d.jsx)("div",{className:"table-wrapper",children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Mission"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Status"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:e.map((function(e){return Object(d.jsx)(u,{mission:e,joinMission:c},e.mission_id)}))})]})})},R="GET_ROCKET_REQUEST",y="GET_ROCKET_SUCCESS",g="GET_ROCKET_FAILURE",E="RESERVE_ROCKET",_="CANCEL_ROCKET",C=function(){return{type:R}},T=function(){return function(e){e(C),m.a.get("https://api.spacexdata.com/v3/rockets").then((function(t){var c=t.data.map((function(e){return{id:e.id,rocketName:e.rocket_name,description:e.description,flickrImages:e.flickr_images[0]}}));e(function(e){return{type:y,payload:e}}(c))})).catch((function(t){var c=t.message;e(function(e){return{type:g,payload:e}}(c))}))}},M={loading:!1,rockets:[],error:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case y:return Object(O.a)(Object(O.a)({},e),{},{loading:!0,rockets:t.payload,error:""});case g:return{loading:!1,rockets:[],error:t.payload};case E:return Object(O.a)(Object(O.a)({},e),{},{rockets:e.rockets.map((function(e){return e.id!==t.payload.id?e:Object(O.a)(Object(O.a)({},e),{},{reserved:!0})}))});case _:return Object(O.a)(Object(O.a)({},e),{},{rockets:e.rockets.map((function(e){return e.id!==t.payload.id?e:Object(O.a)(Object(O.a)({},e),{},{reserved:!1})}))});default:return e}},S=function(e){var t=e.reserved,c=e.reserveRocket,s=e.cancelRocket;return t?Object(d.jsx)("button",{role:"textbox",className:"Rocket-Button-Cancel",type:"button",onClick:s,children:"Cancel Reservations"}):Object(d.jsx)("button",{role:"textbox",className:"Rocket-Button",type:"button",onClick:c,children:"Reserve Rocket"})},w=function(e){return e.reserved?Object(d.jsx)("span",{children:Object(d.jsx)("button",{role:"textbox",type:"button",className:"Rocket-Reserve",children:"Reserved"})}):Object(d.jsx)("span",{className:"Rocket-Cancel"})},A=function(e){var t=e.rocket,c=t.id,s=t.rocketName,n=t.description,r=t.flickrImages,i=t.reserved,o=Object(a.b)();return Object(d.jsxs)("div",{className:"Rocket-Container",children:[Object(d.jsx)("img",{className:"Rocket-Img",src:r,alt:s}),Object(d.jsxs)("div",{className:"Rocket-Info",children:[Object(d.jsx)("h3",{className:"Rocket-Title",children:s}),Object(d.jsxs)("p",{className:"Rocket-Text",children:[Object(d.jsx)(w,{reserved:i})," ",n]}),Object(d.jsx)(S,{reserved:i,reserveRocket:function(){o({type:E,payload:{id:c}})},cancelRocket:function(){o({type:_,payload:{id:c}})}})]})]})},G=function(){var e=Object(a.c)((function(e){return e.rockets.rockets})),t=Object(a.c)((function(e){return e.rockets.loading})),c=Object(a.b)();Object(s.useEffect)((function(){!1===t&&c(T())}),[]);var n=e.map((function(e){return Object(d.jsx)(A,{rocket:e},e.id)}));return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"Rockets-Container",children:n})})},K=function(e){var t=e.mission;return Object(d.jsx)("li",{children:t.mission_name})},L=function(e){var t=e.rocket;return Object(d.jsx)("li",{children:t.rocketName})},B=function(){var e=Object(a.c)((function(e){return e.missionsReducer})).filter((function(e){return e.reserved})),t=Object(a.c)((function(e){return e.rockets.rockets})).filter((function(e){return e.reserved}));return Object(d.jsxs)("div",{className:"profile-wrapper",children:[Object(d.jsxs)("div",{className:"my-missions",children:[Object(d.jsx)("h2",{children:"My Missions"}),0===e.length&&Object(d.jsx)("p",{className:"note",children:"There are no joined missions"}),0!==e.length&&Object(d.jsx)("ul",{children:e.map((function(e){return Object(d.jsx)(K,{mission:e},e.mission_id)}))})]}),Object(d.jsxs)("div",{className:"my-rockets",children:[Object(d.jsx)("h2",{children:"My Rockets"}),0===t.length&&Object(d.jsx)("p",{className:"note",children:"There are no reserved rockets"}),0!==t.length&&Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(L,{rocket:e},e.id)}))})]})]})};var H=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{path:"/missions",children:Object(d.jsx)(N,{})}),Object(d.jsx)(j.b,{path:"/profile",children:Object(d.jsx)(B,{})}),Object(d.jsx)(j.b,{path:"/rockets",children:Object(d.jsx)(G,{})}),Object(d.jsx)(j.a,{from:"/",to:"/rockets"})]})]})},U=c(14),J=c(31),D=c(32),F=c.n(D),P=Object(U.b)({rockets:I,missionsReducer:k}),Q=Object(U.c)(P,Object(U.a)(F.a,J.a));i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(a.a,{store:Q,children:Object(d.jsx)(H,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.eeed1a06.chunk.js.map