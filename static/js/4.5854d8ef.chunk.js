(this.webpackJsonpreact_01=this.webpackJsonpreact_01||[]).push([[4],{289:function(e,a,t){e.exports={dialogs:"Messenges_dialogs__3ERIe",dialogs_items:"Messenges_dialogs_items__1_HE4",messages:"Messenges_messages__15rRf"}},291:function(e,a,t){"use strict";t.r(a);var s=t(123),n=t(0),m=t.n(n),r=t(289),c=t.n(r),i=t(20);var l=function(e){var a="/dialogs/"+e.id_num;return m.a.createElement("div",null,m.a.createElement(i.b,{to:a},e.name))};var u=function(e){return m.a.createElement("div",null,e.message)},o=t(125),g=t(126),d=t(32),_=t(47),b=Object(d.a)(30);var v=Object(g.a)({form:"addMessageForm"})((function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit},m.a.createElement("div",null,m.a.createElement(o.a,{name:"message",component:_.b,type:"text",placeholder:"enter message",validate:[d.b,b]})),m.a.createElement("div",null,m.a.createElement("button",{type:"submit"},"Add message")))}));var f=function(e){var a=e.messagesData.dialogsData.map((function(e){return m.a.createElement(l,{name:e.name,id_num:e.id,key:e.id})})),t=e.messagesData.messageData.map((function(e){return m.a.createElement(u,{id_num:e.id,message:e.message,key:e.id})}));return m.a.createElement("div",{className:c.a.dialogs},m.a.createElement("div",{className:c.a.dialogs_items},a),m.a.createElement("div",{className:c.a.messages},t,m.a.createElement(v,{onSubmit:e.createNewMessage})))},E=t(9),p=t(92),M=t(7);a.default=Object(M.d)(Object(E.b)((function(e){return{messagesData:e.messagesData}}),(function(e){return{createNewMessage:function(a){e(Object(s.a)(a.message))},onMessageChange:function(a){var t=a.target.value;e(Object(s.c)(t))}}})),p.a)(f)}}]);
//# sourceMappingURL=4.5854d8ef.chunk.js.map