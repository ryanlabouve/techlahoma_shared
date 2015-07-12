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
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var element = document.getElementsByTagName("body")[0];
    element.appendChild(para);

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
      This is the tab! \
    </div> \
  ',

  styles : ' \
    #techlahoma-tab{ \
      border: 1px solid red; \
    } \
  '

};

TechlahomaTab.init();

