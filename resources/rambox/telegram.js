function applycss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
 }
applycss(`
body,
.modal-content {
    color: #a0a0a0 !important;
    font-weight: 100 !important;
    background: #131313 !important
}
a.tg_checkbox {
    color: #bbb !important;
}
.im_page_wrap {
    background-color: #191919 !important;
    border-left: 1px solid #191919 !important;
    border-right: 1px solid #191919 !important;
    border-bottom: 1px solid #191919 !important;
    box-shadow: none;
}

.im_message_body,
.im_attach,
.im_media_attach,
.im_record,
.im_record_bg,
.im_record:hover,
.im_message_document_thumbed,
.composer_emoji_panel a.composer_emoji_btn {
    background: inherit !important;
}

/* .im_message_contact_photo .peer_initials, .im_message_from_photo .peer_initials, .im_message_fwd_photo .peer_initials, .im_message_contact_photo, .im_message_from_photo, .im_message_fwd_photo {
    box-shadow: inset 0 0 0 128px rgba(0, 0, 0, 0.5) !important;
} */
.im_message_contact_photo, .im_message_from_photo, .im_message_fwd_photo {
box-shadow: inset 0 0 0 42px rgba(0, 0, 0, 0.5) !important;
}
.composer_dropdown_wrap {
    background: #232323;}

.tg_head_split {
    max-width: 2000px;
}
.im_bot_intro_message_wrap {
color: #a0a0a0 !important;
background: #131313 !important;
}
.md_modal_iconed_section_wrap {
    border-bottom: 1px solid #303030;
}
.im_message_document_name {
    color: #6f6f6f;}
.tg_slider_track {
    background: #383838;}

.md_modal_split_action:active .md_modal_split_action_msg, .md_modal_split_action:hover .md_modal_split_action_msg {
    background-position: -10px -220px;
}
.im_send_reply_cancel:hover .icon-reply-bar {
    background: #ccced0 !important;
}

.im_message_wrap {
    max-width: 1200px;
}

.im_send_form {
    max-width: 1200px;
}

.im_send_panel_wrap {
    max-width: 1200px;
}

.im_page_wrap {
    max-width: 2000px;
}

.active .im_dialog_date, .active a.im_dialog:hover .im_dialog_date, .active a.im_dialog_selected .im_dialog_date {
    color: #fff !important;
}

.tg_head_logo_dropdown .dropdown-menu > li > a span {
    color: #dadada !important;
}

.tg_head_logo_dropdown .dropdown-menu > li > a span:hover {
    color: #fff !important;
}

.im_dialogs_search_field {
    border: 1px solid #191919 !important;
}

.form-control.no_outline:focus {
    border: 1px solid #484848 !important;
}

.icon-message-status {
    background: #929292 !important;
}

.active .im_dialog_unread {
    background-color: #929292 !important;
}
.im_dialog_unread {
    background: #929292 !important;
}
a.im_dialog:hover .im_dialog_unread, a.im_dialog_selected .im_dialog_unread {
    background: #929292 !important;
}

a.im_dialog:hover .im_short_message_text, a.im_dialog_selected .im_short_message_text {
    color: #bbbbbb;
}
.tg_radios_wrap > a span {
    color: #c1c1c1 !important;
}

.audio_player_title span{
	color:#999 !important;
}

.audio_player_seek_slider .tg_slider_track_fill {
    background: #565656 !important;
}

.audio_player_volume_slider .tg_slider_track_fill {
    background: #565656 !important;
}

.audio_player_wrap a:hover {
background-color: #4c4c4c !important;
}

.audio_player_title_wrap a:hover {
background-color: transparent !important;
}

.audio_player_volume_slider .tg_slider_thumb {
    background: #a5a5a5 !important;
}

.im_message_file_button_dl_audio {
    background: #3a3a3a !important;
}

.im_message_file_button {
background-color: #3a3a3a !important;
}

.im_message_file_button:hover {
background-color: #4c4c4c !important;
}

.im_message_file_button_icon {
    width: 18px;
    height: 18px;
    background-position: -14px -250px;
}

.tg_head_btn {
    color: #9c9c9c !important;
}

.changelog_footer_wrap a{
	color:#616161 !important;
}

.settings_modal_username_link, .settings_modal_username_link:hover {
    color: #fff !important;
}

.tg_radio.tg_radio_on .icon-radio-outer {
    border-color: #b9b9b9;
}

a.tg_radio_on:hover i.icon-radio {
    background-color: #808080;
}
a.tg_radio:hover i.icon-radio {
    background-color: #afafaf;
}


.tg_radio.tg_radio_on i.icon-radio {
    background-color: #bbbbbb;
}

a.md_modal_action {
    color: #cacaca !important;
}

.tg_slider_track_fill {
    background: #afafaf;
}

.tg_checkbox.tg_checkbox_on span.icon-checkbox-outer {
    background-color: #e2e2e2;
}

.btn-link {
    color: #d4d4d4;
}

.tg_slider_thumb {
    background: #8c8c8c;
}

.tg_head_peer_dropdown .dropdown-menu {
    border: 1px solid rgba(99, 99, 99, 0);
    -webkit-box-shadow: 0px 1px 3px 0px rgba(66, 66, 66, 0.27) !important;
    -moz-box-shadow: 0px 1px 3px 0px rgba(60, 75, 87, 0.27) !important;
    box-shadow: 0px 1px 3px 0px rgba(35, 35, 35, 0.27) !important;
}

.tg_head_logo_dropdown .dropdown-menu {
    border-left-color: #4d4d4d !important;
    border-right-color: #4d4d4d !important;
}

.dropdown-menu > li > a i {
	background-image: none !important;
}

.active a.im_dialog .im_dialog_chat_from_wrap, .active a.im_dialog .im_dialog_draft_from, .active a.im_dialog .im_dialog_message, .active a.im_dialog .im_short_message_media, .active a.im_dialog .im_short_message_service, .active a.im_dialog .im_short_message_text {
    color: #fff !important;
}

 a .im_short_message_media {
    color: #b3b3b3 !important;
}
a.im_dialog .im_dialog_chat_from_wrap {
    color: #d6d6d6 !important;
}

a.im_dialog:hover .im_dialog_date, a.im_dialog_selected .im_dialog_date {
    color: #b3b3b3 !important;
}

.btn-primary {
    background-color: #252525 !important;
    color: #757575 !important;
}
.btn-primary:hover {
    background-color: #303030 !important;
    color: #ccc !important;
}

.icon-message-views {
    background-image: none;
}

.btn-md-primary {
    color: #757575 !important;
}
.btn-md-primary:hover {
    color: #ccc !important;
}

.im_edit_panel_border {
    border-bottom: 1px solid #4d4d4d !important;
}

.im_history_pinned_wrap {
    border-bottom: 1px solid #5d5d5d !important;
}

.im_message_selected .icon-select-tick, .im_history_selectable .im_message_outer_wrap:hover .icon-select-tick {
    background-position: -9px -450px !important;
}

.im_message_views_cnt {
    color: #4e4e4e !important;
}

.tg_head_peer_dropdown .dropdown-menu > li > a {
    color: #898989 !important;
}

.tg_head_peer_dropdown .dropdown-menu > li > a:hover {
    color: #fff !important;
}

.composer_stickerset_wrap:first-child .composer_stickerset_title {
    color: #878787 !important;
}

.active .composer_emoji_tooltip_category_smile {
    background-position: -3px -62px;
}
.active .composer_emoji_tooltip_category_recent {
    background-position: -3px 0;
}
.active .composer_emoji_tooltip_category_flower {
    background-position: -3px -124px;
}
.active .composer_emoji_tooltip_category_bell {
    background-position: -3px -185px;
}
.active .composer_emoji_tooltip_category_car {
    background-position: -3px -241px;
}
.active .composer_emoji_tooltip_category_grid {
    background-position: -3px -297px;
}

.composer_emoji_tooltip_tab_shadow {
    background: #969696 !important;
    -webkit-box-shadow: 0 1px 0 0 #cccccc !important;
    -moz-box-shadow: 0 1px 0 0 #53a9ea !important;
    box-shadow: 0 1px 0 0 #cccccc !important;
}

.btn-md-primary, .btn-md-primary:focus
{
    color: #cacaca;
}

.btn-md-primary:hover {
    color: #bfbfbf !important;
    background-color: #292929 !important;
}

.btn-md-danger:hover {
    background: #292929 !important;
}

.composer_emoji_insert_btn:active .icon-emoji, .composer_emoji_insert_btn.composer_emoji_insert_btn_on .icon-emoji {
    background-position: -9px -335px !important;
    opacity: 1;
}

.composer_emoji_tooltip_tab_emoji, .composer_emoji_tooltip_tabs_stickers_active .composer_emoji_tooltip_tab_stickers {
    color: #878787 !important;
}

a.im_panel_own_photo .peer_initials, div.im_panel_peer_photo .peer_initials, a.im_panel_peer_photo .peer_initials {
    box-shadow: inset 0 0 0 42px rgba(0, 0, 0, 0.5) !important;
}

.composer_emoji_insert_btn:hover .icon-emoji {
    color: #fff !important;
}

.im_submit:hover {
    color: #d8d8d8 !important;
}

.tg_checkbox.tg_checkbox_on i.icon-checkbox-inner {
    background: #8c8c8c !important;
}

.md_modal_section_param_wrap .md_modal_section_param_value {
    color: #fff !important;
}


.tg_head_peer_status {
    font-weight: normal;
    color: #a0a0a094;
}

.tg_checkbox_label {
    color: #8c8c8c !important;
}

a.md_modal_action_close {
    color: #afafaf !important;
}
a.md_modal_action_close:hover {
    color: #e8e8e8 !important;
}

.md_modal_section_link {
    color: #8c8c8c !important;
}

.im_message_reply_border {
    background: #5d5d5d !important;
}

.md_modal_section_link:hover {
    color: #8c8c8c !important;
}

.im_history_col .nano > .nano-pane > .nano-slider, .contacts_modal_col .nano > .nano-pane > .nano-slider, .sessions_modal_col .nano > .nano-pane > .nano-slider, .stickerset_modal_col .nano > .nano-pane > .nano-slider, .im_dialogs_modal_col .nano > .nano-pane > .nano-slider {
    background: rgb(48, 48, 48);
}
.im_history_col .nano > .nano-pane, .contacts_modal_col .nano > .nano-pane, .sessions_modal_col .nano > .nano-pane, .stickerset_modal_col .nano > .nano-pane, .im_dialogs_modal_col .nano > .nano-pane {
    background: rgba(25, 25, 25, 0);
}

a:focus, a:hover {
    color: #8c8c8c !important;
}

.im_start_btn {
    color: #bdbdbd !important;
}
.btn-link:hover {
    color: #fff !important;
}

.reply_markup_button {
    color: #a0a0a0;
    background: #303030;
}

.reply_markup_button:hover{
    color: #d8d8d8;
    background: #545454;
}

a:hover {
    background-color: transparent !important;
}

a {
    color: #327b92 !important;
}

.im_message_webpage_wrap {
    border-left: 2px solid #828282;
}

.active .im_dialog_badge {
    background: #5a5a5a;
    color: #cacaca;
}
.im_dialog_badge {
    background: #5a5a5a;
    color: #cacaca;
}
.im_message_reply {
    padding-left: 12px;
    color: #bbb;
}
.im_message_reply_author {
    font-weight: 700;
    color: #bbbbbb;
}

.im_dialog_badge_muted {
    background: #5a5a5a;
    color: #cacaca;
}

.im_message_date, .im_message_fwd_date {
    color: #4e4e4e !important;}
.im_dialog_peer {
    /*peer nickname unselected*/

    color: #bbb !important;
}
.contacts_modal_members_list a.contacts_modal_contact {
    /*nicknames in contactlist via hamburger menu*/

    color: #bbb;
}
.active a.im_dialog {
    /*selected peer */

    background-color: #303030 !important;
}
.composer_rich_textarea:empty::before {
    content: none !important;
}
.tg_head_split,
.md_modal_head {
    /*page header block*/

    background-color: #303030 !important;
}
.dropdown.open .tg_head_btn,
.tg_head_btn:hover {
    background: #4d4d4d !important;
}
.form-control {
    /*input field*/
    background-color: #0e0e0e !important;
    color: #bbb !important;
}
.composer_rich_textarea {
background: #232323 !important;
border-color: #bbb !important;
left: -15px !important;
width: calc(100% + 32px) !important;

}
.im_dialogs_col_wrap {
    /*contactlist right border*/

    border-right: 2px solid #303030;
}
.im_dialogs_col .nano > .nano-pane > .nano-slider {
    /*scrollbarbutton when hover*/

    background-color: #4d4d4d !important;
}
.im_message_unread_split {
    background: #232323 !important;
    color: #919191;
}
.tg_head_split {
    background-color: #151515;
}
.im_submit {
    color: #4d4d4d;
}
.im_message_mymention {
    background: #1d1d1d;
}
.im_message_focus .im_message_outer_wrap {
    background-color: #333333;
}
.im_selected_count {
    color: #cacaca !important;
}

.im_message_selected .im_message_outer_wrap {
    background: #303030;
}
@keyframes im_message_focus_fade {
    0% {
        /*soft transaction*/

        background-color: #2d2d2d;
    }
}
.im_message_author, .im_message_fwd_author {
    color: #d4d4d4 !important;
}
.btn-primary {
    background-color: #4d4d4d;
}

.footer_empty {
    height: 0px !important;
}

.im_dialogs_col_wrap {
    padding-bottom: 0px !important;
}

.im_dialogs_scrollable_wrap a.im_dialog_searchpeer {
	background-color:#3a3a3a !important;
}

.im_history_select_active .im_message_outer_wrap:hover {
    background: #424242;
}
.im_dialog_chat_from_wrap,
.im_dialog_message_service {
    color: #6ac;
}
.composer_rich_textarea,
.composer_textarea {
    box-shadow: 0px 1px 1px #3a3939;
	padding: 0px 28px 1px 16px !important;
}
.composer_rich_textarea:focus {
    box-shadow: 0px 3px 1px #444 !important;
}
.tg_head_logo_dropdown .dropdown-menu > li > a {
    color: #ddd;
}
.btn-primary.disabled,
.btn-primary[disabled] {
    background: #4d4d4d none repeat scroll 0% 0%;
}
/*emoji*/

.composer_emoji_tooltip,
.icon-tooltip-tail,
.dropdown-menu {
    background-color: #2d2d2d !important;
    border-color: #2d2d2d;
}
`);
