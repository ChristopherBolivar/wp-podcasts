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
	echo '<div class="wp-pod-cast-settings-page-hero">
			<div class="wp-pod-cast-hero-icon">
			<span class="dashicons dashicons-microphone"></span>
			</div>
			<div class="wp-pod-cast-hero-title">
			<h1>WP Podcats Settings<h1>
			<h2>By Christopher Bolivar<h2>
			</div>
		  </div>';
	echo '<div class="wrap">';
	echo ' <form action="options.php" method="post">';
			

	
	
	
	echo '<ul class="wp_podcasts_305786-settings-accordion">
	<li>
	  <p class="link"><a href="#">RSS Feed<i class="fa fa-toggle-down"></i></a></p><ul class="submenu">';

// output security fields
settings_fields( 'wp_podcasts_305786_options' );
	
// output setting sections
do_settings_sections( 'wp_podcasts_305786' );
	
  	echo '</ul></li>
	<li>
	  <p class="link"><a href="#">Accordion02<i class="fa fa-toggle-down"></i></a></p>
	  <ul class="submenu">
		<li><a href="#">Sub 2.1</a></li>
		<li><a href="#">Sub 2.2</a></li>
	  </ul>
	</li>
	<li>
	  <p class="link"><a href="#">Accordion03<i class="fa fa-toggle-down"></i></a></p>
	  <ul class="submenu">
		<li><a href="#">Sub 3.1</a></li>
		<li><a href="#">Sub 3.2</a></li>
		<li><a href="#">Sub 3.3</a></li>
	  </ul>
	</li>
  </ul>
   ';

	echo '<a class="import-rss-btn" name="importRSS"> Import RSS Feed </a>';
	// submit button
	submit_button();
	
	
	echo '</form>';


	


	echo '</div>';
	
}




