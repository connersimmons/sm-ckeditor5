/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageInsertPanelView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertpanelview';
import { createLabeledInputView } from '@ckeditor/ckeditor5-image/src/imageinsert/utils';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

/**
 * The image url plugin.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageUrlUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageUrlUI';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		// Setup `imageUrl` button.
		editor.ui.componentFactory.add( 'imageUrl', locale => {
			// const insertImageViaUrlForm = editor.getIntegration( 'insertImageViaUrl' );
			// const view = new ImageInsertPanelView( locale, prepareIntegrations( insertImageViaUrlForm ) )
			const view = createLabeledInputView(locale);
			console.log(view)
			const command = editor.commands.get( 'imageUrl' );
			view.buttonView.set( {
				label: t( 'Insert image' ),
				icon: imageIcon,
				tooltip: true
			} );
			view.buttonView.bind( 'isEnabled' ).to( command );
			return view;
		} );
	}
}
