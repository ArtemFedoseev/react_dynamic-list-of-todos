(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n,r=s(10),c=s.n(r),a=s(6),o=s.n(a),i=s(7),l=s(2),d=s(3),u=s(5),h=s(4),j=s(1),p=s.n(j),b=(s(17),s(18),s(11)),f=(s(19),s(9)),m=s.n(f),v=s(0);!function(e){e.all="all",e.active="active",e.completed="completed"}(n||(n={}));var O=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={todos:e.props.todos,titleQuery:"",filter:n.all},e.setFilter=function(t){var s=t.target.value,r=n.all;switch(s){case"active":r=n.active;break;case"completed":r=n.completed}e.setState({filter:r})},e.setSearchQuery=function(t){e.setState({titleQuery:t.target.value})},e.getFilteredTodos=function(){var t=e.state,s=t.titleQuery,r=t.filter,c=t.todos.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return r===n.all?c:c.filter((function(e){return r===n.active?!e.completed:e.completed}))},e.randomizeTodos=function(){for(var t=Object(b.a)(e.state.todos),s=[],n=0;n<e.state.todos.length;n+=1){var r=Math.floor(Math.random()*t.length);s.push(t.splice(r,1)[0])}e.setState({todos:s})},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=this.props,s=t.selectedUser,r=t.onUserSelect,c=this.state,a=c.titleQuery,o=c.filter,i=this.getFilteredTodos();return Object(v.jsxs)("div",{className:"TodoList",children:[Object(v.jsx)("h2",{children:"Todos:"}),Object(v.jsxs)("label",{htmlFor:"title-input",children:["Title:"," ",Object(v.jsx)("input",{id:"title-input",type:"text",value:a,onChange:this.setSearchQuery})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("label",{htmlFor:"select-flter",children:["Show:"," ",Object(v.jsxs)("select",{id:"select-flter",value:o,onChange:this.setFilter,children:[Object(v.jsx)("option",{value:n.all,children:"All"}),Object(v.jsx)("option",{value:n.active,children:"Active"}),Object(v.jsx)("option",{value:n.completed,children:"Completed"})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"button",onClick:function(){e.randomizeTodos()},children:"Randomize"}),Object(v.jsx)("div",{className:"TodoList__list-container",children:Object(v.jsx)("ul",{className:"TodoList__list",children:i.map((function(e){return Object(v.jsxs)("li",{className:m()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(v.jsxs)("label",{htmlFor:"todo-".concat(e.id),children:[Object(v.jsx)("input",{id:"todo-".concat(e.id),type:"checkbox",onClick:function(e){e.preventDefault()},checked:e.completed,readOnly:!0}),Object(v.jsx)("p",{children:e.title})]}),Object(v.jsxs)("button",{className:m()("TodoList__user-button","button",{"TodoList__user-button--selected":s===e.userId}),type:"button",onClick:function(){r(e.userId)},children:["User\xa0",e.userId]})]},e.id)}))})})]})}}]),s}(p.a.Component),x=(s(21),function(e){var t="https://mate.academy/students-api/users/".concat(e);return fetch(t).then((function(e){return e.json()}))}),_=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={userInfo:{},isLoaded:!1},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoaded:!1}),e.next=3,x(this.props.userId);case 3:t=e.sent,this.setState({userInfo:t,isLoaded:!0});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.userInfo,s=t.id,n=t.name,r=t.email,c=t.phone;return Object(v.jsx)("div",{className:"CurrentUser",children:this.state.isLoaded?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{className:"CurrentUser__title",children:Object(v.jsxs)("span",{children:["Selected user:"," ",s]})}),Object(v.jsx)("h3",{className:"CurrentUser__name",children:n}),Object(v.jsx)("p",{className:"CurrentUser__email",children:r}),Object(v.jsx)("p",{className:"CurrentUser__phone",children:c}),Object(v.jsx)("button",{type:"button",className:"CurrentUser__clear button",onClick:function(){e.props.resetUser()},children:"Clear"})]}):Object(v.jsx)("h2",{className:"CurrentUser__title",children:Object(v.jsx)("span",{children:"Loading user data"})})})}}]),s}(p.a.Component),y=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,isLoading:!0},e.setUser=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.setState({selectedUserId:t})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()}));case 2:t=e.sent,this.setState({todos:t,isLoading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,s=e.todos,n=e.isLoading;return Object(v.jsxs)("div",{className:"App",children:[n?"Loading todos":Object(v.jsx)("div",{className:"App__sidebar",children:Object(v.jsx)(O,{todos:s,selectedUser:t,onUserSelect:this.setUser})}),Object(v.jsx)("div",{className:"App__content",children:Object(v.jsx)("div",{className:"App__content-container",children:!!t&&Object(v.jsx)(_,{userId:t,resetUser:this.setUser})})})]})}}]),s}(p.a.Component),U=y;c.a.render(Object(v.jsx)(U,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.faa6b5cf.chunk.js.map