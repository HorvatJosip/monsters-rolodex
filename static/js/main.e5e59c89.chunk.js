(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,n,a){e.exports=a(18)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(2),i=a.n(r),c=(a(12),a(3)),l=a(4),s=a(6),m=a(5),h=(a(13),a(14),function(e){var n=e.monster,a=n.id,t=n.name,r=n.email;return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(a,"?set=set2&size=180x180")}),o.a.createElement("h2",null,t),o.a.createElement("p",null,r))}),u=(a(15),function(e){var n=e.monsters;return o.a.createElement("div",{className:"card-list"},n.map((function(e){return o.a.createElement(h,{key:e.id,monster:e})})))}),d=(a(16),function(e){var n=e.placeholder,a=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:a})}),f=(a(17),function(){return o.a.createElement("div",{class:"loading"},"Loading monsters...")}),p={monsters:[{id:1,name:"Mister Handsome",email:"handy@mail.com"},{id:2,name:"Nice Racoon",email:"raqy@mail.com"},{id:3,name:"Miss Perque",email:"perq@mail.com"},{id:4,name:"Slenderman",email:"slendy@mail.com"},{id:5,name:"Wooooow Master",email:"wooooooow@mail.com"},{id:6,name:"Charlie Martinez",email:"char@mail.com"},{id:7,name:"Howard Miller",email:"howie@mail.com"},{id:8,name:"Louis Garcia",email:"loo@mail.com"},{id:9,name:"Richard Williams",email:"richywilly@mail.com"},{id:10,name:"Thomas Jones",email:"thombola@mail.com"}]},v=function(e){Object(s.a)(a,e);var n=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=n.call(this)).handleSearchChange=function(n){e.setState({searchText:n.target.value})},e.state={monsters:[],searchText:"",loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.ok?e.json():p.monsters})).then((function(n){return e.setState({monsters:n,loading:!1})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,a=e.searchText,t=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monsters Rolodex"),this.state.loading?o.a.createElement(f,null):o.a.createElement("div",null,o.a.createElement(d,{placeholder:"Search monsters",handleChange:this.handleSearchChange}),o.a.createElement(u,{monsters:t})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.e5e59c89.chunk.js.map