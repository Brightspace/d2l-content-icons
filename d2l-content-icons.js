import './d2l-sound-bar-icon.js';
import './d2l-file-icon.js';
import './d2l-google-drive-icon.js';
import './d2l-one-drive-icon.js';
import './d2l-open-one-drive-icon.js';
import './d2l-folio-app-icon.js';
import './d2l-scorm-icon.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-content-icons">
	<template strip-whitespace="">
		<style>
			d2l-sound-bar-icon,
			d2l-file-icon,
			d2l-google-drive-icon,
			d2l-one-drive-icon {
				display: flex;
			}
		</style>
		<template is="dom-if" if="[[ _isExpectedIconName(icon, 'sound-bar') ]]">
			<d2l-sound-bar-icon compact$="[[ compact ]]">
		</d2l-sound-bar-icon></template>
		<template is="dom-if" if="[[ _isExpectedIconName(icon, 'file') ]]">
			<d2l-file-icon compact$="[[ compact ]]">
		</d2l-file-icon></template>
		<template is="dom-if" if="[[ _isExpectedIconName(icon, 'google-drive') ]]">
			<d2l-google-drive-icon compact$="[[ compact ]]">
		</d2l-google-drive-icon></template>
		<template is="dom-if" if="[[ _isExpectedIconName(icon, 'one-drive') ]]">
			<d2l-one-drive-icon compact$="[[ compact ]]">
		</d2l-one-drive-icon></template>
		<template is="dom-if" if="[[ _isExpectedIconName(icon, 'open-one-drive') ]]">
			<d2l-open-one-drive-icon compact$="[[ compact ]]">
		</d2l-open-one-drive-icon></template>
		<template is="dom-if" if="[[ _isExpectedIconName(icon, 'folio-app') ]]">
			<d2l-folio-app-icon compact$="[[ compact ]]">
		</d2l-folio-app-icon></template>
		<template is="dom-if" if="[[ _isExpectedIconName(icon, 'scorm') ]]">
			<d2l-scorm-icon compact$="[[ compact ]]">
		</d2l-scorm-icon></template>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-content-icons',
	properties: {
		icon: {
			type: String,
			value: null
		},
		compact: {
			type: Boolean,
			value: false
		}
	},
	_isExpectedIconName: function(icon, expectedIcon) {
		return icon === expectedIcon;
	}
});
