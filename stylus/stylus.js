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

body, body p,
div, div p,
section, section p, textarea,
span, font, p, a,
li, tr, td, dt, dd,
input, label, select, button {
    font-family: MyFont, "Material Icons Extended" !important;
}

h1, h2, h3, h4, h5,
b, em, strong {
    font-family: MyFontHead, "Material Icons Extended" !important;
}

code, code *, .code,
pre, pre *,
div.ace_editor, div.ace_editor *,
.syntaxhighlighter code {
	font-family: MyFontSrc !important;
    font-variant-ligatures: none;
}

/* *:before, *:after {
   font-family: MyFont, "Font Awesome 5 Pro", "Font Awesome 5 Brands";
}*/

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
