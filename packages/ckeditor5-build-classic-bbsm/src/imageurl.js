/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageUrlUI from './imageurl/imageurlui';

/**
 * The image url plugin.
 *
 * This plugin does not do anything directly, but it loads a set of specific plugins to enable inserting an image by url:
 *
 * * {@link module:image/imageurl/imageurlui~ImageUrlUI},
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageUrl extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageUrl';
	}

	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ImageUrlUI ];
	}
}
