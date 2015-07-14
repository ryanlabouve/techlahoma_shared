import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel : function(){
    // a dirty hack
    TechlahomaTab.init();
  }
});
