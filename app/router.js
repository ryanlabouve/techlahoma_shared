import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('official-sites');
  this.route('affiliated-sites');
  this.route('style-guide');
});

export default Router;
