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
    var link = document.createElement("link");
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href','/shared/techlahoma-tab.css');

    var element = document.getElementsByTagName("body")[0];
    element.appendChild(link);
  },

  content : ' \
    <div id="techlahoma-tab"> \
       <img src="http://techlahoma.github.io/techlahoma_shared/techlahoma_logo.png"/>\
    </div> \
  '

};


