/**
 * BLOCK: custom-card-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import { useEffect, useState } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-custom-card-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Custom Card' ), // Block title.
	icon: 'pets', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'custom-card-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes:{
		posts: {
			type: "Array"
		},
		tags:{
			type: "Array"
		},
		categories:{
			type: "Array"
		},
		currentTag: {
			type: "number"
		},
		currentCatgory: {
			type: "number"
		}
	},
	edit: ( props ) => {
		const { posts, tags, currentTag, categories, currentCatgory } = props.attributes;
		useEffect(() =>{
			wp.apiFetch( { path: '/wp/v2/recipe?_embed' } ).then( posts_data => {
				props.setAttributes({
					posts: posts_data
				});
			});	
			wp.apiFetch( { path: '/wp/v2/tags' } ).then( tags => {
				props.setAttributes({
					tags: tags
				});
			});
			wp.apiFetch( { path: '/wp/v2/categories' } ).then( categories => {
				props.setAttributes({
					categories: categories
				});
			});		
		},[])

		function handleCategory(category) {
			props.setAttributes({
				currentCatgory: category
			});
			handleClearTags();
		}
		function handleTag(tag) {
			props.setAttributes({
				currentTag: tag
			});
			handleClearCategories();
		}
		function handleClearCategories() {
			props.setAttributes({
				currentCatgory: 0
			});
		}
		function handleClearTags() {
			props.setAttributes({
				currentTag: 0
			});
		}
		function handleBoth() {
			handleClearCategories();
			handleClearTags();
		}
		function FilterItem({item, type}){
			
			return(
				<div className={type} data-category={item.id} onClick={() => type === "category" ?  handleCategory(item.id) : handleTag(item.id) }>
					{item.name}
				</div>
			);
		}
		
		return (
			<div className={ props.className }>
				<div className="category_wrapper">
					<h3>Categories</h3>
					<div className="categories">
						<div className="category" onClick={() => handleBoth()}>All</div>
						{
							categories && categories.map((category) => {
								return category.slug !== "uncategorized" && category.count !== 0 && <FilterItem key={category.id} item={category} type="category" />
							})
						}
					</div>
				</div>
				<div className="tag_wrapper">
					<h3>Tags</h3>
					<div className="tags">
						{
							tags && tags.map((tag) =>{
								return tag.count !== 0 && <FilterItem key={tag.id} item={tag} type="tag" />
							})
						}
					</div>
				</div>
				<div className="recipe-card-wrapper">
					<div className="recipe-card-wrapper-inner">
						{
							posts && posts.map((post) => {
								const isCategory = post.categories.indexOf(currentCatgory) !== -1 || currentCatgory === 0 || currentCatgory === undefined;
								const isTag = post.tags.indexOf(currentTag) !== -1 || currentTag === 0 || currentTag === undefined;
								if(isCategory && isTag){
									var picture = post._embedded["wp:featuredmedia"][0].source_url
									return 	<div className="recipe-card">
												<div className="title">{post.title.rendered}</div>
												<div className="picture"><img src={picture} /></div>
												<div className="description">{post.meta.short_description}</div>
												<div className="date">{post.date.substring(0, 10)}</div>
											</div>
								}
							})
						}
					</div>
				</div>
			</div>
		);
	},
	save: ( props ) => {
		const { posts, tags, categories } = props.attributes;
		const blockProps = useBlockProps.save();
		return (
			<div className={ props.className} { ...blockProps }>
				<div className="category_wrapper">
					<h3  className='category_header'>Categories</h3>
					<div className="categories">
						<div id="clear_categories" className="category filter" data-category={0}>All</div>
						{
							categories && categories.map((category) => {
								return category.slug !== "uncategorized" && category.count !== 0 && <div key={category.id} className="category filter" data-category={category.id}>{category.name}</div>
							})
						}
					</div>
				</div>
				<div className="tag_wrapper">
					<h3 className='tag_header'>Tags</h3>
					<div className="tags">
						{
							tags && tags.map((tag) => {
								return tag.count !== 0 && <div key={tag.id} className="tag filter" data-tag={tag.id}>{tag.name}</div>
							})
						}
					</div>
				</div>
				<div className="recipe-card-wrapper">
					<div className="recipe-card-wrapper-inner">
						{
							posts && posts.map((post) => {
								var picture = post._embedded["wp:featuredmedia"][0].source_url;
								return 	<a href="#" className="recipe-card" data-tags={post.tags.toString()} data-categories={post.categories.toString()}>
											<div className="title">{post.title.rendered}</div>
											<div className="picture"><img src={picture} /></div>
											<div className="description">{post.meta.short_description}</div>
											<div className="date">{post.date.substring(0, 10)}</div>
										</a>
							})
						}
					</div>
				</div>
			</div>
		);
	}
	
} );
