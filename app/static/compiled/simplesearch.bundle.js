webpackJsonp([2],{0:/*!***************************************!*\
  !*** ./app/simplesearch/src/main.tsx ***!
  \***************************************/
function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(/*! react */1),i=n(/*! react-dom */1),s=n(/*! myproj-lib */5),l=function(e){function t(){e.apply(this,arguments)}return o(t,e),t.prototype.render=function(){return r.createElement("div",null," Hello World; from home! ")},t}(r.Component);i.render(r.createElement(l,null),document.getElementById("content")),s.test_lib_working()},5:/*!*********************!*\
  !*** ./src/lib.tsx ***!
  \*********************/
function(e,t){"use strict";function n(e,t){var n="is_loaded",o={};if(void 0!==e[n])throw"Cant use `is_loaded` as key in state for ensureValidKeys";for(var r=0,i=t;r<i.length;r++){var s=i[r];if(!e[s])return{is_loaded:!1};o[s]=e[s]}return o.is_loaded=!0,o}function o(){console.log("Lib is working!")}t.ensureValidKeys=n,t.test_lib_working=o}});
//# sourceMappingURL=simplesearch.bundle.js.map