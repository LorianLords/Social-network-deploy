"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[930],{1769:function(t,e,r){var s=r(132),n=s.Ry().shape({textareaBody:s.Z_().min(2,"Must be longer than 2 characters").max(30,"Nice try, nobody has a first name that long").required("Required")});e.Z=n},5760:function(t,e,r){r.d(e,{e:function(){return d}});var s=r(8683),n=r(5671),i=r(3144),a=r(136),u=r(3668),o=r(6871),p=r(2791),c=r(7581),h=r(184),l=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){(0,a.Z)(p,e);var r=(0,u.Z)(p);function p(){return(0,n.Z)(this,p),r.apply(this,arguments)}return(0,i.Z)(p,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(t,(0,s.Z)({},this.props)):(0,h.jsx)(o.Fg,{to:"/login"})}}]),p}(p.Component);return(0,c.$j)(l)(e)}},8930:function(t,e,r){r.r(e),r.d(e,{default:function(){return N},withRouter:function(){return B}});var s=r(5671),n=r(3144),i=r(136),a=r(3668),u=r(8683),o=r(2791),p=r(6070),c=r(7581),h=r(6871),l=r(5760),d=r(7781),f="Profile_profile__6F2qF",v="Post_item__Rzy0r",x=r(184),m=function(t){return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("img",{src:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1615777823.1638921600",alt:""}),t.message,(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"like"})," ",t.likes]})]})})},j="ProfileInfo_avatar__A5Afb",g=r(760),y=r(719),Z=r(885),k=function(t){var e=(0,o.useState)(!1),r=(0,Z.Z)(e,2),s=r[0],n=r[1],i=(0,o.useState)(t.status),a=(0,Z.Z)(i,2),u=a[0],p=a[1];return(0,o.useEffect)((function(){p(t.status)}),[t.status]),(0,x.jsx)("div",{children:s?(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(u)},value:u})}):(0,x.jsx)("div",{children:(0,x.jsx)("span",{onDoubleClick:function(){n(!0)},children:u})})})},S=function(t){(0,i.Z)(r,t);var e=(0,a.Z)(r);function r(){return(0,s.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r,[{key:"check",value:function(){if(!this.props.profile)return(0,x.jsx)(g.Z,{});this.photo=this.props.profile.photos.large}},{key:"render",value:function(){return(0,x.jsxs)("div",{children:[this.check(),(0,x.jsxs)("div",{className:j,children:[(0,x.jsx)("img",{src:null===this.photo?y:this.photo,alt:""}),(0,x.jsx)("div",{className:"Information",children:"Ava + photo"})]}),(0,x.jsx)(k,{status:this.props.status,updateStatus:this.props.updateStatus})]})}}]),r}(o.Component),b=S,_=r(5705),C=r(7704),P=r(1769),A=function(t){var e=t.stateProfile,r=t.addPostActionCreator,s=t.profile,n=t.status,i=t.updateStatus,a=e.postData.map((function(t){return(0,x.jsx)(m,{message:t.message,likes:t.likes},t.id)}));return(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)(b,{profile:s,status:n,updateStatus:i}),(0,x.jsx)(_.J9,{initialValues:{textareaBody:"",withBlur:""},validationSchema:P.Z,onSubmit:function(t,e){var s=e.setSubmitting;setTimeout((function(){alert(JSON.stringify(t,null,2)),r(t.textareaBody),s(!1)}),400)},children:function(t){var e=t.isSubmitting,r=t.touched,s=t.errors;t.handleBlur;return(0,x.jsxs)(_.l0,{className:r.textareaBody&&s.textareaBody?C.Z.error:"",children:[(0,x.jsx)("div",{children:(0,x.jsx)(_.gN,{component:"textarea",name:"textareaBody",placeholder:"Write your post.."})}),(0,x.jsx)(_.Bc,{name:"textareaBody",component:"div"}),(0,x.jsx)("button",{type:"submit",disabled:e,children:"Send"})]})}}),a]})};function B(t){return function(e){var r=(0,h.TH)(),s=(0,h.UO)();return(0,x.jsx)(t,(0,u.Z)((0,u.Z)({},e),{},{router:{location:r,params:s,navigator:navigator}}))}}var T=function(t){(0,i.Z)(r,t);var e=(0,a.Z)(r);function r(){return(0,s.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/login"),this.props.getProfileThunkCreator(t),this.props.getStatusThunk(t)}},{key:"render",value:function(){return(0,x.jsx)(A,(0,u.Z)((0,u.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status?this.props.status:"nothing",updateStatus:this.props.updateStatusThunk}))}}]),r}(o.Component),N=(0,d.qC)((0,c.$j)((function(t){return{profile:t.profilePage.profile,stateProfile:t.profilePage,status:t.profilePage.status,authUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfileThunkCreator:p.aI,addPostActionCreator:p.Wl,getStatusThunk:p.$b,updateStatusThunk:p.dw}),B,l.e)(T)},719:function(t,e,r){t.exports=r.p+"static/media/ava.00d92f05e4fec182b3f6.png"}}]);
//# sourceMappingURL=930.9d1afcaf.chunk.js.map