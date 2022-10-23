<?php //Add Sub Menu Setting Page

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


add_action('admin_menu', 'register_my_custom_submenu_page');

function register_my_custom_submenu_page() {
  add_submenu_page( 'edit.php?post_type=wp-podcasts-305786', 'Podcast Settings', 'Podcast Settings', 'manage_options', 'my-custom-submenu-page', 'my_custom_submenu_page_callback' ); 
}

function my_custom_submenu_page_callback() {
	echo '<div class="wrap"><div id="icon-tools" class="icon32"></div>';
		echo '<h2>WP Podcasts Settings</h2>';
	echo '</div>';
}