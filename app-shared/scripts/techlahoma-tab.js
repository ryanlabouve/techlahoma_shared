// Why doesn't this next line work!?
//import config from '../../config/environment';


var TechlahomaTab = {

  init : function(){
    TechlahomaTab.addStyles();
    TechlahomaTab.alterDom();
    TechlahomaTab.addListeners();
  },

  alterDom : function(){
    var element = document.getElementsByTagName("body")[0];

    var div = document.createElement("div");
    div.innerHTML = TechlahomaTab.content;
    element.appendChild(div);
  },

  distributionPoint : function(){
    // dirty hack
    // TODO: Figure out how to read the env config from this file
    var localDev = false;
    if(localDev){
      return 'http://localhost:4200';
    }else{
      return 'http://shared.techlahoma.org';
    }
  },

  addStyles : function(){
    var link = document.createElement("link");
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href', TechlahomaTab.distributionPoint() + '/shared/techlahoma-tab.css');

    var element = document.getElementsByTagName("body")[0];
    element.appendChild(link);
  },

  addListeners : function(){
    document.getElementById("techlahoma-tab").addEventListener("click", function(){
      var content = document.getElementById("techlahoma-tab-content");
      if(content.getAttribute('class') === 'active'){
        content.setAttribute('class','');
      }else{
        content.setAttribute('class','active');
      }
    });
  },

  content : ' \
    <div id="techlahoma-tab-wrap"> \
      <div id="techlahoma-tab"> \
         <img src="http://techlahoma.github.io/techlahoma_shared/techlahoma_logo.png"/> \
      </div> \
      <div id="techlahoma-tab-content"> \
         <p>Techlahoma is a non-profit organization dedicated to advancing Tech in Oklahoma. <a href="http://techlahoma.org">Learn more at Techlahoma.org</a></p> \
      </div> \
    </div> \
  '

};

export default TechlahomaTab;
