define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/login module callback");

  var self            = {};
  self.email          = ko.observable();
  self.password       = ko.observable();
  self.errors         = ko.validation.group(self);

  self.validate = function() {
    if(!self.errors().length){
      viewModel.errors.showAllMessages();
      return false;
    }
  };
  return self;
} );