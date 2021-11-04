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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n/**\n * BLOCK: custom-card-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-custom-card-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Custom Card'), // Block title.\n\ticon: 'pets', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('custom-card-block — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\tposts: {\n\t\t\ttype: \"Array\"\n\t\t},\n\t\ttags: {\n\t\t\ttype: \"Array\"\n\t\t},\n\t\tcategories: {\n\t\t\ttype: \"Array\"\n\t\t},\n\t\tcurrentTag: {\n\t\t\ttype: \"number\"\n\t\t},\n\t\tcurrentCatgory: {\n\t\t\ttype: \"number\"\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    posts = _props$attributes.posts,\n\t\t    tags = _props$attributes.tags,\n\t\t    currentTag = _props$attributes.currentTag,\n\t\t    categories = _props$attributes.categories,\n\t\t    currentCatgory = _props$attributes.currentCatgory;\n\n\t\tObject(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__[\"useEffect\"])(function () {\n\t\t\twp.apiFetch({ path: '/wp/v2/recipe?_embed' }).then(function (posts_data) {\n\t\t\t\tprops.setAttributes({\n\t\t\t\t\tposts: posts_data\n\t\t\t\t});\n\t\t\t});\n\t\t\twp.apiFetch({ path: '/wp/v2/tags' }).then(function (tags) {\n\t\t\t\tprops.setAttributes({\n\t\t\t\t\ttags: tags\n\t\t\t\t});\n\t\t\t});\n\t\t\twp.apiFetch({ path: '/wp/v2/categories' }).then(function (categories) {\n\t\t\t\tprops.setAttributes({\n\t\t\t\t\tcategories: categories\n\t\t\t\t});\n\t\t\t});\n\t\t}, []);\n\n\t\tfunction handleCategory(category) {\n\t\t\tprops.setAttributes({\n\t\t\t\tcurrentCatgory: category,\n\t\t\t\tcurrentTag: undefined\n\t\t\t});\n\t\t}\n\t\tfunction handleTag(tag) {\n\t\t\tprops.setAttributes({\n\t\t\t\tcurrentCatgory: undefined,\n\t\t\t\tcurrentTag: tag\n\t\t\t});\n\t\t}\n\t\tfunction handleAll() {\n\t\t\tprops.setAttributes({\n\t\t\t\tcurrentCatgory: 0,\n\t\t\t\tcurrentTag: undefined\n\t\t\t});\n\t\t}\n\t\tfunction FilterItem(_ref) {\n\t\t\tvar item = _ref.item,\n\t\t\t    type = _ref.type;\n\n\t\t\tvar isCurrent = type === \"category\" ? currentCatgory === item.id ? \" selected\" : \"\" : currentTag === item.id ? \" selected\" : \"\";\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: type + isCurrent, 'data-category': item.id, onClick: function onClick() {\n\t\t\t\t\t\treturn type === \"category\" ? handleCategory(item.id) : handleTag(item.id);\n\t\t\t\t\t} },\n\t\t\t\titem.name\n\t\t\t);\n\t\t}\n\t\tconsole.log(currentCatgory);\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'category_wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Categories'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'categories' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: \"category\" + (currentCatgory === 0 ? \" selected\" : \"\"), 'data-category': 0, onClick: function onClick() {\n\t\t\t\t\t\t\t\treturn handleAll();\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t'All'\n\t\t\t\t\t),\n\t\t\t\t\tcategories && categories.map(function (category) {\n\t\t\t\t\t\treturn category.slug !== \"uncategorized\" && category.count !== 0 && wp.element.createElement(FilterItem, { key: category.id, item: category, type: 'category' });\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'tag_wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Tags'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'tags' },\n\t\t\t\t\ttags && tags.map(function (tag) {\n\t\t\t\t\t\treturn tag.count !== 0 && wp.element.createElement(FilterItem, { key: tag.id, item: tag, type: 'tag' });\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'recipe-card-wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'recipe-card-wrapper-inner' },\n\t\t\t\t\tposts && posts.map(function (post) {\n\t\t\t\t\t\tvar isCategory = post.categories.indexOf(currentCatgory) !== -1 || currentCatgory === 0 || currentCatgory === undefined;\n\t\t\t\t\t\tvar isTag = post.tags.indexOf(currentTag) !== -1 || currentTag === 0 || currentTag === undefined;\n\t\t\t\t\t\tif (isCategory && isTag) {\n\t\t\t\t\t\t\tvar picture = post._embedded[\"wp:featuredmedia\"][0].source_url;\n\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'recipe-card' },\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'title' },\n\t\t\t\t\t\t\t\t\tpost.title.rendered\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'picture' },\n\t\t\t\t\t\t\t\t\twp.element.createElement('img', { src: picture })\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'description' },\n\t\t\t\t\t\t\t\t\tpost.meta.short_description\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'date' },\n\t\t\t\t\t\t\t\t\tpost.date.substring(0, 10)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    posts = _props$attributes2.posts,\n\t\t    tags = _props$attributes2.tags,\n\t\t    categories = _props$attributes2.categories;\n\n\t\tvar blockProps = __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__[\"useBlockProps\"].save();\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t_extends({ className: props.className }, blockProps),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'category_wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\t{ className: 'category_header' },\n\t\t\t\t\t'Categories'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'categories' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ id: 'clear_categories', className: 'category filter', 'data-category': 0 },\n\t\t\t\t\t\t'All'\n\t\t\t\t\t),\n\t\t\t\t\tcategories && categories.map(function (category) {\n\t\t\t\t\t\treturn category.slug !== \"uncategorized\" && category.count !== 0 && wp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ key: category.id, className: 'category filter', 'data-category': category.id },\n\t\t\t\t\t\t\tcategory.name\n\t\t\t\t\t\t);\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'tag_wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\t{ className: 'tag_header' },\n\t\t\t\t\t'Tags',\n\t\t\t\t\twp.element.createElement('span', { 'class': 'dashicons dashicons-arrow-down-alt2 rotate' })\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'tags' },\n\t\t\t\t\ttags && tags.map(function (tag) {\n\t\t\t\t\t\treturn tag.count !== 0 && wp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ key: tag.id, className: 'tag filter', 'data-tag': tag.id },\n\t\t\t\t\t\t\ttag.name\n\t\t\t\t\t\t);\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'recipe-card-wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'recipe-card-wrapper-inner' },\n\t\t\t\t\tposts && posts.map(function (post) {\n\t\t\t\t\t\tvar picture = post._embedded[\"wp:featuredmedia\"][0].source_url;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ href: '#', className: 'recipe-card', 'data-tags': post.tags.toString(), 'data-categories': post.categories.toString() },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'title' },\n\t\t\t\t\t\t\t\tpost.title.rendered\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'picture' },\n\t\t\t\t\t\t\t\twp.element.createElement('img', { src: picture })\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'description' },\n\t\t\t\t\t\t\t\tpost.meta.short_description\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'date' },\n\t\t\t\t\t\t\t\tpost.date.substring(0, 10)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbi8qKlxuICogQkxPQ0s6IGN1c3RvbS1jYXJkLWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stY3VzdG9tLWNhcmQtYmxvY2snLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ0N1c3RvbSBDYXJkJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAncGV0cycsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICd3aWRnZXRzJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ2N1c3RvbS1jYXJkLWJsb2NrIOKAlCBDR0IgQmxvY2snKSwgX18oJ0NHQiBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tYmxvY2snKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRwb3N0czoge1xuXHRcdFx0dHlwZTogXCJBcnJheVwiXG5cdFx0fSxcblx0XHR0YWdzOiB7XG5cdFx0XHR0eXBlOiBcIkFycmF5XCJcblx0XHR9LFxuXHRcdGNhdGVnb3JpZXM6IHtcblx0XHRcdHR5cGU6IFwiQXJyYXlcIlxuXHRcdH0sXG5cdFx0Y3VycmVudFRhZzoge1xuXHRcdFx0dHlwZTogXCJudW1iZXJcIlxuXHRcdH0sXG5cdFx0Y3VycmVudENhdGdvcnk6IHtcblx0XHRcdHR5cGU6IFwibnVtYmVyXCJcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBwb3N0cyA9IF9wcm9wcyRhdHRyaWJ1dGVzLnBvc3RzLFxuXHRcdCAgICB0YWdzID0gX3Byb3BzJGF0dHJpYnV0ZXMudGFncyxcblx0XHQgICAgY3VycmVudFRhZyA9IF9wcm9wcyRhdHRyaWJ1dGVzLmN1cnJlbnRUYWcsXG5cdFx0ICAgIGNhdGVnb3JpZXMgPSBfcHJvcHMkYXR0cmlidXRlcy5jYXRlZ29yaWVzLFxuXHRcdCAgICBjdXJyZW50Q2F0Z29yeSA9IF9wcm9wcyRhdHRyaWJ1dGVzLmN1cnJlbnRDYXRnb3J5O1xuXG5cdFx0dXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHdwLmFwaUZldGNoKHsgcGF0aDogJy93cC92Mi9yZWNpcGU/X2VtYmVkJyB9KS50aGVuKGZ1bmN0aW9uIChwb3N0c19kYXRhKSB7XG5cdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdHBvc3RzOiBwb3N0c19kYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHR3cC5hcGlGZXRjaCh7IHBhdGg6ICcvd3AvdjIvdGFncycgfSkudGhlbihmdW5jdGlvbiAodGFncykge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHR0YWdzOiB0YWdzXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHR3cC5hcGlGZXRjaCh7IHBhdGg6ICcvd3AvdjIvY2F0ZWdvcmllcycgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcmllcykge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBjYXRlZ29yaWVzXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSwgW10pO1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRjdXJyZW50Q2F0Z29yeTogY2F0ZWdvcnksXG5cdFx0XHRcdGN1cnJlbnRUYWc6IHVuZGVmaW5lZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRhZyh0YWcpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRjdXJyZW50Q2F0Z29yeTogdW5kZWZpbmVkLFxuXHRcdFx0XHRjdXJyZW50VGFnOiB0YWdcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBoYW5kbGVBbGwoKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0Y3VycmVudENhdGdvcnk6IDAsXG5cdFx0XHRcdGN1cnJlbnRUYWc6IHVuZGVmaW5lZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIEZpbHRlckl0ZW0oX3JlZikge1xuXHRcdFx0dmFyIGl0ZW0gPSBfcmVmLml0ZW0sXG5cdFx0XHQgICAgdHlwZSA9IF9yZWYudHlwZTtcblxuXHRcdFx0dmFyIGlzQ3VycmVudCA9IHR5cGUgPT09IFwiY2F0ZWdvcnlcIiA/IGN1cnJlbnRDYXRnb3J5ID09PSBpdGVtLmlkID8gXCIgc2VsZWN0ZWRcIiA6IFwiXCIgOiBjdXJyZW50VGFnID09PSBpdGVtLmlkID8gXCIgc2VsZWN0ZWRcIiA6IFwiXCI7XG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IHR5cGUgKyBpc0N1cnJlbnQsICdkYXRhLWNhdGVnb3J5JzogaXRlbS5pZCwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0eXBlID09PSBcImNhdGVnb3J5XCIgPyBoYW5kbGVDYXRlZ29yeShpdGVtLmlkKSA6IGhhbmRsZVRhZyhpdGVtLmlkKTtcblx0XHRcdFx0XHR9IH0sXG5cdFx0XHRcdGl0ZW0ubmFtZVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coY3VycmVudENhdGdvcnkpO1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2F0ZWdvcnlfd3JhcHBlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMycsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnQ2F0ZWdvcmllcydcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2F0ZWdvcmllcycgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNhdGVnb3J5XCIgKyAoY3VycmVudENhdGdvcnkgPT09IDAgPyBcIiBzZWxlY3RlZFwiIDogXCJcIiksICdkYXRhLWNhdGVnb3J5JzogMCwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlQWxsKCk7XG5cdFx0XHRcdFx0XHRcdH0gfSxcblx0XHRcdFx0XHRcdCdBbGwnXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubWFwKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5LnNsdWcgIT09IFwidW5jYXRlZ29yaXplZFwiICYmIGNhdGVnb3J5LmNvdW50ICE9PSAwICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChGaWx0ZXJJdGVtLCB7IGtleTogY2F0ZWdvcnkuaWQsIGl0ZW06IGNhdGVnb3J5LCB0eXBlOiAnY2F0ZWdvcnknIH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RhZ193cmFwcGVyJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2gzJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdCdUYWdzJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICd0YWdzJyB9LFxuXHRcdFx0XHRcdHRhZ3MgJiYgdGFncy5tYXAoZnVuY3Rpb24gKHRhZykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRhZy5jb3VudCAhPT0gMCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRmlsdGVySXRlbSwgeyBrZXk6IHRhZy5pZCwgaXRlbTogdGFnLCB0eXBlOiAndGFnJyB9KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdyZWNpcGUtY2FyZC13cmFwcGVyJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdyZWNpcGUtY2FyZC13cmFwcGVyLWlubmVyJyB9LFxuXHRcdFx0XHRcdHBvc3RzICYmIHBvc3RzLm1hcChmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHRcdFx0dmFyIGlzQ2F0ZWdvcnkgPSBwb3N0LmNhdGVnb3JpZXMuaW5kZXhPZihjdXJyZW50Q2F0Z29yeSkgIT09IC0xIHx8IGN1cnJlbnRDYXRnb3J5ID09PSAwIHx8IGN1cnJlbnRDYXRnb3J5ID09PSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHR2YXIgaXNUYWcgPSBwb3N0LnRhZ3MuaW5kZXhPZihjdXJyZW50VGFnKSAhPT0gLTEgfHwgY3VycmVudFRhZyA9PT0gMCB8fCBjdXJyZW50VGFnID09PSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoaXNDYXRlZ29yeSAmJiBpc1RhZykge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGljdHVyZSA9IHBvc3QuX2VtYmVkZGVkW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXS5zb3VyY2VfdXJsO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncmVjaXBlLWNhcmQnIH0sXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RpdGxlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdC50aXRsZS5yZW5kZXJlZFxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3BpY3R1cmUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBwaWN0dXJlIH0pXG5cdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnZGVzY3JpcHRpb24nIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3N0Lm1ldGEuc2hvcnRfZGVzY3JpcHRpb25cblx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdkYXRlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdC5kYXRlLnN1YnN0cmluZygwLCAxMClcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMyID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgcG9zdHMgPSBfcHJvcHMkYXR0cmlidXRlczIucG9zdHMsXG5cdFx0ICAgIHRhZ3MgPSBfcHJvcHMkYXR0cmlidXRlczIudGFncyxcblx0XHQgICAgY2F0ZWdvcmllcyA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5jYXRlZ29yaWVzO1xuXG5cdFx0dmFyIGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzLnNhdmUoKTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRfZXh0ZW5kcyh7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sIGJsb2NrUHJvcHMpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYXRlZ29yeV93cmFwcGVyJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2gzJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NhdGVnb3J5X2hlYWRlcicgfSxcblx0XHRcdFx0XHQnQ2F0ZWdvcmllcydcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2F0ZWdvcmllcycgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdHsgaWQ6ICdjbGVhcl9jYXRlZ29yaWVzJywgY2xhc3NOYW1lOiAnY2F0ZWdvcnkgZmlsdGVyJywgJ2RhdGEtY2F0ZWdvcnknOiAwIH0sXG5cdFx0XHRcdFx0XHQnQWxsJ1xuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0Y2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLm1hcChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjYXRlZ29yeS5zbHVnICE9PSBcInVuY2F0ZWdvcml6ZWRcIiAmJiBjYXRlZ29yeS5jb3VudCAhPT0gMCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHR7IGtleTogY2F0ZWdvcnkuaWQsIGNsYXNzTmFtZTogJ2NhdGVnb3J5IGZpbHRlcicsICdkYXRhLWNhdGVnb3J5JzogY2F0ZWdvcnkuaWQgfSxcblx0XHRcdFx0XHRcdFx0Y2F0ZWdvcnkubmFtZVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICd0YWdfd3JhcHBlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMycsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICd0YWdfaGVhZGVyJyB9LFxuXHRcdFx0XHRcdCdUYWdzJyxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7ICdjbGFzcyc6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LWRvd24tYWx0MiByb3RhdGUnIH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RhZ3MnIH0sXG5cdFx0XHRcdFx0dGFncyAmJiB0YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGFnLmNvdW50ICE9PSAwICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdHsga2V5OiB0YWcuaWQsIGNsYXNzTmFtZTogJ3RhZyBmaWx0ZXInLCAnZGF0YS10YWcnOiB0YWcuaWQgfSxcblx0XHRcdFx0XHRcdFx0dGFnLm5hbWVcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAncmVjaXBlLWNhcmQtd3JhcHBlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncmVjaXBlLWNhcmQtd3JhcHBlci1pbm5lcicgfSxcblx0XHRcdFx0XHRwb3N0cyAmJiBwb3N0cy5tYXAoZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0XHRcdHZhciBwaWN0dXJlID0gcG9zdC5fZW1iZWRkZWRbXCJ3cDpmZWF0dXJlZG1lZGlhXCJdWzBdLnNvdXJjZV91cmw7XG5cdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnYScsXG5cdFx0XHRcdFx0XHRcdHsgaHJlZjogJyMnLCBjbGFzc05hbWU6ICdyZWNpcGUtY2FyZCcsICdkYXRhLXRhZ3MnOiBwb3N0LnRhZ3MudG9TdHJpbmcoKSwgJ2RhdGEtY2F0ZWdvcmllcyc6IHBvc3QuY2F0ZWdvcmllcy50b1N0cmluZygpIH0sXG5cdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3RpdGxlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHBvc3QudGl0bGUucmVuZGVyZWRcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncGljdHVyZScgfSxcblx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBwaWN0dXJlIH0pXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2Rlc2NyaXB0aW9uJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHBvc3QubWV0YS5zaG9ydF9kZXNjcmlwdGlvblxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdkYXRlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHBvc3QuZGF0ZS5zdWJzdHJpbmcoMCwgMTApXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: useBlockProps */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ })
/******/ ]);