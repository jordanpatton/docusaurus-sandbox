"use strict";(self.webpackChunkdocusaurus_sandbox=self.webpackChunkdocusaurus_sandbox||[]).push([[89],{895:function(e,t,a){a.d(t,{dK:function(){return n},_k:function(){return r},vc:function(){return l},rx:function(){return i},qo:function(){return s},Hk:function(){return o},Iz:function(){return m}});a(1336);var n=["en"],r=!1,l=null,i="46aa4a6d",s=8,o=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},8665:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(3366),r=a(7294),l=a(6010),i=a(4814),s=a(9960),o="sidebar_q+wC",m="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,n.Z)(e,h),m=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(2263),l=a(8665),i=a(8561),s=a(9960),o=a(5999);var m=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=a(2822);var u=function(e){var t=e.metadata,a=e.items,s=e.sidebar,o=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?o:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(m,{metadata:t}))}},8561:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(7294),r=a(6010),l=a(3905),i=a(5999),s=a(9960),o=a(4996),m=a(2822),c=a(7707),u=a(6753),d="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n",v=a(62),h="image_9q7L";var E=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_8c0z";function f(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",b),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,h,E,b=(h=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,o.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,L=void 0!==w&&w,I=P.date,x=P.formattedDate,y=P.permalink,C=P.tags,M=P.readingTime,B=P.title,R=P.editUrl,S=P.authors,U=null!=(t=k.image)?t:Z.image,A=!L&&T,F=C.length>0;return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=L?"h1":"h2",n.createElement("header",null,n.createElement(E,{className:d,itemProp:"headline"},L?B:n.createElement(s.Z,{itemProp:"url",to:y},B)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:I,itemProp:"datePublished"},x),void 0!==M&&n.createElement(n.Fragment,null," \xb7 ",b(M))),n.createElement(f,{authors:S,assets:k}))),U&&n.createElement("meta",{itemProp:"image",content:_(U,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:c.Z},N)),(F||T)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=L,a))},F&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":A})},n.createElement(v.Z,{tags:C})),L&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:R})),A&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":F})},n.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+B},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5999),l=a(7462),i=a(3366),s=a(6010),o="iconEdit_mS5F",m=["className"],c=function(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(2822);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(c,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(9960),i="tag_WK-t",s="tagRegular_LXbV",o="tagWithCount_S5Zl";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[s]=!c,t[o]=c,t))},m,c&&n.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(5999),i=a(7774),s="tags_NBRY",o="tag_F03v";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);