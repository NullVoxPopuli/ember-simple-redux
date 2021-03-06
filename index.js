'use strict';

module.exports = {
  name: 'ember-simple-redux',

  options: {
    autoImport: {
      webpack: {
        devtool: 'inline-source-map',
      },
    },
    babel: {
      plugins: ['@babel/plugin-proposal-object-rest-spread'],
    },
  },
};
