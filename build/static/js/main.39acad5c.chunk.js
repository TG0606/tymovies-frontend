(this["webpackJsonptymovies-frontend"]=this["webpackJsonptymovies-frontend"]||[]).push([[0],{16:function(e,t,a){e.exports={trendingMoviesHeader:"TrendingMovies_trendingMoviesHeader__3jxWY",container:"TrendingMovies_container__2VJY7"}},33:function(e,t,a){e.exports={header:"Home_header__1iyCs"}},34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),i=(a(39),a(2)),l=a(3),s=a(5),u=a(4),m=a(6),h=a(12),p=a.n(h),d=a(10),v=a(13),f=(a(57),"http://localhost:3000/api/user_token/"),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",password:"",logged_in:!0},a.handleName=function(e){a.setState({name:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.login=function(e,t){p.a.post(f,{name:e,password:t}).then((function(e){console.log(e),a.setState({logged_in:e})})).catch((function(e){return console.warn(e)})),a.state.logged_in&&a.props.history.push("/")},a.handleSubmit=function(e){e.preventDefault(),a.login(a.state.name,a.state.password)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Email:",r.a.createElement("input",{type:"text",onChange:this.handleName})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{type:"password",onChange:this.handlePassword})),r.a.createElement("input",{type:"submit",value:"Login"}))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleName=function(e){a.setState({name:e.target.value})},a.handlePwd=function(e){a.setState({password:e.target.value})},a.handlePwdConfirmation=function(e){a.setState({comfirmed_password:e.target.value})},a.handleSubmit=function(e){e.preventDefault();a.props.history.push("/login")},a.state={name:"",password:"",comfirmed_password:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"User Name",onChange:this.handleName})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Password",onChange:this.handlePwd})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Comfirmed Password",onChange:this.handlePwdConfirmation})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Sign Up"}))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),y=(a(58),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"About")}}]),t}(r.a.Component)),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a.makeAPICall=function(e){var t="https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=".concat(e);p.a.get(t).then((function(e){console.log("response:",e.data.results);e.data.results;a.setState({movies:e.data.results})})).catch((function(e){console.warn(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.query.toLowerCase();this.makeAPICall(e)}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.query!==e.match.params.query){var t=this.props.match.params.query.toLowerCase();this.makeAPICall(t)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Movie Results for ",this.props.match.params.query),this.state.movies.length>=1?r.a.createElement("ul",null,this.state.movies.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d.b,{to:"/movies/".concat(e.id)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)}),e.title," (",e.release_date,")"))}))):r.a.createElement("p",null,"Loading...Please wait"))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.handleInput=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(){var e="/search/".concat(a.state.searchText);a.props.history.push(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleInput}),r.a.createElement("input",{type:"submit",value:"Search Movies"})))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data),e.setState({movie:t.data})})).catch((function(e){console.warn("ERROR:",e)}))}},{key:"render",value:function(){var e=this.state.movie;return r.a.createElement("div",null,e.id?r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)}),r.a.createElement("h1",null,"Title: ".concat(e.original_title)),r.a.createElement("h3",null,"Overview: ".concat(e.overview)),r.a.createElement("h3",null," Genres: ",e.genres.map((function(e,t){return r.a.createElement("li",{key:e.id},e.name)}))),r.a.createElement("h3",null,"Vote Average: ".concat(e.vote_average))):r.a.createElement("p",null,"loading..."))}}]),t}(r.a.Component),k=a(16),C=a.n(k),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data.results),e.setState({movies:t.data.results.slice(0,18)})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:C.a.container},r.a.createElement("h3",{className:C.a.trendingMoviesHeader},"Trending This Week"),this.state.movies.length>=1?this.state.movies.map((function(e){return r.a.createElement(d.b,{className:C.a.trendingMoviesLinks,to:"/movies/".concat(e.id),key:e.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path)}))})):r.a.createElement("p",null,"Loading...Please wait"))}}]),t}(r.a.Component),S=a(33),x=a.n(S),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:x.a.header},"Ty Movies"),r.a.createElement(d.a,null,r.a.createElement("nav",null,r.a.createElement(d.b,{to:"/"},"Home")," | \xa0",r.a.createElement(d.b,{to:"/login"},"Login")," | \xa0",r.a.createElement(d.b,{to:"/registration"},"Sign Up")," | \xa0",r.a.createElement(d.b,{to:"/genres"},"Genres")," | \xa0",r.a.createElement(d.b,{to:"/about"},"About Us")," | \xa0"),r.a.createElement(v.a,{path:"/",component:O}),r.a.createElement(v.a,{exact:!0,path:"/search/:query",component:w}),r.a.createElement(v.a,{exact:!0,path:"/movies/:id",component:j}),r.a.createElement(v.a,{exact:!0,path:"/login",component:b}),r.a.createElement(v.a,{exact:!0,path:"/registration",component:g}),r.a.createElement(v.a,{exact:!0,path:"/genres",component:E}),r.a.createElement(v.a,{exact:!0,path:"/about",component:y}),r.a.createElement(v.a,{exact:!0,path:"/",component:_})),r.a.createElement("footer",null,"\xa9 tymovies 2020"))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.39acad5c.chunk.js.map