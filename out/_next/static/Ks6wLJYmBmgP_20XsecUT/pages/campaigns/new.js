(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6NJg":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),i=n("1OyB"),o=n("vuIU"),s=n("JX7q"),u=n("Ji7U"),c=n("md7G"),l=n("foSv"),m=n("rePB"),f=n("q1tI"),h=n.n(f),p=n("5Yp1"),b=n("vFsZ"),g=n("umxb"),d=n("TbSc"),v=n("QetY"),w=n("OIDg"),y=n("oZBQ"),O=n("8cHP"),S=h.a.createElement;function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(u.a)(r,t);var e,n=(e=r,function(){var t,n=Object(l.a)(e);if(C()){var r=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(c.a)(this,t)});function r(){var t;Object(i.a)(this,r);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),Object(m.a)(Object(s.a)(t),"state",{minimumContribution:"",errorMessage:"",loading:!1}),t}return Object(o.a)(r,[{key:"onSubmit",value:function(t){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),this.setState({loading:!0,errorMessage:""}),n.prev=2,n.next=5,a.a.awrap(y.a.eth.getAccounts());case 5:return e=n.sent,n.next=8,a.a.awrap(w.a.methods.createCampaign(this.state.minimumContribution).send({from:e[0]}));case 8:O.Router.pushRoute("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),this.setState({errorMessage:n.t0.message});case 14:this.setState({loading:!1});case 15:case"end":return n.stop()}}),null,this,[[2,11]],Promise)}},{key:"render",value:function(){var t=this;return S(p.a,null,S("h3",null,"New Campaign!"),S(b.a,{onSubmit:this.onSubmit.bind(this),error:!!this.state.errorMessage},S(b.a.Field,null,S("label",null,"Minimum Contribution"),S(g.a,{label:"wei",labelPosition:"right",value:this.state.minimumContribution,onChange:function(e){return t.setState({minimumContribution:e.target.value})}})),S(d.a,{error:!0,header:"Oops!",content:this.state.errorMessage}),S(v.a,{primary:!0,type:"submit",loading:this.state.loading},"Submit")))}}]),r}(f.Component);e.default=j},XWaF:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/new",function(){return n("6NJg")}])}},[["XWaF",0,2,1,3,5,6]]]);