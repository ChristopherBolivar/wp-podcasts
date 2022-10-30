<?php // validate plugin settings

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
	


function wp_podcasts_305786_validate_options($input) {
	
	// custom url
	if ( isset( $input['custom_url'] ) ) {
		
		$input['custom_url'] = esc_url( $input['custom_url'] );
		
	}
	
	return $input;
	
}

