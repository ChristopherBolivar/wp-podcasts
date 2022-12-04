<?php // Core Functions

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
	



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
			$podcastSubtitle = $itunes->subtitle;
			$wpPodcastPubDate = date("Y-m-d H:i:s", strtotime($pubDate));
			$existing_episode = get_page_by_path( sanitize_title( $title ), 'OBJECT', 'wp-podcasts-305786');
			// Add Featured Image to Post
			$image_url        = preg_replace(
								"/(.+(\.(jpg|gif|jp2|png|bmp|jpeg|svg)))(.*)$/",
								'${1}',
								$itunes->image->attributes()->href);
			$image_name       = sanitize_url( $image_url );
			$upload_dir       = wp_upload_dir(); // Set upload folder
			$image_data       = file_get_contents($image_url); // Get image data
			$unique_file_name = wp_unique_filename( $upload_dir['path'], $image_name ); // Generate unique name
			$filename         = basename( $unique_file_name ); // Create image file name
	
			if( $existing_episode === null ){
			
			
			$inserted_episodes = wp_insert_post([
				'post_name' => sanitize_title( $title ),
				'post_title' =>  esc_html__( $title ),
				'post_type' => 'wp-podcasts-305786',
				'post_date'     =>   $wpPodcastPubDate,
				'post_status' => 'publish',

				'tags_input' => esc_html__( $podcastKeywords ),
				
				'meta_input'   => array(
					'wp_podcasts_305786_thumbnail' => sanitize_url( $itunes->image->attributes()->href ) ,
					'wp_podcasts_305786_file-url' => sanitize_url( $url ),
					'wp_podcasts_305786_subtitle' => esc_html__( $podcastSubtitle ),
					'wp_podcasts_305786_description' => esc_html__( $desc ),
					'wp_podcasts_305786_duration' =>  esc_html__( $time ),
					'wp_podcasts_305786_author' => esc_html__(  $podcastAuthor ),
					 
				)

			]);

			// Check folder permission and define file location
			if( wp_mkdir_p( $upload_dir['path'] ) ) {
				$file = $upload_dir['path'] . '/' . $filename;
			} else {
				$file = $upload_dir['basedir'] . '/' . $filename;
			}

			// Create the image  file on the server
			file_put_contents( $file, $image_data );

			// Check image file type
			$wp_filetype = wp_check_filetype( $filename, null );

			// Set attachment data
			$attachment = array(
				'post_mime_type' => $wp_filetype['type'],
				'post_title'     => sanitize_file_name( $filename ),
				'post_content'   => '',
				'post_status'    => 'inherit'
			);

			// Create the attachment
			$attach_id = wp_insert_attachment( $attachment, $file, $post_id );

			// Include image.php
			require_once(ABSPATH . 'wp-admin/includes/image.php');

			// Define attachment metadata
			$attach_data = wp_generate_attachment_metadata( $attach_id, $file );

			// Assign metadata to attachment
			wp_update_attachment_metadata( $attach_id, $attach_data );

			// And finally assign featured image to post
			set_post_thumbnail( $inserted_episodes, $attach_id );

					}
				}
	 
	};


	die();
	wp_remote_post( 'admin-ajax.php?action=wp_podcasts_305786_import_rss_feed', [
		'blocking' => false,
		'sslverify' => false,
		
	]);

	

}

