(function(){"use strict";var e={4929:function(e,s,t){var l=t(9963),n=t(655),a=t(6252),c=t(2262),i=t(3577),r=t(7061),o=t(658),u=t(6086),_=t(8127),d="extension/module/messor/FSControlApi",m=(0,u.Q_)("filesystem-control",{state:function(){return{loading:!1,hasScanResult:!1,excludeRequestInAction:!1,removeRequestInAction:!1,initialData:{path:""},requestData:{path:"",exclude:""},filesToRemoveFromExcludesArray:[],filesToExcludeFromChangesArray:[],scanResult:null}},getters:{route:function(){return d},oneTime:function(e){return Boolean(e.scanResult&&!e.scanResult.shot)}},actions:{fetchInitialState:function(e){return void 0===e&&(e=!0),(0,n.mG)(this,void 0,Promise,(function(){var s,t,l;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.loading=e,[4,(0,_.Nv)(d,"main")];case 1:return s=n.sent(),t=s.data,l=s.status,"ok"!==l.toLocaleLowerCase()?(this.loading=!1,[2]):(this.initialData={path:t.path||""},this.requestData.path=this.initialData.path,this.loading=!1,[2])}}))}))},scan:function(){return(0,n.mG)(this,void 0,Promise,(function(){var e,s,t,l,a,c;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.requestData.path?(this.loading=!0,e=this.requestData,s=e.path,t=e.exclude,[4,(0,_.Nv)(d,"result",{path:s,exclude:t})]):[2];case 1:return l=n.sent(),a=l.status,c=l.data,"ok"!==a.toLocaleLowerCase()?(this.loading=!1,[2]):(this.scanResult=c,this.hasScanResult=!0,this.loading=!1,[2])}}))}))},removeFromExcludes:function(){var e;return(0,n.mG)(this,void 0,Promise,(function(){var s,t=this;return(0,n.Jh)(this,(function(l){switch(l.label){case 0:return this.removeRequestInAction=!0,(null===(e=this.scanResult)||void 0===e?void 0:e.result.exclude)&&this.filesToRemoveFromExcludesArray.length?[4,(0,_.Nv)(d,"remove_of_exclude",{remove:this.filesToRemoveFromExcludesArray})]:[2];case 1:return s=l.sent().status,"ok"===s.toLocaleLowerCase()&&(this.scanResult.result.exclude=Object.fromEntries(Object.entries(this.scanResult.result.exclude).filter((function(e){var s=e[0];return!t.filesToRemoveFromExcludesArray.includes(s)}))),this.filesToRemoveFromExcludesArray=[]),this.removeRequestInAction=!1,[2]}}))}))},removeFromChanges:function(){var e;return(0,n.mG)(this,void 0,Promise,(function(){var s,t=this;return(0,n.Jh)(this,(function(l){switch(l.label){case 0:return this.excludeRequestInAction=!0,(null===(e=this.scanResult)||void 0===e?void 0:e.result)?[4,(0,_.Nv)(d,"exclude",{exclude:this.filesToExcludeFromChangesArray})]:[2];case 1:return s=l.sent().status,"ok"===s.toLocaleLowerCase()&&(this.scanResult.result.exclude=(0,n.pi)((0,n.pi)({},this.scanResult.result.exclude),this.scanResult.result.exclude=Object.fromEntries(Object.entries(this.scanResult.result.changed||{}).filter((function(e){var s=e[0];return t.filesToExcludeFromChangesArray.includes(s)})))),this.scanResult.result.changed=Object.fromEntries(Object.entries(this.scanResult.result.changed||{}).filter((function(e){var s=e[0];return!t.filesToExcludeFromChangesArray.includes(s)}))),this.filesToExcludeFromChangesArray=[]),this.excludeRequestInAction=!1,[2]}}))}))},hideScanResult:function(){return(0,n.mG)(this,void 0,Promise,(function(){return(0,n.Jh)(this,(function(e){return this.hasScanResult=!1,[2]}))}))}}}),p=function(e){return(0,a.dD)("data-v-0ee47eff"),e=e(),(0,a.Cn)(),e},g={class:"ms-wrapper"},f={class:"ms-container"},v=p((function(){return(0,a._)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z",fill:"#fff"})],-1)})),h=[v],w={class:"ms-page"},x={class:"ms-page-row"},b={class:"ms-page-col ms-page-col-fluid ms-page-col-columned"},U={class:"ms-page-box ms-page-box-xs"},S={class:"ms-page-box__item"},y={class:"ms-page-circle-graph ms-page-circle-graph--danger"},k={class:"circular-chart",viewBox:"0 0 36 36"},z=p((function(){return(0,a._)("path",{class:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"},null,-1)})),I=["stroke-dasharray"],R={key:0,class:"percentage",x:"18",y:"17"},D={key:1,class:"percentage",x:"18",y:"17"},C={class:"percentage-hint",x:"18",y:"24"},j={key:0,class:"ms-page-box"},q={class:"ms-page-box__item"},A={class:"ms-page-box__title"},O={class:"ms-page-box__title-icon"},F=["src"],E={class:"ms-page-box__title-txt"},T={class:"ms-page-box__content"},L={class:"table-md table-desktop"},Z={class:"text-danger"},P={class:"table-md table-mobile"},G={class:"text-center"},J={class:"text-center text-danger"},V={key:1,class:"ms-page-box"},B={class:"ms-page-box__item"},H={class:"ms-page-box__title"},M={class:"ms-page-box__title-icon"},Y=["src"],K={class:"ms-page-box__title-txt"},N={class:"ms-page-box__content"},W={class:"table-md table-desktop"},Q={class:"text-danger"},X={class:"table-md table-mobile"},$={class:"text-center"},ee={class:"text-center text-danger"},se={class:"ms-page-col ms-page-col-fluid"},te={class:"ms-page-box ms-page-box--transparent"},le={class:"ms-page-box__item"},ne={class:"ms-page-box__content"},ae={class:"swiper-container ms-page-cards-slider-wide"},ce={class:"swiper-wrapper"},ie={class:"swiper-slide"},re={class:"ms-page-cards-slider__item"},oe={key:0,class:"ms-page-cards-slider__number"},ue={key:1,class:"ms-page-cards-slider__number"},_e={class:"ms-page-cards-slider__title"},de={class:"swiper-slide"},me={class:"ms-page-cards-slider__item"},pe={key:0,class:"ms-page-cards-slider__number"},ge={key:1,class:"ms-page-cards-slider__number"},fe={class:"ms-page-cards-slider__title"},ve={class:"swiper-slide"},he={class:"ms-page-cards-slider__item"},we={key:0,class:"ms-page-cards-slider__number"},xe={key:1,class:"ms-page-cards-slider__number"},be={class:"ms-page-cards-slider__title"},Ue={class:"swiper-slide"},Se={class:"ms-page-cards-slider__item"},ye={key:0,class:"ms-page-cards-slider__number"},ke={key:1,class:"ms-page-cards-slider__number"},ze={class:"ms-page-cards-slider__title"},Ie={class:"swiper-slide"},Re={class:"ms-page-cards-slider__item"},De={class:"ms-page-cards-slider__number"},Ce={class:"ms-page-cards-slider__title"},je=p((function(){return(0,a._)("div",{class:"swiper-pagination ms-page-cards-slider__pag"},null,-1)})),qe={key:0,class:"ms-page-col ms-page-col-fluid"},Ae={class:"ms-page-box"},Oe={class:"ms-page-box__item"},Fe={class:"ms-page-box__title"},Ee={class:"ms-page-box__title-icon"},Te=["src"],Le={class:"ms-page-box__title-txt"},Ze={class:"ms-page-box__content"},Pe={class:"text-center"},Ge={class:"text-center"},Je={class:"text-center"},Ve={class:"text-center"},Be={class:"ms-tag ms-tag-primary"},He={key:1,class:"ms-page-col ms-page-col-fluid"},Me={class:"ms-page-box"},Ye={class:"ms-page-box__item"},Ke={class:"ms-page-box__title"},Ne={class:"ms-page-box__title-icon"},We=["src"],Qe={class:"ms-page-box__title-txt"},Xe={class:"ms-page-box__content"},$e={class:"text-center"},es={class:"text-center"},ss={class:"text-center"},ts={class:"text-center"},ls={class:"ms-tag ms-tag-warning"},ns={key:2,class:"ms-page-col ms-page-col-fluid"},as={class:"ms-page-box"},cs={class:"ms-page-box__item"},is={class:"ms-page-box__title"},rs={class:"ms-page-box__title-icon"},os=["src"],us={class:"ms-page-box__title-txt"},_s={class:"ms-page-box__content"},ds={class:"text-center"},ms={class:"text-center"},ps={class:"text-center"},gs={class:"text-center"},fs=["for"],vs=["id","value"],hs=p((function(){return(0,a._)("span",{class:"ms-checkbox__icon"},null,-1)})),ws={class:"text-center"},xs={class:"text-center"},bs={class:"ms-tag ms-tag-danger"},Us={class:"ms-page-box__controls ms-page-box__controls-end"},Ss={class:"ms-page-box__controls-title"},ys=["disabled"],ks={class:"ms-page-col ms-page-col-fluid"},zs={class:"ms-page-box"},Is={class:"ms-page-box__item"},Rs={class:"ms-page-box__title"},Ds={class:"ms-page-box__title-icon"},Cs=["src"],js={class:"ms-page-box__title-txt"},qs={class:"ms-page-box__content"},As={class:"text-center"},Os={class:"text-center"},Fs={class:"text-center"},Es={class:"text-center"},Ts=["for"],Ls=["id","value"],Zs=p((function(){return(0,a._)("span",{class:"ms-checkbox__icon"},null,-1)})),Ps={class:"text-center"},Gs={class:"text-center"},Js={class:"ms-tag ms-tag-danger"},Vs={class:"ms-page-box__controls ms-page-box__controls-end"},Bs={class:"ms-page-box__controls-title"},Hs=["disabled"],Ms=(0,a.aZ)({__name:"ResultView",setup:function(e){var s=this,u=m(),_=(0,a.Fl)((function(){return!u.filesToRemoveFromExcludesArray.length||u.removeRequestInAction})),d=(0,a.Fl)((function(){return!u.filesToExcludeFromChangesArray.length||u.excludeRequestInAction})),p=(0,c.qj)({}),v=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Ms=function(){return(0,n.mG)(s,void 0,Promise,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.removeFromChanges()];case 1:return e.sent(),[2]}}))}))},Ys=function(){return(0,n.mG)(s,void 0,Promise,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.removeFromExcludes()];case 1:return e.sent(),[2]}}))}))},Ks=function(){u.hideScanResult()},Ns=function(e){var s=p[e];return s||(s=btoa(e),p[e]=s),s};return function(e,s){var n,m,p,Ws,Qs,Xs,$s,et,st,tt,lt,nt,at,ct,it,rt,ot,ut,_t,dt,mt,pt,gt,ft;return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",f,[(0,a._)("button",{class:"result-page__close-button",title:"Close",type:"button",onClick:Ks},h),(0,a._)("div",w,[(0,a._)("div",x,[(0,a._)("div",b,[(0,a._)("div",U,[(0,a._)("div",S,[(0,a._)("div",y,[((0,a.wg)(),(0,a.iD)("svg",k,[z,(0,a._)("path",{"stroke-dasharray":"".concat(null===(n=(0,c.SU)(u).scanResult)||void 0===n?void 0:n.percent,", 100"),class:"circle",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"},null,8,I),(null===(m=(0,c.SU)(u).scanResult)||void 0===m?void 0:m.result.changed)?((0,a.wg)(),(0,a.iD)("text",R,(0,i.zw)(Object.keys((null===(p=(0,c.SU)(u).scanResult)||void 0===p?void 0:p.result.changed)||{}).length),1)):((0,a.wg)(),(0,a.iD)("text",D,"0")),(0,a._)("text",C," /"+(0,i.zw)(Object.keys((null===(Ws=(0,c.SU)(u).scanResult)||void 0===Ws?void 0:Ws.result.checked)||{}).length),1)]))])])]),(null===(Qs=(0,c.SU)(u).scanResult)||void 0===Qs?void 0:Qs.result.changed)?((0,a.wg)(),(0,a.iD)("div",j,[(0,a._)("div",q,[(0,a._)("div",A,[(0,a._)("span",O,[(0,a._)("img",{src:t(4456),alt:""},null,8,F)]),(0,a._)("span",E,(0,i.zw)((0,c.SU)(r.I)("fsc_changed_files_found")),1)]),(0,a._)("div",T,[(0,a._)("table",L,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,[(0,a.Uk)((0,i.zw)((null===(Xs=(0,c.SU)(u).scanResult)||void 0===Xs?void 0:Xs.path)||"")+" ",1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_path")),1)]),(0,a._)("th",null,[(0,a._)("span",Z,(0,i.zw)((0,c.SU)(r.I)("fsc_changed_files")),1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_status")),1)]),(0,a._)("th",null,[(0,a.Uk)((0,i.zw)((new Date).toLocaleDateString())+" ",1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_date")),1)]),(0,a._)("th",null,[(0,a.Uk)((0,i.zw)((null===($s=(0,c.SU)(u).scanResult)||void 0===$s?void 0:$s.work_time)||0)+" second ",1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_time_scan")),1)])])])]),(0,a._)("table",P,[(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",G,(0,i.zw)(v((0,c.SU)(r.I)("fsc_status"))),1),(0,a._)("td",J,(0,i.zw)((0,c.SU)(r.I)("fsc_changed_files")),1)])])])])])])):((0,a.wg)(),(0,a.iD)("div",V,[(0,a._)("div",B,[(0,a._)("div",H,[(0,a._)("span",M,[(0,a._)("img",{src:t(6079),alt:""},null,8,Y)]),(0,a._)("span",K,(0,i.zw)((0,c.SU)(r.I)("fsc_changed_not_files")),1)]),(0,a._)("div",N,[(0,a._)("table",W,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,[(0,a.Uk)((0,i.zw)((null===(et=(0,c.SU)(u).scanResult)||void 0===et?void 0:et.path)||"")+" ",1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_path")),1)]),(0,a._)("th",null,[(0,a._)("span",Q,(0,i.zw)((0,c.SU)(r.I)("fsc_changed_not_files")),1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_status")),1)]),(0,a._)("th",null,[(0,a.Uk)((0,i.zw)((new Date).toLocaleDateString())+" ",1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_date")),1)]),(0,a._)("th",null,[(0,a.Uk)((0,i.zw)((null===(st=(0,c.SU)(u).scanResult)||void 0===st?void 0:st.work_time)||0)+" second ",1),(0,a._)("small",null,(0,i.zw)((0,c.SU)(r.I)("fsc_time_scan")),1)])])])]),(0,a._)("table",X,[(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",$,(0,i.zw)(v((0,c.SU)(r.I)("fsc_status"))),1),(0,a._)("td",ee,(0,i.zw)((0,c.SU)(r.I)("fsc_changed_files")),1)])])])])])]))]),(0,a._)("div",se,[(0,a._)("div",te,[(0,a._)("div",le,[(0,a._)("div",ne,[(0,a._)("div",ae,[(0,a._)("div",ce,[(0,a._)("div",ie,[(0,a._)("div",re,[(null===(tt=(0,c.SU)(u).scanResult)||void 0===tt?void 0:tt.result.checked)?((0,a.wg)(),(0,a.iD)("span",oe,(0,i.zw)(Object.keys((null===(lt=(0,c.SU)(u).scanResult)||void 0===lt?void 0:lt.result.checked)||{}).length),1)):((0,a.wg)(),(0,a.iD)("span",ue,"0")),(0,a._)("span",_e,(0,i.zw)((0,c.SU)(r.I)("fsc_checked")),1)])]),(0,a._)("div",de,[(0,a._)("div",me,[(null===(nt=(0,c.SU)(u).scanResult)||void 0===nt?void 0:nt.result.changed)?((0,a.wg)(),(0,a.iD)("span",pe,(0,i.zw)(Object.keys((null===(at=(0,c.SU)(u).scanResult)||void 0===at?void 0:at.result.changed)||{}).length),1)):((0,a.wg)(),(0,a.iD)("span",ge,"0")),(0,a._)("span",fe,(0,i.zw)((0,c.SU)(r.I)("fsc_changed")),1)])]),(0,a._)("div",ve,[(0,a._)("div",he,[(null===(ct=(0,c.SU)(u).scanResult)||void 0===ct?void 0:ct.result.new)?((0,a.wg)(),(0,a.iD)("span",we,(0,i.zw)(Object.keys((null===(it=(0,c.SU)(u).scanResult)||void 0===it?void 0:it.result.new)||{}).length),1)):((0,a.wg)(),(0,a.iD)("span",xe,"0")),(0,a._)("span",be,(0,i.zw)((0,c.SU)(r.I)("fsc_new")),1)])]),(0,a._)("div",Ue,[(0,a._)("div",Se,[(null===(rt=(0,c.SU)(u).scanResult)||void 0===rt?void 0:rt.result.remove)?((0,a.wg)(),(0,a.iD)("span",ye,(0,i.zw)(Object.keys((null===(ot=(0,c.SU)(u).scanResult)||void 0===ot?void 0:ot.result.remove)||{}).length),1)):((0,a.wg)(),(0,a.iD)("span",ke,"0")),(0,a._)("span",ze,(0,i.zw)((0,c.SU)(r.I)("fsc_removed")),1)])]),(0,a._)("div",Ie,[(0,a._)("div",Re,[(0,a._)("span",De,(0,i.zw)((new Date).toLocaleDateString()),1),(0,a._)("span",Ce,(0,i.zw)(v((0,c.SU)(r.I)("fsc_date"))),1)])])]),je])])])])]),(null===(ut=(0,c.SU)(u).scanResult)||void 0===ut?void 0:ut.result.new)?((0,a.wg)(),(0,a.iD)("div",qe,[(0,a._)("div",Ae,[(0,a._)("div",Oe,[(0,a._)("div",Fe,[(0,a._)("span",Ee,[(0,a._)("img",{src:t(9794),alt:""},null,8,Te)]),(0,a._)("span",Le,(0,i.zw)((0,c.SU)(r.I)("fsc_new_files")),1)]),(0,a._)("div",Ze,[(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",Pe,(0,i.zw)((0,c.SU)(r.I)("fsc_type")),1),(0,a._)("th",null,(0,i.zw)(v((0,c.SU)(r.I)("fsc_path"))),1),(0,a._)("th",Ge,(0,i.zw)(v((0,c.SU)(r.I)("fsc_status"))),1)])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries((null===(_t=(0,c.SU)(u).scanResult)||void 0===_t?void 0:_t.result.new)||{}),(function(e){var s=e[0],t=e[1];return(0,a.wg)(),(0,a.iD)("tr",{key:s},[(0,a._)("td",Je,(0,i.zw)(t),1),(0,a._)("td",null,(0,i.zw)(s),1),(0,a._)("td",Ve,[(0,a._)("span",Be,(0,i.zw)((0,c.SU)(r.I)("fsc_new").toUpperCase()),1)])])})),128))])])])])])])):(0,a.kq)("",!0),(null===(dt=(0,c.SU)(u).scanResult)||void 0===dt?void 0:dt.result.remove)?((0,a.wg)(),(0,a.iD)("div",He,[(0,a._)("div",Me,[(0,a._)("div",Ye,[(0,a._)("div",Ke,[(0,a._)("span",Ne,[(0,a._)("img",{src:t(3105),alt:""},null,8,We)]),(0,a._)("span",Qe,(0,i.zw)((0,c.SU)(r.I)("fsc_removed_files")),1)]),(0,a._)("div",Xe,[(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",$e,(0,i.zw)(v((0,c.SU)(r.I)("fsc_type"))),1),(0,a._)("th",null,(0,i.zw)(v((0,c.SU)(r.I)("fsc_path"))),1),(0,a._)("th",es,(0,i.zw)(v((0,c.SU)(r.I)("fsc_status"))),1)])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries((null===(mt=(0,c.SU)(u).scanResult)||void 0===mt?void 0:mt.result.remove)||{}),(function(e){var s=e[0],t=e[1];return(0,a.wg)(),(0,a.iD)("tr",{key:s},[(0,a._)("td",ss,(0,i.zw)(t),1),(0,a._)("td",null,(0,i.zw)(s),1),(0,a._)("td",ts,[(0,a._)("span",ls,(0,i.zw)((0,c.SU)(r.I)("fsc_removed").toUpperCase()),1)])])})),128))])])])])])])):(0,a.kq)("",!0),(null===(pt=(0,c.SU)(u).scanResult)||void 0===pt?void 0:pt.result.changed)?((0,a.wg)(),(0,a.iD)("div",ns,[(0,a._)("div",as,[(0,a._)("div",cs,[(0,a._)("div",is,[(0,a._)("span",rs,[(0,a._)("img",{src:t(3105),alt:""},null,8,os)]),(0,a._)("span",us,(0,i.zw)((0,c.SU)(r.I)("fsc_changed_files")),1)]),(0,a._)("div",_s,[(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",ds,(0,i.zw)((0,c.SU)(r.I)("fsc_choose")),1),(0,a._)("th",ms,(0,i.zw)(v((0,c.SU)(r.I)("fsc_type"))),1),(0,a._)("th",null,(0,i.zw)(v((0,c.SU)(r.I)("fsc_path"))),1),(0,a._)("th",ps,(0,i.zw)(v((0,c.SU)(r.I)("fsc_status"))),1)])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries((null===(gt=(0,c.SU)(u).scanResult)||void 0===gt?void 0:gt.result.changed)||{}),(function(e){var t=e[0],n=e[1];return(0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",gs,[(0,a._)("label",{class:"ms-checkbox",for:Ns(t+n)},[(0,a.wy)((0,a._)("input",{id:Ns(t+n),"onUpdate:modelValue":s[0]||(s[0]=function(e){return(0,c.SU)(u).filesToExcludeFromChangesArray=e}),value:t,class:"add-exclude",type:"checkbox"},null,8,vs),[[l.e8,(0,c.SU)(u).filesToExcludeFromChangesArray]]),hs],8,fs)]),(0,a._)("td",ws,(0,i.zw)(n),1),(0,a._)("td",null,(0,i.zw)(t),1),(0,a._)("td",xs,[(0,a._)("span",bs,(0,i.zw)((0,c.SU)(r.I)("fsc_changed").toUpperCase()),1)])])})),128))])])]),(0,a._)("div",Us,[(0,a._)("span",Ss,(0,i.zw)((0,c.SU)(r.I)("fsc_action_selected"))+": ",1),(0,a._)("button",{disabled:(0,c.SU)(d),class:"add-exclude-btn ms-btn ms-btn-primary",onClick:Ms},[(0,c.SU)(u).excludeRequestInAction?((0,a.wg)(),(0,a.j4)(o.Z,{key:0})):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,i.zw)((0,c.SU)(r.I)("fsc_button_exclude")),1)],8,ys)])])])])):(0,a.kq)("",!0),(0,a._)("div",ks,[(0,a._)("div",zs,[(0,a._)("div",Is,[(0,a._)("div",Rs,[(0,a._)("span",Ds,[(0,a._)("img",{src:t(3105),alt:""},null,8,Cs)]),(0,a._)("span",js,(0,i.zw)((0,c.SU)(r.I)("fsc_excluded_files")),1)]),(0,a._)("div",qs,[(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",As,(0,i.zw)((0,c.SU)(r.I)("fsc_choose")),1),(0,a._)("th",Os,(0,i.zw)(v((0,c.SU)(r.I)("fsc_type"))),1),(0,a._)("th",null,(0,i.zw)(v((0,c.SU)(r.I)("fsc_path"))),1),(0,a._)("th",Fs,(0,i.zw)(v((0,c.SU)(r.I)("fsc_status"))),1)])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries((null===(ft=(0,c.SU)(u).scanResult)||void 0===ft?void 0:ft.result.exclude)||{}),(function(e){var t=e[0],n=e[1];return(0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",Es,[(0,a._)("label",{class:"ms-checkbox",for:Ns(t+n)},[(0,a.wy)((0,a._)("input",{id:Ns(t+n),"onUpdate:modelValue":s[1]||(s[1]=function(e){return(0,c.SU)(u).filesToRemoveFromExcludesArray=e}),value:t,class:"remove-exclude",type:"checkbox"},null,8,Ls),[[l.e8,(0,c.SU)(u).filesToRemoveFromExcludesArray]]),Zs],8,Ts)]),(0,a._)("td",Ps,(0,i.zw)(n),1),(0,a._)("td",null,(0,i.zw)(t),1),(0,a._)("td",Gs,[(0,a._)("span",Js,(0,i.zw)((0,c.SU)(r.I)("fsc_excluded")),1)])])})),128))])])]),(0,a._)("div",Vs,[(0,a._)("span",Bs,(0,i.zw)((0,c.SU)(r.I)("fsc_action_selected"))+": ",1),(0,a._)("button",{disabled:(0,c.SU)(_),class:"remove-exclude-btn ms-btn ms-btn-primary",onClick:Ys},[(0,c.SU)(u).removeRequestInAction?((0,a.wg)(),(0,a.j4)(o.Z,{key:0})):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,i.zw)((0,c.SU)(r.I)("fsc_remove")),1)],8,Hs)])])])])])])])])}}}),Ys=t(3744);const Ks=(0,Ys.Z)(Ms,[["__scopeId","data-v-0ee47eff"]]);var Ns=Ks,Ws=function(e){return(0,a.dD)("data-v-b0e690ba"),e=e(),(0,a.Cn)(),e},Qs={class:"ms-wrapper"},Xs={class:"ms-container"},$s={class:"ms-loading-page"},et=Ws((function(){return(0,a._)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z",fill:"#fff"})],-1)})),st=[et],tt={class:"ms-loading-page__img"},lt=["src"],nt=Ws((function(){return(0,a._)("span",{class:"ms-loading-page__title"},"Congratulations!",-1)})),at=(0,a.aZ)({__name:"OneTimeView",setup:function(e){var s=m(),l=function(){s.hideScanResult()};return function(e,s){return(0,a.wg)(),(0,a.iD)("div",Qs,[(0,a._)("div",Xs,[(0,a._)("div",$s,[(0,a._)("button",{class:"ms-loading-page__close-button",title:"Close",type:"button",onClick:l},st),(0,a._)("span",tt,[(0,a._)("img",{src:t(5272),alt:""},null,8,lt)]),nt,(0,a._)("p",null,(0,i.zw)((0,c.SU)(r.I)("fsc_one_shot")),1)])])])}}});const ct=(0,Ys.Z)(at,[["__scopeId","data-v-b0e690ba"]]);var it=ct,rt=t(8234),ot=t(4312),ut=t(4995),_t=t(6866),dt=t(2718),mt=t(2180),pt=t(7154),gt={class:"ms-search"},ft={for:"request-data__path"},vt=["onClick"],ht={class:"ms-settings-page__group-title"},wt={class:"ms-settings-page__group-col ms-settings-page__group-col-fluid"},xt=(0,a.aZ)({__name:"FilesystemControl",setup:function(e){var s=this,o=(0,dt.s)(),u=m(),_=function(){return(0,n.mG)(s,void 0,Promise,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.fetchInitialState()];case 1:return e.sent(),[4,o.checkLicense(u.route)];case 2:return e.sent(),[2]}}))}))},d=function(){return(0,n.mG)(s,void 0,Promise,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.scan()];case 1:return e.sent(),[2]}}))}))};return(0,a.bv)((function(){return(0,n.mG)(s,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return(0,r.g)(),[4,_()];case 1:return e.sent(),[2]}}))}))})),function(e,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,c.SU)(o).licenseAccepted?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(rt.Z,{key:0,"api-route":(0,c.SU)(u).route},null,8,["api-route"])),(0,c.SU)(u).loading?((0,a.wg)(),(0,a.j4)(ot.Z,{key:1},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)((0,c.SU)(r.I)("preloader_text")),1)]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(pt.Z,null,{default:(0,a.w5)((function(){return[(0,c.SU)(u).hasScanResult?(0,c.SU)(u).oneTime?((0,a.wg)(),(0,a.j4)(it,{key:1})):((0,a.wg)(),(0,a.j4)(Ns,{key:2})):((0,a.wg)(),(0,a.j4)(ut.Z,{key:0,"image-url":t(9018),"sub-title":(0,c.SU)(r.I)("fsc_description"),title:"File System Control"},{"default-settings":(0,a.w5)((function(){return[(0,a._)("div",gt,[(0,a._)("label",ft,[(0,a.wy)((0,a._)("input",{id:"request-data__path","onUpdate:modelValue":s[0]||(s[0]=function(e){return(0,c.SU)(u).requestData.path=e}),class:"ms-search__input",name:"path",type:"search"},null,512),[[l.nr,(0,c.SU)(u).requestData.path]]),(0,a._)("button",{class:"ms-search__btn",onClick:(0,l.iM)(d,["prevent","stop"]),type:"submit"},(0,i.zw)((0,c.SU)(r.I)("fsc_make_fs")),9,vt)])])]})),"professional-settings":(0,a.w5)((function(){return[(0,a._)("span",ht,(0,i.zw)((0,c.SU)(r.I)("fsc_setting_global_text")),1),(0,a._)("div",wt,[(0,a.Wm)(_t.Z,{modelValue:(0,c.SU)(u).requestData.exclude,"onUpdate:modelValue":s[1]||(s[1]=function(e){return(0,c.SU)(u).requestData.exclude=e}),name:"EXCLUDE_FILES",type:"textarea","field-id":"request-data__exclude",title:"".concat((0,c.SU)(r.I)("fsc_setting_exclude_scan_file"),":"),"tooltip-text":(0,c.SU)(r.I)("fsc_max_detected")},null,8,["modelValue","title","tooltip-text"])])]})),_:1},8,["image-url","sub-title"]))]})),_:1}),(0,c.SU)(o).hasError?((0,a.wg)(),(0,a.j4)(mt.Z,{key:2})):(0,a.kq)("",!0)],64)}}});const bt=(0,Ys.Z)(xt,[["__scopeId","data-v-21f4ee49"]]);var Ut=bt;(0,l.ri)(Ut).use((0,u.WB)()).mount("#app")},4456:function(e,s,t){e.exports=t.p+"image/messor/icon-danger.b131c99a.svg"},3105:function(e,s,t){e.exports=t.p+"image/messor/icon-removed-file.43c6f32c.svg"},9794:function(e,s,t){e.exports=t.p+"image/messor/icon-new-file.31dd09fe.svg"},5272:function(e,s,t){e.exports=t.p+"image/messor/messor-loader.007cceed.svg"},9018:function(e,s,t){e.exports=t.p+"image/messor/fcs-media.269f33fc.png"}},s={};function t(l){var n=s[l];if(void 0!==n)return n.exports;var a=s[l]={exports:{}};return e[l](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(s,l,n,a){if(!l){var c=1/0;for(u=0;u<e.length;u++){l=e[u][0],n=e[u][1],a=e[u][2];for(var i=!0,r=0;r<l.length;r++)(!1&a||c>=a)&&Object.keys(t.O).every((function(e){return t.O[e](l[r])}))?l.splice(r--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var o=n();void 0!==o&&(s=o)}}return s}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,n,a]}}(),function(){t.d=function(e,s){for(var l in s)t.o(s,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:s[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.j=319}(),function(){t.p="media/"}(),function(){var e={319:0};t.O.j=function(s){return 0===e[s]};var s=function(s,l){var n,a,c=l[0],i=l[1],r=l[2],o=0;if(c.some((function(s){return 0!==e[s]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(r)var u=r(t)}for(s&&s(l);o<c.length;o++)a=c[o],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},l=self["webpackChunkfull_with_router_v0_2"]=self["webpackChunkfull_with_router_v0_2"]||[];l.forEach(s.bind(null,0)),l.push=s.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998,64],(function(){return t(4929)}));l=t.O(l)})();