(function(l,c){if(!c.__SV){var d,k,h,j;window.mixpanel=c;d=l.createElement("script");d.type="text/javascript";d.async=!0;d.src=("https:"===l.location.protocol?"https:":"http:")+"//cdn.mxpnl.com/libs/mixpanel-2.2.min.js";k=l.getElementsByTagName("script")[0];k.parentNode.insertBefore(d,k);c._i=[];c.init=function(b,i,m){function g(e,o){var f=o.split(".");2==f.length&&(e=e[f[0]],o=f[1]);e[o]=function(){e.push([o].concat(Array.prototype.slice.call(arguments,0)))}}var n=c;"undefined"!==typeof m?n=c[m]=[]:m="mixpanel";n.people=n.people||[];n.toString=function(e){var f="mixpanel";"mixpanel"!==m&&(f+="."+m);e||(f+=" (stub)");return f};n.people.toString=function(){return n.toString(1)+".people (stub)"};h="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");for(j=0;j<h.length;j++){g(n,h[j])}c._i.push([b,i,m])};c.__SV=1.2}})(document,window.mixpanel||[]);mixpanel.init("4877781eeaa0c5519d2dcce60053308e");function addMixpanelHelpers(){setTimeout(function(){if(window.mixpanel.__loaded){window.mixpanel.trackError=function(a){if(a){this.track("Error",a.message||a)}}}else{addMixpanelHelpers()}},1000)}addMixpanelHelpers();