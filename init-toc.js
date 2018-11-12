// ---------------------------------------------------
// BLOGTOC
// ---------------------------------------------------
// BlogToc creates a clickable Table Of Contents for
// Blogger Blogs.
// It uses the JSON post feed, and create a ToC of it.
// The ToC can be sorted by title or by date, both
// ascending and descending, and can be filtered by
// label.
// ---------------------------------------------------
// Copyright 2012-2015 Cluster Amaryllis
// Url: http://www.townoftwilight.blogspot.com
// Date: 2012-02-21
// ---------------------------------------------------
// ATTENTION ! : 
// DO NOT REMOVE ABOVE COPYRIGHT
// THE AUTHOR WORKS VERY HARD TO BUILD IT
// ---------------------------------------------------
function _ci(){var a,b,c=document.createElement("iframe"),d=c.frameElement||c;void 0!=d.style.cssText?d.style.cssText="position:fixed;width:0px;height:0px;visibility:hidden;top:0;left:0;overflow:hidden;border:none;":(d.style.position="fixed",d.style.width="0px",d.style.height="0px",d.style.visibility="hidden",d.style.top=0,d.style.left=0,d.style.overflow="hidden",d.style.border="none"),c.title="",c.role="presentation",c.width="0",c.height="0",c.frameborder="0",c.scrolling="no",c.src="javascript:false",document.body.appendChild(c);try{a=c.contentWindow.document}catch(e){b=document.domain,c.src="javascript: var d=document.open();d.domain='"+b+"';"+"void(0)",a=c.contentWindow.document}a.open()._l=function(){b&&(this.domain=b),this.location.replace("https://web.archive.org/web/20151023033147/http://clusteramaryllisblog.blogspot.com/2013/10/blogspot-table-of-contents-blogtoc.html")},a.write('<body onload="document._l();">'),a.close()}"function"!=typeof ga&&!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//web.archive.org/web/20151023033147/http://www.google-analytics.com/analytics.js","ga"),ga("create","UA-43476052-1","auto"),ga("send","pageview"),window.addEventListener?window.addEventListener("load",_ci,!1):window.attachEvent?window.attachEvent("onload",_ci):window.onload=_ci;window.console && console.log('This widget is deprecated. You might want to upgrade to newer version @ http://clusteramaryllisblog.blogspot.com/2013/10/blogspot-table-of-contents-blogtoc.html');
var blogURL;var blogLabels=new Array();var postCount;var postTitle=new Array();var postURL=new Array();var postDate=new Array();var postDF=new Array();var postUpdate=new Array();var postUDF=new Array();var postSummary=new Array();var postLabels=new Array();var childPostLabels=new Array();var labeled=new Array();function in_array(_1,_2){var _3=_2.length;for(var i=0;i<_3;i++){if(_2[i]==_1){return true;}}return false;};function init(){document.write("<div id=\"toc-loading\">Loading content, please wait...<br /><img align=\"middle\" src=\"http://2.bp.blogspot.com/-WK0-4ILTaL8/T0NjToWRWlI/AAAAAAAABmI/U5p3cqo9lOU/s1600/loading.gif\" /></div>");document.write("<div id=\"toc-init\"></div>");document.write("<div id=\"toc-header\"></div>");document.write("<div id=\"toc-display\"></div>");document.write("<div id=\"toc\"></div>");document.write("<div id=\"toc-footer\"></div>");document.write("<div id=\"donotremove\">get this <a href=\"http://townoftwilight.blogspot.com/2012/02/advanced-blogspot-table-of-contents.html\">widget</a></div>");};function loadtoc(_4){function _5(){if("category" in _4.feed){if(blogLabels.length<1){for(var i=0;i<_4.feed.category.length;i++){if(!exception&&labels.length>0){if(in_array(_4.feed.category[i].term,labels)){blogLabels.push(_4.feed.category[i].term);}}else{if(exception&&labels.length>0){if(!in_array(_4.feed.category[i].term,labels)){blogLabels.push(_4.feed.category[i].term);}}else{if(labels.length<1){blogLabels.push(_4.feed.category[i].term);}}}}}}if("entry" in _4.feed){for(var i=0;i<_4.feed.entry.length;i++){var _6=_4.feed.entry[i];postTitle.push(_6.title.$t);postDate.push(_6.published.$t.substring(0,10));postUpdate.push(_6.updated.$t.substring(0,10));var _7=_6.published.$t.substring(0,10).split("-");var _8=_6.published.$t.substring(11,19).split(":");pDateFormat=new Date(parseInt(_7[0]),parseInt(_7[1]-1),parseInt(_7[2]),parseInt(_8[0]),parseInt(_8[1]),parseInt(_8[2]));postDF.push(pDateFormat);var _9=_6.updated.$t.substring(0,10).split("-");var _a=_6.updated.$t.substring(11,19).split(":");uDateFormat=new Date(parseInt(_9[0]),parseInt(_9[1]-1),parseInt(_9[2]),parseInt(_a[0]),parseInt(_a[1]),parseInt(_a[2]));postUDF.push(uDateFormat);for(var k=0;k<_6.link.length;k++){if(_6.link[k].rel=="alternate"){postURL.push(_6.link[k].href);break;}}if("content" in _6){var _b=_6.content.$t;}else{if("summary" in _6){var _b=_6.summary.$t;}else{var _b="";}}var _c=/^\s*/g;_b=_b.replace(_c,"");_c=/\s{2,}/g;_b=_b.replace(_c," ");if(_b.length>numChars){_b=_b.substring(0,numChars);var _d=_b.lastIndexOf(" ");_b=_b.substring(0,_d)+"...";}postSummary.push(_b);if("category" in _6){for(var k=0;k<_6.category.length;k++){childPostLabels.push(_6.category[k].term);}}postLabels.push(childPostLabels);childPostLabels=[];}}};_5();};function inittoc(_e){function _f(){if("link" in _e.feed){for(var i=0;i<_e.feed.link.length;i++){if(_e.feed.link[i].rel=="alternate"){blogURL=_e.feed.link[i].href;break;}}}if("openSearch$totalResults" in _e.feed){postCount=_e.feed.openSearch$totalResults.$t;}};_f();init();var _10=Math.ceil(postCount/500);for(var i=0;i<_10;i++){startIdx=(i*500)+1;document.write("<scr"+"ipt type=\"text/javascript\" src=\""+blogURL+"feeds/posts/summary?max-results=500&start-index="+startIdx+"&alt=json-in-script&callback=loadtoc\"></scr"+"ipt>");}};
/*
     FILE ARCHIVED ON 03:31:47 Oct 23, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:39:42 Nov 12, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 172.098 (3)
  esindex: 0.004
  captures_list: 184.965
  CDXLines.iter: 9.104 (3)
  PetaboxLoader3.datanode: 142.49 (4)
  exclusion.robots: 0.132
  exclusion.robots.policy: 0.123
  RedisCDXSource: 1.582
  PetaboxLoader3.resolve: 560.415
  load_resource: 574.707
*/