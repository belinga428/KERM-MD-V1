const _0x4d3ccf=_0x4033;(function(_0x98a318,_0x4f057a){const _0x3d9a00=_0x4033,_0x199a33=_0x98a318();while(!![]){try{const _0x5380d3=-parseInt(_0x3d9a00(0x12d))/0x1+-parseInt(_0x3d9a00(0x116))/0x2*(-parseInt(_0x3d9a00(0x9d))/0x3)+-parseInt(_0x3d9a00(0x9f))/0x4+-parseInt(_0x3d9a00(0xb8))/0x5*(parseInt(_0x3d9a00(0xfc))/0x6)+parseInt(_0x3d9a00(0xac))/0x7*(-parseInt(_0x3d9a00(0xa2))/0x8)+-parseInt(_0x3d9a00(0xb0))/0x9+parseInt(_0x3d9a00(0x11a))/0xa;if(_0x5380d3===_0x4f057a)break;else _0x199a33['push'](_0x199a33['shift']());}catch(_0x27fff3){_0x199a33['push'](_0x199a33['shift']());}}}(_0x3942,0xe93de));const config=require(_0x4d3ccf(0x10e)),{cmd,commands}=require('../command'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x4d3ccf(0xd6)),_0x235552={};_0x235552[_0x4d3ccf(0xb9)]=_0x4d3ccf(0x12f),_0x235552['desc']=_0x4d3ccf(0x109),_0x235552[_0x4d3ccf(0xde)]='📋',_0x235552[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x235552['filename']=__filename,cmd(_0x235552,async(_0x28b3bd,_0xa4153a,_0x48a8c0,{from:_0x59fdb4,q:_0x140d3f,reply:_0x4e274a,isGroup:_0x55e5c4})=>{const _0x2bcf95=_0x4d3ccf;if(!_0x55e5c4)return _0x4e274a(_0x2bcf95(0x128));try{const _0x199a14=_0x59fdb4;console[_0x2bcf95(0xe3)]('Attempting\x20to\x20fetch\x20pending\x20requests\x20for\x20group:\x20'+_0x199a14);const _0x59887e=await _0x28b3bd['groupRequestParticipantsList'](_0x199a14);console[_0x2bcf95(0xe3)](_0x59887e);if(_0x59887e[_0x2bcf95(0xd1)]>0x0){let _0x37f0bf=_0x2bcf95(0x7e),_0x2e2ef5=[];_0x59887e['forEach'](_0x124a8b=>{const _0x3a0663=_0x2bcf95,_0x4cd9dc=_0x124a8b[_0x3a0663(0xec)];_0x37f0bf+=_0x3a0663(0xc9)+_0x4cd9dc[_0x3a0663(0xeb)]('@')[0x0]+'\x0a',_0x2e2ef5[_0x3a0663(0xb5)](_0x4cd9dc);});const _0x3f6701={'text':_0x37f0bf,'mentions':_0x2e2ef5};await _0x28b3bd['sendMessage'](_0x59fdb4,_0x3f6701);}else _0x4e274a(_0x2bcf95(0xa5));}catch(_0x170659){console[_0x2bcf95(0xa6)]('Error\x20fetching\x20participant\x20requests:\x20'+_0x170659[_0x2bcf95(0xb3)]),_0x4e274a('⚠️\x20An\x20error\x20occurred\x20while\x20fetching\x20the\x20pending\x20requests.\x20Please\x20try\x20again\x20later.');}});const _0x485005={};_0x485005[_0x4d3ccf(0xb9)]=_0x4d3ccf(0xd5),_0x485005[_0x4d3ccf(0xcc)]='Approve\x20or\x20reject\x20all\x20join\x20requests',_0x485005['react']='✅',_0x485005[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x485005['filename']=__filename,cmd(_0x485005,async(_0x353dce,_0x54f548,_0x256cfa,{from:_0x268404,reply:_0x2fb175,isGroup:_0x4a74d6})=>{const _0x54b1d5=_0x4d3ccf;if(!_0x4a74d6)return _0x2fb175(_0x54b1d5(0x128));const _0x5e35f4=_0x256cfa[_0x54b1d5(0xf9)][_0x54b1d5(0x8c)](_0x54b1d5(0xaf))?'approve':'reject';try{const _0x30353c=await _0x353dce[_0x54b1d5(0xe1)](_0x268404);if(_0x30353c[_0x54b1d5(0xd1)]===0x0)return _0x2fb175(_0x54b1d5(0x10b));let _0x4b7339=_0x54b1d5(0x7e),_0x5b28cd=[],_0x590d86=[];_0x30353c[_0x54b1d5(0xf0)](_0x1d0b7d=>{const _0x162074=_0x54b1d5,_0x33f6e1=_0x1d0b7d[_0x162074(0xec)];_0x4b7339+=_0x162074(0xc9)+_0x33f6e1[_0x162074(0xeb)]('@')[0x0]+'\x0a',_0x5b28cd[_0x162074(0xb5)](_0x33f6e1),_0x590d86[_0x162074(0xb5)](_0x33f6e1);});const _0x2fa85b={'text':_0x4b7339,'mentions':_0x5b28cd};await _0x353dce['sendMessage'](_0x268404,_0x2fa85b);const _0x1a1311=await _0x353dce['groupRequestParticipantsUpdate'](_0x268404,_0x590d86,_0x5e35f4);console['log'](_0x1a1311),_0x2fb175(_0x54b1d5(0xc4)+_0x5e35f4+'ed\x20all\x20join\x20requests.');}catch(_0x5019be){console[_0x54b1d5(0xa6)]('Error\x20updating\x20participant\x20requests:\x20'+_0x5019be[_0x54b1d5(0xb3)]),_0x2fb175(_0x54b1d5(0xf4));}});const WA_DEFAULT_EPHEMERAL_24H=0x15180,WA_DEFAULT_EPHEMERAL_7D=0x93a80,WA_DEFAULT_EPHEMERAL_90D=0x76a700,_0x3bcce0={};_0x3bcce0[_0x4d3ccf(0xb9)]=_0x4d3ccf(0xa1),_0x3bcce0[_0x4d3ccf(0xde)]=_0x4d3ccf(0xd4),_0x3bcce0[_0x4d3ccf(0xd2)]=['dm'],_0x3bcce0[_0x4d3ccf(0xcc)]='Turn\x20on/off\x20disappearing\x20messages.',_0x3bcce0[_0x4d3ccf(0x119)]='main',_0x3bcce0[_0x4d3ccf(0x90)]=__filename,cmd(_0x3bcce0,async(_0x4447d9,_0x24b7f4,_0x1914bf,{from:_0xc406ee,isGroup:_0x4c371e,isAdmins:_0x433d2a,args:_0x4f85f7})=>{const _0x260bd6=_0x4d3ccf;if(!_0x4c371e){const _0x547ebd={'text':_0x260bd6(0xe7)};await _0x4447d9[_0x260bd6(0x124)](_0xc406ee,_0x547ebd);return;}if(!_0x433d2a){const _0x376809={'text':_0x260bd6(0xef)};await _0x4447d9['sendMessage'](_0xc406ee,_0x376809);return;}const _0x1bad2f=_0x4f85f7[0x0];if(_0x1bad2f==='on'){const _0x36c6a6=_0x4f85f7[0x1];let _0x1d9960;switch(_0x36c6a6){case _0x260bd6(0x10c):_0x1d9960=WA_DEFAULT_EPHEMERAL_24H;break;case'7d':_0x1d9960=WA_DEFAULT_EPHEMERAL_7D;break;case'90d':_0x1d9960=WA_DEFAULT_EPHEMERAL_90D;break;default:const _0x51f04a={};_0x51f04a['text']=_0x260bd6(0x8d),await _0x4447d9[_0x260bd6(0x124)](_0xc406ee,_0x51f04a);return;}const _0x633e8d={'disappearingMessagesInChat':_0x1d9960};await _0x4447d9['sendMessage'](_0xc406ee,_0x633e8d);const _0x46eb35={'text':_0x260bd6(0xfd)+_0x36c6a6+'.'};await _0x4447d9[_0x260bd6(0x124)](_0xc406ee,_0x46eb35);}else{if(_0x1bad2f===_0x260bd6(0x102)){await _0x4447d9[_0x260bd6(0x124)](_0xc406ee,_0x1ef878);const _0x44c126={'text':_0x260bd6(0xee)};await _0x4447d9[_0x260bd6(0x124)](_0xc406ee,_0x44c126);}else{const _0x18317d={'text':_0x260bd6(0xf3)};await _0x4447d9[_0x260bd6(0x124)](_0xc406ee,_0x18317d);}}});const _0x592aaf={};_0x592aaf[_0x4d3ccf(0xb9)]=_0x4d3ccf(0xcf),_0x592aaf[_0x4d3ccf(0xde)]=_0x4d3ccf(0xd4),_0x592aaf['alias']=[_0x4d3ccf(0x108)],_0x592aaf['desc']=_0x4d3ccf(0xc8),_0x592aaf[_0x4d3ccf(0x119)]=_0x4d3ccf(0xe5),_0x592aaf[_0x4d3ccf(0x90)]=__filename,cmd(_0x592aaf,async(_0x20b794,_0x2c4126,_0x243a8e,{from:_0x35cdcd,isGroup:_0x33bd4a,isAdmins:_0x147ee3,args:_0xbb900b})=>{const _0x1ca89f=_0x4d3ccf;if(!_0x33bd4a){const _0x114b51={'text':_0x1ca89f(0xe7)};await _0x20b794[_0x1ca89f(0x124)](_0x35cdcd,_0x114b51);return;}if(!_0xbb900b[_0x1ca89f(0xd1)]){const _0x15752c={'text':_0x1ca89f(0x12c)};await _0x20b794[_0x1ca89f(0x124)](_0x35cdcd,_0x15752c);return;}const _0x38b207=_0xbb900b['join']('\x20'),_0x325d12={'text':_0x38b207},_0x291109={'ephemeralExpiration':WA_DEFAULT_EPHEMERAL_7D};await _0x20b794[_0x1ca89f(0x124)](_0x35cdcd,_0x325d12,_0x291109);});const _0x4f6b5b={};_0x4f6b5b[_0x4d3ccf(0xb9)]=_0x4d3ccf(0x11c),_0x4f6b5b[_0x4d3ccf(0xde)]='🔇',_0x4f6b5b['alias']=[_0x4d3ccf(0xc6),_0x4d3ccf(0xcb)],_0x4f6b5b['desc']=_0x4d3ccf(0x112),_0x4f6b5b[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x4f6b5b[_0x4d3ccf(0xe9)]=_0x4d3ccf(0xb2),_0x4f6b5b['filename']=__filename,cmd(_0x4f6b5b,async(_0x28a07c,_0xee72ae,_0x19297a,{from:_0x28bf26,isGroup:_0x1248ee,sender:_0x10117e,isOwner:_0x1b1d02,groupAdmins:_0x32df00,isBotAdmins:_0x14087e,isAdmins:_0xa2796,reply:_0x6579a5,pushname:_0x56fbf6})=>{const _0x572c3e=_0x4d3ccf;try{if(!_0x1248ee)return _0x6579a5('*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*');if(!_0x1b1d02&&!_0xa2796)return _0x6579a5(_0x572c3e(0x8e));if(!_0x14087e)return _0x6579a5(_0x572c3e(0xea));await _0x28a07c[_0x572c3e(0x113)](_0x28bf26,_0x572c3e(0xdd));const _0x31c894={'text':_0x572c3e(0x97)+_0x56fbf6+'.*\x20🔇'};await _0x28a07c['sendMessage'](_0x28bf26,_0x31c894,{'quoted':_0xee72ae});}catch(_0x36bd3e){console['log'](_0x36bd3e),_0x6579a5('*❌\x20An\x20error\x20occurred\x20!*\x0a\x0a'+_0x36bd3e);}});const _0x87e572={};_0x87e572['pattern']='unmute',_0x87e572['react']='🔇',_0x87e572[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0xdf),_0x4d3ccf(0x11e)],_0x87e572[_0x4d3ccf(0xcc)]=_0x4d3ccf(0xc7),_0x87e572[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x87e572['use']=_0x4d3ccf(0x78),_0x87e572[_0x4d3ccf(0x90)]=__filename,cmd(_0x87e572,async(_0x4d97a7,_0x13e4e6,_0x24c1bb,{from:_0x15bcab,isGroup:_0x331531,sender:_0x40059b,isOwner:_0x5c118b,groupAdmins:_0x51c8a4,isBotAdmins:_0x4896a9,isAdmins:_0xfb8d6d,reply:_0x5d8614,pushname:_0x3dc58d})=>{const _0x31eb45=_0x4d3ccf;try{if(!_0x331531)return _0x5d8614(_0x31eb45(0xdc));if(!_0x5c118b&&!_0xfb8d6d)return _0x5d8614(_0x31eb45(0x8e));if(!_0x4896a9)return _0x5d8614(_0x31eb45(0xea));await _0x4d97a7[_0x31eb45(0x113)](_0x15bcab,_0x31eb45(0xae));const _0x3da816={'text':'*✅\x20The\x20group\x20has\x20been\x20opened\x20by\x20'+_0x3dc58d+_0x31eb45(0xd9)};await _0x4d97a7[_0x31eb45(0x124)](_0x15bcab,_0x3da816,{'quoted':_0x13e4e6});}catch(_0x4ae7e0){console['log'](_0x4ae7e0),_0x5d8614(_0x31eb45(0xa8)+_0x4ae7e0);}});const _0x2bff43={};_0x2bff43['pattern']=_0x4d3ccf(0xba),_0x2bff43[_0x4d3ccf(0xde)]='🔒',_0x2bff43[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0xd0)],_0x2bff43['desc']=_0x4d3ccf(0x99),_0x2bff43['category']=_0x4d3ccf(0xf2),_0x2bff43[_0x4d3ccf(0xe9)]=_0x4d3ccf(0x80),_0x2bff43[_0x4d3ccf(0x90)]=__filename,cmd(_0x2bff43,async(_0x4fca69,_0x5cf85e,_0x4c3b86,{from:_0x4223a1,isGroup:_0x571a66,sender:_0x30541a,isOwner:_0x43efbf,isBotAdmins:_0x97a19f,isAdmins:_0x1c3637,reply:_0x45d80c,pushname:_0x3c8abe})=>{const _0x34e009=_0x4d3ccf;try{if(!_0x571a66)return _0x45d80c(_0x34e009(0xdc));if(!_0x43efbf&&!_0x1c3637)return _0x45d80c(_0x34e009(0x8e));if(!_0x97a19f)return _0x45d80c(_0x34e009(0xea));await _0x4fca69['groupSettingUpdate'](_0x4223a1,'locked');const _0x2a9504={'text':_0x34e009(0xa7)+_0x3c8abe+_0x34e009(0x87)};await _0x4fca69[_0x34e009(0x124)](_0x4223a1,_0x2a9504,{'quoted':_0x5cf85e});}catch(_0x3f6e67){console[_0x34e009(0xe3)](_0x3f6e67),_0x45d80c(_0x34e009(0xa8)+_0x3f6e67);}});const _0x285abb={};_0x285abb['pattern']='unlockgc',_0x285abb[_0x4d3ccf(0xde)]='🔓',_0x285abb[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0x129)],_0x285abb[_0x4d3ccf(0xcc)]=_0x4d3ccf(0xf8),_0x285abb[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x285abb[_0x4d3ccf(0xe9)]=_0x4d3ccf(0xe8),_0x285abb['filename']=__filename,cmd(_0x285abb,async(_0x38a739,_0x4c4aae,_0x400667,{from:_0x8b50f8,isGroup:_0x49c6d4,sender:_0x5c9e18,isOwner:_0x3f2779,isBotAdmins:_0x3122aa,isAdmins:_0x4b1535,reply:_0x5af823,pushname:_0x450a78})=>{const _0x43b683=_0x4d3ccf;try{if(!_0x49c6d4)return _0x5af823('*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*');if(!_0x3f2779&&!_0x4b1535)return _0x5af823(_0x43b683(0x8e));if(!_0x3122aa)return _0x5af823(_0x43b683(0xea));await _0x38a739[_0x43b683(0x113)](_0x8b50f8,_0x43b683(0x100));const _0x140af8={'text':_0x43b683(0x105)+_0x450a78+_0x43b683(0xca)};await _0x38a739[_0x43b683(0x124)](_0x8b50f8,_0x140af8,{'quoted':_0x4c4aae});}catch(_0x40e3f9){console[_0x43b683(0xe3)](_0x40e3f9),_0x5af823(_0x43b683(0xa8)+_0x40e3f9);}});const leaveCommand={};leaveCommand[_0x4d3ccf(0xb9)]='leave',leaveCommand[_0x4d3ccf(0xde)]='🔓',leaveCommand[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0x89),'kickme',_0x4d3ccf(0xb4),'f_left',_0x4d3ccf(0xd3)],leaveCommand[_0x4d3ccf(0xcc)]=_0x4d3ccf(0x12a),leaveCommand[_0x4d3ccf(0x119)]='group',leaveCommand[_0x4d3ccf(0xe9)]=_0x4d3ccf(0x7b),leaveCommand[_0x4d3ccf(0x90)]=__filename,cmd(leaveCommand,async(_0x3989cf,_0x3675ae,_0x3e4f3e,{from:_0x530449,isGroup:_0x43b741,isOwner:_0x5b0ad6,reply:_0x3ec633})=>{const _0x21f5c2=_0x4d3ccf;try{const _0x43c036=(await fetchJson(_0x21f5c2(0x121)))[_0x21f5c2(0x117)];if(!_0x43b741)return _0x3ec633(_0x21f5c2(0x123));if(!_0x5b0ad6)return _0x3ec633(_0x21f5c2(0x10f));await _0x3989cf[_0x21f5c2(0x124)](_0x530449,{'text':_0x21f5c2(0x77)},{'quoted':_0x3675ae}),await _0x3989cf[_0x21f5c2(0x110)](_0x530449);}catch(_0x320c00){await _0x3989cf[_0x21f5c2(0x124)](_0x530449,{'react':{'text':'❌','key':_0x3675ae[_0x21f5c2(0x91)]}}),console[_0x21f5c2(0xe3)](_0x320c00),_0x3ec633(_0x21f5c2(0xf1)+_0x320c00);}});const _0x293215={};_0x293215['pattern']=_0x4d3ccf(0x8a),_0x293215['react']='🔓',_0x293215[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0xa4),_0x4d3ccf(0x7c)],_0x293215[_0x4d3ccf(0xcc)]=_0x4d3ccf(0xc5),_0x293215[_0x4d3ccf(0x119)]='group',_0x293215[_0x4d3ccf(0xe9)]='.updategname',_0x293215[_0x4d3ccf(0x90)]=__filename,cmd(_0x293215,async(_0x4144fc,_0x33dd08,_0x3e761d,{from:_0x5f09cb,isGroup:_0x577932,sender:_0x1341d1,isAdmins:_0xda3db7,isBotAdmins:_0x377b1f,reply:_0x105d20,groupName:_0x385e5d,q:_0x22a792})=>{const _0x4ce847=_0x4d3ccf;try{const _0x158429=(await fetchJson(_0x4ce847(0x121)))[_0x4ce847(0x117)];if(!_0x577932)return _0x105d20('*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*');if(!_0xda3db7)return _0x105d20(_0x4ce847(0x8e));if(!_0x377b1f)return _0x105d20(_0x4ce847(0xea));if(!_0x22a792)return _0x105d20('*⚠️\x20Please\x20provide\x20the\x20new\x20group\x20name.*');await _0x4144fc[_0x4ce847(0x125)](_0x5f09cb,_0x22a792);const _0x50d081={'text':_0x4ce847(0xda)+_0x22a792+'*'};await _0x4144fc[_0x4ce847(0x124)](_0x5f09cb,_0x50d081,{'quoted':_0x33dd08});}catch(_0x9af9d6){const _0xdf3f56={'text':'❌','key':_0x33dd08[_0x4ce847(0x91)]},_0x4ce7ab={'react':_0xdf3f56};await _0x4144fc[_0x4ce847(0x124)](_0x5f09cb,_0x4ce7ab),console['log'](_0x9af9d6),_0x105d20(_0x4ce847(0x7a)+_0x9af9d6);}});const _0x19cdd8={};function _0x4033(_0x3df07d,_0x29fad3){const _0x39426b=_0x3942();return _0x4033=function(_0x4033ff,_0x395d75){_0x4033ff=_0x4033ff-0x77;let _0x3be3c1=_0x39426b[_0x4033ff];return _0x3be3c1;},_0x4033(_0x3df07d,_0x29fad3);}_0x19cdd8[_0x4d3ccf(0xb9)]=_0x4d3ccf(0xa9),_0x19cdd8[_0x4d3ccf(0xde)]='🔓',_0x19cdd8[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0x83),_0x4d3ccf(0x81)],_0x19cdd8['desc']=_0x4d3ccf(0xff),_0x19cdd8[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x19cdd8['use']=_0x4d3ccf(0x103),_0x19cdd8[_0x4d3ccf(0x90)]=__filename,cmd(_0x19cdd8,async(_0x56cdcf,_0x4049d0,_0xe7488a,{from:_0x535b01,isGroup:_0x4ef893,sender:_0x2aeebc,isAdmins:_0x24a005,isBotAdmins:_0x3adea7,reply:_0x3c5e4d,q:_0x9ebeb6})=>{const _0x2e445b=_0x4d3ccf;try{const _0xd0905e=(await fetchJson(_0x2e445b(0x121)))[_0x2e445b(0x117)];if(!_0x4ef893)return _0x3c5e4d('*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*');if(!_0x24a005)return _0x3c5e4d(_0x2e445b(0x8e));if(!_0x3adea7)return _0x3c5e4d(_0x2e445b(0xea));if(!_0x9ebeb6)return _0x3c5e4d(_0x2e445b(0x11b));await _0x56cdcf[_0x2e445b(0xa0)](_0x535b01,_0x9ebeb6);const _0x175f79={'text':'*✅\x20Group\x20description\x20updated\x20to:\x20'+_0x9ebeb6+'*'};await _0x56cdcf['sendMessage'](_0x535b01,_0x175f79,{'quoted':_0x4049d0});}catch(_0x1edd2a){const _0x4a54ea={'text':'❌','key':_0x4049d0[_0x2e445b(0x91)]},_0x4434d3={'react':_0x4a54ea};await _0x56cdcf[_0x2e445b(0x124)](_0x535b01,_0x4434d3),console[_0x2e445b(0xe3)](_0x1edd2a),_0x3c5e4d(_0x2e445b(0x7a)+_0x1edd2a);}});const _0x53f490={};_0x53f490['pattern']=_0x4d3ccf(0x10d),_0x53f490[_0x4d3ccf(0xde)]='📬',_0x53f490[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0xd8),_0x4d3ccf(0xc3)],_0x53f490[_0x4d3ccf(0xcc)]='To\x20Join\x20a\x20Group\x20from\x20Invite\x20link',_0x53f490[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x53f490[_0x4d3ccf(0xe9)]=_0x4d3ccf(0xcd),_0x53f490[_0x4d3ccf(0x90)]=__filename,cmd(_0x53f490,async(_0xafbbc5,_0x35af42,_0xd59064,{from:_0x5a8519,isCmd:_0xb95eb1,body:_0x5ef639,command:_0x4573bf,args:_0x3135cb,q:_0x5bc054,isGroup:_0x107bc3,sender:_0x575cb6,senderNumber:_0x44c2cd,isOwner:_0x5b117e,isCreator:_0x40b887,isDev:_0x255af3,reply:_0xb44ad4})=>{const _0x3a9958=_0x4d3ccf;try{const _0x4151c4=(await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json'))[_0x3a9958(0x117)];if(!_0x40b887&&!_0x255af3&&!_0x5b117e)return _0xb44ad4(_0x3a9958(0xbd));if(!_0x5bc054)return _0xb44ad4('*⚠️\x20Please\x20provide\x20the\x20Group\x20Link*\x20🖇️');let _0xf62cd0=_0x3135cb[0x0][_0x3a9958(0xeb)]('https://chat.whatsapp.com/')[0x1];await _0xafbbc5[_0x3a9958(0xe6)](_0xf62cd0);const _0x264158={'text':'✅\x20*Successfully\x20Joined*'},_0x133db1={'quoted':_0x35af42};await _0xafbbc5[_0x3a9958(0x124)](_0x5a8519,_0x264158,_0x133db1);const _0x343b78={'text':_0x3a9958(0x86)};await _0xafbbc5[_0x3a9958(0x124)](_0x5a8519,_0x343b78,_0x133db1);}catch(_0x736353){const _0xa6c24b={'text':'❌','key':_0x35af42[_0x3a9958(0x91)]},_0x26e212={'react':_0xa6c24b};await _0xafbbc5[_0x3a9958(0x124)](_0x5a8519,_0x26e212),console[_0x3a9958(0xe3)](_0x736353),_0xb44ad4(_0x3a9958(0x7a)+_0x736353);}});const _0x4df201={};_0x4df201[_0x4d3ccf(0xb9)]='invite',_0x4df201[_0x4d3ccf(0xde)]=_0x4d3ccf(0xbf),_0x4df201[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0xaa),_0x4d3ccf(0x9e)],_0x4df201['desc']=_0x4d3ccf(0xed),_0x4df201[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x4df201['use']=_0x4d3ccf(0xe4),_0x4df201[_0x4d3ccf(0x90)]=__filename,cmd(_0x4df201,async(_0x6f66fd,_0x878f96,_0xbe8b04,{from:_0x23420c,l:_0x33f33e,quoted:_0x233417,body:_0x2d28fe,isCmd:_0x5ece0a,command:_0x45c78c,args:_0x14d8c5,q:_0x2f4338,isGroup:_0x4eb7bf,sender:_0x23965c,senderNumber:_0x3229d6,botNumber2:_0x6a9f0a,botNumber:_0x4501d7,pushname:_0x201e35,isMe:_0xb75f50,isOwner:_0x1442a9,groupMetadata:_0xcadfd7,groupName:_0x7371b5,participants:_0x4ed411,groupAdmins:_0x3efa27,isBotAdmins:_0x47b4ce,isCreator:_0x1dcd9a,isDev:_0x494133,isAdmins:_0x5ad1f2,reply:_0x381e4b})=>{const _0x5bfb01=_0x4d3ccf;try{const _0x1f5de0=(await fetchJson(_0x5bfb01(0x121)))[_0x5bfb01(0x117)];if(!_0x4eb7bf)return _0x381e4b(_0x1f5de0[_0x5bfb01(0x12b)]);if(!_0x1442a9&&!_0x494133&&!_0x5ad1f2)return _0x381e4b(_0x5bfb01(0x9a));if(!_0x47b4ce)return _0x381e4b(_0x5bfb01(0x126));const _0x3c5a05=await _0x6f66fd[_0x5bfb01(0xad)](_0x23420c),_0x54eebc={'text':_0x5bfb01(0xfa)+_0x3c5a05},_0xeb6fd5={'quoted':_0x878f96};await _0x6f66fd['sendMessage'](_0x23420c,_0x54eebc,_0xeb6fd5);}catch(_0x5850f1){const _0x1bced2={'text':'❌','key':_0x878f96[_0x5bfb01(0x91)]},_0x47e82b={'react':_0x1bced2};await _0x6f66fd['sendMessage'](_0x23420c,_0x47e82b),console[_0x5bfb01(0xe3)](_0x5850f1),_0x381e4b('*❌\x20Error\x20occurred\x20!!*\x0a\x0a'+_0x5850f1);}});const _0x34bd2a={};_0x34bd2a[_0x4d3ccf(0xb9)]=_0x4d3ccf(0xb7),_0x34bd2a[_0x4d3ccf(0xde)]=_0x4d3ccf(0xbf),_0x34bd2a[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0x7d),_0x4d3ccf(0xce),_0x4d3ccf(0x92),_0x4d3ccf(0x8f)],_0x34bd2a['desc']=_0x4d3ccf(0xe2),_0x34bd2a[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x34bd2a['use']='.revoke',_0x34bd2a[_0x4d3ccf(0x90)]=__filename,cmd(_0x34bd2a,async(_0x2604da,_0x1210b8,_0x442025,{from:_0x2297a9,l:_0x4af8b3,quoted:_0x4266f7,body:_0x56db52,isCmd:_0x22f351,command:_0x208134,args:_0x477bc9,q:_0x2599da,isGroup:_0x30bfaf,sender:_0x17047b,senderNumber:_0x585ef7,botNumber2:_0x5823b7,botNumber:_0x59233a,pushname:_0x50143e,isMe:_0x4e8f89,isOwner:_0x91dfef,groupMetadata:_0x165127,groupName:_0x4877cc,participants:_0xcbe573,groupAdmins:_0x2873ab,isBotAdmins:_0x5abcd3,isCreator:_0xeaee79,isDev:_0x3f29ff,isAdmins:_0x318cbf,reply:_0x5961ce})=>{const _0x91ab9f=_0x4d3ccf;try{const _0x211e21=(await fetchJson(_0x91ab9f(0x121)))[_0x91ab9f(0x117)];if(!_0x30bfaf)return _0x5961ce(_0x211e21[_0x91ab9f(0x12b)]);if(!_0x91dfef&&!_0x318cbf)return _0x5961ce(_0x91ab9f(0x120));if(!_0x5abcd3)return _0x5961ce(_0x91ab9f(0xfe));await _0x2604da['groupRevokeInvite'](_0x2297a9);const _0x4f6763={'text':'*Group\x20link\x20reseted*\x20⛔'},_0x5e7c8c={'quoted':_0x1210b8};await _0x2604da[_0x91ab9f(0x124)](_0x2297a9,_0x4f6763,_0x5e7c8c);}catch(_0x4e0952){const _0x1986f9={'text':'❌','key':_0x1210b8[_0x91ab9f(0x91)]},_0x4a2c29={'react':_0x1986f9};await _0x2604da[_0x91ab9f(0x124)](_0x2297a9,_0x4a2c29),console[_0x91ab9f(0xe3)](_0x4e0952),_0x5961ce(_0x91ab9f(0x7a)+_0x4e0952);}});function _0x3942(){const _0x1a8d88=['*⚠️\x20I\x20need\x20to\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.*','split','jid','To\x20Get\x20the\x20Group\x20Invite\x20link','ephemeral\x20messages\x20are\x20now\x20OFF.','Only\x20admins\x20can\x20turn\x20on/off\x20ephemeral\x20messages.','forEach','❌\x20*An\x20error\x20occurred\x20!!*\x0a\x0a','group','Please\x20use\x20`!ephemeral\x20on\x20<duration>`\x20or\x20`!ephemeral\x20off`.','⚠️\x20An\x20error\x20occurred\x20while\x20processing\x20the\x20request.\x20Please\x20try\x20again\x20later.','groupinfo','size','groupParticipantsUpdate','Allow\x20all\x20members\x20to\x20edit\x20group\x20info.','body','https://chat.whatsapp.com/','Get\x20group\x20informations.','432STEFwk','ephemeral\x20messages\x20are\x20now\x20ON\x20for\x20','*❌\x20The\x20bot\x20needs\x20admin\x20rights\x20to\x20reset\x20the\x20group\x20link.*','Change\x20the\x20group\x20description.','unlocked','promote','off','.updategdesc','\x0a\x0a📃\x20*Group\x20Description*\x20-\x20','*✅\x20Group\x20settings\x20unlocked\x20by\x20','demote','taggp','senddisappear','Get\x20list\x20of\x20participants\x20who\x20requested\x20to\x20join\x20the\x20group','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group.*','There\x20are\x20no\x20pending\x20requests\x20to\x20manage.','24h','join','../config','*❌\x20Only\x20the\x20bot\x20owner\x20can\x20use\x20this\x20command!*','groupLeave','tggp','Change\x20to\x20group\x20settings\x20to\x20only\x20admins\x20can\x20send\x20messages.','groupSettingUpdate','give_adm','f_tagall','757698fxPTjF','replyMsg','f_taggp','category','34222960LzjVtY','*⚠️\x20Please\x20provide\x20the\x20new\x20group\x20description.*','mute','FOOTER','f_unmute','.promote','*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20reset\x20the\x20group\x20link.*','https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json','❌\x20*Error\x20Accurated\x20!!*\x0a\x0a','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group!*','sendMessage','groupUpdateSubject','*❌\x20The\x20bot\x20needs\x20admin\x20rights\x20to\x20generate\x20the\x20invite\x20link.*','.demote','This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group\x20chat.','unlockgsettings','To\x20leave\x20from\x20the\x20group','only_gp','Please\x20provide\x20a\x20message\x20to\x20send.','1569677EiIANz','.ginfo','joinrequests','*Good\x20Bye\x20All*\x20👋🏻','.unmute','*Please\x20mention\x20a\x20message*\x20ℹ️','*❌\x20Error\x20occurred\x20!!*\x0a\x0a','.leave','gname','revokegrouplink','Pending\x20Requests\x20to\x20Join\x20the\x20Group:\x0a','removeadmin','.lockgs','gdesc','>\x20ᴅᴇᴀʀ\x20☣️\x20@','upgdesc','No\x20description\x20available','*Please\x20add\x20a\x20Message*\x20ℹ️','✅\x20*Your\x20request\x20to\x20join\x20the\x20group\x20has\x20been\x20sent*','.*\x20🔒','tagall','left','updategname','To\x20Tag\x20all\x20Members\x20for\x20Message','includes','Invalid\x20duration!\x20Use\x20`24h`,\x20`7d`,\x20or\x20`90d`.','*⚠️\x20Only\x20group\x20admins\x20or\x20the\x20bot\x20owner\x20can\x20use\x20this\x20command.*','f_revoke','filename','key','revokelink','💱\x20*HI\x20ALL!\x20PLEASE\x20GIVE\x20YOUR\x20ATTENTION*\x20\x0a\x20\x0a','To\x20Tag\x20all\x20Members','owner','To\x20Add\x20a\x20participant\x20as\x20an\x20Admin','*✅\x20The\x20group\x20has\x20been\x20closed\x20by\x20','participant','Restrict\x20group\x20settings\x20so\x20only\x20admins\x20can\x20edit\x20group\x20info.','*❌\x20This\x20command\x20is\x20only\x20for\x20the\x20bot\x20owner,\x20admins,\x20or\x20the\x20bot\x20itself.*','*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20use\x20this\x20command*','*User\x20demoted\x20to\x20Member*\x20\x20✔️','15xamkyj','glink','1320836cRTsuY','groupUpdateDescription','ephemeral','8ghdbGe','quoted','upgname','No\x20pending\x20requests\x20to\x20join\x20the\x20group.','error','*✅\x20Group\x20settings\x20locked\x20by\x20','*❌\x20An\x20error\x20occurred\x20!*\x0a\x0a','updategdesc','grouplink','map','57078kmWkJq','groupInviteCode','not_announcement','approve','9861543bKNTpt','*❗\x20The\x20user\x20is\x20already\x20an\x20Admin*\x20\x20✔️','.mute','message','f_leave','push','*❌\x20The\x20bot\x20needs\x20admin\x20rights\x20to\x20execute\x20this\x20command.*','revoke','94265cdzTQP','pattern','lockgc','*❌\x20An\x20error\x20occurred\x20!!*\x0a\x0a','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group*','*⚠️\x20Only\x20the\x20Owner\x20can\x20use\x20this\x20command*','contextInfo','🖇️','profilePictureUrl','*❗\x20The\x20user\x20is\x20not\x20an\x20admin*','you_adm','f_join','Successfully\x20','Change\x20the\x20group\x20name.','close','Change\x20group\x20settings\x20so\x20all\x20members\x20can\x20send\x20messages.','Send\x20a\x20disappearing\x20message.','😻\x20@','.*\x20🔓','f_mute','desc','.join\x20<\x20Group\x20Link\x20>','resetglink','senddm','lockgsettings','length','alias','f-left','🌪️','allreq','../lib/functions','.tag\x20Hi','joinme','.*\x20🔇','*✅\x20Group\x20name\x20updated\x20to:\x20','f_tag','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*','announcement','react','open','\x0a\x0a👤\x20*Group\x20Creator*\x20-\x20','groupRequestParticipantsList','To\x20Reset\x20the\x20group\x20link','log','.invite','main','groupAcceptInvite','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','.unlockgs','use'];_0x3942=function(){return _0x1a8d88;};return _0x3942();}const _0xd699f4={};_0xd699f4[_0x4d3ccf(0xb9)]=_0x4d3ccf(0x101),_0xd699f4[_0x4d3ccf(0xde)]='🥏',_0xd699f4[_0x4d3ccf(0xd2)]=['addadmin'],_0xd699f4[_0x4d3ccf(0xcc)]=_0x4d3ccf(0x96),_0xd699f4[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0xd699f4[_0x4d3ccf(0xe9)]=_0x4d3ccf(0x11f),_0xd699f4[_0x4d3ccf(0x90)]=__filename,cmd(_0xd699f4,async(_0x21eb6d,_0x1094f6,_0x50bbf4,{from:_0x5b239d,l:_0x4fb3f2,quoted:_0x1831e7,body:_0x38be8d,isCmd:_0x24b056,command:_0x11afe4,mentionByTag:_0x5b914e,args:_0x35e9f5,q:_0x4eecf2,isGroup:_0x4662ec,sender:_0x24798c,senderNumber:_0x3f706c,botNumber2:_0x7d1ff7,botNumber:_0x1a9fe9,pushname:_0x234096,isMe:_0x113e79,isOwner:_0x4aa374,groupMetadata:_0x1f9802,groupName:_0x445c78,participants:_0x5be5d5,groupAdmins:_0x533c27,isBotAdmins:_0x38d8ec,isCreator:_0x40b3bc,isDev:_0x112a4b,isAdmins:_0x4cece5,reply:_0x2d09b4})=>{const _0x5ef573=_0x4d3ccf;try{const _0x36014f=(await fetchJson(_0x5ef573(0x121)))[_0x5ef573(0x117)];if(!_0x4662ec)return _0x2d09b4(_0x5ef573(0x10a));if(!_0x4cece5&&!_0x4aa374)return _0x2d09b4('*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20promote\x20participants.*');if(!_0x38d8ec)return _0x2d09b4(_0x36014f[_0x5ef573(0x114)]);let _0x4141b5;_0x5b914e&&_0x5b914e[_0x5ef573(0xd1)]>0x0?_0x4141b5=_0x5b914e[0x0]:_0x4141b5=_0x1094f6['msg'][_0x5ef573(0xbe)][_0x5ef573(0x98)]||![];if(!_0x4141b5)return _0x2d09b4('*Couldn\x27t\x20find\x20any\x20user\x20in\x20context*\x20❌');const _0x4b87a7=await getGroupAdmins(_0x5be5d5);if(_0x4b87a7['includes'](_0x4141b5))return _0x2d09b4(_0x5ef573(0xb1));await _0x21eb6d['groupParticipantsUpdate'](_0x5b239d,[_0x4141b5],_0x5ef573(0x101));const _0x1954bb={'text':'*User\x20promoted\x20to\x20Admin*\x20\x20✔️'},_0x3cd768={'quoted':_0x1094f6};await _0x21eb6d[_0x5ef573(0x124)](_0x5b239d,_0x1954bb,_0x3cd768);}catch(_0x205e46){const _0x4c16c5={'text':'❌','key':_0x1094f6[_0x5ef573(0x91)]},_0x184c9b={'react':_0x4c16c5};await _0x21eb6d[_0x5ef573(0x124)](_0x5b239d,_0x184c9b),console['log'](_0x205e46),_0x2d09b4(_0x5ef573(0x7a)+_0x205e46);}});const _0x10f253={};_0x10f253[_0x4d3ccf(0xb9)]=_0x4d3ccf(0x106),_0x10f253[_0x4d3ccf(0xde)]='🥏',_0x10f253[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0x7f)],_0x10f253[_0x4d3ccf(0xcc)]='To\x20Demote\x20Admin\x20to\x20Member',_0x10f253[_0x4d3ccf(0x119)]='group',_0x10f253['use']=_0x4d3ccf(0x127),_0x10f253[_0x4d3ccf(0x90)]=__filename,cmd(_0x10f253,async(_0x5cb2ac,_0xd6fec1,_0x3b4a93,{from:_0x5ea95a,l:_0x4c4be9,quoted:_0x2e6f55,body:_0x587afa,isCmd:_0x15fda7,command:_0xb57271,mentionByTag:_0x3decd4,args:_0x3338b0,q:_0x115f69,isGroup:_0x42af4e,sender:_0x245f0b,senderNumber:_0x15171b,botNumber2:_0x29bf34,botNumber:_0x4c7a8e,pushname:_0x4f9873,isMe:_0x5bf219,isOwner:_0x5853af,groupMetadata:_0x1e6911,groupName:_0x954690,participants:_0x599854,groupAdmins:_0x479239,isBotAdmins:_0x43af4d,isCreator:_0x420c4e,isDev:_0x4dcd7f,isAdmins:_0x5ba6c3,reply:_0x466557})=>{const _0x384a26=_0x4d3ccf;try{if(!_0x42af4e)return _0x466557(_0x384a26(0x10a));if(!_0x5ba6c3&&!_0x5853af)return _0x466557('*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20demote\x20a\x20member.*');if(!_0x43af4d)return _0x466557('*❌\x20The\x20bot\x20must\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.*');let _0xdc698d;_0x3decd4&&_0x3decd4[_0x384a26(0xd1)]>0x0?_0xdc698d=_0x3decd4[0x0]:_0xdc698d=_0xd6fec1['msg'][_0x384a26(0xbe)][_0x384a26(0x98)]||![];if(!_0xdc698d)return _0x466557('*No\x20user\x20found\x20in\x20this\x20context*\x20❌');const _0x3662b0=await getGroupAdmins(_0x599854);if(!_0x3662b0[_0x384a26(0x8c)](_0xdc698d))return _0x466557(_0x384a26(0xc1));await _0x5cb2ac[_0x384a26(0xf7)](_0x5ea95a,[_0xdc698d],'demote');const _0xa8083={'text':_0x384a26(0x9c)},_0xddf4ca={'quoted':_0xd6fec1};await _0x5cb2ac['sendMessage'](_0x5ea95a,_0xa8083,_0xddf4ca);}catch(_0x396023){const _0xf9d988={'text':'❌','key':_0xd6fec1[_0x384a26(0x91)]},_0xe91dd3={'react':_0xf9d988};await _0x5cb2ac[_0x384a26(0x124)](_0x5ea95a,_0xe91dd3),console[_0x384a26(0xe3)](_0x396023),_0x466557(_0x384a26(0xbb)+_0x396023);}});const _0x53a4af={};_0x53a4af[_0x4d3ccf(0xb9)]=_0x4d3ccf(0x88),_0x53a4af['react']='🔊',_0x53a4af[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0x115)],_0x53a4af[_0x4d3ccf(0xcc)]=_0x4d3ccf(0x94),_0x53a4af[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x53a4af[_0x4d3ccf(0xe9)]='.tagall',_0x53a4af[_0x4d3ccf(0x90)]=__filename,cmd(_0x53a4af,async(_0x352390,_0x3fce2a,_0xbca72a,{from:_0x4421f9,l:_0x205fa8,quoted:_0x1d09d9,body:_0x28ad3e,isCmd:_0x4edc2b,command:_0x5d88cd,mentionByTag:_0x2665dd,args:_0x37c701,q:_0x1f6f50,isGroup:_0x4f9b8a,sender:_0x201947,senderNumber:_0x2adcae,botNumber2:_0xa27287,botNumber:_0x22b9dd,pushname:_0x9f491,isMe:_0x2cab2b,isOwner:_0x478a93,groupMetadata:_0x558b83,groupName:_0x1a5343,participants:_0x27c9ea,groupAdmins:_0x59d6dd,isBotAdmins:_0x3fea32,isCreator:_0x20c7c2,isDev:_0x4a87b6,isAdmins:_0x3c8da5,reply:_0x386db3})=>{const _0x291346=_0x4d3ccf;try{const _0x5aecd0=(await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json'))['replyMsg'];if(!_0x4f9b8a)return _0x386db3('*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group*');if(!_0x3c8da5&&!_0x478a93)return _0x386db3(_0x291346(0x9b));if(!_0x3fea32)return _0x386db3(_0x5aecd0['give_adm']);let _0x3996fe=_0x291346(0x93);for(let _0x2c76b4 of _0x27c9ea){_0x3996fe+=_0x291346(0x82)+_0x2c76b4['id'][_0x291346(0xeb)]('@')[0x0]+'\x0a';}const _0x3e2664={'quoted':_0x1d09d9};await _0x352390[_0x291346(0x124)](_0x4421f9,{'text':_0x3996fe,'mentions':_0x27c9ea['map'](_0x454a5b=>_0x454a5b['id'])},_0x3e2664);}catch(_0x148eaa){const _0x4349ae={'text':'❌','key':_0x3fce2a[_0x291346(0x91)]},_0x3b3cb0={'react':_0x4349ae};await _0x352390[_0x291346(0x124)](_0x4421f9,_0x3b3cb0),console[_0x291346(0xe3)](_0x148eaa),_0x386db3(_0x291346(0x7a)+_0x148eaa);}});const _0x3220aa={};_0x3220aa[_0x4d3ccf(0xb9)]='hidetag',_0x3220aa[_0x4d3ccf(0xde)]='🔊',_0x3220aa[_0x4d3ccf(0xd2)]=['tag',_0x4d3ccf(0xdb)],_0x3220aa[_0x4d3ccf(0xcc)]=_0x4d3ccf(0x8b),_0x3220aa[_0x4d3ccf(0x119)]='group',_0x3220aa[_0x4d3ccf(0xe9)]=_0x4d3ccf(0xd7),_0x3220aa['filename']=__filename,cmd(_0x3220aa,async(_0x30011d,_0x438a33,_0x315bfe,{from:_0x295cf1,l:_0x2b76d6,quoted:_0x3d1200,body:_0x30e2bf,isCmd:_0x246641,command:_0xd56a0e,mentionByTag:_0x447f7b,args:_0x4f3507,q:_0x592fee,isGroup:_0x5a4210,sender:_0x453b22,senderNumber:_0x57a738,botNumber2:_0xd62184,botNumber:_0x125f57,pushname:_0x4e30a4,isMe:_0x25589e,isOwner:_0x1b6d25,groupMetadata:_0x424ae6,groupName:_0x1bc21c,participants:_0x4b733e,groupAdmins:_0x451ede,isBotAdmins:_0x39055f,isCreator:_0x4ec532,isDev:_0x31d72d,isAdmins:_0x1a8779,reply:_0x283b31})=>{const _0x10dd8a=_0x4d3ccf;try{if(!_0x5a4210)return _0x283b31(_0x10dd8a(0xbc));if(!_0x1a8779&&!_0x1b6d25)return _0x283b31(_0x10dd8a(0x9b));if(!_0x39055f)return _0x283b31(_0x10dd8a(0xb6));if(!_0x592fee)return _0x283b31(_0x10dd8a(0x85));let _0x1930df=''+_0x592fee;const _0x563643={'quoted':_0x438a33};await _0x30011d[_0x10dd8a(0x124)](_0x295cf1,{'text':_0x1930df,'mentions':_0x4b733e['map'](_0x4b12a5=>_0x4b12a5['id'])},_0x563643);}catch(_0x229cd7){const _0x33598d={'text':'❌','key':_0x438a33['key']},_0x161da0={'react':_0x33598d};await _0x30011d[_0x10dd8a(0x124)](_0x295cf1,_0x161da0),console[_0x10dd8a(0xe3)](_0x229cd7),_0x283b31(_0x10dd8a(0x7a)+_0x229cd7);}});const _0x446ca7={};_0x446ca7[_0x4d3ccf(0xb9)]=_0x4d3ccf(0x107),_0x446ca7[_0x4d3ccf(0xde)]='🔊',_0x446ca7[_0x4d3ccf(0xd2)]=[_0x4d3ccf(0x111),_0x4d3ccf(0x118)],_0x446ca7[_0x4d3ccf(0xcc)]='To\x20Tag\x20all\x20Members\x20for\x20Message',_0x446ca7['category']=_0x4d3ccf(0xf2),_0x446ca7[_0x4d3ccf(0xe9)]=_0x4d3ccf(0xd7),_0x446ca7[_0x4d3ccf(0x90)]=__filename,cmd(_0x446ca7,async(_0x51962d,_0x526eb8,_0x584dfc,{from:_0x134646,l:_0x14a479,quoted:_0x197d18,body:_0x5da6d7,isCmd:_0x2df30a,command:_0x4fc649,mentionByTag:_0x52b7a9,args:_0x1d43ee,q:_0x2f1d2d,isGroup:_0x3cbe38,sender:_0x5d349a,senderNumber:_0x53ae7d,botNumber2:_0x5089c4,botNumber:_0x228f57,pushname:_0x538af1,isMe:_0x16e665,isOwner:_0xfd2e95,groupMetadata:_0x14a723,groupName:_0x5b5e3e,participants:_0x5d1cb9,groupAdmins:_0x9c126d,isBotAdmins:_0x1c0c23,isCreator:_0x194af1,isDev:_0x48e86f,isAdmins:_0x5c45a0,reply:_0x4877b7})=>{const _0x478cab=_0x4d3ccf;try{if(!_0x584dfc['quoted'])return _0x4877b7(_0x478cab(0x79));if(!_0x2f1d2d)return _0x4877b7('*Please\x20add\x20a\x20Group\x20Jid*\x20ℹ️');let _0x58f066=''+_0x584dfc[_0x478cab(0xa3)]['msg'];const _0x4c5ba7={'quoted':_0x526eb8};_0x51962d['sendMessage'](_0x2f1d2d,{'text':_0x58f066,'mentions':_0x5d1cb9[_0x478cab(0xab)](_0x5ee0a8=>_0x5ee0a8['id'])},_0x4c5ba7);}catch(_0x1a3100){const _0x2015d0={'text':'❌','key':_0x526eb8[_0x478cab(0x91)]},_0x46fa69={'react':_0x2015d0};await _0x51962d[_0x478cab(0x124)](_0x134646,_0x46fa69),console[_0x478cab(0xe3)](_0x1a3100),_0x4877b7(_0x478cab(0x122)+_0x1a3100);}});const _0x4c04aa={};_0x4c04aa[_0x4d3ccf(0xb9)]='ginfo',_0x4c04aa[_0x4d3ccf(0xde)]='🥏',_0x4c04aa['alias']=[_0x4d3ccf(0xf5)],_0x4c04aa[_0x4d3ccf(0xcc)]=_0x4d3ccf(0xfb),_0x4c04aa[_0x4d3ccf(0x119)]=_0x4d3ccf(0xf2),_0x4c04aa['use']=_0x4d3ccf(0x12e),_0x4c04aa[_0x4d3ccf(0x90)]=__filename,cmd(_0x4c04aa,async(_0x3dc373,_0x4776a2,_0x34bf77,{from:_0x69343,l:_0x1ee805,quoted:_0x395ab9,body:_0x13546d,isCmd:_0x2906c6,command:_0x14e8d9,args:_0x14555b,q:_0x4904c4,isGroup:_0x42f395,sender:_0x28e60c,senderNumber:_0x1943fc,botNumber2:_0x21055f,botNumber:_0x276aeb,pushname:_0x2ce166,isMe:_0x31e2bf,isOwner:_0x23548f,groupMetadata:_0x50bca0,groupName:_0x3e5405,participants:_0x3daa4e,groupAdmins:_0x5d92cf,isBotAdmins:_0x296d60,isCreator:_0xaba267,isDev:_0x5d919c,isAdmins:_0x44924b,reply:_0x274c81})=>{const _0x332c51=_0x4d3ccf;try{const _0x102642=(await fetchJson(_0x332c51(0x121)))[_0x332c51(0x117)];if(!_0x42f395)return _0x274c81(_0x102642[_0x332c51(0x12b)]);if(!_0x44924b&&!_0x23548f)return _0x274c81(_0x102642[_0x332c51(0xc2)]);if(!_0x296d60)return _0x274c81(_0x102642[_0x332c51(0x114)]);const _0x572d12=await _0x3dc373['groupMetadata'](_0x69343);let _0x41d269=await _0x3dc373[_0x332c51(0xc0)](_0x69343,'image');const _0x2b49dc='\x0a*'+_0x572d12['subject']+'*\x0a\x0a🐉\x20*Group\x20Jid*\x20-\x20'+_0x572d12['id']+'\x0a\x0a📬\x20*Participant\x20Count*\x20-\x20'+_0x572d12[_0x332c51(0xf6)]+_0x332c51(0xe0)+_0x572d12[_0x332c51(0x95)]+_0x332c51(0x104)+(_0x572d12['desc']||_0x332c51(0x84))+'\x0a\x0a',_0x166f57={'url':_0x41d269},_0x47fe00={'quoted':_0x4776a2};await _0x3dc373['sendMessage'](_0x69343,{'image':_0x166f57,'caption':_0x2b49dc+config[_0x332c51(0x11d)]},_0x47fe00);}catch(_0x24d8d6){const _0x43fad1={'text':'❌','key':_0x4776a2['key']},_0x59209e={'react':_0x43fad1};await _0x3dc373[_0x332c51(0x124)](_0x69343,_0x59209e),console[_0x332c51(0xe3)](_0x24d8d6),_0x274c81(_0x332c51(0x7a)+_0x24d8d6);}});