(this.webpackJsonpbasic6=this.webpackJsonpbasic6||[]).push([[0],{59:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var n=a(4),i=a(0),r=a.n(i),s=a(8),o=a.n(s),l=(a(59),a(23)),c=a(24),h=a(13),p=a(27),d=a(26),u=a(12),f=a(46),b=a.n(f),g=a(48),m=a.n(g),x=a(98),y=a(97),j=a(99),v=a(65);var S,O,C,k,N,I=function(t){return"@media screen and (max-width : ".concat(t,"px)")},P={"@global":{".MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:function(t){return t.isNight?"2px solid rgba(255, 255, 255, 0.87)":"2px solid rgba(0, 0, 0, 0.87)"}},".MuiInput-underline::before":{borderColor:function(t){return t.isNight?"#fff":"#000"}},".MuiInputBase-root":{color:function(t){return t.isNight?"#fff":"#000"}},".MuiSvgIcon-root":{color:function(t){return t.isNight?"#fff":"#000"}}},nav_root:Object(u.a)({position:"relative",width:"100%",height:"60px",padding:"0 20px",display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",background:function(t){return t.isNight?"#000":"#fff"},boxShadow:function(t){return t.isNight?"0 5px 10px #fff2":"0 10px 10px #0002"},zIndex:1},I("400"),{padding:"0 10px"}),leftContainer:{position:"relative",display:"flex",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row","& h1":(S={marginRight:"20px",color:function(t){return t.isNight?"#fff":"#000"},fontFamily:"Russo One, sans-serif",letterSpacing:"4px"},Object(u.a)(S,I("500"),{fontSize:"16px"}),Object(u.a)(S,I("375"),{fontSize:"14px",marginRight:"10px"}),Object(u.a)(S,I("330"),{fontSize:"12px"}),S),"& svg":Object(u.a)({marginRight:"10px",color:function(t){return t.isNight?"#fff":"#000"}},I("375"),{marginRight:"5px"})}},w=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props.classes;return Object(n.jsxs)("nav",{className:t.nav_root,children:[Object(n.jsxs)("div",{className:t.leftContainer,children:[Object(n.jsx)("h1",{children:"Tic Tac Toe"}),this.props.isNight?Object(n.jsx)(b.a,{}):Object(n.jsx)(m.a,{}),Object(n.jsx)(x.a,{checked:this.props.isNight,onChange:this.props.handleChange,name:"isNight"})]}),Object(n.jsx)("div",{children:Object(n.jsxs)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.props.playerSymbol,onChange:this.props.handleSelectChange,children:[Object(n.jsx)(j.a,{value:"X",children:"X(Cross)"}),Object(n.jsx)(j.a,{value:"O",children:"O(Nought)"})]})})]})}}]),a}(i.Component),E=Object(v.a)(P)(w),B=a(96),R={"@global":{table:{position:"relative",width:"300px",height:"300px",background:" transparent",margin:" 50px auto 0"},"table tr":{position:"relative",width:"100%",height:"100px",border:"none"},"table tr td":{position:"relative",height:"100px",width:"100px",color:function(t){return t.isNight?"#fff":"#000"},textAlign:"center",fontSize:"40px",fontFamily:"Montserrat, sans-serif"},"table tr:nth-child(1) td":{borderBottom:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"table tr:nth-child(3) td":{borderTop:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"table tr td.right":{borderRight:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"table tr td.left":{borderLeft:function(t){return t.isNight?"2px solid #fff":"2px solid #000"}},"::placeholder":{color:function(t){return t.isNight?"#fff7":"#0007"}},".MuiButtonBase-root":(O={},Object(u.a)(O,I("480"),{fontSize:"14px"}),Object(u.a)(O,I("410"),{fontSize:"11px"}),O)},container:{position:"relative",width:"100%",height:"calc(100vh - 60px)",background:function(t){return t.isNight?"#000":"#fff"},padding:"10px 0"},formContainer:(k={position:"relative",width:"80%",margin:"20px auto 0",padding:"25px 10%",background:function(t){return t.isNight?"#fff8":"#0002"},textAlign:"center"},Object(u.a)(k,I("1105"),{padding:"20px"}),Object(u.a)(k,I("901"),{width:"95%"}),Object(u.a)(k,I("432"),{padding:"20px 10px"}),Object(u.a)(k,"& h1",(C={},Object(u.a)(C,I("731"),{fontSize:"16px"}),Object(u.a)(C,I("432"),{fontSize:"14px",marginRight:"10px"}),C)),k),topContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"10px","& h1":{marginRight:"20px",textTransform:"uppercase",fontFamily:"Poppins, sans-serif"}},bottomContainer:{position:" relative",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center","& input":(N={background:"none",border:"none",outline:"none",borderBottom:"2px solid #f50057",height:"36px",padding:"4px 15px",marginRight:"20px",fontSize:"18px",width:"250px",fontFamily:"Poppins, sans-serif"},Object(u.a)(N,I("480"),{width:"fit-content",fontSize:"16px",padding:"4px 8px"}),Object(u.a)(N,I("410"),{fontSize:"12px"}),N)},btn:{margin:"0 15px"}},z=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){for(var t=this,e=this.props.classes,a=[],i=function(e){a.push(Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"right",onClick:function(){return t.props.tdClick("".concat(e,"-0"))},children:t.props.board[e][0]},"".concat(e,"-0")),Object(n.jsx)("td",{onClick:function(){return t.props.tdClick("".concat(e,"-1"))},children:t.props.board[e][1]},"".concat(e,"-1")),Object(n.jsx)("td",{className:"left",onClick:function(){return t.props.tdClick("".concat(e,"-2"))},children:t.props.board[e][2]},"".concat(e,"-2"))]},e))},r=0;r<3;r++)i(r);return Object(n.jsxs)("div",{className:e.container,children:[this.props.isStartPlay?Object(n.jsxs)("div",{className:e.formContainer,children:[this.props.gameEnd?"tie"===this.props.result?Object(n.jsx)("h1",{style:{marginBottom:"10px"},children:"Match Tie !!"}):Object(n.jsxs)("h1",{style:{marginBottom:"10px"},children:[this.props.result," is the winner of the Game!"]}):Object(n.jsxs)("h1",{style:{marginBottom:"10px"},children:[this.props.playername," : IT's YOUR TURN"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(B.a,{style:{fontFamily:"Poppins, sans-serif"},variant:"contained",color:"secondary",className:e.btn,onClick:this.props.restart,children:"RESTART"}),this.props.gameEnd?null:Object(n.jsx)(B.a,{style:{fontFamily:"Poppins, sans-serif"},variant:"contained",color:"primary",className:e.btn,onClick:this.props.quit,children:"QUIT!"})]})]}):Object(n.jsxs)("div",{className:e.formContainer,children:[Object(n.jsxs)("div",{className:e.topContainer,children:[Object(n.jsx)("h1",{children:"Do you want to give first move?"}),Object(n.jsx)(x.a,{checked:this.props.playerStart,onChange:this.props.handleChangeplayerStart,name:"playerStart"})]}),Object(n.jsxs)("div",{className:e.bottomContainer,children:[Object(n.jsx)("input",{type:"text",placeholder:"Please enter your name ",value:this.props.playername,onChange:this.props.handleInputChange}),Object(n.jsx)(B.a,{variant:"contained",color:"secondary",onClick:this.props.startPlay,style:{fontFamily:"Poppins, sans-serif"},children:"Start Play!"})]})]}),this.props.isStartPlay?Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:a})}):null]})}}]),a}(i.Component),T=Object(v.a)(R)(z);function A(t,e){return t>e?t:e}function F(t,e){for(var a=0;a<3;a++){if(t[a][0]===e&&t[a][1]===e&&t[a][2]===e)return!0;if(t[0][a]===e&&t[1][a]===e&&t[2][a]===e)return!0}return t[0][0]===e&&t[1][1]===e&&t[2][2]===e||t[0][2]===e&&t[1][1]===e&&t[2][0]===e}function M(t){for(var e=0;e<3;e++)for(var a=0;a<3;a++)if(""===t[e][a])return!1;return!0}function q(t,e,a,n){if(M(t))return 0;if("max"===n){for(var i=1/0,r=0;r<3;r++)for(var s=0;s<3;s++)if(""===t[r][s]){if(t[r][s]=e.player,F(t,e.player))return t[r][s]="",-1;var o=q(t,e,a,"min");i=(p=o)<(d=i)?p:d,t[r][s]=""}return i}for(var l=-1/0,c=0;c<3;c++)for(var h=0;h<3;h++)if(""===t[c][h]){if(t[c][h]=e.ai,F(t,e.ai))return t[c][h]="",1;l=A(q(t,e,a,"min"),l),t[c][h]=""}return l;var p,d}var D=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={isNight:!0,playerSymbol:"X",board:n.makeInitialBoard(),isStartPlay:!1,playername:"",playerStart:!0,gameEnd:!1,result:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSelectChange=n.handleSelectChange.bind(Object(h.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(h.a)(n)),n.handleChangeplayerStart=n.handleChangeplayerStart.bind(Object(h.a)(n)),n.startPlay=n.startPlay.bind(Object(h.a)(n)),n.tdClick=n.tdClick.bind(Object(h.a)(n)),n.gameStart=n.gameStart.bind(Object(h.a)(n)),n.makeAImove=n.makeAImove.bind(Object(h.a)(n)),n.restart=n.restart.bind(Object(h.a)(n)),n.quit=n.quit.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"quit",value:function(){this.setState({gameEnd:!0,result:"AI PLAYER"})}},{key:"restart",value:function(){this.setState({playerSymbol:"X",board:this.makeInitialBoard(),isStartPlay:!1,playername:"",playerStart:!0,gameEnd:!1,result:""})}},{key:"makeAImove",value:function(){var t=this;if(!this.state.playerStart&&""===this.state.result&&!this.state.gameEnd){var e,a,n,i=this.state.board,r=-1/0;e="X"===this.state.playerSymbol?"O":"X";for(var s=0;s<3;s++)for(var o=0;o<3;o++)""===i[s][o]&&(i[s][o]=e,(a=F(i,e)?1:q(i,{ai:e,player:this.state.playerSymbol},{ai:1,player:-1,tie:0},"max"))>r&&(r=a,n={x:s,y:o}),i[s][o]="");var l=this.state.board;l[n.x][n.y]=e,this.setState({board:l,playerStart:!1},(function(){F(t.state.board,e)?t.setState({gameEnd:!0,result:"AI player"}):M(t.state.board)?t.setState({gameEnd:!0,result:"tie"}):t.setState({playerStart:!0})}))}}},{key:"gameStart",value:function(){!1===this.state.playerStart&&this.makeAImove()}},{key:"tdClick",value:function(t){var e=this;if(this.state.playerStart&&""===this.state.result&&!this.state.gameEnd){var a=Number(t[0]),n=Number(t[2]);if(""===this.state.board[a][n]){var i=this.state.board;i[a][n]=this.state.playerSymbol,this.setState({board:i,playerStart:!1},(function(){F(e.state.board,e.state.playerSymbol)?e.setState({result:e.state.playername,gameEnd:!0}):M(e.state.board)?e.setState({result:"tie",gameEnd:!0}):e.makeAImove()}))}}}},{key:"makeInitialBoard",value:function(){for(var t=[],e=0;e<3;e++){for(var a=[],n=0;n<3;n++)a.push("");t.push(a)}return t}},{key:"handleChange",value:function(){this.setState({isNight:!this.state.isNight})}},{key:"handleChangeplayerStart",value:function(t){this.setState({playerStart:!this.state.playerStart})}},{key:"handleSelectChange",value:function(t){this.setState({playerSymbol:t.target.value})}},{key:"handleInputChange",value:function(t){this.setState({playername:t.target.value})}},{key:"startPlay",value:function(){""===this.state.playername?this.setState({isStartPlay:!0,playername:"Player 1"},this.gameStart):this.setState({isStartPlay:!0},this.gameStart)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{handleSelectChange:this.handleSelectChange,handleChange:this.handleChange,playerSymbol:this.state.playerSymbol,isNight:this.state.isNight}),Object(n.jsx)(T,{isNight:this.state.isNight,playername:this.state.playername,handleChangeplayerStart:this.handleChangeplayerStart,handleInputChange:this.handleInputChange,playerStart:this.state.playerStart,isStartPlay:this.state.isStartPlay,startPlay:this.startPlay,board:this.state.board,tdClick:this.tdClick,gameEnd:this.state.gameEnd,result:this.state.result,restart:this.restart,quit:this.quit})]})}}]),a}(i.Component),X=Object(v.a)({"@global":{"*":{padding:0,margin:0,boxSizing:"border-box"}}})(D),L=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,101)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),i(t),r(t),s(t)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),L()}},[[64,1,2]]]);
//# sourceMappingURL=main.4e9482b5.chunk.js.map