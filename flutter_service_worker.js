'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "265998e356c9819807dfbcfe32742774",
"index.html": "3bad63d18ded675c1ebb763bbdb933e6",
"/": "3bad63d18ded675c1ebb763bbdb933e6",
"main.dart.js": "c2be42855909031b34dbab14282f8e15",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "335780e58bae02d6e06737c7f7fc08fa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8dba681cac85d6de351c25cf352d7577",
".git/config": "73d763413189e73e967c6be7bd7899e6",
".git/objects/61/537b8fc5819f54d8928d81943a758323eadc84": "2f249b3b3abbf2082ee382771c5e4e5c",
".git/objects/0d/4b9bf74aeb9bf30d956b9f2fc3b1cc01272b08": "9ba5c1ff50fca33c974fec1bb36f9cc0",
".git/objects/50/f7d4c9b352f8981aaa3117868ac5dc9e6cd63f": "8292f0b5d44ce1d4a47ade56d4b94950",
".git/objects/6f/180a61809249b1fefe2512a1bc8fc741ffcc40": "983974424282b55caeb9610c61df6064",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/29f991da05acf8ab401c03b308a4f8eab21374": "9b935165b583eef33898e34270d69e06",
".git/objects/35/e6388b1c331a8c7e98f9ad82515602d77e4548": "d2bf913b09385643c5174997880e16e7",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/51/9559245b2f7ad8e7b24983fa1193d2a23f35b3": "05925c613c10caa39dfdd48a19dc64a5",
".git/objects/0b/1f074a1240fc78ebd6d43bb892d6d35b777ea1": "335d85a812e5d613d6e0cbb6d1182318",
".git/objects/0b/fef5fe4550915d0e2ce49c8a2578814075dbc8": "6738a1ac52eb4ea35c1e710ed6d90cf0",
".git/objects/94/75bdc008c6d4fbce5c9c35aa61f1c61db546a3": "25cadd5e992faceb741d97a27042d9e7",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/fcf148f017a82963abc34c96493e2c162c9b40": "04ffd5942dbb1eb5a97797f58d2e4247",
".git/objects/33/239457c4fb05735c8418719e4d1d576344094e": "cc5a762e294abe22b0d6c3641da3ddfd",
".git/objects/a4/10a0b7618e0655d6fb1570582364bddc14f90c": "8580eac0457cadc459c38f67e35e0be3",
".git/objects/b5/5d7fdaf5142b81e392fbcd4951752342039782": "7a45bac1e7adaebf176d9a6d64d4d278",
".git/objects/d9/9347165cd82e8a02eba3e47f5cd4c13563ad28": "e8c309407a26d7d4d92a70975c51ccf8",
".git/objects/ac/a3e94f1fe9d55a36889e550624e0c71c68c1a8": "030899da60062fe506f43feee10b0133",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d1/2c9d6fefde467c46e7087b7bbdbfd93329b33e": "49f254a8bb091b7e4831e1ea00409387",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6884db5da30eb9af0851323000519fbe165a54": "686c732b08d8123576a1d0834b82ff4e",
".git/objects/ab/bb5ba74f707f4ce4434faaa3e000a19eea4a74": "3a580b7b1c29ec1b7b61a6ca1aa936b0",
".git/objects/e5/ab7a37979f05054425aff3b3e43857a8499d7d": "7362e3626c47c297fad11b9325a00283",
".git/objects/e5/b5840925f71bae7df5c55337121927fff8a67c": "35b153fcd06190a516bd238b7bea9060",
".git/objects/f4/74c50f4bb8e70a69294ebf31965ea70522e3fb": "2316bd1f0f0bcf70bf37e62cb1a14f6d",
".git/objects/f4/6d699730b6e4fa4e43cb4d4744a81fa0151961": "b3a6b6d696bfc946ff5096ee22430c37",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/f2/48e02343288c1a167839295a8add53979287c8": "7d4e6890e4b5aae440a81aa71129e6a2",
".git/objects/ca/04488e9fca8b36cee1d7026518c46ab931f755": "1711f2a84b83c4087dd17bb15308d794",
".git/objects/20/e8a7bd29d16dca0ce0b514cdcde05d04f1eee8": "2a09b428a3e3aa8e155811ff6bde6fee",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/9aa777cff0ad8290ec21c0bbc0d00c1248cc7d": "050952c9e7387ee83f01779f599660b4",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/7d/639e1ea1805f60b8e326513bb249744e8df255": "d51bc7b45e86c40d1d57a370f4ec6e0a",
".git/objects/29/5faa44b914d012ce1c160d59acb1d3d5607ad8": "e8223dbae8341c25dc66584d2e7ed181",
".git/objects/7c/49f4b4064b8e039450a88ba99c2f44b15ef317": "913d4c3e8192eaa6417808930cf1f615",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/b83037bedc9f1841f6d2aef4d35fd732a594fa": "631d4881cdf375abe0ccef24aade5231",
".git/objects/28/cc06a8a90878a67f2cf5eb84835b57f0a725ae": "8c67cfcf66579d07e8f3744f3854da12",
".git/objects/8a/c07b38dcd23fa3cd4e6ad3b3f1ccd5e754afa2": "702ec9d6659094960ce409ccfcf064e5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/44f0e2dd8b3e24cba0be58c391dd045fcf5f12": "ed2092cc59424e9d17a923975aeada01",
".git/objects/72/721051c6dd9bde0be8029a84ef18cab8828be0": "808cebb76d9ad33c10020b67e8312453",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/2a/252003932b98e126a585a41826cb40ba7c363c": "5c0599d77fbfbfbd91a9d453c4a57819",
".git/objects/2f/6b883ed0b65ed21ddf98f8ef5b378af60b599b": "76cb9d1331317c4c7fec2b3c9506bab8",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/3b6f0651d1c5a77705aac5343d4bdfbcbbe879": "7c22aba35f9f9113f10290279368ba75",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/3a/38cff0b5fad0bed82218d910a633e296fa4f57": "280e33981e809f5f82bd73237b019168",
".git/objects/37/66568727f1a392248af174c5dcdd22da84f521": "0b9498e45b96fa73a737e82b6b6eeb40",
".git/objects/08/28f7dccaec2b7ee19126a29143b08b9b7a0dda": "4ba3174f3432fcbc42ec850cc904b0c8",
".git/objects/06/a9000cce8efcc2157ddfd68ff04b91b264845e": "6b5041eb0b5ead8e5dba968f73a61af7",
".git/objects/06/0a580490a24e5e5c44aa7ce82d1589fc1ee295": "9f6ef269716eb89a2701320a58d39ce3",
".git/objects/39/b7cfa3479f6f13eff71054f5a7a24901e69607": "d996ee7605cb813e110585677e6785e4",
".git/objects/52/ab4482da62bd449656877db9ab2b0b23b39ad1": "a0b0a93e67b1d6d08152be119fb240ed",
".git/objects/d3/aff6ab7e6da9e57f17f4056a99a30f95dac2e0": "0b3752b4b8a1d5538f69ea402b0c0370",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/720c4866fe7ab9f8c1a1201575946ef9dac910": "506bef7d0e4c338ef5e723883e871a8c",
".git/objects/dc/fa2c88c33a93b4c032d5a8afba214a545dc769": "2798d93fe19fc709b764a479dc611c1e",
".git/objects/d5/0eb2c4ff6aa93ef39c3dd51a2aa5c026032f30": "022e308efbb98a3d6bbab99e657539b1",
".git/objects/aa/20ba44dbc27787cf88d3e94c970ec82ad0cec0": "6edee4bf6f8c57c838c62353f1f99bbc",
".git/objects/b7/87ad64da20a8ed7eabc3c3a1d07e5362b806f5": "8a0610bd87f533b211ba33546b9e5b71",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a3dd258c7cdaa617d9bd997bb714ec32b76f82": "8793739c1b4396cf8741607a1c14a297",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/e703d9d2ff7d0c10bab717be7f5bf925c5efc1": "a4f745b1fa7fc575a1c1645ab83bc1b1",
".git/objects/c3/20658e76c27fcbd8d963afcc61c49f354fdaa4": "6d2082675277a3b284e9b562468a924c",
".git/objects/f0/ccc5e62c8630b5cd8d1312e9186863c4f717c4": "51bba8946dffba7323291bd598c5f889",
".git/objects/f6/e23dec8c9305871ba4cb5c08732e480a30d929": "cc782e04dc59f524560b9528ed9bcc22",
".git/objects/f1/23add3a6cae5faaad9f421ec8e633676b516f3": "3dcbe1c217144b24421046099173dcef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/4a/9a090b1a95a718769c2d3c543b2757d23fc58c": "7f463d9b82d5eb70ea9eef0f6a2a856f",
".git/objects/23/9d07e77217fca5abb965ebb5937c3f2fd0b6bd": "a03e6e39b6bf79ac3b8d63d2b376823f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/14/325b63e13cd6becf74035b9f64a1858568fd39": "05eacd3ec18967afaeea8b8014f138cf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33e7e15775042e1159d6b7979cef64ee",
".git/logs/refs/heads/main": "90af125a0a478df87cfb05c46e1af9a1",
".git/logs/refs/remotes/origin/main": "f9972bd6a0cfcfc3b1f32e055dad70fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4aa3ef1224b0501eb40bbb783a62b115",
".git/refs/remotes/origin/main": "4aa3ef1224b0501eb40bbb783a62b115",
".git/index": "0c4994d2f434d4923a6f48d8a40007a3",
".git/COMMIT_EDITMSG": "e00dc261e95bcbeb4749069001f0dff6",
"assets/AssetManifest.json": "e2d3eb20cfe871f01f92c5998c938af7",
"assets/NOTICES": "ca375357e917afb53c5ee3d4ed51295c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "49f2f3fe0282f2477737ab51527de11c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/rich_editor/assets/editor/rich_text_editor.js": "721b10824c41b95096cf8d17bf2060fa",
"assets/packages/rich_editor/assets/editor/interact.min.js": "15f08c5f4b5f988ea5d4973c08e146c2",
"assets/packages/rich_editor/assets/editor/editor.html": "8c10bd81bcca4b91b352773aeca06827",
"assets/packages/rich_editor/assets/editor/style.css": "f665c7a648f0189794176aa8cab28f6a",
"assets/packages/rich_editor/assets/editor/platform_style.css": "8c60cbb7472dad1bbceee9e1abf2e3d1",
"assets/packages/rich_editor/assets/editor/normalize.css": "1e4f1b9133d9ae6468c84fa5cd82c921",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "fe187924c70cfac4b929a3bcd4c3dfb0",
"assets/fonts/MaterialIcons-Regular.otf": "7ef66c8f98c318f4e8d88e8d2f55a1c0",
"assets/assets/en.png": "2817f24d9cda8ce4b7236c9e553d6053",
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
