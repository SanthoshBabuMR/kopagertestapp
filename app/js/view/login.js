define( [ "jquery", "knockout", "pager" ], function( $, ko, pager ) {
  console.info("\texecuting js/view/login module callback");
  var viewModel = { test: 123456 };
  pager.extendWithPage(viewModel);
  ko.applyBindings(viewModel);
  pager.start();
  
} );