(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{39:function(e,t,r){"use strict";t.a=r.p+"static/media/web-project-1.dbc2198e.jpg"},40:function(e,t,r){"use strict";t.a=r.p+"static/media/web-project-2.f0108702.jpg"},41:function(e,t,r){"use strict";t.a=r.p+"static/media/mobile-project-1.0aa0cb76.jpg"},42:function(e,t,r){"use strict";t.a=r.p+"static/media/mobile-project-2.a5aae786.jpg"},43:function(e,t,r){"use strict";t.a=r.p+"static/media/ui-project-1.41def4d8.jpg"},44:function(e,t,r){"use strict";t.a=r.p+"static/media/ui-project-2.d2891914.jpg"},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return g}));var a=r(1),c=r(39),s=r(40),i=r(41),o=r(42),l=r(43),n=r(44);const d=[{id:1,title:"Google Health Platform",category:"Web Application",img:s.a,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:o.a},{id:3,title:"Project Management UI",category:"UI/UX Design",img:l.a},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:n.a},{id:5,title:"React Social App",category:"Mobile Application",img:i.a},{id:6,title:"Apple Design System",category:"Web Application",img:c.a}];var m=r(2);const j=Object(a.createContext)(),g=e=>{const[t,r]=Object(a.useState)(d),[c,s]=Object(a.useState)(""),[i,o]=Object(a.useState)(""),l=t.filter((e=>e.title.toLowerCase().includes(c.toLowerCase())||""===c?e:"")),n=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(i)));return Object(m.jsx)(j.Provider,{value:{projects:t,setProjects:r,searchProject:c,setSearchProject:s,searchProjectsByTitle:l,selectProject:i,setSelectProject:o,selectProjectsByCategory:n},children:e.children})}},46:function(e,t,r){"use strict";var a=r(1),c=r(6),s=r(37),i=r(12),o=r(2);var l=e=>{let{title:t,category:r,image:a}=e;return Object(o.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(o.jsx)(i.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(o.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(o.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(o.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(o.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},n=r(45);const d=["Web Application","Mobile Application","UI/UX Design","Branding"];var m=e=>{let{setSelectProject:t}=e;return Object(o.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(o.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((e=>Object(o.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})};t.a=()=>{const{projects:e,searchProject:t,setSearchProject:r,searchProjectsByTitle:s,selectProject:i,setSelectProject:d,selectProjectsByCategory:j}=Object(a.useContext)(n.a);return Object(o.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(o.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(o.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(o.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(o.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(o.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(o.jsx)(c.l,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(o.jsx)("input",{onChange:e=>{r(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(o.jsx)(m,{setSelectProject:d})]})]}),Object(o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:i?j.map((e=>Object(o.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id))):t?s.map((e=>Object(o.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>Object(o.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)))})]})}},49:function(e,t,r){"use strict";r.r(t);var a=r(46),c=r(45),s=r(2);t.default=()=>Object(s.jsx)(c.b,{children:Object(s.jsx)("div",{className:"container mx-auto",children:Object(s.jsx)(a.a,{})})})}}]);
//# sourceMappingURL=4.b30d34fe.chunk.js.map