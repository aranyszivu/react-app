(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(21),l=a.n(i),s=a(10),o=a(11),c=a(14),p=a(13),d=n.a.createContext(),m=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={lang:"en"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d.Provider,{value:{state:this.state,toggleLang:function(){e.setState({lang:"en"===e.state.lang?"fr":"en"})}}},this.props.children)}}]),a}(r.Component),u=function(){return n.a.createElement("div",null,n.a.createElement("div",{style:{textAlign:"right",margin:"10px 40px 0px 0px"}},n.a.createElement("img",{src:"/react-app/resources/images/avatar.png",style:{width:"40px",display:"inline",verticalAlign:"middle"}}),n.a.createElement("p",{style:{display:"inline",padding:"0px 10px"}},n.a.createElement("b",null,"YourUserName"))),n.a.createElement("div",{style:{textAlign:"right",margin:"10px 40px"}},n.a.createElement("img",{src:"/react-app/resources/images/bell.png",alt:"Favourites:",style:{opacity:"0.7",width:"20px",padding:"0px 5px",display:"inline"}}),n.a.createElement("p",{style:{padding:"0px 5px 0px 0px",display:"inline"}},0)," ",n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("img",{src:"/react-app/resources/images/mail.png",alt:"Favourites:",style:{opacity:"0.7",width:"20px",padding:"0px 5px",display:"inline"}}),n.a.createElement("p",{style:{display:"inline",margin:"0px 5px 0px 0px"}},0)),n.a.createElement("div",{style:{textAlign:"right",padding:"10px 40px 0px 0px"}},n.a.createElement(d.Consumer,null,(function(e){return n.a.createElement("button",{onClick:e.toggleLang},"en"===e.state.lang?"FR":"EN")}))))},g=(a(28),a(12)),x=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"clickable",style:{width:"auto",height:"100%",display:"inline-block",alignContent:"middle",backgroundColor:"#bbbbbb",border:"1px solid #999999",margin:"0px 0px 0px 248px"}},n.a.createElement(g.b,{to:"/",style:{textDecoration:"none",color:"inherit"}},n.a.createElement(d.Consumer,null,(function(e){return n.a.createElement("h3",{style:{margin:"10px 10px 13px 10px"}},"en"===e.state.lang?"Home":"Accueil")})))))},h=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"hdrWrapper",style:{display:"block",width:"100vw",height:"auto",backgroundColor:"#DDDDDD",padding:"0"}},n.a.createElement("div",{id:"hdrBodyWrapper",style:{width:"100%",overflow:"auto"}},n.a.createElement("div",{id:"hdrSplashWrapper",style:{float:"left"}},n.a.createElement("img",{src:"/react-app/resources/images/sitelogo.png",style:{verticalAlign:"middle",width:"130px",margin:"20px",display:"inline"}}),n.a.createElement("div",{style:{display:"inline-block"}},n.a.createElement(d.Consumer,null,(function(e){return n.a.createElement("h2",{style:{fontSize:"300%"}},"en"===e.state.lang?"Amateur Hour":"Heure Amateur")})))),n.a.createElement("div",{id:"hdrAccountWrapper",style:{float:"right",width:"300px",height:"175px",backgroundColor:"#EEEEEE"}},n.a.createElement(u,null))),n.a.createElement("div",{id:"hdrNavbarWrapper",style:{width:"100%",height:"50px",backgroundColor:"#AAAAAA",margin:"0",padding:"0"}},n.a.createElement(x,null)))}}]),a}(r.Component),E=a(8),y=a(7),f=a(6),b=function(e){return n.a.createElement("div",{style:{display:"inline-block",width:"30%",height:"auto",padding:"10px"}},n.a.createElement(g.b,{to:"/work/".concat(e.item.postid),style:{textDecoration:"none",color:"inherit"}},n.a.createElement("div",{style:{backgroundColor:"#DDDDDD",border:"5px solid #EAEAEA",padding:"5px",textAlign:"center",cursor:"pointer"}},n.a.createElement("img",{src:"/react-app"+e.item.thumbUrl,alt:e.item.desc,style:{width:"50%"}}),n.a.createElement("div",{style:{border:"2px solid #cccccc",backgroundColor:"#e5e5e5",margin:"5px 30px",padding:"-10px"}},n.a.createElement("p",{style:{fontSize:"125%",fontStyle:"bold"}},e.item.title),n.a.createElement("p",null,n.a.createElement("i",null,function(){var t;return null!==(t=y.find((function(t){return t.uid===e.item.user})).username)&&void 0!==t?t:""}())),n.a.createElement("div",{style:{padding:"0px 0px 10px 0px"}},n.a.createElement("img",{src:"/react-app/resources/images/heart.png",alt:"Favourites:",style:{opacity:"0.7",width:"20px",padding:"0px 5px",display:"inline"}}),n.a.createElement("p",{style:{padding:"0px 5px 0px 0px",display:"inline"}},e.item.favs),n.a.createElement("img",{src:"/react-app/resources/images/comment.png",alt:"Comments:",style:{opacity:"0.7",width:"20px",padding:"0px 5px",display:"inline"}}),n.a.createElement("p",{style:{display:"inline"}},function(){var t=e.item.postid,a=0;return f.forEach((function(e){e.postid===t&&a++})),a}()))))))};var v=function(e){var t=e.page,a=e.maxItems;return n.a.createElement("div",null,function(e){for(var t=e*a-a,r=[],n=t;t+a>n;n++)r.push(E[n]);return r}(t).map((function(e){return void 0!==e?n.a.createElement(b,{key:e.postid,item:e}):""})))},w=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={page:1,maxItems:6},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=function(){e.setState({page:e.state.page+1})},a=this.state.page!==Math.floor(E.length/this.state.maxItems)+1,r=function(){e.setState({page:e.state.page-1})},i=1!==this.state.page;return n.a.createElement("div",{id:"glryWrapper",style:{display:"block",width:"100%",backgroundColor:"#444444",padding:"0px 300px 50px 250px"}},n.a.createElement("div",{id:"glryBlock",style:{width:"70%",height:"auto",backgroundColor:"#eeeeee",padding:"0px 0px 0px 60px"}},n.a.createElement(v,{page:this.state.page,maxItems:this.state.maxItems})," ",n.a.createElement("br",null),n.a.createElement("div",{id:"buttonPanel",style:{textAlign:"center",padding:"10px"}},n.a.createElement(d.Consumer,null,(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:r,disabled:!i},"en"===e.state.lang?"Previous":"Ant\xe9rieur"),n.a.createElement("button",{onClick:t,disabled:!a},"en"===e.state.lang?"Next":"Prochain"))})))))}}]),a}(r.Component),k=function(e){var t=e.work;function a(e){return y.find((function(t){return t.uid===e}))}return n.a.createElement("div",{style:{margin:"10px 0px",padding:"10px",border:"3px solid #cccccc",backgroundColor:"#DDDDDD",overflow:"auto"}},n.a.createElement("div",{style:{float:"left",width:"auto",textAlign:"left"}},n.a.createElement("div",{style:{display:"inline-block",width:"auto",height:"100%"}},n.a.createElement("img",{src:"/react-app"+a(t.user).iconUrl,style:{width:"60px",display:"inline"}}),n.a.createElement("p",{style:{margin:"5px"}},n.a.createElement("b",null,a(t.user).username))),n.a.createElement("div",{style:{display:"inline-block",width:"100px",height:"auto"}},n.a.createElement("img",{src:"/react-app/resources/images/heart.png",alt:"Favourites:",style:{opacity:"0.7",width:"20px",padding:"0px 5px",display:"inline"}}),n.a.createElement("p",{style:{padding:"0px 5px 0px 0px",display:"inline"}},t.favs)," ",n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("img",{src:"/react-app/resources/images/comment.png",alt:"Comments:",style:{opacity:"0.7",width:"20px",padding:"0px 5px",display:"inline"}}),n.a.createElement("p",{style:{display:"inline"}},function(){var e=0;return f.forEach((function(a){a.postid===t.postid&&e++})),e}()))),n.a.createElement("div",{style:{float:"right",display:"flex",margin:"10px",padding:"10px",backgroundColor:"#eeeeee",textAlign:"left"}},n.a.createElement("p",{style:{width:"500px",margin:"0"}},n.a.createElement("i",null,t.desc))))},C=function(e){function t(e,t,a){var r={},n=new Date;r.postid=e,r.userid=t,r.commenttext=a,r.postedDate=n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate(),f.push(r)}return n.a.createElement("div",{style:{margin:"10px 0px 0px 0px"}},n.a.createElement("textarea",{id:"commentTextPanel",style:{verticalAlign:"middle",marginRight:"10px"}}),n.a.createElement(d.Consumer,null,(function(e){return n.a.createElement("button",{onClick:t("1","1","1")},"en"===e.state.lang?"Post":"Poster")})))},D=function(e){function t(){f.findIndex((function(t){return t.postid===e.comment.postid&&t.userid===e.comment.userid}));l.visibility="hidden"}var a=y.find((function(t){return t.uid===e.comment.userid})),r=a.username,i=a.iconUrl,l={margin:"5px 20px",padding:"10px",backgroundColor:"#cccccc"},s={float:"right",visibility:"hidden"};return"00000006"===e.comment.userid&&(s.visibility="auto"),n.a.createElement("div",{style:{margin:"5px 20px",padding:"10px",backgroundColor:"#cccccc"}},n.a.createElement("div",{style:{backgroundColor:"#dddddd",border:"3px solid #aaaaaa",margin:"0px 0px 10px 0px",textAlign:"left",padding:"10px"}},n.a.createElement("p",{style:{margin:"0"}},e.comment.commenttext)),n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("img",{src:"/react-app"+i,style:{width:"40px",display:"inline",verticalAlign:"middle"}}),n.a.createElement("p",{style:{display:"inline",padding:"0px 10px"}},n.a.createElement("b",null,r)),n.a.createElement("div",{style:s},n.a.createElement(d.Consumer,null,(function(e){return n.a.createElement("button",{onClick:t()},"en"===e.state.lang?"Delete":"Supprimer")})))))},A=function(e){return console.log(e),n.a.createElement("div",{style:{margin:"10px 0px",padding:"10px",border:"3px solid #cccccc",backgroundColor:"#e5e5e5"}},n.a.createElement(C,null),n.a.createElement("br",null),f.map((function(t){return t.postid===e.workId?n.a.createElement(D,{comment:t}):""})))},U=function(e){var t=E.find((function(t){return t.postid===Number(e.match.params.workid)})),a=y.find((function(e){return e.uid===t.user}));return n.a.createElement("div",{style:{display:"block",width:"100%",backgroundColor:"#444444",padding:"0px 300px 50px 250px"}},n.a.createElement("div",{style:{width:"70%",height:"auto",backgroundColor:"#eeeeee",padding:"30px",textAlign:"center"}},n.a.createElement("h3",{style:{fontSize:"200%"}},t.title),n.a.createElement("img",{src:"/react-app"+t.imgUrl,alt:t.title}),n.a.createElement("div",{id:"contentWrapper",style:{padding:"0px 200px"}},n.a.createElement(k,{work:t,author:a}),n.a.createElement(A,{workId:t.postid}))))},O=a(1);var j=function(){return n.a.createElement(g.a,null,n.a.createElement(m,null,n.a.createElement("div",{style:{width:"100%",overflow:"hidden"}},n.a.createElement(h,null),n.a.createElement(O.a,{path:["/gallery","/","/react-app"],exact:!0,component:w}),n.a.createElement(O.a,{path:"/work/:workid",exact:!0,component:U}))))};var S=function(){return n.a.createElement("div",{className:"App",style:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",backgroundColor:"#444444"}},n.a.createElement(j,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"postid":2,"userid":"00000001","commenttext":"I am commenting!","postedDate":"2020-02-03"},{"postid":2,"userid":"00000001","commenttext":"So am I!","postedDate":"2020-02-03"},{"postid":2,"userid":"00000004","commenttext":"Third","postedDate":"2020-02-03"},{"postid":2,"userid":"00000003","commenttext":"This sucks","postedDate":"2020-02-03"},{"postid":2,"userid":"00000006","commenttext":"I commented this!","postedDate":"2020-02-03"}]')},7:function(e){e.exports=JSON.parse('[{"uid":"00000001","username":"JohnDoe","followers":2,"joindate":"2020-01-24","groups":[],"iconUrl":"/resources/images/avatar.png"},{"uid":"00000002","username":"JaneDoe","followers":25,"joindate":"2020-02-20","groups":[],"iconUrl":"/resources/images/avatar.png"},{"uid":"00000003","username":"LaceholderP","followers":233,"joindate":"2019-12-24","groups":[],"iconUrl":"/resources/images/avatar.png"},{"uid":"00000004","username":"Fella","followers":2212,"joindate":"2019-08-12","groups":[],"iconUrl":"/resources/images/avatar.png"},{"uid":"00000005","username":"OrdinaryGuy","followers":25,"joindate":"2018-09-16","groups":[],"iconUrl":"/resources/images/avatar.png"},{"uid":"00000006","username":"YourUsername","followers":90,"joindate":"2018-02-16","groups":[],"iconUrl":"/resources/images/avatar.png"}]')},8:function(e){e.exports=JSON.parse('[{"postid":1,"title":"Miscellaneous","desc":"Description Goes Here","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000004","favs":0},{"postid":2,"title":"Another Work","desc":"Another masterpiece","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000004","favs":0},{"postid":3,"title":"Holder of a Place","desc":"Content of a description would typically be found here. Blah blah blah blah blah.","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000004","favs":0},{"postid":4,"title":"Canned Post","desc":"Some more info","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000005","favs":0},{"postid":5,"title":"Title Required","desc":"Description Goes Here","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000005","favs":0},{"postid":6,"title":"Another One","desc":"Description Goes Here","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000002","favs":0},{"postid":7,"title":"Last Canned Response","desc":"Description Goes Here","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000001","favs":0},{"postid":8,"title":"I Leed","desc":"Description Goes Here","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000003","favs":0},{"postid":9,"title":"One More Title","desc":"Description Goes Here","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000004","favs":0},{"postid":10,"title":"OK, One more again","desc":"Description Goes Here","imgUrl":"/resources/images/artwork.png","thumbUrl":"/resources/images/thumb.png","user":"00000002","favs":0}]')}},[[23,1,2]]]);
//# sourceMappingURL=main.84e815ec.chunk.js.map