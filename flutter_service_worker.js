'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f5ca2160979850dcd1db2e2e7f5018c9",
"version.json": "3002bfd77fb30ff9ccc8f6ef849eed72",
"index.html": "443db6bfe0babe735a6c82011ac40bbf",
"/": "443db6bfe0babe735a6c82011ac40bbf",
"main.dart.js": "9441d4e2dea31a7ee6a3ba2a9b9077af",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"cors.json": "2fc7d99b8cfa324b3392b6f0930c3bfd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1dcc54022830bfe175c9012c37f0bbc0",
".git/config": "a930e1430b13733531fc22fbdc75ba55",
".git/objects/92/0a885edfb6c1fee62d48654453d09b374402da": "18a465c9670209c54eb9148564005126",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/285008d64657e768433ec8664e818d652ea6e3": "29916166d52a01dc3da39b55a9c3cf34",
".git/objects/9b/4161c3f7eba24623dd8b275aecf3bf2ca4b076": "32ad92009db5f23241563e56bb00a378",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/0b/f26dc2bd45cd0280e476acbb4f6535f3a6ff22": "92dade6fcd602dd7dddf2c9bba15fdc8",
".git/objects/5f/174e3a385b43db6d67034cd53060ec2684009e": "cdc467dfd956f332078d6c609c0e80cc",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/1350dcd65052fbe8e19554d29263b080be426b": "288c9e0d77260df591c841b53c81d9c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/760747192c1d1b780b7ab546e36085a136e15f": "95fc884b916185de1a94d2f1479adffb",
".git/objects/ee/b71a41339121e82100a9915940e18591aedbe6": "4046395e58d6f4c892685ebac6fff13d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ed/bb02478f9938eabce94e0b3189073a935f13a6": "16a2d38425edace0ca6aaa5cfebdeea4",
".git/objects/18/a8f52349f19a235b72ba5eaa0135460d3922ce": "50332feb9295cd0a70994c54d6008e75",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/ba5dd9bd66a4c7ef7f7a743632caa495d2c7e0": "9f2cd112216112005998e8d9b88dd613",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/6689d7959b0132c936dd3a9ed83977765546c3": "4fead9ced8673c4ee41f975c1fcc4970",
".git/objects/26/1dfce59058804fa3aba2b817b1b29354d75d1b": "68390d6b7300b42d60556ee9b71813b2",
".git/objects/21/cfd950494063c3a6b8a01f475ea779e0a574d8": "f99d7f5a5019c814701d2d0274660bb7",
".git/objects/4d/d2473aa478f1c36ef8d090d43bfc7aa581dd7a": "c174b1513794cd9a9142be1eaae8f0fd",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/e7080b99136c87f122b164f3a30fbd6f528ca6": "31c36d0e3e3518044fef0bda28be2c6d",
".git/objects/62/e7f45f4789b5b5104555f5eb90c95cca5ff796": "8867172ec88ee8753b234ba87b24b43d",
".git/objects/96/fc0aae1fc56320c538263a3e60f5d79ca5c644": "8d763e5e8d2d9f31f9aaf440d9731979",
".git/objects/96/ffeb514ec965dc51e9b4b6dd1d27f6fc7ff8fb": "0742a26e7f2248a67c75fddda8260677",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/363dce349a5f6d1315cb29bd7dfd68aa1c5da4": "3009badd32c798ec43086ee0b47c152d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/60d294e285e9136b6acd42daf8dca5a2b5a765": "9ca759ba913378c71ce4815eae2a0572",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/4df7c37e11145d9777644555c6e67018904c91": "eca6e7f23e5f5f00196393b46b15ef14",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/8a6958865c464fbd8792f1f24f05fb50a4f2d0": "6b7a6ced9c0ebcd5f0a1b3fc23eea89a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/72ac347ebe86180529e0f4755598a9b89ea547": "1d57814e7488b5f5e1e908184dc252e8",
".git/objects/dc/a1ad30b576777caa021aea676c3f1924c71f98": "fbf3a5e12ee0d47644efec060fb2600b",
".git/objects/aa/4bcde1de52897cbe4bc0753acc2caa90cece73": "76445d18c6eff2ec110ba7e88ecaf65b",
".git/objects/af/ac989d9a52cb563cf8354ab90a7e434254e007": "678e0d95ca1d5a9aa900e6b614059fb1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/beaef9d0f179af8245e5e2d7691d0a655b6a1a": "f3687223ec03562f7b6a1056ee8e50f8",
".git/objects/b0/87c3c6bedf29a1594f1e8c65821ad2f6b95e3d": "eddf5c56f40a94a2dda5da42a88b03cd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fa/448b6729209bc8dfe96c85ac4b270862d6e6f3": "e029024f577513d3fdc2d82f778c101a",
".git/objects/fa/deb122f1b8728e185fe285d3466ee7d3af091e": "1218ad0c043dd1ad98c540337e524b0e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/2d/71d6ce4999d39a0d9cb5e0108c1895c9e768c2": "08890ac7f95d077b4a7e74afa9f6311f",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/f27fa6c6755bec107cbef5f41e0e470f48efa9": "d976d31af281b2ae18aa0cc87961ccea",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0d5c6cbc8fc720ac9e1d54735634103",
".git/logs/refs/heads/master": "e0d5c6cbc8fc720ac9e1d54735634103",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/master": "67b1f1e048451f37671eb4f6113d5b9a",
".git/index": "1f55ad93f265e0a10126ba6dff1fe4db",
".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
"assets/AssetManifest.json": "ccf760bc37a94e3ffc1cebf160c79301",
"assets/NOTICES": "c2bed7d9db9125e4122c3220700b4286",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "aae551f81966af4da3fa2dc7a33c2c5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "20f0cc8c1ec67af352484284edf6d7ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cde8ac2d9e412830b55b61f5496f954a",
"assets/fonts/MaterialIcons-Regular.otf": "74e55a8a1fe25ece03215ddc10f15b2c",
"assets/assets/trugroser.png": "52b232b155223167004029cef825a0bb",
"assets/assets/cengage.png": "f61537bcea2cbc1a6f539083535e6475",
"assets/assets/techtonic.png": "28c64682572650cb55270ca441b3cd43",
"assets/assets/care_assign.png": "09745d23838371741cac203dddfc314b",
"assets/assets/sfa.png": "cabc940f7227769e2e1215616457d26f",
"assets/assets/amity.png": "104196697025c585e49364679eed307c",
"assets/assets/tcp.png": "7ce62d28d72d1b4c963e4790b24a56d2",
"assets/assets/ebl.png": "451db23f32dc9f536813fe0cb0bcd0fa",
"assets/assets/airmymd.png": "4be4da98588ff2cf873556a04dd39d1c",
"assets/assets/ventspace.png": "16c75c957b38e2b2f2269cc38ed8600c",
"assets/assets/dahn.png": "4248095766b683cf14525fcf7401c3ed",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
