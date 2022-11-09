(function(){"use strict";var t={5891:function(t,e,n){var s=n(9963),i=n(655),a=n(6252),r=n(2262),l=n(3577),c=n(7061),o=n(4312),u=n(6866),_=n(4995),d=n(2718),f=n(2180),p=n(6086),h=n(8127),g="extension/module/messor/FSCheckApi",m=(0,p.Q_)("filesystem-check",{state:function(){return{loading:!1,hasScanResult:!1,initialData:{path:""},requestData:{path:"",exclude:"",page:1},scanResult:null}},getters:{route:function(){return g}},actions:{fetchInitialState:function(t){return void 0===t&&(t=!0),(0,i.mG)(this,void 0,Promise,(function(){var e,n,s;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.loading=t,[4,(0,h.Nv)(g,"main")];case 1:return e=i.sent(),n=e.data,s=e.status,"ok"!==s.toLocaleLowerCase()?(this.loading=!1,[2]):(this.initialData={path:n.path||""},this.requestData.path=this.initialData.path,this.loading=!1,[2])}}))}))},scan:function(){return(0,i.mG)(this,void 0,Promise,(function(){var t,e,n,s,a,r,l;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.requestData.path?(this.loading=!0,t=this.requestData,e=t.path,n=t.exclude,s=t.page,[4,(0,h.Nv)(g,"result",{path:e,exclude:n,page:s})]):[2];case 1:return a=i.sent(),r=a.status,l=a.data,"ok"!==r.toLocaleLowerCase()?(this.loading=!1,[2]):(this.scanResult=l,this.hasScanResult=!0,this.loading=!1,[2])}}))}))},hideScanResult:function(){return(0,i.mG)(this,void 0,Promise,(function(){return(0,i.Jh)(this,(function(t){return this.hasScanResult=!1,[2]}))}))}}}),v=n(7154),w=function(t){return(0,a.dD)("data-v-49ad82e4"),t=t(),(0,a.Cn)(),t},b=w((function(){return(0,a._)("span",{class:"ms-search__title"},"Path",-1)})),k={class:"ms-search"},S={for:"fscheckScanPath"},x={class:"ms-settings-page__group"},y={class:"ms-settings-page__group-title"},U={class:"ms-settings-page__group-col ms-settings-page__group-col-fluid"},D={key:1,class:"ms-wrapper"},C={class:"ms-container"},R={id:"fileSystemCheckResult",class:"ms-page"},q={class:"fscheck__close-button"},O=w((function(){return(0,a._)("span",{class:"ms-page__title",style:{"margin-bottom":"0 !important"}},"File Check Result",-1)})),j=w((function(){return(0,a._)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z",fill:"#fff"})],-1)})),z=[j],I={class:"swiper-container ms-page-cards-slider swiper-container-initialized swiper-container-horizontal"},P={id:"statisticTableBody","aria-live":"polite",class:"ms-page-box__content statistic-cards-container"},Z={class:"ms-page-cards-slider__item"},H={class:"ms-page-cards-slider__number"},Y={class:"ms-page-cards-slider__title"},B={class:"ms-page-row"},F={class:"ms-page-col"},G={class:"ms-page-box"},J={class:"ms-page-box__item"},L={class:"ms-page-box__title"},V={class:"ms-page-box__title-icon"},K=["src"],N={class:"ms-page-box__title-txt"},T={class:"ms-page-box__content"},W={id:"checkResultComtainer"},A={class:"text-center"},E={class:"ms-tag ms-tag-danger"},M={id:"paginationContainer",class:"ms-pagination"},Q=["onClick"],X=(0,a.aZ)({__name:"FilesystemCheck",setup:function(t){var e=this,p=(0,d.s)(),h=m(),g={dir:"fscheck_dir",files:"fscheck_files",link:"fscheck_sym_links",general:"fscheck_checked_files"},w=function(t){h.requestData.page=t},j=function(){return(0,i.mG)(e,void 0,Promise,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return[4,h.scan()];case 1:return t.sent(),[2]}}))}))},X=(0,r.iH)(null);return(0,a.bv)((function(){return(0,i.mG)(e,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return(0,c.g)(),[4,h.fetchInitialState()];case 1:return t.sent(),X.value=(0,a.YP)((function(){return h.requestData.page}),j),[2]}}))}))})),(0,a.Ah)((function(){var t;return null===(t=X.value)||void 0===t?void 0:t.call(X)})),function(t,e){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(v.Z,null,{default:(0,a.w5)((function(){var t,i,o,d,f;return[(0,r.SU)(h).hasScanResult?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(_.Z,{key:0,"image-url":n(3494),"sub-title":(0,r.SU)(c.I)("fscheck_descript"),title:"File System Check"},{"default-settings":(0,a.w5)((function(){return[b,(0,a._)("div",k,[(0,a._)("label",S,[(0,a.wy)((0,a._)("input",{id:"fscheckScanPath","onUpdate:modelValue":e[0]||(e[0]=function(t){return(0,r.SU)(h).requestData.path=t}),class:"ms-search__input",type:"search"},null,512),[[s.nr,(0,r.SU)(h).requestData.path]]),(0,a._)("button",{id:"fscheckScan",class:"ms-search__btn",onClick:j},(0,l.zw)((0,r.SU)(c.I)("fscheck_scan")),1)])])]})),"professional-settings":(0,a.w5)((function(){return[(0,a._)("div",x,[(0,a._)("span",y,(0,l.zw)((0,r.SU)(c.I)("fscheck_setting_global_text")),1),(0,a._)("div",U,[(0,a.Wm)(u.Z,{modelValue:(0,r.SU)(h).requestData.exclude,"onUpdate:modelValue":e[1]||(e[1]=function(t){return(0,r.SU)(h).requestData.exclude=t}),type:"textarea","field-id":"request-data__excluded-files",title:"".concat((0,r.SU)(c.I)("fscheck_setting_exclude_scan_file"),":"),"tooltip-text":(0,r.SU)(c.I)("fscheck_i_exclude_file_scan")},null,8,["modelValue","title","tooltip-text"])])])]})),_:1},8,["image-url","sub-title"])),(0,r.SU)(h).hasScanResult?((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",C,[(0,a._)("div",R,[(0,a._)("div",q,[O,(0,a._)("button",{id:"fileSystemCheckResultBackButton",class:"result-page__close-button",style:{"margin-bottom":"0 !important"},title:"Close",type:"button",onClick:e[2]||(e[2]=function(){return(0,r.SU)(h).hideScanResult()})},z)]),(0,a._)("div",I,[(0,a._)("div",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries((null===(t=(0,r.SU)(h).scanResult)||void 0===t?void 0:t.statistic)||{}),(function(t){var e=t[0],n=t[1];return(0,a.wg)(),(0,a.iD)(a.HY,null,[g[e]?((0,a.wg)(),(0,a.iD)("div",{key:e,class:"swiper-slide swiper-slide-active",role:"group"},[(0,a._)("div",Z,[(0,a._)("span",H,(0,l.zw)(n),1),(0,a._)("span",Y,(0,l.zw)((0,r.SU)(c.I)(g[e])),1)])])):(0,a.kq)("",!0)],64)})),256))])]),(0,a._)("div",B,[(0,a._)("div",F,[(0,a._)("div",G,[(0,a._)("div",J,[(0,a._)("div",L,[(0,a._)("span",V,[(0,a._)("img",{src:n(5511),alt:""},null,8,K)]),(0,a._)("span",N,(0,l.zw)((0,r.SU)(c.I)("fscheck_bad_permision")),1)]),(0,a._)("div",T,[(0,a._)("table",null,[(0,a._)("tbody",W,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries((null===(i=(0,r.SU)(h).scanResult)||void 0===i?void 0:i.result.general)||{}),(function(t){var e=t[0],n=t[1];return(0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("td",null,(0,l.zw)(e),1),(0,a._)("td",A,[(0,a._)("span",E,(0,l.zw)(n),1)])])})),128))])])])])]),(0,a._)("ul",M,[(0,a._)("li",{class:(0,l.C_)(["".concat("disabled"===(null===(o=(0,r.SU)(h).scanResult)||void 0===o?void 0:o.prev)?"disabled":""),"ms-pagination__item ms-pagination__item-prev"])},null,2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries((null===(d=(0,r.SU)(h).scanResult)||void 0===d?void 0:d.urls_pagination)||{}),(function(t){var e=t[0],n=t[1];return(0,a.wg)(),(0,a.iD)("li",{key:e,class:(0,l.C_)(["".concat("disabled"===n?"current":""),"ms-pagination__item"])},[(0,a._)("button",{class:"ms-pagination__link",onClick:function(){return w(Number(e))}},(0,l.zw)(e),9,Q)],2)})),128)),(0,a._)("li",{class:(0,l.C_)(["".concat("disabled"===(null===(f=(0,r.SU)(h).scanResult)||void 0===f?void 0:f.prev)?"disabled":""),"ms-pagination__item ms-pagination__item-next"])},null,2)])])])])])])):(0,a.kq)("",!0)]})),_:1}),(0,r.SU)(h).loading?((0,a.wg)(),(0,a.j4)(o.Z,{key:0},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,l.zw)((0,r.SU)(c.I)("preloader_text")),1)]})),_:1})):(0,a.kq)("",!0),(0,r.SU)(p).hasError?((0,a.wg)(),(0,a.j4)(f.Z,{key:1})):(0,a.kq)("",!0)],64)}}}),$=n(3744);const tt=(0,$.Z)(X,[["__scopeId","data-v-49ad82e4"]]);var et=tt;(0,s.ri)(et).use((0,p.WB)()).mount("#app")},3494:function(t,e,n){t.exports=n.p+"image/messor/fsccheck.a1999e1f.svg"}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,a){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],a=t[u][2];for(var l=!0,c=0;c<s.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(l=!1,a<r&&(r=a));if(l){t.splice(u--,1);var o=i();void 0!==o&&(e=o)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,i,a]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.j=352}(),function(){n.p="media/"}(),function(){var t={352:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,r=s[0],l=s[1],c=s[2],o=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(c)var u=c(n)}for(e&&e(s);o<r.length;o++)a=r[o],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},s=self["webpackChunkfull_with_router_v0_2"]=self["webpackChunkfull_with_router_v0_2"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998,64],(function(){return n(5891)}));s=n.O(s)})();