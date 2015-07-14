/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'techlahoma-shared',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    distributionPoint: 'http://shared.techlahoma.org',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'production') {
    // Use this to deploy it at techlahoma.github.io/techlahoma-shared
    //ENV.baseURL =  '/techlahoma-shared';
  }

  if (environment === 'development') {
    ENV.distributionPoint = 'http://localhost:4200'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
