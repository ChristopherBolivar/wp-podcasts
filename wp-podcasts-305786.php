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
 * Version:           1.0.0
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













