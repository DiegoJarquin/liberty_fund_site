'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b833fe285f75f79a9a144ebf7ce171fb",
".git/config": "5a45d494954c29c91f83e786c6669665",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "0a866f3af3a5e9b1b71fd1eb99b8568e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cbbaebd6e5e1b26bcd4b1bd8c1741547",
".git/logs/refs/heads/master": "cbbaebd6e5e1b26bcd4b1bd8c1741547",
".git/logs/refs/remotes/origin/master": "3d101bf4807839a798143fa7a3492099",
".git/objects/06/4fdff6668b6febb652b44f9a2e176ba926cd42": "e3a8abb0d86ae3cae1be1ca0ab0b50fc",
".git/objects/07/82efd1a1d41abd3b64fb955bef879af218a1c7": "b2545c288f81ab3d1cff770e3851d0f1",
".git/objects/08/0b005161a7b7fac1ff885b4166327db118f8b0": "f77d82c91847f8ad0077de06bc5a1cd4",
".git/objects/0a/1a8a5a466b90fe4ca3a702e9f6cbd48bd0e968": "4309495985855d0a876f6f3bc2967435",
".git/objects/0c/29382b4a823cd05bda5b42979827d37e84897f": "f27b9f39c701c877a52368e233eb30d2",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/0c33dfc214ce3103dbac27c573566b1cb288e8": "3c22ed6e400c14cc38fd754d9cb6850a",
".git/objects/11/6c8952b8a72975a3fabf3b120aa983a33ecd54": "9c2cd494732e4c39724b1a460ae87b65",
".git/objects/1b/f272c0de7f19eb9eb442a5be6b2a00acbde02e": "77870eb9dd6c2bcb340a76cbc1dd12df",
".git/objects/1c/864ac397d4ec7da2590d989576bb76d610fd35": "983c0ef5c75366ba9feadf24b8413a3c",
".git/objects/1d/c8f69ea3d1f7af39a819a70e06f683a1c91b68": "1d8146ebaf16979face354c190945673",
".git/objects/22/f08de79e69ad9fd0305c39bf38e3819fe83cb6": "d683bf51e5e72b4bce96b6032635f258",
".git/objects/24/815d12b5e01cd474edf35453189cdfb995b819": "d9820a897c44ecd4cb403b8795443dd3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/c7584acd51e607baa04bf3067d8d0a6413528c": "868cdd736ebfcd17ca62b4d5a2cff32c",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/676f4424ffa071c719701cd8799c913c3f30c5": "f0ebe674179a404422011129b2bb9c49",
".git/objects/2c/0d8fbedd3aa559c648c43728e5fb71bec7a460": "a75ae8b79c36159891c7193657419a0c",
".git/objects/2c/9337f07558d20d11734952666c2b5a95dce69c": "d0cd83f5696751e787afd756d21a15ca",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/baad8d8e8bf388d051c3a1faf5d7cb0da78360": "aebafb7cb42365457a421873ce0c5dbe",
".git/objects/32/595cf0cfa0381299ab1fc6767d13464791cf43": "fb7baba58e00fdcc4ae80a073171ab52",
".git/objects/33/fb20fda67b8f0ec05590da04e1c86bb8971826": "162e864b2a2efaf97db06de1b293d309",
".git/objects/34/1c7d4781d50c6d9232faba3a36b1ae8aa7162d": "f794f8b72f8c55c2ecf5f57d0c4a622b",
".git/objects/36/5c6bdfa075eb9e52b04d826d72cb4b8a5fd4d9": "74b20d835a487a6da135e347a2c4b22a",
".git/objects/37/bfea0d8c0154c70395815e145161bd9aebad7b": "d96f83ee1cd900f63d88e9887a15fe2f",
".git/objects/38/9df24fc4ae28f4664ea2575e60d562bd662abf": "6c45e0c3e82cc101df65890b00164496",
".git/objects/38/e19b36dc0d9b7b4d74753f7048e2341dd0206f": "0820eeb16ff39ef488b3d8bebd5809e3",
".git/objects/39/18b901678c8ecab0a937903a0fe0f067c6087e": "f071d1a35c5e82d97777c05d50cdbd83",
".git/objects/3a/9faeddf2dc8e63cc5f3833229fbed05010103b": "c18780893769aa68be71899256e48cd3",
".git/objects/3b/5b24f9a464547740065b6fd84acf1e5f93507f": "cb307df67be26245225fce24a7259595",
".git/objects/3c/168069ed9b8cab4f74372f378f8b4be1320264": "b5c35625499fb1a7289320df6d17ba44",
".git/objects/40/3d5e18d4390dd4ab39a0e348e558c6afc3308c": "40da3c0ea3ca7a207437d1992600f575",
".git/objects/44/a324c549ca34b07c9c1fb2578890d221ab2b2c": "68a4e570d77d36d1de9c6703a9afe95a",
".git/objects/44/fb76737ffc213ebcf84b1d9ea6d9fc22449d94": "124328347fa041f3d8c22720a96ed1c5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/24f8701f73981ceec0ca96530fe84d2646fec9": "baf45a76aaf5122054aa52e96f1ff756",
".git/objects/49/4d42f2c3ed408878e1fd97d6288914c9a8f866": "14024a8a6a155ce2af00b76671e8d727",
".git/objects/4a/8b1df8baf116aeff2156a67dfcb636d7547a1f": "5791c2553f22cd116400eda0e941de4e",
".git/objects/4c/585008818a54c84d31e396f6dc758fde69e8f1": "8f5f9e1ef832fe55ac303c81c1a5f15e",
".git/objects/4d/96713905a43307142397dc7ab324394cfdcfdd": "baecb3304f962aec2e37a86e5ca42601",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/57/48cb184e64fa43ed4063a4a4a91a6b083d698b": "f345af1485f0907270d5200f2e587bf3",
".git/objects/57/4e63e60476ef98504c7bf38b286eaec311ab54": "f6249e2f33c9ef4698684e08a3357aed",
".git/objects/5a/bf3247806d0ab317e00dc9f249f3ae856fd1a6": "53c985d21b13d882b70af27e6176ac58",
".git/objects/5b/05355b7936c79433552e6a89b401f021874640": "9ce358cb3c7704a058f4ed1bb9d8e95f",
".git/objects/5e/6251f09041b191ac8b2897390af9123eaf5076": "73a878ef55e7f40b0074714974ba9556",
".git/objects/5f/82f053963f617d99afe1fccdf81299db63ce16": "1f374eb8c121cef76b0f9ad4e3872fd0",
".git/objects/60/75700c7ff0f7334401c2d2a90c59340c6e4fce": "7c046ed4bec8d118eada1d5ddf192941",
".git/objects/61/56782869bc450492ed8a539aa05b0ef3be04c4": "92a50ebe5b8623b84db0e146b294e0bd",
".git/objects/62/3f4478958f4e675deff02b20140bd5ab82a7a6": "caf899aad5d0926a48d3a0c0e149498e",
".git/objects/65/1fe579515d1f9bcb568aa02dc39205f0500357": "7854f4691b9933817e9f929bab4cf052",
".git/objects/65/2c6e067f1b513a3dca7214c55147d6ef5d18d5": "f9ebb3983baf7bc9cc507ffb9f1fd67f",
".git/objects/69/2f0a8613ce3be0aa09d7229f9a87a5e91d381e": "2b87349b12f679b10697e456e690e98d",
".git/objects/75/d0f31d9a54fea60e5ffdd8bed51842ab6a415c": "a64557e5467e1b7bb27e7a8ada29fc4f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/5c5f5fdc61d7d10bbd9b8831242fa48edaa772": "3dc495ede01a75c4858a38855c40627a",
".git/objects/79/b80297196aa29e25806d23efe0dca9a7318331": "4251b18408cf021c836c7fb097592408",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/16d77232abd0f6c64fcaf95f7c9327ed86bea5": "d06c288236c8eaa0d03fb75c062081c8",
".git/objects/7b/33fbcf875850a01f563a6bf80f27d6fc78edeb": "3bafd381794913340216f1a2593f18f8",
".git/objects/7d/2268ecb9adb825d36d4bb20f70bb5815b44485": "46904ec6815fe8fa7a8787cc04716c75",
".git/objects/82/240b23fe79b8c8e801b8a9b0faaaefc8fc6eb8": "23e243f22bdf7e3b2a13eab692092169",
".git/objects/84/5098bf5484e9a12a972b45bb8fd20ae5049556": "0bd915eb7ab9fe934fea40455d749f1e",
".git/objects/84/58fd8b2ae5f64481a46d314583a90b58adfc1a": "20cbb82924ce052336798c9ac1277fdb",
".git/objects/85/0ba25ff1470e9df27a7d895bf322e35eaec680": "9af397270f3dcd2c350a89ddc9aad811",
".git/objects/85/c4d3641c0fd4dce1bbb0eaf356ffc349292aed": "fc9390d2ce7870dbaa819148ec07de35",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/54b784ff3eb8aaac77a97ae3d1b72eb5b92829": "4a8d66496091f381b82d4755c0ec584c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/41828a4b28e4570b13d85d5692e173b619cc70": "0bcd3d80c9ddd6de7bff84698fb93489",
".git/objects/94/05011bc2c922cbb94a962764968400a919f8fb": "4fc7a7332a2fd6521d1ff853e334c419",
".git/objects/94/ca34098dcc17a08cccdd72ff5d048dac23aa00": "6b12fb8068577c94b24ef3d54b158d56",
".git/objects/96/b2eb5c6b620e2f6ba7c3ed32727735780287d6": "c3c6ab5d6b798fa19964787e928def5c",
".git/objects/97/b55a34cc52f2c651615e0a76224ad9efa9777c": "f03fae7168dbf95319a568dcdbf57bdb",
".git/objects/9c/c14bf25ad25919eb6a6199406b7aa22681eb0d": "a61ba3660e105ffcb7840951b68499ea",
".git/objects/a0/ac26d4059c69a6c9faf1822605fafb97ccf558": "c1edef886fd5b8e66ffacec7d45282b7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/cad1af547f9dbdf721d0e551ed1c9803665451": "b39ab227223b022750bae7393718c968",
".git/objects/a6/040a11807ca84580a10001e2771dbd97705bc3": "15c44bde6c616367cdba8d5eb0c8092b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/b6/ee276efa2ef4317527d89e3f4ca542a21c1505": "0706a3f5a53f42ef64234dea0fa73a26",
".git/objects/b6/f47f5191dbee7496bc3561841f0f18744a86d3": "1414f9eee3ef747d197bf43ae8f76722",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a8dae9d2ec64d65fae2c0ba33cee7bf5628eba": "215c234ddccccf28e749a018ef2ef73a",
".git/objects/b8/e220a008269f92f39cf3f1b121e86e0c8e18da": "cf4821ac65c2d17b9bd9dc1e2f97a9f2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/36ec2c4a756b0bd602aa1c1af2f1eb75c1b01e": "ffb0a2beae8cccc4a0680ce1f3c86122",
".git/objects/c5/32f0738c619b609eee1a92447964e8d9ae2567": "0b733142ad3c77d88589176acbc70e51",
".git/objects/c7/4171c2d4d1d9c302d94bb083f01b61e8b44cc8": "d3b93f519cf47ab85b233455120987bd",
".git/objects/c8/0fbac63edb3e1e4270ec2ccfbbdd9f45209c0c": "15426d605d8ceaeaf037e2a7255a8bd9",
".git/objects/cc/cdcaa7fdb8d039685b848b4938c4d414c59bd6": "60305b347991e13a2ea7fd145fcc7aaf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/f3c015e64dba3de7cb6ccd177637ac834b5492": "5b8c884e3065af94bb39046eb2337009",
".git/objects/d0/6c2a35e5540b33b452603ccee1b6693f687f0e": "ca0ad31082525a9d43341a316c66bb90",
".git/objects/d4/d350bde71a792077fc6610170099a6b04eed05": "cc0c0a0ad6ef181522fab1853f5fad28",
".git/objects/d6/704311767defe1ade2cba84b752ebc54eb663f": "17abc1edb7acc794ebaea739aa931aee",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/cd94a7c19d87089f4ea798f8f7dd35ad7b0d85": "314754e8f108e832f1953f74654f6e78",
".git/objects/db/491b5c0d6e43ba87a5188321cbd826aae530b9": "3bde7ca63b60a4579cef44c0cc3f96f9",
".git/objects/dd/c4396347f9616a00b31798118ea387fecc3b59": "97659d9195439b443400bcad37d7843a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e3/c6ce758af7101cacffbdaa2460eb196d10d11f": "fc24ceccc7fc841a2942dcad32a90b18",
".git/objects/e3/f4f965bea5981da64df57d89ea64b01e83a4fe": "27dbe27cc02bec782b5923b30b9d72ca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/8be2cf6728b97ca20776e738e6ee3de74b4a80": "2a34acb770a0008919738255b18da2e2",
".git/objects/e9/b581364182f87c2eaed277ca7c6ea834b6e09b": "0ffa8a2e53bf5773170201bbff8d520b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/1e78822dd7147f151ff5e7ab9ba16a2772d34d": "670a2a2b1fc2dfc1d96f51f63a95135e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/283fa2e4adaa03179802adf6e1ae394a78bf2b": "9b562a834b8fa9c1ec5b56e618e7e614",
".git/objects/ec/f7ef0bf7128ed29a003f9a6b24f65ed5476e38": "5c5ed3584ae91c41e09b10486894cfef",
".git/objects/ef/51be08bc36fd86b94908e8ddfc80cf4e608309": "00b9ec226b089819071a721919cf058c",
".git/objects/ef/68673069094d39a03033011915c4c96dec785d": "590abd06fa43bb624bcd9173cfd60b1e",
".git/objects/f9/32f120accf02474744ab31b2127dab485f1139": "44f5023f8f61c89d7bc6bae900a4da48",
".git/objects/fa/bd22969b77919a99d7812200cf98e14a67cde8": "d654744dd8c45815fe4a85036c58734c",
".git/objects/fb/7649b20ffa290f5cabcf90e0511aba231ca6c6": "a1682ddd70137df36674b69f58c1af6e",
".git/objects/fc/9d4dd836d09665ca95ea2dd9e44ac8f44d3917": "0b0904842f4e2539064859a300acf10a",
".git/objects/ff/d7a56e564525e45e81693e76098f8dabd99840": "dc8da8cfe25c2cc92b9f97ff157f9817",
".git/refs/heads/master": "cacf7068659b08b8d0d96e14e64d46e5",
".git/refs/remotes/origin/master": "cacf7068659b08b8d0d96e14e64d46e5",
"assets/AssetManifest.json": "e047e10d032a63c6622b12a4c0b34a64",
"assets/assets/fonts/DINCondensed-Bold.ttf": "5846f45b4c6987e591316047f0840020",
"assets/assets/images/4008.webp": "f2ebb425067229f5a3e3d1acde0dfbe4",
"assets/assets/images/event.jpg": "90e3d8dab3528e1d19b2d6ea2678ff25",
"assets/assets/images/expo.png": "296ff33b44f9acce397c911dc9172d23",
"assets/assets/images/LAF.png": "de2f6fd0e6757dfc8daf50df7a7c44bf",
"assets/assets/images/LAFlogo.png": "7bd4afdc3ebffa6a91ae996f5eb2cc1a",
"assets/assets/images/LAFtext.png": "a6e7546c5b7b753d90883ab3580dac5c",
"assets/assets/images/summit.jpg": "20ae6b3e4560e434416ad70887f841b6",
"assets/assets/images/tech.png": "2c2573ba6838bb11ab97db317e2691a9",
"assets/FontManifest.json": "f3b724759e523e2441aa468576f481d9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "812bcf00bfd477d565fa4ba7a5a4f242",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5917f9d78a8fd4b0c5577c2cfe0f5117",
"/": "5917f9d78a8fd4b0c5577c2cfe0f5117",
"main.dart.js": "0ad41a62835f3e4190598b1742c17cff",
"manifest.json": "82f1dabbea58cf8dcf7627701925ff27",
"version.json": "0d1f38a91a1df8108cb431d97eda5aac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
