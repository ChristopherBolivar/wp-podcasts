(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	 
	 
	  $( window ).load(function() {

		$('.import-rss-btn').click(function() {
			$.ajax({
			  type: "POST",
			  url: "admin-ajax.php?action=wp_podcasts_305786_import_rss_feed",
			  data: { name: "John" }
			}).done(function( msg ) {
			  alert( "Data Saved: " + msg );
			});
		  });	
		  
		  
			let podcastTabs = Array.from(document.getElementsByClassName('wp-podcast-tab'));
			
			podcastTabs.forEach((tab,i)=>{
			if(!tab.classList.contains('active-tab')){
			tab.classList.add('tab-deactive')
			}
			})

			$(function() {
				$('.wp_podcasts_305786-settings-accordion li').click(function(){
				  $(this).toggleClass(' active ');
				  $(this).siblings().removeClass(' active '); 
				  $('.submenu').stop().slideUp();
				  $('.active .submenu').stop().slideDown();
				  return false;
				});


			  });
			
	  });

	


})( jQuery );

