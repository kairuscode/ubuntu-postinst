function applycss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
 }
applycss(`
:root {
	--dark0: #000;
	--dark25: #080808;
	--dark50: #111;
	--dark75: #181818;
	--dark100: #1b1b1b;
	--dark150: #222;
	--dark200: #2b2b2b;
	--dark250: #333;

	--hover: #0002;
	--shadow: #0004;

	--border-light: #fff1;
	--border-medium: #fff2;

	--text-primary: #fffc;
	--text-secondary: #81929f;
	--text-highlighted: #fff;

	--border-radius: 4px;
	--custom-color: #1DA1F2;
}









/* Scrollbar */
::-webkit-scrollbar {
	display: block;
	background: #101010;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzIiCiAgIGhlaWdodD0iMzIiCiAgIHZpZXdCb3g9IjAgMCA4LjQ2NjY2NjYgOC40NjY2NjY2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJ1cC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiCiAgICAgaW5rc2NhcGU6Y3g9IjUuNzM0NjA5NSIKICAgICBpbmtzY2FwZTpjeT0iMjAuODY3MDU3IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3NDUiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIj4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDgxNSIKICAgICAgIGVtcHNwYWNpbmc9IjQiCiAgICAgICBkb3R0ZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMjg4LjUzMzMzKSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDIuMTE2NjY2NywyOTMuODI1IDQuMjMzMzMzMiwwIC0yLjExNjY2NjYsLTIuMTE2NjcgeiIKICAgICAgIGlkPSJwYXRoODE3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgLz4KICA8L2c+Cjwvc3ZnPgo=), url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzIiCiAgIGhlaWdodD0iMzIiCiAgIHZpZXdCb3g9IjAgMCA4LjQ2NjY2NjYgOC40NjY2NjY2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJkb3duLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIKICAgICBpbmtzY2FwZTpjeD0iNS43MzQ2MDk1IgogICAgIGlua3NjYXBlOmN5PSIyMC44NjcwNTciCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkODE1IgogICAgICAgZW1wc3BhY2luZz0iNCIKICAgICAgIGRvdHRlZD0idHJ1ZSIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yODguNTMzMzMpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2NDU4MzMycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMi4xMTY2NjY3LDI5MS43MDgzMyBIIDYuMzQ5OTk5OSBMIDQuMjMzMzMzMywyOTMuODI1IFoiCiAgICAgICBpZD0icGF0aDgxNyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgPC9nPgo8L3N2Zz4K);
	background-position: top center, bottom center;
	background-size: contain;
	background-repeat: no-repeat;
}

/* Thumb */
::-webkit-scrollbar-thumb {
	background: #fff4;
	border-left: 2px solid;
	border-right: 2px solid;
	border-color: #101010;
}

::-webkit-scrollbar-thumb:hover {
	background: #fff5;
}

::-webkit-scrollbar-thumb:active {
	background: #fff6;
}

/* Buttons */
::-webkit-scrollbar-button:single-button {
	background-position: center center;
	background-size: contain;
  display: block;
  height: 16px;
  width: 16px;
	background: #10101088;
}

::-webkit-scrollbar-button:single-button:hover {
	background: #10101044;
}

::-webkit-scrollbar-button:single-button:active {
	background: #10101022;
}









.MomentMakerPage.hasCoverOverlay .topbar.MomentMakerTopBar-background,
.ProfilePage.is-editing .ProfilePage-editingOverlay,
.ProfileAvatarEditing {
	background: var(--dark0)
}

.MomentsPage.MomentsPermalinkPage,
.StaticLoggedOutHomePage-content,
.MomentsPage.MomentsGuidePage,
.MomentMakerCoverCropper,
.detail-view-inline-text,
.QuoteTweet--sensitive,
.PageContainer,
.column-panel,
.r-e84r5y,
.r-e84r5y {
	background: var(--dark50) !important;
}


form input,
textarea,
select,
input,
body {
	background: var(--dark50)
}

.EmojiPicker-query input[type=text].EmojiPicker-queryInput:focus,
.public-DraftEditor-content[contenteditable=true],
.AdaptiveNewsLargeImageHeadline-image,
.MomentMakerCoverDialog .modal-body,
.MomentCapsuleItemTweet--withText,
.permalink .inline-reply-tweetbox,
.global-nav .search-input:focus,
.global-nav .search-input.focus,
.TwitterCard .SummaryCard-image,
.route-resend-password .mobile,
.MomentMakerCapsuleCover-empty,
.MomentMakerRecommendations,
.login-responsive .mobile,
.global-nav .search-input,
.compose-text-container,
.bg-color-twitter-white,
.u-bgUserColorLightest,
.new-tweets-bar:hover,
.facet-type.is-active,
.PlayableMedia-player,
.compose-reply-tweet,
.PollingCardComposer,
.detail-view-inline,
.app-search-input,
.media-sensitive,
.contact-support,
.column-message,
.DMButtonBar,
.Tombstone,
.sc-key {
	background-color: var(--dark75) !important
}

.ProfileListsTimeline .GridTimeline-end:not(.has-items),
body[style^="background-color: rgb(255, 255, 255);"],
.ProfileUserMomentsTimeline .MomentCapsuleSummary,
.hovercard.gravity-south:not(.with-banner) .arrow,
.stream-item:not(.no-header-background-module),
.permalink .inline-reply-tweetbox-container,
#global-tweet-dialog .modal-tweet .tweet,
.ProfileSidebar .TweetImpressionsModule,
#activity-popup-dialog .modal-content,
.activity-popup-dialog-content .tweet,
.ThreadedConversation-showMoreThreads,
.ProfileSidebar .ProfileLifelineInfo,
.AdaptiveNewsLargeImageHeadline-body,
.MomentMakerRecommendations-module,
.PermalinkOverlay-spinnerContainer,
.MomentMakerRecommendations-more,
.ThreadedConversation--loneTweet,
.hovercard .profile-social-proof,
.DashboardProfileCard-avatarLink,
.tweet-form .thumbnail-container,
.css-1dbjc4n.r-e84r5y.r-1or9b2r,
.notifications-prompt-container,
.login-responsive .page-canvas,
.find-friends-bottom-subheader,
.AdaptiveNewsRelatedHeadlines,
.ProfilePrefilledTweet .tweet,
.content-header .header-inner,
.ThreadedConversation--header,
.ProfileSidebar .RelatedUsers,
.content-inner.no-stream-end,
.PermalinkOverlay .permalink,
.NotificationsHeadingContent,
.column-options .button-tray,
.find-friends-top-subheader,
.new-composer-bottom-button,
.EmojiPicker-categoryHeader,
.global-nav .people .count,
.module .active .list-link,
.RetweetDialog-commentBox,
.compose-media-bar-holder,
.NotificationsEmptyModule,
.AdaptiveRelatedSearches,
.MomentMakerPage-content,
.module .list-link:hover,
.BirthdateSelect-button,
.column-title-edit-box,
.ProfileCard-avatarLink,
.column-background-fill,
.global-dm-nav .dm-new,
.ThreadedConversation,
.find-friends-sources,
.DashboardProfileCard,
.ProfileCanopy-navBar,
.SidebarFilterModule,
.MutedKeywordsFooter,
div[contenteditable],
.module .flex-module,
.scroll-conversation,
.ListCreationModule,
.AdaptiveFiltersBar,
.DelightOptInModule,
.LiveVideo-tweetBox,
.r-eps6nq .r-e84r5y,
.module .list-link,
.ComposerThumbnail,
.DMActivity-header,
.stream-end-inner,
.global-nav-inner,
.DMActivity-body,
.mdl-column-med,
.new-tweets-bar,
.home-tweet-box,
.column-options,
.StreamsFooter,
.ProfileAvatar,
.SignupCallOut,
.modal-header,
#react-root,
.ProfileCard,
.r-14lw9ot,
.t1-select,
.r-14lw9ot,
#calweeks,
#calbody,
.Trends,
.column,
.TopNav {
	background: var(--dark100) !important
}

.hovercard .arrow {
	background: var(--dark100)
}

.TwitterCard .LiveEventCard-image,
.MutedKeywordsAddItemForm,
.ProfileHeading-content,
.FoundMediaSearch-query,
.bg-color-twitter-white,
.MomentDialog-footer,
.column-header-temp,
.modal .modal-tweet,
.EmojiPicker-query,
.column-header,
.modal-content,
.hovercard,
.prf-meta,
.popover,
.mdl {
	background: var(--dark150)
}

.TwitterCard .PollXChoice-optionContainer .PollXChoice-choice--chart,
.SessionsSettings--row .SessionsSettings--row-time-active,
.trend-location-picker-item.selected,
.r-14lw9ot[role="menu"],
.app-columns-container,
.column-nav-item,
.Dropdown-menu,
.dropdown-menu,
.app-navigator,
.app-content,
.app-header,
.app-title {
	background: var(--dark200) !important
}

.FollowStatus,
.message {
	background: var(--dark250)
}


.MomentCapsuleItemTweet--withText .QuoteTweet:hover,
.DMTokenizedMultiselectSuggestion.is-highlighted,
.dropdown-menu .typeahead-items li > a:focus,
.dropdown-menu .typeahead-items li > a:hover,
.dropdown-menu .typeahead-items .selected a,
input[type=button].btn-on-dark.is-selected,
.dropdown-menu .typeahead-items .selected,
.TwitterCard .EdgeButton--secondary:hover,
.TwitterCard-container--clickable:hover,
.MomentCapsuleSummary--portrait:hover,
input[type=button].btn-on-dark:active,
input[type=button].btn-on-dark:focus,
input[type=button].btn-on-dark:hover,
.MomentCapsuleSummary--hero:hover,
.list-twitter-list:hover:active,
.list-twitter-list:hover:focus,
.list-twitter-list:hover:hover,
button.btn-on-dark.is-selected,
.list-listaccount:hover:active,
.list-listaccount:hover:focus,
.list-listaccount:hover:hover,
.list-listmember:hover:active,
.EdgeButton--secondary:active,
.EdgeButton--secondary:hover,
.list-listmember:hover:focus,
.list-listmember:hover:hover,
.find-friends-list li:hover,
.list-subtitle:hover:active,
.photo-selector:hover .btn,
.list-subtitle:hover:focus,
.list-account:hover:active,
.list-subtitle:hover:hover,
button.btn-on-dark:active,
.list-account:hover:focus,
.list-account:hover:hover,
button.btn-on-dark:focus,
button.btn-on-dark:hover,
.module .list-link:hover,
.list-link:hover:active,
.list-link:hover:hover,
.list-link:hover:focus,
.permalink-tweet:hover,
.permalink-tweet.focus,
.DMInboxItem:hover,
.icon-btn.enabled,
.calweek a:hover,
.icon-btn:hover,
.tweet:hover,
.r-1u4rsef,
.r-1u4rsef,
.r-vqp9x9,
.r-vqp9x9,
.calfocus,
#caltoday {
	background: var(--hover) !important
}

.TwitterCard [data-poll-vote-majority*="1"] .PollXChoice-optionContainer[data-poll-index="1"] .PollXChoice-choice--chart,
.TwitterCard [data-poll-vote-majority*="2"] .PollXChoice-optionContainer[data-poll-index="2"] .PollXChoice-choice--chart,
.TwitterCard [data-poll-vote-majority*="3"] .PollXChoice-optionContainer[data-poll-index="3"] .PollXChoice-choice--chart,
.TwitterCard [data-poll-vote-majority*="4"] .PollXChoice-optionContainer[data-poll-index="4"] .PollXChoice-choice--chart,
.StaticLoggedOutHomePage-communicationBlock,
.DirectMessage--sent .DirectMessage-text,
.dropdown-menu .dropdown-link.is-focused,
.global-nav .people .count .count-inner,
.dropdown-menu .dropdown-link.selected,
.dropdown-menu li:hover .dropdown-link,
.dropdown-menu li:focus .dropdown-link,
.button-group-item .content.selected,
.dropdown-menu .dropdown-link:focus,
.dropdown-menu .dropdown-link:hover,
[style="background-color: #1DA1F2"],
.notifying .device-follow-button,
.lst-group .selected a:hover,
.dropdown-menu .is-selected,
.dropdown-menu li > a:hover,
.dropdown-menu li > a:focus,
.dropdown-menu .selected a,
.EdgeButton--primary:focus,
.u-bgUserColorHover:hover,
.u-bgUserColorHover:focus,
.list-item.is-selected,
.bg-color-twitter-blue,
button.Button--primary,
.drag-drop-indicator,
.lst-group .selected,
.EdgeButton--primary,
.list-item:active,
.list-item:hover,
.settings-alert,
.u-bgUserColor,
.primary-btn,
.btn-on-blue,
#calcurrent,
.InputToken,
.r-1cb97yi,
.r-1q3imqu,
.r-1xfps3t,
.r-nfjyqm,
.r-ny3pxa,
.r-urgr8i,
.r-urgr8i {
	background: var(--custom-color) !important
}


.arrow[style="background-color: #5F91F5"],
.hovercard.profile-card .ProfileCard-bg,
.ProfileCard a[style] {
	background-color: var(--custom-color) !important
}

.divider-bar,
.r-dkge59,
.thread {
	background-color: var(--border-light)
}

.r-vrwoeq {
	background: #fff2
}

.MomentMakerTopBarDropdownMenu .dropdown-menu .dropdown-link[disabled]:hover,
.MomentSummaryActionsMenu .dropdown-menu .dropdown-link[disabled]:hover,
.MomentMakerTopBarDropdownMenu .dropdown-menu .dropdown-link[disabled],
.DashUserDropdown.dropdown-menu .DashUserDropdown-userInfoLink:active,
.DashUserDropdown.dropdown-menu .DashUserDropdown-userInfoLink:hover,
.DashUserDropdown.dropdown-menu .DashUserDropdown-userInfoLink:focus,
.MomentSummaryActionsMenu .dropdown-menu .dropdown-link[disabled],
.r-1yadl64 .public-DraftEditor-content[contenteditable=true],
.StaticLoggedOutHomePage .StreamsFooter-list,
.EdgeButton--secondary[aria-disabled=true],
.EdgeButton--secondary[disabled]:hover,
.MomentMakerCoverDialog-cell--upload,
.wtf-module .import-prompt .service,
.AdaptiveMedia-photoContainer img,
.EdgeButton--secondary[disabled],
.EdgeButton--secondary.disabled,
.EdgeButton--invertedSecondary,
.ProfileNav-item--userActions,
#notifications-optout-all-top,
input.is-hover[type=button],
input:hover[type=button],
.EdgeButton--secondary,
.DMComposer-container,
.EdgeButton--tertiary,
.Footer .flex-module,
.old-composer-footer,
.geo-query-location,
.app-search-fake,
.Button.is-hover,
button.btn-round,
.permalink-tweet,
.MomentMediaItem,
button.is-hover,
.content-inner,
a.caldisabled,
.RichEditor,
.r-1dernwh,
.r-r72n3l,
.r-4v7adb,
.r-zv2cs0,
.r-zv2cs0,
.r-r72n3l,
.Button {
	background: transparent !important
}









.PromptbirdPrompt-streamItem.separated-module + .stream-item:not(.no-header-background-module),
.permalink .replies-to .ThreadedConversation--loneTweet .stream-tombstone-item,
.stream-item + .stream-item.separated-module:not(.no-header-background-module),
.stream-item.separated-module + .stream-item:not(.no-header-background-module),
.PollingCardComposer .PollingCardComposer-pollDuration,
.typeahead .dropdown-inner > .has-results ~ .has-results,
.typeahead .dropdown-inner > .has-items ~ .has-items,
.ProfileUserMomentsTimeline .MomentCapsuleSummary,
.activity-popup-dialog-in-reply-to-user .account,
.permalink.has-replies .inline-reply-tweetbox,
.ThreadedConversation-moreReplies:after,
.AdaptiveNewsRelatedHeadlines-headline,
.activity-popup-dialog-users .account,
.ThreadedConversation-showMoreThreads,
.trend-location-picker-item.selected,
.LiveBroadcastCard-playerContainer,
#user-data-dashboard .other-data,
.notifications-prompt-container,
.wtf-module .import-prompt .cta,
.wtf-module .UserSmallListItem,
.permalink .in-reply-to .tweet,
.ProfilePrefilledTweet .tweet,
.ThreadedConversation--header,
.permalink .replies-to .tweet,
.content-header .header-inner,
#notifications-optout-all-top,
.MomentsPermalinkPage-related,
.NotificationsHeadingContent,
.EmojiPicker-categoryHeader,
.EmojiPicker-categoryColumn,
.with-column-divider-bottom,
.EmojiPicker-diversityRow,
.detail-view-inline-text,
.SessionsSettings--row,
.TwitterCard-container,
.column-title-edit-box,
textarea.light-on-dark,
.u-bgUserColorLightest,
.s-minimal .mdl-header,
.lst-launcher .top-row,
.ThreadedConversation,
.tweet-detail-actions,
.find-friends-list li,
select.light-on-dark,
.TweetBoxAttachments,
div[contenteditable],
.prf-stats li + li a,
.column-header-temp,
.geo-query-location,
.prf .lst-profile a,
.detail-view-inline,
.mdl-header-divider,
input.light-on-dark,
.DMActivity-header,
.EmojiPicker-query,
.dropdown-divider,
.mdl-column-rhs,
.border-divider,
.drp-h-divider,
.column-header,
.quoted-tweet,
.modal-header,
.ActivityItem,
.modal-footer,
.tweet-stats,
.DMInboxItem,
.mdl-content,
.RichEditor,
.facet-type,
.QuoteTweet,
.t1-legend,
.t1-select,
.r-13w96dm,
.r-1gkumvb,
.r-109y4c4,
.Tombstone,
.r-1tlfku8,
.r-9cbz99,
.r-my5ep6,
.r-uvzvve,
.r-my5ep6,
.r-9x6qib,
.prf-meta,
#caldays,
textarea,
.tweet,
hr {
	border-color: var(--border-light) !important
}

.lst li,
textarea,
select,
input {
	border-color: var(--border-light);
}

.currently-dragging .tweet-form.is-droppable .tweet-drag-help,
div[contenteditable="plaintext-only"].fake-focus,
.RichEditor.is-fakeFocus ~ .TweetBoxAttachments,
.permalink .stats .avatar-row a:first-child,
div[contenteditable="plaintext-only"]:focus,
.tweet-box[contenteditable="true"]:focus,
.MomentMakerCapsuleCover-media.has-media,
.TwitterCard-container--clickable:hover,
div[contenteditable="true"].fake-focus,
.TokenizedMultiselect-inputContainer,
.wtf-module .import-prompt .service,
div[contenteditable="true"]:focus,
.permalink .inline-reply-tweetbox,
.tweet-box input[type=text],
.tweet-box textarea:focus,
.global-nav .search-input,
.RichEditor.is-fakeFocus,
.tweet-translation,
.ComposerThumbnail,
.QuoteTweet:active,
.QuoteTweet:hover,
textarea:focus,
.tweet .stats,
.Form-textbox,
.Form-select,
.r-1ncdyz2,
input:focus {
	border-color: var(--border-medium)
}

.Form-textbox:focus,
.Form-select:focus {
	border-color: var(--border-heavy)
}


.dropdown.open .user-dropdown.plain-btn,
.plain-btn.active,
.plain-btn:active,
.plain-btn:focus,
.open > .plain-btn,
.plain-btn.focus,
.plain-btn.open {
	border-color: var(--text-secondary);
}

.ProfileAvatarEditing {
	border-color: var(--dark0)
}

.MomentMakerRecommendations-more {
	border-color: var(--dark75)
}

.hovercard.profile-card .ProfileCard-avatarImage,
.DashboardProfileCard-avatarImage,
.FoundMediaSearch-focusable,
.ProfileAvatar,
.r-11mg6pl,
.r-1eqmklk {
	border-color: var(--dark100)
}

.FoundMediaSearch-content.Caret:before,
.FoundMediaSearch-content.Caret:after {
	border-color: var(--dark150)
}

.bg-color-twitter-white .caret-outer,
.bg-color-twitter-white .caret-inner,
.replyto-caret {
	border-bottom-color: var(--dark100)
}

.EmojiPicker-content.Caret::after,
.dropdown-caret .caret-inner,
.popover .caret-inner,
.caret-inner {
	border-bottom-color: var(--dark150)
}

.bg-color-twitter-white .caret-inner,
.Dropdown-caretInner {
	border-bottom-color: var(--dark200)
}

.FoundMediaSearch-query {
	border-bottom: 1px solid var(--border-light) !important
}

.ThreadedConversation--header {
	border-top: none;
}

.ThreadedConversation-tweet:not(.is-hiddenAncestor) ~ .ThreadedConversation-tweet:before,
.permalink.self-thread-permalink-with-descendant .inline-reply-tweetbox-container:after,
.permalink.self-thread-permalink-with-descendant .permalink-tweet-container:after,
.s-following .follow-btn:hover input.following-text:visited[type=button],
.TwitterCard[data-theme="tweetdeck-light"] .Button--smallGray:hover,
.ButtonGroup--primary > .ButtonGroup > input:visited[type=button],
.s-following .follow-btn:hover input.following-text[type=button],
.TwitterCard[data-theme="tweetdeck-light"] .Button--smallGray,
.s-following .follow-btn:hover .Button.following-text:visited,
.s-following .follow-btn:hover button.following-text:visited,
.ThreadedConversation--permalinkTweetWithAncestors:before,
.ButtonGroup--primary > .ButtonGroup > input[type=button],
.ButtonGroup--primary > .ButtonGroup > .Button:visited,
.ButtonGroup--primary > .ButtonGroup > button:visited,
.s-following .follow-btn:hover .Button.following-text,
.s-following .follow-btn:hover button.following-text,
.ButtonGroup--primary > input:visited[type=button],
input.btn-fav.s-favorited:visited[type=button],
.ButtonGroup--primary > .ButtonGroup > .Button,
.ButtonGroup--primary > .ButtonGroup > button,
.ThreadedConversation-unavailableTweet:before,
.MomentMakerCoverDialog-cell--image.selected,
.ThreadedConversation-unavailableTweet:after,
input.Button--primary:visited[type=button],
.ButtonGroup--primary > input[type=button],
.ThreadedConversation-moreReplies:before,
.ButtonGroup--primary > .Button:visited,
input.btn-fav.s-favorited[type=button],
.ThreadedConversation--loneTweet:after,
.ThreadedConversation-viewOther:before,
.ButtonGroup--primary > button:visited,
.button-group-item .content.selected,
.MomentMakerCoverDialog-cell--upload,
input[type=button].btn-on-dark:focus,
.Button.btn-fav.s-favorited:visited,
.TwitterCard .EdgeButton--secondary,
input.Button--primary[type=button],
button.btn-fav.s-favorited:visited,
.ThreadedConversation-tweet:after,
.notifying .device-follow-button,
.conversation-module > li:before,
.mini-avatar-with-thread:before,
.conversation-module > li:after,
.Button.Button--primary:visited,
.global-nav .search-input:focus,
.global-nav .search-input.focus,
.ButtonGroup--primary > .Button,
.ButtonGroup--primary > button,
button.Button--primary:visited,
.EdgeButton--secondary:active,
input.is-visited[type=button],
.EdgeButton--secondary:focus,
.EdgeButton--secondary:hover,
input.is-active[type=button],
.Button.btn-fav.s-favorited,
.EdgeButton--primary:active,
input.is-focus[type=button],
.photo-selector:hover .btn,
.EdgeButton--primary:hover,
button.btn-fav.s-favorited,
input:visited[type=button],
input:active[type=button],
#global-actions > li > a,
button.btn-on-dark:focus,
input:focus[type=button],
.Button.Button--primary,
button.Button--primary,
.EdgeButton--secondary,
input[type=button],
.Button.is-visited,
button.is-visited,
.Button.is-active,
.icon-btn.enabled,
button.is-active,
.icon-btn:active,
.icon-btn.active,
.btn.focus:hover,
.btn:focus:hover,
.app-search-fake,
.Button.is-focus,
button.is-focus,
.Button:visited,
.icon-btn:hover,
button:visited,
textarea:focus,
.Button:active,
.vellip:before,
button:active,
.vellip:after,
.Button:focus,
button:focus,
select:focus,
.primary-btn,
input:focus,
.r-18p3no4,
.r-18p3no4,
.r-4rwt92,
.r-ec560x,
.r-p1n3y5,
.Button,
.vellip,
.focus,
button {
	border-color: var(--custom-color)
}

.u-borderUserColorLightFocus:focus,
.u-borderUserColorLightHover:hover,
.u-borderUserColorHover:focus,
.u-borderUserColorHover:hover,
.u-borderUserColorLight,
.u-borderUserColor {
	border-color: var(--custom-color) !important
}

.search-filter-callout-triangle {
	border-bottom-color: var(--custom-color)
}

.r-zv2cs0::before,
.r-r72n3l::before {
	border-radius: 20px
}

.DirectMessage--sent .DirectMessage-text {
	border-bottom-right-radius: var(--border-radius);
}

.r-1dernwh::before,
.r-4v7adb::before {
	border-radius: inherit
}

.r-1qxgc49::before {
	border-radius: 0;
}

.MomentMakerRecommendations-module {
	border-color: transparent
}

.PlayableMedia-externalUrlBlockContent {
	border: 1px solid var(--border-light);
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
	border-top: none
}

fieldset[disabled] .s-following .follow-btn:hover input.following-text[type=button],
.s-following .follow-btn:hover fieldset[disabled] input.following-text[type=button],
.s-following .follow-btn:hover input.is-disabled.following-text[type=button]:focus,
fieldset[disabled] .ButtonGroup--primary > .ButtonGroup > input[type=button],
.s-following .follow-btn:hover input.is-disabled.following-text[type=button],
.follow-btn.is-disabled .s-following .follow-btn:hover button.following-text,
.s-following .follow-btn:hover .follow-btn.is-disabled button.following-text,
.ButtonGroup--primary > .ButtonGroup > input.is-disabled[type=button]:focus,
.s-following .follow-btn:hover input.following-text[disabled][type=button],
.s-following .follow-btn:hover input.is-hover.following-text[type=button],
.s-following .follow-btn:hover input.following-text:visited[type=button],
fieldset[disabled] .s-following .follow-btn:hover .Button.following-text,
.s-following .follow-btn:hover fieldset[disabled] .Button.following-text,
.s-following .follow-btn:hover fieldset[disabled] button.following-text,
fieldset[disabled] .s-following .follow-btn:hover button.following-text,
.s-following .follow-btn:hover button.is-disabled.following-text:focus,
.s-following .follow-btn:hover input.following-text:hover[type=button],
.follow-btn.is-disabled .ButtonGroup--primary > .ButtonGroup > button,
.ButtonGroup--primary > .ButtonGroup > input.is-disabled[type=button],
.ButtonGroup--primary > .ButtonGroup > input[disabled][type=button],
.ButtonGroup--primary > .ButtonGroup > input.is-hover[type=button],
fieldset[disabled] .ButtonGroup--primary > .ButtonGroup > .Button,
.s-following .follow-btn:hover .Button.is-disabled.following-text,
.ButtonGroup--primary > .ButtonGroup > input:visited[type=button],
fieldset[disabled] .ButtonGroup--primary > .ButtonGroup > button,
.s-following .follow-btn:hover button.is-disabled.following-text,
.s-following .follow-btn:hover input.following-text[type=button],
.s-following .follow-btn:hover .Button.following-text[disabled],
.ButtonGroup--primary > .ButtonGroup > input:hover[type=button],
.ButtonGroup--primary > .ButtonGroup > button.is-disabled:focus,
.s-following .follow-btn:hover button.following-text[disabled],
.s-following .follow-btn:hover .Button.is-hover.following-text,
.s-following .follow-btn:hover button.is-hover.following-text,
fieldset[disabled] .ButtonGroup--primary > input[type=button],
.s-following .follow-btn:hover .Button.following-text:visited,
.s-following .follow-btn:hover button.following-text:visited,
.s-following .follow-btn:hover .Button.following-text:hover,
.ButtonGroup--primary > input.is-disabled[type=button]:focus,
.s-following .follow-btn:hover button.following-text:hover,
.ButtonGroup--primary > .ButtonGroup > .Button.is-disabled,
.ButtonGroup--primary > .ButtonGroup > input[type=button],
.ButtonGroup--primary > .ButtonGroup > button.is-disabled,
.ProfileUserMomentsTimeline .GridTimeline-items.has-items,
fieldset[disabled] input.btn-fav.s-favorited[type=button],
input.is-disabled.btn-fav.s-favorited[type=button]:focus,
.AdaptiveSearchTimeline .stream .stream-item:first-child,
.ButtonGroup--primary > .ButtonGroup > .Button[disabled],
.ButtonGroup--primary > .ButtonGroup > .Button.is-hover,
.ButtonGroup--primary > .ButtonGroup > button[disabled],
.ProfileListsTimeline .GridTimeline-end:not(.has-items),
.ButtonGroup--primary > input.is-disabled[type=button],
.follow-btn.is-disabled .ButtonGroup--primary > button,
.ButtonGroup--primary > .ButtonGroup > .Button:visited,
.ButtonGroup--primary > .ButtonGroup > button.is-hover,
.ButtonGroup--primary > .ButtonGroup > button:visited,
fieldset[disabled] input.Button--primary[type=button],
.s-following .follow-btn:hover .Button.following-text,
.s-following .follow-btn:hover button.following-text,
.ButtonGroup--primary > input[disabled][type=button],
.ButtonGroup--primary > .ButtonGroup > .Button:hover,
input.Button--primary.is-disabled[type=button]:focus,
.ButtonGroup--primary > input.is-hover[type=button],
.ButtonGroup--primary > .ButtonGroup > button:hover,
input.is-disabled.btn-fav.s-favorited[type=button],
.follow-btn.is-disabled button.btn-fav.s-favorited,
fieldset[disabled] .ButtonGroup--primary > .Button,
.ButtonGroup--primary > input:visited[type=button],
.PlayableMedia--hasMetadata .PlayableMedia-player,
fieldset[disabled] .ButtonGroup--primary > button,
input.btn-fav.s-favorited[disabled][type=button],
.DMTokenizedMultiselectSuggestion.is-highlighted,
.ButtonGroup--primary > button.is-disabled:focus,
.ButtonGroup--primary > input:hover[type=button],
input.is-hover.btn-fav.s-favorited[type=button],
input.Button--primary.is-disabled[type=button],
input.btn-fav.s-favorited:visited[type=button],
.follow-btn.is-disabled button.Button--primary,
fieldset[disabled] .Button.btn-fav.s-favorited,
.stream-item:not(.no-header-background-module),
.ButtonGroup--primary > .ButtonGroup > .Button,
fieldset[disabled] button.btn-fav.s-favorited,
.ButtonGroup--primary > .ButtonGroup > button,
input.btn-fav.s-favorited:hover[type=button],
input.Button--primary[disabled][type=button],
button.is-disabled.btn-fav.s-favorited:focus,
input.Button--primary.is-hover[type=button],
.ButtonGroup--primary > .Button.is-disabled,
.top-timeline-tweetbox .timeline-tweet-box,
fieldset[disabled] .Button.Button--primary,
input.Button--primary:visited[type=button],
.ButtonGroup--primary > input[type=button],
.ButtonGroup--primary > button.is-disabled,
fieldset[disabled] button.Button--primary,
.ButtonGroup--primary > .Button[disabled],
input.Button--primary:hover[type=button],
button.Button--primary.is-disabled:focus,
.ButtonGroup--primary > .Button.is-hover,
.ButtonGroup--primary > button[disabled],
.Button.is-disabled.btn-fav.s-favorited,
.ProfileSidebar .TweetImpressionsModule,
.ButtonGroup--primary > button.is-hover,
.ButtonGroup--primary > .Button:visited,
input.btn-fav.s-favorited[type=button],
button.is-disabled.btn-fav.s-favorited,
.ButtonGroup--primary > button:visited,
.ButtonGroup--primary > .Button:hover,
.Button.btn-fav.s-favorited[disabled],
button.btn-fav.s-favorited[disabled],
.ProfileSidebar .ProfileLifelineInfo,
.Button.is-hover.btn-fav.s-favorited,
.ButtonGroup--primary > button:hover,
.AdaptiveNewsLargeImageHeadline-body,
button.is-hover.btn-fav.s-favorited,
.Button.btn-fav.s-favorited:visited,
.Button.Button--primary.is-disabled,
.MomentMakerSortMenu .dropdown-menu,
button.Button--primary.is-disabled,
input.Button--primary[type=button],
button.btn-fav.s-favorited:visited,
.Button.Button--primary[disabled],
.Button.btn-fav.s-favorited:hover,
.DMTokenizedMultiselectSuggestion,
.module li:first-child .list-link,
.Button.Button--primary.is-hover,
button.btn-fav.s-favorited:hover,
button.Button--primary[disabled],
.ButtonGroup--primary > .Button,
button.Button--primary.is-hover,
.Button.Button--primary:visited,
.ButtonGroup--primary > button,
button.Button--primary:visited,
.Button.Button--primary:hover,
.ProfileSidebar .RelatedUsers,
.AdaptiveNewsRelatedHeadlines,
button.Button--primary:hover,
.content-inner.no-stream-end,
.Button.btn-fav.s-favorited,
button.btn-fav.s-favorited,
.MomentCapsuleCover-media,
.u-borderUserColorLighter,
.NotificationsEmptyModule,
.AdaptiveRelatedSearches,
.PlayableMedia-container,
.FoundMediaSearch-query,
.ProfileHeading-content,
.Button.Button--primary,
button.Button--primary,
.DashboardProfileCard,
.new-tweets-bar:hover,
.MutedKeywordsFooter,
.module .flex-module,
.EdgeButton--primary,
.SidebarFilterModule,
.ListCreationModule,
.DelightOptInModule,
.stream-placeholder,
.content-no-header,
.module .list-link,
.stream-end-item,
.new-tweets-bar,
.content-header,
.stream-loading,
.SignupCallOut,
.StreamsFooter,
.Dropdown-menu,
.ProfileCard,
.InputToken,
.stream-end,
.TopNav,
.sc-key,
.Trends {
	border: none
}









.top-timeline-tweetbox .timeline-tweet-box .tweet-form.condensed .tweet-box,
.SearchExtrasDropdown .dropdown-menu li > .SearchExtrasDropdown-target,
.TwitterCard[data-theme="tweetdeck-light"] .PollXChoice,
div[contenteditable="plaintext-only"].fake-focus,
.accordion .is-active .accordion-header:hover,
div[contenteditable="plaintext-only"]:focus,
.AdaptiveNewsLargeImageHeadline-title:focus,
.AdaptiveNewsLargeImageHeadline-title:hover,
.ProfileHeading-toggleItem.is-active:focus,
.ProfileHeading-toggleItem.is-active:hover,
.ProfilePrefilledTweet .tweet .tweet-text,
.NotificationsEmptyModule-activityHeader,
.accordion .is-active .accordion-header,
.AdaptiveNewsHeadlineDetails-user:focus,
.AdaptiveNewsHeadlineDetails-user:hover,
.StaticLoggedOutHomePage-signupSubtitle,
div[contenteditable="true"].fake-focus,
.DashUserDropdown.dropdown-menu li > a,
.QuoteTweet-text .pretty-link:active b,
.QuoteTweet-text .pretty-link:active s,
.QuoteTweet-text .pretty-link:hover b,
.QuoteTweet-text .pretty-link:hover s,
.QuoteTweet-text .pretty-link:focus b,
.QuoteTweet-text .pretty-link:focus s,
.AdaptiveNewsLargeImageHeadline-title,
.ProfileHeading-toggleItem.is-active,
.AdaptiveNewsRelatedHeadlines-title,
.wrapper-settings .header-inner h2,
.Tombstone .Tombstone-action:hover,
.AdaptiveNewsHeadlineDetails-user,
div[contenteditable="true"]:focus,
.QuoteTweet-text .pretty-link b,
.QuoteTweet-text .pretty-link s,
.NotificationsEmptyModule-title,
.AdaptiveSearchPage-moduleTitle,
.global-nav .search-input:focus,
.global-nav .search-input.focus,
.list-editor .options label b,
.dropdown-menu .dropdown-link,
.trend-locations-section h3,
.MomentCapsuleSummary-title,
.modal-header .modal-title,
.find-friends-list .source,
.MomentUserByline-fullname,
.QuoteTweet .tweet-content,
.module .active .list-link,
.QuoteTweet-text a:active,
.DelightOptInModule-title,
.MomentCapsuleCover-title,
.stats .stat-count strong,
.QuoteTweet-text a:hover,
.QuoteTweet-text a:focus,
.js-drawer button:focus,
.column-title-container,
.personalization-field,
.column-title-edit-box,
.FacebookConnect-title,
.message .message-text,
.media-sensitive-title,
.flex-module-header h3,
.ProfileHeaderCard-bio,
.view-toggler .active,
.btn-link.back-to-top,
.dropdown-menu li > a,
.ProfileHeading-title,
.compose-reply-tweet,
.content-placeholder,
.SignupCallOut-title,
.DMEmptyState-header,
.QuoteTweet-fullname,
.RelatedUsers-title,
.prf-stats a strong,
.column-header-temp,
.stream-placeholder,
.u-textInheritColor,
.column-title-back,
.DMTypeaheadHeader,
.QuoteTweet-text a,
.DMActivity-title,
.typeahead strong,
.ProfileCard-bio,
.modal-table th,
.stream-loading,
textarea:focus,
.column-header,
.FollowStatus,
.account-link,
.modal-body p,
#caldays span,
.compose-text,
.back-to-top,
#calcurrent,
.stream-end,
.tweet-stat,
.t1-legend,
.r-hkyrab,
.t1-label,
.fullname,
.cal,
body {
	color: var(--text-primary) !important
}

.ProfilePage-emptyModuleHeader,
input:focus,
.calweek a,
.r-hkyrab,
textarea,
select,
input {
	color: var(--text-primary)
}

.SessionsSettings--row .SessionsSettings--row-time-active,
.tweet-form div.rich-editor.is-showPlaceholder:before,
.ProfileNav-item.is-active:hover .ProfileNav-label,
.Trends .context-trend-item .trend-item-stats,
.ProfileNav-item.is-active .ProfileNav-label,
.dropdown-menu a:not(:hover):not(:focus),
.tweet-form div.rich-editor:empty:before,
.ProfileHeaderCard-screennameLink:hover,
.DashUserDropdown.dropdown-menu button,
.NotificationsEmptyModule-activityBody,
.ProfileHeaderCard-screennameLink,
.ListCreationModule-description,
.tweet .context .pretty-link s,
.tweet .context .pretty-link b,
.ProfileTweet-actionButtonUndo,
.NotificationsEmptyModule-body,
.ReplyingToContextBelowAuthor,
.ProfileCardStats-statLabel,
.ProfileTweet-actionButton,
.ProfileTweet-actionButton,
.global-nav .search-input,
.ProfileTweet-actionCount,
.metadata button.btn-link,
.SignupCallOut-subheader,
.DelightOptInModule-body,
.account-group .username,
.ProfileCard-userFields,
.import-prompt p > span,
.Icon--retweeted:before,
.MessageStreamItem-body,
.LoginForm .separator,
.DMEmptyState-details,
.Icon--logo::before,
.module .list-link,
.ProfileNav-label,
.ProfileNav-value,
.LoginForm label,
.quoted-tweet,
.t1-infotext,
.created-via,
.Footer-link,
.Footer-item,
.metadata a,
.list-item,
.metadata,
.txt-mute,
.with-icn,
.nav > li,
a.caloff,
.stats a,
.time a,
.time {
	color: var(--text-secondary)
}


.lst-group .selected .list-twitter-list,
.lst-group .selected .list-listmember,
.lst-group .selected .list-subtitle,
.dropdown-menu .dropdown-link:hover,
.lst-group .selected .inner strong,
.lst-group .selected .list-account,
.lst-group .selected .txt-ellipsis,
.MomentMakerSortMenu-button:hover,
.lst-group .selected .list-link,
.lst-group .selected .fullname {
	color: var(--text-highlighted) !important;
}

.ProfileTweet-action--reply .ProfileTweet-actionButton:focus .ProfileTweet-actionCount,
.stream-item-activity-notification .latest-tweet .tweet-row a:hover s,
.stream-item-activity-notification .latest-tweet .tweet-row a:focus s,
.TwitterCard[data-theme="tweetdeck-light"] .Button--smallGray:hover,
.TwitterCard[data-theme="tweetdeck-light"] .Button--smallGray,
.ProfileCardStats-statLink:hover .ProfileCardStats-statLabel,
.ProfileCardStats-statLink:focus .ProfileCardStats-statLabel,
.ProfileCardStats-statLink:hover .ProfileCardStats-statValue,
.ProfileCardStats-statLink:focus .ProfileCardStats-statValue,
.ProfileTweet-action--reply:hover .ProfileTweet-actionButton,
.ProfileTweet-action--reply .ProfileTweet-actionButton:focus,
.ProfileTweet-action--reply:hover .ProfileTweet-actionCount,
.column-header.is-options-open .column-settings-link:hover,
.DashUserDropdown.dropdown-menu .nightmode-toggle .Icon,
.column-header.is-options-open .column-settings-link,
.list-membership-container .create-a-list:hover,
.is-selected.tweet-detail-action .reply-count,
.stream-item:hover .original-tweet .details b,
.stream-item .original-tweet.focus .details b,
.stream-item.open .original-tweet .details b,
.is-selected.tweet-detail-action .icon-reply,
.list-membership-container .create-a-list,
.TwitterCard .EdgeButton--secondary:hover,
.stream-item .view-all-supplements:hover,
.stream-item .view-all-supplements:focus,
.tweet-detail-action:active .reply-count,
.DirectMessage--sent .DirectMessage-text,
.tweet-detail-action:active .icon-reply,
.inline-reply .other-replies-link:hover,
.dropdown.open .user-dropdown.plain-btn,
.tweet-detail-action:focus .reply-count,
.tweet-detail-action:hover .reply-count,
.tweet-action.is-selected .reply-count,
.tweet-detail-action:focus .icon-reply,
.tweet-detail-action:hover .icon-reply,
.find-friends-sources li:hover .source,
.tweet-action.is-selected .icon-reply,
.tweet .context .pretty-link:hover s,
.tweet .context .pretty-link:hover b,
.tweet .context .pretty-link:focus s,
.tweet .context .pretty-link:focus b,
input[type=button].btn-on-dark:focus,
.is-selected.dm-action .reply-count,
.card .card-body:hover .attribution,
.card .card-body .attribution:focus,
.TwitterCard .EdgeButton--secondary,
.is-selected.dm-action .icon-reply,
.compose .other-replies-link:hover,
.compose-reply-tweet .tweet-body a,
.tweet-action:active .reply-count,
#global-actions > li.active .text,
.inline-reply .other-replies-link,
.nav.right-actions > li > a:focus,
.nav.right-actions > li > a:hover,
.tweet-action:hover .reply-count,
.tweet-action:active .icon-reply,
.tweet-action:focus .reply-count,
.ProfileCard .pretty-link:active,
.account-summary:focus .fullname,
.ProfileCard .pretty-link:hover,
.ProfileCard .pretty-link:focus,
.is-actionable:hover .stat-word,
.tweet-action:focus .icon-reply,
.tweet-action:hover .icon-reply,
input.Button--link[type=button],
a.account-group:hover .fullname,
a.account-group:focus .fullname,
.dm-action:active .reply-count,
.stream-item a:hover .fullname,
.stream-item a:focus .fullname,
.tweet .details.with-icn .Icon,
#global-actions > li:hover > a,
#global-actions > li > a:focus,
.icon-btn[aria-disabled=true],
input.is-visited[type=button],
.dm-action:active .icon-reply,
.dm-action:focus .reply-count,
.dm-action:hover .reply-count,
input.is-visited[type=button],
.message .message-text button,
.EdgeButton--secondary:active,
.MomentMakerCoverDialog-cell,
input.is-active[type=button],
.EdgeButton--secondary:focus,
.EdgeButton--secondary:hover,
.compose .other-replies-link,
.dm-action:focus .icon-reply,
.dm-action:hover .icon-reply,
.DMReadReceipt-check.is-seen,
.Button, .Button.is-visited,
input.is-hover[type=button],
.card .list-details a:focus,
.card .list-details a:hover,
.client-and-actions a:hover,
.client-and-actions a:focus,
#global-actions .new:before,
.tweet .details.with-icn b,
input:visited[type=button],
input:visited[type=button],
.column-header-link:active,
.photo-selector:hover .btn,
.MessageStreamItem-header,
.is-new .column-type-icon,
.other-replies-link:hover,
input:active[type=button],
.ProfileCard .pretty-link,
.column-header-link:focus,
.column-header-link:hover,
.app-nav-link.is-selected,
.prf-stats a:hover strong,
.icon-twitter-blue-color,
button.btn-on-dark:focus,
input:hover[type=button],
.icon-btn.disabled:hover,
.module .list-link:hover,
.module .list-link:focus,
.message .message-text a,
.lst-launcher a:active i,
.lst-launcher a:focus i,
.lst-launcher a:hover i,
.list .username a:hover,
.list .username a:focus,
.EdgeButton--secondary,
.Icon--colorLightning,
.stats a:focus strong,
.stats a:hover strong,
.ProfileCard a:active,
.dismiss-btn:hover b,
.pretty-link:focus s,
.Icon--colorFollower,
.pretty-link:hover b,
.pretty-link:focus b,
.pretty-link:hover s,
.pretty-link:hover s,
.pretty-link:focus s,
.tweet .time a:focus,
.tweet .time a:hover,
.Button.Button--link,
.ProfileCard a:hover,
.ProfileCard a:focus,
.other-replies-link,
button.Button--link,
.app-nav-link:hover,
.color-twitter-blue,
.column-nav-updates,
.column-header-link,
.icon-btn[disabled],
.Button.is-visited,
.icon-follow-color,
.Icon--bird:before,
.app-nav-tab:hover,
.icon-btn.disabled,
input[type=button],
.open > .plain-btn,
input[type=button],
button.btn-round i,
.prf-stats a:hover,
button.is-visited,
.Button.is-active,
.metadata a:focus,
.metadata a:hover,
.icon-btn.enabled,
.follow-btn .icon,
button.is-visited,
.follow-btn .Icon,
.Icon--playButton,
.icon-btn:active,
.icon-btn.active,
.plain-btn:focus,
.plain-btn:hover,
button.is-active,
.Icon--magicrecs,
.app-search-fake,
.Button.is-hover,
.btn-link:focus,
.Button:visited,
.icon-btn:hover,
.stats a strong,
.Icon--verified,
.Button:visited,
button.is-hover,
.new-tweets-bar,
.Icon--follower,
.facet-subtitle,
.stats a:hover,
button:visited,
.Button:active,
.stats a:focus,
.ProfileCard a,
.pretty-link b,
button:active,
.Button:hover,
.app-nav-link,
button:hover,
.app-nav-tab,
.action-text,
.r-13gxpu9,
.r-1n1174f,
.r-1n1174f,
.r-13gxpu9,
.btn-link,
.icon-btn,
a:active,
a:hover,
a:focus,
.Button,
button,
a,
s {
	color: var(--custom-color)
}

.tweet.Tweet--invertedColors .ProfileTweet-action--analytics:hover .ProfileTweet-actionButton,
.tweet.Tweet--invertedColors .ProfileTweet-action--reply:hover .ProfileTweet-actionButton,
.tweet.Tweet--invertedColors .ProfileTweet-action--reply:hover .ProfileTweet-actionCount,
.tweet.Tweet--invertedColors .ProfileTweet-action--more:hover .ProfileTweet-actionButton,
.tweet.Tweet--invertedColors .ProfileTweet-action--dm:hover .ProfileTweet-actionButton,
[style="color: rgb(43, 123, 185); height: 40px; width: 40px;"],
.u-textUserColorHover:hover .ProfileTweet-actionCount,
.dropdown-menu .typeahead-items li > a:focus,
.dropdown-menu .typeahead-items li > a:hover,
.dropdown-menu .typeahead-items .selected a,
.dropdown-menu .typeahead-items .selected,
input[type=button].btn-options-tray:focus,
input[type=button].btn-options-tray:hover,
[style="color: rgb(27, 149, 224);"],
.typeahead .selected .Icon--close,
.typeahead .selected .fullname,
button.btn-options-tray:focus,
button.btn-options-tray:hover,
.s-not-following .follow-text,
[data-testid="posterPlayBtn"],
.EdgeButton--invertedPrimary,
.typeahead a:hover .fullname,
.u-textUserColorHover:hover,
.u-textUserColorHover:focus,
input.is-focus[type=button],
.typeahead .selected strong,
.typeahead a:hover strong,
input:focus[type=button],
.typeahead .selected a,
.typeahead a:hover,
.Button.is-focus,
.u-textUserColor,
button.is-focus,
button.js-back {
	color: var(--custom-color) !important
}








.TwitterCard [data-poll-user-choice="1"] .PollXChoice-optionContainer .PollXChoice-choice--selected {
	filter: invert(1);
}

.column-header.is-options-open .column-settings-link:hover,
.EmojiPicker-skinTone:focus + .EmojiPicker-skinToneSwatch,
.EdgeButton--invertedSecondary:active,
.EmojiPicker .EmojiCategoryIcon:focus,
.EdgeButton--invertedSecondary:hover,
a:focus > img:first-child:last-child,
.lst-group .selected a:hover,
.EmojiPicker-item.is-focused,
.EdgeButton--tertiary:focus,
.EdgeButton--primary:active,
.EdgeButton--primary:hover,
.column-header-link:active,
.app-nav-link.is-selected,
.column-header-link:focus,
.column-header-link:hover,
.lst-launcher a:active i,
.lst-launcher a:focus i,
.lst-launcher a:hover i,
.app-nav-link:hover,
.app-nav-tab:hover,
.Button:focus,
button:active,
button:focus,
button:hover,
.r-1q3imqu,
.r-ny3pxa,
.btn.focus,
.btn:focus {
	filter: brightness(85%)
}

.MomentMakerTopBarDropdownMenu .dropdown-menu .dropdown-link[disabled]:hover,
.MomentSummaryActionsMenu .dropdown-menu .dropdown-link[disabled]:hover,
.MomentMakerTopBarDropdownMenu .dropdown-menu .dropdown-link[disabled],
.MomentSummaryActionsMenu .dropdown-menu .dropdown-link[disabled] {
	filter: brightness(50%);
}









#global-tweet-dialog .modal-tweet-form-container,
#Tweetstorm-dialog .modal-body,
.RetweetDialog-commentBox,
.DMConversation-composer,
.LiveVideo-tweetBox,
.home-tweet-box,
.r-r72n3l {
	position: relative
}

#global-tweet-dialog .modal-tweet-form-container::before,
#Tweetstorm-dialog .modal-body::before,
.RetweetDialog-commentBox::before,
.DMConversation-composer::before,
.LiveVideo-tweetBox::before,
.home-tweet-box::before,
.r-1dernwh::before,
.r-zv2cs0::before,
.r-r72n3l::before,
.r-4v7adb::before,
.r-r72n3l::before,
.r-zv2cs0::before {
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	border-radius: inherit;
	content: '';
	position: absolute;
	opacity: 0.1;
	background: var(--custom-color);
}









.is-selected.compose-account:focus .compose-account-img {
	box-shadow: 0 0 5px 2.5px var(--custom-color)
}

.u-boxShadowInsetUserColorHover:hover,
.u-boxShadowInsetUserColorHover:focus {
	box-shadow: inset 0 0 0 5px var(--custom-color) !important;
}

.tweet-form .thumbnail-container {
	box-shadow: inset 0 1px var(--border-light)
}

.TopNav {
	box-shadow: 0 0 3px var(--shadow);
}

.column.is-focused {
	box-shadow: 0 0 0 5px var(--custom-color);
}

.s-following .follow-btn:hover input.is-active.following-text[type=button],
.s-following .follow-btn:hover input.following-text:active[type=button],
.ButtonGroup--primary > .ButtonGroup > input.is-active[type=button],
.s-following .follow-btn:hover .Button.is-active.following-text,
.s-following .follow-btn:hover button.is-active.following-text,
.currently-dragging .tweet-form.is-droppable .tweet-drag-help,
.ButtonGroup--primary > .ButtonGroup > input:active[type=button],
.s-following .follow-btn:hover .Button.following-text:active,
.s-following .follow-btn:hover button.following-text:active,
.EmojiPicker-skinTone:focus + .EmojiPicker-skinToneSwatch,
.ButtonGroup--primary > .ButtonGroup > .Button.is-active,
.ButtonGroup--primary > .ButtonGroup > button.is-active,
.compose-message-recipient-input-container.is-focused,
.ButtonGroup--primary > .ButtonGroup > .Button:active,
.ButtonGroup--primary > .ButtonGroup > button:active,
.ButtonGroup--primary > input.is-active[type=button],
.ButtonGroup--primary > input:active[type=button],
div[contenteditable="plaintext-only"].fake-focus,
input.is-active.btn-fav.s-favorited[type=button],
.RichEditor.is-fakeFocus ~ .TweetBoxAttachments,
input.btn-fav.s-favorited:active[type=button],
input.Button--primary.is-active[type=button],
div[contenteditable="plaintext-only"]:focus,
.TwitterCard .EdgeButton--secondary:active,
input.Button--primary:active[type=button],
.ButtonGroup--primary > .Button.is-active,
.tweet-box[contenteditable="true"]:focus,
.ButtonGroup--primary > button.is-active,
div[contenteditable="true"].fake-focus,
.ButtonGroup--primary > .Button:active,
.EdgeButton--invertedSecondary:active,
.Button.is-active.btn-fav.s-favorited,
.EmojiPicker .EmojiCategoryIcon:focus,
.ButtonGroup--primary > button:active,
input[type=button].btn-on-dark:focus,
button.is-active.btn-fav.s-favorited,
a:focus > img:first-child:last-child,
.Button.btn-fav.s-favorited:active,
.Button.Button--primary.is-active,
button.btn-fav.s-favorited:active,
div[contenteditable="true"]:focus,
button.Button--primary.is-active,
.Button.Button--primary:active,
button.Button--primary:active,
.EdgeButton--secondary:active,
.EdgeButton--secondary:focus,
.EmojiPicker-item.is-focused,
input.is-active[type=button],
.EdgeButton--tertiary:active,
.tweet-box input[type=text],
.EdgeButton--tertiary:focus,
.EdgeButton--primary:focus,
input:active[type=button],
.tweet-box textarea:focus,
.RichEditor.is-fakeFocus,
button.btn-on-dark:focus,
.PollingCardComposer,
.Form-textbox:focus,
input.on-blue:focus,
.Button.is-active,
button.is-active,
.Button:active,
textarea:focus,
textarea:focus,
button:active,
.Button:focus,
button:focus,
select:focus,
input:focus,
.btn.focus,
.btn:focus,
.focus {
	box-shadow: none;
}

.list-placeholder,
.mdl-placeholder {
	text-shadow: none
}









.RadialCounter--safe {
	stroke: #17ea06
}

.EmojiPicker-content--right.Caret.Caret--stroked::after,
.EmojiPicker-content--right.Caret::before {
	transform: translate(-15px, -100%);
}

.EmojiPicker-clearQuery {
	top: 12.5px
}

.r-u8s1d {
	position: absolute !important
}

.more-tweets-glow {
	background: radial-gradient(ellipse farthest-corner at 50% 100%,
	var(--custom-color) 0,
	var(--custom-color) 25%,
	hsla(0, 0%, 100%, 0) 75%)
}

.stream-container .AdaptiveStreamGridImage .grid-tweet-actions-container {
	height: 30px;
	background: #0006;
	border: none
}

.stream-container .grid-tweet .grid-tweet-actions .Icon,
.MomentMakerTopBar-birdIcon::before {
	color: #fff !important
}

.r-ghumyc svg circle:nth-child(1) {
	stroke: var(--border-medium) !important
}

[style="stroke: rgb(29, 161, 242); stroke-dasharray: 80; stroke-dashoffset: 60;"],
[style="stroke: rgb(29, 161, 242); opacity: 0.2;"],
.r-ghumyc svg circle:nth-child(2) {
	stroke: var(--custom-color) !important;
}

[id="Artboard"] {
	fill: #0002 !important
}

.sprite-drag-vertical,
.gap-chirp::before,
.gap-chirp::after {
	opacity: 0.5
}

.u-scrollY {
	overflow: auto !important;
}
.scroll-v {
	overflow-x: hidden
}

.Icon--logo img {
	filter: grayscale(1);
	opacity: 0.8
}









.ThreadedConversation-moreReplies .ThreadedConversation-moreRepliesSpinner,
.ThreadedConversation-showMoreSpinner,
.pushing-state .pushstate-spinner,
.js-app-loading .js-signin-ui,
.PermalinkOverlay-spinner,
.spinner-bigger,
.spinner-large,
.spinner-small,
.DMSpinner,
.spinner {
	--border-width: 3px;
	background-image: none !important;
	border-radius: 50%;
}


.js-app-loading .js-signin-ui {
	--border-width: 7px;
}

.ThreadedConversation-moreReplies .ThreadedConversation-moreRepliesSpinner::before,
.ThreadedConversation-moreReplies .ThreadedConversation-moreRepliesSpinner::after,
.ThreadedConversation-showMoreSpinner::before,
.ThreadedConversation-showMoreSpinner::after,
.pushing-state .pushstate-spinner::before,
.pushing-state .pushstate-spinner::after,
.js-app-loading .js-signin-ui::before,
.js-app-loading .js-signin-ui::after,
.PermalinkOverlay-spinner::before,
.PermalinkOverlay-spinner::after,
.spinner-bigger::before,
.spinner-bigger::after,
.spinner-large::before,
.spinner-small::before,
.spinner-large::after,
.spinner-small::after,
.DMSpinner::before,
.DMSpinner::after,
.spinner::before,
.spinner::after {
	position: absolute;
	display: block;
	content: '';
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	border-radius: inherit;
}

.ThreadedConversation-moreReplies .ThreadedConversation-moreRepliesSpinner::before,
.ThreadedConversation-showMoreSpinner::before,
.pushing-state .pushstate-spinner::before,
.js-app-loading .js-signin-ui::before,
.PermalinkOverlay-spinner::before,
.spinner-bigger::before,
.spinner-large::before,
.spinner-small::before,
.DMSpinner::before,
.spinner::before {
	border: var(--border-width) solid var(--custom-color);
	opacity: 0.5
}

.ThreadedConversation-moreReplies .ThreadedConversation-moreRepliesSpinner::after,
.ThreadedConversation-showMoreSpinner::after,
.pushing-state .pushstate-spinner::after,
.js-app-loading .js-signin-ui::after,
.PermalinkOverlay-spinner::after,
.spinner-bigger::after,
.spinner-large::after,
.spinner-small::after,
.DMSpinner::after,
.spinner::after {
	border: var(--border-width) solid transparent;
	border-top-color: var(--custom-color);
	animation: spin 750ms linear infinite;
}

.spinner-small::before,
.spinner-small::after {
	width: 16px;
	height: 16px;
}


.pushing-state .pushstate-spinner::before,
.pushing-state .pushstate-spinner::after,
.DMSpinner::before,
.DMSpinner::after {
	width: 24px;
	height: 24px
}

.ThreadedConversation-showMoreSpinner::before,
.ThreadedConversation-showMoreSpinner::after,
.PermalinkOverlay-spinner::before,
.PermalinkOverlay-spinner::after,
.spinner-bigger::before,
.spinner-bigger::after,
.spinner-large::before,
.spinner-large::after,
.spinner::before,
.spinner::after {
	width: 32px;
	height: 32px;
}


.js-app-loading .js-signin-ui::before,
.js-app-loading .js-signin-ui::after {
	width: 74px;
	height: 74px
}

.PlayableMedia-player .spinner::before,
.PlayableMedia-player .spinner::after,
.r-u8s1d .spinner::before,
.r-u8s1d .spinner::after,
#video .spinner::before,
#video .spinner::after,
.app-title {
	display: none;
}

.spinner-centered {
	visibility: hidden;
}

.ThreadedConversation-moreReplies .ThreadedConversation-moreRepliesSpinner::before,
.ThreadedConversation-moreReplies .ThreadedConversation-moreRepliesSpinner::after {
	width: 24px;
	height: 24px;
}

.PermalinkOverlay-spinner,
.spinner-large {
	position: relative;
}

.ThreadedConversation-showMoreSpinner,
.spinner-large {
	display: flex;
	align-items: center;
	justify-content: center;
}

@keyframes spin {
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(360deg)
	}
}









.sprite-verified-mini {
	position: relative;
	background: none;
	border-radius: 50%;
	display: inline-flex;
	align-items: flex-end;
	justify-content: center;
}

.sprite-verified-mini::before {
	position: absolute;
	content: '';
	display: block;
	border-radius: inherit;
	background-color: var(--custom-color);
	width: 80%;
	height: 80%;
}

.sprite-verified-mini::after {
	position: absolute;
	content: '';
	display: block;
	width: 2px;
	height: 5px;
	border-right: 2px solid #fff;
	border-bottom: 2px solid #fff;
	transform: translateY(-4px) rotate(45deg)
}

.badge-verified::before {
	background: var(--custom-color);
	border-radius: 50%;
}

.badge-verified::after {
	position: absolute;
	display: inline-block;
	content: '';
	width: 2px;
	height: 6px;
	border-right: 2px solid #fff;
	border-bottom: 2px solid #fff;
	transform: rotate(45deg);
	right: 5px;
	bottom: 6px;
}









.compose {
	position: relative;
	background: transparent;
}
.compose::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
}

.attach-compose-buttons .tweet-button,
.compose::before,
.inline-reply {
	background-color: var(--custom-color) !important;
	filter: brightness(65%)
}

.reply-triangle {
	border-bottom-color: var(--custom-color) !important;
	filter: brightness(65%)
}

.compose .antiscroll-scrollbar {
	background: #fff4;
}

.compose-text-title {
	color: #fff8
}

.overlay,
.ovl {
	background: #000a !important
}

.ProfileCard {
	height: 100%
}
.MomentCapsuleCover-media {
	padding: 0;
}




.twtr-color-bg--blue-extra-dark {
	background-color: transparent;
}

.twtr-color-bg--blue-extra-dark::before {
	content: '';
	position: absolute;
	display: block;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: var(--custom-color);
	filter: brightness(85%)
}

.twtr-color-border--blue-light {
	border-color: var(--custom-color)
}

[fill="#007aff"],
.r-13gxpu9 {
	fill: var(--custom-color)
}

.swiper-pagination-bullet-active,
.twtr-color-bg--blue-light,
.c04__button {
	background-color: var(--custom-color)
}

.twtr-color-bg--blue-extra-light-50 {
	background-color: transparent;
	position: relative
}

.twtr-color-bg--blue-extra-light-50::before {
	content: '';
	position: absolute;
	display: block;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: var(--custom-color);
	opacity: 0.25;
}

.twtr-color-fill--blue-light {
	fill: #fff3;
}

.twtr-color-fill--blue-dark {
	fill: #fff8
}

.twtr-color--blue-light,
.u01__search-input {
	color: #fffa
}

.twtr-color-bg--blue-dark {
	background: #fff8
}

.twtr-underline--blue-dark {
	text-shadow: 0.03em 0 var(--dark100),
	-0.03em 0 var(--dark100),
	0 0.03em var(--dark100),
	0 -0.03em var(--dark100),
	0.06em 0 var(--dark100),
	-0.06em 0 var(--dark100),
	0.09em 0 var(--dark100),
	-0.09em 0 var(--dark100),
	0.12em 0 var(--dark100),
	-0.12em 0 var(--dark100),
	0.15em 0 var(--dark100),
	-0.15em 0 var(--dark100)
}

.twtr-underline--green-dark {
	text-shadow: 0.03em 0 var(--dark100),
	-0.03em 0 var(--dark100),
	0 0.03em var(--dark100),
	0 -0.03em var(--dark100),
	0.06em 0 var(--dark100),
	-0.06em 0 var(--dark100),
	0.09em 0 var(--dark100),
	-0.09em 0 var(--dark100),
	0.12em 0 var(--dark100),
	-0.12em 0 var(--dark100),
	0.15em 0 var(--dark100),
	-0.15em 0 var(--dark100);
}

.twtr-underline--pink-dark {
	text-shadow: 0.03em 0 var(--dark100),
	-0.03em 0 var(--dark100),
	0 0.03em var(--dark100),
	0 -0.03em var(--dark100),
	0.06em 0 var(--dark100),
	-0.06em 0 var(--dark100),
	0.09em 0 var(--dark100),
	-0.09em 0 var(--dark100),
	0.12em 0 var(--dark100),
	-0.12em 0 var(--dark100),
	0.15em 0 var(--dark100),
	-0.15em 0 var(--dark100);
}

.twtr-underline--orange-dark {
	text-shadow: 0.03em 0 var(--dark100),
	-0.03em 0 var(--dark100),
	0 0.03em var(--dark100),
	0 -0.03em var(--dark100),
	0.06em 0 var(--dark100),
	-0.06em 0 var(--dark100),
	0.09em 0 var(--dark100),
	-0.09em 0 var(--dark100),
	0.12em 0 var(--dark100),
	-0.12em 0 var(--dark100),
	0.15em 0 var(--dark100),
	-0.15em 0 var(--dark100)
}

.twtr-color--black-neutral.has-hover,
.twtr-color--blue-extra-light,
.twtr-color--black-neutral,
.twtr-type--page-headline,
.c0-nav__menu-sub-item a,
.c04__content-title h3,
.hp04__card-headline a,
.ap02-notes__label,
.twtr-rte h3,
.twtr-rte li,
.twtr-rte ol,
.twtr-rte ul,
.hp03__title,
.hp01__copy,
.twtr-rte p,
.twtr-rte p {
	color: var(--text-primary)
}

.hp01-container__nav-item.has-no-underline .hp01-container__link-underline,
.twtr-color--dark-gray-neutral,
.hp04__card-subtitle {
	color: var(--text-secondary)
}
.twtr-main {
	background: var(--dark100)
}

.u01__menu-item.has-dropdown:after,
.u01__dropdown {
	background: var(--dark200)
}

.hp04__bleed {
	background: var(--dark75)
}

.twtr-color-bg--white-neutral,
.twtr-color-bg--blue-dark {
	background: transparent
}
.u01__dropdown-item {
	border-color: var(--border-light)
}

.se01__result {
	border-color: var(--border-medium)
}

.twtr-color-border--blue-dark {
	border-color: var(--custom-color)
}

.twtr-color--blue-dark,
.se01__page-number {
	color: var(--custom-color) !important
}

.twtr-color--blue-dark.has-hover:active,
.twtr-color--blue-dark.has-hover:hover {
	filter: brightness(85%)
}

.u01__navbar-item {
	height: 100%;
}

li svg {
	fill: currentcolor
}
`);
