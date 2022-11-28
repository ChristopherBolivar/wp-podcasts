<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://christopherbolivar.com
 * @since             1.0.0
 * @package           Wp_Podcasts_305786
 *
 * @wordpress-plugin
 * Plugin Name:       WP Podcasts
 * Plugin URI:        https://christopherbolivar.com
 * Description:       A simple and beautiful way to display your podcasts via RSS feed on your WordPress website. Including custom blocks and shortcodes
 * Version:           0.0.1
 * Author:            Christopher Bolivar
 * Author URI:        https://christopherbolivar.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-podcasts-305786
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WP_PODCASTS_305786_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-podcasts-305786-activator.php
 */
function activate_wp_podcasts_305786() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-podcasts-305786-activator.php';
	Wp_Podcasts_305786_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-podcasts-305786-deactivator.php
 */
function deactivate_wp_podcasts_305786() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-podcasts-305786-deactivator.php';
	Wp_Podcasts_305786_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_podcasts_305786' );
register_deactivation_hook( __FILE__, 'deactivate_wp_podcasts_305786' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-podcasts-305786.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_podcasts_305786() {

	$plugin = new Wp_Podcasts_305786();
	$plugin->run();

}
run_wp_podcasts_305786();

add_action('rest_api_init', 'wp_podcasts_305786_register_rest_images' );
function wp_podcasts_305786_register_rest_images(){
    register_rest_field( array('wp-podcasts-305786'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image_wp_podcasts_305786',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

function get_rest_featured_image_wp_podcasts_305786( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'large' );
        return $img[0];
    }
    return false;
}

// if admin area
if ( is_admin() ) {

	// include dependencies
	require_once plugin_dir_path( __FILE__ ) . 'admin/sub-menu-settings.php';
	
	require_once plugin_dir_path( __FILE__ ) . 'admin/wp-podcasts-register-settings.php';
	require_once plugin_dir_path( __FILE__ ) . 'admin/wp-podcasts-settings-callbacks.php';
	require_once plugin_dir_path( __FILE__ ) . 'admin/wp-podcasts-settings-validate.php';

}
	require_once plugin_dir_path( __FILE__ ) . 'admin/wp-podcasts-cpt.php';
	require_once plugin_dir_path( __FILE__ ) . 'includes/wp-podcasts-core-functions.php';
	require_once plugin_dir_path( __FILE__ ) . 'admin/wp-podcasts-cpt-meta-box.php';



/**
 * Enqueue a script in the WordPress admin on edit.php.
 *
 * @param int $hook Hook suffix for the current admin page.
 */
function wp_podcasts_305786_wpdocs_selectively_enqueue_admin_script( $hook ) {
    if ( 'edit.php?post_type=wp-podcasts-305786&page=wp_podcasts_305786' != $hook ) {
        return;
    }
    wp_enqueue_script( 'wp-podcasts-305786-admin', plugin_dir_url( __FILE__ ) . '/admin/js/wp-podcasts-305786-admin.js', array(), '1.0' );
	wp_register_style( 'wp-podcasts-305786-admin-css', get_template_directory_uri() . '/admin/css/wp-podcasts-305786-admin.css', false, '1.0.0' );
	wp_enqueue_style( 'wp-podcasts-305786-admin-css' );
}
add_action( 'admin_enqueue_scripts', 'wp_podcasts_305786_wpdocs_selectively_enqueue_admin_script' );

// default plugin options
function wp_podcasts_305786_options_default() {

	return array(
		'custom_url'     => 'https://christopherbolivar.com/wp-podcasts/',
		'custom_title'   => 'WP Podcasts',
		'custom_style'   => 'disable',
		'custom_message' => '<p class="custom-message">My custom message</p>',
		'custom_footer'  => 'Special message for users',
		'custom_toolbar' => false,
		'custom_scheme'  => 'default',
	);

}

add_filter( 'cron_schedules', 'example_add_cron_interval' );
function example_add_cron_interval( $schedules ) { 
    $schedules['five_seconds'] = array(
        'interval' => 5,
        'display'  => esc_html__( 'Every Five Seconds' ), );
    return $schedules;
}



 
if ( ! wp_next_scheduled( 'wp_ajax_nopriv_wp_podcasts_305786_import_rss_feed' ) ) {
    wp_schedule_event( time(), 'hourly', 'wp_ajax_nopriv_wp_podcasts_305786_import_rss_feed' );
}






/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wp_podcasts_305786_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_wp_podcasts_305786_block_init' );



/** 
 * Add custom "wp_podcasts_305786" block category
 * 
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
 */
add_filter( 'block_categories', 'wp_podcasts_305786_block_categories', 10, 2 );

function wp_podcasts_305786_block_categories( $categories, $post ) {

	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'wp_podcasts_305786_blocks',
				'title' => __( 'WP Podcasts', 'wp_podcasts_305786' ),
				'icon'  => 'mic',
			),
		)
	);
}





function wp_podcasts_305786_register_blocks() {
	// If Block Editor is not active, bail.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'wp-podcasts-305786-episodes',
        plugins_url( 'build/block.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type( 'wp-podcasts-305786/episodes', array(
        'editor_script' => 'wp-podcasts-305786-episodes',
        'render_callback' => 'wp_podcasts_305786_register_blocks_render_callback'
    ) );

}
add_action( 'init', 'wp_podcasts_305786_register_blocks' );


