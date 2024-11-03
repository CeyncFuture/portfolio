(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{39:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return n}));var i=a(1),s=a(47),r=a(2);const o=Object(i.createContext)(),n=e=>{const[t,a]=Object(i.useState)(s.a),[n,c]=Object(i.useState)(""),[l,d]=Object(i.useState)(""),m=t.filter((e=>e.title.toLowerCase().includes(n.toLowerCase())||""===n?e:"")),g=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(l)));return Object(r.jsx)(o.Provider,{value:{projects:t,setProjects:a,searchProject:n,setSearchProject:c,searchProjectsByTitle:m,selectProject:l,setSelectProject:d,selectProjectsByCategory:g},children:e.children})}},40:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-1.dbc2198e.jpg"},41:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-2.f0108702.jpg"},42:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-1.0aa0cb76.jpg"},43:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-2.a5aae786.jpg"},44:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-1.41def4d8.jpg"},45:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-2.d2891914.jpg"},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var i=a(40),s=a(41),r=a(42),o=a(43),n=a(44),c=a(45);const l=[{id:1,title:"Google Health Platform",category:"Web Application",img:s.a,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:o.a},{id:3,title:"Project Management UI",category:"UI/UX Design",img:n.a},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:c.a},{id:5,title:"React Social App",category:"Mobile Application",img:r.a},{id:6,title:"Apple Design System",category:"Web Application",img:i.a}],d=[{id:1,title:"Google Health Platform",categories:["Web Application"],desc:"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",imgUrl:s.a},{id:2,title:"Phoenix Digital Agency",categories:["Mobile Application"],desc:"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",img:o.a},{id:3,title:"Project Management UI",categories:["UI/UX Design"],desc:"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",img:n.a},{id:4,title:"Cloud Storage Platform",categories:["UI/UX Design"],desc:"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",img:c.a},{id:5,title:"React Social App",categories:["Mobile Application"],desc:"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",img:r.a},{id:6,title:"Apple Design System",categories:["Web Application"],desc:"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",img:i.a}]},49:function(e,t,a){"use strict";var i=a(1),s=a(6),r=a(37),o=a(12),n=a(2);var c=e=>{let{title:t,category:a,image:i}=e;return Object(n.jsx)(r.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(o.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:i,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},l=a(39);const d=["Web Application","Mobile Application","UI/UX Design","Branding"];var m=e=>{let{setSelectProject:t}=e;return Object(n.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((e=>Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})};t.a=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:r,selectProject:o,setSelectProject:d,selectProjectsByCategory:g}=Object(i.useContext)(l.a);return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(n.jsx)(s.l,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:d})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:o?g.map((e=>Object(n.jsx)(c,{title:e.title,category:e.category,image:e.img},e.id))):t?r.map((e=>Object(n.jsx)(c,{title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>Object(n.jsx)(c,{title:e.title,category:e.category,image:e.img},e.id)))})]})}},70:function(e,t,a){"use strict";a.r(t);var i=a(49),s=a(39),r=a(2);t.default=()=>Object(r.jsx)(s.b,{children:Object(r.jsx)("div",{className:"container mx-auto",children:Object(r.jsx)(i.a,{})})})}}]);
//# sourceMappingURL=5.cfafd148.chunk.js.map