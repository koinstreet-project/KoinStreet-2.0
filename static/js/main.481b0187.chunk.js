(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,n,t){e.exports=t(431)},216:function(e,n,t){},431:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(25),o=t.n(r),s=(t(214),t(216),t(15)),l=t(16),c=t(18),u=t(17),m=t(19),d=t(59),p=t(120),g=t(48),h=t.n(g),y=(t(266),t(179)),f=t.n(y),C=t(92),E=t.n(C),S=t(126),b=t.n(S),v=t(193),w=t.n(v),k=t(194),O=t.n(k),A=t(125),j=t.n(A),P=t(195),D=t.n(P),I=t(196),T=t.n(I),K=t(197),x=t.n(K),U=t(198),R=t.n(U),V=t(199),N=t.n(V),W=t(200),L=t.n(W),B=t(201),M=t.n(B),F=t(202),q=t.n(F),z=t(203),G=t.n(z),H=t(204),J=t.n(H),Y=t(205),Q=t.n(Y),Z=t(206),X=t.n(Z),$=t(127),_=t.n($),ee=t(132),ne=t.n(ee),te=t(22),ae=t(208),ie=t.n(ae),re=t(207),oe=t.n(re),se=t(180),le=t.n(se),ce=t(182),ue=t.n(ce),me=t(39),de=t.n(me),pe=t(20),ge=t.n(pe),he=t(183),ye=t.n(he),fe=t(185),Ce=t.n(fe),Ee=t(47),Se=t.n(Ee),be=t(184),ve=t.n(be),we=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).openMenu=function(e){var n=e.currentTarget;t.setState({menu:{anchorEl:n}})},t.closeMenu=function(){t.setState({menu:{anchorEl:null}})},t.handleSettingsClick=function(){t.closeMenu(),t.props.onSettingsClick()},t.handleSignOutClick=function(){t.closeMenu(),t.props.onSignOutClick()},t.state={menu:{anchorEl:null}},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.title,a=e.isSignedIn,r=e.isSigningUp,o=e.isSigningIn,s=this.props,l=s.onSignUpClick,c=s.onSignInClick,u=this.state.menu;return i.a.createElement(le.a,{color:"primary",position:"static"},i.a.createElement(ue.a,{variant:"regular"},i.a.createElement(de.a,{style:{flexGrow:1},color:"inherit",variant:"h6"},t),a&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ye.a,{color:"inherit",onClick:this.openMenu},i.a.createElement(ve.a,null)),i.a.createElement(Ce.a,{anchorEl:u.anchorEl,open:Boolean(u.anchorEl),onClose:this.closeMenu},i.a.createElement(Se.a,{onClick:this.handleSettingsClick},"Settings"),i.a.createElement(Se.a,{onClick:this.handleSignOutClick},"Sign out"))),!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ge.a,{className:n.signUpButton,color:"secondary",disabled:r,variant:"contained",onClick:l},"Sign Up"),i.a.createElement(ge.a,{color:"secondary",disabled:o,variant:"contained",onClick:c},"Sign In"))))}}]),n}(a.Component),ke=Object(te.withStyles)(function(e){return{signUpButton:{marginRight:e.spacing.unit}}})(we),Oe=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.icon,a=e.title,r=e.description,o=e.button;return i.a.createElement("div",{className:n.center},t,a&&i.a.createElement(de.a,{color:"textSecondary",variant:"h4"},a),r&&i.a.createElement(de.a,{color:"textSecondary",variant:"subtitle1"},r),o)}}]),n}(a.Component),Ae=Object(te.withStyles)({center:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center"}})(Oe),je=t(94),Pe=t.n(je),De=t(93),Ie=t.n(De),Te=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(Ae,{icon:i.a.createElement(Ie.a,{className:e.emptyStateIcon,color:"action"}),title:"Home",description:"Use React + Material-UI + Firebase as a starting point for your project.",button:i.a.createElement(Pe.a,{className:e.button,color:"primary",component:d.b,to:"/something-crazy",variant:"extended"},"Do Something Crazy")})}}]),n}(a.Component),Ke=Object(te.withStyles)(function(e){return{emptyStateIcon:{fontSize:"".concat(12*e.spacing.unit,"px")},button:{marginTop:"".concat(e.spacing.unit,"px")}}})(Te),xe=t(188),Ue=t.n(xe),Re=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(Ae,{icon:i.a.createElement(Ue.a,{className:e.emptyStateIcon,color:"action"}),title:"Content Not Found",description:"The requested URL was not found on this server.",button:i.a.createElement(Pe.a,{className:e.button,color:"primary",component:d.b,to:"/",variant:"extended"},i.a.createElement(Ie.a,{className:e.buttonIcon})," Go Home")})}}]),n}(a.Component),Ve=Object(te.withStyles)(function(e){return{emptyStateIcon:{fontSize:"".concat(12*e.spacing.unit,"px")},button:{marginTop:"".concat(e.spacing.unit,"px")},buttonIcon:{marginRight:"".concat(e.spacing.unit,"px")}}})(Re),Ne=t(60),We=t.n(Ne),Le=t(28),Be=t.n(Le),Me=t(29),Fe=t.n(Me),qe=t(30),ze=t.n(qe),Ge=t(26),He=t.n(Ge),Je=t(31),Ye=t.n(Je),Qe=t(40),Ze=t.n(Qe),Xe={emailAddress:"",password:"",passwordConfirmation:"",errors:null},$e=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).signUp=function(){var e=t.state,n=e.emailAddress,a=e.password,i=e.passwordConfirmation,r=We()({emailAddress:n,password:a,passwordConfirmation:i},{emailAddress:{email:!0,presence:{allowEmpty:!1}},password:{length:{minimum:6},presence:{allowEmpty:!1}},passwordConfirmation:{equality:"password",length:{minimum:6},presence:{allowEmpty:!1}}});r?t.setState({errors:r}):t.setState({errors:null},function(){t.props.signUp(n,a)})},t.handleExited=function(){t.setState(Xe)},t.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.signUp()},t.handleEmailAddressChange=function(e){var n=e.target.value;t.setState({emailAddress:n})},t.handlePasswordChange=function(e){var n=e.target.value;t.setState({password:n})},t.handlePasswordConfirmationChange=function(e){var n=e.target.value;t.setState({passwordConfirmation:n})},t.handleSignUpClick=function(){t.signUp()},t.state=Xe,t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.isSigningUp,a=this.props.onClose,r=this.state,o=r.emailAddress,s=r.password,l=r.passwordConfirmation,c=r.errors;return i.a.createElement(Be.a,{open:n,onClose:a,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Fe.a,null,"Sign up for an account"),i.a.createElement(ze.a,null,i.a.createElement(He.a,null,"Create an account to access features that are unavailable to users who haven't signed up."),i.a.createElement("form",null,i.a.createElement(Ze.a,{autoComplete:"email",autoFocus:!0,error:!(!c||!c.emailAddress),fullWidth:!0,helperText:c&&c.emailAddress?c.emailAddress[0]:"",label:"E-mail address",margin:"normal",onChange:this.handleEmailAddressChange,required:!0,type:"email",value:o}),i.a.createElement(Ze.a,{autoComplete:"new-password",error:!(!c||!c.password),fullWidth:!0,helperText:c&&c.password?c.password[0]:"",label:"Password",margin:"normal",onChange:this.handlePasswordChange,required:!0,type:"password",value:s}),i.a.createElement(Ze.a,{autoComplete:"password",error:!(!c||!c.passwordConfirmation),fullWidth:!0,helperText:c&&c.passwordConfirmation?c.passwordConfirmation[0]:"",label:"Password confirmation",margin:"normal",onChange:this.handlePasswordConfirmationChange,required:!0,type:"password",value:l}))),i.a.createElement(Ye.a,null,i.a.createElement(ge.a,{color:"primary",onClick:a},"Cancel"),i.a.createElement(ge.a,{color:"primary",disabled:!o||!s||!l||t,variant:"contained",onClick:this.handleSignUpClick},"Sign Up")))}}]),n}(a.Component),_e={emailAddress:"",password:"",errors:null},en=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).signIn=function(){var e=t.state,n=e.emailAddress,a=e.password,i=We()({emailAddress:n,password:a},{emailAddress:{email:!0,presence:{allowEmpty:!1}},password:{length:{minimum:6},presence:{allowEmpty:!1}}});i?t.setState({errors:i}):t.setState({errors:null},function(){t.props.signIn(n,a)})},t.handleExited=function(){t.setState(_e)},t.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.signIn()},t.handleEmailAddressChange=function(e){var n=e.target.value;t.setState({emailAddress:n})},t.handlePasswordChange=function(e){var n=e.target.value;t.setState({password:n})},t.handleSignInClick=function(){t.signIn()},t.state=_e,t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.isSigningIn,a=this.props,r=a.onClose,o=a.onResetPasswordClick,s=this.state,l=s.emailAddress,c=s.password,u=s.errors;return i.a.createElement(Be.a,{open:n,onClose:r,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Fe.a,null,"Sign in to your account"),i.a.createElement(ze.a,null,i.a.createElement(He.a,null,"Some features might be unavailable until you sign in. While you're signed in you can manage your account."),i.a.createElement("form",null,i.a.createElement(Ze.a,{autoComplete:"email",autoFocus:!0,error:!(!u||!u.emailAddress),fullWidth:!0,helperText:u&&u.emailAddress?u.emailAddress[0]:"",margin:"normal",onChange:this.handleEmailAddressChange,placeholder:"E-mail address",required:!0,type:"email",value:l}),i.a.createElement(Ze.a,{autoComplete:"current-password",error:!(!u||!u.password),fullWidth:!0,helperText:u&&u.password?u.password[0]:"",margin:"normal",onChange:this.handlePasswordChange,placeholder:"Password",required:!0,type:"password",value:c}))),i.a.createElement(Ye.a,null,i.a.createElement(ge.a,{color:"primary",onClick:r},"Cancel"),i.a.createElement(ge.a,{color:"primary",variant:"outlined",onClick:o},"Reset Password"),i.a.createElement(ge.a,{color:"primary",disabled:!l||!c||t,variant:"contained",onClick:this.handleSignInClick},"Sign In")))}}]),n}(a.Component),nn={emailAddress:"",errors:null},tn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).resetPassword=function(){var e=t.state.emailAddress,n=We()({emailAddress:e},{emailAddress:{email:!0,presence:{allowEmpty:!1}}});n?t.setState({errors:n}):t.setState({errors:null},function(){t.props.resetPassword(e)})},t.handleExited=function(){t.setState(nn)},t.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&(e.preventDefault(),t.resetPassword())},t.handleEmailAddressChange=function(e){var n=e.target.value;t.setState({emailAddress:n})},t.handleResetPasswordClick=function(){t.resetPassword()},t.state=nn,t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.isResettingPassword,a=this.props.onClose,r=this.state,o=r.emailAddress,s=r.errors;return i.a.createElement(Be.a,{open:n,onClose:a,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Fe.a,null,"Reset your password"),i.a.createElement(ze.a,null,i.a.createElement(He.a,null,"An e-mail will be sent to your e-mail address containing instructions on how to reset your password."),i.a.createElement("form",null,i.a.createElement(Ze.a,{autoComplete:"email",autoFocus:!0,error:!(!s||!s.emailAddress),fullWidth:!0,helperText:s&&s.emailAddress?s.emailAddress[0]:"",margin:"normal",onChange:this.handleEmailAddressChange,placeholder:"E-mail address",required:!0,type:"email",value:o}))),i.a.createElement(Ye.a,null,i.a.createElement(ge.a,{color:"primary",onClick:a},"Cancel"),i.a.createElement(ge.a,{color:"primary",disabled:!o||t,variant:"contained",onClick:this.handleResetPasswordClick},"Reset Password")))}}]),n}(a.Component),an=t(192),rn=t.n(an),on=t(191),sn=t.n(on),ln=t(130),cn=t.n(ln),un=t(128),mn=t.n(un),dn=t(72),pn=t.n(dn),gn=t(95),hn=t.n(gn),yn=t(97),fn=t.n(yn),Cn=t(190),En=t.n(Cn),Sn=t(96),bn=t.n(Sn),vn=t(189),wn=t.n(vn),kn=t(131),On=t.n(kn),An=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.props.onOkClick()},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.open,n=this.props,t=n.title,a=n.contentText,r=n.cancelText,o=n.okText,s=n.highlightOkButton,l=this.props.onClose,c=this.props,u=c.onCancelClick,m=c.onOkClick;return i.a.createElement(Be.a,{open:e,onClose:l,onKeyPress:this.handleKeyPress},t&&i.a.createElement(Fe.a,null,t),a&&i.a.createElement(ze.a,null,i.a.createElement(He.a,null,a)),(u||m)&&i.a.createElement(Ye.a,null,u&&i.a.createElement(ge.a,{color:"primary",onClick:u},r||"Cancel"),m&&i.a.createElement(ge.a,{color:"primary",variant:s&&"contained",onClick:m},o||"OK")))}}]),n}(a.Component),jn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).openVerifyEmailAddressDialog=function(){t.setState({verifyEmailAddressDialog:{open:!0}})},t.closeVerifyEmailAddressDialog=function(e){t.setState({verifyEmailAddressDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.verifyEmailAddress=function(){t.closeVerifyEmailAddressDialog(function(){t.props.onVerifyEmailAddressClick()})},t.state={verifyEmailAddressDialog:{open:!1}},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.user,a=e.isVerifyingEmailAddress,r=this.state.verifyEmailAddressDialog;return i.a.createElement(i.a.Fragment,null,i.a.createElement(He.a,{className:n.dialogContentText},"This is a summary of your account. You can manage your account throughout all the settings."),i.a.createElement(mn.a,null,i.a.createElement(pn.a,null,i.a.createElement(hn.a,null,i.a.createElement(bn.a,{title:"E-mail address"},i.a.createElement(wn.a,null))),i.a.createElement(fn.a,{primary:t.email,secondary:t.emailVerified?"Verified":"Not verified"}),!t.emailVerified&&i.a.createElement(En.a,null,i.a.createElement(ge.a,{color:"primary",disabled:a,variant:"contained",onClick:this.openVerifyEmailAddressDialog},"Verify"))),i.a.createElement(pn.a,null,i.a.createElement(hn.a,null,i.a.createElement(bn.a,{title:"Signed in"},i.a.createElement(On.a,null))),i.a.createElement(fn.a,{primary:"Signed in",secondary:cn()(t.metadata.lastSignInTime).format("LLLL")})),i.a.createElement(pn.a,null,i.a.createElement(hn.a,null,i.a.createElement(bn.a,{title:"Signed up"},i.a.createElement(On.a,null))),i.a.createElement(fn.a,{primary:"Signed up",secondary:cn()(t.metadata.creationTime).format("LLLL")}))),i.a.createElement(An,{open:r.open,title:"Verify e-mail address?",contentText:"An e-mail will be sent to your e-mail address containing instructions on how to verify your e-mail address.",okText:"Verify",highlightOkButton:!0,onClose:this.closeVerifyEmailAddressDialog,onCancelClick:this.closeVerifyEmailAddressDialog,onOkClick:this.verifyEmailAddress}))}}]),n}(a.Component),Pn=Object(te.withStyles)(function(e){return{dialogContentText:{marginTop:"".concat(2*e.spacing.unit,"px")}}})(jn),Dn=t(74),In=t.n(Dn),Tn=t(73),Kn=t.n(Tn),xn=t(75),Un=t.n(xn),Rn=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.colors,a=e.types,r=e.primaryColor,o=e.secondaryColor,s=e.type,l=this.props,c=l.onPrimaryColorChange,u=l.onSecondaryColorChange,m=l.onTypeChange;return i.a.createElement(i.a.Fragment,null,i.a.createElement(He.a,{className:n.dialogContentText},"Customize the look and feel to your own liking. You can reset all changes you've made by clicking Reset."),i.a.createElement(In.a,{fullWidth:!0,margin:"normal"},i.a.createElement(Kn.a,null,"Primary color"),i.a.createElement(Un.a,{onChange:c,value:r},t.map(function(e){return i.a.createElement(Se.a,{key:e.id,value:e.id},e.name)}))),i.a.createElement(In.a,{fullWidth:!0,margin:"normal"},i.a.createElement(Kn.a,null,"Secondary color"),i.a.createElement(Un.a,{onChange:u,value:o},t.map(function(e){return i.a.createElement(Se.a,{key:e.id,value:e.id},e.name)}))),i.a.createElement(In.a,{fullWidth:!0,margin:"normal"},i.a.createElement(Kn.a,null,"Type"),i.a.createElement(Un.a,{onChange:m,value:s},a.map(function(e,n){return i.a.createElement(Se.a,{key:n,value:e},e.charAt(0).toUpperCase()+e.slice(1))}))))}}]),n}(a.Component),Vn=Object(te.withStyles)(function(e){return{dialogContentText:{marginTop:"".concat(2*e.spacing.unit,"px")}}})(Rn),Nn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.props.onClose()},t.changeTab=function(e,n){t.setState({selectedTab:n})},t.state={selectedTab:0},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.user,a=e.isVerifyingEmailAddress,r=e.colors,o=e.types,s=e.primaryColor,l=e.secondaryColor,c=e.type,u=this.props,m=u.onClose,d=u.onVerifyEmailAddressClick,p=u.onPrimaryColorChange,g=u.onSecondaryColorChange,h=u.onTypeChange,y=u.onResetClick,f=this.state.selectedTab,C=Object(te.withStyles)({label:{color:"light"===c?"#000000":"#ffffff"}})(sn.a);return i.a.createElement(Be.a,{open:n,onClose:m,onKeyPress:this.handleKeyPress},i.a.createElement(Fe.a,null,"Settings"),i.a.createElement(rn.a,{onChange:this.changeTab,value:f,variant:"fullWidth"},i.a.createElement(C,{label:"Account"}),i.a.createElement(C,{label:"Appearance"})),i.a.createElement(ze.a,null,0===f&&i.a.createElement(Pn,{user:t,isVerifyingEmailAddress:a,onVerifyEmailAddressClick:d}),1===f&&i.a.createElement(Vn,{colors:r,types:o,primaryColor:s,secondaryColor:l,type:c,onPrimaryColorChange:p,onSecondaryColorChange:g,onTypeChange:h})),i.a.createElement(Ye.a,null,i.a.createElement(ge.a,{color:"primary",onClick:m},"Cancel"),i.a.createElement(ge.a,{color:"primary",variant:"outlined",onClick:function(){setTimeout(y,137.5)}},"Reset"),i.a.createElement(ge.a,{color:"primary",variant:"contained",onClick:m},"OK")))}}]),n}(a.Component),Wn=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.props.signOut()},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.isSigningOut,a=this.props.signOut,r=this.props.onClose;return i.a.createElement(Be.a,{open:n,onClose:r,onKeyPress:this.handleKeyPress},i.a.createElement(Fe.a,null,"Sign out?"),i.a.createElement(ze.a,null,i.a.createElement(He.a,null,"While signed out you are unable to manage your profile and conduct other activities that require you to be signed in.")),i.a.createElement(Ye.a,null,i.a.createElement(ge.a,{color:"primary",onClick:r},"Cancel"),i.a.createElement(ge.a,{color:"primary",disabled:t,variant:"contained",onClick:a},"Sign Out")))}}]),n}(a.Component);h.a.initializeApp({apiKey:"AIzaSyDYZOrZVpXkPQD6J31mb9t2eIIxmGEJK-Q",authDomain:"react-material-ui-firebase.firebaseapp.com",databaseURL:"https://react-material-ui-firebase.firebaseio.com",projectId:"react-material-ui-firebase",storageBucket:"react-material-ui-firebase.appspot.com",messagingSenderId:"552659850812"});var Ln=[{id:"red",name:"Red",import:E.a},{id:"pink",name:"Pink",import:b.a},{id:"purple",name:"Purple",import:w.a},{id:"deep-purple",name:"Deep Purple",import:O.a},{id:"indigo",name:"Indigo",import:j.a},{id:"blue",name:"Blue",import:D.a},{id:"light-blue",name:"Light Blue",import:T.a},{id:"cyan",name:"Cyan",import:x.a},{id:"teal",name:"Teal",import:R.a},{id:"green",name:"Green",import:N.a},{id:"light-green",name:"Light Green",import:L.a},{id:"lime",name:"Lime",import:M.a},{id:"yellow",name:"Yellow",import:q.a},{id:"amber",name:"Amber",import:G.a},{id:"orange",name:"Orange",import:J.a},{id:"deep-orange",name:"Deep Orange",import:Q.a},{id:"brown",name:"Brown",import:X.a},{id:"gray",name:"Gray",import:_.a},{id:"blue-gray",name:"Blue Gray",import:ne.a}],Bn=["light","dark"],Mn={primaryColor:"blue-gray",secondaryColor:"red"},Fn=Object(te.createMuiTheme)({palette:{primary:ne.a,secondary:E.a,type:"light"},typography:{useNextVariants:!0}}),qn="React + Material-UI + Firebase",zn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).updateTheme=function(e,n){var a=t.state,i=a.primaryColor,r=a.secondaryColor,o=a.type;e.primaryColor||(e.primaryColor=i),e.secondaryColor||(e.secondaryColor=r),e.type||(e.type=o),Fn=Object(te.createMuiTheme)({palette:{primary:Ln.find(function(n){return n.id===e.primaryColor}).import,secondary:Ln.find(function(n){return n.id===e.secondaryColor}).import,type:e.type},typography:{useNextVariants:!0}}),t.setState({primaryColor:e.primaryColor,secondaryColor:e.secondaryColor,type:e.type},function(){n?localStorage.removeItem("theme"):localStorage.setItem("theme",JSON.stringify({primaryColor:e.primaryColor,secondaryColor:e.secondaryColor,type:e.type}))})},t.resetTheme=function(){t.updateTheme({primaryColor:Mn.primaryColor,secondaryColor:Mn.secondaryColor,type:"light"},!0)},t.changePrimaryColor=function(e){var n=e.target.value;t.updateTheme({primaryColor:n})},t.changeSecondaryColor=function(e){var n=e.target.value;t.updateTheme({secondaryColor:n})},t.changeType=function(e){var n=e.target.value;t.updateTheme({type:n})},t.showSignUpDialog=function(){t.setState({signUpDialog:{open:!0}})},t.closeSignUpDialog=function(e){t.setState({signUpDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showSignInDialog=function(){t.setState({signInDialog:{open:!0}})},t.closeSignInDialog=function(e){t.setState({signInDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showResetPasswordDialog=function(){t.setState({resetPasswordDialog:{open:!0}})},t.closeResetPasswordDialog=function(e){t.setState({resetPasswordDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showSettingsDialog=function(){t.setState({settingsDialog:{open:!0}})},t.closeSettingsDialog=function(e){t.setState({settingsDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showSignOutDialog=function(){t.setState({signOutDialog:{open:!0}})},t.closeSignOutDialog=function(e){t.setState({signOutDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.openSnackbar=function(e){t.setState({snackbar:{autoHideDuration:2*f()(e).time,message:e,open:!0}})},t.closeSnackbar=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.state.snackbar;t.setState({snackbar:{message:e?"":n.message,open:!1}})},t.signUp=function(e,n){t.state.isSignedIn?t.openSnackbar("Signed in users can't sign up"):t.setState({isSigningUp:!0},function(){h.a.auth().createUserWithEmailAndPassword(e,n).then(function(e){t.setState({isSigningUp:!1},function(){t.closeSignUpDialog(function(){var n=e.user.email;t.openSnackbar("Signed up as "+n)})})}).catch(function(e){t.setState({isSigningUp:!1},function(){t.openSnackbar(e.message)})})})},t.signIn=function(e,n){t.state.isSignedIn?t.openSnackbar("Signed in users can't sign in again"):t.setState({isSigningIn:!0},function(){h.a.auth().signInWithEmailAndPassword(e,n).then(function(e){t.setState({isSigningIn:!1},function(){t.closeSignInDialog(function(){var n=e.user,a=n.displayName,i=n.email;t.openSnackbar("Signed in as "+(a||i))})})}).catch(function(e){t.setState({isSigningIn:!1},function(){t.openSnackbar(e.message)})})})},t.resetPassword=function(e){t.state.isSignedIn?t.openSnackbar("Signed in users can't reset their password"):t.setState({isResettingPassword:!0},function(){h.a.auth().sendPasswordResetEmail(e).then(function(){t.setState({isResettingPassword:!1},function(){t.closeResetPasswordDialog(function(){t.openSnackbar("Password reset email sent")})})}).catch(function(e){t.setState({isResettingPassword:!1},function(){t.openSnackbar(e.message)})})})},t.verifyEmailAddress=function(){var e=t.state,n=e.isSignedIn,a=e.isVerifyingEmailAddress,i=e.user;n&&!a&&i&&i.sendEmailVerification().then(function(){t.setState({isVerifyingEmailAddress:!0},function(){t.openSnackbar("Password reset e-mail sent")})}).catch(function(e){t.openSnackbar(e.message)})},t.signOut=function(){t.state.isSignedIn?t.setState({isSigningOut:!0},function(){h.a.auth().signOut().then(function(){t.setState({isSigningOut:!1},function(){t.closeSignOutDialog(function(){t.openSnackbar("Signed out")})})}).catch(function(e){t.setState({isSigningOut:!1},function(){t.closeSignOutDialog(function(){t.openSnackbar(e.message)})})})}):t.openSnackbar("Not signed in")},t.state={primaryColor:Mn.primaryColor,secondaryColor:Mn.secondaryColor,type:"light",isAuthReady:!1,isSigningUp:!1,isSigningIn:!1,isResettingPassword:!1,isSignedIn:!1,isVerifyingEmailAddress:!1,isSigningOut:!1,user:null,signUpDialog:{open:!1},signInDialog:{open:!1},resetPasswordDialog:{open:!1},settingsDialog:{open:!1},signOutDialog:{open:!1},snackbar:{autoHideDuration:0,message:"",open:!1}},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state,t=n.primaryColor,a=n.secondaryColor,r=n.type,o=n.isAuthReady,s=n.isSigningUp,l=n.isSigningIn,c=n.isResettingPassword,u=n.isSignedIn,m=n.isVerifyingEmailAddress,g=n.isSigningOut,h=n.user,y=this.state,f=y.signUpDialog,C=y.signInDialog,E=y.resetPasswordDialog,S=y.settingsDialog,b=y.signOutDialog,v=this.state.snackbar;return o?i.a.createElement(d.a,null,i.a.createElement(te.MuiThemeProvider,{theme:Fn},i.a.createElement("div",{style:{minHeight:"100vh",backgroundColor:"dark"===Fn.palette.type?"#303030":"#fafafa"}},i.a.createElement(ke,{title:qn,isSignedIn:u,isSigningUp:s,isSigningIn:l,onSignUpClick:this.showSignUpDialog,onSignInClick:this.showSignInDialog,onSettingsClick:this.showSettingsDialog,onSignOutClick:this.showSignOutDialog}),u&&i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/",exact:!0,component:Ke}),i.a.createElement(p.a,{component:Ve})),!u&&i.a.createElement(Ae,{icon:i.a.createElement(oe.a,{className:e.emptyStateIcon,color:"action"}),title:"You are not signed in."}),!u&&i.a.createElement($e,{open:f.open,isSigningUp:s,signUp:this.signUp,onClose:this.closeSignUpDialog}),!u&&i.a.createElement(en,{open:C.open,isSigningIn:l,signIn:this.signIn,onClose:this.closeSignInDialog,onResetPasswordClick:this.showResetPasswordDialog}),!u&&i.a.createElement(tn,{open:E.open,isResettingPassword:c,resetPassword:this.resetPassword,onClose:this.closeResetPasswordDialog}),u&&i.a.createElement(Nn,{open:S.open,user:h,isVerifyingEmailAddress:m,colors:Ln,types:Bn,primaryColor:t,secondaryColor:a,type:r,onClose:this.closeSettingsDialog,onVerifyEmailAddressClick:this.verifyEmailAddress,onPrimaryColorChange:this.changePrimaryColor,onSecondaryColorChange:this.changeSecondaryColor,onTypeChange:this.changeType,onResetClick:this.resetTheme}),u&&i.a.createElement(Wn,{open:b.open,isSigningOut:g,signOut:this.signOut,onClose:this.closeSignOutDialog}),i.a.createElement(ie.a,{autoHideDuration:v.autoHideDuration,message:v.message,open:v.open,onClose:this.closeSnackbar})))):null}},{key:"componentDidMount",value:function(){var e=this,n=JSON.parse(localStorage.getItem("theme"));n&&this.updateTheme(n),this.removeAuthObserver=h.a.auth().onAuthStateChanged(function(n){e.setState({isAuthReady:!0,isSignedIn:!!n,user:n})})}},{key:"componentWillUnmount",value:function(){this.removeAuthObserver()}}]),n}(a.Component),Gn=Object(te.withStyles)(function(e){return{emptyStateIcon:{fontSize:"".concat(12*e.spacing.unit,"px")}}})(zn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[209,2,1]]]);
//# sourceMappingURL=main.481b0187.chunk.js.map