(function() {
  let css = "";
  css += `
@font-face {
    font-family: "MyFont";
    unicode-range: U+00-024F;
    src: local("FFGoodProNarr-News");
    src: local("AvenirNextCondensed-Medium");
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
    src: local("Iosevka Custom Book");
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
.text-mono {
    font-family: MyFontSrc !important;
    font-size: 1em !important;
}

span[data-code-text]::before {
    font-family: MyFontSrc !important;
}

textarea.react-blob-print-hide {
    font-family: MyFontSrc !important;
    line-height: 20.67px !important;
}

.markdown-body code,
.markdown-body tt {
    border-radius: 3px;
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
