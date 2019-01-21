import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-folio-app-icon">
	<template strip-whitespace="">
		<template is="dom-if" if="{{compact}}">
			<svg xmlns="http://www.w3.org/2000/svg" width$="[[ _getWidth(compact) ]]" height$="[[ _getHeight(compact) ]]" viewBox="0 0 19 20">
				<g fill="none" fill-rule="nonzero">
						<path fill="#565A5C" d="M17.883.828a.23.23 0 0 1 .153.153c.024.076 2.26 7.703-3.32 13.285-5.582 5.581-13.21 3.344-13.285 3.32a.229.229 0 0 1-.154-.153C1.254 17.357-.983 9.73 4.598 4.15 10.18-1.433 17.807.804 17.883.828" opacity=".1" style="mix-blend-mode:multiply"></path>
						<path fill="#D3E057" d="M18.142 1.375s-5.044-1.532-9.918.97v8.948l9.918-9.918z"></path>
						<path fill="#D66DAC" d="M17.171 11.293c2.503-4.875.971-9.918.971-9.918l-9.918 9.918h8.947z"></path>
						<path fill="#14C5DB" d="M8.224 2.345a12.461 12.461 0 0 0-3.136 2.293C-.46 10.186 1.824 17.692 1.824 17.692l6.4-6.399V2.345z"></path>
						<path fill="#FEED58" d="M14.878 14.429c1-1 1.743-2.064 2.293-3.136H8.224l-6.4 6.4s7.506 2.284 13.054-3.264"></path>
						<path fill="#FFF" fill-opacity=".5" d="M18.273 1.897c-.074-.336-.13-.522-.13-.522s-.188-.057-.523-.131c.033.152.07.337.107.546.397 2.266.778 7.707-3.501 11.986-4.28 4.28-9.72 3.899-11.987 3.501-.209-.037-.394-.073-.545-.107.073.336.13.523.13.523s.187.056.522.13c1.794.395 7.858 1.28 12.532-3.394 4.675-4.674 3.79-10.738 3.395-12.532"></path>
						<path fill="#565A5C" d="M5.74 5.29C10.415.618 16.478 1.503 18.273 1.898c-.074-.336-.131-.522-.131-.522S10.636-.91 5.088 4.638 1.824 17.692 1.824 17.692s.187.057.522.131C1.951 16.03 1.066 9.965 5.74 5.291" opacity=".1" style="mix-blend-mode:multiply"></path>
						<path fill="#565A5C" d="M2.275 17.568l6.044-6.044h8.462c-.519.94-1.19 1.867-2.066 2.742-4.678 4.678-10.856 3.663-12.44 3.302M5.25 4.801a12.168 12.168 0 0 1 2.742-2.064v8.46l-6.045 6.045C1.587 15.66.568 9.485 5.251 4.802m12.44-3.303l-9.237 9.237V2.495c3.946-1.957 7.998-1.278 9.238-.996m-.67 9.563H8.782l9.237-9.237c.283 1.239.965 5.29-.995 9.237m-1.982 3.53a12.584 12.584 0 0 0 2.318-3.173.212.212 0 0 0 .028-.052c2.487-4.905.995-9.997.976-10.06l-.006-.012-.007-.016a.228.228 0 0 0-.113-.113l-.016-.007-.012-.005c-.062-.019-5.154-1.511-10.06.976a12.594 12.594 0 0 0-3.225 2.345C-.253 9.653 1.296 16.586 1.566 17.624L.03 19.16a.23.23 0 1 0 .327.326l1.537-1.537c1.037.27 7.97 1.82 13.148-3.358"></path>
				</g>
			</svg>
		</template>
		<template is="dom-if" if="{{!compact}}">
			<svg xmlns="http://www.w3.org/2000/svg" width$="[[ _getWidth(compact) ]]" height$="[[ _getHeight(compact) ]]" viewBox="0 0 66 66">
				<g fill="none" fill-rule="nonzero">
						<path fill="#B9C2D0" d="M50.75 2C60 2 66 8 66 17.25v33.5C66 60 60 66 50.75 66h-33.5C8 66 2 60 2 50.75v-33.5C2 8 8 2 17.25 2h33.5z"></path>
						<path fill="#FFF" stroke="#B9C2D0" stroke-width=".5" d="M49.75 1C59 1 65 7 65 16.25v33.5C65 59 59 65 49.75 65h-33.5C7 65 1 59 1 49.75v-33.5C1 7 7 1 16.25 1h33.5z"></path>
						<path fill="#565A5C" d="M50.58 13.626a.5.5 0 0 1 .332.333c.05.165 4.897 16.69-7.196 28.783s-28.618 7.247-28.783 7.196a.496.496 0 0 1-.333-.333c-.05-.165-4.897-16.69 7.196-28.783s28.618-7.246 28.783-7.196" opacity=".1" style="mix-blend-mode:multiply"></path>
						<path fill="#D3E057" d="M51.141 14.812s-10.928-3.32-21.49 2.103v19.386l21.49-21.49z"></path>
						<path fill="#D66DAC" d="M49.038 36.301c5.422-10.561 2.103-21.49 2.103-21.49l-21.49 21.49h19.387z"></path>
						<path fill="#14C5DB" d="M29.651 16.915a26.999 26.999 0 0 0-6.795 4.968c-12.02 12.02-7.07 28.284-7.07 28.284L29.65 36.3V16.915z"></path>
						<path fill="#FEED58" d="M44.07 43.096a27.006 27.006 0 0 0 4.968-6.794H29.65L15.786 50.167s16.263 4.95 28.284-7.071"></path>
						<path fill="#FFF" fill-opacity=".5" d="M51.424 15.943c-.16-.727-.283-1.131-.283-1.131s-.405-.123-1.132-.283c.073.329.153.73.232 1.183.862 4.91 1.686 16.698-7.585 25.97-9.272 9.272-21.06 8.447-25.97 7.585-.454-.08-.855-.159-1.183-.231.16.726.283 1.131.283 1.131s.404.123 1.13.283c3.888.855 17.026 2.774 27.154-7.354s8.21-23.266 7.354-27.153"></path>
						<path fill="#565A5C" d="M24.271 23.297c10.127-10.128 23.265-8.21 27.153-7.354-.16-.727-.283-1.132-.283-1.132s-16.264-4.949-28.284 7.072c-12.021 12.02-7.071 28.284-7.071 28.284s.405.123 1.131.283c-.855-3.888-2.774-17.026 7.354-27.153" opacity=".1" style="mix-blend-mode:multiply"></path>
						<path fill="#565A5C" d="M16.762 49.898l13.096-13.096h18.334a26.393 26.393 0 0 1-4.476 5.94C33.58 52.88 20.194 50.68 16.762 49.899m6.448-27.661a26.365 26.365 0 0 1 5.941-4.474v18.331L16.054 49.192c-.783-3.43-2.99-16.808 7.156-26.955m26.955-7.156L30.151 35.095V17.239c8.55-4.241 17.328-2.769 20.014-2.158M48.716 35.8H30.858l20.015-20.014c.612 2.685 2.09 11.46-2.157 20.015m-4.293 7.648a27.265 27.265 0 0 0 5.022-6.875.458.458 0 0 0 .06-.113C54.893 25.835 51.66 14.8 51.62 14.666c-.003-.009-.008-.017-.012-.026-.004-.012-.01-.023-.015-.034a.494.494 0 0 0-.245-.246l-.034-.014c-.01-.004-.017-.01-.026-.012-.136-.041-11.169-3.274-21.796 2.114a.484.484 0 0 0-.114.06 27.286 27.286 0 0 0-6.874 5.021c-11.218 11.219-7.86 26.241-7.276 28.49l-3.33 3.33a.5.5 0 1 0 .707.707l3.33-3.33c2.249.585 17.271 3.942 28.49-7.276"></path>
				</g>
			</svg>
		</template>

	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-folio-app-icon',
	properties: {
		compact: {
			type: Boolean,
			value: false
		}
	},

	_getWidth: function(compact) {
		return compact ? 19 : 66;
	},

	_getHeight: function(compact) {
		return compact ? 20 : 66;
	}
});