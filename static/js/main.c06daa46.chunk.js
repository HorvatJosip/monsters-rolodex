(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(17)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(2),i=n.n(r),c=(n(12),n(3)),l=n(4),m=n(6),s=n(5),h=(n(13),n(14),function(e){var a=e.monster,n=a.id,t=a.name,r=a.email;return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(n,"?set=set2&size=180x180")}),o.a.createElement("h2",null,t),o.a.createElement("p",null,r))}),u=(n(15),function(e){var a=e.monsters;return o.a.createElement("div",{className:"card-list"},a.map((function(e){return o.a.createElement(h,{key:e.id,monster:e})})))}),d=(n(16),function(e){var a=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:a,onChange:n})}),f=[{id:1,name:"Mister Handsome",email:"handy@mail.com"},{id:2,name:"Nice Racoon",email:"raqy@mail.com"},{id:3,name:"Miss Perque",email:"perq@mail.com"},{id:4,name:"Slenderman",email:"slendy@mail.com"},{id:5,name:"Wooooow Master",email:"wooooooow@mail.com"},{id:6,name:"Charlie Martinez",email:"char@mail.com"},{id:7,name:"Howard Miller",email:"howie@mail.com"},{id:8,name:"Louis Garcia",email:"loo@mail.com"},{id:9,name:"Richard Williams",email:"richywilly@mail.com"},{id:10,name:"Thomas Jones",email:"thombola@mail.com"}],p=function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).handleSearchChange=function(a){e.setState({searchText:a.target.value})},e.state={monsters:[],searchText:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.ok?e.json():f})).then((function(a){return e.setState({monsters:a})}))}},{key:"render",value:function(){var e=this.state,a=e.monsters,n=e.searchText,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monsters Rolodex"),o.a.createElement(d,{placeholder:"Search monsters",handleChange:this.handleSearchChange}),o.a.createElement(u,{monsters:t}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c06daa46.chunk.js.map