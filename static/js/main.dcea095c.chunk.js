(this.webpackJsonpbasic6=this.webpackJsonpbasic6||[]).push([[0],{61:function(t,e,a){},66:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var r=a(4),n=a(0),i=a.n(n),s=a(8),o=a.n(s),l=(a(61),a(23)),c=a(24),h=a(13),p=a(27),d=a(26),u=a(12),f=a(46),g=a.n(f),b=a(48),m=a.n(b),y=a(99),x=a(98),j=a(100),S=a(68);var v,O,C,w,N=function(t){return"@media screen and (max-width : ".concat(t,"px)")},I={"@global":{".MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:function(t){return t.isNight?"2px solid rgba(255, 255, 255, 0.87)":"2px solid rgba(0, 0, 0, 0.87)"}},".MuiInput-underline::before":{borderColor:function(t){return t.isNight?"#fff":"#000"}},".MuiInputBase-root":{color:function(t){return t.isNight?"#fff":"#000"}},".MuiSvgIcon-root":{color:function(t){return t.isNight?"#fff":"#000"}}},nav_root:Object(u.a)({position:"relative",width:"100%",height:"60px",padding:"0 20px",display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",background:function(t){return t.isNight?"#000":"#fff"},boxShadow:function(t){return t.isNight?"0 5px 10px #fff2":"0 10px 10px #0002"},zIndex:1},N("400"),{padding:"0 10px"}),leftContainer:{position:"relative",display:"flex",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row","& h1":(v={marginRight:"20px",color:function(t){return t.isNight?"#fff":"#000"},fontFamily:"Russo One, sans-serif",letterSpacing:"4px"},Object(u.a)(v,N("500"),{fontSize:"16px"}),Object(u.a)(v,N("375"),{fontSize:"14px",marginRight:"10px"}),Object(u.a)(v,N("330"),{fontSize:"12px"}),v),"& svg":Object(u.a)({marginRight:"10px",color:function(t){return t.isNight?"#fff":"#000"}},N("375"),{marginRight:"5px"})}},k=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props.classes;return Object(r.jsxs)("nav",{className:t.nav_root,children:[Object(r.jsxs)("div",{className:t.leftContainer,children:[Object(r.jsx)("h1",{children:"Tic Tac Toe"}),this.props.isNight?Object(r.jsx)(g.a,{}):Object(r.jsx)(m.a,{}),Object(r.jsx)(y.a,{checked:this.props.isNight,onChange:this.props.handleChange,name:"isNight"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(x.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.props.playerSymbol,onChange:this.props.handleSelectChange,children:[Object(r.jsx)(j.a,{value:"X",children:"X(Cross)"}),Object(r.jsx)(j.a,{value:"O",children:"O(Nought)"})]})})]})}}]),a}(n.Component),P=Object(S.a)(I)(k),E=a(97),A=(a(66),{"@global":{".table":{margin:"50px auto 0",width:"300px",height:"306.5px",position:"relative"},table:{position:"relative",width:"300px",height:"300px",background:" transparent"},"table tr":{position:"relative",width:"100%",height:"100px",border:"none"},"table tr td":{position:"relative",height:"100px",width:"100px",color:function(t){return t.isNight?"#fff":"#000"},textAlign:"center",fontSize:"40px",fontFamily:"srif"},"table tr:nth-child(1) td":{borderBottom:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"table tr:nth-child(3) td":{borderTop:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"table tr td.right":{borderRight:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"table tr td.left":{borderLeft:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"::placeholder":{color:function(t){return t.isNight?"#fff7":"#0007"}},".MuiButtonBase-root":(O={},Object(u.a)(O,N("480"),{fontSize:"14px"}),Object(u.a)(O,N("410"),{fontSize:"11px"}),Object(u.a)(O,N("330"),{fontSize:"10px"}),O),".span":{background:function(t){return t.result===t.playername?"#32CD32":"#f00"},zIndex:"10"},".help":{color:function(t){return t.result===t.playername?"#32CD32":"#f00"}}},container:{position:"relative",width:"100%",height:"calc(100vh - 60px)",background:function(t){return t.isNight?"#000":"#fff"},padding:"10px 0"},formContainer:(w={position:"relative",width:"80%",margin:"20px auto 0",padding:"25px 10%",background:function(t){return t.isNight?"#fff8":"#0002"},textAlign:"center"},Object(u.a)(w,N("1105"),{padding:"20px"}),Object(u.a)(w,N("901"),{width:"95%"}),Object(u.a)(w,N("432"),{padding:"20px 10px"}),Object(u.a)(w,"& h1",(C={},Object(u.a)(C,N("731"),{fontSize:"16px"}),Object(u.a)(C,N("432"),{fontSize:"14px",marginRight:"10px"}),C)),w),topContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"10px","& h1":{marginRight:"20px",textTransform:"uppercase",fontFamily:"Poppins, sans-serif"}},bottomContainer:{position:" relative",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-end","& input":Object(u.a)({background:"none",border:"none",outline:"none",borderBottom:"2px solid #f50057",height:"36px",padding:"4px 15px",marginRight:"20px",fontSize:"18px",width:"250px",fontFamily:"Poppins, sans-serif"},N("480"),{width:"fit-content",fontSize:"11px",padding:"4px 8px",color:"red"})},btn:{margin:"0 15px"},btnStart:Object(u.a)({},N("330"),{padding:"5px 10px"}),select:{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"flex-end",marginTop:"15px","& h2":Object(u.a)({marginRight:"20px"},N("731"),{fontSize:"20px"})}}),R=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"geyStyle",value:function(t){for(var e={position:"absolute"},a=0;a<3;a++)t[a][0]===t[a][1]&&t[a][1]===t[a][2]&&""!==t[a][0]&&(e.height="3px",e.width="300px",e.left="0px",e.top=String(100*a+48.5+2*a)+"px",e.transformOrigin="left",e.animation="aniX 2s linear forwards",e.transform="scaleX(0)");for(var r=0;r<3;r++)t[0][r]===t[1][r]&&t[1][r]===t[2][r]&&""!==t[0][r]&&(e.width="3px",e.height="306.5px",e.top="0px",e.left=String(100*r+48.5)+"px",e.transformOrigin="top",e.animation="aniY 2s linear forwards",e.transform="scaleY(0)");return t[0][0]===t[1][1]&&t[1][1]===t[2][2]&&""!==t[0][0]&&(e.width="3px",e.height="425px",e.left="0",e.transformOrigin="top",e.animation="aniXY 2s linear forwards",e.transform="scaleY(1) rotate(-44deg)"),t[0][2]===t[1][1]&&t[1][1]===t[2][0]&&""!==t[1][1]&&(e.width="3px",e.height="0px",e.right=0,e.transformOrigin="top",e.animation="aniXY 2s linear forwards",e.transform="scaleY(1) rotate(44deg)"),e}},{key:"render",value:function(){for(var t=this,e=this.props.classes,a=[],n=function(e){a.push(Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"right ".concat(t.props.arr.includes("".concat(e,"-0"))&&"help"),onClick:function(){return t.props.tdClick("".concat(e,"-0"))},children:t.props.board[e][0]},"".concat(e,"-0")),Object(r.jsx)("td",{className:"con ".concat(t.props.arr.includes("".concat(e,"-1"))&&"help"),onClick:function(){return t.props.tdClick("".concat(e,"-1"))},children:t.props.board[e][1]},"".concat(e,"-1")),Object(r.jsx)("td",{className:"left ".concat(t.props.arr.includes("".concat(e,"-2"))&&"help"),onClick:function(){return t.props.tdClick("".concat(e,"-2"))},children:t.props.board[e][2]},"".concat(e,"-2"))]},e))},i=0;i<3;i++)n(i);return Object(r.jsxs)("div",{className:e.container,children:[this.props.isStartPlay?Object(r.jsxs)("div",{className:e.formContainer,children:[this.props.gameEnd?"tie"===this.props.result?Object(r.jsx)("h1",{style:{marginBottom:"10px"},children:"Match Tie !!"}):Object(r.jsxs)("h1",{style:{marginBottom:"10px"},children:[this.props.result," : Winner \ud83d\udd25\ud83d\udd25\ud83d\udd25"]}):Object(r.jsxs)("h1",{style:{marginBottom:"10px"},children:[this.props.currentPlayer," : IT's YOUR TURN"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(E.a,{style:{fontFamily:"Poppins, sans-serif"},variant:"contained",color:"secondary",className:e.btn,onClick:this.props.restart,children:"RESTART"}),this.props.gameEnd?null:Object(r.jsx)(E.a,{style:{fontFamily:"Poppins, sans-serif"},variant:"contained",color:"primary",className:e.btn,onClick:this.props.quit,children:"QUIT!"})]})]}):Object(r.jsxs)("div",{className:e.formContainer,children:[Object(r.jsxs)("div",{className:e.topContainer,children:[Object(r.jsx)("h1",{children:"Do you want to give first move?"}),Object(r.jsx)(y.a,{checked:this.props.playerStart,onChange:this.props.handleChangeplayerStart,name:"playerStart"})]}),Object(r.jsx)("div",{className:e.bottomContainer,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",placeholder:"Please enter your name ",value:this.props.playername,onChange:this.props.handleInputChange}),Object(r.jsx)(E.a,{variant:"contained",color:"secondary",onClick:this.props.startPlay,className:e.btnStart,style:{fontFamily:"Poppins, sans-serif"},children:"Start Play!"})]})}),Object(r.jsxs)("div",{className:e.select,children:[Object(r.jsx)("h2",{children:"Level  : "}),Object(r.jsxs)(x.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.props.level,onChange:this.props.handleLevel,children:[Object(r.jsx)(j.a,{value:"easy",children:"Easy"}),Object(r.jsx)(j.a,{value:"hard",children:"Hard"})]})]})]}),this.props.isStartPlay?Object(r.jsxs)("div",{className:"table",children:["tie"!==this.props.result&&""!==this.props.result?Object(r.jsx)("span",{className:"span spanActive",style:this.geyStyle(this.props.board)}):null,Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{children:a})})]}):null]})}}]),a}(n.Component),T=Object(S.a)(A)(R);function z(t,e){return t<e?t:e}function B(t,e){for(var a=0;a<3;a++){if(t[a][0]===e&&t[a][1]===e&&t[a][2]===e)return!0;if(t[0][a]===e&&t[1][a]===e&&t[2][a]===e)return!0}return t[0][0]===e&&t[1][1]===e&&t[2][2]===e||t[0][2]===e&&t[1][1]===e&&t[2][0]===e}function L(t){for(var e=0;e<3;e++)for(var a=0;a<3;a++)if(""===t[e][a])return!1;return!0}function M(t,e,a){return t===e&&e===a&&""!==t}function X(t,e,a,r,n,i){var s,o,l=function(t){for(var e=null,a=0;a<3;a++)M(t[a][0],t[a][1],t[a][2])&&(e=t[a][0]);for(var r=0;r<3;r++)M(t[0][r],t[1][r],t[2][r])&&(e=t[0][r]);M(t[0][0],t[1][1],t[2][2])&&(e=t[0][0]),M(t[2][0],t[1][1],t[0][2])&&(e=t[2][0]);for(var n=0,i=0;i<3;i++)for(var s=0;s<3;s++)""===t[i][s]&&n++;return null===e&&0===n?"tie":e}(t);if(null!==l)return i[l];if(a){for(var c=-1/0,h=0;h<3;h++)for(var p=0;p<3;p++)if(""===t[h][p]){t[h][p]=r;var d=X(t,e+1,!1,r,n,i);t[h][p]="",c=(s=d)>(o=c)?s:o}return c}for(var u=1/0,f=0;f<3;f++)for(var g=0;g<3;g++)if(""===t[f][g]){t[f][g]=n;var b=X(t,e+1,!0,r,n,i);t[f][g]="",u=z(b,u)}return u}function F(t){for(var e=0;e<3;e++){if(t[e][0]===t[e][1]&&t[e][1]===t[e][2]&&""!==t[e][0])return["".concat(e,"-0"),"".concat(e,"-1"),"".concat(e,"-2")];if(t[0][e]===t[1][e]&&t[1][e]===t[2][e]&&""!==t[0][e])return["0-".concat(e),"1-".concat(e),"2-".concat(e)]}return t[0][0]===t[1][1]&&t[1][1]===t[2][2]&&""!==t[0][0]?["0-0","1-1","2-2"]:t[0][2]===t[1][1]&&t[1][1]===t[2][0]&&""!==t[1][1]?["0-2","1-1","2-0"]:void 0}var Y=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var r;Object(l.a)(this,a);var n=null===JSON.parse(window.localStorage.getItem("isNight"))||JSON.parse(window.localStorage.getItem("isNight"));return(r=e.call(this,t)).state={isNight:n,playerSymbol:window.localStorage.getItem("playerSymbol")||"X",board:r.makeInitialBoard(),isStartPlay:!1,playername:window.localStorage.getItem("playername")||"Player 1",playerStart:JSON.parse(window.localStorage.getItem("playerStart"))||!1,gameEnd:!1,result:"",currentPlayer:"",level:"easy",arr:[]},r.handleChange=r.handleChange.bind(Object(h.a)(r)),r.handleSelectChange=r.handleSelectChange.bind(Object(h.a)(r)),r.handleInputChange=r.handleInputChange.bind(Object(h.a)(r)),r.handleChangeplayerStart=r.handleChangeplayerStart.bind(Object(h.a)(r)),r.startPlay=r.startPlay.bind(Object(h.a)(r)),r.tdClick=r.tdClick.bind(Object(h.a)(r)),r.gameStart=r.gameStart.bind(Object(h.a)(r)),r.makeAImove=r.makeAImove.bind(Object(h.a)(r)),r.restart=r.restart.bind(Object(h.a)(r)),r.quit=r.quit.bind(Object(h.a)(r)),r.handleLevel=r.handleLevel.bind(Object(h.a)(r)),r}return Object(c.a)(a,[{key:"quit",value:function(){this.setState({gameEnd:!0,result:"AI PLAYER"})}},{key:"handleLevel",value:function(t){this.setState({level:t.target.value})}},{key:"restart",value:function(){this.setState({playerSymbol:window.localStorage.getItem("playerSymbol"),board:this.makeInitialBoard(),isStartPlay:!1,playername:window.localStorage.getItem("playername"),playerStart:JSON.parse(window.localStorage.getItem("playerStart")),gameEnd:!1,result:"",arr:[]})}},{key:"makeAImove",value:function(){var t=this;if(!this.state.playerStart&&""===this.state.result&&!this.state.gameEnd){var e,a,r,n,i=this.state.board.slice(),s=-1/0;n="X"===(e="X"===this.state.playerSymbol?"O":"X")?{X:10,O:-10,tie:0}:{X:-10,O:10,tie:0};for(var o=0;o<3;o++)for(var l=0;l<3;l++)""===i[o][l]&&(i[o][l]=e,a=X(i,0,!1,e,this.state.playerSymbol,n),console.log(a),i[o][l]="",a>s&&(s=a,r={x:o,y:l}));var c=this.state.board.slice();c[r.x][r.y]=e,this.setState({board:c,currentPlayer:this.state.playername,playerStart:!1},(function(){B(t.state.board,e)?t.setState({gameEnd:!0,result:"AI player"},(function(){var e=F(t.state.board);t.setState({arr:e})})):L(t.state.board)?t.setState({gameEnd:!0,result:"tie"}):t.setState({playerStart:!0})}))}}},{key:"gameStart",value:function(){var t=this;!1===this.state.playerStart&&setTimeout((function(){return t.makeAImove()}),Math.round(1e3*Math.random()))}},{key:"tdClick",value:function(t){var e=this;if(this.state.playerStart&&""===this.state.result&&!this.state.gameEnd){var a=Number(t[0]),r=Number(t[2]);if(""===this.state.board[a][r]){var n=this.state.board;n[a][r]=this.state.playerSymbol,this.setState({board:n,currentPlayer:"AI Player",playerStart:!1},(function(){B(e.state.board,e.state.playerSymbol)?e.setState({result:e.state.playername,gameEnd:!0},(function(){var t=F(e.state.board);e.setState({arr:t})})):L(e.state.board)?e.setState({result:"tie",gameEnd:!0}):setTimeout((function(){return e.makeAImove()}),Math.round(1e3*Math.random()))}))}}}},{key:"makeInitialBoard",value:function(){for(var t=[],e=0;e<3;e++){for(var a=[],r=0;r<3;r++)a.push("");t.push(a)}return t}},{key:"handleChange",value:function(){var t=this;this.setState({isNight:!this.state.isNight},(function(){return window.localStorage.setItem("isNight",JSON.stringify(t.state.isNight))}))}},{key:"handleChangeplayerStart",value:function(t){var e=this;this.setState({playerStart:!this.state.playerStart},(function(){return window.localStorage.setItem("playerStart",JSON.stringify(e.state.playerStart))}))}},{key:"handleSelectChange",value:function(t){var e=this;this.state.isStartPlay||this.setState({playerSymbol:t.target.value},(function(){return window.localStorage.setItem("playerSymbol",e.state.playerSymbol)}))}},{key:"handleInputChange",value:function(t){this.setState({playername:t.target.value})}},{key:"startPlay",value:function(){window.localStorage.setItem("playername",this.state.playername),window.localStorage.setItem("playerSymbol",this.state.playerSymbol),window.localStorage.setItem("isNight",JSON.stringify(this.state.isNight)),""===this.state.playername?(window.localStorage.setItem("playername","Player 1"),this.setState({isStartPlay:!0,playername:"Player 1",currentPlayer:this.state.playerStart?"Player 1":"AI PLAYER!"},this.gameStart)):this.setState({isStartPlay:!0,currentPlayer:this.state.playerStart?this.state.playername:"AI PLAYER!"},this.gameStart)}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(P,{handleSelectChange:this.handleSelectChange,handleChange:this.handleChange,playerSymbol:this.state.playerSymbol,isNight:this.state.isNight}),Object(r.jsx)(T,{isNight:this.state.isNight,playername:this.state.playername,handleChangeplayerStart:this.handleChangeplayerStart,handleInputChange:this.handleInputChange,playerStart:this.state.playerStart,isStartPlay:this.state.isStartPlay,currentPlayer:this.state.currentPlayer,startPlay:this.startPlay,board:this.state.board,tdClick:this.tdClick,gameEnd:this.state.gameEnd,result:this.state.result,restart:this.restart,quit:this.quit,arr:this.state.arr,level:this.state.level,handleLevel:this.handleLevel})]})}}]),a}(n.Component),D=Object(S.a)({"@global":{"*":{padding:0,margin:0,boxSizing:"border-box"}}})(Y),J=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),r(t),n(t),i(t),s(t)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root")),J()}},[[67,1,2]]]);
//# sourceMappingURL=main.dcea095c.chunk.js.map