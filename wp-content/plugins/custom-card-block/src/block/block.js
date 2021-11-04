/**
 * BLOCK: custom-card-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import { useState, useEffect } from '@wordpress/element';
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
		currentTag: {
			type: "number"
		}
	},
	edit: ( props ) => {
		const {posts, tags, currentTag} = props.attributes;
		useEffect(() =>{
			wp.apiFetch( { path: '/wp/v2/recipe?_embed' } ).then( posts_data => {
				console.log("James - fetch  posts", posts_data)
				props.setAttributes({
					posts: posts_data
				})
			});	
			wp.apiFetch( { path: '/wp/v2/tags' } ).then( posts => {
				console.log("James - fetch tags",posts)
				props.setAttributes({
					tags: posts
				})
			});
		},[])

		function handleFilter(tag) {
			console.log(tag);
			props.setAttributes({
				currentTag: tag
			})
		}
		function handleClearFilter() {
			props.setAttributes({
				currentTag: 0
			})
		}
		return (
			<div className={ props.className }>
				<div className="filters">
					<div className="filter" onClick={() => handleClearFilter()}>All</div>
					{
						tags && tags.map((tag) =>{
							return tag.count !== 0 && <div key={tag.id} className="filter" data-tag={tag.id} onClick={() => handleFilter(tag.id)}>{tag.name}</div>
						})
					}
				</div>
				<div className="recipe-card-wrapper">
					<div className="recipe-card-wrapper-inner">
						{
							posts && posts.map((post) => {
								if(post.tags.indexOf(currentTag) !== -1 || currentTag === 0 || currentTag === undefined){
									var picture = post._embedded["wp:featuredmedia"][0].source_url
									return 	<div className="recipe-card">
												<div className="title">{post.title.rendered}</div>
												<div className="picture"><img src={picture} /></div>
												<div className="description">{post.meta.short_description}</div>
												<div className="date">{post.date.substring(0, 10)}</div>
											</div>
								}
								return null;
							})
						}
					</div>
				</div>
			</div>
		);
	},
	save: ( props ) => {
		const {posts, tags } = props.attributes;
		return (
			<div className={ props.className }>
				<div className="filters">
					<div id="filter-tag-all" className="filter">All</div>
					{
						tags && tags.map((tag) => {
							return tag.count !== 0 && <div key={tag.id} className="filter" data-tag={tag.id}>{tag.name}</div>
						})
					}
				</div>
				<div className="recipe-card-wrapper">
					<div className="recipe-card-wrapper-inner">
						{
							posts && posts.map((post) => {
								var picture = post._embedded["wp:featuredmedia"][0].source_url
								return 	<div className="recipe-card" data-tags={post.tags.toString()}>
											<div className="title">{post.title.rendered}</div>
											<div className="picture"><img src={picture} /></div>
											<div className="description">{post.meta.short_description}</div>
											<div className="date">{post.date.substring(0, 10)}</div>
										</div>
							})
						}
					</div>
				</div>
			</div>
		);
	}
	
} );
