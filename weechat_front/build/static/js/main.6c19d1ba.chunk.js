(this.webpackJsonpweechat_front=this.webpackJsonpweechat_front||[]).push([[0],{112:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(13),r=n.n(a),s=(n(57),n(58),n(5)),l=n.n(s),o=n(11),i=n(27),u=n(8),d=n(2),b=function(e){var t=e.selectChatRoom,n=e.stylings,c=e.chatRoom,a=e.activeChatRoom;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{style:c.Id===a?(n.backgroundColor="#ECECEC",n):n,onClick:function(){t(c.Id)},children:Object(d.jsx)("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"row",justifyContent:"center",alignItems:"center",cursor:"pointer"},children:c.name})})})},m=n(46),h=(n(61),n(62),n(20)),p=n.n(h),j=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://".concat("dev-nxvznaad.us.auth0.com","/api/v2/users"),params:{search_engine:"v3"},headers:{authorization:"Bearer ".concat("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVYcFk1bFlZa1NZME1NYWdQNE9TbyJ9.eyJpc3MiOiJodHRwczovL2Rldi1ueHZ6bmFhZC51cy5hdXRoMC5jb20vIiwic3ViIjoiVTN2Mzk4R1dXcUp2VHJCRGIyQXlVOXV4RGw2VjlzWllAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LW54dnpuYWFkLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjM4OTExNzg4LCJleHAiOjE2Mzk3NzU3ODgsImF6cCI6IlUzdjM5OEdXV3FKdlRyQkRiMkF5VTl1eERsNlY5c1pZIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.kLW9jYMeBGHLI_9W7ZYSQF5Wg9O6ej77dSz3JJ2NBilwW5RR6mpvP-qMylgqos7VMnYrdlHZ_V7ggmzqCpB1JKQyVAuLBLRwQUEOy1GMGYJlroKeizs1ATya_N4m8rlft7iOPOucHyFzsLkYnTGTrJoX3pHubQnGPo9I1K5UWKRPc8-0QOa21Fkz4vq_h0SpL7G57Bop4f0fPlNXDwBiU-P9OsNZKjy9WPuFAK_AkVVgiTzT-1Fldas6OiXSMc9ZZRZF4-0W4TapUqqCK7hcUolCBmd9jZpF2IZ4RgYkf2CBxhfNrCHTsAvSGrjQppoc9HuKljNqO7F_MyWnp-IbzQ")}},e.abrupt("return",p.a.request(t).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=n(52),f=function(e){var t=e.options,n=e.onChange;return Object(d.jsx)("div",{children:Object(d.jsx)(Z.a,{isMulti:!0,options:t,placeholder:"select your friends",onChange:n})})},v=n(15),O=n.n(v),W=n(17);var y=function(){var e=Object(W.b)(),t=e.user,n=e.isAuthenticated,a=Object(c.useState)({email:"",user_id:"",nickname:""}),r=Object(u.a)(a,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){n&&function(){var e={email:t.email,user_id:t.sub,nickname:t.nickname};l(e)}()}),[t,n]),s},V=n(45),G=["http://localhost:30001","http://localhost:30002","http://localhost:30003","http://localhost:30004","http://localhost:30005"],g=[61613,61620,61621,61622,61623],x=function(){var e=new WebSocket("ws://localhost:3000");return e.onopen=function(e){console.log("socket is connected")},e},X=G[0],R=g[0],Y=x(),F=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Y.send(JSON.stringify({type:"change_mqport",body:R})),console.log(R)}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(l.a.mark((function e(t,n){var c,a,r,s,o,i,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post(X+t,n);case 3:if(200!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",c);case 8:throw new Error(c.status);case 9:e.next=47;break;case 11:e.prev=11,e.t0=e.catch(0),a=Object(V.a)(G.entries()),e.prev=14,a.s();case 16:if((r=a.n()).done){e.next=39;break}return s=Object(u.a)(r.value,2),o=s[0],i=s[1],X=i,R=g[o],console.log(R),F(g[o]),e.prev=22,e.next=25,p.a.post(i+t,n);case 25:if(200!==(d=e.sent).status){e.next=30;break}return e.abrupt("return",d);case 30:throw new Error(d.status);case 31:e.next=37;break;case 33:return e.prev=33,e.t1=e.catch(22),console.log(e.t1),e.abrupt("continue",37);case 37:e.next=16;break;case 39:e.next=44;break;case 41:e.prev=41,e.t2=e.catch(14),a.e(e.t2);case 44:return e.prev=44,a.f(),e.finish(44);case 47:return e.abrupt("return","all_servers_are_down");case 48:case"end":return e.stop()}}),e,null,[[0,11],[14,41,44,47],[22,33]])})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("/dbms/relationship/add",{groupName:t,userList:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("/dbms/relationship/list",{userId:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("/dbms/message/list",{chatRoomId:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("/dbms/message/add",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.open,n=e.onClose,a=e.refreshChatRoom,r=y(),s=Object(c.useState)(""),i=Object(u.a)(s,2),b=i[0],m=i[1],h=Object(c.useState)([]),p=Object(u.a)(h,2),Z=p[0],v=p[1],W=Object(c.useState)(""),V=Object(u.a)(W,2),G=V[0],g=V[1],x=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:for(c in t=e.sent,n=[],t)a={label:t[c].email,value:t[c]},n.push(a);m(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){""===b&&x()}),[]);var X=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(" "!==G&&0!==Z.length){e.next=3;break}return O.a.fire({icon:"error",title:"Oops...",text:"Some fields are empty"}),e.abrupt("return");case 3:for(c in(t=[]).push(r.email),Z)Z[c].label!==r.email&&t.push(Z[c].label);return e.next=8,N(G,t);case 8:200!==e.sent.status&&O.a.fire({icon:"error",title:"Oops...",text:"something went wrong"}),a(),n();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"create-chat-container",children:Object(d.jsxs)("div",{className:"overlay-container",children:[Object(d.jsx)("textarea",{className:"chatRoomName",placeholder:"Create chatroom name",value:G,onChange:function(e){g(e.target.value)}}),Object(d.jsx)("div",{className:"selection",children:Object(d.jsx)(f,{options:b,onChange:function(e){v(e)}})}),Object(d.jsxs)("div",{className:"btn-container",children:[Object(d.jsx)("div",{className:"btn-close",children:Object(d.jsx)("button",{onClick:n,style:{width:"10vh",height:"5vh"},children:"Close"})}),Object(d.jsx)("div",{className:"btn-create",children:Object(d.jsx)("button",{style:{width:"10vh",height:"5vh"},onClick:X,children:"Create"})})]})]})})}):null},z=function(e){var t,n=e.listOfChatRoom,a=e.selectChatRoom,r=e.activeChatRoom,s=e.refreshChatRoom,l=Object(c.useState)(!1),o=Object(u.a)(l,2),i=o[0],h=o[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"ChatRoomSideBar",children:[Object(d.jsx)(m.a,{size:60,onClick:function(){return h(!0)}}),Object(d.jsx)(I,{open:i,onClose:function(){return h(!1)},refreshChatRoom:s}),(t=n,0!==n.length?t.map((function(e,t){return Object(d.jsx)(b,{stylings:{height:"60px",width:"70%",backgroundColor:"#CBC7C8",margin:"10px",boarder:"1px black",borderRadius:"8px",boxShadow:"1px 1.5px 3px rgba(0,0,0.18)"},chatRoom:e,selectChatRoom:a,activeChatRoom:r},t)})):Object(d.jsx)("div",{children:"Loading..."}))]})})},C=n(48),M=(n(112),n(47)),H=n.n(M),U=function(e){var t=e.user,n=e.message,c=e.time,a=e.isCurrentUser;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:a?"user-msgCard-container":"not-User-msgCard-container",children:Object(d.jsxs)("div",{className:a?"user-message-container":"not-user-message-container",children:[Object(d.jsx)("div",{className:"user",children:t}),Object(d.jsxs)("div",{className:a?"user-messages":"not-user-messages",children:[n,Object(d.jsx)("div",{className:"time",children:H()(c).format("MM-DD hh:mm:ss a")})]})]})})})},T=(n(114),function(e){var t=e.activeChatRoom,n=e.listOfMessages,a=y(),r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],b=s[1],m=Object(c.useRef)(null);Object(c.useEffect)((function(){!function(){var e;null===(e=m.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[n]);var h=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==i){e.next=2;break}return e.abrupt("return");case 2:return n={groupId:t,senderId:a.email,message:i},e.next=5,B(n);case 5:200===e.sent.status?b(""):O.a.fire({icon:"error",title:"Oops...",text:"all servers are down"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"chatRoom",children:[Object(d.jsxs)("div",{className:"messageDisplay",children:[0!==n.length?n.map((function(e,t){var n=!1;return e.UserID===a.email&&(n=!0),Object(d.jsx)(U,{user:e.UserID,message:e.message,time:e.timestamp,isCurrentUser:n},t)})):Object(d.jsx)("div",{children:"Loading.."}),Object(d.jsx)("div",{ref:m})]}),Object(d.jsxs)("div",{className:"messageInput",children:[Object(d.jsx)("textarea",{name:"MessageInput",className:"messsage_inputbox",value:i,onChange:function(e){b(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&h()}}),Object(d.jsx)(C.a,{className:"btn-send pointing",onClick:h,style:""!==i?{color:"green"}:""})]})]})})}),S=(n(115),function(){var e=x(),t=y(),n=Object(c.useState)([]),a=Object(u.a)(n,2),r=a[0],s=a[1],b=Object(c.useState)(""),m=Object(u.a)(b,2),h=m[0],p=m[1],j=Object(c.useState)([]),Z=Object(u.a)(j,2),f=Z[0],v=Z[1];e.onmessage=function(e){var t=JSON.parse(e.data);v((function(e){return[].concat(Object(i.a)(e),[t])}))};var W=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t.email);case 3:n=e.sent,console.log(n),"all_servers_are_down"!==n?s(n.data.datas):V("Most of the servers are down"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.email);case 2:n=e.sent,console.log(n),"all_servers_are_down"!==n?s(n.data.datas):V("Most of the servers are down");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(""!==t.email)try{e()}catch(n){console.log(n)}}),[t]);var V=function(e){O.a.fire({icon:"error",title:"Oops...",text:e})},G=function(){var t=Object(o.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(n),e.send(JSON.stringify({type:"newtopic",body:n})),v([]),t.prev=3,t.next=6,J(n);case 6:c=t.sent,v(c.data.datas),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"chatPage_container",children:[Object(d.jsx)(z,{className:"sideBar",listOfChatRoom:r,selectChatRoom:G,activeChatRoom:h,refreshChatRoom:W}),Object(d.jsx)(T,{className:"chatroom",activeChatRoom:h,ws:e,listOfMessages:f})]})})}),Q=n(123),L=n(122),_=(n(116),function(){var e=Object(W.b)(),t=e.user,n=e.isAuthenticated,c=e.isLoading,a=e.loginWithRedirect,r=e.logout,s=function(){return n?Object(d.jsx)("button",{style:{width:"15vh",height:"3vh",marginTop:"0.2vh",marginBottom:"0.5vh"},onClick:function(){return r({returnTo:window.location.origin})},children:"Log Out"}):Object(d.jsx)("button",{style:{width:"15vh",height:"3vh",marginTop:"0.2vh",marginBottom:"0.5vh"},onClick:function(){return a()},children:"Log In/Register"})},l=function(){return c?Object(d.jsx)("div",{children:"Loading ..."}):n&&Object(d.jsx)("div",{children:t.name})};return Object(d.jsx)(Q.a,{className:"navbar",bg:"light",sticky:"top",children:Object(d.jsxs)(L.a,{className:"navbarContainer",children:[Object(d.jsx)(Q.a.Brand,{className:"brand",children:"WeeChat"}),Object(d.jsxs)("div",{className:"userSection",children:[Object(d.jsx)(l,{}),Object(d.jsx)(s,{})]})]})})});var D=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(_,{}),Object(d.jsx)(S,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};r.a.render(Object(d.jsx)(W.a,{domain:"dev-nxvznaad.us.auth0.com",clientId:"LRW7PnF24xeTFZhpP8OKGE8uBwZTo3Xg",redirectUri:window.location.origin,children:Object(d.jsx)(D,{})}),document.getElementById("root")),E()},57:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.6c19d1ba.chunk.js.map