<?php // Core Functions

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
	

// custom login logo url
function wp_podcasts_305786_custom_login_url( $url ) {
	
	$options = get_option( 'wp_podcasts_305786_options', wp_podcasts_305786_options_default() );
	
	if ( isset( $options['custom_url'] ) && ! empty( $options['custom_url'] ) ) {
		
		$url = esc_url( $options['custom_url'] );
		
	}
	
	return $url;
	
}
add_filter( 'login_headerurl', 'wp_podcasts_305786_custom_login_url' );


add_action('wp_ajax_nopriv_wp_podcasts_305786_import_rss_feed', 'wp_podcasts_305786_import_rss_feed');
add_action('wp_ajax_wp_podcasts_305786_import_rss_feed', 'wp_podcasts_305786_import_rss_feed');

function wp_podcasts_305786_import_rss_feed(){

	$url = get_option( 'wp_podcasts_305786_options', wp_podcasts_305786_options_default() )['custom_url'];

	// Replace the feed with your itunes RSS feed to parse
	$rssfeed = $url;
	$rss = simplexml_load_file($rssfeed);

	foreach ($rss->channel->item as $item) {
		$namespace = $item->getNameSpaces(true);
		$itunes = $item->children($namespace['itunes']);
		$podcastSubtitle = $itunes->subtitle;
		$podcastKeywords = $itunes->keywords;


		if (isset($item->enclosure)) {
			$url = $item->enclosure['url'];
			$title        = $item->title;
			$size        = $item->enclosure['length'];
			$desc       = $item->description;
			$time         = $itunes->duration;
			$pubDate = $item->pubDate;
			$podcastAuthor =  $item->author;

	
			// $existing_dog = get_page_by_path( $dogs_slug , 'OBJECT', 'dogs');
			$inserted_episodes = wp_insert_post([
				'post_name' => sanitize_title( $title ),
				'post_title' =>  esc_html__( $title ),
				'post_type' => 'wp-podcasts-305786',
				'post_status' => 'publish',
				'tags_input' => esc_html__( $podcastKeywords ),
				
				'meta_input'   => array(
					'wp_podcasts_305786_thumbnail' => sanitize_url( $itunes->image->attributes()->href ) ,
					'wp_podcasts_305786_file-url' => sanitize_url( $url ),
					'wp_podcasts_305786_subtitle' => sanitize_text_field( $podcastSubtitle ),
					'wp_podcasts_305786_description' => esc_html__( $desc ),
					'wp_podcasts_305786_duration' =>  esc_html__( $time ),
				)

			]);
	}
	 
	};

	print_r($rss);

	die();
	wp_remote_post( 'admin-ajax.php?action=wp_podcasts_305786_import_rss_feed', [
		'blocking' => false,
		'sslverify' => false,
		
	]);

	

}

