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
    src: local("Helvetica Condensed");
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
    src: local("Helvetica Condensed Bold");
}
@font-face {
    font-family: "MyFontBold";
    unicode-range: U+4E00-9FFF;
    src: local("STHeiti");
}
@font-face {
    font-family: "MyFontBold";
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
    font-family: MyFontBold !important;
}

code, code *, .code,
[style*="monospace"],
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

div.react-code-text *,
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
    font-family: MyFontBold !important;
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
span[data-wr-role="text"] {
    font-family: MyFont !important;
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
[style*="font-weight:600"] {
    font-family: MyFontBold !important;
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
if ((location.hostname === "github.dev" || location.hostname.endsWith(".github.dev"))) {
css += `
.monaco-editor .view-lines * {
    font-family: MyFontSrc !important;
}
.codicon[class*=codicon-] {
    font-family: codicon !important;
}
  `;
}
if ((location.hostname === "leetcode.com" || location.hostname.endsWith(".leetcode.com"))) {
css += `
.monaco-editor .view-lines * {
    font-family: MyFontSrc !important;
}
  `;
}
if ((location.hostname === "everyonepiano.cn" || location.hostname.endsWith(".everyonepiano.cn"))) {
css += `
#musicTitle {
    display: none !important;
}
  `;
}
if ((location.hostname === "oreilly.com" || location.hostname.endsWith(".oreilly.com"))) {
css += `
#book-content #sbo-rt-content p *, #book-content #sbo-rt-content .note p, #book-content #sbo-rt-content blockquote, #book-content #sbo-rt-content blockquote p, #book-content #sbo-rt-content .blockquote p,
#book-content #sbo-rt-content h1, #book-content #sbo-rt-content h2, #book-content #sbo-rt-content h3, #book-content #sbo-rt-content h4, #book-content #sbo-rt-content h5, #book-content #sbo-rt-content h6, #book-content #sbo-rt-content .heading-1, #book-content #sbo-rt-content .paragraph-head, #book-content #sbo-rt-content .cn-chapter-number, #book-content #sbo-rt-content .heading-3, #book-content #sbo-rt-content .title_document, #book-content #sbo-rt-content .fm_title_document, #book-content #sbo-rt-content .box_title, #book-content #sbo-rt-content .chaptertitle, #book-content #sbo-rt-content .chapterTitle, #book-content #sbo-rt-content .chapterNumber,
#book-content #sbo-rt-content address, #book-content #sbo-rt-content caption, #book-content #sbo-rt-content cite, #book-content #sbo-rt-content code, #book-content #sbo-rt-content dfn, #book-content #sbo-rt-content strong, #book-content #sbo-rt-content th, #book-content #sbo-rt-content var,
#book-content #sbo-rt-content a, #book-content #sbo-rt-content a:link, #book-content #sbo-rt-content a:visited,
#book-content #sbo-rt-content ul li, #book-content #sbo-rt-content ol li, #book-content #sbo-rt-content ul li p, #book-content #sbo-rt-content ol li p,
#book-content #sbo-rt-content table p, #book-content #sbo-rt-content table tr td {
    font-family: C059 !important;
}
  `;
}
// if (typeof GM_addStyle !== "undefined") {
//   GM_addStyle(css);
// } else {
  const s = document.createElement('style');
  s.textContent = css;
  document.documentElement.append(s);
// }
})();
