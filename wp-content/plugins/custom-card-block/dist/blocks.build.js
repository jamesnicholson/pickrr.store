!function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(1)},function(e,t,a){"use strict";var r=a(2),n=(a.n(r),a(3)),c=(a.n(n),a(4)),s=(a.n(c),a(5)),l=(a.n(s),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("cgb/block-custom-card-block",{title:__("Custom Card"),icon:"pets",category:"widgets",keywords:[__("custom-card-block \u2014 CGB Block"),__("CGB Example"),__("create-guten-block")],attributes:{posts:{type:"Array"},tags:{type:"Array"},categories:{type:"Array"},currentTag:{type:"number"},currentCatgory:{type:"number"}},edit:function(e){function t(t){e.setAttributes({currentCatgory:t,currentTag:void 0})}function a(t){e.setAttributes({currentCatgory:void 0,currentTag:t})}function r(){e.setAttributes({currentCatgory:0,currentTag:void 0})}function n(e){var r=e.item,n=e.type,c="category"===n?p===r.id?" selected":"":o===r.id?" selected":"";return wp.element.createElement("div",{className:n+c,"data-category":r.id,onClick:function(){return"category"===n?t(r.id):a(r.id)}},r.name)}var s=e.attributes,l=s.posts,i=s.tags,o=s.currentTag,m=s.categories,p=s.currentCatgory;return console.log(l),Object(c.useEffect)(function(){wp.apiFetch({path:"/wp/v2/recipe?_embed"}).then(function(t){e.setAttributes({posts:t})}),wp.apiFetch({path:"/wp/v2/tags"}).then(function(t){e.setAttributes({tags:t})}),wp.apiFetch({path:"/wp/v2/categories"}).then(function(t){e.setAttributes({categories:t})})},[]),wp.element.createElement("div",{className:e.className},wp.element.createElement("div",{className:"category_wrapper"},wp.element.createElement("h3",null,"Categories"),wp.element.createElement("div",{className:"categories"},wp.element.createElement("div",{className:"category"+(0===p?" selected":""),"data-category":0,onClick:function(){return r()}},"All"),m&&m.map(function(e){return"uncategorized"!==e.slug&&0!==e.count&&wp.element.createElement(n,{key:e.id,item:e,type:"category"})}))),wp.element.createElement("div",{className:"tag_wrapper"},wp.element.createElement("h3",null,"Tags"),wp.element.createElement("div",{className:"tags"},i&&i.map(function(e){return 0!==e.count&&wp.element.createElement(n,{key:e.id,item:e,type:"tag"})}))),wp.element.createElement("div",{className:"recipe-card-wrapper"},wp.element.createElement("div",{className:"recipe-card-wrapper-inner"},l&&l.map(function(e){var t=-1!==e.categories.indexOf(p)||0===p||void 0===p,a=-1!==e.tags.indexOf(o)||0===o||void 0===o;if(t&&a){var r=e._embedded["wp:featuredmedia"][0].source_url;return wp.element.createElement("div",{className:"recipe-card"},wp.element.createElement("div",{className:"title"},e.title.rendered),wp.element.createElement("div",{className:"picture"},wp.element.createElement("img",{src:r})),wp.element.createElement("div",{className:"description"},e.meta.short_description),wp.element.createElement("div",{className:"date"},e.date.substring(0,10)))}}))))},save:function(e){var t=e.attributes,a=t.posts,r=t.tags,n=t.categories,c=s.useBlockProps.save();return wp.element.createElement("div",l({className:e.className},c),wp.element.createElement("div",{className:"category_wrapper"},wp.element.createElement("h3",{className:"category_header"},"Categories",wp.element.createElement("span",{class:"dashicons dashicons-arrow-down-alt2 rotate"})),wp.element.createElement("div",{className:"categories"},wp.element.createElement("div",{id:"clear_categories",className:"category filter","data-category":0},"All"),n&&n.map(function(e){return"uncategorized"!==e.slug&&0!==e.count&&wp.element.createElement("div",{key:e.id,className:"category filter","data-category":e.id},e.name)}))),wp.element.createElement("div",{className:"tag_wrapper"},wp.element.createElement("h3",{className:"tag_header"},"Tags",wp.element.createElement("span",{class:"dashicons dashicons-arrow-down-alt2 rotate"})),wp.element.createElement("div",{className:"tags"},r&&r.map(function(e){return 0!==e.count&&wp.element.createElement("div",{key:e.id,className:"tag filter","data-tag":e.id},e.name)}))),wp.element.createElement("div",{className:"recipe-card-wrapper"},wp.element.createElement("div",{className:"recipe-card-wrapper-inner"},a&&a.map(function(e){var t=e._embedded["wp:featuredmedia"][0].source_url;return wp.element.createElement("a",{href:e.link,className:"recipe-card","data-tags":e.tags.toString(),"data-categories":e.categories.toString()},wp.element.createElement("div",{className:"title"},e.title.rendered),wp.element.createElement("div",{className:"picture"},wp.element.createElement("img",{src:t})),wp.element.createElement("div",{className:"description"},e.meta.short_description),wp.element.createElement("div",{className:"date"},e.date.substring(0,10)))}))))}})},function(e,t){},function(e,t){},function(e,t){e.exports=wp.element},function(e,t){e.exports=wp.blockEditor}]);