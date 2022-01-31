"use-strict";

// Workbox RuntimeCaching config: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.RuntimeCachingEntry
module.exports = [
  {
    urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-font-assets",
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      },
    },
  },
  {
    urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-image-assets",
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\/_next\/image\?url=.+$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "next-image",
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:mp3|wav|ogg)$/i,
    handler: "CacheFirst",
    options: {
      rangeRequests: true,
      cacheName: "static-audio-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:mp4)$/i,
    handler: "CacheFirst",
    options: {
      rangeRequests: true,
      cacheName: "static-video-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:js)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-js-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:css|less)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-style-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\/_next\/data\/.+\/.+\.json$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "next-data",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:json|xml|csv)$/i,
    handler: "NetworkFirst",
    options: {
      cacheName: "static-data-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: ({ url }) => {
      const isSameOrigin = self.origin === url.origin;
      if (!isSameOrigin) return false;
      const pathname = url.pathname;

      if (pathname.startsWith("/api/blobbz")) {
        return url.search === "";
      }
      return false;
    },
    handler: ({ request, url, event, params }) => {
      function isValid(response) {
        if (!response) return false;
        const fetched = response.headers.get("sw-fetched-on");
        if (
          fetched &&
          parseFloat(fetched) + 7 * 24 * 60 * 1000 > new Date().getTime()
        )
          return true;
        return false;
      }

      return caches.open("blobz-cache").then((cache) => {
        return cache.match(request).then(function (response) {
          if (isValid(response)) return response;

          return fetch(request).then(function (resp) {
            const copy = resp.clone();
            const headers = new Headers(copy.headers);
            headers.append("sw-fetched-on", new Date().getTime());

            event.waitUntil(
              copy.blob().then(function (body) {
                return cache.put(
                  request,
                  new Response(body, {
                    status: copy.status,
                    statusText: copy.statusText,
                    headers: headers,
                  })
                );
              })
            );
            return resp;
          });
        });
      });
    },
    options: {
      cacheName: "blobz-cache",
      expiration: {
        maxEntries: 512,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      },
    },
  },
  {
    urlPattern: ({ url }) => {
      const isSameOrigin = self.origin === url.origin;
      if (!isSameOrigin) return false;
      const pathname = url.pathname;

      if (pathname.startsWith("/api/blobbz")) {
        return url.search !== "";
      }
      return false;
    },
    handler: ({ request, url, event, params }) => {
      const isValid = function (response) {
        if (!response) return false;
        const fetched = response.headers.get("sw-fetched-on");
        if (
          fetched &&
          parseFloat(fetched) + 5 * 60 * 1000 > new Date().getTime()
        )
          return true;
        return false;
      };

      return caches.open("blobz-collection-cache").then((cache) => {
        return cache.match(request).then(function (response) {
          if (isValid(response)) return response;

          return fetch(request).then(function (resp) {
            const copy = resp.clone();
            const headers = new Headers(copy.headers);
            headers.append("sw-fetched-on", new Date().getTime());

            event.waitUntil(
              copy.blob().then(function (body) {
                return cache.put(
                  request,
                  new Response(body, {
                    status: copy.status,
                    statusText: copy.statusText,
                    headers: headers,
                  })
                );
              })
            );
            return resp;
          });
        });
      });
    },
    options: {
      cacheName: "blobz-collection-cache",
      expiration: {
        maxEntries: 52,
        maxAgeSeconds: 5 * 60, // 5 min
      },
    },
  },
  {
    urlPattern: ({ url }) => {
      const isSameOrigin = self.origin === url.origin;
      if (!isSameOrigin) return false;
      const pathname = url.pathname;
      if (pathname.startsWith("/api/")) return false;
      return true;
    },
    handler: "NetworkFirst",
    options: {
      cacheName: "others",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
      networkTimeoutSeconds: 10,
    },
  },
  {
    urlPattern: ({ url }) => {
      const isSameOrigin = self.origin === url.origin;
      return !isSameOrigin;
    },
    handler: "NetworkFirst",
    options: {
      cacheName: "cross-origin",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 60 * 60, // 1 hour
      },
      networkTimeoutSeconds: 10,
    },
  },
];
