(function () {
  const globalFontFaces = `
    @font-face {
      font-family: "MyFont";
      unicode-range: U+00-024F;
      src: local("FFGoodProNarr-News"), local("AvenirNextCondensed-Medium"),
           local("BarlowCondensed-Regular"), local("RobotoCondensed-Regular"),
           local("Helvetica Condensed");
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
      src: local("FFGoodProNarr-Bold"), local("AvenirNextCondensed-Bold"),
           local("BarlowCondensed-Bold"), local("RobotoCondensed-Bold"),
           local("Helvetica Condensed Bold");
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
  `;

  const globalStyles = `
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

  const siteStyles = {
    "everyonepiano.cn": `
      #musicTitle {
        display: none !important;
      }
    `,
    
    "flickr.com": `
      .showcase {
        display: none;
      }
    `,
    
    "google.com": `
      .g, .std {
        font-family: MyFont !important;
      }
      .ha > .hP {
        font-family: MyFontBold !important;
      }
      div.view-lines div.view-line span {
        font-family: MyFontSrc !important;
      }
      .material-icons-extended, span.material-icons-extended {
        font-family: "Material Icons Extended" !important;
      }
      .google-symbols {
        font-family: "Google Symbols" !important;
      }
      .google-material-icons {
        font-family: "Google Material Icons" !important;
      }
    `,
    
    "github.com": `
      .markdown-body {
        font-family: MyFont !important;
      }
      div.react-code-text *, span[data-code-text]::before {
        font-family: MyFontSrc !important;
      }
      .blob-code-inner, .blob-code-inner span,
      .blob-code-inner mark, .text-mono {
        font-family: MyFontSrc !important;
        font-size: 1em !important;
      }
      textarea.react-blob-print-hide {
        font-family: MyFontSrc !important;
        line-height: 20px !important;
      }
      .markdown-body code, .markdown-body tt {
        border-radius: 3px;
      }
    `,

    "github.dev": `
      .monaco-editor .view-lines * {
        font-family: MyFontSrc !important;
      }
      .codicon[class*=codicon-] {
        font-family: codicon !important;
      }
    `,

    "githubusercontent.com": `
      .hljs, .hljs *,
      .cm-editor, .cm-editor * {
        font-family: MyFontSrc !important;
      }
    `,

    "leetcode.com": `
      .monaco-editor .view-lines * {
        font-family: MyFontSrc !important;
      }
    `,

    "movielens.org": `
      .fa {
        font-family: FontAwesome !important;
      }
    `,

    "notion.so": `
      .notion-code-block * {
        font-family: MyFontSrc !important;
      }
      [style*="font-weight:600"] {
        font-family: MyFontBold !important;
      }
    `,

    "oreilly.com": `
      #book-content #sbo-rt-content p,
      #book-content #sbo-rt-content p *,
      #book-content #sbo-rt-content .note p,
      #book-content #sbo-rt-content blockquote,
      #book-content #sbo-rt-content blockquote p,
      #book-content #sbo-rt-content .blockquote p,
      #book-content #sbo-rt-content h1, h2, h3, h4, h5, h6,
      #book-content #sbo-rt-content .heading-1,
      .paragraph-head, .cn-chapter-number, .heading-3,
      .title_document, .fm_title_document, .box_title,
      .chaptertitle, .chapterTitle, .chapterNumber,
      address, caption, cite, dfn, strong, th, var,
      a, a:link, a:visited,
      ul li, ol li, ul li p, ol li p,
      table p, table tr td,
      span.orm-highlight, span.orm-annotation-highlight {
        font-family: "Noto Serif Condensed" !important;
      }
    `,

    "youtube.com": `
      paper-item, tp-yt-paper-item,
      yt-formatted-string.ytd-menu-service-item-renderer,
      ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media,
      .title.ytd-guide-entry-renderer, .message.ytd-notification-renderer,
      #video-title.ytd-rich-grid-media, #content-text.ytd-comment-renderer {
        font-family: MyFont !important;
      }
      ytd-thumbnail[size=large] a.ytd-thumbnail,
      ytd-thumbnail[size=large]:before {
        border-radius: 0;
      }
    `,

    "wanikani.com": `
      .vocabulary, [lang="ja"] {
        font-family: MyFont !important;
      }
      #lesson #supplement-info #prev-btn,
      #lesson #supplement-info #next-btn {
        font-family: FontAwesome !important;
      }
      .fa-classic, .fa-light, .fa-regular, .fa-solid, .fa-thin,
      .fal, .far, .fas, .fat {
        font-family: "Font Awesome 6 Pro" !important;
      }
    `,

    "weread.qq.com": `
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
    `,
  };

  function getMatchingSiteStyle(hostname) {
    return Object.entries(siteStyles).map(([pattern, css]) =>
      hostname === pattern || hostname.endsWith("." + pattern) ? css : ""
    ).join("\n");
  }

  const finalCSS = globalFontFaces + globalStyles + getMatchingSiteStyle(location.hostname);
  const styleEl = document.createElement("style");
  styleEl.textContent = finalCSS;
  document.documentElement.append(styleEl);
})();
