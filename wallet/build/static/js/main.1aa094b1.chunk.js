(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/echangeImg.21700388.jpg"},35:function(e,t,n){e.exports=n(52)},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),i=n.n(c),l=n(24),s=(n(40),n(10)),o=n(8),u=n(9),d=n(12),p=n(11),m=n(2),h=n(17),E=n(3),b=n(14),f=n.n(b),v=n(18);function g(){return(g=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return delete(n=e.sent).USDT,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){return g.apply(this,arguments)},j=function(e){return{type:"SET_EXPENSES",expenses:e}},O=function(e,t){return{type:"EDIT_EXPENSES",eventEdit:e,expense:t}},y=(n(46),n(20)),k=n.n(y),C=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",loading:!1},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.validate=a.validate.bind(Object(E.a)(a)),a.clickHandler=a.clickHandler.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(h.a)({},n,a))}},{key:"checkMail",value:function(e){return/^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/.test(e)}},{key:"checkPassword",value:function(e){if(e.length>=6)return!0}},{key:"validate",value:function(){var e=this.state,t=e.password,n=e.email;return this.checkPassword(t)&&this.checkMail(n)}},{key:"clickHandler",value:function(){var e=this.props,t=e.history,n=e.getEmail,a=this.state.email;this.setState({loading:!0});n(a),this.validate()&&setTimeout((function(){return t.push("/carteira")}),2100)}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.loading;return r.a.createElement("div",{className:"backgroundLogin"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"loginBox teste"},r.a.createElement("div",{className:"inputContainer teste"},a?r.a.createElement("img",{src:k.a,alt:"logo",className:"aniLogo"}):r.a.createElement("img",{src:k.a,alt:"logo",className:"logo"}),r.a.createElement("input",{className:"email",placeholder:"Insert your E-mail",name:"email",type:"email",value:t,"data-testid":"email-input",onChange:this.handleChange}),r.a.createElement("input",{className:"password",placeholder:"Insert Password",name:"password",type:"password",value:n,"data-testid":"password-input",onChange:this.handleChange}),r.a.createElement("button",{className:"btn",type:"button",onClick:this.clickHandler,disabled:!this.validate()},"Entrar")))))}}]),n}(r.a.Component),w=Object(s.b)(null,(function(e){return{getEmail:function(t){return e(function(e){return{type:"GET_EMAIL",email:e}}(t))}}}))(C),N=(n(47),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).totalExpenses=a.totalExpenses.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"totalExpenses",value:function(){var e=this.props.expenses,t=0;return e.forEach((function(e){t+=e.value*e.exchangeRates[e.currency].ask})),t.toFixed(2)}},{key:"render",value:function(){var e=this.props.email;return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:k.a,alt:"logo",className:"logo"}),r.a.createElement("div",{className:"right"},r.a.createElement("p",{"data-testid":"email-field"},"Bem Vindo ".concat(e)),r.a.createElement("p",{"data-testid":"total-field"},"Total of Expenses $".concat(this.totalExpenses()," ")),r.a.createElement("p",{"data-testid":"header-currency-field"},"Currency converted to BRL")))}}]),n}(a.Component)),D=Object(s.b)((function(e){return{email:e.user.email,expenses:e.wallet.expenses}}))(N),S=n(4),T=n(28),M=(n(48),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).btnDelete=a.btnDelete.bind(Object(E.a)(a)),a.btnEdit=a.btnEdit.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"btnDelete",value:function(e){var t=this.props,n=t.expenses;(0,t.expensesList)(n.filter((function(t){return t.id!==e})))}},{key:"btnEdit",value:function(e){var t=this.props;(0,t.editExpense)(!0,t.expenses.find((function(t){return t.id===e})))}},{key:"render",value:function(){var e=this.props.expenses,t=this.btnEdit,n=this.btnDelete;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"tr"},r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,e.map((function(e,a){var c=e.id,i=e.value,l=e.description,s=e.currency,o=e.method,u=e.tag,d=e.exchangeRates;return r.a.createElement("tr",{key:a,className:"tr trTD"},r.a.createElement("td",null,l),r.a.createElement("td",null,u),r.a.createElement("td",null,o),r.a.createElement("td",null,i),r.a.createElement("td",null,d[s].name),r.a.createElement("td",null,parseFloat(d[s].ask).toFixed(2)),r.a.createElement("td",null,(i*d[s].ask).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{"data-testid":"edit-btn",type:"button",onClick:function(){return t(c)}},r.a.createElement(T.b,{className:"edit"})),r.a.createElement("button",{"data-testid":"delete-btn",type:"button",onClick:function(){return n(c)}},r.a.createElement(T.a,{className:"del"}))))}))))}}]),n}(a.Component)),I=Object(s.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{expensesList:function(t){return e(j(t))},editExpense:function(t,n){return e(O(t,n))}}}))(M),R=(n(49),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={value:0,description:"Hot Dog",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},a.fetchFilteredCurrencies=a.fetchFilteredCurrencies.bind(Object(E.a)(a)),a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.handleClick=a.handleClick.bind(Object(E.a)(a)),a.inputNumber=a.inputNumber.bind(Object(E.a)(a)),a.inputText=a.inputText.bind(Object(E.a)(a)),a.selectMethod=a.selectMethod.bind(Object(E.a)(a)),a.inputTag=a.inputTag.bind(Object(E.a)(a)),a.handleExpenseChange=a.handleExpenseChange.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchFilteredCurrencies()}},{key:"fetchFilteredCurrencies",value:function(){var e=this.props.getCurrencies;x().then((function(t){return e(Object.keys(t))}))}},{key:"handleClick",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return t=e.sent,n=this.props,a=n.getExpenses,r=n.expenses,c=Object(S.a)(Object(S.a)({id:r.length},this.state),{},{exchangeRates:t}),e.next=7,a(c);case 7:this.setState({value:0,description:"Hot Dog",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(h.a)({},n,a))}},{key:"handleExpenseChange",value:function(){var e=this.props,t=e.expensesList,n=e.editExpense,a=e.expenses,r=e.expense,c=r.id,i=r.exchangeRates,l=Object(S.a)(Object(S.a)({},this.state),{},{id:c,exchangeRates:i});t(a.map((function(e){return e.id===c?l:e}))),n(!1),this.setState({value:0,description:"Hot Dog",currency:"USD",method:"Dinheiro",tag:"Lazer"})}},{key:"currencyInputDropDown",value:function(e){return r.a.createElement("select",{"data-testid":"currency-input",onChange:this.handleChange,name:"currency"},e.map((function(e){return r.a.createElement("option",{className:"option",key:e,"data-testid":e},e)})))}},{key:"inputNumber",value:function(e){return r.a.createElement("input",{className:"number",type:"number","data-testid":"value-input",onChange:this.handleChange,name:"value",value:e,pattern:"^\\d*(\\.\\d{0,2})?$"})}},{key:"inputText",value:function(){return r.a.createElement("input",{placeholder:"Describe activity",type:"text","data-testid":"description-input",onChange:this.handleChange,name:"description"})}},{key:"selectMethod",value:function(){return r.a.createElement("select",{"data-testid":"method-input",name:"method",onChange:this.handleChange},r.a.createElement("option",{className:"option"},"Dinheiro"),r.a.createElement("option",{className:"option"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{className:"option"},"Cart\xe3o de d\xe9bito"))}},{key:"inputTag",value:function(){return r.a.createElement("select",{"data-testid":"tag-input",name:"tag",onChange:this.handleChange},r.a.createElement("option",{className:"option"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{className:"option"},"Lazer"),r.a.createElement("option",{className:"option"},"Trabalho"),r.a.createElement("option",{className:"option"},"Transporte"),r.a.createElement("option",{className:"option"},"Sa\xfade"))}},{key:"createButton",value:function(e,t){return r.a.createElement("button",{className:"btnForms",type:"button",onClick:t},e)}},{key:"render",value:function(){var e=this.props,t=e.currencies,n=e.eventEdit,a=this.state.value;return r.a.createElement("div",{className:"backgroundForms"},r.a.createElement("forms",{className:"expenseForms"},this.inputNumber(a),this.inputText(),this.selectMethod(),t&&this.currencyInputDropDown(t),this.inputTag(),n?this.createButton("Editar despesa",this.handleExpenseChange):this.createButton("Adicionar despesa",this.handleClick)),r.a.createElement(I,null))}}]),n}(a.Component)),F=Object(s.b)((function(e){return{currencies:e.wallet.currencies,expenses:e.wallet.expenses,eventEdit:e.wallet.eventEdit,expense:e.wallet.expense}}),(function(e){return{getCurrencies:function(t){return e(function(e){return{type:"GET_CURRENCIES",currencies:e}}(t))},getExpenses:function(t){return e(function(e){return{type:"ADD_EXPENSES",expense:e}}(t))},expensesList:function(t){return e(j(t))},editExpense:function(t,n){return e(O(t,n))}}}))(R),L=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.email,n=e.total;return r.a.createElement("div",null,r.a.createElement(D,{email:t,total:n}),r.a.createElement(F,null))}}]),n}(r.a.Component),_=Object(s.b)((function(e){return{email:e.user.email,total:e.wallet.total}}))(L),P=(n(50),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:w}),r.a.createElement(m.a,{exact:!0,path:"/carteira",component:_}))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(15),B=n(32),H=n(33),U={email:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMAIL":return Object(S.a)(Object(S.a)({},e),{},{email:t.email});default:return e}},G=n(34),$={currencies:[],expenses:[],total:0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENCIES":return Object(S.a)(Object(S.a)({},e),{},{currencies:t.currencies});case"ADD_EXPENSES":return Object(S.a)(Object(S.a)({},e),{},{expenses:[].concat(Object(G.a)(e.expenses),[t.expense])});case"SET_EXPENSES":return Object(S.a)(Object(S.a)({},e),{},{expenses:t.expenses});case"EDIT_EXPENSES":return Object(S.a)(Object(S.a)({},e),{},{eventEdit:t.eventEdit,expense:t.expense});default:return e}},V=Object(A.combineReducers)({user:X,wallet:z}),W=Object(A.createStore)(V,Object(B.composeWithDevTools)(Object(A.applyMiddleware)(H.a)));i.a.render(r.a.createElement(l.a,null,r.a.createElement(s.a,{store:W},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.1aa094b1.chunk.js.map