module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter')
    ],

    files: [
      {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'karma-test-shim.js', included: true, watched: true},
      {pattern: 'src/dist/**/*.js', included: false, watched: true},
      {pattern: 'src/app/**/*.ts', included: false, watched: false}
    ],

    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'html'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}