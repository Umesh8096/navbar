(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2802:function(t,n,o){"use strict";o.r(n);o(13),o(33);var e=o(0),c=(o(253),o(12),o(2)),r={name:"IconPage",layout:"app-landing",scrollToTop:!0,asyncData:function(t){var n=t.app,o=t.params,e=t.store,c=(t.redirect,t.res,t.error),r=o.id;return e.dispatch("getIcon",{id:r,info:!0}).then(function(t){var o=t.icon;e.dispatch("setPlatform",o.platform);var c=o.translations?o.translations[e.state.i18n.locale]:o.name,r=n.$utils.normalizeValue(c),d=e.state.appInfo.platforms[o.platform],l=d?d.title:"iOS",h="".concat("https://icons8.com","/icon/").concat(o.mainId,"/").concat(r);return e.dispatch("updateSEO",{title:n.$t("WEB_APP.SEO.CATEGORY.ICON_TITLE",{name:o.name}),description:n.$t("WEB_APP.SEO.CATEGORY.ICON_DESCRIPTION_PLATFORM",{name:o.name,platform:l}),canonical:h,twitterImage:t.icon.shareTwitter,googleImage:t.icon.shareGoogle}),o.translations&&(n.head.link=n.head.link||[],e.state.appInfo.activeLanguages.forEach(function(t){n.head.link.forEach(function(link){if(link.hreflang===t.code){var e=n.$utils.normalizeValue(o.translations[t.locale]);link.href="".concat(t.url,"/icon/").concat(o.id,"/").concat(e)}})})),{icon:o}}).catch(function(t){return t.idea?(window.location=t.idea,void c({statusCode:302,message:"Redirecting to ".concat(t.idea)})):(console.log(t),{error:{message:t.message}})})},data:function(){return{icon:{id:20825,name:"Icon8 Logo"},monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},computed:Object(e.a)({},Object(c.e)({appInfo:function(t){return t.appInfo},packs:function(t){return t.appInfo.packs},lang:function(t){return t.i18n.locale},platforms:function(t){return t.appInfo.platforms},platform:function(t){return t.platform}}),{pageId:function(){return"icon/".concat(this.$route.params.id)},alt:function(){return this.icon.name+" icon"+(this.icon.transcription?". "+this.icon.transcription:"")},title:function(){return"<h1>"+this.$t("WEB_APP.VIEW_ICONS.TITLE.".concat(this.icon.platform),{name:this.icon.name},this.$t("WEB_APP.VIEW_ICONS.TITLE.win10",{name:this.icon.name}))+"</h1>"},description:function(){var t={name:this.icon.name,icons:this.icon.name,iconsCount:this.appInfo.iconsCount,iconsCountsIos7:this.appInfo.iconsCounts.ios7,iconsCountsWin8:this.appInfo.iconsCounts.win8,iconsCountsWin10:this.appInfo.iconsCounts.win10,iconsCountsDotty:this.appInfo.iconsCounts.dotty,iconsCountsColor:this.appInfo.iconsCounts.color,iconsCountsNolan:this.appInfo.iconsCounts.nolan,iconsCountsOffice:this.appInfo.iconsCounts.office,iconsCountsAndroid:this.appInfo.iconsCounts.android,iconsCountsAndroidL:this.appInfo.iconsCounts.androidL},n=this.icon.description;return n||(n=this.$t("WEB_APP.VIEW_ICONS.DESCRIPTION_PLATFORM.".concat(this.icon.platform),t,"")),n||(n=this.$t("WEB_APP.VIEW_ICONS.RANDOM_DESCRIPTION.".concat(parseInt(this.icon.commonId)%5),t,this.$t("WEB_APP.VIEW_ICONS.RANDOM_DESCRIPTION.0",t))),n},relatedTitle:function(){return this.$t("WEB_APP.VIEW_ICONS.RELATED_TITLE",{name:this.icon.name})},relatedDescription:function(){var t=this,n=this.packs.find(function(n){return n.name[t.lang]===t.icon.category});return this.$t("WEB_APP.VIEW_ICONS.RELATED_TEXT",{url:this.appInfo.backendUrl,category:n?n.code:"free-icons",categoryLowercase:(""+this.icon.category).toLocaleLowerCase()})},requestTitle:function(){return this.$t("WEB_APP.VIEW_ICONS.IDEA_TITLE",{name:this.icon.name})},requestAuthor:function(){return this.icon.request.author?this.$t("WEB_APP.VIEW_ICONS.IDEA_AUTHOR",{author:this.icon.request.author}):null},requestDates:function(){var t=this.$t("WEB_APP.VIEW_ICONS.IDEA_SUBTITLE"),n=new Date(1e3*this.icon.request.created),o=new Date(1e3*this.icon.request.completed),e="".concat(this.monthNames[n.getMonth()]," ").concat(n.getDate(),", ").concat(n.getFullYear()),c=this.$t("WEB_APP.VIEW_ICONS.IDEA_AND_CREATED"),r="".concat(this.monthNames[o.getMonth()]," ").concat(o.getDate(),", ").concat(o.getFullYear());return"".concat(t," ").concat(e," ").concat(c," ").concat(r)},storyTitle:function(){return this.$t("WEB_APP.VIEW_ICONS.STORY_TITLE",{name:this.icon.name})}}),mounted:function(){this.$analytics.track({event:"Viewed Product",category:"Navigation"}),this.$analytics.page({name:"Product Page"}),this.error&&console.log("this.error",this.error),this.setIcon(this.icon)},methods:Object(e.a)({},Object(c.b)("icon",["selectIcon","extendFullIcon","unselectIcon"]),Object(c.b)(["hideLeftSidebar","toggleIconInCollection","showRightSidebar","setCollectionsMode","hideEffects","shrinkIcons","getIcon"]),{setIcon:function(t){this.unselectIcon(),this.shrinkIcons(),this.hideLeftSidebar(),this.selectIcon(t)},selectVariant:function(t){var n=this;this.getIcon({id:t.id,info:!0}).then(function(o){n.icon=o.icon,n.extendFullIcon(Object.assign({svgEffect:!1,svgCurrentResolution:!1},t))})}})},d=(o(648),o(1)),component=Object(d.a)(r,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"icon-page"},[o("div",{staticClass:"app-page-section is-header"},[o("icon-editor",{attrs:{titleIcon:t.title}}),o("div",{staticClass:"app-page-content"},[o("app-native-ads")],1)],1),o("div",{staticClass:"app-page-section"},[o("div",{staticClass:"app-page-content is-large"},[o("div",{staticClass:"h2 is-small similar-title"},[t._v(" "+t._s(t.$t("ICON.COMPONENTS.ACCORDION.OTHER_STYLES",{icon:t.icon.name})))]),t.icon?o("similar-icons",{staticClass:"is-responsive",attrs:{icon:t.icon,"is-horizontal":!0,navigate:!1},on:{select:t.selectVariant}}):t._e()],1),o("div",{staticClass:"app-page-content"},[o("h2",{staticClass:"is-small related-title"},[t._v(t._s(t.relatedTitle))]),t.relatedDescription?[o("div",{staticClass:"app-page-subtitle is-left",domProps:{innerHTML:t._s(t.relatedDescription)}})]:t._e()],2),o("div",{staticClass:"app-page-content is-large"},[o("related-icons",{attrs:{icon:t.icon}}),t.icon.tags?o("icon-tags",{attrs:{tags:t.icon.tags,"show-title":!0}}):t._e()],1),o("div",{staticClass:"app-page-content"},[t.icon.transcription?[o("div",{staticClass:"h2"},[t._v(t._s(t.requestTitle))]),o("div",{staticClass:"app-page-subtitle is-big is-left",domProps:{innerHTML:t._s(t.icon.transcription)}})]:t._e(),o("div",{staticClass:"app-page-subtitle is-left",domProps:{innerHTML:t._s(t.description)}})],2)]),t.icon.request?o("div",{staticClass:"app-page-section"},[o("div",{staticClass:"app-page-content"},[o("div",{staticClass:"icon-request"},[o("h2",[t._v(t._s(t.requestTitle)+" "),o("span",[t._v(t._s(t.requestAuthor))])]),o("div",{staticClass:"app-page-subtitle"},[t._v(t._s(t.requestDates))]),o("br"),o("p",{domProps:{innerHTML:t._s(t.icon.request.text)}}),t._l(t.icon.request.comments,function(n){return o("div",{staticClass:"request-comments"},[o("div",{staticClass:"comment-author"},[o("div",{staticClass:"comment-icon",domProps:{innerHTML:t._s(t.$icons.comment)}}),t._v(t._s(n.author))]),o("div",{staticClass:"comment-text",domProps:{innerHTML:t._s(n.text)}})])})],2)])]):t._e(),t.icon.story?o("div",{staticClass:"app-page-section is-fixed"},[o("div",{staticClass:"app-page-content"},[o("div",{staticClass:"icon-story"},[o("h2",[t._v(t._s(t.storyTitle))]),o("div",{domProps:{innerHTML:t._s(t.icon.story.text)}})])]),t.icon.story.authorLink?o("a",{staticClass:"story-author",attrs:{href:t.icon.story.authorLink}},[o("div",{staticClass:"app-page-content"},[o("img",{staticClass:"author-image",attrs:{src:t.icon.story.authorPhoto}}),o("span",{staticClass:"author-name"},[t._v(" "+t._s(t.icon.story.authorName))])])]):o("div",{staticClass:"story-author"},[o("div",{staticClass:"app-page-content"},[o("img",{staticClass:"author-image",attrs:{src:t.icon.story.authorPhoto}}),o("span",{staticClass:"author-name"},[t._v(" "+t._s(t.icon.story.authorName))])])])]):t._e(),t.icon.usageStory?o("div",{staticClass:"app-page-section is-underline is-fixed"},[o("div",{staticClass:"icon-page-story",domProps:{innerHTML:t._s(t.icon.usageStory)}})]):t._e(),o("div",{staticClass:"app-page-section is-underline is-fixed"},[o("app-comments",{attrs:{id:t.pageId}})],1)])},[],!1,null,"148f08dd",null);n.default=component.exports},597:function(t,n,o){var content=o(649);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("f4729946",content,!0,{sourceMap:!1})},648:function(t,n,o){"use strict";var e=o(597);o.n(e).a},649:function(t,n,o){(t.exports=o(7)(!1)).push([t.i,".icon-page[data-v-148f08dd]{position:relative}.icon-page h1[data-v-148f08dd]{margin-bottom:16px;font-size:32px;line-height:48px;font-weight:700;text-align:left}.icon-page .h2[data-v-148f08dd],.icon-page .icon-tags[data-v-148f08dd] .icon-tags-title,.icon-page[data-v-148f08dd] h2,.icon-page h2[data-v-148f08dd]{font-size:32px;line-height:36px;font-weight:700;letter-spacing:.5px;text-align:left;margin:0 0 30px}.icon-page .h2.is-small[data-v-148f08dd],.icon-page .icon-tags[data-v-148f08dd] .icon-tags-title,.icon-page[data-v-148f08dd] h2.is-small,.icon-page h2.is-small[data-v-148f08dd]{margin:9px 0 15px;font-size:16px;font-weight:700;line-height:24px}.icon-page .h3[data-v-148f08dd],.icon-page[data-v-148f08dd] h3,.icon-page h3[data-v-148f08dd]{margin:9px 0 15px;font-size:24px;font-weight:700;line-height:32px}.icon-page .app-page-subtitle[data-v-148f08dd]{margin:0;font-size:18px;line-height:32px;color:#000}.icon-page .app-page-subtitle.is-big[data-v-148f08dd]{font-size:24px;line-height:32px;font-weight:700;letter-spacing:.1px;margin-bottom:40px}.icon-page .app-page-section.is-header[data-v-148f08dd]{padding:0}@media (max-width:997px){.icon-page .app-page-section.is-header[data-v-148f08dd]{padding-left:1rem;padding-right:1rem}}.icon-page .app-page-section[data-v-148f08dd] .app-native-ads .horizontal{margin-top:10px}.icon-page .app-page-content[data-v-148f08dd]{max-width:650px;margin:0 auto 0 150px}@media (max-width:1150px){.icon-page .app-page-content[data-v-148f08dd]{margin-left:auto}}.icon-page .app-page-content.is-large[data-v-148f08dd]{max-width:1050px}.icon-page .icon-page-story[data-v-148f08dd]{margin:0 auto;font-size:18px;max-width:800px}.icon-page .related-icons[data-v-148f08dd]{margin:10px 0 25px}.icon-page .icon-tags[data-v-148f08dd]{margin-bottom:40px}.icon-page .icon-tags[data-v-148f08dd] .icon-tags-title{display:block;margin-bottom:23px}.icon-page .icon-tags[data-v-148f08dd] .tag{height:32px;border-radius:16px;background-color:#f6f6f6;color:#8c8c8e;line-height:26px}.icon-page .icon-request[data-v-148f08dd]{margin:0 auto;font-size:18px;max-width:800px}.icon-page .icon-story[data-v-148f08dd]{margin:0 auto;font-size:18px;line-height:32px}.icon-page .icon-story[data-v-148f08dd] img{max-width:100%;height:auto!important}@media (max-width:997px){.icon-page .icon-story[data-v-148f08dd] img{height:auto}}.icon-page .story-author[data-v-148f08dd]{display:block;padding:23px;margin:2rem -2.3rem 0;background:#f6f6f6}.icon-page .story-author .app-page-content[data-v-148f08dd]{display:flex;align-items:center}.icon-page .story-author .author-image[data-v-148f08dd]{width:54px;height:54px;border-radius:25px;vertical-align:bottom;margin-right:15px;transition:all .35s ease-out}.icon-page .story-author .author-name[data-v-148f08dd]{font-size:18px;line-height:24px;font-weight:700;color:#474747}.icon-page .request-comments[data-v-148f08dd]{margin-top:2.5rem}.icon-page .request-comments .comment-author[data-v-148f08dd]{color:#9b9b9b;padding-left:24px;position:relative}.icon-page .request-comments .comment-icon[data-v-148f08dd]{position:absolute;left:0;width:16px}.icon-page .request-comments .comment-icon>svg[data-v-148f08dd]{width:100%;fill:currentColor}.icon-page .request-comments .comment-text[data-v-148f08dd]{padding-left:24px;margin-bottom:2.5rem}.icon-page .request-comments .comment-text[data-v-148f08dd]:last-child{margin-bottom:1rem}.icon-page .app-comments[data-v-148f08dd]{max-width:800px;margin:0 auto}.icon-page[data-v-148f08dd] .download-icon .actions .button{margin:6px 8px 0 0}.icon-page[data-v-148f08dd] .similar-icons{display:flex;flex-wrap:wrap;width:100%}@media (max-width:420px){.icon-page[data-v-148f08dd] .similar-icons{justify-content:center}}.icon-page[data-v-148f08dd] .similar-icons .app-icon.is-custom-size svg{height:28px;width:auto}.icon-page[data-v-148f08dd] .similar-icons.is-horizontal>.similar-icons-icon{display:flex;align-items:center;flex-direction:column;justify-content:center;height:96px;border-radius:6px;padding:8px;margin:0 40px 6px 0;white-space:normal;font-size:12px;line-height:16px;color:rgba(0,0,0,.7)}@media (max-width:420px){.icon-page[data-v-148f08dd] .similar-icons.is-horizontal>.similar-icons-icon{margin:0 10px 6px}}.icon-page[data-v-148f08dd] .similar-icons.is-horizontal>.similar-icons-icon span{height:32px;overflow:hidden}.icon-page[data-v-148f08dd] .similar-icons.is-horizontal>.similar-icons-icon.is-active,.icon-page[data-v-148f08dd] .similar-icons.is-horizontal>.similar-icons-icon:hover{background-color:#f6f6f6}",""])}}]);