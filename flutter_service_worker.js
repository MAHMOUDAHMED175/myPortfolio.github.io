'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9e3faa62e3b48f4d004130e796410cf0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7746ea777dd315adc02223fcdc456281",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "178a62bb96384c5b8db88c8c1d165830",
".git/logs/refs/heads/main": "d891999064c2a68241821bbcd55a2de0",
".git/logs/refs/remotes/portfolio/main": "8dd1dd4b5967a643c5ae9ee812204fd6",
".git/objects/78/d7d27e56d6b921a1876fbd99e2e25475474354": "81ac018fba3b6ed0f96dea1f08a6a2e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/8df694ad8816400e5d57cd3c937c4e69598c6c": "82564aa1ea885acf6304b5bfc15afa31",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/df/18dd9a6bbde75734db43ce90b9501f1d17b682": "3f2812155fd10f8aafee692458fd007c",
".git/objects/df/b468366dd4541d0acaa4ff547368d5433ced65": "778146c5fb4134cb8f78fd7f720a47d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "13fcdd63094052f31f76c7070b66b39c",
".git/refs/remotes/portfolio/main": "13fcdd63094052f31f76c7070b66b39c",
"assets/AssetManifest.bin": "6c6094a1be65ab242794325683c806ff",
"assets/AssetManifest.bin.json": "696f66e04a01e01c0fdc6320021d254a",
"assets/AssetManifest.json": "a9c2682d91e19af39cd921815cab2b4b",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/Grantena.png": "e928893b80608a4f8b9334d5a9819701",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/certeficats%2520(1).jpg": "72c09e394f743946eed28e20454139d4",
"assets/assets/images/certeficats%2520(2).jpg": "f5c06a130d1680999c3c4b4b88190948",
"assets/assets/images/certeficats%2520(3).jpg": "e54129512e9a7776c913d7d65aab83c1",
"assets/assets/images/certeficats%2520(4).jpg": "48ce8d479b6ba01f9b52eff8d11cf87a",
"assets/assets/images/certeficats%2520(5).jpg": "55ef0cdfb0d8142517fa80c9e13b9a36",
"assets/assets/images/certeficats%2520(6).jpg": "97f5908ad1e705a8d9fdef97bd130f2b",
"assets/assets/images/certeficats%2520(7).jpg": "a07377ab02ac26e0e41149634665ef48",
"assets/assets/images/certificat.png": "910f98a3a958ba81ed9667a5fd829dcf",
"assets/assets/images/certificats.png": "925451eed6d748f7c536abb5a6490b54",
"assets/assets/images/e-commerce%2520(1).jpeg": "9d47ee93a13e82b03d50a013e780106b",
"assets/assets/images/e-commerce%2520(10).jpeg": "7527a6e2df40870d7ee2e255f3024fd2",
"assets/assets/images/e-commerce%2520(11).jpeg": "0c5ef6a5b95e2e102829307e7c968862",
"assets/assets/images/e-commerce%2520(12).jpeg": "cd9cf790d35fe408db0ba9a2b4bb6d94",
"assets/assets/images/e-commerce%2520(13).jpeg": "67ca878b46163f8882f60923cf3b1837",
"assets/assets/images/e-commerce%2520(14).jpeg": "22bdfef3e65d5a9f2ec3f860d835f634",
"assets/assets/images/e-commerce%2520(15).jpeg": "17d4f4c3c5996cd30165ebb0174ccc32",
"assets/assets/images/e-commerce%2520(16).jpeg": "1966cb077b9088e9faf6f74a1fe0f313",
"assets/assets/images/e-commerce%2520(17).jpeg": "bb4b9fc7360f83db0d49ea15cb659289",
"assets/assets/images/e-commerce%2520(18).jpeg": "0a67a3b9137d85cf1162cb94ee530c0d",
"assets/assets/images/e-commerce%2520(19).jpeg": "1f0d3095fe5b1f62b61380a9d046868b",
"assets/assets/images/e-commerce%2520(2).jpeg": "338850a4abff70a5628f6350d4e39d22",
"assets/assets/images/e-commerce%2520(20).jpeg": "6ed2df4dd590fa4a68050bbdacce2d30",
"assets/assets/images/e-commerce%2520(21).jpeg": "43b778c9cf86fb60e01e0eb651b48ec4",
"assets/assets/images/e-commerce%2520(22).jpeg": "acc827b189b7e2b0da9bcb82aba926f5",
"assets/assets/images/e-commerce%2520(23).jpeg": "bab70ab54d2a58f8b760b57a6515784e",
"assets/assets/images/e-commerce%2520(24).jpeg": "071a3a02036acc685d56cba36296a186",
"assets/assets/images/e-commerce%2520(3).jpeg": "37ef56c28be33374550b2c5617610172",
"assets/assets/images/e-commerce%2520(4).jpeg": "24b5e1a0efa75718a8db76102b291aba",
"assets/assets/images/e-commerce%2520(5).jpeg": "ce2a0f563e1ca67058735acee47e86ac",
"assets/assets/images/e-commerce%2520(6).jpeg": "855c43f103232b6bd40449b70d202548",
"assets/assets/images/e-commerce%2520(7).jpeg": "f300542fea1ac4b94f0750423eea21bc",
"assets/assets/images/e-commerce%2520(8).jpeg": "56275beae155c547e4165ca5cd0a4344",
"assets/assets/images/e-commerce%2520(9).jpeg": "70f36fda229f48503819149b91670de0",
"assets/assets/images/erp%2520(1).jpeg": "98657d620c4f0789156e62e727fb9312",
"assets/assets/images/erp%2520(10).jpeg": "d203fb0b6204e165c17358e3b6ff3086",
"assets/assets/images/erp%2520(11).jpeg": "f7fcac3c1dc3ff37df272bc69f8d298b",
"assets/assets/images/erp%2520(12).jpeg": "5a24d45cfe54d23017d37a2c5fe9535b",
"assets/assets/images/erp%2520(13).jpeg": "072bafb8e3e3320c6e90b8c478ec86d7",
"assets/assets/images/erp%2520(14).jpeg": "dbf618b2f33789000f94e1552267aaf5",
"assets/assets/images/erp%2520(15).jpeg": "566be9458a2551b335be62c90c6600bd",
"assets/assets/images/erp%2520(16).jpeg": "cce82f147c9912859fa5a60ea916772b",
"assets/assets/images/erp%2520(17).jpeg": "d9cd5ae8107acd913f3bb7bf2f083717",
"assets/assets/images/erp%2520(18).jpeg": "6153fb17e84a8cc69913d085af01a606",
"assets/assets/images/erp%2520(19).jpeg": "4c818c008031050783908db1bc79893d",
"assets/assets/images/erp%2520(2).jpeg": "ddc0c989c46d6610c63ff7e4adc0be18",
"assets/assets/images/erp%2520(20).jpeg": "fe521dfc8fed6df418ccbe16112033aa",
"assets/assets/images/erp%2520(21).jpeg": "0e8219fcbf342d7de334a2021cdf4fdf",
"assets/assets/images/erp%2520(22).jpeg": "93dbdeb77b589d1c0b06e8fccf891856",
"assets/assets/images/erp%2520(23).jpeg": "4c3756ecf30e3305b27e602f56e5424f",
"assets/assets/images/erp%2520(24).jpeg": "3c9c518287b67db8d91d3445a571b37b",
"assets/assets/images/erp%2520(25).jpeg": "facfb59da5aa8c8a8da23e7a4e2184c2",
"assets/assets/images/erp%2520(26).jpeg": "15766e1783a6926f19a44d98607b5187",
"assets/assets/images/erp%2520(27).jpeg": "d425d988d6e08654aa09f9be2e7c14d5",
"assets/assets/images/erp%2520(28).jpeg": "2608f4cbd42dea01ae7afb55383406ec",
"assets/assets/images/erp%2520(29).jpeg": "62a61ea4874693d820ca757071be6468",
"assets/assets/images/erp%2520(3).jpeg": "8837ebff96b7a51c6cc00da1e5c88def",
"assets/assets/images/erp%2520(30).jpeg": "19e595eb2c439b2b7a003772fd7bd768",
"assets/assets/images/erp%2520(4).jpeg": "c9be6265d590307f5e71a3056109eaec",
"assets/assets/images/erp%2520(5).jpeg": "868d03d5911e39a5408b2ba89f24ca72",
"assets/assets/images/erp%2520(6).jpeg": "0e68fc9b2a7515f8aee76d4f432cee7a",
"assets/assets/images/erp%2520(7).jpeg": "d6ea8931fa51c448c282787b20d3ee0b",
"assets/assets/images/erp%2520(8).jpeg": "361523c290f39562be2acb4f785887ba",
"assets/assets/images/erp%2520(9).jpeg": "7d54ed9d9506b86b93e9bb3fa043a6c3",
"assets/assets/images/face%2520(1).png": "789b6bc02691ec1d41a93b984ce1361c",
"assets/assets/images/face%2520(2).png": "4598dda217f81f3fa3821557c8a36405",
"assets/assets/images/face%2520(3).png": "a4bcb7c1ea383bfe22c2902395712b15",
"assets/assets/images/face%2520(4).png": "e6248bbba2c36dd73bfc6e8acc7b7af9",
"assets/assets/images/face%2520(5).png": "e85d0eedc46f393258fb088fe7927cec",
"assets/assets/images/face%2520(6).png": "26297c32a9180a093e66045cbdb8a0de",
"assets/assets/images/face%2520(7).png": "5df1e8e450967e6ac3c4f6edcd88f7c2",
"assets/assets/images/face%2520(8).png": "5c37732b2e79f79eff91c7a9792ef10e",
"assets/assets/images/face%2520(9).png": "aafe89ed16374f55a582e23816b7a220",
"assets/assets/images/face.png": "a65e3c015b4f7c90a3fb85eb8f5cb365",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/me.jpg": "27f726af632691b5e456537dc967e0b5",
"assets/assets/images/music%2520(1).png": "b1769c5af7ba4c7892db07d27421993b",
"assets/assets/images/music%2520(2).png": "aa1d16a1e7e86a222847bad95e7ae4f3",
"assets/assets/images/music%2520(3).png": "37942d410dcd3390847111803debe17a",
"assets/assets/images/music%2520(4).png": "451ea38cc97dbba375fa6168b34ab19d",
"assets/assets/images/music%2520(5).png": "585cc2a00826e7a764afdc338a4d7cbb",
"assets/assets/images/music%2520(6).png": "39261cad67a8328967f874e1a5902cab",
"assets/assets/images/music%2520(7).png": "4960ed11e957143cc9e0a612d72e3694",
"assets/assets/images/music%2520(8).png": "f713f119eccaf891da4df348667a98cd",
"assets/assets/images/music%2520(9).png": "abd2f943ebf987c98a39e36572dfcda2",
"assets/assets/images/news1.png": "8de274bf235b75ba620ebad92d8a455d",
"assets/assets/images/newss%2520(1).png": "b5d7a9d964861b7c1360c2ae9be29759",
"assets/assets/images/newss%2520(2).png": "209bbee6de9b52ee4f0fd84672e5dc9d",
"assets/assets/images/newss%2520(3).png": "d2682aec06f5aac78b47fa4fa394699c",
"assets/assets/images/noooote%2520(1).jpeg": "0d1e4fc07f0b88542c43e64ba590caf3",
"assets/assets/images/noooote%2520(2).jpeg": "23f6fea51886177d965f3b4ba4837fe0",
"assets/assets/images/noooote%2520(3).jpeg": "baa005a14456698bf4cfb4d458c97a2b",
"assets/assets/images/note%2520(1).png": "048364690f014bd94fc1cf432f2f9db2",
"assets/assets/images/note%2520(10).png": "3ed38588d3fac5819acb8283318026b9",
"assets/assets/images/note%2520(11).png": "31cbda02aefcb31bf7989645917e8213",
"assets/assets/images/note%2520(2).png": "027349c0ad48ebc31d25fbe957f48a25",
"assets/assets/images/note%2520(3).png": "31165493b6a9f340f541fa0835a032bd",
"assets/assets/images/note%2520(4).png": "a36fe724d407f68d3523bec7fac3da2b",
"assets/assets/images/note%2520(5).png": "ec7ffb5e89ca5bf019de95095da24d9b",
"assets/assets/images/note%2520(6).png": "5d2b5592af64ea1364778d3679cd1f63",
"assets/assets/images/note%2520(7).png": "82df664cdccb2c3fdd1333281b2fcea2",
"assets/assets/images/note%2520(8).png": "dd3d53d2c0e75d09f1bedd334a8774db",
"assets/assets/images/note%2520(9).png": "a52a3e338a5cef4d80c6e256484f9c17",
"assets/assets/images/note0.png": "531fb1a23cf7f455d8da009fe787e83a",
"assets/assets/images/payment%2520(1).png": "0f8b1b01096fb6e2d42a18e195376ff8",
"assets/assets/images/payment%2520(2).png": "3f16678674a30cb28885987997cb0e48",
"assets/assets/images/payment%2520(3).png": "cb8f11da6062cc4b79f296dc579d1b69",
"assets/assets/images/payment%2520(4).png": "011ddb4f04d24f6da1880ab378f9e097",
"assets/assets/images/payment%2520(5).png": "044a4e4534b9699f26445fbf1fd24f3b",
"assets/assets/images/payment%2520(6).png": "696b0c6bcf6e2ee2857ea5f32f22743f",
"assets/assets/images/payment%2520(7).png": "80a99420b657f71f2a500a16d316f084",
"assets/assets/images/payment.png": "cadbce7668d2a1fd30737f7c11f0d5cc",
"assets/assets/images/qoute%2520(1).png": "ba05bb1d95764788772dd79f781863f3",
"assets/assets/images/qoute%2520(2).png": "7ff4fa9ae217fcc9df5cfa10dff5197d",
"assets/assets/images/qoute%2520(3).png": "8bff809e5e9748a1240dc5a03b711ec4",
"assets/assets/images/qoute%2520(4).png": "3c8f3b5d7807511a0c08296a637270ac",
"assets/assets/images/qoute%2520(5).png": "1455db9fbf75944e25e8e62006b5bc02",
"assets/assets/images/quotes1.png": "3dba965cd43609234e707aa7ad02e4b8",
"assets/assets/images/quotes2.png": "629020f3825554a81e28e38b65e3c487",
"assets/assets/images/quotes3.png": "fbb9f79a9ebbaf1dcae1adf2ac9e0583",
"assets/assets/images/quran%2520(1).jpeg": "ee599c1580357d23843160d44d0063fc",
"assets/assets/images/quran%2520(1).png": "6738f3dcdbb359a9e22fc61e95dc87c9",
"assets/assets/images/quran%2520(1.png": "1a9e6cc7b7c8af75df8315e5550305bb",
"assets/assets/images/quran%2520(2).png": "a46b1b92663c37994b8abb768f216b1f",
"assets/assets/images/quran%2520(3).png": "cb06d51bd130ca199056e5503d9f9eb2",
"assets/assets/images/quran%2520(4).png": "8a3f441ac1846ba4b577e050dc735dcd",
"assets/assets/images/quran%2520(5).png": "6d05b7faae40efe7bec2001702bda452",
"assets/assets/images/quran.png": "39874194fde47dcada050c50282b3b80",
"assets/assets/images/reasturant%25207_10_2024%25202_07_25%2520PM.png": "564de65416fca918a815816db988f62d",
"assets/assets/images/reasturant%25207_10_2024%25202_07_58%2520PM.png": "a4e15b62eac41df7a864739c33fb74af",
"assets/assets/images/tertits%2520(1).png": "7f20736de6315a8c302c81dcd0cf108c",
"assets/assets/images/tertits%2520(2).png": "aa6f454f9f884b559021a21c1ceb332f",
"assets/assets/images/weather%2520(1).png": "2a2667ea461a58e1e4006fc225445624",
"assets/assets/images/weather%2520(2).png": "2a2667ea461a58e1e4006fc225445624",
"assets/assets/images/weather%2520(3).png": "417a4e1f97cda11b01bfd87379f52db0",
"assets/assets/images/weather%2520(4).png": "cdf1d6c3c28a664e554da22a0ca77829",
"assets/assets/images/weather%2520(5).png": "c9281e44f5e9634447e1239e9f56e171",
"assets/assets/images/weather%2520(6).png": "2cd127c4bc6ba62cef4008cb0f6f4a30",
"assets/assets/images/weather%2520(7).png": "ebaad2fc0a24eb7a2bb76e00bd72f6eb",
"assets/assets/images/weather.png": "dd4c62c39ee4bdbe5fbdd54b9f184c4c",
"assets/assets/images/WhatsApp%2520Image%25202024-07-10%2520at%252012.18.13%2520PM.jpeg": "058b353cab1178a96b0eac1b3a0f6684",
"assets/assets/images/WhatsApp%2520Image%25202024-07-10%2520at%252012.18.14%2520PM%2520(1).jpeg": "09cd0ddacd31d0bcd6bc43c34fba51ea",
"assets/assets/images/WhatsApp%2520Image%25202024-07-10%2520at%252012.18.14%2520PM.jpeg": "94382c76772c16712b339ffaccb8b9b8",
"assets/assets/images/zoom%2520(1).png": "0e7f2dc44f843766657fd8e73786e93b",
"assets/assets/images/zoom%2520(2).png": "9382b2ce811ce3d04a69670df06a2f32",
"assets/assets/images/zoom%2520(3).png": "e8eb5a47f23ab6cdcca8246aa01206e2",
"assets/assets/images/zoom%2520(4).png": "dec09cf985a55c6e95f4deb3b64b40d3",
"assets/assets/images/zoom%2520(5).png": "c3619569e420ab3b8624a2cdbef8442a",
"assets/assets/images/zoom%2520(6).png": "79c162fcf59d046695273e99445f183b",
"assets/assets/images/zoom%2520(7).png": "f6c69e72c6d442e9828068a60840b74b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/NOTICES": "e8613bc4a7a3736bfc5d0097326acd73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d4b76708f9684f8780eb79fff57a162d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "42cb28172d08bde4287ad9c902b226bd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "871f55fd7b4556b07e8b956a3cfc221d",
"/": "871f55fd7b4556b07e8b956a3cfc221d",
"main.dart.js": "95f2a213869e35003e7b311ee6518617",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"README.md": "a27556255e97d3d95667f400e44e3010",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
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
