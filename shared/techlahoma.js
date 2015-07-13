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
      This is the Techlahoma tab! \
    </div> \
  ',

  styles : ' \
    #techlahoma-tab{ \
      padding: 10px; \
      border: 1px solid red; \
      position:fixed; \
      bottom: 0px; \
      left: 30px; \
    } \
  '

};

TechlahomaTab.init();

