(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(14),r=a.n(s),i=a(10),l=a.n(i),o=a(13),u=a(23),d=a(38),b=a(8),j=a(83),h=a(36),p=a(75),O=a(76),m=a(77),g=a(78),f=a(79),v=a(80),x=function(e,t,a){var c=Object(n.useState)([]),s=Object(b.a)(c,2),r=s[0],i=s[1],l=Object(n.useState)([]),o=Object(b.a)(l,2),u=o[0],d=o[1];return{UpdateInput:function(e){i(e.target.value)},getUrl:function(n){n.preventDefault();var c=Date.now(),s=new Date(c).toLocaleString(),l={url:r,date:s,favs:!1};i(""),d(e(r)),""===e(r)&&a(t.concat(l))},inpValue:r,errors:u,setErrors:d}};function w(e){return["https://www.youtube.com/watch?v=","https://vimeo.com/","https://youtu.be/"].some((function(t){return e.includes(t)}))||e.length>6&&e.length<12?"":"Sorry URL or ID is Incorrect"}var y=a(1),k=function(e){var t=e.urls,a=e.setUrls,n=x(w,t,a),c=n.UpdateInput,s=n.getUrl,r=n.inpValue,i=n.errors;return Object(y.jsx)("div",{children:Object(y.jsxs)(p.a,{onSubmit:s,children:[Object(y.jsxs)(O.a,{children:[Object(y.jsxs)(m.a,{className:"shadow",id:"Jumbotron",style:{background:"rgb(3, 3, 3)"},children:[Object(y.jsx)("h1",{className:"display-4",children:"Vimeo and YouTube Scrapper"}),Object(y.jsx)("hr",{className:"my-2"}),Object(y.jsx)("p",{className:"lead",children:"Place where You can store your favorites videos"})]}),Object(y.jsx)(g.a,{className:"shadow",value:r,onChange:c,bsSize:"lg",width:"100%",id:"urlInput",placeholder:"Enter VIMEO or YOUTUBE url or Video ID"}),i&&Object(y.jsx)("h2",{children:i})]}),Object(y.jsx)(f.a,{children:Object(y.jsx)(v.a,{className:'shadow class="btn btn-warning btn-sm"',block:!0,children:"Add"})})]})})},I=a(18),D=a(93),N=a(81),S=a(82),C=function(e){var t=e.buttonLabel,a=e.urls,c=e.setUrls,s=e.className,r=Object(n.useState)(!1),i=Object(b.a)(r,2),l=i[0],o=i[1],u=function(){return o(!l)},d=function(e){var t,n=JSON.parse(e.target.result),s=[],r=Object(I.a)(n);try{for(r.s();!(t=r.n()).done;){var i=t.value,l=Date.now(),o={url:i,date:new Date(l).toLocaleString(),favs:!1};s.push(o)}}catch(d){r.e(d)}finally{r.f()}c(a.concat(s)),u()};return Object(y.jsxs)("span",{children:[Object(y.jsx)(v.a,{className:s,id:"uplButton ",onClick:u,children:t}),Object(y.jsxs)(D.a,{isOpen:l,toggle:u,id:"uplModal",children:[Object(y.jsx)(N.a,{toggle:u,children:"Upload Video IDs or URLS from JSON File format ['id1', 'id2', 'etc']"}),Object(y.jsx)(S.a,{style:{minHeight:"10vh"},children:Object(y.jsx)(g.a,{type:"file",name:"file",id:"exampleFile",onChange:function(e){var t=new FileReader;t.onload=d,t.readAsText(e.target.files[0])},toggle:u})})]})]})},F=function(e){var t=e.FavsToggle,a=e.FavsDisplay,n=e.SortbyDate,c=e.Sort,s=e.DeleteAll,r=e.ChangeDisplay,i=e.displayType,l=e.urls,o=e.setUrls,u=e.FetchData;return Object(y.jsxs)(j.a,{className:"d-flex justify-content-center",id:"navBtnsCnt",children:[a?Object(y.jsx)(v.a,{className:"navpg shadow ml-1 btn-warning",style:{background:"lightblue"},onClick:function(){return t()},children:"Favorites"}):Object(y.jsx)(v.a,{className:"navpg m-1 btn-warning",onClick:function(){return t()},children:"Favorites"}),c?Object(y.jsx)(v.a,{className:"navpg m-1 btn-warning",style:{background:"lightblue"},onClick:function(){return n()},children:"Newest"}):Object(y.jsx)(v.a,{className:"navpg m-1 btn-warning",onClick:function(){return n()},children:"Oldest"}),Object(y.jsx)(v.a,{className:"navpg m-1 btn-warning",onClick:function(){return s()},children:"Delete All"}),i?Object(y.jsx)(v.a,{className:"navpg m-1 btn-warning",style:{background:"lightblue"},onClick:function(){return r()},children:"Display: List"}):Object(y.jsx)(v.a,{className:"navpg m-1 btn-warning",onClick:function(){return r()},children:"Display: Thumbs"}),Object(y.jsx)(C,{buttonLabel:"Upload",className:"navpg m-1 btn-warning",urls:l,setUrls:o,FetchData:u})]})},U=a(84),V=function(e){var t=e.display,a=e.OnDelete,n=e.UpdateFavs,c=e.favsDisplay,s=e.displayType,r=t.map((function(e){return Object(y.jsx)(M,{date:e.date,title:e.data?e.data.title:"",thumb:e.data?e.data.thumbnail:"https://via.placeholder.com/320x180?text=Incorrect ID",views:e.data?e.data.views:"",likes:e.data?e.data.likes:"",VideoId:e.data?"":e.ID,PlayBackId:e.ID,favs:e.favs,OnDelete:a,UpdateFavs:n,favsDisplay:c,url:e.data?e.url:"",ID:e.key},e.key)})),i=t.map((function(e){return Object(y.jsx)(Z,{date:e.date,title:e.data?e.data.title:"",thumb:e.data?e.data.thumbnail:"https://via.placeholder.com/320x180?text=Incorrect ID",views:e.data?e.data.views:"",likes:e.data?e.data.likes:"",VideoId:e.data?"":e.ID,PlayBackId:e.ID,favs:e.favs,OnDelete:a,UpdateFavs:n,favsDisplay:c,url:e.data?e.url:"",ID:e.key},e.key)}));return Object(y.jsx)("div",{className:"VideoWrapper",children:Object(y.jsx)(f.a,{children:Object(y.jsx)(U.a,{className:"d-flex justify-content-center",children:s?i:r})})})},B=a(19),L=a(87),P=a(88),T=a(89),A=a(90),J=a(85),E=a(86),z=function(e){var t=e.buttonLabel,a=e.className,c=e.videoId,s=e.url,r=e.Imgsrc,i=e.btn,l=e.id,o=Object(n.useState)(!1),u=Object(b.a)(o,2),d=u[0],j=u[1],h=function(){return j(!d)},p="https://www.youtube.com/embed/".concat(c),O="https://player.vimeo.com/video/".concat(c),m=/^\d+$/.test(s),g="";return g=s.includes("vimeo")||m?O:p,Object(y.jsxs)("div",{className:a,children:[i?Object(y.jsx)(v.a,{className:"btn btn-warning",id:l,style:{minWidth:"6vw"},onClick:h,children:t}):Object(y.jsx)(J.a,{className:"m-1 flex-grow-1 bd-highlight",top:!0,width:"100%",src:r,onClick:h,alt:"Card image cap",style:{cursor:"pointer"}}),c?Object(y.jsxs)(D.a,{isOpen:d,toggle:h,style:{minWidth:"80vw"},children:[Object(y.jsx)(N.a,{toggle:h}),Object(y.jsx)(S.a,{style:{minHeight:"80vh"},children:Object(y.jsx)("iframe",{frameBorder:"0",height:"550vh",width:"100%",title:"Video Player",src:g})}),Object(y.jsx)(E.a,{})]}):""]})},M=function(e){var t=e.title,a=e.thumb,n=e.views,c=e.favs,s=e.likes,r=e.OnDelete,i=e.date,l=e.VideoId,o=e.UpdateFavs,u=e.PlayBackId,d=e.url,b=e.ID;return Object(y.jsxs)(L.a,{className:"shadow m-1",id:"VideoCard",children:[Object(y.jsx)(z,{videoId:u,url:d,Imgsrc:a,btn:!1}),Object(y.jsxs)(P.a,{className:"m-1 bd-highlight",id:"cardBody",children:[t?Object(y.jsxs)(T.a,{tag:"h6",children:["TITLE: ",t]}):"",n?Object(y.jsxs)(A.a,{children:["Views: ",n]}):"",s?Object(y.jsxs)(A.a,{children:["Likes: ",s]}):"",l?Object(y.jsxs)(A.a,{children:["Sorry video id: ",Object(y.jsxs)("strong",{children:['"',l,'"']})," is incorrect"]}):"",i?Object(y.jsxs)(A.a,{children:["Added: ",i]}):""]}),Object(y.jsxs)(U.a,{form:!0,children:[t?Object(y.jsx)(f.a,{children:B.a?Object(y.jsx)(z,{buttonLabel:"Play",videoId:u,url:d,btn:!0}):""}):"",t?Object(y.jsx)(f.a,{children:c?Object(y.jsx)(v.a,{className:"btn btn-warning",style:{background:"lightblue"},onClick:function(){return o(i)},children:"Favorites"}):Object(y.jsx)(v.a,{className:"btn btn-warning",onClick:function(){return o(i)},children:"Favorites"})}):"",Object(y.jsx)(f.a,{children:t?Object(y.jsx)(v.a,{className:"btn btn-warning",onClick:function(){return r(b)},children:"Delete"}):Object(y.jsx)(v.a,{className:"btn btn-warning",style:{backgroundColor:"red"},onClick:function(){return r(b)},children:"Delete"})})]})]})},R=a(91),W=a(92),Y=a(22),H=a(37),Z=function(e){var t=e.title,a=e.favs,n=e.UpdateFavs,c=e.date,s=e.OnDelete,r=e.PlayBackId,i=e.url,l=e.ID;return Object(y.jsx)(R.a,{className:"shadow m-1",id:"ListItem",children:Object(y.jsxs)(W.a,{className:"d-flex bd-highlight",style:{background:"rgb(48, 48, 48)",minWidth:"80vw"},children:[t?Object(y.jsx)(z,{buttonLabel:t,id:"listItemBtn",className:"flex-grow-1 bd-highlight",videoId:r,url:i,btn:!0}):Object(y.jsx)(z,{buttonLabel:"Incorrect Video ID",id:"listItemBtn",className:"flex-grow-1 bd-highlight",videoId:"",url:"",btn:!0}),t?Object(y.jsx)(U.a,{children:i.includes("youtu")?Object(y.jsx)(Y.Icon,{icon:B.a,"data-icon":"line-md:image-twotone"}):Object(y.jsx)(Y.Icon,{icon:H.a})}):"",t?Object(y.jsx)("span",{children:a?Object(y.jsx)(v.a,{className:"shadow p-2 m-1 bd-highlight",style:{background:"lightblue"},onClick:function(){return n(c)},children:"Favorites"}):Object(y.jsx)(v.a,{className:"shadow p-2 m-1 bd-highlight",onClick:function(){return n(c)},children:"Favorites"})}):"",t?Object(y.jsx)(v.a,{className:"shadow p-2 m-1 bd-highlight",onClick:function(){return s(l)},children:"Delete"}):Object(y.jsx)(v.a,{className:"shadow p-2 m-1 bd-highlight",style:{background:"red"},onClick:function(){return s(l)},children:"Delete"})]})})},$=function(e){for(var t=e.videosPerPage,a=e.totalVideos,n=e.paginate,c=e.currentPage,s=[],r=1;r<=Math.ceil(a/t);r++)s.push(r);return Object(y.jsx)(j.a,{className:"d-flex justify-content-center",id:"paginCnt",children:s.map((function(e){return Object(y.jsx)("span",{children:c===e?Object(y.jsx)(v.a,{className:"m-2 btn-warning",onClick:function(){return n(e)},href:"!#",children:e}):Object(y.jsx)(v.a,{className:"m-2",onClick:function(){return n(e)},href:"!#",children:e})},e)}))})},q=a(17),G=a.n(q),K=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="AIzaSyC6crZwFj1dv0BJOd0JjoyZA0Amqtl8R7o",e.prev=1,e.next=4,G.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".concat(t,"&key=").concat(a));case 4:return n=e.sent,e.next=7,G.a.get("https://www.googleapis.com/youtube/v3/videos?part=statistics&id=".concat(t,"&key=").concat(a));case 7:return c=e.sent,s={title:n.data.items[0].snippet.title,thumbnail:n.data.items[0].snippet.thumbnails.medium.url,likes:c.data.items[0].statistics.likeCount,views:c.data.items[0].statistics.viewCount},e.abrupt("return",s);case 12:if(e.prev=12,e.t0=e.catch(1),!e.t0){e.next=16;break}return e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"3a3bdb617776994351b4ee7f79a99557",e.next=4,G.a.get("https://api.vimeo.com/videos/".concat(t),{headers:{Authorization:"Bearer ".concat("3a3bdb617776994351b4ee7f79a99557")}});case 4:return a=e.sent,n={title:a.data.name,thumbnail:a.data.pictures.sizes[2].link,likes:a.data.metadata.connections.likes.total,views:""},e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n,c,s,r,i,o,u,d,b,j,h,p,O,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=t,s=Object(I.a)(c),e.prev=3,s.s();case 5:if((r=s.n()).done){e.next=39;break}i=r.value,o=i.url,u="",d="",b=i.favs,j=/^\d+$/.test(o),e.t0=!0,e.next=e.t0===(o.length<13&&j)?15:e.t0===(o.length<13&&!j)?18:e.t0===(o.includes("youtu")&&o.length>30)?21:e.t0===(o.includes("youtu")&&o.length<30)?24:e.t0===o.includes("vimeo",0)?27:29;break;case 15:return d=Q(u=o),e.abrupt("break",29);case 18:return d=K(u=o),e.abrupt("break",29);case 21:return u=o.slice(o.search("=",0)+1,o.length),d=K(u),e.abrupt("break",29);case 24:return u=o.slice(o.search(".be",0)+4,o.length),d=K(u),e.abrupt("break",29);case 27:u=o.slice(o.search("com",0)+4,o.length),d=Q(u);case 29:return e.next=32,d;case 32:h=e.sent,p=i.date,O=parseInt(u,36)*Date.now(),m={data:h,url:o,date:p,ID:u,favs:b,key:O},n.push(m);case 37:e.next=5;break;case 39:e.next=44;break;case 41:e.prev=41,e.t1=e.catch(3),s.e(e.t1);case 44:return e.prev=44,s.f(),e.finish(44);case 47:a(n);case 48:case"end":return e.stop()}}),e,null,[[3,41,44,47]])})));return function(t,a){return e.apply(this,arguments)}}(),_=(a(72),function(){var e=JSON.parse(localStorage.getItem("urlsStore")),t=Object(n.useState)(e||[]),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),i=Object(b.a)(r,2),p=i[0],O=i[1],m=Object(n.useState)([]),g=Object(b.a)(m,2),f=g[0],v=g[1],x=Object(n.useState)(!1),w=Object(b.a)(x,2),I=w[0],D=w[1],N=Object(n.useState)(!1),S=Object(b.a)(N,2),C=S[0],U=S[1],B=Object(n.useState)(!1),L=Object(b.a)(B,2),P=L[0],T=L[1],A=Object(n.useState)(1),J=Object(b.a)(A,2),E=J[0],z=J[1],M=Object(n.useState)(6),R=Object(b.a)(M,1)[0];Object(n.useEffect)((function(){X(c,O),localStorage.clear(),window.localStorage.setItem("urlsStore",JSON.stringify(c))}),[c]);var W=function(){D(!I);var e=p.filter((function(e){return!0===e.favs}));v(p),O(I?f:e)},Y=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(h.onConfirm)({title:Object(y.jsx)("h3",{children:"Are you sure?"}),description:Object(y.jsx)("p",{children:"This process cannot be undone."}),onSubmit:function(){localStorage.clear(),s([]),O([])},onCancel:function(){}});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=E*R,Z=H-R,q=p.slice(Z,H);return Object(y.jsxs)(j.a,{id:"mainCnt",children:[Object(y.jsx)(k,{urls:c,setUrls:s}),Object(y.jsx)(F,{urls:c,setUrls:s,FavsToggle:W,FavsDisplay:I,SortbyDate:function(){U(!C),p.reverse()},Sort:C,DeleteAll:Y,ChangeDisplay:function(){T(!P)},displayType:P,FetchData:X}),Object(y.jsx)($,{videosPerPage:R,totalVideos:p.length,paginate:function(e){return z(e)},currentPage:E}),Object(y.jsx)(V,{display:q,displayType:P,OnDelete:function(e){var t=p.filter((function(t){return t.key!==e}));s(t),localStorage.clear(),window.localStorage.setItem("urlsStore",JSON.stringify(t))},UpdateFavs:function(e){var t=c.findIndex((function(t){return t.date===e})),a=Object(d.a)(c);a[t]=Object(u.a)(Object(u.a)({},a[t]),{},{favs:!a[t].favs}),s(a),localStorage.clear(),window.localStorage.setItem("urlsStore",JSON.stringify(a))},favsDisplay:W})]})});a(73);r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.1625d353.chunk.js.map