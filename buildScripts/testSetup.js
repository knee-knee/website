//This file isnt transpilled, so must use CommonJS and ES5

//Register bable to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};