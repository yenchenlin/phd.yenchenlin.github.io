(function(g){var window=this;var Eua=function(a,b){var c=[];g.Nf(b,function(a){var b;try{b=g.gj.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.p(b)?g.fj(b)&&c.push(a):c.push(a)},a);
return c},Fua=function(a,b){var c=Eua(a,b);
(0,g.G)(c,function(a){g.gj.prototype.remove.call(this,a)},a)},Gua=function(a){return a.H?a.F+((0,g.F)()-a.A)/1E3:a.F},Hua=function(){var a=g.hj;
Fua(a,a.g.Hd(!0))},v9=function(a){g.Iw.call(this,"ScreenServiceProxy");
this.Sc=a;this.o=[];this.o.push(this.Sc.$_s("screenChange",(0,g.z)(this.rO,this)));this.o.push(this.Sc.$_s("onlineScreenChange",(0,g.z)(this.PK,this)))},w9=function(a){g.Ew("cloudview",a)},Iua=function(a){w9("setApiReady_ "+a);
g.oa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},x9=function(){return g.u("yt.mdx.remote.cloudview.instance_")},Jua=function(a){g.Li[a]&&(a=g.Li[a],(0,g.G)(a,function(a){g.Ji[a]&&delete g.Ji[a]}),a.length=0)},y9=function(){return g.u("yt.mdx.remote.connection_")},z9=function(a){g.oa("yt.mdx.remote.connectData_",a,void 0)},Kua=function(a){g.oa("yt.mdx.remote.currentScreenId_",a,void 0)},A9=function(){return g.u("yt.mdx.remote.currentScreenId_")},C9=function(){if(!B9){var a=g.u("yt.mdx.remote.screenService_");
B9=a?new v9(a):null}return B9},D9=function(a){g.oa("yt.mdx.remote.cloudview.initializing_",a,void 0)},E9=function(){return!!g.u("yt.mdx.remote.cloudview.apiReady_")},F9=function(a){w9("setCastInstalled_ "+a);
g.jj("yt-remote-cast-installed",a)},G9=function(a){g.Ew("cloudview",a)},Lua=function(a,b){x9().init(a,b)},H9=function(){return!!g.kj("yt-remote-cast-installed")},Mua=function(){w9("dispose");
var a=x9();a&&a.dispose();g.oa("yt.mdx.remote.cloudview.instance_",null,void 0);Iua(!1);g.Ni(I9);I9.length=0},Nua=function(){var a=window.document.createElement("a");
g.Ae(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ta(a)},Oua=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},Pua=function(a){var b=g.Hi();
if(b)if(b.clear(a),a)Jua(a);else for(var c in g.Li)Jua(c)},J9=function(){return g.u("yt.mdx.remote.channelParams_")||{}},L9=function(a){var b=y9();
z9(null);a||Kua("");g.oa("yt.mdx.remote.connection_",a,void 0);K9&&((0,g.G)(K9,function(b){b(a)}),K9.length=0);
b&&!a?g.Qi("yt-remote-connection-change",!1):!b&&a&&g.Qi("yt-remote-connection-change",!0)},Qua=function(){return g.u("yt.mdx.remote.connectData_")},M9=function(){var a=A9();
if(!a)return null;var b=C9().Nd();return g.mi(b,a)},Rua=function(a,b){F9(!0);
D9(!1);Lua(a,function(a){a?(Iua(!0),g.Pi("yt-remote-cast2-api-ready")):(G9("Failed to initialize cast API."),F9(!1),g.lj("yt-remote-cast-available"),g.lj("yt-remote-cast-receiver"),Mua());b(a)})},Sua=function(){return H9()?x9()?x9().getCastSession():(G9("getCastSelector: Cast is not initialized."),null):(G9("getCastSelector: Cast API is not installed!"),null)},Tua=function(){if(g.xoa){var a=2,b=g.tw(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.yw("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.vw,c)}},Uua=function(){var a=Nua(),b=window.document.getElementById(a),c=b&&g.hh(b,"loaded");
c||b&&!c||(b=Oua(a,function(){g.hh(b,"loaded")||(g.ih(b,"loaded","true"),g.Pi(a),g.ti(g.za(Pua,a),0))}))},Vua=function(a){return(0,g.Q)(a,function(a){return{key:a.id,
name:a.name}})},O9=function(a,b){A9();
M9()&&M9();Kua(a.id);var c=new g.Uy(N9,a,J9());c.connect(b,Qua());c.subscribe("beforeDisconnect",function(a){g.Qi("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){y9()&&(y9(),L9(null))});
L9(c)},P9=function(){var a=g.oj();
if(!a)return null;var b=C9().Nd();return g.mi(b,a)},Q9=function(a){g.Ew("remote",a)},R9=function(){var a=y9();
return!!a&&3!=a.getProxyState()},S9=function(){E9()?x9().stopSession():G9("stopSession called before API ready.");
var a=y9();a&&(a.disconnect(1),L9(null))},Wua=function(){var a;
a=C9().Sc.$_gos();var b=M9();b&&y9()&&(g.li(a,b)||a.push(b));return Vua(a)},U9=function(a,b){g.cl.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.Jy;this.A=this.o=null;this.H=(0,g.z)(this.aJ,this);this.F=(0,g.z)(this.Xj,this);this.G=(0,g.z)(this.$I,this);this.J=(0,g.z)(this.nJ,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.bs,this),Xua(this))):c=3;0!=c&&(b?this.bs(c):g.ti((0,g.z)(function(){this.bs(c)},this),0));
var d=Sua();d&&T9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},V9=function(a){return new g.Oy(a.B.getPlayerContextData())},Yua=function(a,b,c,d,e){var f=V9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.Sy(f,b,d);g.p(c)&&(g.Qy(f,c),l.currentTime=c);g.p(k)&&(l.listId=k);W9(a,"setPlaylist",l);e||X9(a,f)},Xua=function(a){(0,g.G)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.za(this.hL,a),this))},a)},Zua=function(a){(0,g.G)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},Y9=function(a,b){50>a.C.Bc()&&g.Ly(a.C,b)},Z9=function(a,b,c){var d=V9(a);
g.Qy(d,c);-1E3!=d.g&&(d.g=b);X9(a,d)},W9=function(a,b,c){a.B.sendMessage(b,c)},X9=function(a,b){Zua(a);
a.B.setPlayerContextData(g.Ty(b));Xua(a)},T9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Xj(null));
a.A=b;a.A&&($9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Xj(a.A.media[0]))},$ua=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=V9(a);b.contentId!=d.videoId&&$9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.Qy(d,a.o.getEstimatedTime());X9(a,d)}else $9("No cast media video. Ignoring state update.")},$9=function(a){g.Ew("CP",a)},a$=function(a,b,c){return(0,g.z)(function(a){this.Xb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Xb("Retrying "+b+" using MDx browser channel."),W9(this,b,c))},a)},ava=function(a){var b=!1;
x9()||(a=new g.ix(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.jj("yt-remote-cast-available",a);g.Qi("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){w9("onReceiverSelected: "+a.friendlyName);
g.jj("yt-remote-cast-receiver",a);g.Qi("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){w9("onReceiverResumed: "+a.friendlyName);
g.jj("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){w9("onSessionChange: "+g.ii(a));
a||g.lj("yt-remote-cast-receiver");g.Qi("yt-remote-cast2-session-change",a)}),g.oa("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
w9("cloudview.createSingleton_: "+b);return b},bva=function(){var a=0<=g.ic.search(/\ (CrMo|Chrome|CriOS)\//);
return g.Bi||a},b$=function(a,b){E9()?x9().setConnectedScreenStatus(a,b):G9("setConnectedScreenStatus called before ready.")},cva=function(){w9("clearCurrentReceiver");
g.lj("yt-remote-cast-receiver")},dva=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Tua();a({command:"cast.sender.init"});return}}if(window.chrome)if(Tua(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.qw();55<=b?a="55":50<=b&&(a="50");g.yw("//www.gstatic.com/eureka/clank"+a+g.ww,g.vw)}else g.zw(0);else g.vw()},eva=function(a){a?(g.jj("yt-remote-session-app",a.app),g.jj("yt-remote-session-name",a.name)):(g.lj("yt-remote-session-app"),g.lj("yt-remote-session-name"));
g.oa("yt.mdx.remote.channelParams_",a,void 0)},fva=function(){var a=J9();
if(g.Vb(a)){var a=g.nj(),b=g.kj("yt-remote-session-name")||"",c=g.kj("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.oa("yt.mdx.remote.channelParams_",a,void 0)}},gva=function(){var a=P9();
a?(Q9("Resume connection to: "+g.ii(a)),O9(a,0)):(g.xj(),cva(),Q9("Skipping connecting because no session screen found."))},hva=function(a){Q9("remote.onCastSessionChange_: "+g.ii(a));
if(a){var b=M9();b&&b.id==a.id?b$(b.id,"YouTube TV"):(b&&S9(),O9(a,1))}else y9()&&S9()},iva=function(){var a=Wua(),b=M9();
b||(b=P9());return g.ab(a,function(a){return b&&g.fi(b,a.key)?!0:!1})},jva=function(){var a=g.kj("yt-remote-cast-receiver");
return a?a.friendlyName:null},kva=function(a,b,c,d){bva()?ava(b)&&(D9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Rua(a,c):(window.__onGCastApiAvailable=function(b,d){b?Rua(a,c):(G9("Failed to load cast API: "+d),F9(!1),D9(!1),g.lj("yt-remote-cast-available"),g.lj("yt-remote-cast-receiver"),Mua(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Uua():dva())):w9("Cannot initialize because not running Chrome")},
lva=function(a){this.port=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Zf(a)||"";b&&(this.port=":"+b);this.A=g.Yf(a)||"";a=g.ic;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Sa(a,"10.0")&&(this.o=!1))},c$=function(a,b,c){g.I.call(this);
this.H=a;this.Z=b;b.addEventListener("onVolumeChange",this.Pm,this);b.addEventListener("onCaptionsTrackListChanged",this.Ox,this);b.addEventListener("captionschanged",this.Cx,this);b.addEventListener("captionssettingschanged",this.ur,this);b.addEventListener("videoplayerreset",this.$j,this);b.addEventListener("mdxautoplaycancel",this.bu,this);this.C=!1;this.g=c;c.isDisposed();c.subscribe("proxyStateChange",this.ay,this);c.subscribe("remotePlayerChange",this.Zj,this);c.subscribe("remoteQueueChange",
this.$j,this);c.subscribe("autoplayUpNext",this.Ax,this);c.subscribe("previousNextChange",this.Yx,this);c.subscribe("nowAutoplaying",this.Rx,this);c.subscribe("autoplayDismissed",this.zx,this);this.suggestion=null;this.D=new g.Ol(64);this.o=new g.Od(this.vz,500,this);g.J(this,this.o);this.A=new g.Od(this.wz,1E3,this);g.J(this,this.A);this.B={};this.G=new g.Od(this.Kz,1E3,this);g.J(this,this.G);this.F=new g.kw(this.nQ,1E3,this);g.J(this,this.F);this.J=g.x;this.ur();this.$j();this.Zj()},d$=function(a,
b){var c=a.H,d=a.Z.getVideoData().lengthSeconds;
c.H=b||0;c.g.V("progresssync",b,d)},mva=function(a){d$(a,0);
a.o.stop();e$(a,new g.Ol(64))},h$=function(a,b){if(f$(a)&&!a.C){var c=null;
b&&(c={style:a.Z.Ck()},g.bc(c,b));a.g.mz(g$(a),c);a.B=V9(a.g).o}},i$=function(a,b){var c=a.Z.Se();
c?Yua(a.g,g$(a),b,c.Ld(),c.listId.toString()):Yua(a.g,g$(a),b);e$(a,new g.Ol(1))},nva=function(a,b){if(b){var c=a.Z.Uc("captions","tracklist",{qw:1});
c&&c.length?(a.Z.ue("captions","track",b),a.C=!1):(a.Z.yk("captions"),a.C=!0)}else a.Z.ue("captions","track",{})},f$=function(a){return V9(a.g).videoId==g$(a)},g$=function(a){return a.Z.getVideoData().videoId},e$=function(a,b){a.A.stop();
var c=a.D;if(b.o!=c.o||b.g!=c.g){var d=g.S(b,2);if(d!=g.S(a.D,2)){var e=a.Z;(e=g.pm(e.app,e.playerType||1))&&g.$U(e,d)}a.D=b;ova(a.H,c,b)}},j$=function(){var a=iva();
!a&&H9()&&jva()&&(a={key:"cast-selector-receiver",name:jva()});return a},pva=function(){var a=Wua();
H9()&&g.kj("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},qva=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.hj&&Hua();g.qj();N9||(N9=new lva,g.zj()&&(N9.g="/api/loungedev"));K9||(K9=g.u("yt.mdx.remote.deferredProxies_")||[],g.oa("yt.mdx.remote.deferredProxies_",K9,void 0));fva();var c=C9();if(!c){var d=new g.Vw(N9);g.oa("yt.mdx.remote.screenService_",d,void 0);c=C9();kva(a,d,function(a){a?A9()&&b$(A9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.Qi("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.u("yt.mdx.remote.initialized_")&&
(g.oa("yt.mdx.remote.initialized_",!0,void 0),Q9("Initializing: "+g.xf(b)),k$.push(g.Mi("yt-remote-cast2-availability-change",function(){g.Qi("yt-remote-receiver-availability-change")})),k$.push(g.Mi("yt-remote-cast2-receiver-selected",function(){z9(null);
g.Qi("yt-remote-auto-connect","cast-selector-receiver")})),k$.push(g.Mi("yt-remote-cast2-receiver-resumed",function(){g.Qi("yt-remote-receiver-resumed","cast-selector-receiver")})),k$.push(g.Mi("yt-remote-cast2-session-change",hva)),k$.push(g.Mi("yt-remote-connection-change",function(a){a?b$(A9(),"YouTube TV"):P9()||(b$(null,null),cva())})),a=J9(),b.isAuto&&(a.id+="#dial"),g.Fh("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,Q9(" -- with channel params: "+g.xf(a)),
eva(a),c.start(),A9()||gva())},l$=function(){H9()?x9()?E9()?(w9("Requesting cast selector."),x9().requestSession()):(w9("Wait for cast API to be ready to request the session."),I9.push(g.Mi("yt-remote-cast2-api-ready",l$))):G9("requestCastSelector: Cast is not initialized."):G9("requestCastSelector: Cast API is not installed!")},m$=function(a){g.qu.call(this,a);
this.A={key:g.ki(),name:g.P("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.Ol(64);this.H=0},ova=function(a,b,c){a.F=c;
a.g.V("presentingplayerstatechange",new g.ez(c,b))},n$=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)S9();
else{a.B=b;var c;c=a.g.getPlaylistId();var d=a.g.getVideoData().videoId;if(c||d){var e,f=a.g.Se();if(f){e=[];for(var k=0;k<f.getLength();k++)e[k]=f.Vb(k).videoId}else e=[a.g.getVideoData().videoId];c={videoIds:e,listId:c,videoId:d,index:Math.max(a.g.jA(),0),currentTime:a.g.getCurrentTime()}}else c=null;Q9("Connecting to: "+g.xf(b));"cast-selector-receiver"==b.key?(z9(c||null),c=c||null,E9()?x9().setLaunchParams(c):G9("setLaunchParams called before ready.")):!c&&R9()&&A9()==b.key?g.Qi("yt-remote-connection-change",
!0):(S9(),z9(c||null),c=C9().Nd(),(c=g.mi(c,b.key))&&O9(c,1))}};
g.A(v9,g.Iw);g.h=v9.prototype;g.h.Nd=function(a){return this.Sc.$_gs(a)};
g.h.contains=function(a){return!!this.Sc.$_c(a)};
g.h.get=function(a){return this.Sc.$_g(a)};
g.h.start=function(){this.Sc.$_st()};
g.h.Kn=function(a,b,c){this.Sc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Sc.$_r(a,b,c)};
g.h.zn=function(a,b,c,d){this.Sc.$_un(a,b,c,d)};
g.h.R=function(){for(var a=0,b=this.o.length;a<b;++a)this.Sc.$_ubk(this.o[a]);this.o.length=0;this.Sc=null;v9.N.R.call(this)};
g.h.rO=function(){this.V("screenChange")};
g.h.PK=function(){this.V("onlineScreenChange")};
var B9=null,I9=[],K9=null,N9=null;g.A(U9,g.cl);g.h=U9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.x,a$(this,"play")):W9(this,"play"),Z9(this,1,g.Ry(V9(this))),this.V("remotePlayerChange")):Y9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.x,a$(this,"pause")):W9(this,"pause"),Z9(this,2,g.Ry(V9(this))),this.V("remotePlayerChange")):Y9(this,this.pause)};
g.h.Zz=function(a){if(1==this.g){if(this.o){var b=V9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.qb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.x,a$(this,"seekTo",{newTime:a}))}else W9(this,"seekTo",{newTime:a});Z9(this,3,a);this.V("remotePlayerChange")}else Y9(this,g.za(this.Zz,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.x,a$(this,"stopVideo")):W9(this,"stopVideo");var a=V9(this);a.index=-1;a.videoId="";g.Py(a);X9(this,a);this.V("remotePlayerChange")}else Y9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=V9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){$9("set receiver volume: "+d)},this),(0,g.z)(function(){this.Xb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){$9("set receiver muted: "+b)},this),(0,g.z)(function(){this.Xb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);W9(this,"setVolume",e)}c.muted=b;c.volume=a;X9(this,c)}else Y9(this,g.za(this.setVolume,a,b))};
g.h.mz=function(a,b){if(1==this.g){var c=V9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.xf(b.style),g.bc(d,c.o));W9(this,"setSubtitlesTrack",d);X9(this,c)}else Y9(this,g.za(this.mz,a,b))};
g.h.$r=function(a,b){if(1==this.g){W9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Jc.id});var c=V9(this);c.audioTrackId=b.Jc.id;X9(this,c)}else Y9(this,g.za(this.$r,a,b))};
g.h.Yz=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.Sy(c,a,b);X9(this,c)}W9(this,"previous")}else Y9(this,g.za(this.Yz,a,b))};
g.h.Xz=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.Sy(c,a,b);X9(this,c)}W9(this,"next")}else Y9(this,g.za(this.Xz,a,b))};
g.h.Lu=function(){1==this.g?W9(this,"dismissAutoplay"):Y9(this,this.Lu)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.V("proxyStateChange",a,this.g)}U9.N.dispose.call(this)};
g.h.R=function(){Zua(this);this.B=null;this.C.clear();T9(this,null);U9.N.R.call(this)};
g.h.bs=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.My(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.hL=function(a,b){this.V(a,b)};
g.h.aJ=function(a){if(!a)this.Xj(null),T9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=V9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)$9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X9(this,b)}};
g.h.Xj=function(a){$9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),$ua(this),this.V("remotePlayerChange")};
g.h.$I=function(a){a?($ua(this),this.V("remotePlayerChange")):this.Xj(null)};
g.h.nJ=function(){var a=Sua();a&&T9(this,a)};
g.h.Xb=function(a){g.Ew("CP",a)};
var k$=[];g.h=lva.prototype;g.h.rh=function(a,b,c){var d=this.g;if(g.p(c)?c:this.o)d="https://"+this.A+this.port+this.g;return g.gg(d+a,b||{})};
g.h.Zr=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Jb:g.za(this.mO,c,!0),onError:g.za(this.lO,d),cd:g.za(this.nO,d)};b&&(c.Ob=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ui(a,c)};
g.h.mO=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.lO=function(a,b){a(Error("Request error: "+b.status))};
g.h.nO=function(a){a(Error("request timed out"))};
g.A(c$,g.I);g.h=c$.prototype;
g.h.R=function(){c$.N.R.call(this);this.o.stop();this.A.stop();this.J();this.Z.removeEventListener("onVolumeChange",this.Pm,this);this.Z.removeEventListener("onCaptionsTrackListChanged",this.Ox,this);this.Z.removeEventListener("captionschanged",this.Cx,this);this.Z.removeEventListener("videoplayerreset",this.$j,this);this.Z.removeEventListener("captionssettingschanged",this.ur,this);this.Z.removeEventListener("mdxautoplaycancel",this.bu,this);this.g.unsubscribe("proxyStateChange",this.ay,this);this.g.unsubscribe("remotePlayerChange",
this.Zj,this);this.g.unsubscribe("remoteQueueChange",this.$j,this);this.g.unsubscribe("autoplayUpNext",this.Ax,this);this.g.unsubscribe("previousNextChange",this.Yx,this);this.g.unsubscribe("nowAutoplaying",this.Rx,this);this.g.unsubscribe("autoplayDismissed",this.zx,this);this.g=this.H=null};
g.h.QA=function(a,b){2==this.g.g||(f$(this)?this.GF.apply(this,arguments):this.CF.apply(this,arguments))};
g.h.Cx=function(a){this.QA("control_subtitles_set_track",g.Vb(a)?null:a)};
g.h.ur=function(){var a=this.Z.Uc("captions","track");g.Vb(a)||h$(this,a)};
g.h.CF=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":i$(this,this.Z.getCurrentTime());break;case "control_seek":i$(this,c[0]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.$r(g$(this),c)}};
g.h.GF=function(a,b){if(1081!=V9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":V9(this.g).qb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.F.li(c[0],c[1]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.$r(g$(this),c)}}};
g.h.Pm=function(a){if(f$(this)){this.g.unsubscribe("remotePlayerChange",this.Zj,this);var b=Math.round(a.volume);a=!!a.muted;var c=V9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.G.start();this.g.subscribe("remotePlayerChange",this.Zj,this)}};
g.h.Ox=function(){g.Vb(this.B)||nva(this,this.B);this.C=!1};
g.h.ay=function(a,b){this.A.stop();2==b&&this.wz()};
g.h.Zj=function(){if(f$(this)){this.o.stop();var a=V9(this.g);switch(a.g){case 1081:e$(this,new g.Ol(8));break;case 1:this.vz();e$(this,new g.Ol(8));break;case 1083:case 3:e$(this,new g.Ol(9));break;case 0:e$(this,new g.Ol(2));this.F.stop();d$(this,this.Z.getVideoData().lengthSeconds);break;case 1082:e$(this,new g.Ol(4));break;case 2:e$(this,new g.Ol(4));d$(this,g.Ry(a));break;case -1:e$(this,new g.Ol(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.P("YTP_MDX_PLAYER_ERROR")},e$(this,
new g.Ol(128,a))}var a=V9(this.g).o,b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.B=a,nva(this,a));a=V9(this.g);-1==a.volume||Math.round(this.Z.getVolume())==a.volume&&this.Z.Vd()==a.muted||this.G.isActive()||this.Kz()}else mva(this)};
g.h.Yx=function(){this.Z.V("mdxpreviousnextchange")};
g.h.$j=function(){f$(this)||mva(this)};
g.h.bu=function(){this.g.Lu()};
g.h.Ax=function(a){a&&(a=g.Ui("/watch_queue_ajax",{method:"GET",Fc:{action_get_watch_queue_item:1,video_id:a},Jb:(0,g.z)(this.fM,this)}))&&(this.J=(0,g.z)(a.abort,a))};
g.h.fM=function(a,b){var c=new g.et({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.Z.V("mdxautoplayupnext",c)};
g.h.Rx=function(a){(0,window.isNaN)(a)||this.Z.V("mdxnowautoplaying",a)};
g.h.zx=function(){this.Z.V("mdxautoplaycanceled")};
g.h.nQ=function(a,b){-1==V9(this.g).g?i$(this,a):b&&this.g.Zz(a)};
g.h.Kz=function(){if(f$(this)){var a=V9(this.g);this.Z.removeEventListener("onVolumeChange",this.Pm,this);a.muted?this.Z.mute():this.Z.gg();this.Z.setVolume(a.volume);this.Z.addEventListener("onVolumeChange",this.Pm,this)}};
g.h.vz=function(){this.o.stop();if(!this.g.isDisposed()){var a=V9(this.g);a.qb()&&e$(this,new g.Ol(8));d$(this,g.Ry(a));this.o.start()}};
g.h.wz=function(){this.A.stop();this.o.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.A.start()};
g.A(m$,g.qu);g.h=m$.prototype;g.h.create=function(){qva("embedded"==g.U(this.g).g);this.D.push(g.Mi("yt-remote-before-disconnect",this.XI,this));this.D.push(g.Mi("yt-remote-connection-change",this.qL,this));this.D.push(g.Mi("yt-remote-receiver-availability-change",this.Zx,this));this.D.push(g.Mi("yt-remote-auto-connect",this.oL,this));this.D.push(g.Mi("yt-remote-receiver-resumed",this.nL,this));this.Zx()};
g.h.load=function(){this.g.To();m$.N.load.call(this);this.C=new c$(this,this.g,this.o);var a;a=(a=Qua())?a.currentTime:0;var b=R9()?new U9(y9(),void 0):null;0==a&&b&&(a=g.Ry(V9(b)));0!=a&&(this.H=a||0,this.g.V("progresssync",a,void 0));ova(this,this.F,this.F);g.D2(this.g.app,6)};
g.h.unload=function(){this.g.V("mdxautoplaycanceled");this.B=this.A;g.Hb(this.C,this.o);this.o=this.C=null;m$.N.unload.call(this);g.D2(this.g.app,5)};
g.h.R=function(){g.Ni(this.D);m$.N.R.call(this)};
g.h.Gk=function(a,b){this.loaded&&this.C.QA.apply(this.C,arguments)};
g.h.hF=function(){return this.loaded?this.C.suggestion:null};
g.h.nf=function(){return this.o?V9(this.o).nf:!1};
g.h.hasNext=function(){return this.o?V9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.TP=function(){var a=V9(this.o),b=this.g.getVideoData(),c=this.g.zh(),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration(),k;k=a.H?a.B+((0,g.F)()-a.A)/1E3:a.B;var l=1>=Gua(a)-this.getCurrentTime(),m=a.J,n=Gua(a),a=0<a.C?a.C+((0,g.F)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.UP=function(){this.o&&this.o.Xz()};
g.h.VP=function(){this.o&&this.o.Yz()};
g.h.XI=function(a){1==a&&(this.J=this.o?V9(this.o):null)};
g.h.qL=function(){var a=R9()?new U9(y9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Gb(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.getVideoData().videoId&&this.g.Oc(g.Ry(a)));this.g.V("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.Zx=function(){this.G=[this.A].concat(pva());var a=j$()||this.A;n$(this,a);this.g.wa("onMdxReceiversChange")};
g.h.oL=function(){var a=j$();n$(this,a)};
g.h.nL=function(){this.B=j$()};
g.h.SP=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?l$():n$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&l$(),!0):!1}};
g.h.WP=function(){W9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.oe=function(){return!1};
window._exportCheck==g.Ca&&g.oa("ytmod.player.remote",m$,void 0);})(_yt_player);
