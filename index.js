'use strict';
console.log('Loading event');

exports.handler = function(event, context, callback) {
  console.log('My first lambda published by command line');
  console.log('Nome: ' + event.nome);
  console.log('Sobrenome: ' + event.sobrenome);
  console.log('Empresa: ' + event.empresa);
  callback(null, {"Message":"My first lambda published by command line"});  // SUCCESS with message
  //var error = new Error("something is wrong");
  //callback(error);
};
