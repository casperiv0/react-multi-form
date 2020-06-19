(this["webpackJsonpmultiple-page-form"]=this["webpackJsonpmultiple-page-form"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),o=a.n(s),c=(a(13),a(1)),l=a(2),i=a(3),u=a(4),m=a(7),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"error"},this.props.error)}}]),a}(r.Component),h=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onChange=function(t){e.props.onChange(t)},e.onChecked=function(t){e.props.onChecked(t)},e.next=function(){e.props.next()},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,this.props.error?n.a.createElement(p,{error:this.props.error}):null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{type:"text",name:"firstName",className:"form-input",id:"firstName",onChange:this.onChange,value:this.props.values.firstName,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{type:"text",name:"lastName",id:"lastName",className:"form-input",onChange:this.onChange,value:this.props.values.lastName,required:!0}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",name:"username",id:"username",className:"form-input",onChange:this.onChange,value:this.props.values.username})),n.a.createElement("div",{className:"form-group-checkbox"},n.a.createElement("input",{name:"agreed",id:"agreed",type:"checkbox",onChange:this.onChecked,checked:this.props.values.agreed}),n.a.createElement("label",{htmlFor:"agreed"},"I agree to the terms and conditions")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn blue",onClick:this.next},"Continue")))}}]),a}(r.Component),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onChange=function(t){e.props.onChange(t)},e.next=function(){e.props.next()},e.prev=function(){e.props.prev()},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"form-group"},this.props.error?n.a.createElement(p,{error:this.props.error}):null,n.a.createElement("label",{htmlFor:"password"},"Enter Password"),n.a.createElement("input",{type:"password",name:"password",className:"form-input",id:"password",onChange:this.onChange,required:!0,value:this.props.passwords[0]})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),n.a.createElement("input",{type:"password",name:"password2",id:"password2",className:"form-input",onChange:this.onChange,required:!0,value:this.props.passwords[1]})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("button",{className:"btn",onClick:this.prev},"Previous"),n.a.createElement("button",{className:"btn blue",onClick:this.next},"Continue")))}}]),a}(r.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).submit=function(){e.props.submit()},e.prev=function(){e.props.prev()},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{style:{marginBottom:"10px"}},n.a.createElement("strong",null,"Full Name: ")," ","".concat(this.props.values.firstName," ").concat(this.props.values.lastName)," ",n.a.createElement("br",null),n.a.createElement("strong",null,"Username: ")," ","".concat(this.props.values.firstName)," ",n.a.createElement("br",null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("button",{className:"btn",onClick:this.prev},"Previous"),n.a.createElement("button",{className:"btn blue",onClick:this.submit},"Confirm")))}}]),a}(r.Component),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).next=function(){var t=e.state,a=t.currentIndex,r=t.password,n=t.password2;if(1===a&&r!==n)return e.setState({error:"Password do not match"});e.setState({currentIndex:e.state.currentIndex+1})},e.prev=function(){e.setState({currentIndex:e.state.currentIndex-1})},e.onChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onChecked=function(){e.setState({agreed:!e.state.agreed})},e.submit=function(){alert("Submitted!")},e.state={currentIndex:0,firstName:"",lastName:"",username:"",gender:"",password:"",password2:"",agreed:!1,error:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.currentIndex,t=this.state,a=t.firstName,r=t.lastName,s=t.username,o=t.gender,c=t.agreed,l=t.error,i={firstName:a,lastName:r,username:s,gender:o,agreed:c};switch(e){case 0:return n.a.createElement(h,{error:l,values:i,onChange:this.onChange,next:this.next,onChecked:this.onChecked});case 1:return n.a.createElement(d,{error:l,passwords:[this.state.password,this.state.password2],onChange:this.onChange,next:this.next,prev:this.prev});case 2:return n.a.createElement(f,{values:i,submit:this.submit,prev:this.prev});default:return}}}]),a}(r.Component),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"form-container"},n.a.createElement(v,null))}}]),a}(r.Component);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5568e4eb.chunk.js.map