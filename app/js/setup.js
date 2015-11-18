define( [ "knockout", "knockoutValidation" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/setup module callback");
  
  ko.validation.registerExtenders();
  
} );