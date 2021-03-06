import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-file-icon">
	<template strip-whitespace="">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width$="[[ _getWidth(compact) ]]" height$="[[ _getHeight(compact) ]]" viewBox="0 0 98 130">
			<defs>
				<path id="a" d="M85.6 31.6L58.2 2.4C56.8.8 54.8 0 52.6 0H18C8 0 0 8 0 18v84c0 10 8 18 18 18h52c10 0 18-8 18-18V37.2c0-2.2-1-4.2-2.4-5.6z"></path>
			</defs>
			<g fill="none" fill-rule="nonzero">
				<g transform="translate(4 4)">
					<use fill="#FFF" fill-rule="evenodd" xlink:href="#a"></use>
					<path stroke="#FFF" stroke-width="4" d="M87.038 30.21C88.88 32.063 90 34.576 90 37.2V102c0 11.105-8.895 20-20 20H18c-11.105 0-20-8.895-20-20V18C-2 6.895 6.895-2 18-2h34.6c2.808 0 5.34 1.066 7.058 3.031l27.38 29.178z"></path>
				</g>
				<path fill="#006FBF" d="M89.6 35.6L62.2 6.4C60.8 4.8 58.8 4 56.6 4H22C12 4 4 12 4 22v84c0 10 8 18 18 18h52c10 0 18-8 18-18V41.2c0-2.2-1-4.2-2.4-5.6zM60 9.8l4.2 4.4 18 19.2 4.4 4.6H74c-7.8 0-14-6.2-14-14V9.8zM88 106c0 7.8-6.2 14-14 14H22c-7.8 0-14-6.2-14-14V22c0-7.8 6.2-14 14-14h34v16c0 10 8 18 18 18h14v64z"></path>
				<path fill="#006FBF" d="M79 52H17c-.6 0-1-.4-1-1s.4-1 1-1h62c.6 0 1 .4 1 1s-.4 1-1 1zM79 62H17c-.6 0-1-.4-1-1s.4-1 1-1h62c.6 0 1 .4 1 1s-.4 1-1 1zM79 72H17c-.6 0-1-.4-1-1s.4-1 1-1h62c.6 0 1 .4 1 1s-.4 1-1 1zM79 82H17c-.6 0-1-.4-1-1s.4-1 1-1h62c.6 0 1 .4 1 1s-.4 1-1 1zM79 92H17c-.6 0-1-.4-1-1s.4-1 1-1h62c.6 0 1 .4 1 1s-.4 1-1 1zM79 102H17c-.6 0-1-.4-1-1s.4-1 1-1h62c.6 0 1 .4 1 1s-.4 1-1 1zM79 112H17c-.6 0-1-.4-1-1s.4-1 1-1h62c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
				<g fill="#006FBF">
					<path d="M48 41c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1s.4-1 1-1h30c.6 0 1 .4 1 1zM48 31c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1s.4-1 1-1h30c.6 0 1 .4 1 1zM48 21c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1s.4-1 1-1h30c.6 0 1 .4 1 1z"></path>
				</g>
			</g>
		</svg>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-file-icon',
	properties: {
		compact: {
			type: Boolean,
			value: false
		}
	},

	_getWidth: function(compact) {
		return compact ? 49 : 90;
	},

	_getHeight: function(compact) {
		return compact ? 65 : 120;
	}
});
