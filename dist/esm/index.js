import{jsx as e,jsxs as r}from"react/jsx-runtime";import{Button as t}from"@mui/material";var a=function(){return a=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},a.apply(this,arguments)};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"==typeof SuppressedError&&SuppressedError;var o,i={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/o=i,function(){var e={}.hasOwnProperty;function r(){for(var e="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(e=a(e,t(n)))}return e}function t(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var o in t)e.call(t,o)&&t[o]&&(n=a(n,o));return n}function a(e,r){return r?e?e+" "+r:e+r:e}o.exports?(r.default=r,o.exports=r):window.classNames=r}();var s=n(i.exports),c=function(t){var a=t.className;return e("svg",{className:a,xmlns:"http://www.w3.org/2000/svg",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:r("path",{d:"M14.1,7.5l8.1,0v14.7c0,0.6,0,1.2,0.1,1.7c-0.1-0.6-0.1-1.2-0.1-1.7V7.5c0,0,63.6,0,63.6,0h-8.1 c0,0,0,14.7,0,14.7c0,7-4.6,13.3-11.7,17.1c-4.2,2.3-6.8,5.9-6.8,9.8v1.9c0,3.9,2.5,7.6,6.8,9.8c7.1,3.8,11.7,10,11.7,17.1 c0,0,0,14.7,0,14.7h8.1h-8.1H50h18V82.3c0-3.8-2.6-7.4-7-9.8c-0.1,0-0.1-0.1-0.2-0.1c-6.6-3.6-14.9-3.6-21.5,0 c-0.1,0-0.1,0.1-0.2,0.1c-4.5,2.4-7,6-7,9.8l0,10.2h18c0,0-18,0-18,0H14.1l8.1,0V77.8c0-7,4.6-13.3,11.7-17.1 c4.2-2.3,6.8-5.9,6.8-9.8v-1.9c0-3.9-2.5-7.6-6.8-9.8c-6.5-3.5-10.9-9-11.6-15.3l9.9,0c0.7,3.1,3,5.9,6.8,8c5.7,3,9.5,7.7,10.9,12.9 c1.4-5.2,5.3-9.9,10.9-12.9c3.8-2,6.2-4.8,6.8-8H32.2",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[e("animate",{attributeName:"stroke-dasharray",keyTimes:"0;1",values:"480 100;480 110",dur:"3.2258064516129035s",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-dashoffset",keyTimes:"0;1",values:"0;-1180",dur:"3.2258064516129035s",repeatCount:"indefinite"})]})})},l=function(r){var t=r.fullPage,a=r.absolute,n=r.backdrop,o=r.className;return e("div",{className:s(o,"loader",{"page-loader-wrapper":t,"loader-wrapper":!t,"'absolute'":a&&!t,"'backdrop'":n}),children:e(c,{className:s("icon","icon",{"full-page":t})})})},p=function(n){var o=n.className,i=n.wrapperClassName,c=n.disabled,p=n.isLoading,u=n.children,d=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}(n,["className","wrapperClassName","disabled","isLoading","children"]);return e("div",{className:s("btn-wrapper",i,{"'disabled'":c}),children:r(t,a({},d,{className:s("button",o,{"'disabled'":c}),disabled:c,children:[p&&e(l,{className:"loader",absolute:!0}),e("div",{className:s("content",{"'loading'":p}),children:u})]}))})};export{p as Button,l as Loader};
//# sourceMappingURL=index.js.map
