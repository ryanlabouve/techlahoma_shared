"use strict";
// jshint devel:true
console.log('Techlahoma!');

var TechlahomaTab = {

  init : function(){
    console.log('init');
    TechlahomaTab.alterDom();
    TechlahomaTab.addStyles();
  },

  alterDom : function(){
    console.log('alterDom');

    var element = document.getElementsByTagName("body")[0];

    var div = document.createElement("div");
    div.innerHTML = TechlahomaTab.content;
    element.appendChild(div);
  },

  addStyles : function(){
    var style = document.createElement("style");
    var element = document.getElementsByTagName("body")[0];
    style.innerHTML = TechlahomaTab.styles;
    element.appendChild(style);
  },

  content : ' \
    <div id="techlahoma-tab"> \
       <img src="http://techlahoma.github.io/techlahoma_shared/techlahoma_logo.png"/>\
    </div> \
  ',

  styles : ' \
    #techlahoma-tab{ \
      padding: 10px 10px 0; \
      background: black; \
      border: 1px solid white; \
      border-bottom:0; \
      position:fixed; \
      bottom: 0px; \
      left: 30px; \
      z-index:10; \
      border-top-left-radius: 6px; \
      border-top-right-radius: 6px; \
    } \
  '

};

TechlahomaTab.init();

