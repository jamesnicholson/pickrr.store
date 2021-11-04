/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__);\n/**\n * BLOCK: custom-card-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-custom-card-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Custom Card'), // Block title.\n\ticon: 'pets', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('custom-card-block — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\tposts: {\n\t\t\ttype: \"Array\"\n\t\t},\n\t\ttags: {\n\t\t\ttype: \"Array\"\n\t\t},\n\t\tcurrentTag: {\n\t\t\ttype: \"number\"\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tconsole.log(\"James Edit function\");\n\t\tvar _props$attributes = props.attributes,\n\t\t    posts = _props$attributes.posts,\n\t\t    tags = _props$attributes.tags,\n\t\t    currentTag = _props$attributes.currentTag;\n\n\t\tconsole.log(\"James\", posts);\n\t\tObject(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__[\"useEffect\"])(function () {\n\t\t\twp.apiFetch({ path: '/wp/v2/recipe?_embed' }).then(function (posts_data) {\n\t\t\t\tconsole.log(\"James - fetch  posts\", posts_data);\n\t\t\t\tprops.setAttributes({\n\t\t\t\t\tposts: posts_data\n\t\t\t\t});\n\t\t\t});\n\t\t\twp.apiFetch({ path: '/wp/v2/tags' }).then(function (posts) {\n\t\t\t\tconsole.log(\"James - fetch tags\", posts);\n\t\t\t\tprops.setAttributes({\n\t\t\t\t\ttags: posts\n\t\t\t\t});\n\t\t\t});\n\t\t}, []);\n\n\t\tfunction handleFilter(tag) {\n\t\t\tprops.setAttributes({\n\t\t\t\tcurrentTag: tag\n\t\t\t});\n\t\t}\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'filters' },\n\t\t\t\ttags && tags.map(function (tag) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ key: tag.id, className: 'filter', 'data-tag': tag.id, onClick: function onClick() {\n\t\t\t\t\t\t\t\treturn handleFilter(tag.id);\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\ttag.name\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'recipe-card-wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'recipe-card-wrapper-inner' },\n\t\t\t\t\tposts && posts.map(function (post) {\n\t\t\t\t\t\tif (post.tags.indexOf(currentTag)) {\n\t\t\t\t\t\t\tvar picture = post._embedded[\"wp:featuredmedia\"][0].source_url;\n\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'recipe-card' },\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'title' },\n\t\t\t\t\t\t\t\t\tpost.title.rendered\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'picture' },\n\t\t\t\t\t\t\t\t\twp.element.createElement('img', { src: picture })\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'description' },\n\t\t\t\t\t\t\t\t\tpost.meta.short_description\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'date' },\n\t\t\t\t\t\t\t\t\tpost.date.substring(0, 10)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    posts = _props$attributes2.posts,\n\t\t    tags = _props$attributes2.tags;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'filters' },\n\t\t\t\ttags && tags.map(function (tag) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ key: tag.id, className: 'filter', 'data-tag': tag.id },\n\t\t\t\t\t\ttag.name\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'recipe-card-wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'recipe-card-wrapper-inner' },\n\t\t\t\t\tposts && posts.map(function (post) {\n\t\t\t\t\t\tvar picture = post._embedded[\"wp:featuredmedia\"][0].source_url;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'recipe-card', 'data-tags': post.tags.toString() },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'title' },\n\t\t\t\t\t\t\t\tpost.title.rendered\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'picture' },\n\t\t\t\t\t\t\t\twp.element.createElement('img', { src: picture })\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'description' },\n\t\t\t\t\t\t\t\tpost.meta.short_description\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'date' },\n\t\t\t\t\t\t\t\tpost.date.substring(0, 10)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGN1c3RvbS1jYXJkLWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1jdXN0b20tY2FyZC1ibG9jaycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnQ3VzdG9tIENhcmQnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdwZXRzJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ3dpZGdldHMnLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnY3VzdG9tLWNhcmQtYmxvY2sg4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdHBvc3RzOiB7XG5cdFx0XHR0eXBlOiBcIkFycmF5XCJcblx0XHR9LFxuXHRcdHRhZ3M6IHtcblx0XHRcdHR5cGU6IFwiQXJyYXlcIlxuXHRcdH0sXG5cdFx0Y3VycmVudFRhZzoge1xuXHRcdFx0dHlwZTogXCJudW1iZXJcIlxuXHRcdH1cblx0fSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdGNvbnNvbGUubG9nKFwiSmFtZXMgRWRpdCBmdW5jdGlvblwiKTtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBwb3N0cyA9IF9wcm9wcyRhdHRyaWJ1dGVzLnBvc3RzLFxuXHRcdCAgICB0YWdzID0gX3Byb3BzJGF0dHJpYnV0ZXMudGFncyxcblx0XHQgICAgY3VycmVudFRhZyA9IF9wcm9wcyRhdHRyaWJ1dGVzLmN1cnJlbnRUYWc7XG5cblx0XHRjb25zb2xlLmxvZyhcIkphbWVzXCIsIHBvc3RzKTtcblx0XHR1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuXHRcdFx0d3AuYXBpRmV0Y2goeyBwYXRoOiAnL3dwL3YyL3JlY2lwZT9fZW1iZWQnIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3RzX2RhdGEpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJKYW1lcyAtIGZldGNoICBwb3N0c1wiLCBwb3N0c19kYXRhKTtcblx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0cG9zdHM6IHBvc3RzX2RhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHdwLmFwaUZldGNoKHsgcGF0aDogJy93cC92Mi90YWdzJyB9KS50aGVuKGZ1bmN0aW9uIChwb3N0cykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkphbWVzIC0gZmV0Y2ggdGFnc1wiLCBwb3N0cyk7XG5cdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdHRhZ3M6IHBvc3RzXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSwgW10pO1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlRmlsdGVyKHRhZykge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGN1cnJlbnRUYWc6IHRhZ1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnZmlsdGVycycgfSxcblx0XHRcdFx0dGFncyAmJiB0YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBrZXk6IHRhZy5pZCwgY2xhc3NOYW1lOiAnZmlsdGVyJywgJ2RhdGEtdGFnJzogdGFnLmlkLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBoYW5kbGVGaWx0ZXIodGFnLmlkKTtcblx0XHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFx0dGFnLm5hbWVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAncmVjaXBlLWNhcmQtd3JhcHBlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncmVjaXBlLWNhcmQtd3JhcHBlci1pbm5lcicgfSxcblx0XHRcdFx0XHRwb3N0cyAmJiBwb3N0cy5tYXAoZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0XHRcdGlmIChwb3N0LnRhZ3MuaW5kZXhPZihjdXJyZW50VGFnKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGljdHVyZSA9IHBvc3QuX2VtYmVkZGVkW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXS5zb3VyY2VfdXJsO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncmVjaXBlLWNhcmQnIH0sXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RpdGxlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdC50aXRsZS5yZW5kZXJlZFxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3BpY3R1cmUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBwaWN0dXJlIH0pXG5cdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnZGVzY3JpcHRpb24nIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0Lm1ldGEuc2hvcnRfZGVzY3JpcHRpb25cblx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdkYXRlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdC5kYXRlLnN1YnN0cmluZygwLCAxMClcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBfcHJvcHMkYXR0cmlidXRlczIgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBwb3N0cyA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5wb3N0cyxcblx0XHQgICAgdGFncyA9IF9wcm9wcyRhdHRyaWJ1dGVzMi50YWdzO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdmaWx0ZXJzJyB9LFxuXHRcdFx0XHR0YWdzICYmIHRhZ3MubWFwKGZ1bmN0aW9uICh0YWcpIHtcblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGtleTogdGFnLmlkLCBjbGFzc05hbWU6ICdmaWx0ZXInLCAnZGF0YS10YWcnOiB0YWcuaWQgfSxcblx0XHRcdFx0XHRcdHRhZy5uYW1lXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JlY2lwZS1jYXJkLXdyYXBwZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JlY2lwZS1jYXJkLXdyYXBwZXItaW5uZXInIH0sXG5cdFx0XHRcdFx0cG9zdHMgJiYgcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XG5cdFx0XHRcdFx0XHR2YXIgcGljdHVyZSA9IHBvc3QuX2VtYmVkZGVkW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXS5zb3VyY2VfdXJsO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncmVjaXBlLWNhcmQnLCAnZGF0YS10YWdzJzogcG9zdC50YWdzLnRvU3RyaW5nKCkgfSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAndGl0bGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0cG9zdC50aXRsZS5yZW5kZXJlZFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdwaWN0dXJlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHBpY3R1cmUgfSlcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnZGVzY3JpcHRpb24nIH0sXG5cdFx0XHRcdFx0XHRcdFx0cG9zdC5tZXRhLnNob3J0X2Rlc2NyaXB0aW9uXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2RhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0cG9zdC5kYXRlLnN1YnN0cmluZygwLCAxMClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: useEffect */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ })
/******/ ]);