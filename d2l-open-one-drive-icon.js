import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-open-one-drive-icon">
	<template strip-whitespace="">
		<svg xmlns="http://www.w3.org/2000/svg" width="252" height="200" viewBox="0 0 252 200"><g fill="none" fill-rule="evenodd"><circle cx="100" cy="100" r="100" fill="#E8F2F9"></circle><g fill="#094AB1" fill-rule="nonzero"><path d="M78.824 135.412c-7.247-1.81-11.285-7.57-11.297-16.118-.004-2.733.193-4.042.875-5.8 1.672-4.308 6.1-7.558 11.924-8.754 2.899-.596 3.792-1.235 3.792-2.714 0-.465.345-1.847.766-3.073 1.916-5.567 5.462-10.208 9.252-12.107 3.966-1.987 5.968-2.435 10.766-2.409 6.814.037 10.213 1.515 14.968 6.508l2.615 2.746 2.342-.81c11.338-3.924 22.64 2.755 23.551 13.917l.25 3.053 2.232.8c6.376 2.284 9.373 7.082 8.83 14.133-.356 4.612-2.512 8.294-5.927 10.121l-1.606.86-35.686.068c-27.423.053-36.14-.044-37.647-.42z"></path><path d="M52.071 130.482c-4.23-1.005-8.713-4.742-10.815-9.015-1.193-2.424-1.256-2.78-1.256-7.069 0-4.078.102-4.733 1.051-6.758 2.001-4.27 5.835-7.355 10.646-8.566 1.015-.255 1.97-.664 2.12-.907.15-.243.318-1.567.372-2.942.335-8.542 5.94-16.069 13.765-18.486 4.228-1.306 9.54-.984 14.138.855 1.459.584 1.295.709 4.379-3.335 1.823-2.391 5.509-5.365 8.525-6.88 3.256-1.636 6.641-2.389 10.69-2.379 11.317.028 21.07 7.106 24.676 17.91 1.153 3.45 1.095 4.417-.264 4.446-.593.012-2.293.339-3.777.726l-2.698.703-2.462-2.462c-6.942-6.942-18.271-8.442-27.902-3.695-3.848 1.896-6.94 4.619-9.275 8.167-1.665 2.53-3.788 7.248-3.788 8.42 0 .831-.673 1.246-3.547 2.189-8.9 2.918-14.093 9.658-14.09 18.282.002 3.14.81 6.98 1.932 9.18.423.829.66 1.618.525 1.752-.344.344-11.414.228-12.945-.136z"></path></g><g fill-rule="nonzero"><path fill="#006FBF" d="M250.047 94.72l-13.67-16A7.803 7.803 0 0 0 230.49 76c-.958 0-1.908.183-2.797.54a7.992 7.992 0 0 0-5.026 7.46v10h-52.801a6.001 6.001 0 0 0 0 12h52.801v10a8.005 8.005 0 0 0 5.085 7.48 7.34 7.34 0 0 0 2.738.52 7.694 7.694 0 0 0 5.886-2.74l13.69-15.98a8.144 8.144 0 0 0-.02-10.56zm-2.934 7.92l-13.689 16a3.83 3.83 0 0 1-2.933 1.36 3.621 3.621 0 0 1-1.37-.26 3.998 3.998 0 0 1-2.542-3.74v-12a1.984 1.984 0 0 0-1.955-2h-54.757a2 2 0 0 1 0-4h54.757a1.984 1.984 0 0 0 1.956-2V84a3.998 3.998 0 0 1 2.542-3.74c.435-.175.9-.263 1.369-.26a3.86 3.86 0 0 1 2.933 1.36l13.69 16a4.038 4.038 0 0 1 0 5.28z"></path><path fill="#FFF" d="M247.11 102.64l-13.69 16a3.83 3.83 0 0 1-2.933 1.36 3.621 3.621 0 0 1-1.369-.26 3.998 3.998 0 0 1-2.542-3.74v-12a1.984 1.984 0 0 0-1.956-2h-54.757a2 2 0 0 1 0-4h54.757a1.984 1.984 0 0 0 1.956-2V84a3.998 3.998 0 0 1 2.542-3.74c.435-.175.9-.263 1.369-.26a3.86 3.86 0 0 1 2.933 1.36l13.69 16a4.038 4.038 0 0 1 0 5.28z"></path></g></g></svg>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-open-one-drive-icon',
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
