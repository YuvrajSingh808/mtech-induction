(this["webpackJsonpmtech-induction"]=this["webpackJsonpmtech-induction"]||[]).push([[0],{36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a.n(r),i=a(19),n=a.n(i),l=(a(36),a(1));var c=function(e){return Object(l.jsxs)("div",{id:"Events",children:[Object(l.jsx)("h3",{className:"text-3xl leading-8 font-extrabold text-center tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl sm:leading-10",children:"All Events"}),Object(l.jsxs)("div",{className:"mx-auto container py-20 px-16",children:[Object(l.jsx)("div",{className:"w-full flex items-cente justify-between",children:Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"text-xs xl:text-base text-gray-900 dark:text-gray-100",children:"July 2021"})})}),Object(l.jsx)("div",{className:"w-full xl:overflow-x-hidden mt-4",children:Object(l.jsx)("div",{className:"relative overflow-hidden w-full py-80",children:Object(l.jsx)("iframe",{className:"absolute top-0 right-0 left-0 bottom-0 w-full h-full",src:"https://docs.google.com/spreadsheets/d/e/\t2PACX-1vSWrLR80Nd0zAWYddKxxySbseMPNl5iFfR3Et9QzQGzCIwtp5Tpa_hAytA_opkDldlOn6jdKfcV5IyT/pubhtml?gid=318054788&single=true&widget=true&headers=false"})})})]}),Object(l.jsx)("style",{children:"\n\t\t\t@media screen and (min-width: 375px) {\n\t\t\t\t\t.custom-width {\n\t\t\t\t\t\t\twidth: 40rem;\n\t\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (min-width: 1300px) {\n\t\t\t\t\t.custom-width {\n\t\t\t\t\t\t\twidth: 50%;\n\t\t\t\t\t}\n\t\t\t}"})]})};var o=a(10),d=a.n(o),m=a(5),x=a(30),j=function(){if("undefined"!==typeof window&&window.localStorage){var e=window.localStorage.getItem("color-theme");if("string"===typeof e)return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},h=s.a.createContext(),g=function(e){var t=e.initialTheme,a=e.children,r=s.a.useState(j),i=Object(m.a)(r,2),n=i[0],c=i[1],o=function(e){var t=window.document.documentElement,a="dark"===e;t.classList.remove(a?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&o(t),s.a.useEffect((function(){o(n)}),[n]),Object(l.jsx)(h.Provider,{value:{theme:n,setTheme:c},children:a})};function b(e){e.fixed;var t=s.a.useState(!1),a=Object(m.a)(t,2),r=a[0];a[1];var i=s.a.useContext(h),n=i.theme,c=i.setTheme;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"flex flex-wrap items-center justify-between max-w-6xl mx-auto md:p-6 z-50 relative",children:[Object(l.jsx)("button",{className:"focus:outline-none p-4",children:Object(l.jsx)("h1",{className:"flex items-center no-underline",children:Object(l.jsxs)("a",{href:"https://iiitd.ac.in/",target:"_blank",rel:"noopener noreferrer",children:[" ",Object(l.jsx)("img",{src:"CollegeLogo.png",width:"70",alt:"logo"})]})})}),Object(l.jsxs)("nav",{className:"md:block lg:flex md:items-center md:w-auto",children:[Object(l.jsx)("button",{onClick:function(){document.getElementById("Team").scrollIntoView({behavior:"smooth"})},className:"block font-semibold py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out focus:outline-none dark:text-gray-200 dark:hover:text-gray-100",children:"Team"}),Object(l.jsx)("button",{onClick:function(){document.getElementById("Speakers").scrollIntoView({behavior:"smooth"})},className:"cursor-pointer block font-semibold py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out focus:outline-none dark:text-gray-200 dark:hover:text-gray-100",children:"Speakers"}),Object(l.jsx)(u,{title:"Events"}),Object(l.jsx)(x.DarkModeSwitch,{style:{marginLeft:"2rem"},checked:"dark"===n,onClick:function(){return c("dark"===n?"light":"dark")},size:36})]})]})})}function u(e){return Object(l.jsx)("button",{onClick:function(){document.getElementById(e.title).scrollIntoView({behavior:"smooth"})},className:"block mt-4 no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2  rounded-full bg-green-100 hover:bg-green-200 border border-green-200 text-green-700 transition duration-150 ease-in-out focus:outline-none",children:e.title})}function f(){var e=s.a.useContext(h),t=e.theme;e.setTheme;return Object(l.jsxs)("main",{children:[Object(l.jsx)(b,{}),Object(l.jsxs)("main",{className:"flex flex-col lg:flex-row items-center lg:justify-around mx-auto -mt-4 mb-10 px-6 lg:px-20 lg:pb-16 max-w-6xl relative",children:[Object(l.jsx)(d.a,{top:!0,children:Object(l.jsxs)("div",{className:"text-center lg:text-left w-4/5 sm:w-2/3 lg:w-1/2 mx-auto py-4 flex justify-center flex-col",children:["light"===t?Object(l.jsx)("img",{src:"induction-dark.svg",className:"sm:-ml-20 sm:-mb-20 transform scale-300"}):Object(l.jsx)("img",{src:"induction.svg",className:"sm:-ml-20 sm:-mb-20 mx-auto"}),Object(l.jsx)("p",{className:"mt-6 text-base font-body dark:text-gray-200 text-gray-700 sm:text-lg md:text-xl",children:"Mtech batch of 2023"}),Object(l.jsx)("div",{className:"mt-5 sm:mt-8 sm:flex justify-center lg:justify-start",children:Object(l.jsx)("button",{onClick:function(){document.getElementById("Speakers").scrollIntoView({behavior:"smooth"})},className:"px-4 py-2 border border-transparent text-xl rounded transition duration-150 ease-in-out focus:outline-none md:px-6 bg-green-600 hover:bg-green-700 font-bold text-white",children:"Check our notable speakers"})})]})}),Object(l.jsx)(d.a,{bottom:!0,children:Object(l.jsx)("div",{className:"mx-auto mt-6 mb-16 lg:m-0 w-full lg:w-2/3 aos-init aos-animate","data-aos":"fade-up",children:Object(l.jsx)("img",{height:"500",width:"1000",className:"w-full h-full z-20 object-contain",src:"main-img.svg",alt:"main-img"})})})]}),Object(l.jsx)("div",{className:"py-8 px-4  bg-primary-hover dark:bg-gray-800",children:Object(l.jsx)("div",{className:"container mx-auto",children:Object(l.jsxs)("div",{className:"text-center w-full lg:w-2/3 mx-auto",children:[Object(l.jsx)("h2",{className:"text-2xl md:text-4xl font-bold dark:text-gray-100 leading-tight",children:"Something important"}),Object(l.jsx)("p",{className:"text-lg py-2 text-gray-800 font-body dark:text-gray-200",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus!"})]})})}),Object(l.jsx)(p,{})]})}function p(){return Object(l.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-center items-center py-4 lg:py-16  bg-primary-hover dark:bg-gray-800",children:[Object(l.jsx)(y,{path:"how-it-works-1.91567300.svg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",heading:"Heading #1"}),Object(l.jsx)(y,{path:"how-it-works-2.f490bcd4.svg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",heading:"Heading #2"}),Object(l.jsx)(y,{path:"how-it-works-3.bd7296f0.svg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",heading:"Heading #3"})]})}function y(e){return Object(l.jsx)(d.a,{top:!0,children:Object(l.jsxs)("div",{className:"px-4 w-full lg:w-1/3 flex flex-col justify-between items-center mt-16 lg:mt-0",children:[Object(l.jsx)("div",{className:"w-full sm:w-1/2 h-64 relative",children:Object(l.jsx)("img",{src:e.path,alt:"how-it-works",layout:"fill"})}),Object(l.jsxs)("div",{className:"mt-4 text-center",children:[Object(l.jsx)("h3",{className:"mb-2 font-bold text-xl md:text-2xl lg:text-xl dark:text-gray-300",children:e.heading}),Object(l.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:e.description})]})]})})}function O(e){return Object(l.jsxs)("div",{className:"container px-2 md:px-4 lg:px-24 mx-auto my-8 lg:my-16",id:"Speakers",children:[Object(l.jsx)("h3",{className:"text-3xl leading-8 font-extrabold text-center tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl sm:leading-10",children:"Notable speakers"}),Object(l.jsx)(v,{eventTitle:"Speaker #1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}),Object(l.jsx)(k,{eventTitle:"Speaker #2",description:"Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."})]})}function v(e){return Object(l.jsx)("section",{className:"text-gray-600 body-font",children:Object(l.jsxs)("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",children:[Object(l.jsx)(d.a,{left:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(l.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[Object(l.jsx)("h1",{className:"title-font sm:text-6xl text-4xl mb-4 font-medium dark:text-gray-100 text-gray-900",children:e.eventTitle}),Object(l.jsx)("p",{className:"mb-8 leading-relaxed dark:text-gray-200",children:e.description})]})}),Object(l.jsx)(d.a,{right:!0,children:Object(l.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(l.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:"https://drive.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg"})})})]})})}function k(e){return Object(l.jsx)("section",{className:"text-gray-600 body-font",children:Object(l.jsxs)("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",children:[Object(l.jsx)(d.a,{left:!0,children:Object(l.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0",children:Object(l.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:"https://dummyimage.com/720x600"})})}),Object(l.jsx)(d.a,{left:!0,children:Object(l.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center",children:[Object(l.jsx)("h1",{className:"title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900 dark:text-gray-200",children:e.eventTitle}),Object(l.jsx)("p",{className:"mb-8 leading-relaxed dark:text-gray-200",children:e.description})]})})]})})}var w=a(31);function N(){var e,t=Object(w.a)({apiKey:"AIzaSyC3UXeVVvk7nP0HNLkkeyohZEhWErkw4SE",sheetId:"1BZ1rmPlCh2gnOEtuNrxnlb5iEHOagm0zfWYlAjYLKBs",sheetsNames:["Dynamic Images"]}).data[0],a=[],r=[],s=[];if(t){e=t.data;for(var i=0;"Professors"!==e[i].Name;)a.push(e[i++]);for(i++;"Staff"!==e[i].Name;)r.push(e[i++]);for(i++;i!=e.length;)s.push(e[i++])}return e?Object(l.jsx)(d.a,{left:!0,children:Object(l.jsx)("section",{className:"text-gray-600 body-font",id:"Team",children:Object(l.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[Object(l.jsx)("div",{className:"flex flex-col text-center w-full mb-20",children:Object(l.jsx)("h3",{className:"text-3xl leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl sm:leading-10 dark:text-gray-200",children:"Our Team"})}),Object(l.jsx)("h3",{className:"text-xl leading-8 font-medium text-left sm:my-6 my-2 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-200",children:"Faculty Members"}),Object(l.jsx)("div",{className:"flex flex-wrap -m-2",children:r&&r.map((function(e){return Object(l.jsx)(S,{name:e.Name,image:e.imageURL,social:e.SocialMedia})}))}),Object(l.jsx)("h3",{className:"text-xl leading-8 font-medium text-left sm:my-6 my-2 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-200",children:"Staff Members"}),Object(l.jsx)("div",{className:"flex flex-wrap -m-2",children:s&&s.map((function(e){return Object(l.jsx)(S,{name:e.Name,image:e.imageURL,social:e.SocialMedia})}))}),Object(l.jsx)("h3",{className:"text-xl leading-8 font-medium text-left sm:my-6 my-2 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-200",children:"Students"}),Object(l.jsx)("div",{className:"flex flex-wrap -m-2",children:a&&a.map((function(e){return Object(l.jsx)(S,{name:e.Name,image:e.imageURL,social:e.SocialMedia})}))})]})})}):Object(l.jsx)("div",{className:""})}function S(e){var t;return e.image&&e.image.includes("drive")&&(t="https://drive.google.com/uc?id="+(t=(t=e.image.substring(e.image.indexOf("/d/")+3)).substring(0,t.indexOf("/")))),Object(l.jsx)("div",{className:"p-2 lg:w-1/3 md:w-1/2 w-full",children:Object(l.jsx)("a",{href:e.social,target:"_blank",children:Object(l.jsxs)("div",{className:"h-full dark:bg-gray-900 bg-secondary-hover dark:text-gray-200 text-gray-900 flex items-center p-4 rounded-lg hover:bg-secondary hover:text-gray-100 dark:hover:bg-gray-700 ",children:[t?Object(l.jsx)("img",{alt:"team",className:"w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4",src:t}):Object(l.jsx)("img",{alt:"team",className:"w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4",src:"https://dummyimage.com/720x600"}),Object(l.jsx)("div",{className:"flex-grow",children:Object(l.jsx)("h2",{className:"title-font font-medium",children:e.name})})]})})})}function C(){return Object(l.jsx)("footer",{className:"text-gray-600 dark:text-gray-200 body-font bg-dark-bg dark:bg-gray-700",children:Object(l.jsxs)("div",{className:"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col",children:[Object(l.jsx)("a",{href:"https://iiitd.ac.in/",target:"_blank",className:"flex title-font font-medium items-center md:justify-start justify-center dark:text-gray-100 text-gray-900",children:Object(l.jsx)("span",{className:"ml-3 text-xl text-gray-100",children:Object(l.jsx)("img",{src:"collegeLogo.png",width:"70"})})}),Object(l.jsxs)("p",{className:"text-sm dark:text-gray-200 text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",children:["Website created and managed by",Object(l.jsx)("a",{href:"https://www.github.com/yuvrajsingh808",className:"text-gray-200 ml-1 dark:text-gray-300",rel:"noopener noreferrer",target:"_blank",children:"Yuvraj Singh"})]}),Object(l.jsxs)("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[Object(l.jsx)("a",{href:"https://www.facebook.com/IIITDelhi/",target:"_blank",className:"text-gray-300 hover:text-gray-100 dark:text-gray-200 dark:hover:text-gray-100",children:Object(l.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),Object(l.jsx)("a",{href:"https://twitter.com/IIITDelhi",target:"_blank",className:"ml-3 text-gray-300 hover:text-gray-100 dark:text-gray-200 dark:hover:text-gray-100",children:Object(l.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),Object(l.jsx)("a",{href:"https://www.instagram.com/iiit.delhi/",target:"_blank",className:"ml-3 text-gray-300 hover:text-gray-100 dark:text-gray-200 dark:hover:text-gray-100",children:Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(l.jsx)("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),Object(l.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),Object(l.jsx)("a",{href:"https://in.linkedin.com/school/iiit-delhi/",target:"_blank",className:"ml-3 text-gray-300 hover:text-gray-100 dark:text-gray-200 dark:hover:text-gray-100",children:Object(l.jsxs)("svg",{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"0",className:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),Object(l.jsx)("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})})]})]})})}var I=function(){return Object(l.jsxs)("div",{className:"dark:bg-dark-bg bg-light-bg",children:[Object(l.jsx)(f,{}),Object(l.jsx)(O,{}),Object(l.jsx)(c,{}),Object(l.jsx)(N,{}),Object(l.jsx)(C,{})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),i(e),n(e)}))};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{children:Object(l.jsx)(I,{})})}),document.getElementById("root")),E()}},[[45,1,2]]]);
//# sourceMappingURL=main.04b289a3.chunk.js.map