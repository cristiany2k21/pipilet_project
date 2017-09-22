// thanks Jake! https://github.com/jakearchibald/simple-serviceworker-tutorial/blob/gh-pages/sw.js
var currentCache = 'REPEATE_TODO'

// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
polyfillCache()

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function onServiceWorkerInstall(event) {
	console.log('install event', event)
	// We pass a promise to event.waitUntil to signal how
	// long install takes, and if it failed
	event.waitUntil(
		// We open a cache…
		caches.open(currentCache).then(function addResourceToCache(cache) {
			return cache.addAll([
				'/bundle.client.js',
				'/bundle.server.js',
				'/jpg_avada.jpg',
				'/jpg_coming_soon.jpg',
				'/jpg_mav_ipad.jpg',
				'/jpg_mav_parallax.jpg',
				'/jpg_mav_photo.jpg',
				'/jpg_mav_veste.jpg',
				'/jpg_mav_works.jpg',
				'/png_about.png',
				'/png_about_color.png',
				'/png_contact.png',
				'/png_contact_color.png',
				'/png_home.png',
				'/png_home_color.png',
				'/png_pipilet-acceuil.png',
				'/png_pipilet-color-number.png',
				'/png_pipilet-cook.png',
				'/png_pipilet-presentation.png',
				'/png_pipilet-songs.png',
				'/png_skill.png',
				'/png_skill_color.png',
				'/png_work.png',
				'/png_work_color.png',
				'/styles.min.css',
				'/',
			])
		})
	)
})

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function onServiceWorkerFetch(event) {
	console.log('fetch event', event)
	// Calling event.respondWith means we're in charge
	// of providing the response. We pass in a promise
	// that resolves with a response object
	event.respondWith(
		// First we look if we can get the (maybe updated)
		// resource from the network
		fetch(event.request).then(function updateCacheAndReturnNetworkResponse(networkResponse) {
			console.log('fetch from network for ' + event.request.url + ' successfull, updating cache')
			caches.open(currentCache).then(function addToCache(cache) {
				return cache.add(event.request)
			})
			return networkResponse
		}).catch(function lookupCachedResponse(reason) {
			// On failure, look up in the Cache for the requested resource
			console.log('fetch from network for ' + event.request.url + ' failed:', reason)
			return caches.match(event.request).then(function returnCachedResponse(cachedResponse) {
				return cachedResponse
			})
		})
	)
})


function polyfillCache() {
	/* eslint-disable */
	if (!Cache.prototype.add) {
		Cache.prototype.add = function add(request) {
			return this.addAll([request])
		}
	}

	if (!Cache.prototype.addAll) {
		Cache.prototype.addAll = function addAll(requests) {
			var cache = this

			// Since DOMExceptions are not constructable:
			function NetworkError(message) {
				this.name = 'NetworkError'
				this.code = 19
				this.message = message
			}

			NetworkError.prototype = Object.create(Error.prototype)

			return Promise.resolve().then(function () {
				if (arguments.length < 1) throw new TypeError()

				// Simulate sequence<(Request or USVString)> binding:
				var sequence = []

				requests = requests.map(function (request) {
					if (request instanceof Request) {
						return request
					}
					else {
						return String(request) // may throw TypeError
					}
				})

				return Promise.all(
					requests.map(function (request) {
						if (typeof request === 'string') {
							request = new Request(request)
						}

						var scheme = new URL(request.url).protocol

						if (scheme !== 'http:' && scheme !== 'https:') {
							throw new NetworkError('Invalid scheme')
						}

						return fetch(request.clone())
					})
				)
			}).then(function (responses) {
				// TODO: check that requests don't overwrite one another
				// (don't think this is possible to polyfill due to opaque responses)
				return Promise.all(
					responses.map(function (response, i) {
						return cache.put(requests[i], response)
					})
				)
			}).then(function () {
				return undefined
			})
		}
	}

	if (!CacheStorage.prototype.match) {
		// This is probably vulnerable to race conditions (removing caches etc)
		CacheStorage.prototype.match = function match(request, opts) {
			var caches = this

			return this.keys().then(function (cacheNames) {
				var match

				return cacheNames.reduce(function (chain, cacheName) {
					return chain.then(function () {
						return match || caches.open(cacheName).then(function (cache) {
							return cache.match(request, opts)
						}).then(function (response) {
							match = response
							return match
						})
					})
				}, Promise.resolve())
			})
		}
	}
}
