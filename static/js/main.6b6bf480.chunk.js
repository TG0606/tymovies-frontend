(this["webpackJsonptymovies-frontend"]=this["webpackJsonptymovies-frontend"]||[]).push([[0],{13:function(e,t,a){e.exports={header:"Home_header__1iyCs",home:"Home_home__3idT9",login:"Home_login__3APMi",signUp:"Home_signUp__3EeCA",genres:"Home_genres__OaeUX",about:"Home_about__iN9jw",nav:"Home_nav__1-F6r",loginBoxBorder:"Home_loginBoxBorder__2nBUv"}},17:function(e,t,a){e.exports={trendingMoviesHeader:"TrendingMovies_trendingMoviesHeader__3jxWY",container:"TrendingMovies_container__2VJY7"}},21:function(e,t,a){e.exports={form:"SearchForm_form__qWosj"}},22:function(e,t,a){},23:function(e,t,a){},35:function(e,t,a){e.exports={loginBoxBorder:"Login_loginBoxBorder__f0wAD"}},36:function(e,t,a){e.exports={createAccountBoxBorder:"Registration_createAccountBoxBorder__ASDRa"}},37:function(e,t,a){e.exports={text:"Genres_text__1Nt_Z"}},40:function(e,t,a){e.exports={text:"MovieShow_text__wfLEX"}},42:function(e,t,a){e.exports=a(74)},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(34),c=a.n(r),i=(a(47),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),d=a(6),h=a.n(d),p=a(9),v=a(14),g=a(35),f=a.n(g),b="";b="https://tymovie-server.herokuapp.com/api/user_token/";var E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",logged_in:!1},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.login=function(e,t){console.log({auth:{email:e,password:t}}),h.a.post(b,{auth:{email:e,password:t}}).then((function(e){console.log(e),e.data.jwt?(a.setState({logged_in:!0}),localStorage.setItem("auth_token",e.data.jwt),a.props.onLogin(!0),a.props.history.push("/")):console.warn("Login error!",e)})).catch((function(e){return console.warn(e)})),a.state.logged_in&&a.props.history.push("/")},a.handleSubmit=function(e){e.preventDefault(),a.login(a.state.email,a.state.password)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:f.a.loginBoxBorder},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("br",null),"Email:",o.a.createElement("br",null),o.a.createElement("input",{type:"text",onChange:this.handleEmail})),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("br",null),"Password:",o.a.createElement("br",null),o.a.createElement("input",{type:"password",onChange:this.handlePassword}),o.a.createElement("br",null)),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component),y=a(36),w=a.n(y),_="";_="https://tymovie-server.herokuapp.com/users";var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",name:"",password:"",password_confirmation:""},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handleName=function(e){a.setState({name:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.handlePasswordConfirmation=function(e){a.setState({password_confirmation:e.target.value})},a.createAccount=function(e,t,n,o){console.log({email:e,name:t,password:n,password_confirmation:o}),h.a.post(_,{email:e,name:t,password:n,password_confirmation:o}).then((function(e){console.log(e),a.props.history.push("/login")}))},a.handleSubmit=function(e){e.preventDefault(),a.createAccount(a.state.email,a.state.name,a.state.password,a.state.password_confirmation)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:w.a.createAccountBoxBorder},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("br",null),o.a.createElement("input",{type:"email",placeholder:"Email",onChange:this.handleEmail})," ",o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"User Name",onChange:this.handleName})," ",o.a.createElement("br",null),o.a.createElement("input",{type:"password",placeholder:"Password",onChange:this.handlePassword})," ",o.a.createElement("br",null),o.a.createElement("input",{type:"password",placeholder:"Comfirmed Password",onChange:this.handlePasswordConfirmation})," ",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Sign Up"})))}}]),t}(n.Component),O=a(37),S=a.n(O),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={genres:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data.genres),e.setState({genres:t.data.genres})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.genres.length>=1?o.a.createElement("ul",null,this.state.genres.map((function(e){return o.a.createElement("li",{className:S.a.text},o.a.createElement(p.b,{to:"/genres/".concat(e.id,"/").concat(e.name),key:e.id},e.name))}))):o.a.createElement("p",null,"loading..."))}}]),t}(o.a.Component),x=(a(70),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={genre:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/discover/movie?api_key=24d863d54c86392e6e1df55b9a328755&with_genres=".concat(this.props.match.params.id);h.a.get(t).then((function(t){console.log("response:",t),e.setState({movies:t})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,this.props.match.params.name))}}]),t}(o.a.Component)),C=(a(71),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={searchText:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(o.a.Component)),A=(a(72),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={movies:[]},a.makeAPICall=function(e){var t="https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=".concat(e);h.a.get(t).then((function(e){console.log("response:",e.data.results);e.data.results;a.setState({movies:e.data.results})})).catch((function(e){console.warn(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.query.toLowerCase();this.makeAPICall(e)}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.query!==e.match.params.query){var t=this.props.match.params.query.toLowerCase();this.makeAPICall(t)}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Movie Results for ",this.props.match.params.query),this.state.movies.length>=1?o.a.createElement("ul",null,this.state.movies.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(p.b,{to:"/movies/".concat(e.id)},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)}),e.title," (",e.release_date,")"))}))):o.a.createElement("p",null,"Loading...Please wait"))}}]),t}(o.a.Component)),I=a(21),N=a.n(I),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={searchText:""},a.handleInput=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(){var e="/search/".concat(a.state.searchText);a.props.history.push(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:N.a.form,onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",onChange:this.handleInput}),o.a.createElement("input",{className:N.a.inputButton,type:"submit",value:"Search Movies"})))}}]),t}(o.a.Component),R=a(40),L=a.n(R),D=a(41),M=a(22),P=a.n(M),U="";U="https://tymovie-server.herokuapp.com/commentsto";var T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={body:"",user_id:"",review_id:"",comment:""},a.handleBody=function(e){a.setState({body:e.target.value})},a.handleUser_id=function(e){a.setState({user_id:e.target.value})},a.handleReview_id=function(e){a.setState({review_id:e.target.value})},a.comment=function(e,t,n){console.log({body:a.state.body,user_id:a.state.user_id,review_id:a.state.review_id}),h.a.post(U,{body:a.state.body,user_id:a.state.user_id,review_id:a.state.review_id})},a.handleInput=function(e){a.setState({comment:e.target.value}),console.log(e.target.value)},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.comment,a.props.reviewId)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:P.a.form,onSubmit:this.handleSubmit},o.a.createElement("textarea",{rows:"12",cols:"55",type:"text",onChange:this.handleInput}),o.a.createElement("br",null),o.a.createElement("input",{className:P.a.inputButton,type:"submit",value:"Comment"}))}}]),t}(n.Component),H=a(23),q=a.n(H);a(73);var F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",content:"",movieId:""},a.handleInput=function(e){a.setState({name:e.target.value})},a.handleTextarea=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=localStorage.getItem("auth_token");h.a.post(URL,{name:a.state.name,content:a.state.content,movieId:a.props.movieId},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){console.log("response:",e.data),a.props.onReviewAdded(e.data)})).catch((function(e){console.warn(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Add your review"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"Name",type:"text",onChange:this.handleInput}),o.a.createElement("br",null),o.a.createElement("textarea",{type:"text",placeholder:"Review",onChange:this.handleTextarea}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Add review"})))}}]),t}(o.a.Component),W="";W="https://tymovie-server.herokuapp.com/reviews/";var z="";z="https://tymovie-server.herokuapp.com/comments/";var G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={reviews:[],comment:"",visibleCommentForReviewId:null},a.addReview=function(e){console.log("in ReviewList::addReview(), got arg:",e),a.setState({reviews:[e].concat(Object(D.a)(a.state.reviews))})},a.handleInput=function(e){a.setState({comment:e.target.value}),console.log(e.target.id),console.log(e.target.value)},a.handleSubmit=function(e){e.preventDefault(),console.log("event",e.target.id);var t=a.state.comment,n=a.state.visibleCommentForReviewId,o=localStorage.getItem("auth_token");h.a.post(z,{body:t,review_id:n},{headers:{Authorization:"Bearer ".concat(o)}}).then((function(e){console.log("comment response:",e.data)})).catch((function(e){console.warn(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("auth_token");h.a.get(W+this.props.movieId,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){console.log("response:",t.data),e.setState({reviews:t.data})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(F,{movieId:this.props.movieId,onReviewAdded:this.addReview}),o.a.createElement("h2",null,"Reviews"),this.state.reviews.map((function(t){return o.a.createElement("div",{key:t.id,style:{border:"1px solid grey",padding:"20px",width:"60%"}},o.a.createElement("h4",null,t.name),o.a.createElement("p",null,t.userReview),o.a.createElement("h4",null,t.user.name),new Date(t.created_at).toLocaleDateString("en-AU",{hour:"numeric",minute:"numeric",weekday:"long",year:"numeric",month:"long",day:"numeric"}),o.a.createElement("br",null),o.a.createElement("br",null),t.comments.map((function(e){return o.a.createElement("div",{key:e.id,style:{border:"1px solid grey",padding:"20px",width:"60%"}},o.a.createElement("h2",null,"Comments"),o.a.createElement("h4",null,e.body),o.a.createElement("h4",null,e.user.name),new Date(t.created_at).toLocaleDateString("en-AU",{hour:"numeric",minute:"numeric",weekday:"long",year:"numeric",month:"long",day:"numeric"}))})),e.state.visibleCommentForReviewId===t.id?o.a.createElement("form",{id:t.id,className:q.a.form,onSubmit:e.handleSubmit},o.a.createElement("textarea",{rows:"10",cols:"35",type:"text",id:t.id,onChange:e.handleInput}),o.a.createElement("br",null),o.a.createElement("input",{className:q.a.inputButton,type:"submit",value:"Comment"})):o.a.createElement("button",{onClick:function(){return e.setState({visibleCommentForReviewId:t.id})}},"Add Comment"))})))}}]),t}(o.a.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={movie:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data),e.setState({movie:t.data})})).catch((function(e){console.warn("ERROR:",e)}))}},{key:"render",value:function(){var e=this.state.movie;return o.a.createElement("div",{className:L.a.text},e.id?o.a.createElement("div",null,o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)}),o.a.createElement("h1",null,"Title: ".concat(e.original_title)),o.a.createElement("h3",null,"Overview: ".concat(e.overview)),o.a.createElement("h3",null," Genres: ",e.genres.map((function(e,t){return o.a.createElement("li",{key:e.id},e.name)}))),o.a.createElement("h3",null,"Vote Average: ".concat(e.vote_average)),o.a.createElement("hr",null),o.a.createElement(G,{movieId:e.id,newReviews:this.state.newReviews})):o.a.createElement("p",null,"loading..."))}}]),t}(o.a.Component),V=a(17),X=a.n(V),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={movies:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data.results),e.setState({movies:t.data.results.slice(0,12)})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:X.a.container},o.a.createElement("h3",{className:X.a.trendingMoviesHeader},"Trending This Week"),this.state.movies.length>=1?this.state.movies.map((function(e){return o.a.createElement(p.b,{className:X.a.trendingMoviesLinks,to:"/movies/".concat(e.id),key:e.id},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path)}))})):o.a.createElement("p",null,"Loading...Please wait"))}}]),t}(o.a.Component),Z=a(13),$=a.n(Z),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loggedIn:!1},a.setLoginStatus=function(e){console.log("hi!",e),a.setState({loggedIn:e})},a.handleLogout=function(){a.setState({loggedIn:!1}),localStorage.removeItem("auth_token")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("auth_token")&&this.setState({loggedIn:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",{className:$.a.header},"Ty Movies"),o.a.createElement(p.a,null,o.a.createElement("nav",{className:$.a.nav},this.state.loggedIn?o.a.createElement("a",{className:$.a.login,onClick:this.handleLogout},"Logout"):o.a.createElement(p.b,{className:$.a.login,to:"/login"},"Login"),"|",o.a.createElement(p.b,{className:$.a.signUp,to:"/registration"},"Sign Up")," |",o.a.createElement(p.b,{className:$.a.home,to:"/"},"Home")," |",o.a.createElement(p.b,{className:$.a.genres,to:"/genres"},"Genres")," |",o.a.createElement(p.b,{className:$.a.about,to:"/about"},"About Us")," |"),o.a.createElement(v.a,{path:"/",component:B}),o.a.createElement(v.a,{exact:!0,path:"/search/:query",component:A}),o.a.createElement(v.a,{exact:!0,path:"/movies/:id",component:J}),o.a.createElement(v.a,{exact:!0,path:"/login",render:function(t){return o.a.createElement(E,Object.assign({},t,{onLogin:e.setLoginStatus}))}}),o.a.createElement(v.a,{exact:!0,path:"/registration",component:j}),o.a.createElement(v.a,{exact:!0,path:"/genres",component:k}),o.a.createElement(v.a,{exact:!0,path:"/genres/:id/:name",component:x}),o.a.createElement(v.a,{exact:!0,path:"/about",component:C}),o.a.createElement(v.a,{exact:!0,path:"/",component:Y}),o.a.createElement(v.a,{exact:!0,path:"/commentstest",component:T})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("footer",null,"\xa9 tymovies 2020"))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.6b6bf480.chunk.js.map