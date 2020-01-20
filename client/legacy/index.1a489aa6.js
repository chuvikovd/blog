import{a as e,b as a,c as r,d as s,i,s as t,e as o,S as n,f as u,t as l,o as c,g as h,h as m,j as f,p as $,k as d,l as p,m as g,n as v,I as b,q as y,r as w,Q as x}from"./index.8756bbba.js";import{c as k,a as C,b as j}from"./_commonjsHelpers.ce42c2da.js";import{g as R}from"./utils.ba430a32.js";var z=k((function(e,a){!function(a,r){"function"==typeof C?e.exports=r():a.pluralize=r()}(j,(function(){var e=[],a=[],r={},s={},i={};function t(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,r){return a[r]||""}))}function u(e,a){return e.replace(a[0],(function(r,s){var i=n(a[1],arguments);return o(""===r?e[s-1]:r,i)}))}function l(e,a,s){if(!e.length||r.hasOwnProperty(e))return a;for(var i=s.length;i--;){var t=s[i];if(t[0].test(a))return u(a,t)}return a}function c(e,a,r){return function(s){var i=s.toLowerCase();return a.hasOwnProperty(i)?o(s,i):e.hasOwnProperty(i)?o(s,e[i]):l(i,s,r)}}function h(e,a,r,s){return function(s){var i=s.toLowerCase();return!!a.hasOwnProperty(i)||!e.hasOwnProperty(i)&&l(i,i,r)===i}}function m(e,a,r){return(r?a+" ":"")+(1===a?m.singular(e):m.plural(e))}return m.plural=c(i,s,e),m.isPlural=h(i,s,e),m.singular=c(s,i,a),m.isSingular=h(s,i,a),m.addPluralRule=function(a,r){e.push([t(a),r])},m.addSingularRule=function(e,r){a.push([t(e),r])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):r[e.toLowerCase()]=!0},m.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),i[e]=a,s[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return m.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return m.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return m.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m}))}));function q(e,a,r){var s=e.slice();return s[1]=a[r],s}function L(e){var a,r,s,i,t,o,n,y,w,x=e[1]+"",k=e[0][e[1]]+"",C=z("post",e[0][e[1]])+"";return{c:function(){a=u("a"),r=u("h2"),s=l(x),i=l(" - "),t=l(k),o=c(),n=l(C),y=c(),this.h()},l:function(e){a=h(e,"A",{rel:!0,href:!0});var u=m(a);r=h(u,"H2",{class:!0});var l=m(r);s=f(l,x),i=f(l," - "),t=f(l,k),o=$(l),n=f(l,C),l.forEach(d),y=$(u),u.forEach(d),this.h()},h:function(){p(r,"class","font-display text-2xl md:text-3xl font-bold hover:text-red\r\n        leading-tight mb-2"),p(a,"rel","prefetch"),p(a,"href",w="blog/categories/".concat(e[1]))},m:function(e,u){g(e,a,u),v(a,r),v(r,s),v(r,i),v(r,t),v(r,o),v(r,n),v(a,y)},p:function(e,r){1&r&&x!==(x=e[1]+"")&&b(s,x),1&r&&k!==(k=e[0][e[1]]+"")&&b(t,k),1&r&&C!==(C=z("post",e[0][e[1]])+"")&&b(n,C),1&r&&w!==(w="blog/categories/".concat(e[1]))&&p(a,"href",w)},d:function(e){e&&d(a)}}}function P(e){var a,r,s;document.title=a=R("Categories");for(var i=Object.keys(e[0]),t=[],o=0;o<i.length;o+=1)t[o]=L(q(e,i,o));return{c:function(){r=c(),s=u("div");for(var e=0;e<t.length;e+=1)t[e].c();this.h()},l:function(e){r=$(e),s=h(e,"DIV",{class:!0});for(var a=m(s),i=0;i<t.length;i+=1)t[i].l(a);a.forEach(d),this.h()},h:function(){p(s,"class","w-full mt-8 pb-8")},m:function(e,a){g(e,r,a),g(e,s,a);for(var i=0;i<t.length;i+=1)t[i].m(s,null)},p:function(e,r){var o=y(r,1)[0];if(0&o&&a!==(a=R("Categories"))&&(document.title=a),1&o){var n;for(i=Object.keys(e[0]),n=0;n<i.length;n+=1){var u=q(e,i,n);t[n]?t[n].p(u,o):(t[n]=L(u),t[n].c(),t[n].m(s,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=i.length}},i:w,o:w,d:function(e){e&&d(r),e&&d(s),x(t,e)}}}function E(e){e.params,e.query;return this.fetch("blog/categories.json").then((function(e){return e.json()})).then((function(e){return{categories:e}}))}function O(e,a,r){var s=a.categories;return e.$set=function(e){"categories"in e&&r(0,s=e.categories)},[s]}var U=function(u){function l(e){var n;return a(this,l),n=r(this,s(l).call(this)),i(o(n),e,O,P,t,{categories:0}),n}return e(l,n),l}();export default U;export{E as preload};
