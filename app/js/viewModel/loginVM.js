define( [ "jquery", "knockout", "model/login" ], function( $, ko, login ) {
  "use strict";
  console.info("\texecuting js/viewModel/loginVM module callback");
  
  var self            = {};
  self.login          = login;

  self.submitlogin      = function() {
    if(!self.login.validate()){
      console.log(222)
    }
  };
  console.log(self)

  return self;
} );