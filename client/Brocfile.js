/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  lessOptions: {
    paths: [
    'bower_components/bootstrap/less',
    'bower_components/sb-admin-2/less',
    'bower_components/sb-admin-2/font-awesome-4.1.0/less'
    ]
  }
});


app.import('bower_components/sb-admin-2/js/bootstrap.js');
app.import('bower_components/sb-admin-2/js/sb-admin-2.js');

app.import('bower_components/sb-admin-2/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});

app.import('bower_components/sb-admin-2/font-awesome-4.1.0/fonts/fontawesome-webfont.woff', {
  destDir: 'fonts'
});



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

module.exports = app.toTree();
