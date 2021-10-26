<?php
/**
 * Plugin Name: Custom Card Block — Gutenberg Plugin
 * Plugin URI: https://pickrr.store/
 * Description: Custom Card Block is a Gutenberg plugin created via create-guten-block.
 * Author: James Nicholson
 * Author URI: https://pickrr.store/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
