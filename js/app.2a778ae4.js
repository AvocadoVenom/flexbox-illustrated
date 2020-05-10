(function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/flexbox-illustrated/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1372:function(e,t,n){"use strict";var r=n("f4a7"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"6e1c":function(e,t,n){},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"FlexDirectionValues",(function(){return a})),n.d(r,"FlexWrapValues",(function(){return o})),n.d(r,"JustifyContentValues",(function(){return i})),n.d(r,"AlignSelfValues",(function(){return l})),n.d(r,"AlignItemsValues",(function(){return s})),n.d(r,"AlignContentValues",(function(){return c}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,i,l,s,c,u=n("2b0e"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v(e._s(e.appName))]),n("div",{staticClass:"container"},[n("div",{staticClass:"playground"},[n("h3",[e._v("Playground")]),n("div",{staticClass:"playground-sandbox",style:e.actualProperties},e._l(e.maxBox,(function(t){return n("box",{key:t,style:Object.assign({},e.actualPropertiesChildren,{"flex-grow":e.flexGrow[t-1],"flex-shrink":e.flexShrink[t-1]}),attrs:{index:t}})})),1)]),n("div",{staticClass:"settings"},[n("h3",[e._v("Settings")]),n("div",{staticClass:"property-selectors"},[e._l(e.flexProperties,(function(t,r){return n("property-selector",{key:r,attrs:{property:t,value:t.appliedToChildren?e.actualPropertiesChildren[t.id]:e.actualProperties[t.id]},on:{change:e.onPropertyChanged}})})),n("div",{staticClass:"box-setup"},[n("button",{attrs:{type:"button"},on:{click:function(t){e.maxBox++}}},[e._v("Add Box")]),n("button",{attrs:{type:"button"},on:{click:function(t){1!==e.maxBox&&e.maxBox--}}},[e._v(" Remove Box ")])]),n("label",{attrs:{for:"Flex grow"}},[e._v(" Flex grow ")]),n("div",{staticClass:"flex-width-setup"},e._l(e.maxBox,(function(t){return n("select",{key:t,attrs:{name:"flex-grow-"+t,id:"flex-grow-"+t},on:{change:function(n){return e.updateFlexWidth(t,n.target.value,"grow")}}},[n("option",{key:0,attrs:{value:"0"}},[e._v("0")]),e._l(e.maxBox,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)})),0),n("label",{attrs:{for:"Flex shrink"}},[e._v(" Flex shrink ")]),n("div",{staticClass:"flex-width-setup"},e._l(e.maxBox,(function(t){return n("select",{key:t,attrs:{name:"flex-shrink-"+t,id:"flex-shrink-"+t},on:{change:function(n){return e.updateFlexWidth(t,n.target.value,"shrink")}}},[n("option",{key:0,attrs:{value:"0"}},[e._v("0")]),e._l(e.maxBox,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)})),0)],2)])]),e._m(0)])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed-handbook-link"},[n("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank"}},[e._v("Flexbox Handbook")])])}],d=(n("cb29"),n("caad"),n("a15b"),n("d81d"),n("a9e3"),n("4fad"),n("d3b7"),n("07ac"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("3835")),x=n("5530"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("label",{attrs:{for:"name"}},[e._v(e._s(e.property.name))]),n("select",{attrs:{name:e.property.name,id:"select-"+e.property.name},on:{change:function(t){return e.$emit("change",Object.assign({},e.property,{value:t.target.value}))}}},e._l(e.property.values,(function(t,r){return n("option",{key:r,domProps:{value:t,selected:e.value===t}},[e._v(e._s(t))])})),0)])},v=[],E=u["a"].extend({name:"PropertySelector",model:{prop:"value",event:"change"},props:{value:String,property:Object}}),_=E,b=(n("da92"),n("2877")),m=Object(b["a"])(_,h,v,!1,null,"1971331c",null),g=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box",style:e.style},[n("div",{staticClass:"box-name"},[e._v("#"+e._s(e.index))]),n("div",{staticClass:"size-info"},[e._v(e._s(e.w)+"x"+e._s(e.h))])])},C=[],S=u["a"].extend({name:"Box",props:{index:Number},data:function(){return{colors:["#3e9aff","#92e892","#ffe9ad","#e89293","#a4a1ff"],w:0,h:0,backgroundColor:"#fff"}},created:function(){this.w=this.getRandomIntInclusive(1,150),this.h=this.getRandomIntInclusive(1,150),this.backgroundColor=this.getRandomColor()},computed:{style:function(){return{"min-width":this.w+"px",height:this.h+"px","background-color":this.backgroundColor}}},methods:{getRandomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},getRandomColor:function(){for(var e="0123456789ABCDEF",t="#",n=0;n<6;n++)t+=e[Math.floor(16*Math.random())];return t}}}),T=S,R=(n("1372"),Object(b["a"])(T,y,C,!1,null,"0fcc3804",null)),A=R.exports;(function(e){e["ROW"]="row",e["COLUMN"]="column",e["ROW_REVERSE"]="row-reverse",e["COLUMN_REVERSE"]="column-reverse"})(a||(a={})),function(e){e["NOWRAP"]="nowrap",e["WRAP"]="wrap",e["WRAP_REVERSE"]="wrap-reverse"}(o||(o={})),function(e){e["FLEX_START"]="flex-start",e["FLEX_END"]="flex-end",e["CENTER"]="center",e["SPACE_BETWEEN"]="space-between",e["SPACE_AROUND"]="space-around",e["SPACE_EVENLY"]="space-evenly",e["START"]="start",e["END"]="end",e["LEFT"]="left",e["RIGHT"]="right"}(i||(i={})),function(e){e["AUTO"]="auto",e["FLEX_START"]="flex-start",e["FLEX_END"]="flex-end",e["CENTER"]="center",e["BASELINE"]="baseline",e["STRETCH"]="stretch"}(l||(l={})),function(e){e["STRETCH"]="stretch",e["FLEX_START"]="flex-start",e["FLEX_END"]="flex-end",e["CENTER"]="center",e["BASELINE"]="baseline",e["FIRST_BASELINE"]="first baseline",e["LAST_BASELINE"]="last baseline",e["START"]="start",e["END"]="end",e["SELF_START"]="self-start",e["SELF_END"]="self-end"}(s||(s={})),function(e){e["FLEX_START"]="flex-start",e["FLEX_END"]="flex-end",e["CENTER"]="center",e["SPACE_BETWEEN"]="space-between",e["SPACE_AROUND"]="space-around",e["SPACE_EVENLY"]="space-evenly",e["STRETCH"]="stretch",e["START"]="start",e["END"]="end",e["BASELINE"]="baseline",e["FIRST_BASELINE"]="first baseline",e["LAST_BASELINE"]="last baseline"}(c||(c={}));var w=u["a"].extend({name:"App",components:{PropertySelector:g,Box:A},data:function(){return{appName:"Flexbox Illustrated",FlexboxProperties:r,actualProperties:{"flex-direction":a.ROW,"flex-wrap":o.NOWRAP,"justify-content":i.FLEX_START,"align-items":s.STRETCH,"align-content":c.STRETCH},actualPropertiesChildren:{"align-self":l.AUTO},maxBox:5,flexGrow:Array(5).fill(0),flexShrink:Array(5).fill(0)}},computed:{flexProperties:function(){return Object.entries(Object(x["a"])({},r)).map((function(e){var t=Object(d["a"])(e,2),n=t[0],r=t[1],a=n.replace(/Values/g,"").split(/(?=[A-Z])/);return{name:a.map((function(e,t){return 0!==t?e.toLocaleLowerCase():e})).join(" "),id:a.join("-").toLocaleLowerCase(),appliedToChildren:["align-self"].includes(a.join("-").toLocaleLowerCase()),values:Object.values(r).map((function(e){return e.toString()}))}}))}},methods:{onPropertyChanged:function(e){e.appliedToChildren?this.actualPropertiesChildren[e.id]=e.value:this.actualProperties[e.id]=e.value},updateFlexWidth:function(e,t,n){"grow"===n?this.flexGrow[e-1]=Number(t):this.flexShrink[e-1]=Number(t),this.$forceUpdate()}}}),P=w,N=(n("5c0b"),Object(b["a"])(P,f,p,!1,null,null,null)),k=N.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(e){return e(k)}}).$mount("#app")},da92:function(e,t,n){"use strict";var r=n("6e1c"),a=n.n(r);a.a},f4a7:function(e,t,n){}});
//# sourceMappingURL=app.2a778ae4.js.map