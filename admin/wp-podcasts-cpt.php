<?php // Register Custom Post Type

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


function wp_podcasts_cpt_305786() {

	$labels = array(
		'name'                  => _x( 'Podcast Episodes', 'Post Type General Name', 'wp-podcasts-305786' ),
		'singular_name'         => _x( 'Podcast Episode', 'Post Type Singular Name', 'wp-podcasts-305786' ),
		'menu_name'             => __( 'Podcast Episodes', 'wp-podcasts-305786' ),
		'name_admin_bar'        => __( 'Podcast Episodes', 'wp-podcasts-305786' ),
		'archives'              => __( 'Podcast Episodes Archives', 'wp-podcasts-305786' ),
		'attributes'            => __( 'Podcast Episodes Attributes', 'wp-podcasts-305786' ),
		'parent_item_colon'     => __( 'Podcast Episode Item:', 'wp-podcasts-305786' ),
		'all_items'             => __( 'All Podcast Episodes', 'wp-podcasts-305786' ),
		'add_new_item'          => __( 'Add New Podcast Episode', 'wp-podcasts-305786' ),
		'add_new'               => __( 'Add New Podcast Episode', 'wp-podcasts-305786' ),
		'new_item'              => __( 'New Podcast Episode', 'wp-podcasts-305786' ),
		'edit_item'             => __( 'Edit Podcast Episode', 'wp-podcasts-305786' ),
		'update_item'           => __( 'Update Podcast Episode', 'wp-podcasts-305786' ),
		'view_item'             => __( 'View Podcast Episode', 'wp-podcasts-305786' ),
		'view_items'            => __( 'View Podcast Episode', 'wp-podcasts-305786' ),
		'search_items'          => __( 'Search Podcast Episode', 'wp-podcasts-305786' ),
		'not_found'             => __( 'Not found', 'wp-podcasts-305786' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'wp-podcasts-305786' ),
		'featured_image'        => __( 'Featured Image', 'wp-podcasts-305786' ),
		'set_featured_image'    => __( 'Set featured image', 'wp-podcasts-305786' ),
		'remove_featured_image' => __( 'Remove featured image', 'wp-podcasts-305786' ),
		'use_featured_image'    => __( 'Use as featured image', 'wp-podcasts-305786' ),
		'insert_into_item'      => __( 'Insert into item', 'wp-podcasts-305786' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'wp-podcasts-305786' ),
		'items_list'            => __( 'Items list', 'wp-podcasts-305786' ),
		'items_list_navigation' => __( 'Items list navigation', 'wp-podcasts-305786' ),
		'filter_items_list'     => __( 'Filter items list', 'wp-podcasts-305786' ),
	);
	$args = array(
		'label'                 => __( 'Podcast Episode', 'wp-podcasts-305786' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'custom-fields','thumbnail' ),
		'taxonomies'            => array( 'post_tag', 'category' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'show_in_rest'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-microphone',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'post',
	);
	register_post_type( 'wp-podcasts-305786', $args );

}
add_action( 'init', 'wp_podcasts_cpt_305786', 0 );


