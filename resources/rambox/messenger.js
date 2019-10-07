function applycss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
 }
applycss(`
/*// BACKGROUNDS /////////////////////////////////////////////////*/

.fbRemindersThickline, .shareRedesignContainer, .shareText, .UFIRow, .fbPhotoSnowlift .rhc, .fbChatSidebar .fbFeedTicker .fbFeedTickerStory, .fbChatSidebar .fbChatSidebarBody, .fbChatSidebar .fbChatSidebarMessage, .fbCalendar .fbCalendarHeader, #fbCalendarWrapper, ._ksg, .fbTimelineStickyHeader .back, .fbTimelineCapsule .timelineUnitContainer, ._4lh .timelineUnitContainer .UFIContainer, ._4lh .timelineUnitContainer .fbTimelineFeedbackActions, ._4lh .timelineUnitContainer .UFIRow, ._4lh .timelineUnitContainer .UFIList, .fbTimelineScrubber, .-cx-PUBLIC-timelineOneColMin__root .-cx-PRIVATE-fbTimelineExternalShareUnit__textWrapper, .uiHeaderTop, ._5rzs .uiHeader, #rightCol ._5rzs .uiHeader.uiSideHeader, .UFICommentActions, .timelineUnitContainer .pageMostRecentPostList, .UFIReplyList, ._552m, .timelineUnitContainer .timelineAudienceSelector .wrap .uiSelectorButton, ._51mz.navigationGrid, .timelineLayout, ._kj3, ._2o49, .uiLayerPage .uiOverlayContent, ._4-u2, div._3a0_ div._3a10, ._1f1f, ._525w, #leftCol .uiScrollableArea.nofade .uiScrollableAreaWrap, #leftCol .uiScrollableArea.fade .uiScrollableAreaWrap, .gradient .rfloat, .gradient .lfloat, .gradient .clearfix, .fbIndex .gradient, .contextualHelp, .uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover, .uiMentionsInput, .uiSideNavCount, .uiStream .uiStreamHeader .uiStreamHeaderChronologicalForm, .uiStream .uiStreamHeader .uiStreamHeaderText, .selectedStoryIndicator, .fbJewel a.jewelButton:active, .fbJewel a.jewelButton:focus, .fbJewel a.jewelButton:hover, #pageLogo a:hover, #pageLogo a:focus, #pageLogo a:active, #pageNav .navLink:hover, #pageNav .navLink:focus, #pageNav .navLink:active, .fbReminders .fbRemindersStory:hover, ._1dsp._4- .clearfix, ._1dst, .uiHeaderSection, .fbNubButton, .fbChatSidebar .fbChatTypeahead .textInput, div.fbChatSidebarDropdown .uiCloseButton, ._4oes .toggle, .uiGrid, .profilePicThumb .img, ._21r, ._7ll, ._7lo, ._558b ._54ng, .fbPhotoSnowlift .rhc, ._53ip ._53ij, .adminPanelMessagesColumn > div:nth-child(1) > div:nth-child(1) > a:nth-child(1), .adminPanelLikesColumn ._5xyd, #admin_panel .uiHeaderTitle, div.phm > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1), .adminPanelInsightsColumn > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1), .notifNegativeBase .fbJewelFlyout .jewelFooter a, .notifNegativeBase .fbJewelFlyout .jewelHeader, #tinymanNavWrapper .fbJewelFlyout .jewelHeader, #fbNotificationsFlyout > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1), .fbTimelineContentHeader h3.uiHeaderTitle, .fbTimelineInlineSectionHeader h3.uiHeaderTitle, ._5vsj .UFIRow.UFIUnseenItem:after, ._4kg._6-j > li:hover, .bottomborder, ._t, #navAccount._4z6w .contextualHelp, #navAccount._4z6w .navigation, .fbPhotoSnowlift .pinnedUfi .UFIAddComment, #fbMessagesFlyout > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1), .fbNubFlyoutInner, ._4-hz, ._569t ._54nf, .uiMenu, .uiToggleFlyout, h3.uiHeaderTitle, .promotedPostContent, .promotedPostFlyoutFooter, .fbPhotoSnowlift .stage, ._53ii ._53ij,  .promotedPost.editPost, ._5w40.fbEventHeader.noCoverImage #fbProfileCover .coverImage:before, ._5e4h._5e2k, ._5e4h ._5e2k, ._5k-a ._5iex, ._58gg .img, .pop_content, ._5vg-, .threadRow.unread, #pageNav #userNavigation, .uiTypeaheadView ul, .uiOverlayContent, div._5abn:nth-child(2), ._2exj #userNavigation, ._bqf._2vp7, ._5n1j, .uiLayerPageContent, ._50d1, ._4k85, ._5w-6, .fbPhotoSnowlift .stageWrapper, ._4t2a, ._1y2l .jewelContent a.messagesContent, ._33c, .uiContextualLayer ul, .uiContextualLayer ._70b, ._6b, .fbMapCalloutMain, tbody td ul ._4o-d:hover, .fbRemindersThickline, .sidebarMode .fbRemindersThickline, .rhcFooterBorder, .uiStream .uiStreamHeader, #navSearch .uiTypeahead, .uiHeaderTopBorder, .ego_unit + .ego_unit, .ego_unit + .ego_appended_units .ego_unit, .-cx-PUBLIC-timelineOneColMin__root .timelineUnitContainer .fbTimelineFeedbackActions, .-cx-PUBLIC-timelineOneColMin__root .timelineUnitContainer .UFIRow, ._4-u2, ._6dh ._1dsl, ._70l, ._6dh ._1dsl, .composerTypeahead .wrap, #mentionsInput, .timelineUnitContainer, ._5vgz, .sidebarMode #globalContainer ._5vgz.fixed_elem, .fbTimelineUnit, #u_ad_2, .fbDockChatTabFlyout, .contextualHelp, ._4d3w .fbPhotoSnowliftContainer .fbPhotosSnowliftFeedbackForm ._467y:after, #fbProfileCover, .home_right_column #pagelet_rhc_ticker .fbFeedTicker .uiScrollableArea.nofade .uiScrollableAreaWrap, .home_right_column #pagelet_rhc_ticker .fbFeedTicker .uiScrollableArea.fade .uiScrollableAreaWrap, ._53ij, .uiTooltipX div, ._58gm ._52m-, .hovercardButtonGroup ._4-rs, .wmMasterView .uiScrollableArea, ._51xa > ._4jy0:last-child , ._6z- .uiScrollableArea, .fbTimelineUFI, .fbxPhoto .fbPhotoContributor, .fbPhotoImageStage .fbPhotosPhotoButtons a, ._25q1, ._4lh .fbTimelineTimePeriodSuppressed .forceLoad, ._4ws, ._4fby:hover, ._4lmi, ._1z0-, ._5nzo, ._1-e0, ._5nw8, ._1d8v.iframeEmbed, ._5w40.fbEventHeader, ._2w3 > ._30f, .pagesProfileFullColumnLayoutDesktopView, ._tun, ._1lot, .pbs._z6j, ._50d1 li, .fbPhotoTagger .faceboxSuggestion, .fbPhotoTagger .typeaheadBackdrop, #workarea_box, ._1y80, ._3iue, .escapeHatchMinimal, ._juy, ._30d, ._kz1, ._5h_u, ._5mwd, .leaflet-popup-tip, .fbTimelineSection.fbPhotosRedesignNavPagelet, .fbPhotosRedesign.fbTimelinePhotoAlbum, #album_pagelet .fbTimelinePhotoAlbums, .fbChatTypeahead ._5t4c, ._10sf, .groups_rhc ._4mr7 ._2pez, ._1w2f, ._5xjz, ._58gc ._5otg, ._3nzk .jewelHeader, ._5lc6, ._57d8, ._2815 ._2817, .fbxWelcomeBoxSmall .fbxWelcomeBoxSmallRow:hover::after, ._16ve, ._26oo ._26op, ._4sp8, ._1j2v, ._2833, ._5wrf, ._4ii7 ._4ii9 ._4iic, ._3ubp, ._5w7z, ._51xa ._517h, ._4qgh, ._6oju, ._19_p, ._3g-3, ._7si, ._4rvc, .mapboxgl-ctrl-group, .fbTimelineStickyHeader .stickyHeaderWrap, ._6hia ._6n_0, #watch_feed ._6x84, ._67zx, ._3dlg + ._3dli, ._30xs, ._33hy, ._3qe8, ._18rk, ._69zd, ._ww-, ._kyy,._63jc, ._440e, ._4ejc, .fbSidebarGripper, ._dpk, ._wyj._20nr, ._19f_, .fbChatSidebar, ._6gen ._6iy5, .tm2miua2 .jjseejtz, ._4ruv ._u5b ._2pin, ._87m1, ._7v3v {
    background-color: #202020 !important;
    text-shadow: 0px 0px 2px #000 !important;
}

html, body, ._4rtl {
    background-image: url("data:image/gif;base64,R0lGODlhBAAEAKECABERESQkJP///////yH5BAEKAAIALAAAAAAEAAQAAAIFhB6nhlIAOw==") !important;
    background-repeat: repeat !important;
    background-color: #181818 !important;
}

.fbIndex .gradient {
    background: #202020 !important;
}

._42g-, ._42fu, ._42gx:focus, ._42gx:hover, ._5k47, ._25q1, ._5w0o, ._4jy0, ._59pe:focus, ._59pe:hover, ._33c._4af, .notifNegativeBase #fbMessagesFlyout .jewelContent a.messagesContent:hover, .notifNegativeBase #fbMessagesFlyout .jewelContent a.messagesContent:active, .notifNegativeBase #fbMessagesFlyout .jewelContent a.messagesContent:focus, .notifNegativeBase #fbMessagesFlyout .jewelContent li.jewelItemNew a.messagesContent:hover, .notifNegativeBase #fbMessagesFlyout .jewelContent li.jewelItemNew a.messagesContent:active, .notifNegativeBase #fbMessagesFlyout .jewelContent li.jewelItemNew a.messagesContent:focus, .fbJewelFlyout li.jewelItemNew, ._5vb_ .home_right_column .fbFeedTicker .tickerStoryActive, ._5vb_ .home_right_column .fbFeedTicker .tickerStoryClickable:hover, ._5e4h ._5e4k, ._1hin._1hio, ._2vp6._2vp7, #pageNav #navAccount .navSubmenu:hover, #pageNav #navAccount .navSubmenu:focus, #pageNav #navAccount .navSubmenu:active, #pageNav #navAccount .selected label.navSubmenu, ._5cag:hover, .uiTypeaheadView .search li:hover, div._5abn:nth-child(1), .navSubmenu:hover, ._kx, .__tw li.jewelItemNew, .jewelItemNew a.messagesContent, ._kv:hover, ._kv, ._1y2l li.jewelItemNew a.messagesContent, ._4af ._33e, label.uiButtonConfirm, ._12js a, ._6a .PageLikeButton, .uiLikePageButton button, ._128p, ._fwr ._fw_._fx0 a, ._698 ._5qo4 ._5t4x a, ._32jt .ego_action button, ._1y2l .jewelContent li a:hover, ._3nzk div#fbRequestsList_wrapper li:hover, ._4ypb, ._44_u li._33c:hover, .fbPhotosRedesignNavSelected.fbPhotosRedesignNavItem, ._55ii, .mlePhotoButtons .mlePhotoButtonLink:hover, #workarea_box ._h5k, ._27nv, ._1a8t, ._1xy2, ._eb3::before, ._3186 ._5g_r:hover ._m_1, ._3186 ._m_1:hover, ._5l37:hover, .fbSettingsList a.fbSettingsListLink:hover, ._3jav, ._2w4n button, ._3s1a a:hover, ._3lrk::before, ._34jx._34jx, ._34jt, ._785p, ._3w8w, ._4pdr hr, ._6l_y:hover, ._1hx1 ._517h._42fs, ._69zg._69zh, ._55lq._tt_, hr._lyj {
    background: #333 !important;
    text-shadow: 0px 0px 2px #000 !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

._54ng li:hover, .uiToggleFlyout li:hover, .jewelContent .messagesContent:hover, .uiContextualLayer ul li:hover, .uiContextualLayer ._70b ._5dsl:hover, ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:hover, ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:focus, ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:active, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .tickerStoryActive, .timelineLayout ._5pr2.fbChatSidebar .fbFeedTicker .tickerStoryActive, ._54ni._3ew_::before, .pbs._z6j ._5ep8, ._599r li._599n, ._5l37:active,._1k1p, ._1ht1._1ht2, ._1ht1:hover, ._2n4z, ._70c9:hover, ._s39:hover {
    background: #333 !important;
     text-shadow: 0px 0px 2px #000 !important;
     -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

.tickerChildSelected, ._128l ._128o, ._128k ._128o, ._kx, ._4k85, ._21dp ._7fw, ._2vw, .mlePhotoButtons .mlePhotoButtonLink, #pagelet_composer form ._2yg._4zz-, #pagelet_composer form ._1hx, .fbChatTypeahead ._5iwm ._58al, ._4oes, ._324a, ._30xv, ._4rv3, ._6lh ._6li, ._30xw, ._70cm, ._70cn {
    background: #121212 !important;
}

._4zoz ._2dck .clearfix, .uiBoxYellow, div._5sun, ._5iyw  {
    background: #202020 !important;
    }

#photos_snowlift, .uiLayer, ._5n6s, ._4d3w .snowliftOverlayBar, ._4fby, ._4_8n, ._3-_8, ._ijg, ._17zz, ._uad, ._6pwe, ._67gt, ._3-yi, ._5ls0, ._30vo , ._7hmm, ._7hmn, ._4qn1, ._3k0k, ._lym, ._u_3, ._83co {
    background-color: rgba(0,0,0,.70) !important;
}

._204y ._2uto._5e4h, ._6pw1, ._15nj, ._3l4b ._3l4c, ._1hwy, .stars_breakdown .gray_bar, ._707k, ._4t2a div._4-i2 ._55ii, ._9h0, ._81ga, ._84ki {
    background-color: rgba(0,0,0,.3) !important;
}

._1vkw, ._7jy4 ._7lxt, ._6vhx {
    background-color: rgba(0,0,0,.2) !important;
	transition: .4s;
}

._204y ._2uto._5e4h ._5e4k {
    background-color: #888 !important;
}

._2utn {
    color: #aaa !important;
}

._4f7s {
    background-color: #a3ce71 !important;
}

._32o5 {
    background-color: #54c7ec !important;
}

._30v-, .fbPhotoSnowliftContainer .stage, .fbxPhoto .fbPhotoImageStage .stageContainer, ._4-of, ._3-4e ._3-4f, ._5sjs, ._3-_8, .exploded ._6ks, ._4ici, ._463h, ._1-2t, ._19dw, ._69zm, ._69zg, ._70ck, ._70cl, ._360g, ._2l7q, ._5_yj {
    background: #000 !important;
}

.displayedTickerToggleWrapper .tickerLineToggle, .sidebarMode .fbRemindersThickline, .uiStream .uiStreamHeader, .bottomBorder, .hasSmurfbar #blueBarHolder #blueBar:after, .uiDataTable th, #admin_panel h2.uiHeaderTitle, ._5q5b .fbNubFlyoutTitlebar, ._5t_y ._1dsl li:after, ._51mz, .app_center .uiSideNav .divider, .fbTimelineTopSectionBase .topSectionBottomBorder, ._6z- .uiHeaderNav, ._2d11, ._2d12, ._5dro, ._2gsf, ._hdd:after, ._4f7n:after, ._51_u:after, ._3j6, ._25q1, ._z6j ._42fu, ._yn1 ._394m a, ._4d3w .rightButtons .fbPhotosPhotoActions .uiButton, ._12js._12js._12js ._4er2, .__0k._47xt .openToggler, ._525w, ._5plv .uiSideNav .selectedItem .item, ._5plv .uiSideNav .item:hover, #pagelet_timeline_medley_friends .FriendButton, #event_invite ._5xed .uiTypeahead .innerWrap, #reaction_profile_browser1 .FriendButton, #reaction_profile_browser2 .FriendButton, #reaction_profile_browser3 .FriendButton, #reaction_profile_browser4 .FriendButton, #reaction_profile_browser5 .FriendButton, #reaction_profile_browser6 .FriendButton, ._7lt ._7lx ul, ._cw8 .FriendButton, ._5jjd, ._64lx ._275- ._517h, ._5qf- ._5qg2 ._5qg3 ._517h, #supporter_card ._2ph_ ._51mx, ._5kun .FriendButton .enableFriendListFlyout._517h, ._440e::after, .fbChatOrderedList ._42fz:hover, #seo_video_breadcrumb, ._5lqg ._7tw, ._6-xk a._6-xf {
    background: transparent !important;
}

.uiSelectorButton.uiButton.uiButtonSuppressed.uiButtonNoText, ._3-a6 .UFICommentActorAndBody._3re2, ._3-a6._1blz .UFICommentActorAndBody._3re2, ._3eqz ._3ekx button._517h, ._5eut ._517h, ._1hl6 ._8y9 a._517h, ._6qw3._7jx3, ._6qw3._7jxd {
    background-color: transparent !important;
}

._55bh:after, ._4a0x ._5pd7, ._202.selected, ._47__::before, ._352g, a._tuq::before, ._5y5a ._5n15 ._5n1d::after, ._bjx, ._xu, ._5h2p, ._29jg, ._5dwa ._45hc._1hqh ._c1c {
    background: #555 !important;
}

._5vb_ ._64lx._dcs:hover .__c_::after, ._64lx._2bf7._dcs:hover ._52c6, ._64lx ._52c6:hover, ._7tw {
    background-color: rgba(0, 0, 0, .08) !important;
}

._3t3 {
	box-shadow: none;
	transition: .3s
}

._3t3:hover, ._81u_ {
    box-shadow: inset 0 -50px 5px rgba(255, 255, 255, .08) !important;
	transition: .4s
}

._3cz ._1_ca{
    background: linear-gradient(to right,rgba(255, 255, 255, .08), transparent) !important;
}

._4b6::after, ._a19:before, ._5vsj .UFIRow.UFIUnseenItem::after, ._xu:hover, ._3jav._3el7 {
    background: #999 !important;
}

.tickerDialogContent ul li:hover, .fbIndexMobile, .uiToggleFlyout ._6a, #fbRequestsFlyout ._6a, .tickerDialogContent .textInput, #pagelet_bluebar #u_0_i, #fbRequestsList li:hover, #contentCol, .timelineLayout, ._li, #pageFooter table, ._4kg._703 > li ._6a, ._2w3 > ._30f ._6b, ._69l span, .uiHeaderTop, ._5vf h3.uiHeaderTitle, .uiProfileBlockContent ._6a, ._3cz button, #timeline-medley ._4-rr a, ._ksg, ._4kg._6-j > li:hover, .ruResponseSectionContainer ._6a, .uiHeader h3,  .friendBrowserAuxAlignMiddle ._3-99, ._z6j, .fbFeedTicker .tickerStoryHidden, .fbFeedTicker .tickerStoryHidden:hover, ._5r5f, ._32jz.ego_unit, ._1rs ._24g ._211 a, #pagelet_web_messenger ._51xa button, #event_button_bar .fbEventClassicButton, #event_button_bar .fbEventClassicButton a, ._5dd8 a, .fbTimelineStarGridSeparator, ._12jp.small, .friendBrowserUnit a, .ellipsis ul, ._43q9 ._4cg3, span._52m- ._3spg, .fbTimelineLogStream div, ._5kun, #profile_page_insights_hubble ._kgb a, ._50d1, ._1sdf::before, ._7s1x ._3s6x {
    background: none !important;
}

._1mib ._4h2m, ._1mib, ._36lv._36lw, ._34jv:hover ._34jx, ._34jt:hover, ._3w8w:hover {
    background-color: #222 !important;
    background-image: none !important;
}

._1krc {
    background: transparent linear-gradient(to top, rgba(0, 0, 0, 0.82), transparent 40%) repeat scroll 0% 0% !important;
    bottom: 44px !important;
    border-radius: 0px !important;
    left: 0px !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0px !important;
}

._3s6x, ._jlw::after {
    background: linear-gradient(transparent, rgba(0, 0, 0, .8)) !important;
}

._3g14, ._qzf {
    background: rgba(0, 0, 0, .5) !important;
}

._5r8l .uiScrollableArea.contentAfter::after {
    background: linear-gradient(transparent, #202020) !important;
    border-radius: 0 !important;
    height: 30px !important;
}

._33c.jewelItemNew, ._l2h, ._6lze:hover, ._5r8a._5r8b {
background-color: #333333 !important;
}

._206m .fbNubFlyoutTitlebar, ._jk5, ._30-y {
background-color: #303030 !important;
}

._3-a6 .UFICommentActorAndBody, ._6864, ._68r3, ._6qw3, ._1-37, ._zur ._zvf, ._6s-6, ._138k, ._6w8- {
background-color: #282828 !important;
}

._5vb_ ._6l-, ._266m, ._2666, ._2667, .stars_breakdown .white_bar, .___n, ._80r- {
    background: #fff !important;
}

._70cc, ._2qs2 ._2qsl {
    background-color: #fff !important;
}

._21-d._30vn {
    background: #fff !important;
	background-image: linear-gradient(45deg, #e9ebee 25%, transparent 25%, transparent 75%, #e9ebee 75%, #e9ebee), linear-gradient(45deg, #e9ebee 25%, transparent 25%, transparent 75%, #e9ebee 75%, #e9ebee) !important;
	background-position: -3px -3px, 7px 7px !important;
background-size: 20px 20px !important;
display: inline-block;
position: relative;
text-align: left;
width: auto;
}

._3-ug {
    background-color: #80d4c4 !important;
}

._354z, ._18pe, ._3-a6._4eno .UFICommentActorAndBody._4ql9, ._3-a6 .UFICommentActorAndBody._4ql9 {
    background-color: #42b72a !important;
    border-color: #202020 !important;
}

._z79, ._4ps5, ._1r00, ._5-23, ._80re {
    background-color: #4080ff !important;
}

._19w2, ._30xy, ._3z55, ._69zl {
    background-color: #fa3e3e !important;
}

.___a {
    background-color: #b73749 !important;
	border-color: #b73749 !important
}

.___n .timestampContent {
    color: #b73749 !important;
	text-shadow: none;
}

._2gxh, ._5a2z  {
    background: #1479fb !important;
}

._3p46, ._70ca, ._6ij_, ._63yy ._63yz._63yz, ._7rtz  {
    background: #3578e5 !important;
}

._zur {
    background: linear-gradient(#ded5e9 80%, #282828) !important;
}

._48jh {
	background-color: #fff !important;
}

._39f5 ._48jh {
    background-color: #20375f !important;
}

._35ph[style*="background-color:#1c1e21;"], ._6-d._6-d #fbProfileCover ._37fg {
    background-color:#111 !important;
}

._672g._6g9k[style="background-color: rgb(66, 103, 178);"] {
	background-color: rgb(66, 103, 178) !important;
	color: #fff !important;
}

._672g._6g9k[style="background-color: rgb(141, 148, 158);"] {
	background-color: rgb(141, 148, 158) !important;
	color: #fff !important;
}

#bizsitePageContainer ._4u-c ._1pm3, ._7m4i {
	background: #202020 !important;
}

._4llw:hover, ._4f3b:hover, ._4f3b:focus, ._1u6r:hover, ._1u6r:focus {
	background-color: rgba(255, 255, 255, .05) !important;
	transition: .5s;
}

._dsx[style*="background: rgb(88, 144, 255)"] {
	background: rgb(88, 144, 255) !important;
}

._dsx[style*="background: rgb(53, 120, 229)"] {
	background: rgb(53, 120, 229) !important;
}

._dsx[style*="background: rgb(240, 186, 21)"] {
	background: rgb(240, 186, 21) !important;
}

._dsx[style*="background: rgb(242, 82, 104)"] {
	background: rgb(242, 82, 104) !important;
}

._dsx[style*="background: rgb(247, 113, 75)"] {
	background: rgb(247, 113, 75) !important;
}

._dsx[style*="background: rgb(32, 120, 244)"] {
	background: rgb(32, 120, 244) !important;
}

._dsx[style*="background: rgb(233, 113, 15)"] {
	background: rgb(233, 113, 15) !important;
}

._dsx[style*="background: rgb(243, 62, 88)"] {
	background: rgb(243, 62, 88) !important;
}

._dsx[style*="background: rgb(247, 177, 37)"] {
	background: rgb(247, 177, 37) !important;
}

._31-o {
    background: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0)) !important;
}

._31-p {
    background: linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0)) !important;
}

._2e7u {
	background-color: #f7923b !important;
}

/*// GENERAL /////////////////////////////////////////////////////*/

body * {
    border-color: transparent !important;
    background-color: transparent !important;
    color: #888 !important;
}

/*// LINKS ///////////////////////////////////////////////////////*/

body * {
    text-decoration: none !important;
}

a, a._gre div._7_v, a._gre div._9_v, #js_40 > span:nth-child(1), .uiTypeaheadView .bucketed .header .text, .profileLink span, a span, #birthday_reminders_link strong, ._2c44 ._2f6b span, ._26oo ._26op, ._l53 span, ._3-8x, ._46yc._46yc ._5kx5, ._6pw9, ._6pwb, ._5qg7, ._4u_q._2iem, ._43rm, .UFICommentActorName, ._62l8, ._34k3, ._-2g, ._-2h, ._1hx3:hover ._1hx5, ._3ed4 ._1xhv, ._bui .selectedItem ._5afe .linkWrap, ._2iem._50f7 ._3vwb, ._3mvr, ._5vwz a ._4xjz, ._202.selected ._19bk, ._778s, ._6lh ._5hv6 ._6ln.ellipsis a, ._778s, ._6lh ._5hv6 ._6lq.ellipsis a, ._6lh ._5hv6 ._6lo.ellipsis a, ._18z5 ._6ceh ._2iev, ._6yhd, ._3ytq, ._601h ._h1k a span, ._43o4 ._3jq3 a:hover span, ._d6s, ._5dw9 ._38my, ._55oc, ._6ojt, ._55y4 .homeSideNav .navHeader .sectionDragHandle, #userNav ._bui ._5afe .linkWrap, ._s39:hover ._n22, ._yw7:hover ._5vaf, ._yw6:hover ._2-o9, ._4u2l, ._5j8e ._55k2, ._55k1, ._4ik6, ._55oc div, ._3bcf, ._3bcg, ._c24, a ._50f4, ._7jo_ ._5dwa ._38my, ._28y3 ._6bfj a div, .a6y00v3l .q66pz984, ._3slj a div, ._20zc, ._5vl5 ._5xhk, ._1oa3, ._1oa5, ._20zb ._20zf, ._51xa._5hgz button:hover, ._2iar._5aj7 button:hover, .ihx95mk1 ._2xaj ._4ik6 span, ._3qnu span, .gj74ymbk.jenc4j3g ._4ik6 span, ._4ovi, ._3qb_, ._1d6i a div, ._6vhx ._6vhz span, ._2tyk ._3653 div, ._205d ._3cnp  {
    text-decoration: none !important;
    color: #ccc !important;
    transition: color .3s;
}

a:hover, a._gre:hover div._7_v, a._gre:hover div._9_v, #js_40 > span:nth-child(1):hover, .uiTypeaheadView .bucketed .header .text:hover, .profileLink span:hover, a span:hover, #birthday_reminders_link:hover strong, .fwb, ._6lh ._6lp ._50hf, ._6lh ._6lp a, ._6lh ._6lp ._6lo, ._58gi span, ._58gh div._58gj, .ellipsis, ._2c44 ._2f6b span:hover, ._5h6m, ._62l9, ._mx9.verbose:hover ._mxb ._nbt, ._54ni:hover ._54nh ._2ezy, ._2iev, ._67gu, ._1iyt, ._1itu:hover ._6otr, ._1itt ._6otr, ._1itu:hover ._2pih, ._1itt ._2pih, .UFICommentActorName:hover, ._2662, ._797s ._796a, ._39f5 ._48jq, ._1qf0, ._1hx1 ._517h._42fs, ._1hx6 ._1hx3 ._1hx5, ._5ls1, ._30vo, ._5vwy a ._4xjz, ._4zpn, button:hover ._6yhd, ._3ytq:hover, ._5ce6 ._23p a:hover, a:hover ._50f4, ._5-_9 ._5u5j span, ._28y3 ._6bfj a:hover div, .a6y00v3l .q66pz984:hover, ._3slj a:hover div, ._3o_h, .ihx95mk1 ._2xaj a:hover ._4ik6 span, ._3el6 a .z6erz7xo span, .af0cpkj9:hover .gj74ymbk.jenc4j3g ._4ik6 span, ._205d ._3cnp:hover  {
    text-decoration: none !important;
    color: #fff !important;
    transition: color .4s;
    text-shadow: 0 0 3px #000, 0 0 1px #666 !important;
}

._zvc, ._zvd, ._70cd a span:hover, ._2xaj, ._2xaj a span {
    color: #121212 !important;
    text-shadow: none;
}

._ezo[style*="color: rgb(235, 101, 117);"], ._3yzm[style*="color: rgb(235, 101, 117);"] span {
	color: rgb(235, 101, 117) !important;
}

._ezo[style*="color: rgb(241, 118, 94);"], ._3yzm[style*="color: rgb(241, 118, 94);"] span {
	color: rgb(241, 118, 94) !important;
}

._ezo[style*="color: rgb(230, 72, 239);"], ._3yzm[style*="color: rgb(230, 72, 239);"] span {
	color: rgb(230, 72, 239) !important;
}

._ezo[style*="color: rgb(88, 64, 155);"], ._3yzm[style*="color: rgb(88, 64, 155);"] span {
	color: rgb(88, 64, 155) !important;
}

._ezo[style*="color: rgb(176, 55, 123);"], ._3yzm[style*="color: rgb(176, 55, 123);"] span {
	color: rgb(176, 55, 123) !important;
}

._ezo[style*="color: rgb(219, 131, 28);"], ._3yzm[style*="color: rgb(219, 131, 28);"] span {
	color: rgb(219, 131, 28) !important;
}

._ezo[style*="color: rgb(112, 158, 225);"], ._3yzm[style*="color: rgb(112, 158, 225);"] span {
	color: rgb(112, 158, 225) !important;
}

._ezo[style*="color:#B0377B;"] {
	color: #B0377B !important;
}

._ezo[style*="color:#eb6575;"] {
	color: #eb6575 !important;
}

._ezo[style*="color:#F1765E;"] {
	color: #F1765E !important;
}

._ezo[style*="color:#E648EF;"] {
	color: #E648EF !important;
}

._ezo[style*="color:#58409B;"] {
	color: #58409B !important;
}

._ezo[style*="color:#DB831C;"] {
	color: #DB831C !important;
}

._ezo[style*="color:#709ee1;"] {
	color: #709ee1 !important;
}

._50f7, ._27w7 ._6k2-._6k2-, ._3l-d , ._1vx9 span, ._2za- div, ._5bkf span, ._7hmm, ._69zk, ._63-_, ._6wkl, ._5ce6 ._23p, ._5ce6 ._23p a, ._1a9s._3-8x[style="color:rgba(255,255,255,1.00)"], ._1a9s._3-8x[style="color:rgba(255,255,255,1.00)"] a, ._77p6, ._4ik6, ._336m, .q6feio67 span, ._3-a6._4eno .UFICommentActorAndBody._4ql9 ._6b *, ._3-a6 .UFICommentActorAndBody._4ql9 ._6b, .ljqsnud1 ._4ik5._4ik4, ._1d6i:hover a div, ._3qb_:hover, ._5xdz, ._5xdy {
    color: #fff !important;
}

._39g6, a._39g5._6ne8 div, ._5vwy a ._4jq5, ._41wb, ._3mdb div, ._3mdb li, ._3mde._3mde, ._4w9s, ._4f2c, ._4f2d, ._2ph_ div, ._63yy ._63yz._63yz, ._6-xo, ._364g  {
    color: #ddd !important;
}

._18z5  ._2iev, ._70cd a span, ._55k3, ._5fby ._55j_ {
	color: #888 !important;
	text-shadow: none !important;
}

._27w7 ._6k2-._6k2-:hover, ._4-u2._7rtx  {
	background-color: transparent !important;
	border: none !important;
	box-shadow: none !important;
}

._70c9 span[style*="color: rgb(53, 120, 229)"], ._ds- span[style*="color: rgb(53, 120, 229)"] {
	color: rgb(53, 120, 229) !important;
}

._ds- span[style*="color: rgb(88, 144, 255)"] {
	color: rgb(88, 144, 255) !important;
}

._ds- span[style*="color: rgb(240, 186, 21)"] {
	color: rgb(240, 186, 21) !important;
}

._ds- span[style*="color: rgb(242, 82, 104)"] {
	color: rgb(242, 82, 104) !important;
}

._ds- span[style*="color: rgb(247, 113, 75)"] {
	color: rgb(247, 113, 75) !important;
}

._48jh .fwb a, ._48jh ._48jq, ._48jh ._48jr span {
    color: #444 !important;
    text-shadow: none;
}

._48jh .fwb a.profileLink:hover, ._48jh ._48jr span:hover {
    color: #000 !important;
    text-shadow: none !important;
}

._39f5 ._48jh ._48jq, ._39f5 ._48jh ._48jr span {
    color: #bbb !important;
    text-shadow: none;
}

._39f5 ._48jh ._48jr span:hover {
    color: #ddd !important;
    text-shadow: none;
}

._2pz9 span {
	color: #5890ff !important;
}

._64lx ._2iau._oq1 ._1t62 div {
    color: #e04c60 !important;
}

._3058._2ygi ._61ag {
	color: #fff !important;
}
._3058._2ygi {
	background-color: rgba(251,70,70,.6) !important;
	padding: 2px 10px;
	border-radius: 20px
}

/*// TEXT SHADOW NONE ////////////////////////////////////////////*/

html ._4jy0, html .gecko ._4jy0, ._5em9, ._4-i0, ._502f .rhcFooterWrap, ._502f .rhcFooterWrap a, ._5w1r, ._5594, ._2xh1, ._2xh2, ._51mx:last-child > ._51m- a:hover, ._5ia1 ._5ia2 table tbody tr td p a, ._5ia1 ._5ia2 table tbody tr td:first-child, ._206m:hover ._3ed4 ._1xhv, ._6pw3 div, ._797s ._796a:hover, ._797s ._796a, ._70cd, ._3mde._3mde, ._3ts, ._3tr a, ._43o4 ._3jq3 a:hover span, ._77p6, .m9osqain, ._3-a6._4eno .UFICommentActorAndBody._4ql9 ._6b *, ._3-a6 .UFICommentActorAndBody._4ql9 ._6b {
    text-shadow: none !important;
}

/*// MAIN TOOLBAR ////////////////////////////////////////////////*/

.slim #blueBar, ._hdd, ._4f7n, ._51_u, ._zpj, ._83k, ._3qe8 {
    background: #202020 !important;
    box-shadow: 0 0 15px #000000 !important;
    border-bottom: 2px solid rgba(0,0,0,.7) !important;
    text-shadow: 0px 0px 2px #000 !important;
}

._53jh, ._2t-a._50tj {
    background: #202020 !important;
    background-image: none !important;
    box-shadow: 0 0 15px #000000 !important;
    border-bottom: 2px solid rgba(0,0,0,.7) !important;
    text-shadow: 0px 0px 2px #000 !important;
}

._2s1x ._2s1y {
    background: #202020 !important;
}

._2s1y {
    box-sizing: border-box;
    height: 42px;
    }

#u_0_i._4u90, #u_0_j._4u91, ._1k69, ._4u91, ._2ph_ ._2q1a {
    box-shadow: none !important;
    border: transparent !important;
}

._2s1x ._2s24::before {
    background: #333 !important;
}

._4kny #u_0_i, ._4kny #u_0_i:hover, ._5w7z::before {
	border-color: transparent !important;
}

._4kny a, ._4kny a ._6qfu  {
	transition: .4s;
}

/*// TEXTAREAS ///////////////////////////////////////////////////*/

.UFICommentContainer, ._3b .uiSearchInput, .__wu ._539-.roundedBox .innerWrap, ._2pt, ._4a_i, .menu_login_container .inputtext, #registration_container ._58mf .uiStickyPlaceholderInput .placeholder, #registration_container  ._58mq select,  ._50mz .fbNubFlyoutFooter textarea, .fbChatSidebar ._5q88.fbChatTypeahead .textInput, ._kj3 .uiSearchInput, ._5id1 textarea, html ._55r1, .innerWrap, ._416u ._56ji, .eventsCreate .eventsWhat, ._u48, ._2l5f > .uiSearchInput > span, ._3i2n, textarea._4xd9, ._4zoz ._59_n, #event_invite ._5xed .uiTypeahead .wrap, .mleFormOuterContainer .inputOuter textarea, .mleFormOuterContainer .inputOuter input, .mleGrid .mleTagTokenizer, .mleGrid .mleLocTypeahead .wrap, .mleGrid .mlePlaceTypeahead .wrap, .uiProgressiveDatepicker .periodSelected .periodMenu, ._5s06 .relationSelector, ._5xjz ._30p_, ._3egg._3egg, ._4bl7 ._59_m, ._31qg ._4sjs, .fbSettingsList .inputtext, .fbSettingsList select, .fbSettingsEditorFields .inputtext, .fbSettingsEditorFields textarea, ._50f4 ._59_m, ._58mf .uiStickyPlaceholderInput, ._58mq select, ._2ph_ .uiGrid ._51mx, ._2ph_ ._2q1a, ._4g2i ._64et label, ._3878 ._5yk1._f6a, div[data-testid="event-create-dialog-cohosts-field"] label._58ak._3ct8, ._4b7j._53rs._642b, ._2bx7, ._2dw0, .profileApprovalRow .UFIAddComment .UFICommentContainer, ._r8e ._2pgc, ._2ph_._3-96 .uiSearchInput, ._1rwk, ._1hx1 ._58ak, ._30xw ._30_0 {
    border-bottom: 1px solid rgba(255,255,255,.18) !important;
    border-radius: 3px !important;
    box-shadow: inset 0px 1px 5px 0px #000 !important;
    border-top-color: #000 !important;
    border-right-color: #111 !important;
    border-left-color: #111 !important;
    background-color: #141414 !important;
}

.__wu ._539-.roundedBox .uiSearchInput span {
    border-bottom: 1px solid rgba(255,255,255,.18) !important;
    margin-top: -1px !important;
}

._4g2i ._64et label, ._4b7j._53rs._642b {
    border-radius: 45px !important;
}

._5pcr .UFICommentContainer, ._2dw0, .fbPhotosSnowboxFeedbackInput .UFICommentContainer, .UFIReplyList .UFICommentContainer, .profileApprovalRow .UFIAddComment .UFICommentContainer, ._8u .UFICommentContainer, ._1rwk, ._63yy ._63yz._63yz {
    border-radius: 16px !important
}

._4dv- ._58ak, ._30xw ._30_0 .innerWrap, .fbTimelineComposerUnit ._1idc ._59_n{
    border-color: transparent !important;
    box-shadow: none !important;
    background: transparent !important;
}

._5iwm ._58al, ._62tb label._4b7j._53rs {
	border-radius: 0 !important;
}

._2xhi ._58al::placeholder {
	color: #888;
}

/*// BOX SHADOW //////////////////////////////////////////////////*/

.fbRemindersThickline, .sidebarMode .fbRemindersThickline, .rhcFooterBorder, .uiStream .uiStreamHeader, #navSearch .uiTypeahead, .uiHeaderTopBorder, .ego_unit + .ego_unit, .ego_unit + .ego_appended_units .ego_unit, .-cx-PUBLIC-timelineOneColMin__root .timelineUnitContainer .fbTimelineFeedbackActions, .-cx-PUBLIC-timelineOneColMin__root .timelineUnitContainer .UFIRow, ._4-u2, ._6dh ._1dsl, ._6dh ._1dsl, .composerTypeahead .wrap, #mentionsInput, .timelineUnitContainer, ._5vgz, .sidebarMode #globalContainer ._5vgz.fixed_elem, .fbTimelineUnit, #u_ad_2, .fbDockChatTabFlyout, .contextualHelp, .uiToggleFlyout,  .uiContextualLayer ._70b, ._4t2a, ._53ij, #fbProfileCover, .back, .tickerDialogContent, .uiTooltipX .tooltipContent, .uiTypeaheadView, .uiTypeaheadView .bucketed ul, ._53ip ._53ij, ._53ii ._53ij, .uiTypeaheadView ul, ._53vr.uiScrollableArea, ._2n_z ._54nf, ._569t ._54nf, ._54nf, ._t, .uiScrollableArea, ._kj3, ._552h._n4k, .fbTimelineUFI, .fbxPhoto .fbPhotoContributor, .uiBoxOverlay, .pop_content, ._4lh .fbTimelineTimePeriodSuppressed .forceLoad, .uiOverlayContent, ._2o49, ._44_u, ._4mq3._4cft, ._17hc._iu-, ._5nzo, ._1-e0, ._5nw8, ._1d8v.iframeEmbed, ._5w40.fbEventHeader, ._2w3 > ._30f, .pagesProfileFullColumnLayoutDesktopView, ._tun, ._1lot, .pbs._z6j, ._5tlx, ._50d1 li, .fbPhotoTagger .typeaheadBackdrop, .fbPhotosPhotoTagboxBase .tagName, #workarea_box, ._1y80, ._3iue, .escapeHatchMinimal, ._juy, ._30d, ._5mwd, .leaflet-popup-tip, #album_pagelet .fbTimelineSection.fbPhotosRedesignNavPagelet, .fbPhotosRedesign.fbTimelinePhotoAlbum, #album_pagelet .fbTimelinePhotoAlbums, ._htj ._4-u8, ._599r, ._5lc6, ._qk8, ._5ay5._2h4v._137a, .fbNubFlyoutInner, ._11qy ._4-u2, .uiContextualLayer ._21es, ._3d9q, ._5w7z, ._4qgh, ._6oju, ._19_p, ._7si, ._4rvc, .fbTimelineStickyHeader .stickyHeaderWrap, #watch_feed ._6x84, ._67zx, ._206m .fbNubButton, ._30xv, ._30xs, ._18rk, ._69zd, ._70kk, ._ww-, ._kyy, ._53j5, ._63jc, ._440e, ._1unj, ._wyj._20nr, ._16gj #permalink_video_pagelet, .fbChatSidebar, ._6gen ._6iy5, .tm2miua2 .jjseejtz, ._87m1, ._7v3v {
    box-shadow: 0px 0px 4px 0px #000 !important;
    text-shadow: 0px 0px 1px #000 !important;
}

.fbTimelineComposerCapsule, .fbChatSidebar .fbChatSidebarMessage, .fbChatSidebar .fbChatTypeahead .textInput, ._4oes .toggle, .fbNubButton, ._585-, ._5vb_ ._dcs, ._4lh ._1xw:hover ._1xz, .fbCalendar ._5pr2.fbChatSidebar, ._1t4w ._5pr2.fbChatSidebar, .timelineLayout ._5pr2.fbChatSidebar, .timelineLayout ._5pr2 ._4oes, .fbCalendar ._5pr2 ._4oes, ._1t4w ._5pr2 ._4oes, ._5vb_ ._5pr2 ._4oes, ._nws, .uiHeader, #mentionsInput, .fbTimelineComposerUnit,  #pagelet_bluebar #u_0_i, ._5ahz, ._5kjq div, .uiContextualLayerBelowLeft div, ._dcs, .mtm ._4-u2, .business_id .uiScrollableArea, #rightCol .uiScrollableArea, form .uiScrollableArea, ._2nj .uiScrollableArea, ._3v_l .uiScrollableArea, ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:hover, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .tickerStoryActive, ._5q5b ._50mz .titlebar .button, ._5q5b ._50mz .titlebar .titlebarTextWrapper a, ._50mz .fbNubFlyoutHeader span a, ._1nc7 ._5w1r span a, ._1nc6 ._d97 span a, ._5r8e ._5r85 ._5r88 a, ._5r8e ._5r85 ._5r86, ._32jz.ego_unit, ._xxu, #event_guest_list div, #event_invite div, #event_related_events div, div._4-i2 .uiScrollableArea, ._3nzp .uiScrollableArea, ._htj div, ._53ii ._53ij .uiScrollableAreaWithShadow, html ._51tl:focus, html .gecko ._51tl:focus, ._51mz .uiScrollableArea, .tickerDialogContent, ._4-i0 ._5upp:focus, ._5xjz .uiScrollableArea, ._14vf ._alj._4-u2, ._2q5c #fbProfileCover, ._alk._1axm, ._11qy, ._4n6y .uiScrollableArea, ._3d9q ._4-u2, #supporter_card ._2ph_ ._51mx, ._lwx ._4ea4, ._55ln, ._18vj:not(._6dc1), ._2kcg ._ww-, .permalinkPost ._4-u2, .e130ypa6 .uiScrollableArea {
    box-shadow: none !important;
    text-shadow: 0px 0px 2px #000 !important;
	transition: .4s
}

._11qy ._4-u2  {
    margin:0 2px 2px 2px !important;}

#stories_pagelet_rhc ._11qy {
    padding-right: 0 !important;
    padding-left: 0 !important;
}

._2833 {
    box-shadow: 8px 0 16px 4px #000 !important;
}

._1bkz, ._4-u2._7rtx {
	background-color: #282828 !important;
	border: 1px solid  #151515 !important;
	box-shadow: none !important;
	transition: .4s;
}

._1bkz:hover {
	box-shadow: inset 0px -63px 0 #303030 !important;
	transition: .4s !important;
}

._1vkw:hover, ._6vhx:hover {
	box-shadow: inset 0px -176px 0px rgba(0,0,0,.2) !important;
	transition: .4s;
}

._3_e8._7slg::before {
    box-shadow: 0 1px 1px 0 rgba(255, 255, 255, .11)
}

/*// BORDERS /////////////////////////////////////////////////////*/

.uiStream .uiStreamHeader .uiStreamHeaderChronologicalForm, .uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover, .uiMentionsInput, .uiSideNavCount, .uiStream .uiStreamHeader .uiStreamHeaderChronologicalForm, .uiStream .uiStreamHeader .uiStreamHeaderText, .selectedStoryIndicator, .fbJewel a.jewelButton:active, .fbJewel a.jewelButton:focus, .fbJewel a.jewelButton:hover, #pageLogo a:hover, #pageLogo a:focus, #pageLogo a:active, #pageNav .navLink:hover, #pageNav .navLink:focus, #pageNav .navLink:active, .fbReminders .fbRemindersStory:hover, ._42g-, ._42fu, ._42gx:focus, ._42gx:hover {
    border-radius: 3px !important;
}

._5vb_ .home_right_column .fbFeedTicker .tickerStoryActive, ._5vb_ .home_right_column .fbFeedTicker .tickerStoryClickable:hover, ._5otg::after, ._5kjq div, .uiContextualLayerBelowLeft div, ._1tn3 ._4vui, ._50mz .emoticonsPanel, ._1tn3, ._270u::before, ._580d::before, ._2qgs::before, ._14vf ._alj._4-u2, .fbxWelcomeBoxSmall .fbxWelcomeBoxSmallRow:hover::after, ._19_p::before, #supporter_card ._2ph_ ._51mx, ._lwx ._4ea4, ._30_4:empty, ._440e::before, #fbPhotoSnowliftFeedbackActions ._18vi a:hover, ._2kcg ._ww-, .permalinkPost ._4-u2, ._87m1::before  {
    border-color: transparent !important;
}

._4kg > li, .shareRedesignRightBorder, .shareRedesignTopBorder, .shareRedesignBottomBorder, .uiSearchInput, .fbChatSidebar .fbFeedTicker .fbFeedTickerStory, .rhcFooterBorder, .fbTimelineCapsule .timelineUnitContainer, .-cx-PUBLIC-timelineOneColMin__root .-cx-PRIVATE-fbTimelineExternalShareUnit__textWrapper, .uiHeader, ._2yg .composerTypeahead, ._2yg .composerTypeahead .wrap, #admin_panel .uiHeaderSectionBorderLeft, ._6-d #fbProfileCover .coverNoImage, ._6-d #fbProfileCover .coverBorder, #fbProfileCover .coverBorder, ._5vsj .UFIReplyList .UFIComponent.UFILastComponent:after, ._5vsj .UFIReplyList .UFIComponent.UFIFirstComponent:after, html ._mj._mj ._519b ._2wr, ._a19:before, #rightCol ._5rzs._5v6d ._5v6e > .pagelet:first-child > div:first-child .uiHeader.uiSideHeader, #rightCol ._5v6e .pagelet:not(:empty) .uiHeader, ._5v3q ._47we, ._6z- .uiHeaderNav, ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:hover, ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:active, .fbFeedTicker .tickerStoryHidden, .fbFeedTicker .tickerStoryHidden:hover, #event_guest_list div, #event_invite div, #event_related_events div, #pages_manager_top_bar_container a:hover, ._53im ._53ij div.tickerDialogContent, ._3d9q ._4-u2, ._6oju::before, .fbInternPreview ._5pcb ._4-u2  {
    border: none !important;
}

.fbRemindersThickline, .sidebarMode .fbRemindersThickline, .rhcFooterBorder, .uiStream .uiStreamHeader, #navSearch .uiTypeahead, .uiHeaderTopBorder, .ego_unit + .ego_unit, .ego_unit + .ego_appended_units .ego_unit, .-cx-PUBLIC-timelineOneColMin__root .timelineUnitContainer .fbTimelineFeedbackActions, .-cx-PUBLIC-timelineOneColMin__root .timelineUnitContainer .UFIRow, ._4-u2, .composerTypeahead .wrap, ._5vgz, .sidebarMode #globalContainer ._5vgz.fixed_elem,  #u_ad_2, .fbDockChatTabFlyout, .contextualHelp, .uiToggleFlyout,  .uiContextualLayer ._70b, ._4t2a, ._53ij, #fbProfileCover, .back, .tickerDialogContent, .uiTooltipX .tooltipContent, ._4lh .fbTimelineTwoColumn[data-type="r"], .uiTypeaheadView, .fbPhotoSnowlift .rhc, .uiTypeaheadView, .uiTypeaheadView .bucketed ul, ._53ip ._53ij, ._53ii ._53ij, .uiInlineTokenizerView ul, .uiTypeaheadView ul, ._599r, ._569t ._54nf,  ._2n_z ._54nf, ._t, .wmMasterView .uiScrollableArea, ._6z- .uiScrollableArea, ._kj3, .fbTimelineUFI, .fbxPhoto .fbPhotoContributor, .uiBoxOverlay, .pop_content, ._4lh .fbTimelineTimePeriodSuppressed .forceLoad, .uiOverlayContent, ._2o49, ._44_u, ._1z0-, ._5nzo, ._1-e0, ._5nw8, ._1d8v.iframeEmbed, ._5w40.fbEventHeader, ._2w3 > ._30f, .pagesProfileFullColumnLayoutDesktopView, ._tun, ._1lot, #pagelet_web_messenger ._ksg, .pbs._z6j, ._5tlx, ._50d1 li, .fbPhotoTagger .typeaheadBackdrop, .fbPhotosPhotoTagboxBase .tagName, ._54ih ._5w0h, ._1y80, ._3iue, .escapeHatchMinimal, ._juy, ._30d, #album_pagelet .fbTimelineSection.fbPhotosRedesignNavPagelet, .fbPhotosRedesign.fbTimelinePhotoAlbum, #album_pagelet .fbTimelinePhotoAlbums, ._htj ._4-u8, ._5lc6, .fbNubFlyoutInner, ._3d9q, ._5w7z, ._6oju, ._19_p, ._3g-3, ._7si, ._4rvc.mapboxgl-ctrl-group, .fbTimelineStickyHeader .stickyHeaderWrap, #watch_feed ._6x84, ._67zx, ._206m .fbNubButton, ._30xv, ._30xs, ._18rk, ._69zd, ._70kk, ._ww-, ._kyy, ._53j5, ._63jc, ._440e, ._1unj, ._wyj._20nr, ._16gj #permalink_video_pagelet, ._6gen ._6iy5, .tm2miua2 .jjseejtz, ._87m1, ._7v3v {
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
}

._1b3n ._3ubp {
    border-top: 1px solid rgba(255,255,255,.10) !important;
}

._3vum, ._3x-2 ._5r69._1hvl {
	border-bottom-color: rgba(255,255,255,.10) !important;
}

._5qtq::after {
    border-bottom-color:  #555 !important;
}

._50mz .fbNubFlyoutHeader ._1sk5, ._5r8e, ._3nzk .jewelHeader, ._dpk {
    border-bottom:  1px solid #111 !important;
}

._dcs, .fbTimelineUnit.fbTimelineTwoColumn .timelineUnitContainer.fbTimelineComposerUnit, .mtm ._4-u2, ._53il {
    border: 1px solid transparent !important;
    border-radius: 3px !important;
}

.mtm ._4-u2, .mtm ._6m2, ._5vb_ ._dcs, ._dcs, ._3z2, ._2lhm ._6m2, ._2kml, #rhc_col ._39xw, #rhc_col ._1spx, ._13ks, ._5rul, .unclickable ._dcs._6m2 ._42ef, ._29_3 ._29_4, ._3x-2 .mtm ._5aqh, ._22st ._5ya, .mtm ._2_qm, ._6a15 {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAMAAAAw96PuAAAAMFBMVEUbGxsaGhoiIiIcHBwVFRUYGBggICAeHh4WFhYfHx8XFxcUFBQdHR0ZGRkhISESEhKy7ZvJAAABQUlEQVR42l1TUZLFIAiDRQpS3Xf/2+6Ugjw2X6nTxMgEAPxJ0IAXzFeeCcKFCoHJ9pKbKI5wCNBUjE+S4dR4pkhRABbcEBDUV5cWW6ebG597FF9dYMBy80zofq4LsM1MWGGNXRcWizJhhaXbKuaWr4QJ28UfiwDveQUIsbjBGcta9AJYwCgwt7b7ckKiDP/yoZ4JsU5YNCqf0zYhWs+L7fyiHLqA+UtpjXi8+4XOgfG8Suh+bUJBM6H7gYGdCclJeGsAGaimJXm/8VUThAtGr0cWJGmrR5i0gkirh8AIXRWkFTj87kdXlY4CVz1S1yotbSFC1xNPhQQNphOzEq+vjmFxXZAw/K0t/OKW+foK9QWr+2qF2oLto6sJ9QUbVaxaoV4Pdp30FaJWj9RVpavATrfCx3U9seiuhQBGPZBTYC38AccDDZOEuQAKAAAAAElFTkSuQmCC) !important;
    background-repeat: repeat !important;
    background-color: rgba(0,0,0,.15) !important;
    border: 1px solid #202020 !important;
    border-top-color: #111 !important;
    border-bottom: 1px solid rgba(255,255,255,.16) !important;
    box-shadow: inset 0 0px 3px 0 rgba(0,0,0,.8) !important;
    border-radius: 0px !important;
}

.mtm ._6a a {
    background: none !important;
}

html ._4lh ._2-d1 ._3rrn > a, ._3d5b._-fk, ._2-bi, ._36lv._36lw {
    border-left-color: #666 !important;
}

._4lh ._2-d1 a:hover, ._3d5b:hover, ._5wpt, ._4-ni {
    border-left-color: #444 !important;
}

html ._4lh ._2-d1 li a, ._3d5b {
    border-left-color: #282828 !important;
}

._14b9._620 .PageLikedButton, ._51iy, .mlePhotoButtons .mlePhotoButtonLink, div._14n, div._14o, ._42i, ._37hy ._4kfz._4o07, ._274e, ._6lm7, ._5w9f, ._2kch, ._3-v_, .p_1fdtcnhj6_, ._5mxv, ._3u-1::before, ._3ds9, ._3bdx, ._6lze:hover, ._5r86, ._6ro_::after, ._48jf, ._3dwm + ._3dwm::before, ._37vc ._1k98 ._4qwu, .fbPhotoTagger .faceBox, ._5o79 ._6idc, ._6idi, ._1hx1, ._5lnf, ._1hx1 ._517h, ._4xbk ._40jq + ._40jq, ._6zu4, ._4yke, ._4exg ._4ex2._4ex4[style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; border-right-color: rgb(221, 223, 226); border-top-color: rgb(221, 223, 226); padding-right: 12px; width: 33.3333%;"], ._4hxu, ._37qo, ._21x_ ._48p5, ._3siz ._2it2, ._7tw, ._3t3, ._4vxj, ._4_dr._20h5, ._53ii ._53ij .uiBoxGray._7lo._572u, ._15vt, ._5i_t, ._55k0, ._2e-p, ._7lu ._b2z, ._138k:hover, ._28y3 ._6bfj, ._7tkv::after, .af0cpkj9, ._4ks > li, ._6wp2, ._55r, ._32xu {
    border-color: #333 !important;
}

._4exg ._4ex2  {
    border: 1px solid #333 !important;
}

._2zxd[style*="background: rgba(235, 236, 237, 0.2)"] {
	background: #333 !important;
}

._48jf {
    overflow: hidden !important;
}

._18vj._18vj {
    border-top: 1px solid transparent !important;
    border-bottom: 1px solid transparent !important;
}

._lyk ._2l3t {
    border-color: #000 !important;
    border-radius: 50% !important;
}

.mtm ._2_qp, ._4nos {
	border: 4px solid #202020 !important;
    border-top-width: 5px !important;
    box-shadow: 0 0 4px #000 !important;
}

._4ikz .mtm ._2_qm ._35ph {
    width: 472px !important;
}

._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:hover, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:focus, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .fbFeedTickerStory:active, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .tickerStoryActive, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .tickerStoryActive:hover, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .tickerStoryActive:focus, ._5vb_ ._5pr2.fbChatSidebar .fbFeedTicker .tickerStoryActive:active, ._32jz.ego_unit, ._htj div, .fbRemindersContent .uiHeaderTopBorder, ._29_3 ._29_4 {
    border: none !important;
}

._2ko1 ._18im, ._51i5 ._5l1x {
    border-radius: 3px !important;
    background: rgba(0,0,0,.7) !important;
    border: 2px solid rgba(255,255,255,.9) !important;
}

._gx8 .img {
    box-shadow: 0 0 2px #151515 !important;
}

._12-h span, ._18c-  {
    border: 1px dashed #333 !important;
}

._12-h:hover span, ._57et ._24mr, ._5cm0 ._2b8t, ._1pt_:hover, ._43o4 ._1_mp ._60om span._2ztj._4i1f, ._62yd, ._2kch:hover, ._6y97, .af0cpkj9:hover {
    border-color: #555 !important;
}

._10sf {
    border-color: #111 !important;
    }

._3vsp  {
    border-color: #555 transparent transparent !important;
}

._57et > li:hover ._24ms, ._9qy {
    background-color: #555 !important;
}

._9q_, ._57et > li:hover, ._3m1v ._3mmj._57p3, ._2833 ._4n6y hr  {
    background-color: #333 !important;
}

._5cm0 {
    border-left: 1px solid #333 !important;
}

._3jjt:hover:after {
    border: 2px solid #999 !important;
    margin: -4px !important;
}

._2709, ._1a__ {
    background-color: #191919 !important;
    border: 1px solid transparent !important;
}

.__9u, ._5kjq ._4-u2, ._rzn, ._u08, .uiBoxYellow {
    border: 1px dashed #383838 !important;
    border-radius: 5px !important;
}

.fbEventsDashboardSection + .fbEventsDashboardSection > ._4cbb, ._4cbb + ._4cbb, ._1rg_ {
    border-top: 1px solid #303030 !important;
}

._4ag3 {
    background-color: #151515 !important;
}

._4-h8 {
    border-bottom-color: #111 !important;
}

._4-h8::after {
    border-bottom-color: #121212 !important;
}

._4zoz._4zoz._4zoz {
    border-top: 1px solid #111 !important;
    background: #111 !important;
}

._3o1x, #pagelet_composer ._1dsp, ._579 {
    background: #202020 !important;
}

._2dck {
    border-top: none !important;
}

._6z- .uiSideNav .selectedItem > .item, ._6z- .uiSideNav .selectedItem > .subitem, ._5wrf {
    background-color: #252525 !important;
}

._6z- .uiHeaderNav {
    background-image: url("https://static.xx.fbcdn.net/rsrc.php/v2/yV/r/R3gnFfkFEmR.png") !important;
    background-repeat: no-repeat !important;
    filter: grayscale(100%) invert(1) brightness(110%);
    -webkit-filter: grayscale(100%) invert(1) brightness(110%);
}

._1ui8 ._49u4, ._1j27, ._4fzb {
    border-top: 1px solid #333 !important;
}

#timeline_composer_container ._1f05, #pagelet_composer ._4_4e  {
    border: 10px solid #202020 !important;
    margin: 0 !important;
}

#timeline_composer_container ._1f05 .mvm, #timeline_composer_container ._1f05 .mvm ._3-8y, #pagelet_composer ._4_4e .mvm, #pagelet_composer ._4_4e .mvm ._3-8y {
    margin: 0 !important;
    padding-bottom: 0px !important;
}

#timeline_composer_container ._2ane {
    margin-bottom: -4px !important;
}

._2diy, ._k01._1itu ._ikh ._4bl7 div[style*="border-radius: 50%"] {
    border: 1px solid #eee !important;
}

._2diy:hover {
    background-color: rgba(20, 22, 26, .7) !important;
}

._3s4w::before {
    border-bottom-color: #333 !important;
    border-top-color: #111 !important;
}

._3s4x {
    background: #333 !important;
    border-radius: 3px !important;
    padding: 3px 8px !important;
}

._58vr::before, ._58vr::after {
    border-color: transparent transparent #202020 transparent !important;
}

._1l9z {
    box-shadow: 8px 0 16px 8px #000 !important;
    background: #202020 !important;
}

._271k._271m._1qjd._483s._5f0v, ._271k._271m._1qjd._483s {
	background: #282828 !important;
}

._271k._271m._1qjd._483s._5f0v:hover, ._271k._271m._1qjd._483s:hover {
	background: #151515 !important;
    border-radius: 20px !important;
}

._1mv9 ._3el6 {
    border-color: #333 !important;
    margin-top: 1px;
    margin-right: 2px;
}

._65u5 {
    margin-right: 2px !important;
}

._65u5 button  {
    margin-top: -15px !important;
}

._69f7 {
    border-left: 1px solid #202020 !important;
    border-right: 1px solid #202020 !important;
}

._6jj9, ._7hmn, ._83co {
    border-color: #fff !important;
}

._nd_ ._454y ._1mj0._3oh- {
	background-color: #eee !important;
	color: #202020 !important;
	text-shadow: none;
}

._6_av._6z6b::after {
    border-color: #202020 !important;
}

._6_ut._6y97, ._1hka ._1hkb {
    border-color: #3578e5 !important;
}

._5v3q ._3ccb {
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05) !important;
    overflow: hidden !important;
}

._6rpo, ._4pdr {
    border-bottom: 1px solid #333 !important;
    margin: 0 5px;
}

._6s-6:hover {
    border-radius: 20px !important;
}

._1hx7 ._1hx8 {
    border-bottom: 10px solid transparent !important;
    border-right: 10px solid #202020 !important;
    border-top: 10px solid transparent !important;
}

._1hx7 ._1hx9 {
    border-bottom: 10px solid transparent !important;
    border-right: 10px solid #202020 !important;
    border-top: 10px solid transparent !important;
}

._1hka ._1hkb:hover {
    border-width: 2px;
}

._1hw_ {
    border-left-width: 300px
}

._37vc ._1k98 ._4qwr, ._1auz, ._bbn  {
    background: #333 !important;
    border-color: #666 !important;
}

._30v-, ._1li5 ._1p7b, ._1li5 ._1p7a, ._1li5 ._1p7c, ._1li5 ._1p7d, ._1li5 ._1av3, ._5ce6 ._23p {
    border-color: white !important;
}

._1li5 {
    border-color: rgba(0,0,0,.7) !important;
}

._30-d li {
    padding: 16px 0 20px 16px;
	border-bottom: 1px solid #333 !important;
	margin-right: 16px;
}

._30-d li:last-child {
	border-color: transparent !important;
}

._30_4.uiContextualTypeaheadView {
	overflow-x: hidden;
	overflow-y: scroll;
	box-shadow: 0 0 4px #000 !important
}

._30_4.uiContextualTypeaheadView .basic::after, ._30_4.uiContextualTypeaheadView .basic::before {
	border-color: #333 transparent;
	top: 1px
}

._6a15 {
	border-radius: 18px !important
}

._5pbz ._5pcr {
	border: 1px solid #303030 !important;
}

._84ki {
	padding-right: 2px;
}

/*// REACTIONS BUTTON ////////////////////////////////////////////*/

._iu-, ._1g5v + ._4arz {
    background-color: #202020 !important;
}

._4wet ._53ij {
    border: none !important;
}

._iu-, ._4wet ._53ij {
    border-radius: 35px !important;
    border-bottom: 1px solid rgba(0,0,0,.7) !important;
    box-shadow: 0 1px 4px #101010, 0 1px 0 #505050 inset !important;
}

._4sm1, ._44hh {
    background-color: rgba(10,10,10,.95) !important;
    color: #ddd !important;
    border: 1px solid #444 !important;
}

._3-a6 ._10la ._10lo, ._1lha {
    background: #202020 !important;
    box-shadow: 0 1px 4px #000 inset, 0 -1px 1px #505050 inset !important;
    padding: 3px 2px 3px 3px !important;
    border-radius: 12px !important;
}

._aou {
    background: #202020 !important;
    box-shadow: 0 1px 4px #000 inset, 0 -1px 1px #505050 inset !important;
}

._3-a6 ._10la._10lg ._10lp {
	bottom: -14px !important;
}

._4owc ._53ij {
    border-radius: 20px !important;
    border-color: transparent !important;
    border-bottom: 1px solid rgba(0,0,0,.7) !important;
    box-shadow: 0 1px 4px #101010, 0 1px 0 #505050 inset !important;
}

._6cuq {
    bottom: -15px;
}

._680_ {
    bottom: 0 !important;
    margin-bottom: 4px !important;
    margin-left: -8px !important;
}

._1e8c ._1oxk ._iu- {
	background: none !important;
	box-shadow: none !important;
	border-radius: 0 !important;
}

._24o4 ._iu- {
	border: none !important;
	box-shadow: none !important;
	background: rgba(0, 0, 0, .7) !important;
}

/*// GRAYSCALE ///////////////////////////////////////////////////*/

._5vsj .UFIReplyList .UFIPagerIcon, .uiLikePageButton ._3-8_.img, .ego_action i.img, ._55pe i.img:not(.sx_489055), .sp_8u73feyRveE.sx_6ece9b, .PageLikeButton i.img, ._2c46, ._5q5b ._50mz .emoticonsPanel .emoteTogglerImg, ._2y9i, .UFISeenCountIcon, .sp_qk8sNUxukfD._5vsj, ._l9, ._kz, ._4iab, .sp_McTLU1GdJQJ.sx_898673, .sp_hjDCvEgCHdl.sx_3ff31d, ._5pr2.fbChatSidebar div._5qth ._5vmb, ._5pr2 ._3a-4, ._5pr2 ._5q87,._1rs .emoticonsPanel .emoteTogglerImg, ._42fu .img, ._2u7k i, ._559b, ._4iae ._5xoz i, i.sp_7-NOiac_C2Y, ._4fby i, ._2mi7, ._4w5k, .fbQuestionsPollAttachmentIcon, i._1c86, .uiBoxWhite ._2cje ._5r2w, .uiStreamSecondaryTime .img, img._5qla.img, .composerAudienceWrapper ._2agf i.img.sp_bENs7aMILtV, i.img.sp_bENs7aMILtV.sx_462ddb, ._5dd8 .composerAudienceWrapper i._3-99.img, ._3jy5.repliedLast, ._1y2l .preview ._j0r, .img[src="https://scontent-fra3-1.xx.fbcdn.net/t39.2365-6/12057050_1520753484910899_2061865607_n.png"], ._3u17 i.img, ._5iwm ._58ak::before, ._5nxe .img, ._2kw7, ._2kw7:hover, ._2kw8:hover, ._2kw9, ._2kw8._2kw9, ._2kw6:hover, .fbNubButton:hover i._2ti3, .fbNubButton:hover i, .fbNubFlyoutTitlebar ._15p4._15p5:hover a._3olu, ._69ar ._517h i.img, ._5bon i, ._39tk i, ._2ph_._3-96 .uiSearchInput button, ._2xui i.img._6jjm, i._6adr, ._j0r, ._5no5 svg, ._70ky, ._5wvt ._564-, ._5o79 ._4dw4 .UFICommentStickerButton:hover ._3fhi, ._3rzn:hover ._7p34, ._hsy:hover ._ht0, ._4h_e:hover ._4h_f, .fbSettingsNavigation .uiSideNav .imgWrap, ._5iwm._6-_b ~ ._2xme {
    filter: grayscale(100%) invert(100%) brightness(130%);
    -webkit-filter: grayscale(100%) invert(100%) brightness(130%);
}

.UFIComment .UFICommentLikeIcon, .UFILikeIcon, ._2xh1, ._2xh2, .sp_qk8sNUxukfD, #sideNav .img, #pagelet_composer form ul .img, .stickyHeaderWrap form .img, .sp_peJFOV3eQ-m, .sp_843e1e.sx_18f9fe, .sp_Bx2fFW7jJNa.sx_2e5b87, ._4jy0 .img, .sp_CyzWktPCcmJ.sx_1f43a9, .adminPanelContentFanAcq img, .UFIBlingBoxTimelineLikeIcon, .sp_XLMTaKDBtS1.sx_17ae2b, .ci_compact_icon img, .ci_compact_icon i.img, ._4pd, .uiCloseButtonSmall, ._1dsr, .fbIndexMobile img, ._55yq, ._5d9-._55yn, ._33i.img, .uiMorePagerLoader img, .sp_I82JkHg4Jkj.sx_345974, .sp_843e1e.sx_999646, ._jqw, ._54_9._5y6x ._2eq6::before, .sp_pyq3UfnPhz2.sx_34c674, .uiCloseButton, ._10cu, .sp_KtyRa2CDjjd.sx_41c10e, div.AdvertiserHomePagelet ._khv.img, .sp_B-zwz8Z2YD9.sx_bd6242, .sp_8XMKRORlC0c.sx_920821, .UFIShareIcon, .uiIconText .img, .litestandClassicWelcomeBox.fbxWelcomeBoxSmall a i, .fbReminders .fbRemindersIcon, .fbIndexMobile i, ._393v i, ._kj3 i, ._5pmc i, i._5r87, ._4ks > li i, .UFIReplyList .UFIPagerIcon, .UFILikeLinkIcon, ._5plv .sideNavItem .imgWrap .img, .uiButtonDisabled .img, ._4-fs i, .fbPhotosRedesignNavIcon, ._6q0 ._5m-, ._4jy0 .img, .mvl img, img._2gea, i._4fx, ._5c6j i, ._3-ma._2bnd, .hoverStar, ._3-ma._2bne, .uiTypeaheadView .search .simpleSearchSeeMoreRowRedesignIcon, ._1c85 img, ._6h1, .fbTimelineUnit ._8r i, .fbTimelineUnit ._8r.img, .fbTimelineUnit ._zho .img, i._2_8a.img, ._2l03 ._2l02.img[src="https://static.xx.fbcdn.net/rsrc.php/v2/yc/r/q4v5p3yuPTQ.png"], ._2l03 ._2l02.img[src="https://static.xx.fbcdn.net/rsrc.php/v2/ys/r/4Tmmhow4MH-.png"], ._489y, ._6xd._6xe, ._5xvi ._4sod, ._5xvi ._5xvj, ._6xe, .ogPickerIcon, .sp_GPqZJ_sO3wF, ._5f9f, ._40mk:hover ._40mm, ._40ml ._40mm, ._40mk img._40mn.img, .lifeEventHeader i.lifeEventIcon.img, ._rzn ._4m1w, ._28vg ._5b1w, #page_goal_card_channel i.img, ._1pu3, ._1pu4, #your_posts_bookmark a img.img, ._kj3 img.img._ohe, ._3ett i.img, ._2pio._2pib._2pif a i.img, ._52jv ._18c- i.img._4yzo, img.prs._8o.lfloat._ohe.img, ._58do i._32y4, ._54nu .img, ._fh4 i._1a2o.img, ._1pwr i.img, ._m_1 i.img, ._3186 ._5g_r:hover ._m_1 ._4a0a, ._3186 ._m_1:hover ._4a0a, ._3szp svg, ._4ng2 span, ._2ti3, ._m_1 .img, ._xdk ._51m- i.img, ._4h_- i, ._2mbj._3u33 i, ._3sct, i._554d.img, ._1gax i.img, ._2xx0 i.img, ._33fm i.sp_ndqnTqO5Zdg.sx_3e9b64, ._3cog a i, ._16mp, ._16sb ._16ms, ._16mq, ._4ipl i.img, ._2xui i.img, .name .uiSelectorNormal .uiButtonOverlay, ._66a_ i.img, ._1pek ._1sfg ._1se_, ._wza img, ._2jl-.img, ._18y_ ._sdp, ._2pi4._3-8t a .img, ._6a i, ._30yy, i._6ew-, ._25q-._67as svg, i._63lx, i._66rn.img, ._4sxf, ._2pln ._2plo, ._5_h2, i._6w67, ._6taw ._6usj i, ._32h1, ._3qh2, ._4ap3 ._4ap4 i, ._1ojy, i._3-yj, ._3_qm, .img[src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IYhpIz3tsiu.png"], ._7mki {
    filter: grayscale(100%) invert(0) brightness(100%);
    -webkit-filter: grayscale(100%) invert(0) brightness(100%);
}

._5lxs:hover ._5lxt, .addButton i.img, #facebook #contentArea ._1iiv:hover, ._2jq5._p:focus, ._2jq5._p:hover, .UFICommentPhotoIcon, .UFICommentEmojiIcon, .UFICommentStickerIcon, #pages_actions_pagelet button i.img.sp_dTBmsmzL5GP.sx_98d1d3, #pagelet_timeline_profile_actions i.img.sp_bENs7aMILtV.sx_794c0c, ._58gm ._51xa i.img, ._pbn ._4z8- .img, ._5pcp i._3-99.img, ._5r5l i.img._5r5n, .UFICommentGifIcon, ._54nh i.img, ._fk8 span i.img, ._36bx ._3nc_, i._6apz, #PageComposerPagelet_ ._6vh a._517h:hover ._4o_3 i.img, ._cmw._1wbl ._4xev:hover, ._cmw._1wbl.openToggler ._4xev, ._1gco._1gcp i.img._3w08, ._2w4n button .sp_ZwmYmPtX3O8.sx_b5bec4, i._34k2, #profile_intro_card_bio i.img, ._3xcn, ._6pdg i._6ng3, ._1ta3:hover .InsertEmoji, ._2r-r:hover, ._3n43:hover, ._1nyp:hover, ._3w97, ._67zx i, ._pu_ ._1qkq ._p i, ._3qe9 i, ._2pij a i.img, ._cjq ._cjm ._3bwx i, ._3e3h button img.img, ._605p i.img, ._2e-p i, .hv4rvrfc i, ._3xsf.img, ._6-xp svg, ._6ymd svg, ._3szp svg, ._7i2j, ._5blh svg, ._2tn9, ._-8b, ._6zze ._50z2 i, ._6zze ._50z1 i, ._3bwx i, ._6-xk a._6-xf svg, ._23ct._6zv9._6zva svg {
    filter: grayscale(100%) invert(100%) brightness(80%) !important;
    -webkit-filter: grayscale(100%) invert(100%) brightness(80%) !important;
}

._44hl, ._44hk, ._7xv1  {
    filter: invert(100%) brightness(80%);
    -webkit-filter: invert(100%) brightness(80%);
}

._59fb, ._1xn5 ._50__, ._5lxt, ._9ry i.img.sp_bENs7aMILtV, ._5dd8 .composerAudienceWrapper .selected i._3-99.img, .selected ._55pe i.img, ._5pcp .selected i._3-99.img, ._kv ._3jy5.repliedLast {
    filter: grayscale(100%) invert(0) brightness(120%);
    -webkit-filter: grayscale(100%) invert(0) brightness(120%);
}

._661v:hover, ._661s:hover, ._661s._661t, ._661u, ._1hwy ._1hx6 ._1hx4, ._1hx3:hover ._1hx4 {
    filter: grayscale(100%) invert(0) brightness(200%);
    -webkit-filter: grayscale(100%) invert(0) brightness(200%);
}

._59fb:hover, ._1xn5:hover ._50__, ._1xn5:focus ._50__ {
    filter: grayscale(100%) invert(0) brightness(300%);
    -webkit-filter: grayscale(100%) invert(0) brightness(300%);
}

a.jewelButton ._2n_9, a.jewelButton ._2w6d, #PageComposerPagelet_ ._6vh a._517h ._4o_3 i.img, #pages_video_hub_all_collections_pagelet a._400z button i.img {
    filter: grayscale(100%) invert(100%) brightness(30%);
    -webkit-filter: grayscale(100%) invert(100%) brightness(30%);
}

._59fb, ._59fb:hover, #userNavigationLabel._5lxt, ._3qb- i.img, ._1d6i i.img, #reaction_units i.img._2q08, ._2kw8, ._2kw6, ._661v, ._661s, ._6c0n ._1qfa i.img, ._62lo ._62ln i.img, ._2o7_.img, ._2o89.img, ._5aj7 ._3-9a a .img, ._2pi3 ._3-9a button i.img, ._7sjd img, ._3qb- img {
    filter: grayscale(100%) invert(100%) brightness(40%);
    -webkit-filter: grayscale(100%) invert(100%) brightness(40%);
}

#userNavigationLabel._5lxt:hover, ._59fb:hover, ._81u_ i {
    filter: grayscale(100%) invert(100%) brightness(60%);
    -webkit-filter: grayscale(100%) invert(100%) brightness(60%);
}

.selected .sp_bENs7aMILtV.sx_462ddb, .selected .sp_uJRilsphSnM.sx_4a5635, .selected .sp_9jIG9bZrYlL.sx_c3792e, .selected .sp_z4-HtKZjetn.sx_50d76e, .uiBoxWhite i.img.sp_nrOHIqWGSsv.sx_dea001, ._4__g.escapeHatchMinimal .FriendButton button i.img, #pagelet_timeline_medley_about ._2pi0 .FriendButton button i.img  {
    filter: grayscale(100%) invert(0) brightness(60%) !important;
    -webkit-filter: grayscale(100%) invert(0) brightness(60%) !important;
}

.hasNew a.jewelButton, ._55pe img._6vg.img, .fbEventsDashboardSectionHeader i.img, .metadataFragment img.ogPickerIcon, .hasNew a.jewelButton ._2n_9, .openToggler a.jewelButton ._2n_9, .openToggler ._59fc ._59fb, .openToggler ._5lxs ._5lxt, .friendBrowserForm .addButton i.img, #pagelet_timeline_medley_friends .FriendRequestAdd i, ._cw6 button i.img, ._pbn ._4jy0 ._6vg.img, #homepage_panel_pagelet_content img.mrs.img, ._2v_3.openToggler ._2w6d, #PageComposerPagelet_ ._4jy0 ._6vg.img, ._54ni:hover ._54nh i.img, i._51mq, #pageInviteNoticeCard .PageLikeButton i, ._pv1 i, ._1hx1 .UFICommentStickerButton .UFICommentStickerIcon, ._2e-p i.sp_NbOgIF4ZMjL.sx_c21b2f, ._7mkm a._6ymq, ._2a_c i {
    filter: none !important;
    -webkit-filter: none !important;
}

._3z_5, ._62l9 {
    text-shadow: none !important;
    background: #fa3e3e !important;
}

._53ik ._558b + ._53io {
    bottom: 1px !important;
    }

.uiContextualLayer ._5v-0 i._53io, ._5t_y ._1dsl li i._2wr, .emoticonsPanel div._5r8f .panelFlyoutArrow, ._19cm ._5s06 .friendSelector img[src="/images/blank-profilepic.png"], ._53ik ._558b + ._53io, ._3s_  {
    filter: brightness(12.5%) !important;
    -webkit-filter: brightness(12.5%) !important;
}

._5t_y ._1dsl li i._2wr {
    filter: brightness(8%) !important;
    -webkit-filter: brightness(8%) !important;
}

._2t-a .__tw .beeperNub, ._53il ._558b + ._53io, .__tw .beeperNub, .fbPhotosPhotoTagboxBase .tagArrow, .fbPhotoTagger .arrow, ._1tk3::before, ._1tk3::after, .gecko ._55sg > input + span::before  {
    filter: brightness(22%) !important;
    -webkit-filter: brightness(22%) !important;
}

a.jewelButton:hover, ._6jv5 ._6gd:hover, .selected .sp_d-Ntpo8VIn7.sx_80dbdf {
    filter: brightness(200%) !important;
    -webkit-filter: brightness(200%) !important;
}

#pagelet_timeline_medley_friends .FriendRequestAdd i, ._cw6 button i.img {
    filter: brightness(80%) !important;
    -webkit-filter: brightness(80%) !important;
}

._3cok, ._55sh > input:checked + span::before, ._55sh > input + span::before, i._5qla {
    filter: invert(85%) brightness(120%) !important;
    -webkit-filter: invert(85%) brightness(120%) !important;
}

._39bk ._6a i, ._39bk ._30yy, ._51mq.sp_iSA5Ndti7Lq.sx_65cad4, ._29ak._1dnk img, ._6jv5 ._6gd._5ep3:hover, ._605a ._6vg.img {
    filter: none !important;
    -webkit-filter: none !important;
}

._6gb:hover, ._1_0c:hover, ._2pza {
    opacity: 1 !important;
    filter: brightness(200%) !important;
    -webkit-filter: brightness(200%) !important;
}

i._1a_9, ._4mnq i, ._1c7d button._zbd i.sp_iNdbHByoEEp.sx_eb30a5, a[data-testid="RTCPickerDialogContactListItem__special_search_entry__"] ._4ld-._7q1r i, ._2phz i, ._1d6i:hover ._7sjb.img, ._3qc0:hover ._3qb- .img  {
    filter: grayscale(100%) invert(100%) brightness(250%);
    -webkit-filter: grayscale(100%) invert(100%) brightness(250%);
	transition: .5s
}

._54ni:hover ._54nh i._2ruo.img {
    filter: brightness(400%) !important;
    -webkit-filter: brightness(400%) !important;
}

._1wcx ._p8f i {
    filter: brightness(40%) !important;
    -webkit-filter: brightness(40%) !important;
}

._2if9 {
    box-shadow: 0 0 5px #000 !important;
}

._6taw ._6usj i:hover, .fbChatPrivacySettingsDialog .pbm {
    opacity: .7 !important;
}

._531b ._1-4- {
	opacity: .4
}

._531b ._1-4-:active, ._531b ._1-4-:hover, ._531b ._1-4-:focus {
    opacity: 1
}

.fbChatTypeahead ._5iwm ._58al::placeholder {
	color: #888
}

._54ne ._54nh i.img._1gg7 {
	filter: invert(50%) brightness(150%) !important;
    -webkit-filter: invert(50%) brightness(150%) !important;
}

/*// BUTTONS /////////////////////////////////////////////////////*/

.uiButtonGroup, ._70l, ._6dh ._1dsl, .uiDataTable th, ._6t89 {
    background: transparent !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

.uiButtonGroup:hover, #fbTimelineHeadline .actionsDropdown button, #fbTimelineHeadline .actionsDropdown .FriendButton, ._3y89 ._12js {
    background: #202020 !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

.fbNubButton, ._5h6h button {
    background: #222222 !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

.fbNubButton:before, .fbNubButton:after {
    background-image: none !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
    margin-top: 1px !important;
}

.fbNubButton:before {
    border-top-left-radius: 3px !important;
}

.fbNubButton:after {
    border-top-right-radius: 3px !important;
}

/*.rNubContainer ._50-v {
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    box-shadow: 0 0 4px #000 !important;
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
}*/

html ._4jy0:focus, html .gecko ._4jy0:focus {
    box-shadow: none !important;
    outline: medium none;
    text-shadow: none !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

#fbTimelineHeadline .actionsDropdown .FriendRequestAdd {
    border: 1px solid #202020 !important;
    box-shadow: 0 0 0 #000 !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

._1mtp ._3wv2, ._1mtp ._4k43, ._1mtp ._4noj, ._1mtp ._60p-, ._1mtp ._1mtq, ._1mtp ._630x, ._1mtp ._38qe, ._18vi ._18vj:hover, ._18vi ._18vj {
	border: 1px solid transparent !important;
}

button:hover, .actionsDropdown a:hover, #fbPageDropDownActionsMenu:hover, .composerAudienceWrapper a:hover, ._42ft:hover, ._2io_ a:hover, #login_form #loginbutton:hover, .fbIndexMobile .mobileButton:hover, #pages_actions_pagelet button:hover, label.uiButtonConfirm:hover, .uiLikePageButton button:hover, html ._4jy0:hover, html .gecko ._4jy0:hover, .FriendRequestAdd.addButton._4jy3._517h:hover, ._gli ._4jy0:hover, ._58gm ._52m-:hover, ._14b9._620 .PageLikedButton:hover, ._14b9._620 .PageLikedButton:focus, ._6dh ._1dso li:last-child button:hover, .uiComboInput .comboButton:hover, .uiBoxOverlay .uiButton:hover, .signupBanner .signup_btn:hover, #fbTimelineHeadline .actionsDropdown .FriendRequestAdd:hover, #all_search_results .PageLikeButton:hover, #pagelet_timeline_medley_friends ._4jy0:hover, #rhc_col ._39xw ._4jy3:hover, #rhc_col ._1spx ._4jy3:hover, ._2709:hover, #profile_page_insights_hubble ._kgb a:hover, #reg_box .clearfix button#u_0_j:hover, ._kj2 ._guu a.uiButton:hover, ._5lc6 ._2hn3 button:hover, ._54ay .callToActionButton:hover, ._54ay ._1wc-:hover, .captcha_dialog.uiLayer ._14 button:hover, ._1gbd:hover, ._59s7 ._pig ._2pi6 button._271k:hover, ._3klj._7lu ._2pie button:hover, ._1p8m button:hover, ._1mtp ._3wv2:hover, ._1mtp ._4k43:hover, ._1mtp ._4noj:hover, ._1mtp ._60p-:hover, ._1mtp ._1mtq:hover, ._1mtp ._630x:hover, ._1mtp ._38qe:hover, ._3y89 ._12js:hover, ._3hos a:hover, ._3nt1 ._271k._271m._1qjd._483s:hover, ._4qgk button:hover, ._5qf- ._5qg2 ._5qg3 ._517h:hover, ._3-uf ._271k:hover, #profile_timeline_overview_switcher_pagelet ._4tau._4tau a._3-91:hover, ._18vj:not(._6dc1):hover, ._3dx4 button:hover, .fbTimelineStickyHeader .FriendButton ._517h.FriendRequestAdd:hover, #fbTimelineHeadline .actionsDropdown button:hover, ._6s-6._6s-7, ._4iyi ._271k[aria-disabled="false"]:hover {
    box-shadow: inset 0px 2px 4px 0px #000 !important;
    border-bottom-color: #333 !important;
    border-top-color: #000 !important;
    border-right-color: #222 !important;
    border-left-color: #202020 !important;
    background-color: #181818 !important;
    border-radius: 3px !important;
    -webkit-transition: background-color .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background-color .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

#login_form #loginbutton, .PageLikeButton, ._gli ._4jy0, ._5v3q ._47we, .FriendButton, ._14b9._620 .PageLikedButton, .fbxPhoto button {
    background-color: #333 !important;
    border-radius: 3px !important;
    -webkit-transition: background-color .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background-color .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

#login_form #loginbutton {
    padding-bottom: 3px !important;
    padding-top: 4px !important;
}

#pages_actions_pagelet ._42ft {
    height: 27px !important;
    border: 1px solid #202020 !important;
}

.__wu ._539-.roundedBox .uiSearchInput button {
    background-color: #202020 !important;
    border: 1px solid #111 !important;
    border-radius: 0px 3px 3px 0px !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important; /* Safari */
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

.__wu .roundedBox .uiTypeahead .searchIcon {
        padding-right: 15px !important;
}

.__wu ._539-.roundedBox .uiSearchInput button:hover {
    background-color: #181818 !important;
}

._4jy0, .FriendButton button, .uiLikePageButton button, ._5t4x span button, ._698 ._5qo4 ._4jy3, ._1rs ._1ri, ._1dwg ._3vt_, .mtm .PageLikeButton, #login_form #loginbutton, .uiHeaderTop .PageLikeButton, ._19ab a, ._522u button, ._4-lt .PageLikeButton, .uiComboInput .comboButton, .uiBoxOverlay .uiButton, .pop_content .uiButton, .signupBanner .signup_btn, ._538q ._4jy0, ._8y9 .PageLikeButton, #all_search_results .PageLikeButton, ._32jt ._5ymq button, ._5ss8 ._18fs a, #rhc_col ._39xw ._4jy3, #rhc_col ._1spx ._4jy3, #reg_box .clearfix button#u_0_j, ._3g_u, ._kj2 ._guu a.uiButton, ._5lc6 ._2hn3 button, ._54ay .callToActionButton, ._54ay ._1wc-, ._6wl, .captcha_dialog.uiLayer ._14 button, ._1gbd, ._59s7 ._pig ._2pi6 button._271k, ._3klj._7lu ._2pie button, ._1p8m button, ._62l4, ._3-a6 ._4ic_ .PageLikeButton, ._5w7z .PageLikeButton, ._4qgk button, ._62lo ._62ln, ._3dx4 button, ._77we button.FriendRequestAdd, .fbTimelineStickyHeader .FriendButton ._517h.FriendRequestAdd, ._4iyi ._271k[aria-disabled="false"], ._glk button, ._3ko9 button, ._5l2a ._5l2c .PageLikeButton, .fbInternPreview ._5pcr .unclickable .PageLikeButton  {
    background-color: #333 !important;
    border: 1px solid rgba(0,0,0,.8) !important;
    border-radius: 3px !important;
    box-shadow: 0 1px 2px #111, 0 1px 0px #555 inset !important;
    -webkit-transition: background-color .2s, box-shadow .2s, border-color .2s !important; /* Safari */
    transition: background-color .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

._5rz0, ._2w4n button:hover, ._6t89:hover {
    box-shadow: none !important;
}

._xw0._xw9:hover, ._xw0._xw9, ._6iij a._42ft:hover, ._24o4 button:hover, #fbPhotoSnowliftFeedbackActions ._18vi a:hover, #fbPhotoSnowliftFeedbackActions ._18vi a {
    box-shadow: none !important;
	background-color: transparent !important;
}

#all_search_results .FriendButton, #all_search_results a, ._8y9.rfloat .FriendButton, .fbPhotoCurationOptions a, .fbPhotoCurationOptions a:focus, ._6t89:hover  {
    background: none !important;
}

._1fa6 button {
    height: 33px !important;
}

._5lc6 button, ._5lc6 button span, ._54ay ._1wc- button:hover, ._1la0, ._6j33._50f7, ._3nt1 ._271k._271m._1qjd._483s ._1f, ._2wpb ._3leq, ._6t89, ._30y6, ._30y8 {
    color: #ddd !important;
}

._30y7 a {
    color: #888 !important;
	text-shadow:none !important;
}

._54ay .callToActionButton, ._54ay ._1wc- {
    margin: -1px !important;
}

._54ay .callToActionButton {
    margin-bottom: 5px !important;
}

._csi ._1gb4 {
    background-color: #fa3e3e !important;
    color: #fff !important;
}

._csi:hover ._t7b {
    background-color: #333 !important;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .3) !important;
    color: #7f7f7f !important;
    border-radius: 16px !important;
}

._58mf div._5634 ._5dba {
    border-color: #fa3e3e !important;
}

._1gbd:hover img.img, ._62l4:hover img._rv {
    opacity: .9 !important;
    transform: scale(.99) !important;
}

._33uc._53ii, ._2w4n button:hover, ._1unk button {
    background-color: transparent !important;
}

._33uc .uiContextualLayer i._53io {
    filter: brightness(25%) !important;
    -webkit-filter: brightness(25%) !important;
}

._33s3:active ._33xd, ._1dqw ._33xd {
    filter: brightness(80%) !important;
    -webkit-filter: brightness(80%) !important;
}

._1gax {
    width: 158px !important;
    height: 158px !important;
}

._1p8m button._2a2d {
	width: 255px !important;
}

._1l69._1l6g {
    background-color: rgba(255, 255, 255, .05) !important;
    border-left: 2px solid #1479fb !important;
}

._6626._2pis ._6627, ._6626._2pis ._6628, ._661r, ._661r span, ._23zq, ._6t89:hover {
	color: #fff !important;
}

._2ph_._3-96 .uiSearchInput button:hover {
    filter: invert(100%) !important;
    -webkit-filter: invert(100%) !important;
    background-color: transparent !important;
    box-shadow: none !important;
}

._1gco._1gcp, ._2xak ._gx  {
    border-color: #444 !important;
    background-color: #202020 !important;
}

._6egj button._1gco  {
    border-color: #222 !important;
    background-color: #ccc !important;
}

._gxk {
    background-color: #aaa !important;
}

._6egj {
    background-color: #333 !important;
}

._6egk {
    background-color: #3578e5 !important;
}

._2w4n button {
    border: 1px solid #202020 !important;
}
._2w4n button:hover {
    border-color: #666 !important;
}

._34ju._34ju::after, ._34jw, ._3w8w::after, ._7r01:hover {
    border-color: #353535 !important;
}

._3w8w {
	border-radius: 14px !important;
}

._4g4h {
    color: #666 !important;
    text-shadow: none !important;
}

._1i3s ._42ft:hover, ._4vn1 a:hover, ._4sxc:hover, ._694w a:hover, ._7goy a:hover, ._2h2j a:hover, ._62tb a {
    background-color: transparent !important;
    box-shadow: none !important;
}

._1lha:hover {
    border-radius: 12px !important;
    box-shadow: 0 1px 4px #000 inset, 0 -1px 1px #505050 inset !important;
    border: none !important;
    background: #202020 !important
}

._3-yi:hover {
	background: rgba(0, 0, 0, .9) !important;
	border-radius: 50px !important;
	box-shadow: none !important;
	border-color: transparent !important;
}

._1unk button {
	border: 1px solid #999 !important;
}

._1unk button._4jy0:hover {
	border: 1px solid #ddd !important;
	background-color: rgba(255, 255, 255, .1) !important;
	box-shadow: none !important;
	transition: .7s;
}

._1ktf button._42ft[style="width: 500px;"] {
	width: 496px !important
}

._6s-6._6s-7 {
	border-radius: 20px !important
}

/*// ADS /////////////////////////////////////////////////////////*/

.uiHeader.uiHeaderTopBorder.pbs._9_r.uiSideHeader, .tickerToggleWrapper.displayedTickerToggleWrapper.fbRemindersThickline.toggleWrapperWithoutMargin {
    border: none !important;
}

#pagelet_games_rhc, #pagelet_ego_pane, .ego_column, .egoOrganicColumn, #pagelet_gaming_destination_rhc, #pagelet_marketplace_new_user_top_picks_rhc, ._4ejc {
    display: none !important;
}

/*// ICONS ///////////////////////////////////////////////////////*/

.uiToggleFlyout ._6a._1_0c {
    background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/N2Pc61w97eJ.png") !important;
	background-position: -66px -1094px !important;
}

._1rs .emoticonsPanel .emoteTogglerImg {
    background-image: url("https://static.xx.fbcdn.net/rsrc.php/v2/yZ/r/a-ZN6WoEOje.png") !important;
    background-position: -6px -419px !important;
    opacity: .7 !important;
}

._1rs .emoticonsPanel .emoteTogglerImg:hover {
    opacity: 1 !important;
}

._3m75 ._55yu > a, ._3m75 .sideNavItem .uiSideNavEditButton a {
    border-color: #202020 !important;
}

._55yu ._2jq5._p:hover, ._55yu ._2jq5._p:focus, .profileApprovalRow i._hly._9--  {
    filter: none !important;
    -webkit-filter: none !important;
}

._2pi0 i.sp_LujhjszjHjH.sx_ee6673, ._6jjn {
    opacity: 0 !important;
}

._4bl9 #timeline_story_column {
    margin: 0 2px
}

._4bl9 .fbTimelineUnit.fbTimelineTwoColumn .timelineUnitContainer.fbTimelineComposerUnit {
    width: 512px
}

#pagelet_main_column_personal {
    width: 853px;
}

/*// BUSINESS PAGES //////////////////////////////////////////////*/

._6idk {
    background-color: #fa383e !important;
}
._5don {
    margin-right: -13px !important;
}

._5don ._5dop, #fbProfileCover, ._3d9q, ._qa1, ._1yyp, #videos, ._5l2a {
    overflow: hidden !important;
}

._2r86 {
	width: 368px;
}

._28uf, ._3cuh ._12wb {
    background: #000 !important;
}

._5hs0, ._6-1o:hover {
    border: 1px solid #666 !important;
}

._2sw8 ._3etu, ._2sw8 ._3etw, ._2sw8 ._3ett, ._1da8, ._2lj1 button, ._59fh, ._6-1o {
    border: solid 1px #333 !important;
}

._3ett, ._3etu, ._3etw, ._6tax, ._5m17 {
    background: #202020 !important;
    }

._3i_m ._2her {
    border: 1px solid currentColor !important;
    border-radius: 50% !important;
}

._2her ._57e_ {
    border: 1px solid currentColor !important;
    border-width: 0 0 1px 1px !important;
}

._5vx4 ._5vwz ._13xf {
    left: 0 !important;
    right: 0 !important;
}

._4dlt {
        margin-right: 6px !important;
}

#pagesHeaderLikeButton {
        margin-right: -5px !important;
}

.fbTimelineCapsule, .fbTimelineTimePeriod, .sp_dwisfx.sx_5bfe7b, ._2k5d {
    background: none !important;
}

.spinePointer, .sp_52s0ck, .sp_1t3tsb {
    opacity: 0 !important;
}

.uiButton, .uiButtonSuppressed:active, .uiButtonSuppressed:focus, .uiButtonSuppressed:hover, ._517h, ._59pe:focus, ._59pe:hover, ._517h._42fr:active, ._517h._42fr._42fs, a._ol6._72of:hover {
    background: #202020 !important;
    box-shadow: none !important;
    border-color: transparent !important;
}

._5vx4._5vx6 ._5vwy ._13xf, ._5h12 > span:after, ._5h12.uiSelector > .uiToggle:after {
    background: #666 !important;
}

._5vwz:hover a div, ._6idk span div, ._2lj1 {
    color: #fff !important;
}

._85r0, ._6idi ._6z7o {
    border-color: #1eb1e5 !important;
    color: #1eb1e5 !important;
}
._6wkq ._5z5s {
    background-color: #1eb1e5 !important;
}
.adminPanelMessagesColumn, #admin_panel #AdminTip {
    margin-top: -1px !important;
}

._352g, ._5abm {
    background-color: transparent !important;
}

._1mib ._4h2m, ._5vwz ._13xf, ._33vf li:hover::before, ._33vf li::before, ._55vj ._4qwr  {
    background: #333 !important;
}

._5vwy ._13xf {
    background: #666 !important;
}

._33vf li:hover, ._1tik, ._hj0, ._4vb8._4vba, ._6idi ._6z7o {
    background-color: #303030 !important;
}

._3df- {
    background: rgba(0,0,0,.5) !important;
    border-color: #fff !important;
    color: #fff !important;
}

._3f-h {
    border-left: 3px solid transparent !important;
}

._3f-h._3f-i, ._4t_n ._4qwr, ._55vj ._4qwu, ._cjo._cjn {
    border-color: #666 !important;
}

._33vf li:hover::before, ._33vf li::before, ._iyn, ._2_s5 {
    border-color: #333 !important;
    }

._3f-h:hover, ._3f-h._3f-i, li._1a_0._4vb9, ._6-xp, ._6-xk a, ._6ybv, ._6y56, ._6ybz, ._7hu0, ._7hu1, ._7hty, ._6yvp {
    background: rgba(255, 255, 255, .05) !important;
}
._6y4z {
    background: rgba(255, 255, 255, .25) !important;
}

._58al::placeholder {
	color: #888 !important
}

._33vf li._3wxb, ._174o, ._3m1z:hover, ._4dyr, ._44h0._54nd > ._54nc, ._6idi ._6z7o {
    background: rgba(255, 255, 255, .03) !important;
}

._5x5y {
    border-left: 20px solid transparent !important;
    border-top: 20px solid #999 !important;
}

div._5abn[style*="background-color: rgb(197, 206, 224)"] {
    background-color: rgb(197, 206, 224) !important;
}

div._1l46._1l47[style*="background: rgb(222, 133, 133)"] {
    background-color: rgb(222, 133, 133) !important;
}

div._1l46._1l47[style*="background: rgb(197, 206, 224)"] {
    background-color: rgb(197, 206, 224) !important;
}

div._1l46._1l47[style*="background: rgb(157, 172, 203)"], div._5abn[style*="background-color: rgb(157, 172, 203)"], div._1l46._5nb6[style*="background: rgb(157, 172, 203)"] {
    background-color: rgb(157, 172, 203) !important;
}

div._1l46._1l47[style*="background: rgb(255, 202, 135)"], div._5abn[style*="background-color: rgb(255, 202, 135);"]{
    background-color: rgb(255, 202, 135) !important;
}

div._1l46._1l47[style*="background: rgb(208, 148, 171)"], div._5abn[style*="background-color: rgb(208, 148, 171)"] {
    background-color: rgb(208, 148, 171) !important;
}

div._1l46._1l47[style*="background: rgb(127, 150, 199)"] {
    background-color: rgb(127, 150, 199) !important;
}

div._1l46._1l47[style*="background: rgb(247, 150, 0)"] {
    background-color: rgb(247, 150, 0) !important;
}

div._1l46._1l47[style*="background: rgb(61, 106, 214)"] {
    background-color: rgb(61, 106, 214) !important;
}

div._1l46._1l47[style*="background: rgb(19, 189, 166)"] {
    background-color: rgb(19, 189, 166) !important;
}

div._1l46._1l47[style*="background: rgb(240, 238, 196)"] {
    background-color: rgb(240, 238, 196) !important;
}

div._1l46[style*="background: rgb(137, 155, 193)"] {
    background-color: rgb(137, 155, 193) !important;
}

div._1l46[style*="background: rgb(60, 99, 153)"] {
    background-color: rgb(60, 99, 153) !important;
}

div._1l46[style*="background: rgb(229, 229, 229)"] {
    background-color: rgb(229, 229, 229) !important;
}

div._1l46[style*="background: rgb(215, 218, 231)"] {
    background-color: rgb(215, 218, 231) !important;
}

div._1l46[style*="background: rgb(177, 148, 194)"] {
    background-color: rgb(177, 148, 194) !important;
}

div._1l46._5nb6[style*="background: rgb(35, 53, 91)"] {
    background-color: rgb(35, 53, 91) !important;
}

div._1l46._5nb6[style*="background: rgb(156, 122, 179)"] {
    background-color: rgb(156, 122, 179) !important;
}

div._1l46._5nb6[style*="background: rgb(222, 181, 197)"] {
    background-color: rgb(222, 181, 197) !important;
}

div._1l46._5nb6[style*="background: rgb(183, 117, 143)"] {
    background-color: rgb(183, 117, 143) !important;
}

div._1l46._5nb6[style*="background: rgb(59, 89, 152)"] {
    background-color: rgb(59, 89, 152) !important;
}

div._1l46._5nb6[style*="background: rgb(212, 64, 64)"] {
    background-color: rgb(212, 64, 64) !important;
}

div._1l46._5nb6[style*="background: rgb(137, 42, 42)"] {
    background-color: rgb(137, 42, 42) !important;
}

div._1l46._5nb7[style*="background: rgb(173, 179, 188)"] {
    background-color: rgb(173, 179, 188) !important;
}

._2u6z ._1f47[style="background-color: rgb(66, 103, 178);"], ._1nnu[style="background-color: rgb(66, 103, 178);"] {
    background-color: rgb(66, 103, 178) !important;
}

._1-e0 {
    background: #202020 !important;
    transition: ease-out .5s !important;
    -webkit-transition: ease-out .5s !important;
}

.fbPhotosRedesignNavItem:hover {
    background: #282828 !important;
    transition: ease-out .5s !important;
    -webkit-transition: ease-out .5s !important;
}

._1-e0:hover {
    background: #fff !important;
}

._1-e0 a, ._1-e0 ._34pe, ._1-e0 ._34pf {
    text-shadow: none !important;
}

._585n, ._56h9 {
    border: 1px dashed #444 !important;
}

._fqv ._5cuk span {
    color: #dc3847 !important;
}

._fqv ._5cul span {
    color: #52bb5d !important;
}

._5av0 ._34pe:nth-child(1) ._34pg {
    color: #3d6ad6 !important;
}

._5av0 ._34pe:nth-child(2) ._34pg {
    color: #13bda6 !important;
}

._5av0 ._34pe:nth-child(3) ._34pg {
    color: #905ac7 !important;
}

._5av0 ._34pe:nth-child(4) ._34pg, ._5av0 ._34pe:nth-child(4) ._34pg span {
    color: #ff8051 !important;
}

._5av0 ._34pe:nth-child(5) ._34pg {
    color: #ac2888 !important;
}

._5av0 ._34pe:nth-child(6) ._34pg {
    color: #fc0 !important;
}

._55ii ._ohe, ._55ii .ohf {
    margin: 0 -2px 0 -2px !important;
}

._-7f, ._-7f:hover {
    border-bottom: 4px solid #777 !important;
}

._-7f ._-7g, .fbPhotosRedesignNavItem .fbPhotosRedesignNavSubtitle, .fbPhotoAlbumTitle, .fbPhotosRedesign .photoTextTitle strong {
    color: #fff !important;
    font-weight: bold !important;
}

._10uf ._5nbb {
    border-right: 1px solid #151515 !important;
    box-shadow: -2px 2px 5px #151515 inset !important;
}

._juy ul._43o4 {
    width: 100% !important;
}

._3ad- {
    top: 42px !important;
    position: fixed !important;
    }

._juy {
    max-height: 44px !important;
}

._fqv a ._4wvl {
    margin: 2px 1px !important;
}

._5doo._5don, ._5g03, ._3xcw, ._qa1, ._6ff6._2pi2, ._6mki, ._11m5 {
    background: #202020 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
    box-shadow: 0 0 4px #000 !important;
}

._juy ._4u-c, ._3ad- {
    background: #202020 !important;
    border-bottom: 1px solid rgba(0,0,0,.7) !important;
    box-shadow: 0 0 0px #000 !important;
}

._6tax, ._6usj {
    background: #202020 !important;
    box-shadow: 0 0px 5px #000, 0 2px 2px #111, 0 1px 1px #444 inset !important;
}

._6tay::after, ._6usj {
    border-color: #202020 !important
}

._6usj i.img {
    margin-top: 1px !important
}

._5doo._5don ._5aca  a.uiCloseButton  {
    filter: grayscale(100%) invert(1) !important;
    -webkit-filter: grayscale(100%) invert(1) !important;
}

._5awc {
    background: #333 !important;
}

._5awe::before, ._5awe::after, ._79q, ._2evq {
    border-left-color: #333 !important;
}

._5awe::before {
    border-left-color: #202020 !important;
}

._4nhd, ._37tu, ._3ok2 {background-color: #000 !important;
    border: 1px solid #eee !important;
}

._5pw9._5pwl {
    border: 1px solid #eee !important;
}

._5pw1 {
    background: #bbb !important;
}

._5pw1 ._5pw6 {
	color: #000 !important;
    text-shadow: none !important;
}

._4nhd span, ._2szw ._2sz_, ._3f-h._3f-i ._4bl7, ._3f-h:hover ._4bl7, ._3ok3 ._4qba, ._2sz_ ._4qba, ._30eg ._1mj._1mf span, ._59fi, ._5vwz a ._6wk7, ._1nnu, ._6a0o ._2pin span, ._23gl ._3-95 span {
    color: #eee !important
}

._5c6j ._3smp, ._5pw6, ._50f5 {
    color: #bbb !important
}

._4wye ._3xaf, ._5pw9 {
    box-shadow: none !important;
}

._4wye ._5po3 {
    border-bottom: 1px solid #555 !important;
}

._83e, ._10uf, ._14xy, ._1s91, ._4k8w, ._15we, ._165d, ._17jk, ._5n4j, ._2w1z, ._zz-, ._5c6j ._3smp, ._5pw9, ._3xop, ._7390, ._73_9, ._5ybo, ._j-q:focus, ._21ab._21ab {
    border-color: #333 !important;
}

._14x-._32w7:hover ._14x_, ._14y4._32w7 ._14x_ {
    background-color: #4080ff !important;
}

._14x-._32w5:hover ._14x_, ._14y4._32w5 ._14x_ {
    background-color: #4267b2 !important;
}

._14x-._32w6:hover ._14x_, ._14y4._32w6 ._14x_ {
    background-color: #b02598 !important;
}

._4k8w:hover, ._4k8w._2tms, ._4h_x:hover, ._4h_y, ._2w1z:hover, ._33v0, ._3oyq:hover, ._59fj, ._j-r:hover {
    background-color: #333 !important;
}

._3oyq:hover {
    cursor: pointer !important;
}

.__3-, ._su6:hover {
    background-color: #42b72a !important;
}

.__3_, ._sua {
    color: #42b72a !important;
}

.__3v > .__3_ {
    color: #fa3e3e !important;
}

.__3v > .__3-, ._2qy_ {
    background-color: #fa3e3e !important;
}

._suc:last-child:hover ._sua, ._3pc2 {
    color: #fff !important;
    text-shadow: none !important;
}

._3xol ._3xom, ._5dwb ._38my:first-child, ._5dwb ._38my:first-child span, ._3-rp, ._iyo, ._3urb {
    color: #ddd !important;
}

._5m10 ._5z5s {
    background-color: #4080ff !important;
}

._5m15 ._5z5s, ._6-ut {
    background-color: #4267b2 !important;
}

._6-uu {
    background-color: #89be4c !important;
}

._6-us {
    background-color: #e07a2e !important;
}

._6-ur {
    background-color: #ec6fb5 !important;
}

._6-uv {
    background-color: #4dbba6 !important;
}

._2uld, ._2ulf, ._2uld ._1-e4 {
    color: #b02598 !important;
}

._37_q._37_r {
    border-color: #eee !important;
    color: #bbb !important;
    font-weight: bold !important;
}
._37_q:hover, ._37_q._37_r, ._37_s:hover, ._6ff7:hover, ._6idj {
    background: rgba(255, 255, 255, .05) !important;
    text-decoration: none;
}

._6idi ._6jiq, ._6idi ._6jip, ._6idi ._6jio, ._6idi a:hover {
    background: rgba(255, 255, 255, .03) !important;
}

._3d9q.fixed_elem {
    max-width: 820px !important;
}

._411q ._3-ro {
    background-color: rgba(0, 0, 0, .6) !important;
    border-radius: 50%;

}

#PageComposerPagelet_ ._6vh a._517h {
    background-color: transparent !important
}

#PageComposerPagelet_ ._6vh a._517h:hover {
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
}

._738_ {
    background-color: #5291ff !important;
    border: none !important;
    border-radius: 50% !important;
    box-shadow: none !important;
}

._5x_m {
    background-color: #888 !important;
    border-right: 1px solid #202020 !important;
}

._5x_m:hover {
    background-color: #666 !important;
}

._4okn[style="background-color: rgb(66, 103, 178);"] {
    background-color: rgb(66, 103, 178) !important;
    color: #fff !important;
}

._295o .img {
    filter: invert(90%) hue-rotate(190deg) saturate(250%) brightness(100%);
}

._295o .img.sp_ZYLXkMFI4Ur.sx_6e2e52 {
    filter: invert(90%) hue-rotate(190deg) saturate(550%) brightness(180%);
}

._5xvi {
    filter: invert(90%) hue-rotate(190deg) brightness(300%);
}

.uiContextualLayer div[style="padding: 5px; background-color: rgb(39, 39, 39); border-radius: 2px; color: white;"] {
    background-color: rgb(20, 20, 20) !important;
    color: white !important;
}

.uiContextualLayer div[style="padding: 5px; background-color: rgb(39, 39, 39); border-radius: 2px; color: white;"] div {
    border-top: 5px solid rgb(20, 20, 20) !important;
    border-left: 5px solid transparent !important;
    border-right: 5px solid transparent !important;
}

._5x_r {
    color: #fff !important;
    font-weight: bold !important;
}

div._5x_j {
    box-shadow: none !important;
    border-top-color: #333 !important;
    border-right-color: transparent !important;
    border-bottom-color: #333 !important;
    border-left-color: transparent !important;
}

._6v8o:hover {
    background: linear-gradient(transparent, rgba(0,0,0,.8) 50%, rgba(0,0,0,.8) 100%)
}

._23fw::before, ._23fw::after {
    background: linear-gradient(transparent 50%, rgba(0,0,0,.7) 70%, rgba(0,0,0,.7) 100%)
}

._672g, ._672g._6g9k {
    border-color: #202020 !important;
}

._672g[style="background-color: rgb(141, 148, 158);"] {
    background-color: rgb(141, 148, 158) !important;
}

._1h1 ._1hqh a {
    border-bottom: 4px solid !important;
}

._1g_ {
    color: #eee !important;
    border-color: #333 !important
}

._23gl, ._6idi ._6jio, ._6idi ._6jip {
    border-color: #3578e5 !important;
}

._6idi ._6jiq {
    border-color: #b02598 !important;
}

._3ebi {
    background-color: #f5f6f7 !important;
}

._3ecd {
	border-color: #dadde1 !important;
}

._3ebi span, ._3eb3 span {
	text-shadow: none;
	color: rgb(28, 30, 33) !important;
}

._3eb3 {
	background: #fafafa !important
}

._2qz0 {
    background-color: #00a400 !important;
}

._6-5n {
    background-color: #a7e3f6 !important;
}

._6-5o {
    background-color: #f6bfdf !important;
}

._5o79 {
	border: none !important;
}

._5n4j {
	background-color: #121212 !important;
}

._1dpb {
    background-color: #fa383e !important;
    border: 1px solid #fa383e !important;
    color: #fff !important;
}

/*// GROUP ///////////////////////////////////////////////////////*/

._57xm {
    width: 53px !important;
}

._5812 {
    border-color: #eee !important;
}

._2dh4 {
    background-image: none !important;
}

._26xy ._26yl a, ._3kln ._3klp, ._7vr, ._3c6v ._3el6 ._3c6_, ._6qq6, ._1pfw, ._2iem._50f7, ._5gmx {
	color: #eee !important;
}

._26xy ._26ym, ._6qq8 {
	color: #ccc !important;
}

ul li._3klw:hover {
	background: none !important;
}

.groupJumpLayout #headerArea ._4-u2 {
    box-shadow: none;
    border-top-color: transparent !important;
}

.groupJumpLayout #headerArea .groupsCoverPhoto #fbProfileCover, ._ww_ {
    overflow: hidden !important;
}

._16ve {
    margin: 0;
}

._16ve ._16vg, ._4qr4 ._16vl {
    margin: 0 12px;
}

._1c-2, ._2v-2, ._6qqv {
    border-color: #333 !important
}

.fbCalendarList .uiHeaderSection, ._pu- {
    background-color: #303030 !important;
}

._pu_:hover {
    background-color: #252525 !important;
}

._dus::after {
    background: #666 !important;
    height: 4px !important;
    margin: 0;
    width: 84%;
    margin-bottom: 5px !important;
}

._1qkq {
    margin-left: 11px !important;
}

._bty {
    background-color: #f35369 !important;
}

/*// CHAT ////////////////////////////////////////////////////////*/

._1nc6 ._5w1r, ._hh7, ._5i_d, ._3__- ._1nc6 ._3_om._3cpq {
    background: #303030 !important;
    border-color: #202020 !important;
    box-shadow: none !important;
    text-shadow: 0px 0px 2px #000 !important;
}

._1nc7 ._5w1r, ._1ej0 ._nd_ ._s1-, ._3__- ._1nc7 ._3_om._3cpq {
    background: #151515 !important;
	border-color: #202020 !important;
    box-shadow: none !important;
    text-shadow: 0px 0px 2px #000 !important;
}

._1nc6 ._5w1r ._d97 ._5yl5 span, ._1nc6 ._49or .__6j div, ._6d4h._6d4i {
    color: #ddd !important;
}

._66n2 ._1ogo {
	text-shadow: none !important;
	color: #fff !important;
}

._1nc7 ._5w1r ._d97 ._5yl5 span, ._3oh- span, ._3oh-, ._1nc7 ._49or .__6j div {
    color: #ccc !important;
}

._49or .__6j .__6k, ._49or .__6j .__6l {
    color: #000 !important;
    text-shadow: none !important;
}

._5w1r ._d97 span a {
    font-weight: bold !important;
    text-shadow: none !important;
}

._49or .__6j .__6m, ._r8e ._515 {
    color: #fff !important;
}

._1nc6 ._5w1r:after, ._1nc6 ._5w1r:before {
    margin-left: 1px !important;
    width: 7px !important;
}

._1nc7 ._5w1r:after, ._1nc7 ._5w1r:before {
    margin-right: 1px !important;
    width: 7px !important;
}

._5ys_:after {
    background: none !important;
}

._1nc7 ._5w1r:after {
    transform: scaleX(-1) !important;
}

._5q5b ._50mz .fbNubFlyoutFooter::before {
    height: 0 !important;
}

._8ms ._552n ._4vui, ._8ms ._552n ._3s0d, ._8ms ._552h, ._5q5b .fbNubButton ._ggq._5qth ._5vmb, ._56ox .fbNubButton ._3a-4, .fbNubFlyoutFooter ._552h, .uiToggle._50-v.fbNub._rz3._ur5 {
    border: transparent !important;
    box-shadow: none !important;
}

._50mz .fbNubFlyoutFooter {
    box-shadow: 0 -1px 2px #111 !important;
}

._1miz {
    background-color: #252525 !important;
	border: 1px solid #333 !important
}

._454y ._1miz {
    padding: 6px 12px;
}

._5i_d, ._5rw4 ._49or, ._1nc6 ._3e7u ._1ekr, ._1nc7 ._3e7u ._1ekr, ._2f5n {
    background-color: #111 !important;
}

._1mj1 {
    border-bottom: 2px solid #ccc !important;
    margin-left: 22px !important;
    margin-right: 40px !important;
}

._1mj4 ._1miz {
    background-color: #666 !important;
    border-color: #666 !important;
}

._4b0g ._5pd7 {
    background: #aaa !important;
}

._1nc7:only-of-type ._5w1r._31xx, ._1nc6:only-of-type ._5w1r._31xx, ._5w1r._31xx, ._3__- ._5w1r._31xx {
    background: transparent !important;
    border: none !important;
}

._20fw ._50mz.focusedTab .fbNubFlyoutTitlebar, ._20fw .fbNubFlyoutTitlebar:hover, ._20fw .highlightTitle .fbNubFlyoutTitlebar:hover, ._1uwz {
    background: none !important;
    background-color: #303030 !important;
	transition: .4s;
}

._20fw .fbNubFlyoutTitlebar {
    background: none !important;
    background-color: #202020 !important;
}

._568z span, ._2nlt, ._3olv._2nlt {
    background-color: rgb(66, 183, 42) !important;
}

._55ln:hover {
    box-shadow: inset 205px 0 0 #303030 !important;
	transition: .5s;
}

._5yl5 span, ._1nc6 ._49or .__6j div, .__6m, .__6k ._4ik6, ._515, ._55ln:hover ._55lr {
    color: #fff !important;
    text-shadow: 0px 0px 8px #000 !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(84, 199, 236)"] {
    background-color: rgb(84, 199, 236) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(245, 195, 59)"] {
    background-color: rgb(245, 195, 59) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(243, 83, 105)"] {
    background-color: rgb(243, 83, 105) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(214, 150, 187)"] {
    background-color: rgb(214, 150, 187) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(163, 206, 223)"] {
    background-color: rgb(0, 132, 255) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(66, 183, 42)"] {
    background-color: rgb(66, 183, 42) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(247, 146, 59)"] {
    background-color: rgb(247, 146, 59) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(230, 133, 133)"] {
    background-color: rgb(230, 133, 133) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(140, 114, 203)"] {
    background-color: rgb(140, 114, 203) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(163, 206, 113)"] {
    background-color: rgb(163, 206, 113) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(207, 165, 136)"] {
    background-color: rgb(207, 165, 136) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(236, 126, 189)"] {
    background-color: rgb(236, 126, 189) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(175, 156, 218)"] {
    background-color: rgb(175, 156, 218) !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(0, 132, 255)"], ._6ng3[style*="background-color: rgb(0, 132, 255)"], ._1nc6 ._1aa6[style*="background-color: rgb(0, 132, 255)"] {
    background-color: #303030 !important;
}

._5dr3 ._5dr4[style*="background-color: rgb(117, 150, 200)"], ._6ng3[style*="background-color: rgb(102, 153, 204)"], ._1nc6 ._1aa6[style*="background-color: rgb(102, 153, 204)"] {
    background-color: rgb(117, 150, 200) !important;
}

._1nc6 ._d97[style*="background-color: rgb(230, 133, 133);"], ._6ng3[style*="background-color: rgb(230, 133, 133);"], ._1nc6 ._1aa6[style*="background-color: rgb(230, 133, 133);"], ._6kle[style*="background-color: rgb(230, 133, 133)"], ._1ia[style*="background-color: rgb(230, 133, 133)"], .titlebar ._69pt[style*="background-color: rgb(230, 133, 133)"] {
    background-color: rgb(230, 133, 133) !important;
}

._1nc6 ._d97[style*="background-color: rgb(84, 199, 236)"], ._6ng3[style*="background-color: rgb(84, 199, 236)"], ._1nc6 ._1aa6[style*="background-color: rgb(84, 199, 236)"] {
    background-color: rgb(84, 199, 236) !important;
}

._1nc6 ._d97[style*="background-color: rgb(245, 195, 59)"], ._6ng3[style*="background-color: rgb(245, 195, 59)"], ._1nc6 ._1aa6[style*="background-color: rgb(245, 195, 59)"] {
    background-color: rgb(245, 195, 59) !important;
}

._1nc6 ._d97[style*="background-color: rgb(243, 83, 105)"], ._6ng3[style*="background-color: rgb(243, 83, 105)"], ._1nc6 ._1aa6[style*="background-color: rgb(243, 83, 105)"] {
    background-color: rgb(243, 83, 105) !important;
}

._1nc6 ._d97[style*="background-color: rgb(214, 150, 187)"], ._6ng3[style*="background-color: rgb(214, 150, 187)"], ._1nc6 ._1aa6[style*="background-color: rgb(214, 150, 187)"], ._6kle[style*="background-color: rgb(214, 150, 187)"], ._1ia[style*="background-color: rgb(214, 150, 187)"], .titlebar ._69pt[style*="background-color: rgb(214, 150, 187)"] {
    background-color: rgb(214, 150, 187) !important;
}

._1nc6 ._d97[style*="background-color: rgb(163, 206, 223)"], ._6ng3[style*="background-color: rgb(163, 206, 223)"], ._1nc6 ._1aa6[style*="background-color: rgb(163, 206, 223)"] {
    background-color: rgb(0, 132, 255) !important;
}

._1nc6 ._d97[style*="background-color: rgb(66, 183, 42)"], ._6ng3[style*="background-color: rgb(66, 183, 42)"], ._1nc6 ._1aa6[style*="background-color: rgb(66, 183, 42)"] {
    background-color: rgb(66, 183, 42) !important;
}

._1nc6 ._d97[style*="background-color: rgb(247, 146, 59)"], ._6ng3[style*="background-color: rgb(247, 146, 59)"], ._1nc6 ._1aa6[style*="background-color: rgb(247, 146, 59)"] {
    background-color: rgb(247, 146, 59) !important;
}

._1nc6 ._d97[style*="background-color: rgb(140, 114, 203)"], ._6ng3[style*="background-color: rgb(140, 114, 203)"], ._1nc6 ._1aa6[style*="background-color: rgb(140, 114, 203)"] {
    background-color: rgb(140, 114, 203) !important;
}

._1nc6 ._d97[style*="background-color: rgb(163, 206, 113)"], ._6ng3[style*="background-color: rgb(163, 206, 113)"], ._1nc6 ._1aa6[style*="background-color: rgb(163, 206, 113)"] {
    background-color: rgb(163, 206, 113) !important;
}

._1nc6 ._d97[style*="background-color: rgb(207, 165, 136)"], ._6ng3[style*="background-color: rgb(207, 165, 136)"], ._1nc6 ._1aa6[style*="background-color: rgb(207, 165, 136)"] {
    background-color: rgb(207, 165, 136) !important;
}

._1nc6 ._d97[style*="background-color: rgb(236, 126, 189)"], ._6ng3[style*="background-color: rgb(236, 126, 189)"], ._1nc6 ._1aa6[style*="background-color: rgb(236, 126, 189)"] {
    background-color: rgb(236, 126, 189) !important;
}

._1nc6 ._d97[style*="background-color: rgb(175, 156, 218)"], ._6ng3[style*="background-color: rgb(175, 156, 218)"], ._1nc6 ._1aa6[style*="background-color: rgb(175, 156, 218)"] {
    background-color: rgb(175, 156, 218) !important;
}

._1nc6 ._d97[style*="background-color: rgb(0, 132, 255)"], ._1nc6 ._1aa6[style*="background-color: rgb(0, 132, 255)"], ._6ce9 ._4mq3 .fbNubButton:hover, ._6ce9 ._4mq3 .fbNubFlyoutTitlebar:hover, .titlebar ._69pt:hover, ._1ia[style*="background-color: rgb(0, 132, 255)"], ._6ng3[style*="background-color: rgb(0, 132, 255)"], ._6kle[style*="background-color: rgb(0, 132, 255)"], .titlebar ._69pt[style*="background-color: rgb(0, 132, 255)"], ._6yme[style*="background-color: rgb(0, 153, 255)"] {
    background-color: #303030 !important;
}

._1nc6 ._d97[style*="background-color: rgb(255, 195, 0)"], ._6ng3[style*="background-color: rgb(255, 195, 0)"], ._1nc6 ._1aa6[style*="background-color: rgb(255, 195, 0)"], ._1ia[style*="background-color: rgb(255, 195, 0)"], ._6kle[style*="background-color: rgb(255, 195, 0)"], .titlebar ._69pt[style*="background-color: rgb(255, 195, 0)"] {
    background-color: rgb(255, 195, 0) !important;
}

._1nc6 ._d97[style*="background-color: rgb(68, 190, 199)"], ._6ng3[style*="background-color: rgb(68, 190, 199)"], ._1nc6 ._1aa6[style*="background-color: rgb(68, 190, 199)"], ._6kle[style*="background-color: rgb(68, 190, 199)"], ._1ia[style*="background-color: rgb(68, 190, 199)"], .titlebar ._69pt[style*="background-color: rgb(68, 190, 199)"] {
    background-color: rgb(68, 190, 199) !important;
}

._1nc6 ._d97[style*="background-color: rgb(250, 60, 76)"], ._6ng3[style*="background-color: rgb(250, 60, 76)"], ._1nc6 ._1aa6[style*="background-color: rgb(250, 60, 76)"], ._6kle[style*="background-color: rgb(250, 60, 76)"], ._1ia[style*="background-color: rgb(250, 60, 76)"], .titlebar ._69pt[style*="background-color: rgb(250, 60, 76)"]  {
    background-color: rgb(250, 60, 76) !important;
}

._1nc6 ._d97[style*="background-color: rgb(19, 207, 19)"], ._6ng3[style*="background-color: rgb(19, 207, 19)"], ._1nc6 ._1aa6[style*="background-color: rgb(19, 207, 19)"], ._6kle[style*="background-color: rgb(19, 207, 19)"], ._1ia[style*="background-color: rgb(19, 207, 19)"], .titlebar ._69pt[style*="background-color: rgb(19, 207, 19)"]  {
    background-color: rgb(19, 207, 19) !important;
}

._1nc6 ._d97[style*="background-color: rgb(255, 126, 41)"], ._6ng3[style*="background-color: rgb(255, 126, 41)"], ._1nc6 ._1aa6[style*="background-color: rgb(255, 126, 41)"], ._6kle[style*="background-color: rgb(255, 126, 41)"], ._1ia[style*="background-color: rgb(255, 126, 41)"], .titlebar ._69pt[style*="background-color: rgb(255, 126, 41)"]  {
    background-color: rgb(255, 126, 41) !important;
}

._1nc6 ._d97[style*="background-color: rgb(118, 70, 255)"], ._6ng3[style*="background-color: rgb(118, 70, 255)"], ._1nc6 ._1aa6[style*="background-color: rgb(118, 70, 255)"], ._6kle[style*="background-color: rgb(118, 70, 255)"], ._1ia[style*="background-color: rgb(118, 70, 255)"], .titlebar ._69pt[style*="background-color: rgb(118, 70, 255)"] {
    background-color: rgb(118, 70, 255) !important;
}

._1nc6 ._d97[style*="background-color: rgb(32, 206, 245)"], ._6ng3[style*="background-color: rgb(32, 206, 245)"], ._1nc6 ._1aa6[style*="background-color: rgb(32, 206, 245)"], ._6kle[style*="background-color: rgb(32, 206, 245)"], ._1ia[style*="background-color: rgb(32, 206, 245)"], .titlebar ._69pt[style*="background-color: rgb(32, 206, 245)"] {
    background-color: rgb(32, 206, 245) !important;
}

._1nc6 ._d97[style*="background-color: rgb(103, 184, 104)"], ._6ng3[style*="background-color: rgb(103, 184, 104)"], ._1nc6 ._1aa6[style*="background-color: rgb(103, 184, 104)"] {
    background-color: rgb(103, 184, 104) !important;
}

._1nc6 ._d97[style*="background-color: rgb(212, 168, 140)"], ._6ng3[style*="background-color: rgb(212, 168, 140)"], ._1nc6 ._1aa6[style*="background-color: rgb(212, 168, 140)"] {
    background-color: rgb(212, 168, 140) !important;
}

._1nc6 ._d97[style*="background-color: rgb(255, 92, 161)"], ._6ng3[style*="background-color: rgb(255, 92, 161)"], ._1nc6 ._1aa6[style*="background-color: rgb(255, 92, 161)"], ._6kle[style*="background-color: rgb(255, 92, 161)"], ._1ia[style*="background-color: rgb(255, 92, 161)"], .titlebar ._69pt[style*="background-color: rgb(255, 92, 161)"] {
    background-color: rgb(255, 92, 161) !important;
}

._1nc6 ._d97[style*="background-color: rgb(166, 149, 199)"], ._6ng3[style*="background-color: rgb(166, 149, 199)"], ._1nc6 ._1aa6[style*="background-color: rgb(166, 149, 199)"] {
    background-color: rgb(166, 149, 199) !important;
}

.titlebar ._69pt[style*="background-color: rgb(0, 95, 255)"] {
    background-color: rgb(0, 95, 255) !important;
}

.titlebar ._69pt[style*="background-color: rgb(255, 143, 178)"] {
    background-color: rgb(255, 143, 178) !important;
}

.titlebar ._69pt[style*="background-color: rgb(255, 210, 0)"] {
    background-color: rgb(255, 210, 0) !important;
}

.titlebar ._69pt[style*="background-color: rgb(255, 220, 45)"] {
    background-color: rgb(255, 220, 45) !important;
}

.titlebar ._69pt[style*="background-color: rgb(25, 201, 255)"] {
    background-color: rgb(25, 201, 255) !important;
}

._1ia[style*="background-color: rgb(102, 153, 204)"], .titlebar ._69pt[style*="background-color: rgb(102, 153, 204)"] {
    background-color: rgb(102, 153, 204) !important;
}

._1ia[style*="background-color: rgb(103, 184, 104)"], .titlebar ._69pt[style*="background-color: rgb(103, 184, 104)"] {
    background-color: rgb(103, 184, 104) !important;
}

._1ia[style*="background-color: rgb(212, 168, 140)"], .titlebar ._69pt[style*="background-color: rgb(212, 168, 140)"] {
    background-color: rgb(212, 168, 140) !important;
}

._1ia[style*="background-color: rgb(166, 149, 199)"], .titlebar ._69pt[style*="background-color: rgb(166, 149, 199)"] {
    background-color: rgb(166, 149, 199) !important;
}

.fbNubFlyoutOuter , .fbNubFlyoutInner, .fbNub._50mz.opened, ._18y_ ._6806 .uiScrollableArea {
    box-shadow: none !important;
    border: none !important;
}

._2crf {
    background-color: #202020 !important;
    border-top: 1px solid #111 !important;
}

._2crg ._30yy {
    filter: none !important;
}

._18y_ ._6806 {
    box-shadow: inset 0px 1px 5px 0px #000, inset 0 -1px 1px  #666 !important;
    background-color: #141414 !important;
    border: none !important;
    border-radius: 15px !important;
}

.titlebar ._69pt, ._6ce9 ._4mq3 .fbNubButton, ._6a._6cj2 {
    background-color: #202020 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    box-shadow: 0 0 4px #000 !important;
}

.fbNubFlyoutOuter .titlebar ._69pt {
    border-color: transparent !important;
    box-shadow: 0 2px 1px rgba(0, 0, 0, .3) !important;
}

.titlebar ._69pt, ._6z9d ._5-kq, .fbNub._50mz ._6z9d._6vu1, .fbNub._50mz .fbNubFlyout  {
    border-radius: 8px 8px 0 0 !important;
}

._3hx- ._1aa6::after, ._3__-._3hx- ._4tdt, ._3__-._3hx- ._4tdt, ._3hx- ._6vu5 ._4tdt, .fbNub._50mz .fbNubFlyoutFooter::before, ._3hx- ._5wd4, ._3hx- ._4a0v::after, ._4mnq, ._3hx- ._2cnu:only-of-type ._5wdf, ._3hx- ._5z-5, ._3cnp {
    border-color: #202020 !important;
}

._3cnp._3cnq {
	border-top: none !important;
}

._3hx- ._5w-5, ._4gd0, .fbNub._50mz .fbNubFlyoutFooter, #facebook ._3hx- ._1i6a ._2kwv, .fbNub._50mz .fbNubFlyoutFooter::before, ._3hx- ._40qi, ._3hx- ._ua1, ._3hx- ._31o4, ._1sk6, ._4poa ._4po6, ._3hx- ._40fu, ._3hx- ._1a6y, ._3hx- ._3_bp, ._3hx- ._1nc6 ._1aa6._31xy, ._3hx- ._1nc6 ._1e-x ._n4o::after, ._3hx- ._5w0o, ._3hx- ._1xdl, ._126d, ._5wd9 div[style="padding: 20px; background: white none repeat scroll 0% 0%;"], ._1i1j, ._383m {
    background-color: #202020 !important;
}

._3hx- ._1nc6 ._5w1r {
    background-color: transparent !important;
}

._3dzb, ._3dza:hover, ._3dza:active {
    box-shadow: 0 0 2px #999 !important
}

.fbNubFlyoutFooter ._8r, ._1liy ._1lj0:hover {
    background-color: #333 !important;
}

._2zl5 {
    border-color: #333 !important
}

._3hx- ._5yl5 a, ._1liy ._1lj0:hover {
    color: #fff !important;
    text-shadow: none !important
}

._3hx- ._5yl5 a:hover {
    text-decoration: underline !important
}

._1gyx {
    background-color: #42b72a !important;
	border-color: #202020 !important;
}

._4bj5 {
	background: #fff !important;
}

._1sk5 {
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .3), 0 1px 1px rgba(0, 0, 0, .3) !important;
}

/*// MESSENGER PAGE ///////////////////////////////////////////////*/
._nq5 {
	visibility: hidden;
}

._4uwq.semiopaque.highlighted:not([aria-disabled="true"]) {
    background: #fff !important;
}

._4uwq.semiopaque.highlighted:not([aria-disabled="true"])[data-testid="toggleAudioButton"] path {
    color: #000 !important;
}

._4uwq.semiopaque.highlighted:not([aria-disabled="true"])[data-testid="toggleVideoButton"] path {
    color: #000 !important;
}

._4uwq.semiopaque path {
    color: #fff !important;
}
._4uwq.semiopaque[aria-disabled="true"] path {
    color: #929292 !important;
}
._4uwq.semiopaque, button._4uwq.semiopaque:hover {
    background: rgba(100, 100, 100, .75) !important;
    border: 1px solid transparent !important;
    color: #fff !important;
	box-shadow: none !important;
	border-radius: 50% !important;
}

._4uwq.semiopaque[aria-disabled="true"], ._4uwq.semiopaque[aria-disabled="true"]:hover {
    background: none !important;
    border-color: currentColor !important;
    color: #929292 !important;
}
._4uwq.endCall, ._4uwq.endCall:hover {
    background: #f03d25 !important;
    color: #fff !important;
	box-shadow: none !important;
	border-radius: 50% !important
}
._4uwq.endCall path, ._dzt, ._6-ls {
    color: #fff !important;
}
._1a7z ._1a7p {
	border-color: #333 !important;
	color: #ddd !important
}
._4uwq.transparent {
    background: none !important;
    color: #fff;
}
._4uwq.transparent svg path {
    fill: #fff;
}
._4uwq.closeWindow {
    background: rgba(255, 255, 255, 0) !important;
    border: 1px solid currentColor !important;
    color: #fff !important;
}
._4uwq.closeWindow:hover, ._5lc4.hollow:hover, ._4uwq:hover {
    background: rgba(255, 255, 255, .05) !important;
    color: #fff !important;
	box-shadow: none !important;
	border-radius: 48px !important
}

._5lc4.hollow {
    background: transparent !important;
    border: 1px solid #fff !important;
}
._5iwm._6-_b ._58al, ._5iwm ._58al {
    background-color: rgba(0, 0, 0, .2) !important;
	border-radius: 50px !important;
}

._chh {
	background: rgba(0,0,0,1) !important
}

#pagelet_web_messenger ._ksg {
    background: #202020 !important;
    box-shadow: 0 0 4px #000 !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}

#pagelet_web_messenger ._4z0 {
    box-shadow: none !important;
    border: none !important;
}

#pagelet_web_messenger ._4z0 li:hover, ._3z54 {
    background: #333 !important;
}

.wmMasterView {
    border-right: 1px solid #121212 !important;
}

.wmMasterView:after {
    width: 0 !important;
}

._kv, ._sq ._3_om._3cpq, ._5irm._7mkm, .splitPane.default.vertical > .separator > .grip {
    background-color: #121212 !important;
}
._1k2j span {
    color: #da2929 !important;
}
._7t1o {
    background-color: #181818 !important;
}

._2nb ._2n3, ._1rs {
    border-top: 1px solid #333 !important;
}

._2nb ._2n3 .timestamp, ._1a7z ._1a7y, ._1a7z {
    background-color: #202020 !important;
}

._3m31:nth-of-type(3n+1) {
    border-right: 2px solid #202020 !important;
}

._3mts .uiScrollableArea.contentAfter::after {
    background: linear-gradient(rgba(20, 20, 20, .05), #202020) !important;
}

._k- {
    margin-top: 1px !important;
}

._9k .img._9h, ._2t5t {
    filter: invert(1) !important;
    -webkit-filter: invert(1) !important;
}

._36ic, ._5742, ._1q5-, ._4rv3, ._1li-, ._673w, ._3lz9, ._1t2u, ._4_j5, ._2y8y  {
    border-color: #303030 !important;
}

._673w {
	border-bottom: 1px solid #303030 !important;
}

._4_j4 ._5f0v {
    box-shadow: none !important;
}

._hh7 {
    background-color: #151515 !important;
}

._nd_ ._hh7, ._3szn:hover, ._3szo:hover {
    background-color: #303030 !important;
}

._nd_ ._hh7 ._3oh-, ._3szn:hover ._4qba, ._515 ._4qba, ._3szo:hover ._3szq, ._3z56 {
    color: #fff !important;
	text-shadow: none;
}

._3szn:hover ._3szp {
    filter: brightness(200%) !important;
    -webkit-filter: brightness(200%) !important;
}

._33p7 {
    background: #202020 !important;
    border-bottom: 1px solid #303030 !important;
}

._43by._43by[customcolor="#FF7E29"], ._hh7[style*="background-color: rgb(255, 126, 41)"], ._6yme[style*="background-color: rgb(255, 126, 41)"]{
    background-color: rgb(255, 126, 41) !important;
}

._43by._43by[customcolor="#44BEC7"], ._hh7[style*="background-color: rgb(68, 190, 199)"], ._5dr4[style*="background-color: rgb(68, 190, 199)"]{
    background-color: rgb(68, 190, 199) !important;
}

._43by._43by[customcolor="#FFC300"], ._hh7[style*="background-color: rgb(255, 195, 0)"], ._6yme[style*="background-color: rgb(255, 195, 0)"]{
    background-color: rgb(255, 195, 0) !important;
}

._43by._43by[customcolor="#FA3C4C"], ._hh7[style*="background-color: rgb(250, 60, 76)"], ._6yme[style*="background-color: rgb(250, 60, 76)"]{
    background-color: rgb(250, 60, 76) !important;
}

._43by._43by[customcolor="#6699CC"], ._hh7[style*="background-color: rgb(102, 153, 204)"], ._5dr4[style*="background-color: rgb(102, 153, 204)"]{
    background-color: rgb(102, 153, 204) !important;
}

._43by._43by[customcolor="#13CF13"], ._hh7[style*="background-color: rgb(19, 207, 19)"], ._6yme[style*="background-color: rgb(19, 207, 19)"]{
    background-color: rgb(19, 207, 19) !important;
}

._43by._43by[customcolor="#7646FF"], ._hh7[style*="background-color: rgb(118, 70, 255)"], ._6yme[style*="background-color: rgb(118, 70, 255)"] {
    background-color: rgb(118, 70, 255) !important;
}

._43by._43by[customcolor="#20CEF5"], ._hh7[style*="background-color: rgb(32, 206, 245)"], ._6yme[style*="background-color: rgb(32, 206, 245)"]{
    background-color: rgb(32, 206, 245) !important;
}

._43by._43by[customcolor="#67B868"], ._hh7[style*="background-color: rgb(103, 184, 104)"], ._5dr4[style*="background-color: rgb(103, 184, 104)"]{
    background-color: rgb(103, 184, 104) !important;
}

._43by._43by[customcolor="#D4A88C"], ._hh7[style*="background-color: rgb(212, 168, 140)"], ._5dr4[style*="background-color: rgb(212, 168, 140)"]{
    background-color: rgb(212, 168, 140) !important;
}

._43by._43by[customcolor="#FF5CA1"], ._hh7[style*="background-color: rgb(255, 92, 161)"], ._6yme[style*="background-color: rgb(255, 92, 161)"]{
    background-color: rgb(255, 92, 161) !important;
}

._43by._43by[customcolor="#A695C7"], ._hh7[style*="background-color: rgb(166, 149, 199)"], ._5dr4[style*="background-color: rgb(166, 149, 199)"]{
    background-color: rgb(166, 149, 199) !important;
}

._hh7[style*="background-color: rgb(214, 150, 187)"], ._6yme[style*="background-color: rgb(214, 150, 187)"]{
    background-color: rgb(214, 150, 187) !important;
}

._hh7[style*="background-color: rgb(230, 133, 133)"], ._6yme[style*="background-color: rgb(230, 133, 133)"]{
    background-color: rgb(230, 133, 133) !important;
}

._43by._43by[customcolor="#D696BB"] {
    background-color: #D696BB !important;
}

._43by._43by[customcolor="#E68585"] {
    background-color: #E68585 !important;
}

._374c {
    width: 160px !important;
}

._374b {
    border-bottom: 1px solid rgba(255, 255, 255, .05) !important;
}

._374d ._5f0v, ._4_j9 .uiScrollableArea {
    box-shadow: none !important;
}

._5jb0 ._4rlu._4rlt {
    background-color: #333 !important;
}

._1u5d ._3dwl {
    background-color: #111 !important;
}

._1u5d ._337l {
    background-color: #444 !important;
}

._1u5d ._3dwf {
    background-color: #202020 !important;
}

._5nxf {
    background-color: #f03d25 !important;
    color: #fff !important;
}

._5nxf em, ._nd_ ._hh7 a, ._nd_ ._hh7 ._3oh- span {
    color: #fff !important;
	text-shadow: none;
}

._3h_u:hover {
    background-color: rgba(255, 255, 255, .3) !important;
    color: #fff !important;
    text-shadow: none !important;
}

._3h_u {
    color: #ddd !important;
    cursor: pointer !important;
    text-shadow: none !important;
}

._1oye {
    background: #000 !important;
}

._4-oi {
    border-bottom: rgba(255, 255, 255, .1) 1px solid !important;
}

._4dfu {
    background-image: linear-gradient(to right, #202020,#444, #202020) !important;
    height: 1px !important;
}

._hh7._2f5r {
    background: none !important;
    border: none !important;
}

._3z52 ._3z56 {
	background-color: white !important;
}

._3z52 ._3z53 {
    color: #f03d25 !important;
}

._5iwm._6-_b ._58al::placeholder {
	color: #888 !important;
}

._576q svg > rect {
	fill: #202020 !important;
}

._6yme[style*="background-color: rgb(0, 132, 255);"] {
    background-color: #303030 !important
}

._6yme[style*="background-color: rgb(68, 190, 199);"] {
    background-color: rgb(68, 190, 199) !important
}

._43by {
	background-attachment: fixed !important;
}

._43by[style*="background-image: linear-gradient(rgb(255, 220, 45) 0%, rgb(255, 150, 22) 50%, rgb(255, 79, 0) 100%)"] {
	background-image: linear-gradient(rgb(255, 220, 45) 0%, rgb(255, 150, 22) 50%, rgb(255, 79, 0) 100%) !important;
}

._43by[style*="background-image: linear-gradient(rgb(255, 143, 178) 0%, rgb(167, 151, 255) 50%, rgb(0, 229, 255) 100%)"] {
	background-image: linear-gradient(rgb(255, 143, 178) 0%, rgb(167, 151, 255) 50%, rgb(0, 229, 255) 100%) !important;
}

._43by[style*="background-image: linear-gradient(rgb(255, 210, 0) 0%, rgb(110, 223, 0) 50%, rgb(0, 223, 187) 100%)"] {
	background-image: linear-gradient(rgb(255, 210, 0) 0%, rgb(110, 223, 0) 50%, rgb(0, 223, 187) 100%) !important;
}

._43by[style*="background-image: linear-gradient(rgb(0, 95, 255) 0%, rgb(146, 0, 255) 50%, rgb(255, 46, 25) 100%)"] {
	background-image: linear-gradient(rgb(0, 95, 255) 0%, rgb(146, 0, 255) 50%, rgb(255, 46, 25) 100%) !important;
}

._43by[style*="background-image: linear-gradient(rgb(25, 201, 255) 0%, rgb(0, 230, 210) 50%, rgb(14, 230, 183) 100%)"] {
	background-image: linear-gradient(rgb(25, 201, 255) 0%, rgb(0, 230, 210) 50%, rgb(14, 230, 183) 100%) !important;
}



/*// PHOTOS //////////////////////////////////////////////////////*/

.fbPhotosPhotoTagboxBase .innerTagBox {
    border: 4px solid #333333 !important;
}

.fbPhotosPhotoTagboxBase .tagName {
    background: #333333 !important;
}

._513x, ._5y5a ._5h12 > span::after, i._5cmh {
    background: #666 !important;
    border-top: 2px solid #666 !important;
    height: 2px !important;
    width: 55px !important;
    margin-left: -27px !important;
}

.fbxWelcomeBoxBlock .fbxWelcomeBoxImg, ._4fn6 ._s0._2dpc._rw.img {
    border: 0px none !important;
    border-radius: 3px !important;
    transform: scale(1) !important;
    transition: all .4s !important;
    -webkit-transition: all .4s !important;
}

._2dpe::after, ._2dpe:hover::after {
    background: none !important;
}

._52d9, ._1cr_, ._17zz {
    background: rgba(0,0,0,.6) !important;
}

._52db {
    color: #ddd !important;
}

._4d3w._2nw8 .snowliftOverlayBar {
    background: linear-gradient(transparent, rgba(0, 0, 0, .8)) !important;
}

.fbPhotoSnowliftPopup .uiScrollableArea._467y {
    box-shadow: none !important;
}

.fbPhotoSnowliftPopup ._1mtp ._3wv2:hover, .fbPhotoSnowliftPopup ._1mtp ._4k43:hover, .fbPhotoSnowliftPopup ._1mtp ._4noj:hover {
    box-shadow: none !important;
    background: none !important;
    border-color: transparent !important;
}

._5pcr {
    overflow: hidden !important
}

.mtm ._6m2._5ej3 ._34js._34js {
    margin-right: 17px !important;
    margin-top: -7px !important
}

._4g9v .count {
    color: rgba(255,255,255,.8) !important;
}

._53d ._5glz, ._2iem, ._dqe {
    color: #fff !important;
}

/*// LOGO FB /////////////////////////////////////////////////////*/

a._19eb ._2md{
    opacity: .6 !important;
    transition: all .5s;
}

a._19eb ._2md:hover, a._19eb ._2md:focus, a._19eb ._2md:active {
    opacity: 1 !important;
    }

/*// SOME FIXES //////////////////////////////////////////////////*/

.fbTimelineUnit.fbTimelineTwoColumn .timelineUnitContainer.fbTimelineComposerUnit {
    width: 514px;
}

._1d9- {
    margin: 11px 11px 0;
}

._1_br {
    border-color: #aaa !important;
}

._1_bl, ._5v3u {
    border-color: #444 !important;
}

._5jb-._202q:hover {
    border-color: #fff !important;
}

._5jb-:hover {
    border-color: #ccc !important;
}

._5jb-._202q {
    border-color: #ccc !important;
}

._5jb- {
    border: 5px solid transparent !important;
    margin: 1px !important;
}

.captcha_dialog.uiLayer ._14 a {
     background: none !important;
}

.uiInputLabel .uiInputLabelInput._ypo + label.uiInputLabelLabel, ._5njd ._4qpq, ._4xda ._3hrq._3hrq {
    text-shadow: 0 0 2px #111 !important;
}

._ypo span::before, ._128k ._128o, ._128l ._128o, ._6ufn , ._6ufp{
    box-shadow: 1px 1px 2px -1px rgba(0, 0, 0, .95) inset, 1px 1px 0px rgba(0, 0, 0, .8) inset, 1px 1px 0px rgba(255, 255, 255, .15)  !important;
}

._2ffa._tj_, ._asu._2eyq {
    color: #ccc !important;
}

._ypo span {
    border-left: 2px solid #444 !important;
    background-color: #111 !important;
}

._6ufn {
	background-color: #111 !important
}

._6ufm:hover, ._4eby ._5ixy:hover {
	background: none !important;
	box-shadow: none !important
}

._ypo > input + span::after, ._128l ._128p, ._128k ._128p, ._6ufp {
    background-color: #333 !important;
    border: 1px solid transparent !important;
    box-shadow: 0px 1px 2px 0px #000, 0px 1px 0px 0px rgba(255, 255, 255, .15) inset !important;
    }

._ypo > input:checked + span {
    border-left-width: 13px !important;
}

._128k ._128o, ._6ufo {
    background: #444 !important;
    }

a._2l5g::after {
    background: #666 !important;
    height: 3px !important;
    width: 100% !important;
    left: 0px !important;
    margin-left: 0 !important;
}

* {
    outline:none!important;
}

.GM_options_wrapper_inner, .bfb_tabs > .bfb_tab_selected, ._m_1, ._7tk-  {
    background: #282828 !important;
	transition: .4s;
}

.bfb_tabs > .bfb_tab_selected:hover, ._63ep {
    background: #333333 !important;
}

.bfb_tabs > .bfb_tab_selected {
    border-color: #444444 !important;
}

.emoticons_off .emoticon {
    display: none !important;
}

._2c44 ._2f6b, ._1qqu {
    background: #202020 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.1) !important;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1) !important;
}

._e_z {
    background: #FFF none repeat scroll 0% 0% !important;
    border-radius: 6px;
    box-sizing: border-box;
    height: 12px;
    left: 20px;
    position: absolute;
    top: 2px;
    transition: all 300ms cubic-bezier(0.1, 0.7, 0.1, 1) 0s;
    width: 12px;
}

._e_x {
    background-color: #333 !important;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    height: 16px;
    overflow: hidden;
    position: relative;
    transition: all 300ms cubic-bezier(0.1, 0.7, 0.1, 1) 0s;
    -moz-user-select: none;
    width: 34px;
}

.name, ._1drq, ._58gi span, ._58gh div._58gj, ._8_2 span, ._50f3, .fbAggregatedMapPinText, #fbPhotoSnowliftMediaTitle .fbPhotoMediaTitle a, ._51i5 ._5l1x span, .pageByline, .ellipsis, .pageByline li, ._5aqf, .uiIconText, ._6lh ._6lp a, ._6lh ._6lp ._6lo, ._4i5p._3htz, ._5b_0 .fsxxl, ._5b_0 ._6n9, ._3-_a span, ._3-_v span, .groupHugFaceTip, ._5a5k span, ._5v1l a, ._5a5l span, ._34mw, .fbRemindersContent .fbRemindersFooter:hover, .fbReminders .fbRemindersStory .fbRemindersTitle:hover strong, ._39rz, ._2dj0, ._3rno._530p ._2wrj span, ._2i5e h1, ._2i5e span a, ._4qn3 {
    color: #fff !important;
    text-shadow: 0px 0px 3px #111 !important;
    transition: all .3s !important;
    -webkit-transition: all .3s !important;
}

._3-_v {
    border: 1px solid #eee !important;
}

._4eq5, ._4eq6, ._38le, ._38lf, ._3-8s, ._bui ._5afe:hover .linkWrap, ._bui ._55yu:hover + ._5afe .linkWrap, ._bui ._55yu.openToggler + ._5afe .linkWrap, ._bui .buttonWrap:hover + ._5afe .linkWrap, #userNav ._bui ._5afe .linkWrap:hover, ._4eby ._5ixy:hover, ._2c9i ._19jt {
    color: #eee !important;
}

._bui .buttonWrap ._6a.focused a {
    opacity: 0  !important
}

._bui .buttonWrap ._6a.openToggler a, ._bui .buttonWrap:hover ._6a a {
    opacity: 1  !important
}

._5ia1 ._5ia2 table tbody tr td p a:hover {
    color: #111 !important;
}

.fbFeedTicker .fbFeedTickerStory a:hover, .pam .fsm {
    text-shadow: 0 0 2px #000 !important;
}

#contentCurve {
    border-bottom: 1px solid #333 !important;
}

._1ui8 {
    width: auto !important;
}

.__wu ._539-.roundedBox .uiSearchInput .inputtext {
    padding-top: 4px !important;
}

.UFIStickersEnabledInput .innerWrap, .UFIAddCommentWithPhotoAttacher .innerWrap {
    border: none !important;
}

._mxp ._18im, .fbEventDashboardItem ._5a5l {
    background: rgba(0,0,0,.65) !important;
    padding: 5px !important;
    border: 2px solid rgba(255,255,255,.7) !important;
    box-shadow: 0 0 4px #000 !important;
    border-radius: 3px !important;
}

._yn1 ._394m a {
   margin-top: -4px !important;
}

._g2z, .pollOptions .fbQuestionsPollResultsBar, .pollOptions .pollResultsFacepile .fbQuestionFacepileMoreItem, ._12-g .fbEigenpollFacepile .fbQuestionFacepileMoreItem, ._3uy4, ._1jf6, ._1klk, ._3-a6 ._4ic_ {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAMAAAAw96PuAAAAMFBMVEUbGxsaGhoiIiIcHBwVFRUYGBggICAeHh4WFhYfHx8XFxcUFBQdHR0ZGRkhISESEhKy7ZvJAAABQUlEQVR42l1TUZLFIAiDRQpS3Xf/2+6Ugjw2X6nTxMgEAPxJ0IAXzFeeCcKFCoHJ9pKbKI5wCNBUjE+S4dR4pkhRABbcEBDUV5cWW6ebG597FF9dYMBy80zofq4LsM1MWGGNXRcWizJhhaXbKuaWr4QJ28UfiwDveQUIsbjBGcta9AJYwCgwt7b7ckKiDP/yoZ4JsU5YNCqf0zYhWs+L7fyiHLqA+UtpjXi8+4XOgfG8Suh+bUJBM6H7gYGdCclJeGsAGaimJXm/8VUThAtGr0cWJGmrR5i0gkirh8AIXRWkFTj87kdXlY4CVz1S1yotbSFC1xNPhQQNphOzEq+vjmFxXZAw/K0t/OKW+foK9QWr+2qF2oLto6sJ9QUbVaxaoV4Pdp30FaJWj9RVpavATrfCx3U9seiuhQBGPZBTYC38AccDDZOEuQAKAAAAAElFTkSuQmCC) !important;
    background-repeat: repeat !important;
    background-color: rgba(0,0,0,.15) !important;
    border: 1px solid #111 !important;
    border-bottom: 1px solid rgba(255,255,255,.16) !important;
    box-shadow: inset 0 0px 3px 0 #111 !important;
}

.pollOptions .shaded, ._g2z .shaded, ._36bx ._2dck ._1mf7  {
    background: #333 !important;
}

.pollOptions .fbQuestionsPollClickTarget:hover, ._g2z .fbQuestionsPollClickTarget:hover {
    border: 1px solid #555 !important;
}

.profileApprovalRow ._4-u8, ._4idn {
    background: #202020 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
    box-shadow: 0 0 4px #000 !important;
}

#pagelet_subscribed_events_list ._18b8 a i {
    display: none !important;
}

._416u ._5q9i, .gecko ._416u ._5q9i {
    background-image: none !important;
    box-shadow: none !important;
}

._18rk ._5h60 ._4-u2 {
	box-shadow: none !important;
	border-color: transparent !important;
	border-top-color: #333 !important;
	border-bottom-color: #333 !important;
}

._50-0._50z-:hover {
    transition: none !important;
    -webkit-transition: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
}

._3-ma._2bnd, ._3-ma._2bne, ._rzn ._4m1w {
    color: #202020 !important;
    text-shadow: none !important;
    font-weight: bold !important;
}

._bla, ._39ry {
    color: #ddd !important;
}

._5pcm/*, ._5vsj.UFIContainer .UFIReplyList ._4oep._4204::after, ._5vsj.UFIContainer .UFIReplyList ._4oep._2o9m::after, ._5vsj.UFIContainer .UFIReplyList ._4oep*/ {
    border-left: 2px solid #444 !important;
    margin-left: 0 !important;
    border-radius: 0px !important;
}

._5wpt {
    border-left-color: #303030 !important;
}

._5vsj.UFIContainer .UFIReplyList ._4oep._4204::after, ._5vsj.UFIContainer .UFIReplyList ._4oep._2o9m::after {
    left: -1px !important;
}

._2gyk #u_0_i {
    border-color: transparent !important;
}

._5a5k {
    background-color: rgba(0, 0, 0, 0.25) !important;
    border: 2px solid #fff !important;
    border-radius: 5px !important;
}

._5u8u {
    background: #282828 !important;
    padding: 2px 0 1px 0 !important;
    border-bottom: 1px solid #555 !important;
    border-top: 1px solid #555 !important;
}

._rzn a._4m1x ._4m1w span, ._rzn a._4m1x ._4m1w ._50f6._50f7  {
    color: #252525 !important;
    text-shadow: none !important;
}

._6rsw ._796a, ._797t ._796b .uiPopover {
    color: #000 !important;
    text-shadow: none !important;
}

._6rsw a, ._6rsw ._58cl {
    color: inherit !important;
    text-shadow: none !important;
}

._202.selected, div.uiTypeaheadView .selected, ._ko7, ._2pt3 {
    background: #333 !important;
}

._4oyq {
    background: #202020 !important;
    border: 1px solid #eee !important;
    opacity: .8 !important;
}

span._4a6n, ._4m1w ._4m1z span, ._4m1w ._4m1z ._4sic, ._iji, ._17z_, ._17-0, span._4a6n[style*="color:rgba(255,255,255,1.00);"], ._6rsw[style*="color: rgb(255, 255, 255);"] span, ._797s ._796a, ._797s ._797t ._796b .uiPopover, ._797s ._797t ._796b span {
    color: #fff !important;
    text-shadow: none !important;
}

span._4a6n[style*="color:rgba(0,0,0,1.00);"], ._6rsw[style*="color: rgb(0, 0, 0);"] span {
    color:rgba(0,0,0,.9) !important;
    text-shadow: none !important;
}

span._4a6n[style*="color:rgba(0,0,101,1.00);"], ._6rsw[style*="color: rgb(0, 0, 101);"] span {
    color:rgba(0,0,101,.9) !important;
    text-shadow: none !important;
}

._5qxm[style*="background-color:rgba(74,144,226,1.00)"], ._23jq[style*="background-color: rgb(74, 144, 226);"], ._2ihx._i-o[style*="background-color: rgb(74, 144, 226);"] {
    background-color: rgba(74, 144, 226, 1) !important;
}

._5qxm[style*="background-color:rgba(84,199,236,1.00)"], ._23jq[style*="background-color: rgb(84, 199, 236);"], ._2ihx._i-o[style*="background-color: rgb(84, 199, 236);"] {
    background-color: rgba(84, 199, 236, 1) !important;
}

._5qxm[style*="background-color:rgba(252,216,114,1.00)"], ._23jq[style*="background-color: rgb(252, 216, 114);"], ._2ihx._i-o[style*="background-color: rgb(252, 216, 114);"] {
    background-color: rgba(252,216,114,1.00) !important;
}

._5qxm[style*="background-color:rgba(243,83,105,1.00)"], ._23jq[style*="background-color: rgb(243, 83, 105);"], ._2ihx._i-o[style*="background-color: rgb(243, 83, 105);"] {
    background-color: rgba(243,83,105,1.00) !important;
}

._5qxm[style*="background-color:rgba(95,102,115,1.00)"], ._23jq[style*="background-color: rgb(95, 102, 115);"], ._2ihx._i-o[style*="background-color: rgb(95, 102, 115);"] {
    background-color: rgba(95,102,115,1.00) !important;
}

._5qxm[style*="background-color:rgba(23,172,255,1.00)"], ._23jq[style*="background-color: rgb(23, 172, 255);"], ._2ihx._i-o[style*="background-color: rgb(23, 172, 255);"] {
    background-color: rgba(23, 172, 255, 1) !important;
}

._5qxm[style*="background-color:rgba(93,63,218,1.00)"], ._23jq[style*="background-color: rgb(93, 63, 218);"], ._2ihx._i-o[style*="background-color: rgb(93, 63, 218);"] {
    background-color: rgba(93, 63, 218, 1) !important;
}

._5qxm[style*="background-color:rgba(243,142,123,1.00)"], ._23jq[style*="background-color: rgb(243, 142, 123);"], ._2ihx._i-o[style*="background-color: rgb(243, 142, 123);"] {
    background-color: rgba(243, 142, 123, 1) !important;
}

._5qxm[style*="background-color:rgba(255,0,64,1.00)"], ._23jq[style*="background-color: rgb(255, 0, 64);"], ._2ihx._i-o[style*="background-color: rgb(255, 0, 64);"] {
    background-color: rgba(255, 0, 64, 1) !important;
}

._5qxm[style*="background-color:rgba(255,99,35,1.00)"], ._23jq[style*="background-color: rgb(255, 99, 35);"], ._2ihx._i-o[style*="background-color: rgb(255, 99, 35);"] {
    background-color: rgba(255, 99, 35, 1) !important;
}

._3_t5[style*="background-color:rgba(17,17,17,1.00)"], ._5qxm[style*="background-color:rgba(17,17,17,1.00)"], ._23jq[style*="background-color: rgb(17, 17, 17);"], ._2ihx._i-o[style*="background-color: rgb(17, 17, 17);"], ._2j78[style*="background-color: rgb(17, 17, 17);"], ._1u45[style*="background-color: rgb(17, 17, 17);"], ._6rsn[style*="background-color: rgb(17, 17, 17);"] {
    background-color: rgba(17, 17, 17, 1) !important;
}

._5qxm[style*="background-color:rgba(39,55,94,1.00)"], ._23jq[style*="background-color: rgb(39, 55, 94);"], ._2ihx._i-o[style*="background-color: rgb(39, 55, 94);"] {
    background-color: rgba(39, 55, 94, 1) !important;
}

._3_t5[style="background-color:rgba(226,1,59,1.00)"], ._5qxm[style*="background-color:rgba(226,1,59,1.00)"], ._23jq[style*="background-color: rgb(226, 1, 59);"], ._2ihx._i-o[style*="background-color: rgb(226, 1, 59);"], ._2j78[style*="background-color: rgb(226, 1, 59);"], ._1u45[style*="background-color: rgb(226, 1, 59);"], ._6rsn[style*="background-color: rgb(226, 1, 59);"] {
    background-color: rgba(226, 1, 59, 1) !important;
}

._3_t5[style*="background-color:rgba(198,0,255,1.00)"], ._5qxm[style*="background-color:rgba(198,0,255,1.00)"], ._23jq[style*="background-color: rgb(198, 0, 255);"], ._2ihx._i-o[style*="background-color: rgb(198, 0, 255);"], ._2j78[style*="background-color: rgb(198, 0, 255);"], ._1u45[style*="background-color: rgb(198, 0, 255);"], ._6rsn[style*="background-color: rgb(198, 0, 255);"] {
    background-color: rgba(198, 0, 255, 1) !important;
}

._3_t5[style*="background-color:rgba(255,61,0,1.00)"], ._5qxm[style*="background-color:rgba(255,61,0,1.00)"], ._23jq[style*="background-color: rgb(255, 61, 0);"], ._2ihx._i-o[style*="background-color: rgb(255, 61, 0);"], ._2j78[style*="background-color: rgb(255, 61, 0);"], ._1u45[style*="background-color: rgb(255, 61, 0);"] {
    background-color: rgba(255, 61, 0, 1) !important;
}

._3_t5[style*="background-color:rgba(236,0,190,1.00)"], ._5qxm[style*="background-color:rgba(236,0,190,1.00)"], ._23jq[style*="background-color: rgb(236, 0, 190);"], ._2ihx._i-o[style*="background-color: rgb(236, 0, 190);"], ._2j78[style*="background-color: rgb(236, 0, 190);"], ._1u45[style*="background-color: rgb(236, 0, 190);"], ._6rsn[style*="background-color: rgb(236, 0, 190);"] {
    background-color: rgba(236, 0, 190, 1) !important;
}

._3_t5[style*="background-color:rgba(114,17,36,1.00)"], ._5qxm[style*="background-color:rgba(114,17,36,1.00)"], ._23jq[style*="background-color: rgb(114, 17, 36);"], ._2ihx._i-o[style*="background-color: rgb(114, 17, 36);"], ._2j78[style*="background-color: rgb(114, 17, 36);"], ._1u45[style*="background-color: rgb(114, 17, 36);"], ._6rsn[style*="background-color: rgb(114, 17, 36);"] {
    background-color: rgba(114, 17, 36, 1) !important;
}

._3_t5[style*="background-color:rgba(0,115,255,1.00)"], ._5qxm[style*="background-color:rgba(0,115,255,1.00)"], ._23jq[style*="background-color: rgb(0, 115, 255);"], ._2ihx._i-o[style*="background-color: rgb(0, 115, 255);"], ._2j78[style*="background-color: rgb(0, 115, 255);"], ._1u45[style*="background-color: rgb(0, 115, 255);"] {
    background-color: rgba(0, 115, 255, 1) !important;
}

._1cbc {
    border-color: #333 !important;
}

._2786:hover, ._65ue:hover, ._23ct._6zv9._6zva {
    background-color: rgba(255, 255, 255, .05) !important;
}

._1u45 {
    box-shadow: 0 0 4px #000 !important;
}

._23ju {
    background-color: #202020 !important;
}

._2ihx ._1p1u ._1p1v, ._2ihx ._1mj span {
    color: rgba(255, 255, 255, .95) !important;
    text-shadow: none !important;
}

._5zfs:not(._4f4o):hover {
    background: rgba(255, 255, 255, .1) !important;
}

._2ihx ._1mwp[style*="color: rgb(0, 0, 0);"] ._1mf span {
    color: rgb(0, 0, 0) !important;
}

._4ydj._51m-[style*="opacity: 1; transform: translateX(420px);"] ._2j78 {
    background-color: #fff !important;
}

._m_1._3x6w._mwg, ._1cx1 ._m_1:hover, ._1cx1 ._5g_r:hover ._m_1, ._7tk-:hover {
    box-shadow: inset 0 -38px 0 #333 !important;
	transition: .5s;
}

._3-a6 .UFICommentActorAndBody {
	margin-bottom: 4px !important;
}

._247o {
	background-color: #303030 !important;
    border-radius: 3px !important;
}

._50zm {
    width:99.9% !important;
}

._4idm, ._22sv {
    background-color: #151515 !important;
}

._6qdm, ._5mfr span._6qdm {
    color: transparent !important;
    text-shadow: none !important;
}

/*// VIDEO PLAYER ////////////////////////////////////////////////*/

._2yua, ._2yu9, ._2xyd, ._4t7r, ._3pat {
    background-color: #fff !important;
}

._2yu7, ._voo, ._h1p, ._3i5f, ._2iw3 {
    background-color: #666 !important;
}

._2i_x, ._3pao, ._38a2:hover ._2yv, ._28h1, ._2r86, ._26oo, ._5sjs, ._cgv ._f_c {
    background-color: rgba(0, 0, 0, 0.85) !important;
}

._3paq, ._2yu7, ._2yu8, ._4t7u {
    background-color: rgba(255, 255, 255, .4) !important;
    box-shadow: 0 0 1px #000 !important;
}

._3iiv, ._3iiu {
    background-color: rgba(20, 22, 26, .3) !important;
}

._4m8d {
    background-color: rgba(0,0,0,.7) !important;
	padding: 5px 5px 3px 5px !important;
	margin-top: 5px !important;
	border-radius: 3px;
}

._4bcw {
	margin: auto !important;
}

._3par, ._3pas {
    background-color: #fff !important;
}

._4d3w .stageWrapper, ._20m9, ._16gj, ._3rl2, ._xcy, ._14ep, ._4wd3, ._6iyw, ._6x7t {
    background: #000 !important;
}

._1c7d button {
    background: none !important;
    box-shadow: none !important;
    opacity: .8 !important;
}

._1c7d button:hover, ._26oo ._26oq {
    background: none !important;
    box-shadow: none !important;
    opacity: 1 !important;
}

._1ec span, ._5qsq span, ._35sk ._53bl, ._35sk ._35si, ._35sk ._35sj, ._5ugg, ._5vb_ .uiSideNav .selectedItem .item .linkWrap, ._2yu, ._4ctq ._4cts, ._4ctq div, ._25e2, ._4irg, ._4v8x, ._5rl2, ._24wr, ._4irh, ._20m9 .mam div, ._3-4e .fcw, ._3-4e ._3-4r span, ._26oo ._26oq em, ._3iit, ._66_y, ._4lu-, ._66_y span, ._3t53 div {
   color: #fff !important;
   text-shadow: 0 0 2px #000 !important;
}

._20m9 .mam ._20ma {
   color: #dc3847 !important;
    }

li._1zw6 ._42ef ._50f3, ._3_h1 {
   color: #999 !important;
   text-shadow: none !important;
}

._1ec, ._35sk, ._4irh, ._2a_1, ._1r-0, ._f_3, ._3iit, ._2dig, ._2ebi, ._75tx, ._62ej ._5ig6, ._5-g_ ._7y75 {
    background-color: rgba(0,0,0,.4) !important;
}

._4whp {
    background-color: rgba(0,0,0,.6) !important;
	padding: 7px 6px 6px 6px !important;
	border-radius: 4px;
}

._24wr {
    width: 90% !important;
    text-align: center !important;
    padding-bottom: 2px !important;
    padding-top: 1px !important;
    margin-bottom: -2px !important;
    border-radius: 0 !important;
    background-color: rgba(0,0,0,.65) !important;
}

._35sk._tbz ._2le_ {
    bottom: 20px !important;
    left: 2px !important;
}

.fbTimelineUnit ._1zw4 ._1zw6 ._50f3 {
    color: #999 !important;
}

._5fvj ._2apb {
    border: 4px solid #fff !important;
    border-radius: 50% !important;
    background-color: rgba(20, 22, 26, 0.3) !important;
    transition: background-color 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    -webkit-transition: background-color 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

._2u7 {
    background-color: #030303 !important;
}

._4lqu {
    background-color: transparent !important;
    background-image: url("https://static.xx.fbcdn.net/rsrc.php/v2/yt/r/ag-Kz-WMvnK.png") !important;
    background-repeat: repeat-x !important;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s !important;
}

._4ctp._3htz {
    background-color: rgba(20, 22, 26, 0.7) !important;
}

._2mbh button:hover, ._2mbh button, ._6dic ._1yyn {
    background: none !important;
    box-shadow: none !important;
}

._6dic ._1yyn a {
    border: 1px solid #555 !important;
    border-radius: 16px !important;
}

._6dic ._1yyn a:hover {
    background: rgba(255,255,255,0) !important;
    box-shadow: none !important;
    border: 1px solid #ddd !important;
    transition: .4s !important;
    border-radius: 16px !important;
}

._6dic ._1yyn a:hover img {
    filter: invert(100%) brightness(15%) !important;
    transition: .9s !important;
}

._28h1 a:hover, li._1zw6 ._42ef ._50f3 a, ._3_h0 text, ._3_h1, ._2864, ._20hk {
    text-shadow: none !important;
}

._4v8w, ._2xyg {
    background-color: rgba(255, 255, 255, 0.5) !important;
}

._i5q ._2-mo, ._gn5 {
    background-color: #fff !important;
    box-shadow: 0 0 2px #000 !important;
}

._i5q ._2-mm, ._gn2, ._gn3 {
    background-color: rgba(255, 255, 255, 0.3) !important;
}

._h1o {
    background-color: rgba(255, 255, 255, .05) !important;
}

._i5q ._2-mp, ._i5q ._2-mn, ._gn4, ._2w_u ._3par {
    background-color: #fff !important;
}

._24wt {
    box-shadow: 0 0 1px #111 !important;
}

._5pe-, ._2pq9, ._33ue, ._4fer, ._1p51, ._2u1y {
    background-color: #fa3e3e !important;
}

._5pf0, ._3sxt, ._2wma, ._5mo5 ._5r2h, ._5mo6 ._4dbn, ._1-h1, ._3bwx, ._3i5f, ._2pq8, ._2pq9, ._2wrk, ._1jb_, ._2oqk, ._64dj, ._1iwj ._3t53 div, ._4t9q, ._4t9t ._4bl9, ._4t9t ._4bl7, ._4t9t ._4bl7 span, ._66_-, ._2dig ._3qng, ._dta, ._dta a, ._4fer, ._17b5, ._1mxt, ._1svp, ._2ieq, ._3_h0 text, ._2864, ._20hk, ._75tx, ._2u1y, ._2u3s div, ._7y76 {
    color: #fff !important;
}

._1jb_, ._6230, ._2pq8, ._2a_1, ._60x6 {
    background: rgba(0,0,0,.6) !important;
}

._1sno, ._30vn span {
    background-color: rgba(20, 22, 26, .45) !important;
    color: #fff !important;
    text-shadow: 0 0 3px rgba(20, 22, 26, .75), 0 0 3px rgba(0, 0, 0, .8) !important;
}

._26oo ._26oq, ._2w_u ._3pao {
    background: transparent !important;
}

._2a_5 {
    background-color: rgba(0, 0, 0, .15) !important;
    border: #ffffff 2px solid !important;
}

._1iwj, ._77vt {
    background-color: rgba(0, 0, 0, .5) !important;
    border: #ffffff 2px solid !important;
}

._5mly ._3-uf._3qnf {
    background-color: #191919 !important;
}

._5-lm, ._64gd._ikh, ._1i_b, ._1i_b button, ._77vu {
    background-color: #202020 !important;
}

._5-g-, ._55ra {
    background-color: #000 !important;
    animation: fbTahoe_fadeInBlack .4s cubic-bezier(.12,.8,.32,1) forwards !important;
}

.ego_section {
    display: none !important;
}

._h1l a span, ._h1k a span {
    color: #666 !important;
}

._h1l._1hqh a span, ._h1k._1hqh a span, ._6236, ._6237, ._6238, ._6239, ._4ik6 span, ._6234 span, ._6232, ._601i ._h1l a span, ._4m8d, ._cgv ._f_c ._50f7, ._cgv ._f_2 button, ._2iw5, ._3eea, ._4ik4 span, ._6rb8, ._6sm7 ._70vz, ._7wu5, ._7y4b._7-ej, ._7y4b._7-ej div {
    color: #fff !important;
}

._7y4b._7-em, ._7y4b._7-em div {
    color: #000 !important;
	text-shadow: none;
}

._4ik4 {
  	word-wrap: break-word;
	text-overflow: ellipsis;
  	overflow: hidden;
	position: relative;
  	max-height: 4.8em;
  	line-height: 1.2em;
}

._cgv ._f_2 button i {
    filter: none !important;
}

.sp_IpNCUGgnhsL.sx_287162, ._3d0s a i.img {
    filter: grayscale(100%) invert(100%) brightness(200%) !important;
    -webkit-filter: grayscale(100%) invert(100%) brightness(200%) !important;
}

i.img._6jjn.sp_Ju7u8f4tjW0.sx_65c255, ._2xuj._6jjn.img.sp_x0WrXv9EBoy.sx_f302fc {
    background-image: none !important;
}

._132c {
    background-color: #111 !important;
    color: #fff !important;
    border: 1px solid #fff !important
}

._601i ._1bn5 ._4-u2{
    background: none !important;
    border-color: transparent !important;
    box-shadow: none !important;
    border-bottom-color: #333 !important
}

._437j ._37uu ._3m9g a:hover, ._437j ._37uu ._1mtp ._3wv2:hover, ._437j ._37uu ._517h, ._437j ._37uu ._1mtp ._4k43:hover, ._437j ._37uu ._1mtp ._4noj:hover, ._437j ._3prz ._42ft:hover, ._4-u2[style="_2ph-"], ._5r69 ._2-82 {
    background: none !important;
    border-color: transparent !important;
    box-shadow: none !important;
}

._2eso, ._3d0s, ._6445 ._2e7q .UFIRow._4204::after, ._6z-1, ._6zzz, ._1qhm, ._6zze ._50z1, ._6zze ._50z2, ._ya_, ._2lu6 {
    background: #202020 !important
}

._16bp {
   box-shadow: inset 0 -15px 5px -15px #000 !important
}

._3d0s {
    margin-right: 17px !important;
    width: 95% !important;
    border-bottom: 1px solid#333 !important
}

._20hm {
    background-color: #f5f6f7 !important;
}

._20ho {
    background-color: #fdc13d !important;
}

._371r, ._6zze ._50z2, ._6zze ._50z1, ._ya_ {
    border-color: #333 !important;
}

._w80 {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/xsAfzG-Yhr3.png) !important;
}

._1c_u ._53j5 {
    border: none !important;
	border-radius: 0 !important;
	box-shadow: none !important;
}

._7gqr:not(._7gqs):hover {
    opacity: 1;
	filter: brightness(150%);
}

._74rw {
	background-color: rgba(255, 255, 255, .1) !important
}

._5ya {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, .06) inset;
}

._5ya:hover {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, .1) inset;
}

._5ya ._150c {
	margin-left: 1px !important;
	width: 99.2%;
}

._3eea {
	background: rgba(0, 0, 0, .6) !important;
	padding: 3px 5px;
	border-radius: 4px !important;
}

._1xne, ._6rur, ._15qs, ._1e8c, ._1unj, ._47yj, ._63lk {
	background-color: #000 !important;
}

._7yk1 {
	background-color: #222 !important;
	border-color: #444 !important
}

._7yk1:hover {
	background-color: #444 !important;
	border-color: #666 !important
}

._7y4b {
	color: #ddd !important;
}

._6rb7, ._6sm7, ._6y-m, .UFICommentAuthorLivingRoomHost, ._6z3v, ._79az {
    background-color: #8c72cb !important;
}

._6zz_, ._6zzz div, ._1k_6, ._2luh, ._y46 {
	color: #ddd !important
}

._4shn, ._7j73 {
	background-color: #151515 !important
}

._64p9, ._zvf {
	background-color: #303030 !important
}

._6y-u {
    border: 2px solid #8c72cb !important;
}

._6y-o {
    border-color: #000 !important;
}

.UFICommentAuthorLivingRoomHost {
	border-color: #202020 !important
}

._3hj7, ._zui {
    background-color: #ddd5f0 !important
}

._82nx {
    color: #fa3e3e !important;
}

._7wu5 {
    background-color: #fa3e3e !important
}

._7yk1._7-eh {
    background-color: #3578e5 !important;
}

/*// SCROLLERS ///////////////////////////////////////////////////*/

.contentAfter .uiScrollableAreaTrack:hover, .contentBefore .uiScrollableAreaTrack:hover, .contentAfter.uiScrollableAreaTrackOver .uiScrollableAreaTrack, .contentBefore.uiScrollableAreaTrackOver .uiScrollableAreaTrack, .uiScrollableAreaDragging .uiScrollableAreaTrack {
    background-color: #111 !important;
    border-radius: 10px;
    width: 10px;
}

.uiScrollableAreaGripper {
    background-clip: content-box;
    background-color: #333 !important;
    border: 1px solid #444 !important;
    border-radius: 6px;
    position: absolute;
    right: 0px;
    width: 5px;
}

.fbScrollableAreaGripper {
    background-clip: content-box;
    background-color: #333 !important;
    border: 1px solid #444 !important;
    border-radius: 6px;
    position: absolute;
    height: 5px;
}

/*// LOADING ANIMATION ///////////////////////////////////////////*/

._436g {
    background: #282828 !important;
    border: 1px solid #3578e5 !important;
}

._436e {
	border-color: #333 !important;
}

._3-8w {
    margin-top: 2px;
}

._3-8_ {
    margin-right: 2px;
}

.uiTooltipX i.arrow {
    border: 5px solid transparent !important;
}

.uiContextualLayerAboveLeft > .uiTooltipX i.arrow, .uiContextualLayerAboveRight > .uiTooltipX i.arrow, .uiContextualLayerAboveCenter > .uiTooltipX i.arrow {
    border-top-color: #111 !important;
    bottom: -3px;
}

.uiContextualLayerBelowLeft > .uiTooltipX i.arrow, .uiContextualLayerBelowRight > .uiTooltipX i.arrow, .uiContextualLayerBelowCenter > .uiTooltipX i.arrow {
    border-bottom-color: #111 !important;
    top: -3px;
}

.uiContextualLayerRight > .uiTooltipX i.arrow, .uiContextualLayerLeft > .uiTooltipX i.arrow, .uiContextualLayerCenter > .uiTooltipX i.arrow {
    border-right-color: #111 !important;
    left: -6px;
}

.uiTooltipX .tooltipContent {
	background: #111 !important;
	box-shadow: none !important;
	border-color: transparent !important;
}

.uiTooltipX .tooltipContent ul, .uiTooltipX .tooltipContent div {
	background: #111 !important
}

.uiContextualLayerAboveLeft > .uiTooltipX, .uiContextualLayerAboveRight > .uiTooltipX, .uiContextualLayerAboveCenter > .uiTooltipX {
    margin-bottom: 1px;
    padding-bottom: 7px;
}

.uiContextualLayerBelowLeft > .uiTooltipX, .uiContextualLayerBelowRight > .uiTooltipX, .uiContextualLayerBelowCenter > .uiTooltipX {
    margin-top: 1px;
    padding-top: 7px;
}

._27ne {
	color: #ddd !important
}

._2n_w {
	width: 840px;
}

._2iwq {
    opacity: .1 !important;
}

._2iwq div, ._3y89 ._4jy0, ._255y ._3ho0 {
    background: #202020 !important;
}

._kq5 ._2iwq::before {
    background: #666 !important;
}

._605a ._1enb._1enb {
	background-color: transparent !important;
    border: 8px solid #202020 !important;
    border-radius: 50% !important;
}

._1tt::after {
    animation: FBLoadShimmer-animate 1s steps(20, end) infinite forwards;
    background-image: linear-gradient(to right, #202020 0%, #222 33%, #303030 66%, #333 100%);
}

._6b5s::before {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/3pkFbIT7_rn.gif) !important;
    filter: grayscale(100%) invert(100%) brightness(800%) !important;
}

._6a, ._1eds .uiPopoverButton, ._26y3 #u_0_i, #pagesManagerTipLHSBoostedPageLike .uiHeaderSection, ._7uh .uiHeaderNav, ._7uh .uiHeaderTopBorder, .fbTimelineUnit, .fbTimelineUnit.fbTimelineTwoColumn .timelineUnitContainer.fbTimelineComposerUnit, ._4lh .fbTimelineUnit[data-type="r"], #fbTimelineHeadline .actionsDropdown .FriendButton, #timeline_info_review_unit ._4-u8, .fbTimelineUFI, ._2smp ._2mi4, ._5ay5 ._36bx, ._5v3q ._47we, .groupSkyAux ._4-u2, ._5va1, ._4dv- textarea, ._5x0l ._5y4n, #reg_box #u_0_i._58mu, #mentionsInput .uiTypeahead .innerWrap, #pagelet_main_column_personal._5h60 ._6z- .uiScrollableArea, #pagelet_composer .innerWrap, ._3-4e ._3cf2, .mleFormOuterContainer .mleGrid .innerWrap, #spotlight_reviews_card_list ._r8k ._r8l, #event_summary ._5vl5 ._5xhn, ._xct ._xco, ._xct ._xcp, ._4t2a ._2tt7 ._4f1d.uiScrollableArea, #group-browse-content-containerfor_sale, ._427x > div, #u_0_i._5pbi._cmw, .fbTimelineComposerCapsule ._36bx._143o, ._ox2 ._55r1, ._4bl7._2q5c, ._51xa ._4jy1 + .uiPopover > ._4jy1:not(:focus)::after, ._5r-_ .uiHeaderTopBorder, ._281j ._281k, ._1ej0 ._nd_ ._s1-._581a, .fbTimelineComposerCapsule ._4-u8, ._50f6 ._4-u2, #timeline_overview ._3y2j ._51xa, #intro_container_id ._4-u2, ._kyy ._4-u2, ._38bm ._38bn ._4-u2, ._3el6 ._4-u2, #pagelet_timeline_medley_notes .inlineBlock ._4-u2 {
    box-shadow:  none !important;
    background: none !important;
    border: none !important;
}

._3tay, ._3tay::before {
	background: #faf4ed !important;
	z-index: 0;
}

._3u14 ._3u15 {
    opacity: .6 !important;
}

._3u13 ._3u15 {
    background: #000 !important;
}

._3u14 ._57d8 {
    border-top: 1px solid rgba(255,255,255,.08) !important;
    border-radius: 3px !important;
    }

._3-4e ._3-4g ._3-4n button:hover {
    box-shadow:  none !important;
    background: rgba(255,255,255,.1) !important;
    border: 1px solid #fff !important;
    border-radius: 6px !important;
}

._35sk, ._16bp {
    background: rgba(0, 0, 0, .7) !important;
}

#mentionsInput, ._2yg .composerTypeahead .wrap  {
    background: #121212 !important;
}

._5pcp._4l4 .UFILikeLink.UFILinkBright, ._a7s a.UFILinkBright, ._666k a._3_16 {
    background-color: rgba(255,255,255,.05) !important;
    border-radius: 3px !important;
    border: 1px solid transparent !important;
    text-shadow: none !important;
    transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
}

.UFICommentActions ._khz a.UFILinkBright, ._6qw6 a._3_16 {
    border-radius: 12px !important;
    padding: 2px 5px !important;
    border: 1px solid !important;
    opacity: .8 !important;
}

.UFICommentActions ._khz a.UFILinkBright:hover {
    opacity: 1 !important;
    text-shadow: none !important;
}

._5pcp._4l4 .UFILikeLink.UFILinkBright:hover, ._a7s a.UFILinkBright:hover, .fbTimelineUFI a.UFILinkBright:hover {
    background: rgba(255,255,255,0) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(242, 82, 104);"], ._6qw6 a._3_16[style*="color: rgb(242, 82, 104);"], ._666k a._3_16[style*="color: rgb(242, 82, 104);"] {
    color: rgb(242, 82, 104) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(243, 62, 88);"], ._6qw6 a._3_16[style*="color: rgb(243, 62, 88);"], ._666k a._3_16[style*="color: rgb(243, 62, 88);"] {
    color: rgb(243, 62, 88) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(53, 120, 229);"], ._6qw6 a._3_16[style*="color: rgb(53, 120, 229);"], ._666k a._3_16[style*="color: rgb(53, 120, 229);"] {
    color: rgb(53, 120, 229) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(32, 120, 244);"], ._6qw6 a._3_16[style*="color: rgb(32, 120, 244);"], ._666k a._3_16[style*="color: rgb(32, 120, 244);"] {
    color: rgb(32, 120, 244) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(240, 186, 21);"], ._6qw6 a._3_16[style*="color: rgb(240, 186, 21);"], ._666k a._3_16[style*="color: rgb(240, 186, 21);"] {
    color: rgb(240, 186, 21) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(247, 177, 37);"], ._6qw6 a._3_16[style*="color: rgb(247, 177, 37);"], ._666k a._3_16[style*="color: rgb(247, 177, 37);"] {
    color: rgb(247, 177, 37) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(247, 113, 75);"], ._6qw6 a._3_16[style*="color: rgb(247, 113, 75);"], ._666k a._3_16[style*="color: rgb(247, 113, 75);"] {
    color: rgb(247, 113, 75) !important;
}

.UFILikeLink.UFILinkBright[style="color: rgb(233, 113, 15);"], ._6qw6 a._3_16[style*="color: rgb(233, 113, 15);"], ._666k a._3_16[style*="color: rgb(233, 113, 15);"] {
    color: rgb(233, 113, 15) !important;
}

._3_t8[style="color:rgba(0,0,0,1.00);font-size:30px;font-weight:700;line-height:1.2000em;padding:50px 30px;text-align:center"], ._1p1t[style*="color: rgb(0, 0, 0)"] ._1p1v {
    color: rgba(0, 0, 0, 1) !important;
}

._3_t8[style="color:rgba(255,255,255,1.00);font-size:30px;font-weight:700;line-height:1.2000em;padding:50px 30px;text-align:center"], ._1p1t[style*="color: rgb(255, 255, 255)"] ._1p1v {
    color: rgba(255,255,255,1) !important;
}

a._30yy._4rv6, a._30yy._4ce_ {
    filter: invert(1);
    -webkit-filter: invert(1);
    opacity: .6 !important;
}

.emptyStar {
    opacity: .2 !important;
}

._3mvu, ._51xa ._2n60 {
	background-color: #303030!important
}

::-moz-selection {
    background: #ccc !important;
    color: #000 !important;
    text-shadow: none !important;
}

::selection {
    background: #ccc !important;
    color: #000 !important;
    text-shadow: none !important;
}

#spotlight_reviews_card_list ._r8k ._r8l {
    border: 1px dashed #333 !important;
    margin: 10px !important;
    border-radius: 5px !important;
}

#reaction_profile_browser .FriendButton, #pagelet_main_column_personal ._6-0, ._3na7 ._51xa ._4jy1 + .uiPopover > ._4jy1:not(:focus)::after, ._kj4 ._kj5 ._42fu, ._275x ._275- a._517h, ._3240 .FriendButton, ._1klk a._517h  {
    background: transparent !important;
}

._4-rr ._5ugg, ._5ugg {
    background: #dc0d17 !important;
}

.groupSkyAux ._4-u2, ._kj2 ._guu, ._9fj, ._58do, ._46cs, ._1g_n, ._3x6b,  .fbTimelineUnit.fbTimelineTwoColumn .timelineUnitContainer.fbTimelineComposerUnit, ._79k._79m._4-u8, ._2y8_ ._4p-s ._29hk, .fbSettingsList, #event_guest_list ._5z71, #event_related_events, .uiContextualLayer div ._z4i, .fbNubFlyout, ._5w9d, ._3y2j ._51xa, #event_guest_list ._4-u8, ._64dw, ._k1l, ._658o, ._wza, ._2ky, ._1b6y, ._jlw, #profile_timeline_overview_switcher_pagelet .rfloat, #timeline_overview ._3y2j ._51xa, #timeline_overview ._3y2j ._3qn7 a._3-91, ._3s1a, #profile_timeline_overview_switcher_pagelet ._4tau._4tau a._3-91, #profile_timeline_overview_switcher_pagelet ._4tau._4tau ._3-96, ._lcb  {
    background: #202020 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
    box-shadow: 0px 0px 4px 0px #000 !important;
}

._4qr4 ._5n2b._36bx {
    background: #202020 !important;
    border-top: 1px solid rgba(255,255,255,.12) !important;
}

#pagelet_main_column_personal ._6-0 .uiBoxWhite, ._xct ._xco {
    border-top: 1px solid #303030 !important;
    margin: 0 0 -1px 0 !important;
}

#profile_timeline_overview_switcher_pagelet ._4tau._4tau a._3-91, #timeline_overview ._3y2j ._3qn7 a._3-91 {
    height: 28px;
}

._6-6, ._9ry {
    border-right: none !important;
    border-left: none !important;
    height: 40px !important;
	transition: .4s;
}

._6-6:hover, ._9ry:hover {
    border-bottom: 3px solid #333 !important;
    border-right: none !important;
    border-left: none !important;
	box-shadow: inset 0 -42px 0 #282828;
	transition: box-shadow .4s;
}

._5vwz:hover {
	box-shadow: inset 0 -43px 0 #282828;
	transition: box-shadow .4s;
}

._5vwz {
	transition: .4s;
}

._6-7, ._6-7:hover, ._3qe1 li._3qe0 {
    border-bottom: 3px solid #666 !important;
    border-right: none !important;
}

._6-6 ._513x {
    display: none !important;
}

._2lhm._3-8y ._5pcr, ._5w9d::before  {
    border: none !important;
}

._3yv8._5aer ._5aeo {
    background-image: none !important;
    border-bottom: 3px solid #666 !important;
    width: 100% !important;
    left: 0 !important;
    bottom: -6px !important;
    margin-left: 0 !important;
}

._5aep._5aer ._5aeo, .__q7 {
    background: #666 !important;
}

._3tkc ._5aeq:hover, .__q6 {
    background-color: #333 !important;
    border-radius: 3px !important;
}

._5aeq:hover > li, ._5aeq:hover > li ._1_x_, ._289_:hover ._289y, ._5xz- ._3xgd, ._2kw4, ._2kw4 ._2kwb, ._15uw, ._15ux, ._2_h1, ._33ud, ._2p3s, ._hiq, ._658r div, ._31pd a, ._5aj7 ._4bl9, ._5aj7 ._4bl9 ._3x1i, ._1f47, ._67l1, ._51xa ._2n60 {
    color: #fff !important;
}

._6lh._8yd ._6lp a, ._6lh._8yd ._6lo {
	color: #111 !important;
	text-shadow: none !important;
}

._7lv button:hover, ._1wcy._5k5 button:hover, ._1wcz._5k5 button:hover, ._7lv button, ._1wcy._5k5 button, ._1wcz._5k5 button, ._ikh ._1wcy button:hover, ._ikh ._1wcz button:hover, ._2-dc ._36bx._4-u2, ._2-dc ._36bx._4-u2 ._55r1, ._4usb  {
    box-shadow: none !important;
    background-color: transparent !important;
    border: 0 !important;
	border-radius: 0;
}

._4kb1 {
    border-top : 1px solid #222 !important;
}

._3m75 .selectedItem ._5afe::after, ._3m75 .sideNavItem:hover ._5afe::after, ._3m75 .sideNavItem:hover, ._3m75 .sideNavItem.clearfix a::after, ._3o_h::after, ._2yaa ._2yau::after, ._1xx7._1xx6, ._1xx7:hover, ._6vua::after {
    background-color: #202020 !important;
    border-color: transparent !important;
    transition: .4s !important;
}

._3m75 .sideNavItem:hover .uiSideNavEditButton a, ._3m75 .sideNavItem:hover .uiSideNavEditButton ._2ita, ._3m75 .sideNavItem:hover .uiSideNavEditButton a, ._3m75 .uiSideNavEditButton > .openToggler > a, ._3m75 .uiSideNavEditButton ._2ita {
    background-color: #202020 !important;
    border-color: #202020 !important;
	transition: .4s!important;
    filter: none !important;
    -webkit-filter: none !important;
}

._2yq #contentArea {
    margin-right: -50px !important;
}

#u_0_i._5dbb, #u_0_i._5dbb:hover, ._3nt1 ._271k._271m._1qjd._483s {
    background: transparent !important;
    box-shadow: none !important;
}

.fbFeedTicker .uiScrollableArea.fade {
    width: 306px !important;
}

._26z1[aria-label="Facebook"] div:last-child span::before {
    white-space : pre !important;
    content: "Dusky Gray Facebook [Dark Theme]\A© pierO'n Mu ·" !important;
}

._5pr2.fbChatSidebar .fbChatOrderedList ._50zm, ._1lti, ._1ltk {
   display: none !important;
}

._55oc ._2l56 {
   padding: 200px !important;
   background: #202020 !important;
}

._-0d, ._3v2n ._104r {
    border-color: #303030 !important;
}

._5ugf {
    border-color: #666 !important;
}

._39t7 {
    padding: 14px 1px 8px 1px !important;
}

._2n60, ._hj1, ._2f5b:hover, ._2fnn {
    background-color: #282828 !important;
}

._2n5z ._517h {
    border-color: #282828 !important;
}

span._ncl {
    color: rgba(0, 0, 0, 0) !important;
    opacity: 0 !important;
}

._3-a6 ._pb2 {
    border-radius: 18px !important;
}

._3hsl button._271k {
    background: #303030 !important;
    border-radius: 20px !important;
}

._3hsl button._271k:hover {
    background: #151515 !important;
}

._3twy {
    background-color: #42b72a !important;
    border: 1px solid #000 !important;
}

._62la {
    background-color: rgba(0,0,0,.5) !important;
}

._62l3:hover ._62la, ._62la:focus {
    background-color: #333 !important;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .3) !important;
    color: #aaa !important;
    border-radius: 50% !important;
	border-color: #aaa !important
}

._3col, ._43q8._49cb {
    background-color: #252525 !important;
    border-left-color: #252525!important;
}

._3com {
    background-color: #333 !important;
}

._3kvm {
    background-color: #444 !important;
    border-color: #202020 !important
}

._3cog .link::after, ._3cog li::after,  #pagelet_timeline_medley_notes .inlineBlock ._4-u2 {
    border: 1px solid rgba(255, 255, 255, .05) !important;
}

._31qf, ._3kth ._66in, ._58wf, ._1tm3, ._sg1 {
    border-color: #333 !important;
}

._3cop:hover, ._mb5:hover, ._3cog li:hover::after {
    border-color: #444 !important;
    color: #ddd !important;
}

._3con span {
    color: #aaa !important;
}

._5jsn {
    background: #303030 !important;
    border-color: #151515 !important;
    margin-right: 7px !important
}

._5jsn._5jso {
    background: #666 !important;
    border-color: #aaa !important;
}

._5jso ._5jst, ._206m .fbNubButton:hover ._1xhv, ._15p4._15p5:hover span, ._4lmk._2vxa.autofocus._5s6c {
    color: #fff !important;
}

._59ry {
    border: 1px dashed #333 !important;
}

._206m .fbNubFlyoutTitlebar:hover {
    background-color: #444 !important;
}

.fbNubButton:hover {
    background-color: #333 !important;
}

#fbPhotoSnowliftFeedbackActions ._a7s a {
    padding-left: 5px !important;
}

._2j78, ._1u45 {
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    box-shadow: 0px 0px 4px 0px #000 !important;
}

._4ydj._51m-:hover ._2j78, ._1u45:hover, #timeline_overview ._3y2j ._3qn7 a._3-91:hover {
    box-shadow: inset 0px 2px 4px 0px #000 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-bottom-color: rgba(255,255,255,.12) !important;
    transition: .4s !important;
}

._2j78._4ydl, ._2j78._4ydl:hover, ._1u45._1u48, ._1u45._1u48:hover {
    border: 2px solid #fff !important;
}

._53ii ._5v-0._53il[style="width: 380px;"] {
    width: 400px !important;
}

._4a6n a, ._4a6n a span {
    text-decoration: underline !important;
    color: inherit !important;
    text-shadow: none !important;
}

._hip {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, .85) 100% ) !important;
}

._hil, ._5s6c, ._5re, ._5rg, ._5rf, ._5rc, ._50f8, ._5a5j ._5a4z, ._46rw ._c24, ._1rgw, ._64dw div, ._5qtp, ._5s6c._6m6 a div, ._3zio {
    color: #ddd !important;
}

._5a5j ._5a4- {
    color: #fa3e3e !important;
}

._5st, ._5r7, ._1vc2, ._38bm ._38bn ._4-u2, ._3el6 ._4-u2 {
    background-color: rgba(0, 0, 0, .3) !important;
}

._3btv, ._1qqn:hover ._1qqr {
    background-color: rgba(0, 0, 0, .6) !important;
}

._3bty, ._wwr ._4pq3, ._3ljc ._3gi9, ._47-2 span, ._22tv, ._5qtp:hover, ._sg1:hover ._5qtp, ._uaa, ._6e7- {
    color: #fff !important;
}

._2nlw, ._2nlw span, ._uac {
    color: #efefef !important
}

._3btv ._4ar- ._3emk, ._2_xu {
    background: #fff !important;
}

._4b39 {
    border: 2px solid #fff !important;
}

._3btt {
    box-shadow: 0 0 4px #000 !important;
}

.name .uiButton.selected {
    background: transparent !important;
}

.name .uiSelectorNormal .uiButtonOverlay {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/VzZTB-PRrW7.png) !important;
    background-position: right -49px !important;
}

.name .uiSelectorNormal .openToggler .uiSelectorButton {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/-pGGS6keXfV.png) !important;
    background-position: right 1px !important;
}

._55d0, ._mot._3qng._3-8j {
    background: #121212 !important;
    margin: 0 !important;
    padding: 12px 0 12px 0 !important;
}

._55d0, ._mot._3qng._3-8j ._50-0._50z- {
    margin-right: 10px !important;
    margin-top: 10px !important
}

._5pcr ._3-8j ._5f8- ._55d0 {
    margin-right: 0px !important;
    padding: 0 !important;
    border: 1px solid #121212 !important;
}

#timeline_overview ._50f6 {
    color: #ddd !important;
}

._37ww {
    border-color: rgba(255,255,255,.15) !important;
}

._219s, ._10c5 ._5a5j ._5a4-, ._10c5 ._5a4z {
    color: #888 !important;
}

._mb5, ._65_9 ._3dnn {
    background-color: rgba(255,255,255,.05) !important;
}

._3dnn, ._2l5o, ._2l5l {
    border-color: rgba(255,255,255,.05) !important;
}

._65_9 ._3dnn:hover, ._3uch::before, ._4ou3::before {
    background-color: rgba(255,255,255,.08) !important;
}

._1zjn {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/RMfUCPyh9T1.png) !important
}

._1zjl {background: #303030 !important;
}

._1zjm {
    background-image: url("data:image/gif;base64,R0lGODlhBAAEAKECABERESQkJP///////yH5BAEKAAIALAAAAAAEAAQAAAIFhB6nhlIAOw==") !important;
    background-repeat: repeat !important;
    background-color: #181818 !important;
}

._3ho0 ._1nt8 {
    background-color: #202020 !important;
    box-shadow: 0 0 2px #000 !important;
    border-color: #111 !important;
}

._3ho0 ._1nt8 i.img {
    filter: brightness(180%) !important;
}

._65_9 ._3dnn:hover ._3dnr {
    color: #bbb !important;
}

#event_guest_list ._5z7e._1a9b #event_button_bar {
    border-top: 1px solid #282828 !important;
}

._204y ._204w {
    background-color: #232323 !important;
    border-color: #303030 !important;
}

._5bl2 .highlightNode  {
    background-color: rgba(255,255,255,.15) !important;
    border-bottom: 1px solid rgba(255,255,255,.4) !important;
    color: #fff !important;
}

._2xbx {
    border-color: #666 !important;
    transition: all 0.4s !important;
}

._2xbx:hover {
    border-color: #ddd !important;
}

._ua9 {
    border: 1px solid #fff !important;
}

._ua9:hover {
    background-color: transparent !important
}

._42pk ._58rs, ._42pl ._58rs {
    background: rgba(0, 0, 0, .4) url(https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/FuY4pwdEDF2.png) center center no-repeat !important;
}

._42pk ._58rr, ._42pl ._58rr {
    background: rgba(0, 0, 0, .25) url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/KPeY2GBqXT-.png) center center no-repeat !important;
}

._5f0d, ._2a2q, ._46-h {
    max-width: 498px !important;
    overflow: hidden !important;
}

.userContentWrapper ._2a2q, .userContentWrapper ._46-h {
    max-width: 516px !important;
}

._3hos a {
    border: 1px solid #333 !important;
}

#event_header_primary, ._rzn, .mtm ._2_qm {
    overflow: hidden !important;
}
._l57 {
    color: #71a830 !important;
}

._6u4x {
    background-color: #4dbba6 !important;
}

.uiContextualLayer ul._u4s li._4q5h:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -42px !important;
    transition: none !important;
}

.uiContextualLayer ul._u4s li._4q5j:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -294px !important;
    transition: none !important;
}

.uiContextualLayer ul._u4s li._4q5k:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -105px !important;
    transition: none !important;
}

.uiContextualLayer ul._u4s li._4q5l:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -357px !important;
    transition: none !important;
}

.uiContextualLayer ul._15_u li._15_7:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -168px !important;
    transition: none !important;
}

.uiContextualLayer ul._15_u li._15_8:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -231px !important;
    transition: none !important;
}

.uiContextualLayer ul._15_u li._15_9:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -399px !important;
    transition: none !important;
}

.uiContextualLayer ul._15_u li._15_a:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -462px !important;
    transition: none !important;
}

.uiContextualLayer ul._15_u li._15_b:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -567px !important;
    transition: none !important;
}

.uiContextualLayer ul._15_u li._15_c:hover {
    background-color: transparent !important;
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/0BXZbaAzevN.png) !important;
    background-position: 0 -105px !important;
    transition: none !important;
}

._3twp ._62l4 {
    opacity: 1;
    box-shadow: 0 0 0 2px #42b72a !important;
}

._672g._67wa[style="background-color: rgb(66, 103, 178);"] {
    background-color: rgb(66, 103, 178) !important;
    color: #fff !important;
    border: 2px solid #202020 !important;
}

._3-a6 ._3-e2 ._4yjk:last-child {
    border-color: #333 !important;
}

.UFICommentTip {
    display: none;
}

._6e7y {
    background-color: rgba(0, 0, 0, .5) !important;
    border: solid 2px #fff !important;
}

._9mz {
	color: #4c4c4c !important
}

/*// STORIES ////////////////////////////////////////////////////*/

._26w4 {
    border-color: #555 !important;
}

._1w73 {
    border-color: #333 !important;
}

._26w9 {
    border-color: #3578e5 !important;
}

._1w7c.highlighted {
	background-color: #3578e5 !important;
}

._26wp {
    border-color: #fa3e3e !important;
}


._rqg, ._7mx_::after {
    background: #282828 !important;
}

._1pek ._1sex {
	transition: .4s
}

._1pek ._1sex:hover {
    box-shadow: inset 0 -52px 0 #282828 !important;
	transition: .5s
}

._24o4, ._24o4._4drj, .ernmaksk {
    background: #000 !important;
}

._2dvt {
    background: #202020 !important;
    box-shadow: 0 1px 0 0 #000 !important;
}

._jx- {
    background-color: rgba(230,231,232,.4) !important;
}

._4wd4 {
    background-color: rgba(255,255,255,.2) !important;
}

._4wd6 {
    background-color: rgba(255, 255, 255, .5) !important;
}

._4wd7 {
    background-color: rgba(255, 255, 255, .7) !important;
}

._jx_ {
    background-color: #e9ebee !important;
}

._60x1 ._2in7,  ._2in8 span, #stories_pagelet_rhc ._1fw3 ._4u-0, ._mx9.verbose ._mxb ._nbt, ._mx9.verbose ._mxb, ._2nwf span, ._1pwn span {
        color: #ddd !important;
}

._v5n, ._v5o span, ._v5o, ._1suj, .eghbgv0e .oo9gr5id:hover, ._zrg[style*="color: rgb(255, 255, 255);"] ._6st5 span, ._mx9.light ._mxb ._nbt div, .lxayhlr0, .b0k1zwb0, .mp9mml6a a div, .mp9mml6a, ._2ier, .os6ic53g .ni8dbmo4 .qr8m0ubp   {
    color: #fff !important;
    text-shadow: none !important;
}

._1w7c ._2lc0, .oo9gr5id {
    color: #ddd !important;
}

._zrg[style*="color: rgb(0, 0, 0);"] ._6st5 span {
    color: #000 !important;
}

._1fw9._erm {
   border: 2px solid #fa3e3e !important;
}

._66a_, ._1pek ._3-w6, .b3i9ofy5 {
    background-color: #303030 !important;
    border: 1px solid #444 !important;
}

.b3i9ofy5:hover {
	opacity: .8;
}

._26w4:hover::after, ._26w4:active::after, ._q38 {
    background: rgba(0, 0, 0, .1) !important;
}

._q38 {
    background: rgba(0, 0, 0, 1) !important;
}

._1pek ._1sex .clearfix, ._1pek ._1sex ._517h {
    background-color: transparent !important;
}

._26wx, ._4gto, ._2h3r, .rk01pc8j .mkbloq8g {
    background-color: #fff !important;
}

._xxf {
    background-color: rgba(250,62,62,.8) !important;
}

._4gto.instagramPoll ._1jl5.results.selected, ._1jl5.voting:hover, ._1jl5.voting:active, .touch ._1jl5.voting.hover {
    background: #dce5e9  !important;
}

._2iz1.instagramPoll.left ._2i_3 ._1obl, ._2iz1.instagramPoll.left.selected.resultView ._2i_3 ._1obl {
    color: #13bda6 !important
}

._2iz1.instagramPoll.right ._2i_3 ._1obl, ._2iz1.instagramPoll.right.selected.resultView ._2i_3 ._1obl {
    color: #f36b7f !important;
}

._2iz1 ._66ry, ._2iz1.instagramPoll ._66ry, ._2iz1.instagramPoll.selected.resultView ._66ry {
    color: #5f6673 !important;
}

._1jl5 {
    border-right-color: #dce5e9 !important;
}

._1ugq[style="background-color:rgba(17,17,17,1.00)"] {
    background-color: rgba(17,17,17,1) !important;
}

._4wsa, .hybvsw6c {
	background-color: #202020 !important;
}

._4bj5 {
	box-shadow: 0 0 0 2px #111
}

.opz822rn {
	border-top-color: #333 !important
}

._115r, .pykisdsp {
	border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
    box-shadow: 0 0 4px #000 !important;
    background: #202020 !important;
}

._115r._397_:after {
	border-left-color: #202020 !important
}

._115r._397_:before {
	border: solid transparent;
    border-top-color: transparent;
    border-top-width: medium;
    border-right-color: transparent;
    border-right-width: medium;
    border-bottom-color: transparent;
    border-bottom-width: medium;
    border-left-width: medium;
	border-left-color: #050505;
	border-width: 8px;
	bottom: 19px;
	content: ' ';
	height: 0;
	margin-top: -8px;
	pointer-events: none;
	position: absolute;
	right: -16px;
	width: 0;
	z-index: 10;
}

.miomc0xe button:hover, .eghbgv0e button:hover, .rk01pc8j ._iu-, button.m7zwrmfr:hover, .dn56xbwz button:hover {
	background: transparent !important;
	box-shadow: none !important;
	border-color: transparent !important;
}

button.m7zwrmfr {
	transition: none !important;
}

.ha302278 {
    background-color: var(--fds-white-alpha-40) !important;
}

.cxbav39q {
    background-color: var(--fds-white-alpha-80) !important;
}

.e9wjg1fr:hover {
    background-color: #282828 !important;
}

.ujugm7ut, .gfay22hk {
	transition: .5s;
}

.ujugm7ut:hover, .gfay22hk:hover {
	box-shadow: inset -350px 0 0 #282828 !important;
	transition: .5s;
}

.n5lshxfa, .p8ydcii6 {
    border-color: var(--fds-gray-80) !important;
}

.fnhzkyyu button.c98fg2ug {
    background-color: var(--disabled-button-background) !important;
}

.fnhzkyyu .tdjehn4e {
    background-color: var(--secondary-button-background) !important;
}

.fnhzkyyu button:hover {
	border-radius: 50% !important;
}

.qud43icf:hover {
    background-image: linear-gradient(var(--fds-black-alpha-05), var(--fds-black-alpha-05)) !important;
}

.iz2mbcqi {
    background-color: var(--fds-black-alpha-40) !important;
}

.k1gj5w22, .k1gj5w22 a div {
    color: var(--fds-white-text) !important;
	text-shadow: 0 1px 1px rgba(0, 0, 0, .1) !important;
}

.bzwwyi6d {
    border-color: var(--accent) !important;
}

.s89fd7ur {
    background-color: var(--fds-black-alpha-30) !important;
}

.jk7wfhiq {
    color: var(--fds-highlight) !important;
}

._1p1t, ._1mf {
	color: #90949c !important;
	text-shadow: none !important;
}

.o34amlmb {
    box-shadow: inset -350px 0px 0 #303030 !important;
	transition: .5s;
}

._7h4p::after, .n7fi1qx3 {
	transition: .3s
}

._7h4p:hover._7h4p::after, .tpe1esc0:hover .n7fi1qx3 {
    box-shadow: inset 114px -205px 0px rgba(255, 255, 255, .1) !important;
	transition: .5s;
	border-color: #606060 !important;
}

._7h4p:hover ._7h4s {
	transform: scale(1.00)
}

._7h4p.kenBurnsZoom.zoomPercent10:hover ._7h4s {
    transform: scale(.5) translate(-25%, -25%);
}

.hqp1269t:hover {
	transform: none
}

.g6srhlxm .dn56xbwz {
	filter: invert(1);
	-webkit-filter: invert(1);
}

._7h4p::after {
	border-color: #202020 !important;
}

.cwj9ozl2 {
    background-color: var(--card-background) !important;
}

.tdjehn4e {
	background-color: var(--secondary-button-background) !important;
	box-shadow: none !important;
}

.a3bd9o3v, .cwj9ozl2 h1 .o3w64lxj {
	color: #111 !important;
	text-shadow: none;
}

.et4y5ytx {
    border-right-color: var(--card-background) !important;
}

.np69z8it {
    border-top-color: var(--card-background) !important;
}

button.ksdfmwjs:hover {
	box-shadow: none !important;
	background: transparent !important;
}

.mkbloq8g ._66l8[style*="color: rgb(19, 189, 166);"] ._1obl {
	color: rgb(19, 189, 166) !important;
}

.mkbloq8g ._66l8[style*="color: rgb(243, 107, 127);"] ._1obl {
	color: rgb(243, 107, 127) !important;
}

.mkbloq8g {
    background-color: #fff !important;
}

.exwwj2sp {
	border-right: solid #dce5e9 !important;
}

._7h4s::after {
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .65)) !important;
}

.c98fg2ug {
    background-color: var(--disabled-button-background) !important;
}

.t7w4vmwg, .l8j7feq8 {
    background-color: rgba(0,0,0,.86) !important;
}

.g6srhlxm, ._7mx_ {
    background-color: #151515 !important;
}

.m07rl9l2 .q66pz984 {
    color: var(--accent) !important;
}

.osnr6wyh[style="color: white;"] div {
	color: white !important;
}

._74r8.black86 ._t {
	border-width: 0 !important;
}

.ejg0drik .taijpn5t {
	color: transparent !important;
}

.g84aq3pq {
    border-top: 1px solid var(--fds-white-alpha-80) !important;
}

.qrtewk5h span, .iix1gpk6[style*="color:var(--primary-text-on-media)"] .oqcyycmt {
    color: var(--primary-text-on-media) !important;
}

/*// CALENDAR ////////////////////////////////////////////////////*/

._5hpq, #event_related_events ._412b:hover {
	background: #282828 !important;
}

._5c68, ._5hq1, ._2r86 {
    border: 1px solid transparent !important;
    color: #90949c !important;
}

._416u ._4ixr ._3smp, ._416u ._5q9i, ._37p5::before, ._5vl5::before, ._owx, ._4iqv {
    border-color: #333 !important;
}

.fbCalendarGrid .fbCalendarDayItem {
    border-top-color: #333 !important;
}

.fbCalendarGrid .fbCalendarGridCell.fbCalendarGridToday .fbCalendarDayItem, ._5hpw ._5hpx ._5hq1:hover, ._5hpw ._5hpx ._5hq1:focus {
    background: #181818 !important;
    border: 1px solid #111 !important;
    border-bottom-color: #333 !important;
    border-radius: 3px !important;
    box-shadow: 0 0 3px #000 inset !important;
}

.fbCalendarGrid .fbCalendarGridCell .fbCalendarDayItem:hover {
    background: #252525 !important;
    box-shadow: 0 0 3px #151515 !important;
}

.fbCalendarGridRoot .fbCalendarBox, ._fbEventsPermalink__mainColLayout ._355f #event_related_events, .uiContextualLayerBelowLeft ._5c6i, ._p6e, ._4iqg  {
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
    box-shadow: 0 0 4px #000 !important;
    background: #202020 !important;
}

.fbCalendarGridRoot #fbCalendarWrapper, .uiContextualLayer ul ._oww:hover {
    background: transparent !important;
}

._fbEventsPermalink__mainColLayout ._355f {
    width: 304px !important;
    margin-right: 2px !important;
}

._fbEventsPermalink__mainColLayout ._355e {
    padding-left: 4px !important;
    padding-right: 4px !important;
    width: 492px !important;
}

._5w40.fbEventHeader {
    margin-left: 4px !important;
    margin-right: 2px !important;
}

._5w40.fbEventHeader ._2kn_ {
    margin-right: 1px !important;
}

._3j7l {
    color: #5890ff !important;
}

._3x1h, ._5hpx ._5hq2 {
    background-color: #282828 !important;
}

._1j9d {
    background: #4267b2 !important;
    margin: 1px 2px;
}

._1j9d:nth-child(2) {
    background: #fcd872 !important;
}

._1j9d:nth-child(3) {
    background: #f35369 !important;
}

._1j9m ._1j9d._4t07 {
    background: #bec2c9 !important;
}

._1j9l, ._1j9l:hover, ._2xpy ._2xq3, ._2xpy ._2xqr span {
    color: #fff !important;
    text-shadow: none !important;
}

._oxb ._oxc, ._2f0s span, ._4iqx div {
    color: #ddd !important;
    text-shadow: none !important;
}

._1j9d:hover {
    background: #5980ba !important;
}

._1j9d:nth-child(2):hover {
    background: #fee094 !important;
}

._1j9d:nth-child(3):hover {
    background: #f16c81 !important;
}

._1j9m ._1j9d._4t07:hover {
    background: #ced0d4 !important;
}

._1y30 {
    color: #666 !important;
    text-shadow: none !important;
}

._1y31 {
    color: #cc4c60 !important;
    text-shadow: none !important;
}

._4z-m::before, ._62sc::before  {
    border-top: 1px solid #333 !important;
}

._2ru-::before  {
    border-top: 1px solid #282828 !important;
}
._62hs {
    border-top: 1px solid #282828 !important;
    border-bottom: 1px solid #282828 !important;
}

._4l8r:hover, ._2hxe:hover, ._owy ._oxb ._oxc:hover {
    background: #282828 !important
}

._1bnx {
    background-color: #4080ff !important;
    color: #fff !important;
}

._1k8n {
    background-color: #333 !important;
    border-color: #888 !important
}

._1asl, ._tzi {
	background-color: #151515 !important
}

/*// MARKETPLACE /////////////////*/

._3o8m, ._3qnx, ._638s, ._6y8t, ._2xrz, ._73d1 {
    background: #202020 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
    box-shadow: 0px 0px 4px 0px #000 !important;
}

._f3l {
    background-color: #000 !important;
    opacity: .7 !important;
}

._4x3g, ._5kx5._50f4 span, ._2tux, ._218r {
    color: #fff !important;
}

._7yd {
    background: #fff !important;
}

._k01._1itt, ._k01:hover {
    background-color: rgba(255,255,255,.05) !important;
    outline: none !important;
    text-decoration: none !important;
}

._65db {
	margin: 2px 6px 2px 2px !important;
}

._638r {
	margin: 2px !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(84, 199, 236); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(84, 199, 236); height: 24px; width: 24px;"] {
    background-color: rgb(84, 199, 236) !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(251, 114, 75); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(251, 114, 75); height: 24px; width: 24px;"] {
    background-color: rgb(251, 114, 75) !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(163, 206, 113); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(163, 206, 113); height: 24px; width: 24px;"] {
    background-color: rgb(163, 206, 113) !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(252, 216, 114); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(252, 216, 114); height: 24px; width: 24px;"] {
    background-color: rgb(252, 216, 114) !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(107, 206, 187); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(107, 206, 187); height: 24px; width: 24px;"] {
    background-color: rgb(107, 206, 187) !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(236, 126, 189); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(236, 126, 189); height: 24px; width: 24px;"] {
    background-color: rgb(236, 126, 189) !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(140, 114, 203); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(140, 114, 203); height: 24px; width: 24px;"] {
    background-color: rgb(140, 114, 203) !important;
}

._3-8z div[style="border-radius: 50%; background-color: rgb(243, 83, 105); height: 24px; width: 24px;"], ._k01 div[style="border-radius: 50%; background-color: rgb(243, 83, 105); height: 24px; width: 24px;"] {
    background-color: rgb(243, 83, 105) !important;
}



._4e36 {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAMAAAAw96PuAAAAMFBMVEUbGxsaGhoiIiIcHBwVFRUYGBggICAeHh4WFhYfHx8XFxcUFBQdHR0ZGRkhISESEhKy7ZvJAAABQUlEQVR42l1TUZLFIAiDRQpS3Xf/2+6Ugjw2X6nTxMgEAPxJ0IAXzFeeCcKFCoHJ9pKbKI5wCNBUjE+S4dR4pkhRABbcEBDUV5cWW6ebG597FF9dYMBy80zofq4LsM1MWGGNXRcWizJhhaXbKuaWr4QJ28UfiwDveQUIsbjBGcta9AJYwCgwt7b7ckKiDP/yoZ4JsU5YNCqf0zYhWs+L7fyiHLqA+UtpjXi8+4XOgfG8Suh+bUJBM6H7gYGdCclJeGsAGaimJXm/8VUThAtGr0cWJGmrR5i0gkirh8AIXRWkFTj87kdXlY4CVz1S1yotbSFC1xNPhQQNphOzEq+vjmFxXZAw/K0t/OKW+foK9QWr+2qF2oLto6sJ9QUbVaxaoV4Pdp30FaJWj9RVpavATrfCx3U9seiuhQBGPZBTYC38AccDDZOEuQAKAAAAAElFTkSuQmCC) !important;
    background-repeat: repeat !important;
    background-color: rgba(0,0,0,.15) !important;
    border: 1px solid #111 !important;
    border-bottom: 1px solid rgba(255,255,255,.16) !important;
    box-shadow: inset 0 0px 3px 0 #111 !important;
}

._2m-9 button, ._2bx7 label {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
}

._1vi5:hover i {
    filter: brightness(200%) !important;
}

._2m-9 {
    background: linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,0)) !important;
}

._2m-9 button._218r {
    height: 40px !important;
    margin-left: 1px !important
}

._5_md, ._4g66 {
    color: #42b72a !important
}

._4-i0, ._3g6f {
    border-color: #333 !important;
}

._40xc ._3ogd {
	margin-right: 9px
}

._50z2 ._2xrz._2xr- {
	margin-right: 6px
}

/*// BROWSER EXTENTION FIX /////////////////*/

/* Social Fixer Issue */
#sfx_options_dialog, #sfx_badge_menu #sfx_badge_menu_wrap {
    background: #202020 !important;
    border: 1px solid rgba(0,0,0,.7) !important;
    border-top-color: rgba(255,255,255,.12) !important;
    border-radius: 3px !important;
    box-shadow: 0px 0px 4px 0px #000 !important;
}

.sfx_button:hover, #sfx_options_dialog input[type="checkbox"]:not(.normal) ~ label, #sfx_options_dialog input[type="checkbox"]:not(.normal):checked ~ label::after, .sfx_options_dialog_section.selected {
    background-color: #333 !important;
    color: #fff !important;
    cursor: pointer !important;
}

.sfx_options_dialog_section, .sfx_options_dialog_table tbody tr:hover td {
	background-color: #252525 !important;
}

.sfx_options_dialog_section:hover, .sfx_menu_section .sfx_menu_item:hover {
	background-color: #303030 !important;
}

.sfx_options_dialog_table, .sfx_options_dialog_table tbody td  {
    border-color: #333 !important;
}

#sfx_badge_logo {
	filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
	background-color: rgb(44, 65, 102) !important;
}

#sfx_badge:hover #sfx_badge_logo {
	border-color: #666 !important;
}

.sfx_bubble_note.sfx_bubble_note_top_right {
    background: #202020 !important;
    border: 1px solid rgba(0, 0, 0, .7) !important;
    border-top-color: rgba(255, 255, 255, .12) !important;
    border-radius: 3px !important;
    box-shadow: 0px 0px 4px 0px #000 !important;
}

#sfx_control_panel {
    background: #202020 !important;
    border: 1px solid rgba(0, 0, 0, .7) !important;
    border-top-color: rgba(255, 255, 255, .12) !important;
    border-radius: 3px !important;
    box-shadow: 0px 0px 4px 0px #000 !important;
}

#sfx_control_panel .sfx_filter_tab:hover {
    background-color: #303030 !important;
}

#sfx_control_panel .sfx_filter_tab.selected {
    background-color: #303030 !important;
}

.sfx_button {
    background: #333 !important;
    border: 1px solid rgba(0, 0, 0, .8) !important;
    border-radius: 3px !important;
    box-shadow: 0 1px 2px #111, 0 1px 0px #555 inset !important;
    -webkit-transition: background .2s, box-shadow .2s, border-color .2s !important;
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

.sfx_button:hover {
    box-shadow: inset 0px 2px 4px 0px #000 !important;
    border-bottom-color: #333 !important;
    border-top-color: #000 !important;
    border-right-color: #222 !important;
    border-left-color: #202020 !important;
    background-color: #181818 !important;
    border-radius: 3px !important;
    -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition: background .2s, box-shadow .4s, border-color .2s !important;
    transition-timing-function: linear !important;
}

input.sfx_wide {
    background-color: #121212 !important;
}

textarea#sfx_user_data {
    background-color: #121212 !important;
}

.sfx_hide_frame {
    background-color: lime !important;
    outline: lime solid 2px !important;
}

.sfx_hide_frame.sfx_hide_frame_hidden {
    color: white !important;
    background-color: red !important;
    outline: red solid 2px !important;
}

/* Chrome Google Trad background fix */
.gtx-bubble, .jfk-bubble {
    background-color: #fff !important;
    border-radius: 3px !important;
    box-shadow: 0 0 5px #000 !important;
}

.jfk-bubble-arrowimplbefore {
    border-color: rgb(168, 168, 168) transparent !important;
}

.jfk-bubble-arrowimplafter {
    border-color: rgb(255, 255, 255) transparent !important;
}

/* Some translate extensions fixes */

#gwg_balloon {
    border: none !important;
    box-shadow: none !important;
}

#tongue, #gwg_balloon #gwg_balloon_content, .ddict_div, .ddict_notification  {
	background: #202020 !important;
    border: 1px solid rgba(0, 0, 0, .7) !important;
    border-top-color: rgba(255, 255, 255, .12) !important;
    border-radius: 3px !important;
    box-shadow: 0px 0px 4px 0px #000 !important;
}

#tongue a.link, .ddict_sentence {
	color: #ccc !important;
}

#gwg_pointer, #gwg_pointer_base {
    border-color: rgb(60, 60, 60) transparent !important;
}

.ddict_div::before {
    border-bottom-color: rgb(60, 60, 60) !important;
}

.TnITTtw-help-inside-layout {
	background: rgb(255,255,255) !important;
}

.TnITTtw-mv-text-part, .TnITTtw-main-of-item  {
	color: #000 !important;
}

.TnITTtw-util-butt0n {
	background-color: rgba(233,233,233,.725) !important;
}

span.TnITTtw-highlight {
	background-color: #ddd !important;
    color: #111 !important;
    text-shadow: none !important;
}

/* Grammarly text issue - Chrome & Firefox */
ghost span {
    color: transparent !important;
}

/*///// Brandon Lucas's Top Bar Fix ///////////*/

div._1s4v._26aw._5fo2,div.__tw {
background-color: #202020 !important;
border-bottom: 1px solid rgba(0,0,0,.7) !important;
box-shadow: 0 0 4px #000 !important;
}

div._4-u8::before,div._4-u2::before,div._36nj::before {
border: 0px solid #000 !important;
border-bottom: 0px solid rgba(0,0,0,.7) !important;
box-shadow: none !important;
}

div._2yaa::after {
background-color: rgb(22,22,22) !important;
border-color: rgba(0,0,0,.7) !important;
}

span.uiSearchInput::after {
background-color: rgb(18,18,18) !important;
}

/*///// Thanks ///////////*/
`);
