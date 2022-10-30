<?php //Add Sub Menu Setting Page

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


add_action('admin_menu', 'wp_podcasts_305786_submenu_page');

function wp_podcasts_305786_submenu_page() {
  add_submenu_page(
  'edit.php?post_type=wp-podcasts-305786',
  'Podcast Settings',
  'Podcast Settings',
  'manage_options',
  'wp_podcasts_305786',
  'wp_podcasts_305786_page_callback' ); 
}


function wp_podcasts_305786_page_callback() {
	if(array_key_exists('importRSS', $_POST)) {
		button1();
	}
	function button1() {
		echo "This is Button1 that is selected";
	}
	

	echo '<div class="wrap">';
	echo '<h1>WP Podcasts settings page</h1>';
	echo ' <form action="options.php" method="post">';
			

	
	// output security fields
	settings_fields( 'wp_podcasts_305786_options' );
	
	// output setting sections
	do_settings_sections( 'wp_podcasts_305786' );
	

	echo '<a name="importRSS"> Import RSS Feed </a>';
	// submit button
	submit_button();
	
	
	echo '</form>';
	echo '</div>';
}




