Package.describe({
  name: 'mquandalle:jquery-ui-drag-drop-sort',
  version: '0.2.0',
  // Brief, one-line summary of the package.
  summary: 'A wrapper for jquery-ui a custom build',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mquandalle/meteor-jquery-ui-drag-drop-sort',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'jquery-ui.js',
    'jquery.ui.touch-punch.js',
    'jquery-ui.css'
  ], 'client');
});
