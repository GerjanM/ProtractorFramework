// An example configuration file.
var ScreenShotReporter = require('jasmine-screenshot-reporter');
 
var reporter = new ScreenShotReporter({
  baseDirectory: 'target/screenshots'
});

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['D:/protProj/ProtractorDemo/tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
    jasmine.getEnv().addReporter(new ScreenShotReporter({
       baseDirectory: '/target/screenshots'
    }));
 }
};
