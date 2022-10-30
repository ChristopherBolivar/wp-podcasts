<?php //register settings page
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// register plugin settings
function wp_podcasts_305786_register_settings() {
	
	/*
	
	register_setting( 
		string   $option_group, 
		string   $option_name, 
		callable $sanitize_callback
	);
	
	*/
	
	register_setting( 
		'wp_podcasts_305786_options', 
		'wp_podcasts_305786_options', 
		'wp_podcasts_305786_callback_validate_options' 
	); 

		/*
	
	add_settings_section( 
		string   $id, 
		string   $title, 
		callable $callback, 
		string   $page
	);
	
	*/
	
	add_settings_section( 
		'wp_podcasts_305786_section_login', 
		'Customize Login Page', 
		'wp_podcasts_305786_callback_section_login', 
		'wp_podcasts_305786'
	);
	
	add_settings_section( 
		'wp_podcasts_305786_section_admin', 
		'Customize Admin Area', 
		'wp_podcasts_305786_callback_section_admin', 
		'wp_podcasts_305786'
	);


	add_settings_field(
		'custom_url',
		'Custom URL',
		'wp_podcasts_305786_callback_field_text',
		'wp_podcasts_305786',
		'wp_podcasts_305786_section_login',
		[ 'id' => 'custom_url', 'label' => 'Custom URL for the login logo link' ]
	);






	

}
add_action( 'admin_init', 'wp_podcasts_305786_register_settings' );