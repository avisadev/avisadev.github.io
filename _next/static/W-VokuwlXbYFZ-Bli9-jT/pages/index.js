(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,r,t){"use strict";t.r(r);var a=t("q1tI"),o=t.n(a),i=t("YFqc"),n=t.n(i),s=t("ZdEh"),l=t("4qRI"),c=t("9uj6"),d=t("Qetd"),p=t.n(d),u=function(e,r){var t=p()({},e,r);for(var a in e){var o;e[a]&&"object"===typeof r[a]&&p()(t,((o={})[a]=p()(e[a],r[a]),o))}return t},f={breakpoints:[40,52,64].map((function(e){return e+"em"}))},g=function(e){return"@media screen and (min-width: "+e+")"},m=function(e,r){return h(r,e,e)},h=function(e,r,t,a,o){for(r=r&&r.split?r.split("."):[r],a=0;a<r.length;a++)e=e?e[r[a]]:o;return e===o?t:e},b=function e(r){var t={},a=function(e){var a={},o=!1,i=e.theme&&e.theme.disableStyledSystemCache;for(var n in e)if(r[n]){var s=r[n],l=e[n],c=h(e.theme,s.scale,s.defaults);if("object"!==typeof l)p()(a,s(l,c,e));else{if(t.breakpoints=!i&&t.breakpoints||h(e.theme,"breakpoints",f.breakpoints),Array.isArray(l)){t.media=!i&&t.media||[null].concat(t.breakpoints.map(g)),a=u(a,v(t.media,s,c,l,e));continue}null!==l&&(a=u(a,y(t.breakpoints,s,c,l,e)),o=!0)}}return o&&(a=function(e){var r={};return Object.keys(e).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(t){r[t]=e[t]})),r}(a)),a};a.config=r,a.propNames=Object.keys(r),a.cache=t;var o=Object.keys(r).filter((function(e){return"config"!==e}));return o.length>1&&o.forEach((function(t){var o;a[t]=e(((o={})[t]=r[t],o))})),a},v=function(e,r,t,a,o){var i={};return a.slice(0,e.length).forEach((function(a,n){var s,l=e[n],c=r(a,t,o);l?p()(i,((s={})[l]=p()({},i[l],c),s)):p()(i,c)})),i},y=function(e,r,t,a,o){var i={};for(var n in a){var s=e[n],l=r(a[n],t,o);if(s){var c,d=g(s);p()(i,((c={})[d]=p()({},i[d],l),c))}else p()(i,l)}return i},x=function(e){var r=e.properties,t=e.property,a=e.scale,o=e.transform,i=void 0===o?m:o,n=e.defaultScale;r=r||[t];var s=function(e,t,a){var o={},n=i(e,t,a);if(null!==n)return r.forEach((function(e){o[e]=n})),o};return s.scale=a,s.defaults=n,s},w=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var a=e[t];r[t]=!0!==a?"function"!==typeof a?x(a):a:x({property:t,scale:t})})),b(r)},R=function(){for(var e={},r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];t.forEach((function(r){r&&r.config&&p()(e,r.config)}));var o=b(e);return o},_=w({width:{property:"width",scale:"sizes",transform:function(e,r){return h(r,e,!function(e){return"number"===typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),S=_,O={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};O.bg=O.backgroundColor;var E=w(O),k=E,j=w({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),z=j,C=w({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),W=C,L={space:[0,4,8,16,32,64,128,256,512]},T=w({gridGap:{property:"gridGap",scale:"space",defaultScale:L.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:L.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:L.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),B=T,A={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};A.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},A.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},A.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},A.borderBottomColor={property:"borderBottomColor",scale:"colors"},A.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},A.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},A.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},A.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},A.borderLeftColor={property:"borderLeftColor",scale:"colors"},A.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},A.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},A.borderRightColor={property:"borderRightColor",scale:"colors"},A.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var I=w(A),P=I,H={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};H.bgImage=H.backgroundImage,H.bgSize=H.backgroundSize,H.bgPosition=H.backgroundPosition,H.bgRepeat=H.backgroundRepeat;var K=w(H),q=K,M={space:[0,4,8,16,32,64,128,256,512]},D=w({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:M.space},right:{property:"right",scale:"space",defaultScale:M.space},bottom:{property:"bottom",scale:"space",defaultScale:M.space},left:{property:"left",scale:"space",defaultScale:M.space}}),N=D,F={space:[0,4,8,16,32,64,128,256,512]},G=function(e){return"number"===typeof e&&!isNaN(e)},X=function(e,r){if(!G(e))return h(r,e,e);var t=e<0,a=Math.abs(e),o=h(r,a,a);return G(o)?o*(t?-1:1):t?"-"+o:o},Y={};Y.margin={margin:{property:"margin",scale:"space",transform:X,defaultScale:F.space},marginTop:{property:"marginTop",scale:"space",transform:X,defaultScale:F.space},marginRight:{property:"marginRight",scale:"space",transform:X,defaultScale:F.space},marginBottom:{property:"marginBottom",scale:"space",transform:X,defaultScale:F.space},marginLeft:{property:"marginLeft",scale:"space",transform:X,defaultScale:F.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:X,defaultScale:F.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:X,defaultScale:F.space}},Y.margin.m=Y.margin.margin,Y.margin.mt=Y.margin.marginTop,Y.margin.mr=Y.margin.marginRight,Y.margin.mb=Y.margin.marginBottom,Y.margin.ml=Y.margin.marginLeft,Y.margin.mx=Y.margin.marginX,Y.margin.my=Y.margin.marginY,Y.padding={padding:{property:"padding",scale:"space",defaultScale:F.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:F.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:F.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:F.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:F.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:F.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:F.space}},Y.padding.p=Y.padding.padding,Y.padding.pt=Y.padding.paddingTop,Y.padding.pr=Y.padding.paddingRight,Y.padding.pb=Y.padding.paddingBottom,Y.padding.pl=Y.padding.paddingLeft,Y.padding.px=Y.padding.paddingX,Y.padding.py=Y.padding.paddingY;var U=R(w(Y.margin),w(Y.padding)),V=U,J=w({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function Q(){return(Q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var Z=function(e,r,t,a,o){for(r=r&&r.split?r.split("."):[r],a=0;a<r.length;a++)e=e?e[r[a]]:o;return e===o?t:e},$=[40,52,64].map((function(e){return e+"em"})),ee={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},re={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},te={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},ae={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},oe=function(e,r){if("number"!==typeof r||r>=0)return Z(e,r,r);var t=Math.abs(r),a=Z(e,t,t);return"string"===typeof a?"-"+a:-1*a},ie=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return Q({},e,((t={})[r]=oe,t))}),{}),ne=function e(r){return function(t){void 0===t&&(t={});var a=Q({},ee,{},t.theme||t),o={},i=function(e){return function(r){var t={},a=Z(r,"breakpoints",$),o=[null].concat(a.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var n="function"===typeof e[i]?e[i](r):e[i];if(null!=n)if(Array.isArray(n))for(var s=0;s<n.slice(0,o.length).length;s++){var l=o[s];l?(t[l]=t[l]||{},null!=n[s]&&(t[l][i]=n[s])):t[i]=n[s]}else t[i]=n}return t}}("function"===typeof r?r(a):r)(a);for(var n in i){var s=i[n],l="function"===typeof s?s(a):s;if("variant"!==n)if(l&&"object"===typeof l)o[n]=e(l)(a);else{var c=Z(re,n,n),d=Z(ae,c),p=Z(a,d,Z(a,c,{})),u=Z(ie,c,Z)(p,l,l);if(te[c])for(var f=te[c],g=0;g<f.length;g++)o[f[g]]=u;else o[c]=u}else o=Q({},o,{},e(Z(a,l))(a))}return o}},se=function(e){var r,t,a=e.scale,o=e.prop,i=void 0===o?"variant":o,n=e.variants,s=void 0===n?{}:n,l=e.key;(t=Object.keys(s).length?function(e,r,t){return ne(h(r,e,null))(t.theme)}:function(e,r){return h(r,e,null)}).scale=a||l,t.defaults=s;var c=((r={})[i]=t,r);return b(c)},le=se({key:"buttons"}),ce=se({key:"textStyles",prop:"textStyle"}),de=se({key:"colorStyles",prop:"colors"}),pe=(S.width,S.height,S.minWidth,S.minHeight,S.maxWidth,S.maxHeight,S.size,S.verticalAlign,S.display,S.overflow,S.overflowX,S.overflowY,k.opacity,z.fontSize,z.fontFamily,z.fontWeight,z.lineHeight,z.textAlign,z.fontStyle,z.letterSpacing,W.alignItems,W.alignContent,W.justifyItems,W.justifyContent,W.flexWrap,W.flexDirection,W.flex,W.flexGrow,W.flexShrink,W.flexBasis,W.justifySelf,W.alignSelf,W.order,B.gridGap,B.gridColumnGap,B.gridRowGap,B.gridColumn,B.gridRow,B.gridAutoFlow,B.gridAutoColumns,B.gridAutoRows,B.gridTemplateColumns,B.gridTemplateRows,B.gridTemplateAreas,B.gridArea,P.borderWidth,P.borderStyle,P.borderColor,P.borderTop,P.borderRight,P.borderBottom,P.borderLeft,P.borderRadius,q.backgroundImage,q.backgroundSize,q.backgroundPosition,q.backgroundRepeat,N.zIndex,N.top,N.right,N.bottom,N.left,function(e){var r=new RegExp("^("+e.join("|")+")$");return Object(l.a)((function(e){return Object(c.a)(e)&&!r.test(e)}))}),ue=(pe(R(U,j,E,_,C,I,K,D,T,J,le,ce,de).propNames),t("5D9J")),fe=t("qKvR"),ge=pe(V.propNames.concat(k.propNames)),me=Object(ue.a)("div",{shouldForwardProp:ge})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return Object(s.a)(e.__css)(e.theme)}),(function(e){var r=e.theme,t=e.variant,a=e.__themeKey;return void 0===a&&(a="variants"),Object(s.a)(Object(s.b)(r,a+"."+t,Object(s.b)(r,t)))}),V,k,(function(e){return Object(s.a)(e.sx)(e.theme)}),(function(e){return e.css})),he=Object(ue.a)(me)({display:"flex"});var be=function(e){return Array.isArray(e)?e.map(be):!!e&&"repeat(auto-fit, minmax("+("number"===typeof(r=e)?r+"px":r)+", 1fr))";var r},ve=function(e){return Array.isArray(e)?e.map(ve):!!e&&("number"===typeof e?"repeat("+e+", 1fr)":e)},ye=(o.a.forwardRef((function(e,r){var t=e.width,a=e.columns,i=e.gap;void 0===i&&(i=3);var n=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["width","columns","gap"]),s=t?be(t):ve(a);return o.a.createElement(me,Object.assign({},{ref:r},n,{__themeKey:"grids",__css:{display:"grid",gridGap:i,gridTemplateColumns:s}}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"button",variant:"primary"},e,{__themeKey:"buttons",__css:{appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",px:3,py:2,color:"white",bg:"primary",border:0,borderRadius:4}}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))}))),xe=o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r},e,{__themeKey:"text"}))})),we=(o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"img"},e,{__themeKey:"images",__css:Object.assign({},{maxWidth:"100%",height:"auto"},e.__css)}))}))),Re=(o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,variant:"primary"},e,{__themeKey:"cards"}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"label",variant:"label"},e,{__themeKey:"forms",__css:{width:"100%",display:"flex"}}))}))),_e=o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"input",variant:"input"},e,{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent"}}))}));var Se=function(e){var r=e.size;void 0===r&&(r=24);var t=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return o.a.createElement(me,Object.assign({},{as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r+"",height:r+"",viewBox:"0 0 24 24",fill:"currentcolor"},t))},Oe=function(e){return function(r){var t={};for(var a in r)e(a||"")&&(t[a]=r[a]);return t}},Ee=/^m[trblxy]?$/,ke=Oe((function(e){return Ee.test(e)})),je=Oe((function(e){return!Ee.test(e)})),ze=function(e){return o.a.createElement(Se,e,o.a.createElement("path",{d:"M7 10l5 5 5-5z"}))};o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},ke(e),{sx:{display:"flex"}}),o.a.createElement(me,Object.assign({},{ref:r,as:"select",variant:"select"},je(e),{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent"}})),o.a.createElement(ze,{sx:{ml:-28,alignSelf:"center",pointerEvents:"none"}}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"textarea",variant:"textarea"},e,{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent"}}))}));var Ce=function(e){return o.a.createElement(Se,e,o.a.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))},We=function(e){return o.a.createElement(Se,e,o.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))},Le=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ce,Object.assign({},e,{__css:{display:"none","input:checked ~ &":{display:"block"}}})),o.a.createElement(We,Object.assign({},e,{__css:{display:"block","input:checked ~ &":{display:"none"}}})))};o.a.forwardRef((function(e,r){var t=e.className,a=e.sx,i=e.variant;void 0===i&&(i="radio");var n=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["className","sx","variant"]);return o.a.createElement(me,null,o.a.createElement(me,Object.assign({},{ref:r,as:"input",type:"radio"},n,{sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),o.a.createElement(me,{as:Le,"aria-hidden":"true",__themeKey:"forms",variant:i,className:t,sx:a,__css:{mr:2,borderRadius:9999,color:"gray","input:checked ~ &":{color:"primary"},"input:focus ~ &":{bg:"highlight"}}}))}));var Te=function(e){return o.a.createElement(Se,e,o.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},Be=function(e){return o.a.createElement(Se,e,o.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))},Ae=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Te,Object.assign({},e,{__css:{display:"none","input:checked ~ &":{display:"block"}}})),o.a.createElement(Be,Object.assign({},e,{__css:{display:"block","input:checked ~ &":{display:"none"}}})))},Ie=(o.a.forwardRef((function(e,r){var t=e.className,a=e.sx,i=e.variant;void 0===i&&(i="checkbox");var n=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["className","sx","variant"]);return o.a.createElement(me,null,o.a.createElement(me,Object.assign({},{ref:r,as:"input",type:"checkbox"},n,{sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),o.a.createElement(me,{as:Ae,"aria-hidden":"true",__themeKey:"forms",variant:i,className:t,sx:a,__css:{mr:2,borderRadius:4,color:"gray","input:checked ~ &":{color:"primary"},"input:focus ~ &":{color:"primary",bg:"highlight"}}}))})),{appearance:"none",width:16,height:16,bg:"currentcolor",border:0,borderRadius:9999,variant:"forms.slider.thumb"});o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"input",type:"range",variant:"slider"},e,{__themeKey:"forms",__css:{display:"block",width:"100%",height:4,my:2,cursor:"pointer",appearance:"none",borderRadius:9999,color:"inherit",bg:"gray",":focus":{outline:"none",color:"primary"},"&::-webkit-slider-thumb":Ie,"&::-moz-range-thumb":Ie,"&::-ms-thumb":Ie}}))}));o.a.forwardRef((function(e,r){var t=e.as;void 0===t&&(t=_e);var a=e.label,i=e.name,n=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["as","label","name"]);return o.a.createElement(me,ke(n),o.a.createElement(Re,{htmlFor:i},a),o.a.createElement(t,Object.assign({},{ref:r,id:i,name:i},je(n))))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"progress",variant:"styles.progress"},e,{__css:{display:"block",width:"100%",height:"4px",margin:0,padding:0,overflow:"hidden",appearance:"none",color:"primary",bg:"gray",borderRadius:9999,border:"none","&::-webkit-progress-bar":{bg:"transparent"},"&::-webkit-progress-value":{bg:"currentcolor"},"&::-moz-progress-bar":{bg:"currentcolor"}}}))}));o.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=128);var a=e.strokeWidth;void 0===a&&(a=2);var i=e.value;void 0===i&&(i=0);var n=e.min;void 0===n&&(n=0);var s=e.max;void 0===s&&(s=1);var l=e.title,c=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size","strokeWidth","value","min","max","title"]),d=16-a,p=2*d*Math.PI,u=p-(i-n)/(s-n)*p;return o.a.createElement(me,Object.assign({},{ref:r,as:"svg",viewBox:"0 0 32 32",width:t,height:t,strokeWidth:a,fill:"none",stroke:"currentcolor",role:"img","aria-valuenow":i,"aria-valuemin":n,"aria-valuemax":s},c,{__css:{color:"primary"}}),l&&o.a.createElement("title",null,l),o.a.createElement("circle",{cx:16,cy:16,r:d,opacity:1/8}),o.a.createElement("circle",{cx:16,cy:16,r:d,strokeDasharray:p,strokeDashoffset:u,transform:"rotate(-90 16 16)"}))}));var Pe=Object(fe.d)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}});o.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=48);var a=e.strokeWidth;void 0===a&&(a=4);var i=e.title;void 0===i&&(i="Loading...");var n=e.duration;void 0===n&&(n=500);var s=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size","strokeWidth","max","title","duration"]),l=16-a,c=2*l*Math.PI,d=c-.25*c;return o.a.createElement(me,Object.assign({},{ref:r,as:"svg",viewBox:"0 0 32 32",width:t,height:t,strokeWidth:a,fill:"none",stroke:"currentcolor",role:"img"},s,{__css:{color:"primary",overflow:"visible"}}),o.a.createElement("title",null,i),o.a.createElement("circle",{cx:16,cy:16,r:l,opacity:1/8}),o.a.createElement(me,{as:"circle",cx:16,cy:16,r:l,strokeDasharray:c,strokeDashoffset:d,__css:{transformOrigin:"50% 50%",animationName:Pe.toString(),animationTimingFunction:"linear",animationDuration:n+"ms",animationIterationCount:"infinite"}}))}));o.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=48);var a=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return o.a.createElement(we,Object.assign({},{ref:r,width:t,height:t,variant:"avatar"},a,{__css:{borderRadius:9999}}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r},e,{__themeKey:"badges",__css:{display:"inline-block",verticalAlign:"baseline",fontSize:0,fontWeight:"bold",whiteSpace:"nowrap",px:1,borderRadius:2,color:"white",bg:"primary"}}))}));var He=o.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=32);var a=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return o.a.createElement(me,Object.assign({},{ref:r,as:"button",variant:"icon"},a,{__themeKey:"buttons",__css:{appearance:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",padding:1,width:t,height:t,color:"inherit",bg:"transparent",border:"none",borderRadius:4}}))}));var Ke=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentcolor",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}));o.a.forwardRef((function(e,r){var t=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return o.a.createElement(He,Object.assign({},{ref:r,title:"Close","aria-label":"Close",variant:"close"},t,{children:Ke}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r},e,{__themeKey:"alerts",__css:{display:"flex",alignItems:"center",px:3,py:2,fontWeight:"bold",color:"white",bg:"primary",borderRadius:4}}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,as:"hr",variant:"styles.hr"},e,{__css:{color:"gray",m:0,my:2,border:0,borderBottom:"1px solid"}}))}));o.a.forwardRef((function(e,r){var t=e.ratio;void 0===t&&(t=16/9);var a=e.src,i=e.frameBorder;void 0===i&&(i=0);var n=e.allowFullScreen;void 0===n&&(n=!0);var s=e.width;void 0===s&&(s=560);var l=e.height;void 0===l&&(l=315);var c=e.allow,d=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["ratio","src","frameBorder","allowFullScreen","width","height","allow"]);return o.a.createElement(me,Object.assign({},d,{__css:{width:"100%",height:0,paddingBottom:100/t+"%",position:"relative",overflow:"hidden"}}),o.a.createElement(me,{ref:r,as:"iframe",src:a,width:s,height:l,frameBorder:i,allowFullScreen:n,allow:c,__css:{position:"absolute",width:"100%",height:"100%",top:0,bottom:0,left:0,border:0}}))}));var qe=o.a.forwardRef((function(e,r){var t=e.ratio;void 0===t&&(t=4/3);var a=e.children,i=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["ratio","children"]);return o.a.createElement(me,{ref:r,sx:{position:"relative",overflow:"hidden"}},o.a.createElement(me,{sx:{width:"100%",height:0,paddingBottom:100/t+"%"}}),o.a.createElement(me,Object.assign({},i,{__css:{position:"absolute",top:0,right:0,bottom:0,left:0}}),a))}));o.a.forwardRef((function(e,r){var t=e.ratio,a=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["ratio"]);return o.a.createElement(qe,{ratio:t},o.a.createElement(we,Object.assign({},{ref:r},a,{__css:{objectFit:"cover"}})))}));var Me=o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r,variant:"container"},e,{__themeKey:"layout",__css:{width:"100%",maxWidth:"container",mx:"auto"}}))})),De=(o.a.forwardRef((function(e,r){return o.a.createElement(ye,Object.assign({},{ref:r,variant:"nav"},e,{__css:{color:"inherit",textDecoration:"none",fontWeight:"bold",display:"inline-block","&:hover, &:focus, &.active":{color:"primary"}}}))})),o.a.forwardRef((function(e,r){return o.a.createElement(me,Object.assign({},{ref:r},e,{__themeKey:"messages",__css:{padding:3,paddingLeft:function(e){return e.space[3]-e.space[1]},borderLeftWidth:function(e){return e.space[1]},borderLeftStyle:"solid",borderLeftColor:"primary",borderRadius:4,bg:"highlight"}}))})),function(e){var r=e.size;return void 0===r&&(r=24),o.a.createElement(me,{as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"currentcolor",viewBox:"0 0 24 24",sx:{display:"block",margin:0}},o.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))}),Ne=(o.a.forwardRef((function(e,r){return o.a.createElement(He,Object.assign({},{ref:r,title:"Menu","aria-label":"Toggle Menu",variant:"menu"},e),o.a.createElement(De,null))})),o.a.createElement);r.default=function(){return Ne(o.a.Fragment,null,Ne(me,{as:"section",sx:{backgroundImage:"url(/gradient1.png)",backgroundRepeat:"repeat-x",backgroundPosition:"0px 0px"}},Ne(Me,null,Ne(n.a,{href:"/"},Ne(he,{p:1,pt:2},Ne(he,{sx:{cursor:"pointer"}},Ne(we,{alt:"logo",src:"./logo.png",sx:{width:64,height:64}}),Ne(xe,{py:3,sx:{fontSize:2,fontWeight:"bold",lineHeight:1.6}},"AVISA Platform")))),Ne(he,{sx:{flexDirection:["column-reverse",,"row"]}},Ne(me,{px:2,py:[1,1,3,4],sx:{flex:["1 1 auto",,"0 0 50%"]}},Ne(we,{alt:"CloudEdge",src:"./cloudedge.jpg",sx:{maxWidth:"100%"}})),Ne(me,{px:[2,2,3,4],py:[2,2,4,5],pt:[4,4,4,5],sx:{flex:["1 1 auto","0 0 50%"]}},Ne(xe,{sx:{fontSize:[5,5,5,6],fontWeight:"bold",lineHeight:1.2}},"Machine",Ne("br",null),"Learning for",Ne("br",null),"the Internet of",Ne("br",null),"Things (IoT)"),Ne(xe,{sx:{fontSize:[2,2,2,3],fontWeight:"medium",lineHeight:1.6}},"Create smart ecosystems!"))))),Ne(Me,{as:"section",py:5},Ne(he,{sx:{flexDirection:["column",,"row"]}},Ne(me,{sx:{flex:"1 1 auto"}},Ne(me,null,Ne(we,{px:5,alt:"CloudEdge",src:"./feature.webp",sx:{maxWidth:"100%"}})),Ne(me,{px:5,sx:{textAlign:"center"}},Ne("h1",null,"On-Device AI"),Ne("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla."))),Ne(me,{sx:{flex:"1 1 auto"}},Ne(me,null,Ne(we,{px:5,alt:"CloudEdge",src:"./feature.webp",sx:{maxWidth:"100%"}})),Ne(me,{px:5,sx:{textAlign:"center"}},Ne("h1",null,"Serverless Computing"),Ne("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla.")))),Ne(he,{sx:{flexDirection:["column",,"row"]}},Ne(me,{sx:{flex:"1 1 auto"}},Ne(me,null,Ne(we,{px:5,alt:"CloudEdge",src:"./feature.webp",sx:{maxWidth:"100%"}})),Ne(me,{px:5,sx:{textAlign:"center"}},Ne("h1",null,"Distributed Streaming"),Ne("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla."))),Ne(me,{sx:{flex:"1 1 auto"}},Ne(me,null,Ne(we,{px:5,alt:"CloudEdge",src:"./feature.webp",sx:{maxWidth:"100%"}})),Ne(me,{px:5,sx:{textAlign:"center"}},Ne("h1",null,"GPU-Accelerated Inference"),Ne("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla."))))),Ne(me,{as:"section",bg:"#ffafa2"},Ne(Me,null,Ne(he,{sx:{flexDirection:["column-reverse",,"row"]}},Ne(me,{px:2,py:[1,1,3,4],sx:{flex:["1 1 auto",,"0 0 50%"]}},Ne(we,{alt:"CloudEdge",src:"./colors.jpg",sx:{maxWidth:"100%"}})),Ne(me,{px:[2,2,3,4],py:[2,2,4,5],pt:[4,4,4,5],sx:{flex:["1 1 auto","0 0 50%"]}},Ne(xe,{sx:{fontSize:[5,5,5,6],fontWeight:"bold",lineHeight:1.2}},"Autonomous",Ne("br",null),"Systems by",Ne("br",null),"Cloud and",Ne("br",null),"Edge Computing"),Ne(xe,{sx:{fontSize:[2,2,2,3],fontWeight:"medium",lineHeight:1.6}},"Machine Learning Deployments using",Ne("br",null),"CI/CD Pipelines"))))),Ne(me,{as:"section",bg:"#f6f6f6",sx:{overflow:"hidden"}},Ne(Me,{py:6,sx:{position:"relative"}},Ne(me,{sx:{width:[,,,"65%"]}},Ne("h1",null,"Features"),Ne("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Ac odio tempor orci dapibus ultrices in iaculis. Ultrices in iaculis nunc sed augue lacus viverra. Mollis nunc sed id semper risus in hendrerit gravida. Cras pulvinar mattis nunc sed blandit libero. Justo donec enim diam vulputate ut pharetra sit. Gravida dictum fusce ut placerat orci. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Et molestie ac feugiat sed lectus. Turpis egestas integer eget aliquet nibh. Feugiat vivamus at augue eget arcu dictum varius. Nisi porta lorem mollis aliquam ut. Adipiscing at in tellus integer. Pellentesque elit ullamcorper dignissim cras tincidunt.")),Ne(me,{sx:{width:["100%",,,"800px"],position:[,,,"absolute"],top:[,,,0],left:[,,,"70%"],margin:["64px 0 -60%",,,"-80px 0"]}},Ne(me,{bg:"#222",sx:{position:"relative",overflow:"hidden"}},Ne(we,{alt:"CloudEdge",src:"./space.jpg",sx:{maxWidth:"100%"}}))))),Ne(Me,{as:"section",py:5},Ne(me,null,Ne("h1",null,"AVISA Design"),Ne("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Ac odio tempor orci dapibus ultrices in iaculis. Ultrices in iaculis nunc sed augue lacus viverra. Mollis nunc sed id semper risus in hendrerit gravida."),Ne("a",{href:"https://design.avisa.dev",target:"_blank",rel:"noopener"},"design.avisa.dev"))),Ne(me,{as:"section",bg:"#000"},Ne(Me,null,Ne(he,{sx:{justifyContent:"center"}},Ne(me,null,Ne(we,{alt:"CloudEdge",src:"./earth.jpg",sx:{width:"320px",maxWidth:"100%"}}))),Ne(he,null,Ne(me,{color:"white",px:1,pb:4},Ne(xe,null,Ne("b",null,"AVISA Platform")),Ne(xe,null,"Copyright \xa9 2020 Artin Kajal Ltd. All rights reserved."))))))}},YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var a=t("/GRZ"),o=t("i2R6"),i=t("48fX"),n=t("tCBg"),s=t("T0f4");function l(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=s(e);if(r){var o=s(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return n(this,t)}}var c=t("AroE"),d=t("7KCV");r.__esModule=!0,r.default=void 0;var p,u=d(t("q1tI")),f=t("QmWs"),g=t("g/15"),m=c(t("nOHt")),h=t("elyg");function b(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var v=new Map,y=window.IntersectionObserver,x={};function w(){return p||(y?p=new y((function(e){e.forEach((function(e){if(v.has(e.target)){var r=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),v.delete(e.target),r())}}))}),{rootMargin:"200px"}):void 0)}var R=function(e){i(t,e);var r=l(t);function t(e){var o;return a(this,t),(o=r.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var r=null,t=null,a=null;return function(o,i){if(a&&o===r&&i===t)return a;var n=e(o,i);return r=o,t=i,a=n,n}}((function(e,r){return{href:(0,h.addBasePath)(b(e)),as:r?(0,h.addBasePath)(b(r)):r}})),o.linkClicked=function(e){var r=e.currentTarget,t=r.nodeName,a=r.target;if("A"!==t||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),n=i.href,s=i.as;if(function(e){var r=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,g.getLocationOrigin)(),!1,!0);return!r.host||r.protocol===t.protocol&&r.host===t.host}(n)){var l=window.location.pathname;n=(0,f.resolve)(l,n),s=s?(0,f.resolve)(l,s):n,e.preventDefault();var c=o.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](n,s,{shallow:o.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,r=this.formatUrls(this.props.href,this.props.as),t=r.href,a=r.as,o=(0,f.resolve)(e,t);return[o,a?(0,f.resolve)(e,a):o]}},{key:"handleRef",value:function(e){var r=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,r){var t=w();return t?(t.observe(e),v.set(e,r),function(){try{t.unobserve(e)}catch(r){console.error(r)}v.delete(e)}):function(){}}(e,(function(){r.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var r=this.getPaths();m.default.prefetch(r[0],r[1],e).catch((function(e){0})),x[r.join("%")]=!0}}},{key:"render",value:function(){var e=this,r=this.props.children,t=this.formatUrls(this.props.href,this.props.as),a=t.href,o=t.as;"string"===typeof r&&(r=u.default.createElement("a",null,r));var i=u.Children.only(r),n={ref:function(r){e.handleRef(r),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(r):"object"===typeof i.ref&&(i.ref.current=r))},onMouseEnter:function(r){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(r),e.prefetch({priority:!0})},onClick:function(r){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(r),r.defaultPrevented||e.linkClicked(r)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(n.href=o||a),u.default.cloneElement(i,n)}}]),t}(u.Component);r.default=R},"m0L+":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["m0L+",0,2,1,3]]]);