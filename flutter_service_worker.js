'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "265998e356c9819807dfbcfe32742774",
"index.html": "355e9b7b263d0f3aa5ead388eb431b73",
"/": "355e9b7b263d0f3aa5ead388eb431b73",
"main.dart.js": "8c27209b4ccc146bcba7b40a0f663ac7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "335780e58bae02d6e06737c7f7fc08fa",
"icons/Icon-192.png": "6392d8f1fae022610320f139d0065bf7",
"icons/Icon-maskable-192.png": "6392d8f1fae022610320f139d0065bf7",
"icons/Icon-maskable-512.png": "00f218c5ff84feb29b1f3921b2a300dc",
"icons/Icon-512.png": "00f218c5ff84feb29b1f3921b2a300dc",
"manifest.json": "e7402db04a62287b5cd398955b236fa8",
"assets/AssetManifest.json": "bd13612b55447b2048e0f186452382cc",
"assets/NOTICES": "b7ff7d02a4804b0fa90d168290b40c0a",
"assets/FontManifest.json": "a083d585c1f7dbce502c938784489669",
"assets/AssetManifest.bin.json": "8be9abc8a3e90e312267fe2160c697c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/rich_editor/assets/editor/rich_text_editor.js": "721b10824c41b95096cf8d17bf2060fa",
"assets/packages/rich_editor/assets/editor/interact.min.js": "15f08c5f4b5f988ea5d4973c08e146c2",
"assets/packages/rich_editor/assets/editor/editor.html": "8c10bd81bcca4b91b352773aeca06827",
"assets/packages/rich_editor/assets/editor/style.css": "f665c7a648f0189794176aa8cab28f6a",
"assets/packages/rich_editor/assets/editor/platform_style.css": "8c60cbb7472dad1bbceee9e1abf2e3d1",
"assets/packages/rich_editor/assets/editor/normalize.css": "1e4f1b9133d9ae6468c84fa5cd82c921",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/hyphenatorx/test/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/packages/hyphenatorx/assets/language_id.json": "f13ed90293f4759c31b711d6aa12d112",
"assets/packages/hyphenatorx/assets/language_zh_latn_pinyin.json": "0573cdf79d552dd0cec5b08e4e5c0cc3",
"assets/packages/hyphenatorx/assets/language_as.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_da.json": "120cd341e7b9582160fa1864b0e74607",
"assets/packages/hyphenatorx/assets/language_af.json": "28351132e29a4511c32916f6e95d20ec",
"assets/packages/hyphenatorx/assets/language_mn_cyrl.json": "cdc092042cea8027a762702578ff5477",
"assets/packages/hyphenatorx/assets/language_kmr.json": "e6fc99875809b0cd60763dd3cb956547",
"assets/packages/hyphenatorx/assets/language_lv.json": "4972684b7c56349e81e0d0092f2bf88b",
"assets/packages/hyphenatorx/assets/language_mul_ethi.json": "e1d9121676a508f1186e1a51c9510ca9",
"assets/packages/hyphenatorx/assets/language_te.json": "aab19b4ed89174a98527126f4c8f5278",
"assets/packages/hyphenatorx/assets/language_de_1996.json": "6a166052a23eb375b4c25e323e9089ed",
"assets/packages/hyphenatorx/assets/language_cs.json": "c6beadc7b7ef04593018ec84b43106bb",
"assets/packages/hyphenatorx/assets/language_nb.json": "d9a86ca6b22c640f446c7b29d9533a79",
"assets/packages/hyphenatorx/assets/language_sh_cyrl.json": "2d6190383adddee8216db3ae6a6a803e",
"assets/packages/hyphenatorx/assets/language_nn.json": "ad703f572cbdc2951ace902f31021c65",
"assets/packages/hyphenatorx/assets/language_sv.json": "e96a74ac989f945a532519c09ddeb8a5",
"assets/packages/hyphenatorx/assets/language_th.json": "81a169edd244703cd2e0c1fe5c42502b",
"assets/packages/hyphenatorx/assets/language_es.json": "879a7b1392bdef59a1690765b9fefdff",
"assets/packages/hyphenatorx/assets/language_ga.json": "b7500e754a15e0dd6a673ed8974ff639",
"assets/packages/hyphenatorx/assets/language_fr.json": "92bf3f19cb4d2bb2862fb7f478b7a169",
"assets/packages/hyphenatorx/assets/language_et.json": "ef1082d6d2a9e8c9f3e364b25ee54ee6",
"assets/packages/hyphenatorx/assets/language_cy.json": "d99fadaee445724bf24c78149f3c14c4",
"assets/packages/hyphenatorx/assets/language_kn.json": "295d3717aae5e668f88ad73e367b425f",
"assets/packages/hyphenatorx/assets/language_hsb.json": "1c810859645ad347733939a53e4eecf4",
"assets/packages/hyphenatorx/assets/language_eu.json": "f95aa286d216c74f6c1bd020e23a6a80",
"assets/packages/hyphenatorx/assets/language_gl.json": "f867ce63a47135031212ed4b314b5b1b",
"assets/packages/hyphenatorx/assets/language_gu.json": "1aaad8f7c610501f8e3afed18de7a865",
"assets/packages/hyphenatorx/assets/language_ca.json": "c9031d91386a3a29df196db082dd4c4a",
"assets/packages/hyphenatorx/assets/language_hi.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_bg.json": "53cfe5471051d7148f8ce3ab7c39f415",
"assets/packages/hyphenatorx/assets/language_de_ch_1901.json": "c5951052fb095c90db9a6844c31277db",
"assets/packages/hyphenatorx/assets/language_ro.json": "cad16d9be24633726f4c546f89752043",
"assets/packages/hyphenatorx/assets/language_eo.json": "d64fcffc1b960c7f9fdf01dfb1967ef0",
"assets/packages/hyphenatorx/assets/language_ta.json": "7ad8015adba2d581dad1d0bd9a37de4d",
"assets/packages/hyphenatorx/assets/language_uk.json": "59e4e985ee5e1b55c6261cf207543050",
"assets/packages/hyphenatorx/assets/language_ru.json": "ee7ba571494729f6730ac42d29f1ddf9",
"assets/packages/hyphenatorx/assets/language_pl.json": "465eb8b4886d611a78c4d637816aa747",
"assets/packages/hyphenatorx/assets/language_pms.json": "9edb405668d8786e1d4318a3e6a18126",
"assets/packages/hyphenatorx/assets/language_fi.json": "984fa6c4c8d432224468d3a2e9479ccc",
"assets/packages/hyphenatorx/assets/language_grc.json": "6a7e746a8a45e7c3ec3f155e1027c653",
"assets/packages/hyphenatorx/assets/language_ia.json": "4fd10dfc676dd12813255cfdbd10160c",
"assets/packages/hyphenatorx/assets/language_hr.json": "c47afa087612fcec9b03e359ecba21c9",
"assets/packages/hyphenatorx/assets/language_it.json": "818ab0c9a1a3dcd1616078901418030b",
"assets/packages/hyphenatorx/assets/language_pt.json": "783fb19ab0b5c6c74900a641be956a7b",
"assets/packages/hyphenatorx/assets/language_rm.json": "10dcdf08d92a0b32b168eaa0453faf3c",
"assets/packages/hyphenatorx/assets/language_la_x_classic.json": "ab126029009d7641218aaea72fe86d14",
"assets/packages/hyphenatorx/assets/language_cop.json": "6e473484979b4f998316355c83acfe36",
"assets/packages/hyphenatorx/assets/language_sk.json": "03a6f38dd4e0c47946c1cc4d225b2b35",
"assets/packages/hyphenatorx/assets/language_ml.json": "1b34f0a9b12c9a155f419473c1e5650b",
"assets/packages/hyphenatorx/assets/language_pa.json": "9ed942ab0486b9522b56db118ec0fb44",
"assets/packages/hyphenatorx/assets/language_ka.json": "6c3fc528796096ce2ca3a7ec5543069a",
"assets/packages/hyphenatorx/assets/language_is.json": "eec6ce02aa68c8917a557a9d11e485d3",
"assets/packages/hyphenatorx/assets/language_mn_cyrl_x_lmc.json": "20a0ad88ddcaf7551b2845e74b018070",
"assets/packages/hyphenatorx/assets/language_lt.json": "193c8ed815fda87ec76e550beb2c6b13",
"assets/packages/hyphenatorx/assets/language_mr.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_tk.json": "460bb1d91f8e41b5c6a5fe5668074dc3",
"assets/packages/hyphenatorx/assets/language_hu.json": "a21372487888973207c8b9b6700b2270",
"assets/packages/hyphenatorx/assets/language_el_monoton.json": "d0aab2d432c3891039ecb2bcaa172bc9",
"assets/packages/hyphenatorx/assets/language_el_polyton.json": "38c019caffe09b4c9555bd4bdac9c1a2",
"assets/packages/hyphenatorx/assets/language_bn.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_la.json": "a841100589d9500afbd41f9aaac78c19",
"assets/packages/hyphenatorx/assets/language_hy.json": "fc7ed76ad3ac4dbec9492d520c87ef0a",
"assets/packages/hyphenatorx/assets/language_en_us.json": "218751cee7b6d50fcdc76671639b1f59",
"assets/packages/hyphenatorx/assets/language_en_gb.json": "37cef53e88a438af9fcc0c9c39f77d71",
"assets/packages/hyphenatorx/assets/language_or.json": "0d577fbc142e3d37474d4f6ae1be1d00",
"assets/packages/hyphenatorx/assets/language_sl.json": "2e1f16dc4243cfb69147858ad4d9a15b",
"assets/packages/hyphenatorx/assets/language_fur.json": "5cb194c03480526b59d399c92c851b35",
"assets/packages/hyphenatorx/assets/language_tr.json": "768a6e3a51913f04387ffb73cddcdc37",
"assets/packages/hyphenatorx/assets/language_de_1901.json": "a0bd6a5e3079be7f61bff91bf26887d3",
"assets/packages/hyphenatorx/assets/language_sa.json": "3f75df9404ef3fcfd4028517f1808f04",
"assets/packages/hyphenatorx/assets/language_nl.json": "2d4b858e6f31e3931e23c325496dc683",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "01b48268a55861188eb60c9bcee5b829",
"assets/fonts/MaterialIcons-Regular.otf": "d64c8730c7532dfa9bb01813f13a3fbc",
"assets/assets/en.png": "2817f24d9cda8ce4b7236c9e553d6053",
"assets/assets/fr.png": "7b959eda7cc9468f8a6632dc6565ba75",
"assets/assets/Logo_Background.jpeg": "7b2c94fa51b157ad346c49836126ad08",
"assets/assets/Logo.jpg": "c34527f4097078be177e7f30dbc8995e",
"assets/assets/de.png": "76534eca4cef1aa1ac8e4e16942f8406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
