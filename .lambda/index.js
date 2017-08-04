'use strict';
console.log('Loading event');

exports.handler = function(event, context, callback) {
  console.log('My first lambda published by command line');
  callback(null, {"Message":"My first lambda published by command line"});  // SUCCESS with message
};
