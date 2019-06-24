(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(70)},34:function(e,t,a){},52:function(e,t){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(27),r=a.n(s),c=(a(34),a(1)),l=a(5),i=a(6),m=a(8),d=a(7),u=a(9);var h=function(e){var t=e.search,a=e.handleSearch;return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group search"},o.a.createElement("input",{type:"search",className:"form-control",value:t,placeholder:"Enter filter for notes",onChange:a})))};var p=function(e){var t=e.name,a=e.id,n=e.tags,s=e.showTagInput,r=e.deleteNote,c=e.showNote,l=e.removeTag;return o.a.createElement("div",{className:"name"},o.a.createElement("div",{className:"item"},o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-lg note-name",disabled:!0},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm note-btn",name:"watch",id:a,onClick:function(e){return c(e,!0)}},o.a.createElement("i",{className:"fa fa-eye",id:a})),o.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-sm note-btn",name:"edit",id:a,onClick:function(e){return c(e,!1)}},o.a.createElement("i",{className:"fa fa-edit",id:a})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm note-btn",name:"trash",id:a,onClick:r},o.a.createElement("i",{className:"fa fa-trash-o",id:a}))),o.a.createElement("div",{className:"tags"},n.map(function(e,t){var n="tag-".concat(a,"-").concat(t);return o.a.createElement("div",{key:n},e,"\xa0",o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm note-btn",name:t,onClick:function(){return l(a,t)}},o.a.createElement("i",{className:"fa fa-times-circle",name:t})))}),o.a.createElement("button",{className:"btn btn-outline-info badge",type:"button",id:a,onClick:s},o.a.createElement("i",{className:"fa fa-plus",id:a}))))},b=a(28),f=a.n(b),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={scrollTop:0},a.divRef=o.a.createRef(),a.handleScroll=function(e){var t=e.target.scrollTop;a.setState({scrollTop:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state.scrollTop,t=this.props,a=t.tag,n=t.tags;!a&&n.length&&(this.divRef.current.scrollTop=e)}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.watch,n=e.name,s=e.text,r=e.tag,c=e.tags,l=e.closeNote,i=e.handleInput,m=e.handleSubmit,d=t?"modal show":"modal fade",u=c.join("|"),h=new RegExp(u,"g"),p=s.replace(h,"<mark>$&</mark>"),b=r?"Add new tag":"Add title of new note";return o.a.createElement("form",{className:d,tabIndex:"-1",role:"dialog",onSubmit:m,disabled:a},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",maxLength:"20",className:"form-control",name:"title",placeholder:b,value:n,onChange:i,disabled:a,required:!0}),!r&&o.a.createElement("div",{className:"container"},!!c.length&&o.a.createElement("div",{className:"backdrop",ref:this.divRef},o.a.createElement("div",{className:"highlights"},f()(p))),o.a.createElement("textarea",{name:"text",value:s,placeholder:"Add text of your note",onChange:i,onScroll:this.handleScroll,disabled:a,required:!0}))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-sm btn-secondary","data-dismiss":"modal",onClick:l},"Close"),o.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary",disabled:a},"Save")))))}}]),t}(n.Component);var N=function(e){var t=e.id,a=e.showNote;return o.a.createElement("button",{type:"button",className:"btn btn-primary add-new",id:t,onClick:function(e){return a(e,!1)}},"Add new note")};var v=function(){return o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))},w="https://notes-app-nyble.herokuapp.com/data",E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",showModal:!1,showId:0,watchMode:!1,nameNote:"",textNote:"",tag:!1,notes:[],loading:!0},a.deleteNote=function(e){var t=e.target.id,n=a.state.notes.filter(function(e,a){return!(a===parseInt(t,10))});a.setState({notes:n})},a.showNote=function(e,t){var n=e.target.id,o=a.state.notes;o.length>parseInt(n,10)?a.setState({showModal:!0,watchMode:t,showId:parseInt(n,10),nameNote:o[n].name,textNote:o[n].text}):a.setState({showModal:!0,watchMode:t,showId:parseInt(n,10),nameNote:"",textNote:""})},a.closeNote=function(){a.setState({showModal:!1,nameNote:"",textNote:"",tag:!1})},a.handleInput=function(e){var t=e.target,n=t.name,o=t.value;"title"===n&&a.setState({nameNote:o}),"text"===n&&a.setState({textNote:o})},a.handleSearch=function(e){var t=e.target.value;a.setState({search:t})},a.addNote=function(){var e=a.state,t=e.notes,n=e.showId,o=e.nameNote,s=e.textNote,r=s.match(/#[A-Za-z\u0410-\u042f\u0430-\u044f-]+/g)||[],l=n<t.length?t[n].tags:[],i=[].concat(Object(c.a)(r.map(function(e){return e.slice(1)})),Object(c.a)(l)),m=new Set(i);return{name:o,text:s,tags:Array.from(m)}},a.addTag=function(){var e=a.state,t=e.notes,n=e.showId,o=e.nameNote,s=t[n],r=s.tags,l=s.text;return{name:s.name,text:l,tags:-1===r.indexOf(o)?[].concat(Object(c.a)(r),[o]):Object(c.a)(r)}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.notes,o=t.showId,s=t.tag?a.addTag():a.addNote(),r=[].concat(Object(c.a)(n.slice(0,o)),[s],Object(c.a)(n.slice(o+1)));a.setState({showModal:!1,notes:r,tag:!1})},a.removeTag=function(e,t){var n=a.state.notes,o=n[parseInt(e,10)].tags.filter(function(e,a){return!(a===parseInt(t,10))}),s={name:n[parseInt(e,10)].name,text:n[parseInt(e,10)].text,tags:o},r=[].concat(Object(c.a)(n.slice(0,parseInt(e,10))),[s],Object(c.a)(n.slice(parseInt(e,10)+1)));a.setState({notes:r})},a.showTagInput=function(e){var t=e.target.id;a.setState({showModal:!0,watchMode:!1,showId:parseInt(t,10),nameNote:"",textNote:"",tag:!0})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(w).then(function(e){return e.json()}).then(function(t){var a=t[0].notes;e.setState({notes:a,loading:!1})}).catch(function(t){e.setState({loading:!1}),console.log("Saved data wasn't fetched. ".concat(t))})}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.notes;t.notes!==a&&fetch("".concat(w,"/1"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PUT",body:JSON.stringify({notes:a})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.notes,n=t.showModal,s=t.watchMode,r=t.showId,c=t.textNote,l=t.nameNote,i=t.tag,m=t.search,d=t.loading,u=a.map(function(e){return e.tags.join("#").indexOf(m.trim())}),b=a.filter(function(e,t){return u[t]>-1}),f=r<a.length?a[r].tags:[];return o.a.createElement("div",{className:"app"},o.a.createElement(h,{handleSearch:this.handleSearch,search:m}),o.a.createElement(N,{id:a.length,showNote:this.showNote}),d&&o.a.createElement(v,null),!d&&b.map(function(t,a){var n="note-".concat(a);return o.a.createElement(p,{name:t.name,id:a,tags:t.tags,key:n,deleteNote:e.deleteNote,showNote:e.showNote,removeTag:e.removeTag,showTagInput:e.showTagInput})}),o.a.createElement(g,{watch:s,show:n,name:l,text:c,handleInput:this.handleInput,handleSubmit:this.handleSubmit,closeNote:this.closeNote,tag:i,tags:f}))}}]),t}(n.Component);r.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7095ef0a.chunk.js.map