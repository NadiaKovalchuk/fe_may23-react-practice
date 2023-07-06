(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(7),n=c.n(s),r=(c(13),c(14),c(4)),i=c(8),l=c(6),d=(c(15),[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}]),o=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],j=c(0);var h=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t,c,a=(t=e.categoryId,d.find((function(e){return e.id===t}))),s=(c=a.ownerId,o.find((function(e){return e.id===c})));return Object(l.a)(Object(l.a)({},e),{},{category:a||void 0,user:s||void 0})}));var b=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(r.a)(n,2),b=l[0],u=l[1],x=Object(a.useState)(""),m=Object(r.a)(x,2),f=m[0],O=m[1],p=function(e,t){var c=t.textValue,a=t.filteredField,s=t.filteredGroceryField,n=Object(i.a)(e);return c&&(n=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase().trim())}))),a&&(n=n.filter((function(e){return e.user.name===a}))),s&&(n=n.filter((function(e){return e.category.title===s}))),n}(h,{textValue:c,filteredField:b,filteredGroceryField:f});return Object(j.jsx)("div",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Product Categories"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(j.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return u("")},className:""===b&&"is-active",children:"All"}),o.map((function(e){var t=e.name;return Object(j.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){return u(t)},className:b===e.name&&"is-active",children:e.name},e.id)}))]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",onChange:function(e){return s(e.target.value)},value:c}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),c&&Object(j.jsx)("span",{className:"icon is-right",children:Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})}),Object(j.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(j.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 ".concat(f&&"is-outlined"),onClick:function(){return O("")},children:"All"}),d.map((function(e){var t=e.title;return Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 ".concat(f===e.title&&"is-info"),href:"#/",onClick:function(){return O(t)},children:e.title},e.id)}))]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(""),u("")},children:"Reset all filters"})})]})}),Object(j.jsx)("div",{className:"box table-container",children:0===p.length?Object(j.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}):Object(j.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(j.jsx)("tbody",{children:p.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(j.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(j.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:"f"===e.user.sex?"has-text-danger":"has-text-link",children:e.user.name})]},e.id)}))})]})})]})})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d21b4d80.chunk.js.map