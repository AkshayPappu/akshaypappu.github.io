(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{42:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return j}));var a=r(9),i=r(2),s=r.p+"static/media/GoldFuturesTradingStrategy.0da82131.png",c=r.p+"static/media/avalon-image.07d33dd9.png",n=r.p+"static/media/spindle-image.f7f7173c.png",l=r.p+"static/media/blu-image.3d7f0a18.png",o=r.p+"static/media/network-image.b932e8bb.png",d=r.p+"static/media/mobile-image.c1b7aa0d.png",m=r.p+"static/media/nutriverse-image.9a1a4b5c.png",g=r.p+"static/media/nba-image.ede3272e.png",p=[{id:0,title:"Nerfboost",category:"AI/ML",img:r.p+"static/media/nerfboost_image.8cb3f795.png",link:"https://pypi.org/project/nerfboost/"},{id:1,title:"Gold Futures Trading Strategy",category:"AI/ML",img:s,link:"https://github.com/AkshayPappu/GoldFuturesTradingStrategy"},{id:2,title:"Avalon",category:"Web Application/AI/ML",img:c,link:"https://www.getavalon.io/"},{id:3,title:"Spindle",category:"Web Application",img:n,link:"https://www.spindleapi.com/"},{id:4,title:"Blu",category:"Web Application",img:l,link:"https://devpost.com/software/blu-creating-water-and-carbon-neutral-ai"},{id:5,title:"Intelligent Network Intrusion Detectior",category:"AI/ML",img:o,link:"https://github.com/AkshayPappu/IntelliNet-IDS-PyWireshark"},{id:6,title:"Mobile Video Sharing App",category:"Mobile Application",img:d,link:"https://github.com/AkshayPappu/aws-mobile-vidshare-app"},{id:7,title:"Nutriverse",category:"Web Application",img:m,link:"https://github.com/AkshayPappu/Nutriverse"},{id:9,title:"Tweet-Based NBA Game Predictor",category:"AI/ML",img:g,link:"https://github.com/AkshayPappu/Twitter-NBA-Sentiment-Predictor"}],b=r(3),x=Object(i.createContext)(),j=function(e){var t=Object(i.useState)(p),r=Object(a.a)(t,2),s=r[0],c=r[1],n=Object(i.useState)(""),l=Object(a.a)(n,2),o=l[0],d=l[1],m=Object(i.useState)(""),g=Object(a.a)(m,2),j=g[0],u=g[1],y=s.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())||""===o?e:""})),h=s.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(j)}));return Object(b.jsx)(x.Provider,{value:{projects:s,setProjects:c,searchProject:o,setSearchProject:d,searchProjectsByTitle:y,selectProject:j,setSelectProject:u,selectProjectsByCategory:h},children:e.children})}},43:function(e,t,r){"use strict";var a=r(2),i=r(7),s=r(40),c=r(3),n=function(e){var t=e.title,r=e.category,a=e.image,i=e.link;return Object(c.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(c.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",onClick:function(){window.location?window.open(i,"_blank"):window.location.replace?window.location.replace(i):window.location.href=i},children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:a,className:"rounded-t-xl border-none align-middle",alt:"Single ProjecT"})}),Object(c.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(c.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(c.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})},l=r(42),o=["Web Application","Mobile Application","AI/ML"],d=function(e){var t=e.setSelectProject;return Object(c.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(c.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),o.map((function(e){return Object(c.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(l.a),t=e.projects,r=e.searchProject,s=e.setSearchProject,o=e.searchProjectsByTitle,m=e.selectProject,g=e.setSelectProject,p=e.selectProjectsByCategory;return Object(c.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(c.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(c.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(c.jsxs)("div",{className:"\r flex\r flex-col\r sm:flex-row\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(c.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(c.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(c.jsx)(i.l,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(c.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(c.jsx)(d,{setSelectProject:g})]})]}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:m?p.map((function(e){return Object(c.jsx)(n,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)})):r?o.map((function(e){return Object(c.jsx)(n,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)})):t.map((function(e){return Object(c.jsx)(n,{title:e.title,category:e.category,image:e.img,link:e.link},e.id)}))})]})}},51:function(e,t,r){"use strict";r.r(t);var a=r(15),i=r(9),s=r(24),c=r(45),n=r.p+"static/media/developer.2f084608.svg",l=r.p+"static/media/developer-dark.aa2700b5.svg",o=r(40),d=r(44),m=r(3),g=function(){var e=Object(s.a)(),t=Object(i.a)(e,1)[0];return Object(m.jsxs)(o.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(m.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(m.jsx)(o.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I'm Akshay"}),Object(m.jsx)(o.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:Object(m.jsx)(d.a,{sequence:["I solve problems with code",1e3,"I\u2019m a student at Virginia Tech",1e3,"I build scalable cloud systems",1e3,"I create full-stack apps",1e3,"I optimize systems efficiently",1e3],wrapper:"span",speed:50,repeat:1/0})}),Object(m.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(m.jsx)(a.b,{to:"/about",children:Object(m.jsxs)("div",{className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500",children:[Object(m.jsx)(c.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(m.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"About Me"})]})})})]}),Object(m.jsx)(o.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(m.jsx)("img",{src:"dark"===t?n:l,alt:"Developer"})})]})},p=r(43),b=r(42),x=r(22);t.default=function(){return Object(m.jsxs)("div",{className:"container mx-auto",children:[Object(m.jsx)(g,{}),Object(m.jsx)(b.b,{children:Object(m.jsx)(p.a,{})}),Object(m.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(m.jsx)(a.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(m.jsx)(x.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.95da3624.chunk.js.map