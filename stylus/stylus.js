(function() {
  let css = "";
  css += `
@font-face {
    font-family: "MyFont";
    unicode-range: U+00-024F;
    src: local("FFGoodProNarr-News");
    src: local("AvenirNextCondensed-Medium");
    src: local("BarlowCondensed-Regular");
    src: local("RobotoCondensed-Regular");
}
@font-face {
    font-family: "MyFont";
    unicode-range: U+4E00-9FFF;
    src: local("STHeiti-SC-Bold");
}
@font-face {
    font-family: "MyFont";
    unicode-range: U+3040-30FF;
    src: local("Osaka");
}
@font-face {
    font-family: "MyFont";
    unicode-range: U+E000-F8FF;
    src: local("Font Awesome 5 Pro");
}

@font-face {
    font-family: "MyFontBold";
    unicode-range: U+00-024F;
    src: local("FFGoodProNarr-Bold");
    src: local("AvenirNextCondensed-Bold");
    src: local("BarlowCondensed-Bold");
    src: local("RobotoCondensed-Bold");
}
@font-face {
    font-family: "MyFontBold";
    unicode-range: U+4E00-9FFF;
    src: local("STHeiti-SC-Bold");
}
@font-face {
    font-family: "MyFontBold";
    unicode-range: U+3040-30FF;
    src: local("Osaka");
}

@font-face {
    font-family: "MyFontHead";
    unicode-range: U+00-024F;
    src: local("FFGoodProNarr-Bold");
    src: local("AvenirNextCondensed-Bold");
    src: local("BarlowCondensed-Bold");
    src: local("RobotoCondensed-Bold");
}
@font-face {
    font-family: "MyFontHead";
    unicode-range: U+4E00-9FFF;
    src: local("STHeiti-SC-Bold");
}
@font-face {
    font-family: "MyFontHead";
    unicode-range: U+3040-30FF;
    src: local("Osaka");
}

@font-face {
    font-family: "MyFontSrc";
    unicode-range: U+00-024F;
    src: local("Iosevka 2024 Condensed");
}
@font-face {
    font-family: "MyFontSrc";
    unicode-range: U+4E00-9FFF;
    src: local("STHeiti-SC-Bold");
}
@font-face {
    font-family: "MyFontSrc";
    unicode-range: U+3040-30FF;
    src: local("Osaka");
}

body, body *, div, div *, section, section *,
p, a, span, textarea, font,
li, tr, td, dt, dd,
input, label, select, button {
    font-family: MyFont !important;
}

h1, h2, h3, h4, h5, b, em, strong {
    font-family: MyFontHead !important;
}

code, code *, .code,
pre, pre *,
div.ace_editor, div.ace_editor *,
.syntaxhighlighter code {
    font-family: MyFontSrc !important;
    font-variant-ligatures: none;
}

.material-icons {
    font-family: "Material Icons" !important;
}

.glyphicon, .glyphicon:before, .glyphicon:after {
    font-family: "Glyphicons Halflings" !important;
}

ruby > rt {
    font-family: MyFont !important;
}
  `;
if ((location.hostname === "github.com" || location.hostname.endsWith(".github.com"))) {
  css += `
.markdown-body {
    font-family: MyFont !important;
}

.blob-code-inner,
.blob-code-inner span,
.blob-code-inner mark,
.text-mono {
    font-family: MyFontSrc !important;
    font-size: 1em !important;
}

span[data-code-text]::before {
    font-family: MyFontSrc !important;
}

textarea.react-blob-print-hide {
    font-family: MyFontSrc !important;
    line-height: 20px !important;
}

.markdown-body code,
.markdown-body tt {
    border-radius: 3px;
}
  `;
}
if ((location.hostname === "youtube.com" || location.hostname.endsWith(".youtube.com"))) {
  css += `
paper-item,
tp-yt-paper-item,
yt-formatted-string.ytd-menu-service-item-renderer,
ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media,
.title.ytd-guide-entry-renderer,
.message.ytd-notification-renderer,
#video-title.ytd-rich-grid-media,
#content-text.ytd-comment-renderer {
    font-family: MyFont !important;
}

ytd-thumbnail[size=large] a.ytd-thumbnail, ytd-thumbnail[size=large]:before {
    border-radius: 0;
}
  `;
}
if ((location.hostname === "google.com" || location.hostname.endsWith(".google.com"))) {
  css += `
.g, .std {
    font-family: MyFont !important;
}

.ha > .hP {
    font-family: MyFontHead !important;
}

div.view-lines div.view-line span {
    font-family: MyFontSrc !important;
}

.material-icons-extended,
span.material-icons-extended {
    font-family: "Material Icons Extended" !important;
}

.google-symbols {
    font-family: "Google Symbols" !important;
}

.google-material-icons {
    font-family: "Google Material Icons" !important;
}
  `;
}
if ((location.hostname === "wanikani.com" || location.hostname.endsWith(".wanikani.com"))) {
  css += `
.vocabulary, [lang=\"ja\"] {
    font-family: MyFont !important;
}

#lesson #supplement-info #prev-btn,
#lesson #supplement-info #next-btn {
    font-family: FontAwesome !important;
}

.fa-classic, .fa-light, .fa-regular, .fa-solid, .fa-thin, .fal, .far, .fas, .fat {
    font-family: "Font Awesome 6 Pro" !important;
}
  `;
}
if ((location.hostname === "weread.qq.com" || location.hostname.endsWith(".weread.qq.com"))) {
css += `
@font-face {
    font-family: "MyFont";
    unicode-range: U+4E00-9FFF;
    src: local("FZSong III-Z05");
}
@font-face {
    font-family: "MyFontBold";
    unicode-range: U+4E00-9FFF;
    src: local("FZSong III-Z05");
}
@font-face {
    font-family: "MyFontHead";
    unicode-range: U+4E00-9FFF;
    src: local("FZSong III-Z05");
}
  `;
}
if ((location.hostname === "flickr.com" || location.hostname.endsWith(".flickr.com"))) {
css += `
.showcase {
    display: none;
}
  `;
}
if ((location.hostname === "notion.so" || location.hostname.endsWith(".notion.so"))) {
css += `
.notion-code-block * {
    font-family: MyFontSrc !important;
}
  `;
}
if ((location.hostname === "movielens.org" || location.hostname.endsWith(".movielens.org"))) {
css += `
.fa {
    font-family: FontAwesome !important;
}
  `;
}
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
