define( [ "jquery", "knockout", "pager", "viewModel/loginVM" ], function( $, ko, pager, loginVM ) {
	"use strict";
  console.info("\texecuting js/view/login module callback");
  
  function init(viewModel){
  	pager.extendWithPage(viewModel);
	  ko.applyBindings(viewModel);
	  pager.start();
	  $('.doc-mask').removeClass('show');	
  };
console.log(loginVM, $('.doc-wrap').get(0))
  init(loginVM, $('.doc-wrap').get(0));
  
} );