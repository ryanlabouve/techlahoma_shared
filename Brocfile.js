/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    enabled: false // not the best in the long term, but works for now
  }
});


var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-funnel');
var compileSass = require('broccoli-sass');
var ES6Modules = require('broccoli-es6modules');

var tabCss = compileSass(['app-shared'],
                          'styles/techlahoma-tab.scss',
                          'shared/techlahoma-tab.css');

var sharedCss = compileSass(['app-shared'],
                          'styles/techlahoma.scss',
                          'shared/techlahoma.css');



/*var tabJs = pickFiles('app-shared/scripts', {
  destDir: 'shared',
  files  : ['techlahoma-tab.js']
});*/

var tabJs = new ES6Modules('app-shared/scripts', {
  format: 'umd',
  bundleOptions: {
    entry: 'techlahoma-tab.js',
    name: 'TechlahomaTab'
  }
});

//console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!11111')
//console.log(tabJs);

tabJs = pickFiles(tabJs,{
  files : ['TechlahomaTab.js'],
  destDir : 'shared'
});

//console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!22222')
//console.log(tabJs);


// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = mergeTrees([app.toTree(),tabCss,sharedCss,tabJs]);
