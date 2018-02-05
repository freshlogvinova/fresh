/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./about-us.html","79d8bf444efde843f5999a525dbdf751"],["./assets/5a1ff63c399e420001454433/5a1ff9f2faef01000140740f_bg.png","2d2c180bd40152049ca9666f1258f3f4"],["./assets/5a1ff63c399e420001454433/5a1ffe7dff34dd0001f2c734_logo_freshcode.png","341b93c47d1248f26e02acbbb66be3af"],["./assets/5a1ff63c399e420001454433/5a2009dd9772ff000146657f_FreshCode text.png","8129bf7cab9fd8f12834ac4a0127ac19"],["./assets/5a1ff63c399e420001454433/5a201983205b600001d49309_mail.png","1f93cdace37f4c174b243d68bb17d49c"],["./assets/5a1ff63c399e420001454433/5a2028efe0d483000174a976_icon_outdoor.png","029c93812ec06a8cd948ed98856b59b2"],["./assets/5a1ff63c399e420001454433/5a20290bab6ac100013d8e6d_icon_play_att.png","8ca50841d1cadd8bcf9d1a1072ab1d5b"],["./assets/5a1ff63c399e420001454433/5a20291d4ee3d200016a3668_icon_educadio.png","24e724dd48596a8fd16eee1331f4ff75"],["./assets/5a1ff63c399e420001454433/5a2111e058de520001259015_photo.png","d13c34e1216495d639014ec300e0aabc"],["./assets/5a1ff63c399e420001454433/5a21496fb8dded0001c09bf8_photo2.png","6f93893dbeea83158ca9b76787f1d850"],["./assets/5a1ff63c399e420001454433/5a215af630181c0001c2d93b_photo3 .png","96c71abc89929c00e7ea9c383f851c69"],["./assets/5a1ff63c399e420001454433/5a215de4897bf400019df9fa_photo4.png","d9a207d4a332c66a31d8c77cbcd4fc9d"],["./assets/5a1ff63c399e420001454433/5a215feb30181c0001c2dd88_photo5.png","36dea4a39834d357ec8ba86f7f185d81"],["./assets/5a1ff63c399e420001454433/5a250d15a1816d000132fa59_icon.png","087f219331f4736a79f72f6b91cbd087"],["./assets/5a1ff63c399e420001454433/5a250d93b1a83e0001a5f297_icon1.png","57273c0517aff4ea46cbadbee368bd43"],["./assets/5a1ff63c399e420001454433/5a250de798cc1b0001a76805_icon3.png","e6fea080192344de27ef04817bc37351"],["./assets/5a1ff63c399e420001454433/5a250f2d19e5440001d49b20_icon4.png","cb6921cfc88555e4d3c094c99ffee7b1"],["./assets/5a1ff63c399e420001454433/5a250f49a1816d000132fb30_icon6.png","604726abd9417586ee6db557734b3489"],["./assets/5a1ff63c399e420001454433/5a2a7f9addae7e00015bc659_icon_1.png","cbe26cc11305b9beff829a5e0f055ce8"],["./assets/5a1ff63c399e420001454433/5a2a9a2ac76e0b0001da79d1_photo_1.png","e42cbfc119990752394b169ca7fb50da"],["./assets/5a1ff63c399e420001454433/5a2aa5abddae7e00015be8a6_icon_2.png","bbf4bd5006802a65fea934dcd309fb6e"],["./assets/5a1ff63c399e420001454433/5a2aa5ec1d48380001ae5efb_photo_2.png","f08170fa57ad88ad738f88155bae55ef"],["./assets/5a1ff63c399e420001454433/5a2aa7c585c02500012f039c_photo_3.png","f5e373f71977b26cb8aea95e2ea2e8c7"],["./assets/5a1ff63c399e420001454433/5a2aab131d48380001ae6594_icon.png","816f8b39850026d205b373d46e6054d9"],["./assets/5a1ff63c399e420001454433/5a2ab0fc471aa50001b60e31_bg_services.png","88290aebe318f83f6c24a761c234d5bd"],["./assets/5a1ff63c399e420001454433/5a2ab6c85c2d060001ab392f_icon_1.png","6db300b6a8b450950f968da6905b70a4"],["./assets/5a1ff63c399e420001454433/5a2ab95eb5e1c5000119c377_icon_2.png","4cc4e0fd5ddd678bef29d2653cc3bac5"],["./assets/5a1ff63c399e420001454433/5a2ab9f1ed44860001eb397d_icon_3.png","fad940785ec42fc91bdb6ea6d5ee56f4"],["./assets/5a1ff63c399e420001454433/5a2e40e07cc425000194ba66_icon_4.png","279a6538f2fc4180f9d72cdb3cbd94d7"],["./assets/5a1ff63c399e420001454433/5a2e427a9374420001856673_icon_5.png","d2121f00609d0922a0873968cb9e006e"],["./assets/5a1ff63c399e420001454433/5a2e5b217cc425000194ce50_logo_css_3_hover.png","9622b65ed6efff040dee07444e99726e"],["./assets/5a1ff63c399e420001454433/5a2e5b3996bde90001f89c06_logo_xamarin_hover.png","03141fe49ee4301efce457dd96a1995e"],["./assets/5a1ff63c399e420001454433/5a2e5b464584a6000128ea77_logo_mysql_hover.png","c52d28356b000bc7a62644e023ef32c9"],["./assets/5a1ff63c399e420001454433/5a2e5b624584a6000128ea82_logo_meteor_hover.png","b6912cd540f73dda02eee372d32cfa04"],["./assets/5a1ff63c399e420001454433/5a2e5d237cc425000194cf03_logo_elasticsearch_hover.png","75e0e9db64b09ee2121204eb2698497a"],["./assets/5a1ff63c399e420001454433/5a2e5d4496bde90001f89ff0_logo_angular.png","65afb96249125f10c833df370e13c2bb"],["./assets/5a1ff63c399e420001454433/5a2e5d6896bde90001f8a009_logo_react_hover.png","12d89b975a5c5cc66fe5863c414c9684"],["./assets/5a1ff63c399e420001454433/5a2e5d98a298f50001126756_logo_typescript_hover.png","1981d06060cb3789cb1a1c898ac3b090"],["./assets/5a1ff63c399e420001454433/5a2e647b4584a6000128f263_logo_redux_hover.png","63750ac56f02a91830e34082933beca4"],["./assets/5a1ff63c399e420001454433/5a2e648ba298f50001126ed4_logo_javascript_hover.png","021e19405aa1ee675abc939d7de4985e"],["./assets/5a1ff63c399e420001454433/5a2e64a096bde90001f8a4f0_logo_dotnet_hover.png","dded7b9ef54db0bfb87a96c089da4951"],["./assets/5a1ff63c399e420001454433/5a2e64b07cc425000194d776_logo_nodejs_hover.png","402e6af2e0552f71b63f397eb6cd005a"],["./assets/5a1ff63c399e420001454433/5a2e64c3b31198000162f601_logo_html_5_hover.png","748bc4c2c7f69749a894199ae83637be"],["./assets/5a1ff63c399e420001454433/5a2e675d93744200018583aa_logo_java_hover.png","937a428681efbb82b8eb3c6be2ae8207"],["./assets/5a1ff63c399e420001454433/5a2e67697cc425000194d859_logo_mongodb_hover.png","359ab882a4273babb9f68549d5feb2a5"],["./assets/5a1ff63c399e420001454433/5a2e678196bde90001f8a6c3_logo_obj_c_hover.png","70c67a9449dfb6bcd15793bbff75decf"],["./assets/5a1ff63c399e420001454433/5a2e678ba298f5000112723d_logo_postgresql_hover.png","f0e8a6c43f7ade7ee7faa48c24c2c529"],["./assets/5a1ff63c399e420001454433/5a2e6797a298f50001127242_logo_clojure_hover.png","dcc9c919a9d40b696ba7966589b0dec9"],["./assets/5a1ff63c399e420001454433/5a30ed9749520e00017e534d_logo_c_hover.png","31a2283345a85b4f5d49763d4b709045"],["./assets/5a1ff63c399e420001454433/5a3123bf7b7a1700017b962c_pic.png","383fba4eb4e9e6d8eb5933333093da27"],["./assets/5a1ff63c399e420001454433/5a312f6e49520e00017e9335_icon_button.png","c5c983dd20b7923c54e20e7c31d1ab87"],["./assets/5a1ff63c399e420001454433/5a3143997b7a1700017bbffe_arrow_left.png","07d8cb18ce239933556179dfad930aa9"],["./assets/5a1ff63c399e420001454433/5a32a00a7b7a1700017d1226_cross копия.png","5092b6e06550b42d9b9df7a1d402983f"],["./assets/5a1ff63c399e420001454433/5a33c1bd5aec59000163b885_pic.png","43d27e20c11d98f9fa800d087eb078d9"],["./assets/5a1ff63c399e420001454433/5a33c63e3698b90001b95808_pic.png","3155299491d1af52187142162f730cf4"],["./assets/5a1ff63c399e420001454433/5a33e54c5aec59000163d595_pic.png","a109a047b3382270fcb60c805276c34d"],["./assets/5a1ff63c399e420001454433/5a33ea4dd776220001ebf18f_map_pic.png","baf77a1a40d3959a7a1fd4afa89cdf34"],["./assets/5a1ff63c399e420001454433/5a37973d5085cc0001bb853c_arrow_left.png","562ff8dcc025f146fcdee16b8f4a38d5"],["./assets/5a1ff63c399e420001454433/5a37973ed8f1660001bdffd8_arrow_right.png","bbf4e4ac97641096ded2804bdef9c785"],["./assets/5a1ff63c399e420001454433/5a38ec5468365d0001913ea2_banner_blog-1920.jpg","fcaf3f7b2f45988fe0e543d2415bd4bc"],["./assets/5a1ff63c399e420001454433/5a3bde1543c15000012cc761_banner_post-1920.jpg","7fd93de2201c2a355c979dda52f3292e"],["./assets/5a1ff63c399e420001454433/5a43ba7a8192d400018e36a1_pic.png","db766caa818b508564ad1864d8b9991e"],["./assets/5a1ff63c399e420001454433/5a450594f6b9a40001be8dc7_pic-new.png","d9a64899b38e6a3e52811a3523041a2e"],["./assets/5a1ff63c399e420001454433/5a45074d115b2f00013431d7_pic-оо.png","3ec478d88207eb76263eca7b55fa2a50"],["./assets/5a1ff63c399e420001454433/5a4507ec115b2f0001343204_pic---.png","28c35b2ad81658d531d89c5a0cfe4e44"],["./assets/5a1ff63c399e420001454433/5a450812f6b9a40001be8ff8_pic455.png","0768195ff4571f1dbab289d0b36e02af"],["./assets/5a1ff63c399e420001454433/5a4509f7115b2f00013432e7_support.png","2dea913a600beb0c3e151e3820a26940"],["./assets/5a1ff63c399e420001454433/5a450a173472ef000147e2dd_code_review.png","35f2cdf46f751d57b045ea9813d95d37"],["./assets/5a1ff63c399e420001454433/5a450aec3472ef000147e334_dedicated.png","3f8ce66ca710d3657f79d8b42f0cd59d"],["./assets/5a1ff63c399e420001454433/5a4510daf6b9a40001be961f_development.png","d64ed4c366051fa5ff40801b46909181"],["./assets/5a1ff63c399e420001454433/5a4511be7b791a000199f42f_web_development.png","f1d984c6e437d121275e01bbf8ce368f"],["./assets/5a1ff63c399e420001454433/5a4627dd115b2f000137344c_clip.png","e4681dfb214e4fd6a43d553f28af378f"],["./assets/5a1ff63c399e420001454433/5a4b6bc034ad09000100c7c2_lines.png","cb047f16bd52cc23f58bdb17b8fa1dc5"],["./assets/5a1ff63c399e420001454433/5a4b6ffcaead50000102828e_icon_android.png","e163cd85ec4320b756a459c511ec90ee"],["./assets/5a1ff63c399e420001454433/5a4b7001a9ead90001180f65_icon_ios.png","5dab3aef9e004e66602265d91772d1d5"],["./assets/5a1ff63c399e420001454433/5a4b7001a9ead90001180f66_icon_www.png","8c2db9070d3bcb551c4969d6b6c3d631"],["./assets/5a1ff63c399e420001454433/5a4b7001d7f5d40001ac09ae_icon_desktop.png","46e62b63890c3d7a2ee3652a71715c7f"],["./assets/5a1ff63c399e420001454433/5a4c871d2b69220001d8349f_icon_brief.png","58afa3458608227a8da9566486b95d3a"],["./assets/5a1ff63c399e420001454433/5a4c871d519d350001b273ab_icon_business.png","b50a68898d52e2349397b972d1f1f4b3"],["./assets/5a1ff63c399e420001454433/5a4c871dcfaa1d00018c4335_arrow_left.png","7ce9a32010a785324fdd7fb066d056b3"],["./assets/5a1ff63c399e420001454433/5a4c871ddb704100012fcd72_bg_implementation.png","56762767efbdd796e18dfe7ba5e162da"],["./assets/5a1ff63c399e420001454433/5a4c871e2b69220001d834a0_icon_implementation.png","72100d01b86f9cfb722319e46b327e76"],["./assets/5a1ff63c399e420001454433/5a4c871ecfaa1d00018c4336_icon_going.png","6d6f3c8ae10183338de99a47016dc16b"],["./assets/5a1ff63c399e420001454433/5a4c871edb704100012fcd74_icon_methodology.png","13feec14336f22838f95311e7687469a"],["./assets/5a1ff63c399e420001454433/5a4c871f2b69220001d834a1_icon_ux.png","3817fc2ee869699cca818a02071c2616"],["./assets/5a1ff63c399e420001454433/5a4cc562519d350001b29a73_icon_button (1).png","6458bcbf0770f3764b07915c0c721c3b"],["./assets/5a1ff63c399e420001454433/5a4de1bf3c5d8600019a75fc_work_first_p-1170-p-1080.png","01f78cb6c0e6af7a9dbf9b0551732b08"],["./assets/5a1ff63c399e420001454433/5a4de1bf3c5d8600019a75fc_work_first_p-1170-p-500.png","56d42cc39c8b7014d01e961bce209139"],["./assets/5a1ff63c399e420001454433/5a4de1bf3c5d8600019a75fc_work_first_p-1170-p-800.png","4721bd99c3906b5daade358ec6d4c825"],["./assets/5a1ff63c399e420001454433/5a4de1bf3c5d8600019a75fc_work_first_p-1170.png","3cb139100eafc16eec7f241088272dbe"],["./assets/5a1ff63c399e420001454433/5a4df1a13c5d8600019a81c1_work_second_p-560-p-500.png","6146a39d4cf2478a49144d03b847178c"],["./assets/5a1ff63c399e420001454433/5a4df1a13c5d8600019a81c1_work_second_p-560.png","4952315b8c04251ac2ee98efbc1f8312"],["./assets/5a1ff63c399e420001454433/5a4dfe36056b6a00010109c5_work_third_p-560-p-500.png","3aaaba927551acb403497e4456db5b2d"],["./assets/5a1ff63c399e420001454433/5a4dfe36056b6a00010109c5_work_third_p-560.png","8aefbf9900a614337fc9e937fc4304df"],["./assets/5a1ff63c399e420001454433/5a4e2136056b6a00010129ac_work_first_p-1920.jpg","171f901b403c01f128ff3d831ab17af7"],["./assets/5a1ff63c399e420001454433/5a4e2888056b6a0001012d15_work_third_p-1085-p-500.png","d56ffba35c7dfc7ddbf447e0dd5e7e2e"],["./assets/5a1ff63c399e420001454433/5a4e2888056b6a0001012d15_work_third_p-1085.png","610c7fbd8af81aadbbf916123edd3020"],["./assets/5a1ff63c399e420001454433/5a532386b3d9e100018e0132_work_first_p-1170 (1)-p-1080.png","3e8b540ffac27d65938fc213dee9e515"],["./assets/5a1ff63c399e420001454433/5a532386b3d9e100018e0132_work_first_p-1170 (1)-p-500.png","8cbbbfae0b2a0927b785d8a6fbd39897"],["./assets/5a1ff63c399e420001454433/5a532386b3d9e100018e0132_work_first_p-1170 (1)-p-800.png","8bebb92b604fdbab41500b6a59a253cb"],["./assets/5a1ff63c399e420001454433/5a532386b3d9e100018e0132_work_first_p-1170 (1).png","055bf18e4419024bd4db156fd9226f3a"],["./assets/5a1ff63c399e420001454433/5a532499b3d9e100018e0158_work_second_p-560 (1)-p-500.png","2311e2ff9ef9a725be7439ec8e21ad41"],["./assets/5a1ff63c399e420001454433/5a532499b3d9e100018e0158_work_second_p-560 (1).png","464609e501afdc88568cdd720894b5d2"],["./assets/5a1ff63c399e420001454433/5a5324d4b462b20001457ae0_work_third_p-560 (1)-p-500.png","58e7e8c2c5622e1d7225b6123d85aced"],["./assets/5a1ff63c399e420001454433/5a5324d4b462b20001457ae0_work_third_p-560 (1).png","678110b720c74fe7d7cd8667d1af30a8"],["./assets/5a1ff63c399e420001454433/5a532b9935a8000001352f4d_work_first_p-1170 (2)-p-1080.png","6e0b83a5ef5866daa086ab87125f0c78"],["./assets/5a1ff63c399e420001454433/5a532b9935a8000001352f4d_work_first_p-1170 (2)-p-500.png","1276a26b061175416e34b6d0fdd0b6f8"],["./assets/5a1ff63c399e420001454433/5a532b9935a8000001352f4d_work_first_p-1170 (2)-p-800.png","6f04e46c56ace9d10fee9033128f67b6"],["./assets/5a1ff63c399e420001454433/5a532b9935a8000001352f4d_work_first_p-1170 (2).png","6e17f6244a535aaef658dd41ae767c38"],["./assets/5a1ff63c399e420001454433/5a532c050a77cc0001b11efd_work_second_p-560 (2)-p-500.png","56251bec708d936fede6c1b3a6da8bea"],["./assets/5a1ff63c399e420001454433/5a532c050a77cc0001b11efd_work_second_p-560 (2).png","83c9532b7d10a2f6855a8100b4d5de74"],["./assets/5a1ff63c399e420001454433/5a532c6db462b20001457cca_work_third_p-560 (2)-p-500.png","b86142041842cce06a5886700103c66e"],["./assets/5a1ff63c399e420001454433/5a532c6db462b20001457cca_work_third_p-560 (2).png","3365c24350b48a3634002a1ad93ac148"],["./assets/5a1ff63c399e420001454433/5a535c740a77cc0001b14d80_work_first_p-800-p-500.png","599462bfc9bbb2a78de140965934cce3"],["./assets/5a1ff63c399e420001454433/5a535c740a77cc0001b14d80_work_first_p-800.png","dc9c3a54fe849c7177f9b517c6dd666c"],["./assets/5a1ff63c399e420001454433/5a535ca80a77cc0001b14d94_work_third_p-1070 (1)-p-500.png","c50584439eff8b882de9be9ffb7078dd"],["./assets/5a1ff63c399e420001454433/5a535ca80a77cc0001b14d94_work_third_p-1070 (1)-p-800.png","29ba12051236494b9b35a3eae57df056"],["./assets/5a1ff63c399e420001454433/5a535ca80a77cc0001b14d94_work_third_p-1070 (1).png","7e2ca886b840c1f04f202dd941962173"],["./assets/5a1ff63c399e420001454433/5a536d16b462b2000145b1aa_work_first_p-1600.jpg","7c6a0f71ee81a1e4ccc49bbadc337af6"],["./assets/5a1ff63c399e420001454433/5a536dcc0a77cc0001b15be7_work_third_p-1085-p-1080.png","9664cede9241fe4c65b89fcab7991339"],["./assets/5a1ff63c399e420001454433/5a536dcc0a77cc0001b15be7_work_third_p-1085-p-500.png","2e2cfcfd5f6e432fcc226df2a6fd0e8e"],["./assets/5a1ff63c399e420001454433/5a536dcc0a77cc0001b15be7_work_third_p-1085-p-800.png","a659cda4564b22a09e41c358352cc7a1"],["./assets/5a1ff63c399e420001454433/5a536dcc0a77cc0001b15be7_work_third_p-1085.png","442ac68c9dc7e82d487bfeec457da259"],["./assets/5a1ff63c399e420001454433/5a547dec37237a0001ebced5_pic2 (1).png","f2fb530393906c5baa12f0075e105d67"],["./assets/5a1ff63c399e420001454433/5a55d5b8392c67000185ff41_bg_1.png","e44581dfbe69935b36e8d95e1c6d002f"],["./assets/5a1ff63c399e420001454433/5a55d9b0083cad0001e239ce_bg_2.png","3943e676d5349e5a79640d3e80737ec9"],["./assets/5a1ff63c399e420001454433/5a55da3829f1720001df8ec7_bg_3.png","ee305f9aba884072d288a35636d90bff"],["./assets/5a1ff63c399e420001454433/5a55daaf00557900015c3e0f_bg_4.png","25a3fdc59f9d438bc8986c220fabf895"],["./assets/5a1ff63c399e420001454433/5a55db11151dee0001cdae17_bg_5.png","153b68be8539a0af646482180c293bc0"],["./assets/5a1ff63c399e420001454433/5a56123aea211300011c0f4f_icon_portfolio.png","fe6e4bdd57bf46d3035a1241416d289a"],["./assets/5a1ff63c399e420001454433/5a5612f3083cad0001e2782e_Icon_blog.png","9977586a4e0b69c243a8fdfe30056b1d"],["./assets/5a1ff63c399e420001454433/5a561d5500557900015c8712_icon_facebook.png","df0f9ea8954a946bae9a070bc4fbbe75"],["./assets/5a1ff63c399e420001454433/5a561d55083cad0001e281c5_icon_github.png","83ac1f8e9983692caf6830a38fa6a1bb"],["./assets/5a1ff63c399e420001454433/5a561d55151dee0001cdff62_icon_inst.png","1f945d21012b38184a48bacaea7e6a68"],["./assets/5a1ff63c399e420001454433/5a561d55ea211300011c1e4f_icon_bitbucket.png","35b60f8d0cb0b1c3b3be318c058519cb"],["./assets/5a1ff63c399e420001454433/5a561d58151dee0001cdff66_icon_linkedin.png","da8c85a5638f764f4dadebd96d99aeb3"],["./assets/5a1ff63c399e420001454433/5a561d58ea211300011c1e52_icon_twitter.png","4f36f378393b72d89495aa895ce69401"],["./assets/5a1ff63c399e420001454433/5a58baa70f493d00010c7671__DSC0050_ph1.png","54c8d4f06acba596ed2b9468cb392f98"],["./assets/5a1ff63c399e420001454433/5a58baa751b49400018cc502__DSC0283_ph2.png","6154a22e5ef16f1dafc8312738cc87b5"],["./assets/5a1ff63c399e420001454433/5a58baa851b49400018cc503_IMG_3166_ph1.png","692cc1494c171d1783d6f6f44d1a260f"],["./assets/5a1ff63c399e420001454433/5a58baaa0f493d00010c7676_IMG_3887_ph1.png","c52d802132b36de760a9699482bf33ba"],["./assets/5a1ff63c399e420001454433/5a58baaa6820590001be8514_ph_1.png","14b899d2e86d52976159157965365efe"],["./assets/5a1ff63c399e420001454433/5a58cadca088d20001391e6c_IMG_3166_ph1.png","692cc1494c171d1783d6f6f44d1a260f"],["./assets/5a1ff63c399e420001454433/5a58cadccd24e90001a061c5__DSC0283.png","c6b2dd64a6fd76b47555026b78665832"],["./assets/5a1ff63c399e420001454433/5a58cadda0d1730001b9366f__DSC0050.png","3124bdb2a69d920db25d9fde975f297f"],["./assets/5a1ff63c399e420001454433/5a58cadf9972fa0001f1d7c8_ph_1.png","553f1f2d365a717693721fc40d36748d"],["./assets/5a1ff63c399e420001454433/5a58cd09a0d1730001b93881_IMG_3887.png","e01cb3e0015e040fb1a4bc0641508cd4"],["./assets/5a1ff63c399e420001454433/5a5a4ee924d14a000198b02a_icon_1_home.png","cbe26cc11305b9beff829a5e0f055ce8"],["./assets/5a1ff63c399e420001454433/5a5a4ef2a0eb5000019be042_icon_2_home.png","bbf4bd5006802a65fea934dcd309fb6e"],["./assets/5a1ff63c399e420001454433/5a5a4efc3e2b760001dfc82a_icon_3_home.png","816f8b39850026d205b373d46e6054d9"],["./assets/5a1ff63c399e420001454433/5a5a553211f84b0001e87c20_photo_1.png","a877afb6c4b2386a49ef0feaff14a3ce"],["./assets/5a1ff63c399e420001454433/5a5a553211f84b0001e87c21_photo_2.png","7ace599f28c174d71e4c2fd5bbed752e"],["./assets/5a1ff63c399e420001454433/5a5a55329629620001cd9ada_photo_4.png","de6a1af0e8e067579118c805e568e911"],["./assets/5a1ff63c399e420001454433/5a5a5532a0eb5000019be200_photo_3.png","142f70b0b8037a69b038d9f7053b064c"],["./assets/5a1ff63c399e420001454433/5a5a55e03e2b760001dfc99c_icon_clutch.png","4866210b9620b1d41cc639e2aae916df"],["./assets/5a1ff63c399e420001454433/5a5a55e03e2b760001dfc99d_icon_up_work.png","7e43fbfcf733e261b05ea73227b61ae0"],["./assets/5a1ff63c399e420001454433/5a5a55e06b273e0001a27856_icon_good.png","1e76f284ff94fa4f9a6558bf6326b005"],["./assets/5a1ff63c399e420001454433/5a5a55e0a0eb5000019be22b_icon.png","7780304fb6b730e1ef5fd0507f10a59b"],["./assets/5a1ff63c399e420001454433/5a5a55e111f84b0001e87c3c_icon3.png","e51ea5dad4d1f241c15465cf9c17efba"],["./assets/5a1ff63c399e420001454433/5a5a55e124d14a000198b2a7_icon4.png","c2a1b68e80fd459eaa4b03e55c7ddc0c"],["./assets/5a1ff63c399e420001454433/5a5a55e13e2b760001dfc99e_icon2.png","14363daa5149a2c3e0b4a85d34cd5b1e"],["./assets/5a1ff63c399e420001454433/5a5a55ec11f84b0001e87c43_icon_map.png","ec81b122e3bf86fa7d247787bd6221a6"],["./assets/5a1ff63c399e420001454433/5a5a55f03e2b760001dfc9a3_logo_find_a_game_hover.png","1f77057caa11fa431ebc7318983b915e"],["./assets/5a1ff63c399e420001454433/5a5a55f06b273e0001a2785a_logo_huddle.png","089ad532c7d5a83affee077711bb16c4"],["./assets/5a1ff63c399e420001454433/5a5a55f09629620001cd9b05_KPMG.png","f7e67acd7343f3ac4157a1e5cc76d4ca"],["./assets/5a1ff63c399e420001454433/5a5a55f13e2b760001dfc9a4_logo_spiral_hover.png","f4ed1d17cdc8cb62317af567be34784b"],["./assets/5a1ff63c399e420001454433/5a5a55f611f84b0001e87c44_logo_eurovision_hover.png","f8db001601df183b73d153d1ac2275a1"],["./assets/5a1ff63c399e420001454433/5a5a55f611f84b0001e87c45_logo_osram_hover.png","5d765e659211953a8dc41ad0bd08d2b6"],["./assets/5a1ff63c399e420001454433/5a5a55f624d14a000198b2ad_logo_tchop_hover.png","e6de7c4d28f7df0330d600e4b461cc27"],["./assets/5a1ff63c399e420001454433/5a5a55f624d14a000198b2ae_logo_21learning_hover.png","bfac7f1c3f1f4a15e1c07151c5b057d7"],["./assets/5a1ff63c399e420001454433/5a5a55f824d14a000198b2af_logo_total_hover.png","db27dad221baafd57babbd545d73ddc3"],["./assets/5a1ff63c399e420001454433/5a5a55fe6b273e0001a27860_logo_roundforest_hover.png","0089fef18db57294f1db6a87b1826563"],["./assets/5a1ff63c399e420001454433/5a5a55fea0eb5000019be232_logo_datingchile_hover.png","c3470052cc48916a041424865f7bdff7"],["./assets/5a1ff63c399e420001454433/5a5a55fea0eb5000019be233_logo_play_attetion_hover.png","6d77eeeb6316c77277e61167ab6c7d57"],["./assets/5a1ff63c399e420001454433/5a5b16f56b273e0001a2c414_photo_2_testimonals.png","d577f5ca5547149d988d59a9220fa607"],["./assets/5a1ff63c399e420001454433/5a5b18a56b273e0001a2c436_photo_1_testimonals.png","7aa9065c89f124265dd079fbd104b012"],["./assets/5a1ff63c399e420001454433/5a5b18df9629620001cde347_photo_3_testimonals.png","377f05c9fa942c932394ffe3fd16e916"],["./assets/5a1ff63c399e420001454433/5a5b1b563e2b760001e00a45_1_lines.png","2a1384a9d0198062ff844f6f2682620d"],["./assets/5a1ff63c399e420001454433/5a5cc2269629620001cee056_educadio.png","fa61136d2e0a49621f0d8aefff2497cc"],["./assets/5a1ff63c399e420001454433/5a5f6638915f44000178e03e_icon_android.png","d614eceaf9ad5645fd3f0c061c9871f2"],["./assets/5a1ff63c399e420001454433/5a5f667ce84dd7000158fb34_icon_ios.png","aee445f75d6e540205fa98bd2d053351"],["./assets/5a1ff63c399e420001454433/5a5f66a8cab8d90001f1048a_icon_www.png","77a925ae5e53e34065f6cc659443809f"],["./assets/5a1ff63c399e420001454433/5a5f66b370152900015dc56b_icon_desktop.png","c44d58f5c5c3cb39fdc5227115bfa205"],["./assets/5a1ff63c399e420001454433/5a6751bada0e5a000189daaf_Testimonials.png","84e08a006f80bf5819ace4b4a91bea33"],["./assets/5a1ff63c399e420001454433/5a6751bb4b1e660001c14ff8_блог.png","c9805eb9de745b3203a73ee5e43e489d"],["./assets/5a1ff63c399e420001454433/5a6751bbe3a9cc00013271c7_портфолио.png","6ab5d97ced75ebc89be6859ddab5a24b"],["./assets/5a1ff63c399e420001454433/5a6751bee3a9cc00013271c9_сервисы.png","1f24fccdac59b644c6456d00c1c69863"],["./assets/5a1ff63c399e420001454433/5a6b0138f9957b0001b68bae_cross.png","bff938559182138ab2df5ee72e67bd67"],["./assets/5a1ff63c399e420001454433/5a6b13546b6b4400016d456f_home page-1.png","b1d9a7a39b61ae104646008737741834"],["./assets/5a1ff63c399e420001454433/5a6b1370dbaf340001e24fbe_testimonials-1.png","0b7c899ce653e819a554dffeee4e7983"],["./assets/5a1ff63c399e420001454433/5a6b37241b804100012503f6_Main_Banner.png","430035220c73c0c5a58a7bfbc8dbb6db"],["./assets/5a1ff63c399e420001454433/5a6b373e3de556000106be3b_Testimonials.png","621938d21af3445851a06fa2f64a1d9d"],["./assets/5a1ff63c399e420001454433/5a6b37921b804100012504b5_blog.png","2d69733c29d2407c07131ca58e51b6af"],["./assets/5a1ff63c399e420001454433/5a6b37ab3de556000106bf0c_PORTFOLIO.png","1fb42c59f56224b9a4899f65d26e250e"],["./assets/5a1ff63c399e420001454433/5a6b3cee1aa9a60001e72570_Services (2).png","848fa271bdd2336e5857e88e67012b51"],["./assets/5a1ff63c399e420001454433/5a6ef28fa4e3b00001e30966_DSC_7669.png","c727b74b467197e9f80cf893208e78b1"],["./assets/5a1ff63c399e420001454433/5a6ef47ae92d27000126b5c5_26850854_1975969292728876_9222891451113190892_o.png","cf14344ef8224bb196c1da5d56aabda2"],["./assets/5a1ff63c399e420001454433/5a6ef5d6f5d2f100017875e2_26850854_1975969292728876_9222891451113190892_o-2.png","b4cc2d06e39418d53413b96c5866f102"],["./assets/5a1ff63c399e420001454433/5a6ef71d7ca606000137687d_DSC_7669-2.png","6d1bee75e23899e5312fdcd640fb43f4"],["./assets/5a1ff63c399e420001454433/5a701d40e7053c00010b660d_about us.png","041cf6e6ff186f2ace61c946e5849077"],["./assets/5a1ff63c399e420001454433/5a7021464b4fff00015e761e_work_7-500.jpg","8da167096609e2ec27f73303d87cedf1"],["./assets/5a1ff63c399e420001454433/5a7021aaec49200001805484_work_6-500.jpg","ee124d1abef0aa4b8877b59f29ed6b4e"],["./assets/5a1ff63c399e420001454433/5a7021b8ec4920000180548b_work_10p-500.jpg","d3b035247416863dce67ab324bb380d9"],["./assets/5a1ff63c399e420001454433/5a72ec4c74b6cc0001697bba_expocheck-logo.png","6f66b84b76f30fb793cc0425f84d8412"],["./assets/5a1ff63c399e420001454433/5a72f080724e910001b10f0a_Logo.png","cb41caaad4c8e83427ea20525456790b"],["./assets/5a1ff63c399e420001454433/css/testimonials-freshcode.webflow.497ac0d47.css","ab0f75d323ed10b52b3d0d998bc65a7f"],["./assets/5a1ff63c399e420001454433/css/testimonials-freshcode.webflow.bd648b4f2.css","0090b91e81a7ac41300194ea62d8d88b"],["./assets/5a1ff63c399e420001454433/js/webflow.01b7fd390.js","a658d1c19733bd28da25e2c7a6a6f98e"],["./assets/5a1ff63c399e420001454433/js/webflow.3f00e7175.js","3571bfa658d37ee606f0d4d08a605342"],["./assets/5a3ad91679e4000001d2a84a/5a3b9d1c93b51300019f6887_post_c-700.jpg","a0ef0b3377ec7745f0d4b5072c0cc99f"],["./assets/5a3ad91679e4000001d2a84a/5a3b9dc99209280001276a7e_post_c-700 (1).jpg","9863f7a11590695c894e2a0e0509ca5d"],["./assets/5a3ad91679e4000001d2a84a/5a3b9e14e59b0a0001ab5c2a_post_c-700 (2).jpg","3f61cb4f6c71cab81df7f1fbb841463b"],["./assets/5a3ad91679e4000001d2a84a/5a3b9e6293b51300019f6924_post_c-700 (3).jpg","44b7c0e503da0991d34e25142b72af73"],["./assets/5a3ad91679e4000001d2a84a/5a3b9e9e43c15000012c7596_post_c-700 (5).jpg","46e588db1899839061e1d7dfbb7343c5"],["./assets/5a3ad91679e4000001d2a84a/5a3b9f8e9209280001276c01_post_c-700 (6).jpg","2adacb995e36e1d573a1d6d6f6112000"],["./assets/5a3ad91679e4000001d2a84a/5a3b9fc693b51300019f6a79_post_c-700 (4).jpg","26ba97da0c2b82933d82b042788b7326"],["./assets/5a3ad91679e4000001d2a84a/5a3ba26d0252f900015d530b_post_c-700 (7).jpg","d9ca6deef0d55470a5eca2438fdea28f"],["./assets/5a3ad91679e4000001d2a84a/5a3ba2af43c15000012c77e2_post_c-700 (9).jpg","da25ea807cdcc8a665b4ca5721669d03"],["./assets/5a3ad91679e4000001d2a84a/5a3ba336e59b0a0001ab6239_post_c-700 (10).jpg","5de07142f60a5e28873ada324f1aa07c"],["./assets/5a3ad91679e4000001d2a84a/5a3ba3769209280001276ea8_post_c-700 (11).jpg","8697b085519b80cd44d82a94c81a8db9"],["./assets/5a3ad91679e4000001d2a84a/5a3ba3ca43c15000012c7842_post_c-700 (12).jpg","810d13d5fad25346879b25288bcc1af4"],["./assets/5a3ad91679e4000001d2a84a/5a3ba4069209280001276ef7_post_c-700 (13).jpg","39d0a309b38d2385042b5e43866ac524"],["./assets/5a3ad91679e4000001d2a84a/5a3ba44343c15000012c787b_post_c-700 (14).jpg","c3792f5b220b851fc672e4720255cc65"],["./assets/5a3ad91679e4000001d2a84a/5a3ba484706df50001a31216_post_c-700 (15).jpg","8431a473e80a8ef8871cdfbf4db70dab"],["./assets/5a3ad91679e4000001d2a84a/5a3ba56a706df50001a31255_post_c-700 (8).jpg","029cf994176bc1fb7460fa3b228c9bcc"],["./assets/5a3ad91679e4000001d2a84a/5a3ba5db43c15000012c78f4_post_c-700 (16).jpg","97ca7bc2d1ee95abaa08880a385270aa"],["./assets/5a3ad91679e4000001d2a84a/5a3ba64a0252f900015d55e1_post_c-700 (17).jpg","eaf0c1bbc3495708b9f79837a778344e"],["./assets/5a3ad91679e4000001d2a84a/5a3ba68f93b51300019f7039_post_c-700 (18).jpg","ae5454f7947ae66c00375872372a7357"],["./assets/5a3ad91679e4000001d2a84a/5a3ba6c10252f900015d5677_post_c-700 (19).jpg","8dca1a9447d3ef615fe397179144e019"],["./assets/5a3ad91679e4000001d2a84a/5a3ba72193b51300019f71b4_post_c-700 (20).jpg","0a1dd69bc68b8d645b22dc5bcce947ff"],["./assets/5a3ad91679e4000001d2a84a/5a3ba7810252f900015d56b9_post_c-700 (21).jpg","0a5fc405c8260612d8a675d199d096c3"],["./assets/5a3ad91679e4000001d2a84a/5a3bcbc143c15000012c9ad9_author_2.png","4801253bd8af1c838d250649d1b2c11e"],["./assets/5a3ad91679e4000001d2a84a/5a3be95b43c15000012cd20e_icon_twitter.png","dcd9b75bc055543d913710f0687dcb17"],["./assets/5a3ad91679e4000001d2a84a/5a3be9b3e59b0a0001abaff2_icon_facebook.png","c6354e54d4026a2f8eda92c5a06f15e1"],["./assets/5a3ad91679e4000001d2a84a/5a3be9b9706df50001a35e8e_icon_linkedin.png","06c7717149328f517f9516a98558c6ff"],["./assets/5a3ad91679e4000001d2a84a/5a3cdbe743c15000012d549b_recent_post.png","77ce18f1fe1eea12ebeb8cbefbcf56f1"],["./assets/5a3ad91679e4000001d2a84a/5a3cdf658b98f500014e1b2e_recent_post (21).png","54dc4296846ba07cfb9f2fcb571befe8"],["./assets/5a3ad91679e4000001d2a84a/5a3cdf8a8b98f500014e1b3b_recent_post (15).png","18185aef0c74cfde645052309a25ade2"],["./assets/5a3ad91679e4000001d2a84a/5a3cdf9e0252f900015e46ea_recent_post (10).png","e78fb7a34d2978595b6cdaea864c4c9c"],["./assets/5a3ad91679e4000001d2a84a/5a3cdfaae59b0a0001ac3f61_recent_post (11).png","9f415d21fba6f04d28b2877c242fe095"],["./assets/5a3ad91679e4000001d2a84a/5a3cdfb7706df50001a3ee4a_recent_post (2).png","ba98e84beee724d8ac7506e2da469676"],["./assets/5a3ad91679e4000001d2a84a/5a3ceb68706df50001a3f24b_author_0.png","3307ba21a73295572b4f7f43127eb306"],["./assets/5a3ad91679e4000001d2a84a/5a3cecbae59b0a0001ac442a_author_3.png","40cf6545bd170fc00d5913edcd27621c"],["./assets/5a3ad91679e4000001d2a84a/5a3d02098b98f500014e30a4_author_4.png","146cde9694e439de15bfae025deba9e6"],["./assets/5a3ad91679e4000001d2a84a/5a3d02e19209280001284f97_author_1.png","e54b1a3f0dc74a332d1e84831b821f47"],["./assets/5a3ad91679e4000001d2a84a/5a3d0328e59b0a0001ac5ac6_recent_post (5).png","4424eee3f97e10841971578b92b50114"],["./assets/5a3ad91679e4000001d2a84a/5a3d04cb920928000128501b_recent_post (3).png","c98bafb91561d703feff9baa4cf1364c"],["./assets/5a3ad91679e4000001d2a84a/5a3d05558b98f500014e31b4_recent_post (4).png","2749e2d3941426ee7b92d2217dbee176"],["./assets/5a3ad91679e4000001d2a84a/5a3d063c43c15000012d826d_recent_post (1).png","1338857b969d832e9746e59b9e1c656f"],["./assets/5a3ad91679e4000001d2a84a/5a3d06c192092800012851fc_recent_post (14).png","48f747a9279787b864e63c8077c7e190"],["./assets/5a3ad91679e4000001d2a84a/5a3d0a1b706df50001a404a1_recent_post (7).png","a4d388d42ea5c904346299683ffddaca"],["./assets/5a3ad91679e4000001d2a84a/5a3d0b14706df50001a404d5_recent_post (13).png","805dfac60bbfa989e58e0d7d4805cb5c"],["./assets/5a3ad91679e4000001d2a84a/5a3d0be443c15000012d8498_recent_post (12).png","98ab16fe68d9dc384e5c64a6673dbbdc"],["./assets/5a3ad91679e4000001d2a84a/5a3d0ceb43c15000012d84e4_recent_post (19).png","1f45d69d3e5c0ae799f88690fe9a7768"],["./assets/5a3ad91679e4000001d2a84a/5a3d0d7ce59b0a0001ac6188_recent_post (20).png","6d4a262dd4181a54d3d236025ba43db8"],["./assets/5a3ad91679e4000001d2a84a/5a3d0eb68b98f500014e37ae_recent_post (18).png","b29405245919029451bcab30f4c459b0"],["./assets/5a3ad91679e4000001d2a84a/5a3d0f569209280001285f24_recent_post (17).png","5ec0e2ccd2f0132b9125948e98aef060"],["./assets/5a3ad91679e4000001d2a84a/5a3d10078b98f500014e3819_recent_post (6).png","64a519fb35b88d829f21ad1ed281e288"],["./assets/5a3ad91679e4000001d2a84a/5a3d10858b98f500014e3864_recent_post (8).png","d52cd835ac4b127d13433796e8ac58fd"],["./assets/5a3ad91679e4000001d2a84a/5a3d112143c15000012d8af7_recent_post (9).png","32d43df86e340efa6cfbf34387c9d376"],["./assets/5a3ad91679e4000001d2a84a/5a3d11ab92092800012863e1_recent_post (16).png","51a9ecc2f98ceb699a21fd8dfb6c2bc6"],["./assets/5a3ad91679e4000001d2a84a/5a4bb12fdbffdb000101a08a_work_portfolio_cover_p-700.jpg","4fe414e8d181b7677d689a37658a2b10"],["./assets/5a3ad91679e4000001d2a84a/5a4bb191dbffdb000101a0b6_work_portfolio_cover_p-700 (1).jpg","268f167db3420caeca687e2d466e6925"],["./assets/5a3ad91679e4000001d2a84a/5a4bb1dedbffdb000101a0cd_work_portfolio_cover_p-700 (2).jpg","28f744d199c1ce37612fd8156edd4f3a"],["./assets/5a3ad91679e4000001d2a84a/5a4bb2618047c10001ca5b57_work_portfolio_cover_p-700 (5).jpg","d7a80992676f8f92e206ce207abe1dcb"],["./assets/5a3ad91679e4000001d2a84a/5a4bb2a2b668780001b00953_work_portfolio_cover_p-700 (4).jpg","5cb453c8f8f36c56a05e685f86925b5c"],["./assets/5a3ad91679e4000001d2a84a/5a4bb2d8b668780001b00974_work_portfolio_cover_p-700 (3).jpg","1602c2b2dd8bd61510bf3dfcf096bb7b"],["./assets/5a3ad91679e4000001d2a84a/5a4cd42ccfaa1d00018c6e8b_icon_www.png","d8cbaae598a8abd808a34c8b377fe200"],["./assets/5a3ad91679e4000001d2a84a/5a4cd442db704100012ff936_icon_desktop.png","371fe23c42c5e4761358d671229d8671"],["./assets/5a3ad91679e4000001d2a84a/5a4cd453c8a8950001b53a6d_icon_android.png","14c5e4d14f09aa117d24267294be0d94"],["./assets/5a3ad91679e4000001d2a84a/5a4cd456519d350001b2a2b6_icon_ios.png","59eae8a2737c86214402832cf0ebeaf9"],["./assets/5a3ad91679e4000001d2a84a/5a5c68e6a0eb5000019cc398_post_c-700.jpg","77bc8c92f73d51609113fe046de19097"],["./assets/5a3ad91679e4000001d2a84a/5a5c696711f84b0001e95c71_artuh_160x160.png","6d2c79e8c383bfe658ce9fae8b4d7fb2"],["./assets/5a3ad91679e4000001d2a84a/5a5c6a0a9629620001ce940f_recent_post.png","a1c44297ba20f74449bab598c636c1fd"],["./assets/5a3ad91679e4000001d2a84a/5a72e6689e04c700016933aa_post_ux_850x850.jpg","61e63806656a8db84b0a046e389dc452"],["./assets/5a3ad91679e4000001d2a84a/5a72e6ae9c5ef80001f6a076_Image+Pasted+at+2018-1-23+13-39.png","6566e573568bf26c0a7922085a9155ef"],["./assets/5a3ad91679e4000001d2a84a/5a72e6f774b6cc0001697303_post_ux_200x200.png","168aa922bdfc89b6d7efaf00fd8836eb"],["./blog.html","2c4fbee0242a3f9e1dbf630f973717ac"],["./freshcode-post/7-improvements-to-ux-design-that-ensure-brand-trust.html","78b9ce72cfd281ff6996bd316665a4f8"],["./freshcode-post/7-questions-to-determine-whether-you-need-custom-or-off-the-shelf-software.html","bdbc77bfe07fe1f58c90a62add015801"],["./freshcode-post/busting-five-of-the-most-popular-software-development-myths.html","35857cf318f4298d08ddd891a283d0aa"],["./freshcode-post/choose-a-perfect-outsourcing-software-development-company-in-six-steps.html","23748164bb0998e2a5703089678e2461"],["./freshcode-post/do-you-really-need-mobile-app-post-release-support-or-is-it-an-exercise-in-futility.html","fa9f457c43ca4329b93f849b3b22bb7f"],["./freshcode-post/engagement-models-is-dedicated-team-the-perfect-one-for-you.html","7e20f699d54bc3012b24c2afda8b29c1"],["./freshcode-post/everything-you-wanted-to-know-about-the-time-and-material-model.html","afd26089dc49b41b2ef5660f22787b31"],["./freshcode-post/experience-your-ux-how-to-conduct-a-ux-review-by-yourself.html","32b8791520e9288f0403fd22d0f61408"],["./freshcode-post/fixed-price-model-everything-you-need-to-know.html","00fb1472e0282b20ed195490194e1c36"],["./freshcode-post/from-idea-to-success-in-three-steps-with-your-software-development-company.html","1ca53b7506de947eadae8f372bf3ec4e"],["./freshcode-post/graphcool-framework-analysis-and-its-use-case.html","292c52e70da53f6a697d697443eab59e"],["./freshcode-post/how-does-software-testing-ensure-high-quality-development.html","c2a8c388d47ba31269a6d5f20be1b04a"],["./freshcode-post/how-to-create-a-perfect-system-requirements-specification.html","e8b5468c5347d43ab73426bc8b06fad4"],["./freshcode-post/how-to-ruin-a-first-impression-things-you-should-never-hear-from-a-software-company.html","0c60533932e2cc978308766c347b8aa5"],["./freshcode-post/icons/icon-128x128.png","cb3a706198de5b79b1c1b567024b59d1"],["./freshcode-post/icons/icon-144x144.png","bdd40d5ced2207d3c91bcb91f5ae0e09"],["./freshcode-post/icons/icon-152x152.png","bd50210288cd24e4bbb19e9ecd2b5c87"],["./freshcode-post/icons/icon-192x192.png","cfba763039fbcb66432a772ba5f78f18"],["./freshcode-post/icons/icon-384x384.png","df9854cd67d8edb277d870ab15e47d50"],["./freshcode-post/icons/icon-512x512.png","3bac443ffe0fe3aa6627f921b1bdf8bb"],["./freshcode-post/icons/icon-72x72.png","9a76f11dffae3a1ba4ae6c95a16038b0"],["./freshcode-post/icons/icon-96x96.png","7507661a0cc26d3e15c21a71c0241e79"],["./freshcode-post/logo_freshcode.png","c3b3bec4bf794319d87ff4fac669e623"],["./freshcode-post/mobile-app-failure-top-6-reasons-why-it-happens.html","1b872944e00a15f7bf3200bbf787fa61"],["./freshcode-post/project-estimation-how-do-you-know-that-its-correct.html","7583c31747344cb4c4d6764f9be4fa68"],["./freshcode-post/quality-or-speed-setting-software-development-priorities-straight.html","37cd96d68835c57ef0d1a3eb25da4dfc"],["./freshcode-post/the-geography-of-software-development-outsourcing.html","1b44fca8418a090d7af4c002241275c6"],["./freshcode-post/the-hidden-power-of-mobile-application-lifecycle-management.html","ba1e96f73d10183bfbd14b06798b0767"],["./freshcode-post/the-power-of-three-in-software-rebuilding.html","29e79bf8d2f801b1b6e26f3db521d7e0"],["./freshcode-post/web-design-trends-that-no-longer-apply-in-2017-the-way-your-site-works.html","ddf0f8005c19926974034b9ffcb23bd7"],["./freshcode-post/web-design-trends-that-will-and-will-not-work-in-2017-part-2.html","04946817776c35113f2bc63214fba58d"],["./freshcode-post/what-is-freshcode.html","d4ee2dd64a6e7d6bc8aed9370e6b6a8b"],["./freshcode-post/what-is-mvp-and-why-every-startup-needs-it.html","8595eb3647cb1b106c244c33712e6f6d"],["./icons/icon-128x128.png","cb3a706198de5b79b1c1b567024b59d1"],["./icons/icon-144x144.png","bdd40d5ced2207d3c91bcb91f5ae0e09"],["./icons/icon-152x152.png","bd50210288cd24e4bbb19e9ecd2b5c87"],["./icons/icon-192x192.png","cfba763039fbcb66432a772ba5f78f18"],["./icons/icon-384x384.png","df9854cd67d8edb277d870ab15e47d50"],["./icons/icon-512x512.png","3bac443ffe0fe3aa6627f921b1bdf8bb"],["./icons/icon-72x72.png","9a76f11dffae3a1ba4ae6c95a16038b0"],["./icons/icon-96x96.png","7507661a0cc26d3e15c21a71c0241e79"],["./index.html","9702082aee590ae0564bd9b673693f7d"],["./logo_freshcode.png","c3b3bec4bf794319d87ff4fac669e623"],["./portfolio-cases/educadio.html","2563637aa239fec63df39647f33f8d23"],["./portfolio-cases/flotron.html","285a430d554708d1dd1124694a746949"],["./portfolio-cases/gommehd.html","c4aca12302360776bb1cdc1584797a2b"],["./portfolio-cases/icons/icon-128x128.png","cb3a706198de5b79b1c1b567024b59d1"],["./portfolio-cases/icons/icon-144x144.png","bdd40d5ced2207d3c91bcb91f5ae0e09"],["./portfolio-cases/icons/icon-152x152.png","bd50210288cd24e4bbb19e9ecd2b5c87"],["./portfolio-cases/icons/icon-192x192.png","cfba763039fbcb66432a772ba5f78f18"],["./portfolio-cases/icons/icon-384x384.png","df9854cd67d8edb277d870ab15e47d50"],["./portfolio-cases/icons/icon-512x512.png","3bac443ffe0fe3aa6627f921b1bdf8bb"],["./portfolio-cases/icons/icon-72x72.png","9a76f11dffae3a1ba4ae6c95a16038b0"],["./portfolio-cases/icons/icon-96x96.png","7507661a0cc26d3e15c21a71c0241e79"],["./portfolio-cases/logo_freshcode.png","c3b3bec4bf794319d87ff4fac669e623"],["./portfolio-cases/outdoor-rocks.html","5793bfbc0682c257812be75ac3ff853f"],["./portfolio-cases/play-attention.html","be7d111c67439d9bd8238cc1b931c664"],["./portfolio-cases/spiral.html","c0683395e3bb47dcbcb7caf6f2f6d83d"],["./portfolio.html","2180c1cc5a8fb579f7769b1f88e3793b"],["./services.html","daf30706636996c69c0c23802beb0034"],["testimonials.html","e4fe0ccea890b2e1015a15f17e745d68"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function(body) {
        // new Response() is happy when passed either a stream or a Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
                               dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
        return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
                                          ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
        .split('&') // Split into an array of 'key=value' strings
        .map(function(kv) {
            return kv.split('='); // Split each 'key=value' string into a [key, value] array
        })
        .filter(function(kv) {
            return ignoreUrlParametersMatching.every(function(ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
            });
        })
        .map(function(kv) {
            return kv.join('='); // Join each [key, value] array into a 'key=value' string
        })
        .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function(item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function(requests) {
        return requests.map(function(request) {
            return request.url;
        });
    }).then(function(urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return setOfCachedUrls(cache).then(function(cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
                        // If we don't have a key matching url in the cache already, add it.
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, {credentials: 'same-origin'});
                            return fetch(request).then(function(response) {
                                // Bail out of installation unless we get back a 200 OK for
                                // every request.
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function(responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        }).then(function() {

            // Force the SW to transition from installing -> active state
            return self.skipWaiting();

        })
    );
});

self.addEventListener('activate', function(event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.keys().then(function(existingRequests) {
                return Promise.all(
                    existingRequests.map(function(existingRequest) {
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function() {

            return self.clients.claim();

        })
    );
});


self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET') {
        // Should we call event.respondWith() inside this fetch event handler?
        // This needs to be determined synchronously, which will give other fetch
        // handlers a chance to handle the request if need be.
        var shouldRespond;

        // First, remove all the ignored parameters and hash fragment, and see if we
        // have that URL in our cache. If so, great! shouldRespond will be true.
        var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
        shouldRespond = urlsToCacheKeys.has(url);

        // If shouldRespond is false, check again, this time with 'index.html'
        // (or whatever the directoryIndex option is set to) at the end.
        var directoryIndex = 'index.html';
        if (!shouldRespond && directoryIndex) {
            url = addDirectoryIndex(url, directoryIndex);
            shouldRespond = urlsToCacheKeys.has(url);
        }

        // If shouldRespond is still false, check to see if this is a navigation
        // request, and if so, whether the URL matches navigateFallbackWhitelist.
        var navigateFallback = '';
        if (!shouldRespond &&
            navigateFallback &&
            (event.request.mode === 'navigate') &&
            isPathWhitelisted([], event.request.url)) {
            url = new URL(navigateFallback, self.location).toString();
            shouldRespond = urlsToCacheKeys.has(url);
        }

        // If shouldRespond was set to true at any point, then call
        // event.respondWith(), using the appropriate cache key.
        if (shouldRespond) {
            event.respondWith(
                caches.open(cacheName).then(function(cache) {
                    return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
                        if (response) {
                            return response;
                        }
                        throw Error('The cached response that was expected is missing.');
                    });
                }).catch(function(e) {
                    // Fall back to just fetch()ing the request if some unexpected error
                    // prevented the cached response from being valid.
                    console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                    return fetch(event.request);
                })
            );
        }
    }
});
