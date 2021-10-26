<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pickrr_store_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tJ|H{B;_Wr|QN^L(i^UmYV$VZL9/x%Y?*B2VGNHy*G`@0_NuqF#{U$Hj~QA.5Vw_' );
define( 'SECURE_AUTH_KEY',  '7O]Y@)euXq5h$%Zi*=4%9W=69bm(I*ScB2AuF>J#FSsJ ,/j_2XKEF`7%PtgD/3@' );
define( 'LOGGED_IN_KEY',    'b)2:]nxC hdE{,+7q/U1D?UkjsCB->dHJ!t_WxAr~/#aoH4M~B`D{)bFg^kR-CGo' );
define( 'NONCE_KEY',        ',(; e]XV,W}_4nr=:H+IGg8z7u/*(j60P)lry5+n2?5+SxaBT1$`q/ fVYIN+hv:' );
define( 'AUTH_SALT',        '<aMi$@Q3wNf3hjy0}n! oB#E.Vb}Ixcm-5c>v>TV_13P<e=BaQ5=IPupPEQp]+M0' );
define( 'SECURE_AUTH_SALT', 'L,KH-`+VwT%PG:g_-4lkYeWlgTxJ^pW IZH34/b]iH.Bg9&zz(y~ iPEK.:|-K G' );
define( 'LOGGED_IN_SALT',   ' 5ivHf1,f<]-BX(w=%~MHSO%F J2F3hmZhlBNEE.L@TF.vE<Ufk_tiF4Nq}tNRkE' );
define( 'NONCE_SALT',       'fgb{*{C?oUJx>r->AQEH<CA#-8nB|rfakRhUD[<GHU<9oJlfGQ:B{_1fP(rq{h{W' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
