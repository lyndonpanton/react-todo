(window["webpackJsonpreact-todo"]=window["webpackJsonpreact-todo"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=n(1),i=n(2),s=n(4),d=n(3),u=n(5),h=function(e){return o.a.createElement("header",{style:{padding:"15px 0",backgroundColor:"#4488FF",color:"#FFFFFF"}},o.a.createElement("h1",{style:{margin:0,textAlign:"center",color:"#FFFFFF"}},e.name))},p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){n.setState({text:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.text&&(n.props.handleSubmit(n.state.text),n.setState({text:""}))},n.state={text:""},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"form",onSubmit:this.handleSubmit,style:{border:"#9A9A9A solid 1px"}},o.a.createElement("input",{type:"text",value:this.state.text,placeholder:"Add todo...",onChange:this.handleChange,style:{marginTop:"8px",border:"none",borderRadius:"30px",height:"100%",width:"100%",paddingRight:"11%",paddingLeft:"11%",textAlign:"center"}}))}}]),t}(o.a.Component),m=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleCheck=function(e,t){n.props.handleCheck(t)},n.handleDelete=function(e,t){n.props.handleDelete(t)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",border:"#DADADA solid 1px",padding:"8px 10px",textAlign:"center"},n={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"50%",width:"40px",height:"40px",backgroundColor:"#00CC00"},a=Object.assign({},n,{backgroundColor:"#FF0000",color:"#FFFFFF !important"}),l=this.props.todos.map((function(l,r){var c;return l.checked&&(c=Object.assign({},t,{opacity:.6,textDecoration:"line-through",color:"#CACACA"})),o.a.createElement("li",{key:r,style:c||t},o.a.createElement("button",{style:n,onClick:function(t){return e.handleCheck(t,r)}},"\u2713"),o.a.createElement("span",null,e.props.todos[r].value),o.a.createElement("button",{style:a,onClick:function(t){return e.handleDelete(t,r)}},"X"))}));return o.a.createElement("ul",{style:{listStyleType:"none",padding:0}},l)}}]),t}(o.a.Component),f=function(e){var t={flex:1,margin:"5px",border:"#800080 solid 1px",borderRadius:"0",backgroundColor:e.color,fontWeight:200,color:"#000000"};return o.a.createElement("button",{name:e.type,style:t,onClick:e.handleClick},e.type)},b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}},o.a.createElement(f,{handleClick:this.props.markAll,type:"Mark All",color:"#AAFFAA"}),o.a.createElement(f,{handleClick:this.props.unMarkAll,type:"Unmark All",color:"#FFDDFF"}),o.a.createElement(f,{handleClick:this.props.deleteMarked,type:"Delete Marked",color:"#AADDFF"}),o.a.createElement(f,{handleClick:this.props.deleteAll,type:"Delete All",color:"#FFA500"}))}}]),t}(o.a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).deleteAll=function(){n.setState({todos:[]})},n.deleteMarked=function(){var e=n.state.todos.filter((function(e,t){return!1===e.checked}));n.setState({todos:e})},n.handleCheck=function(e){var t=n.state.todos.map((function(t,n){return e!==n?t:{value:t.value,checked:!t.checked}}));n.setState({todos:t})},n.handleDelete=function(e){var t=n.state.todos.filter((function(t,n){return e!==n}));n.setState({todos:t})},n.handleSubmit=function(e){var t=n.state.todos.concat({value:e,checked:!1});n.setState({todos:t})},n.markAll=function(){var e=n.state.todos.map((function(e,t){return{value:e.value,checked:!0}}));n.setState({todos:e})},n.unMarkAll=function(){var e=n.state.todos.map((function(e,t){return{value:e.value,checked:!1}}));n.setState({todos:e})},n.state={name:"React Todo",todos:[]},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app",style:{fontFamily:"Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif"}},o.a.createElement(h,{name:this.state.name}),o.a.createElement(p,{handleSubmit:this.handleSubmit}),o.a.createElement(b,{deleteAll:this.deleteAll,deleteMarked:this.deleteMarked,markAll:this.markAll,unMarkAll:this.unMarkAll}),o.a.createElement(m,{todos:this.state.todos,handleCheck:this.handleCheck,handleDelete:this.handleDelete}))}}]),t}(o.a.Component);n(13);r.a.render(o.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0cb34aa8.chunk.js.map