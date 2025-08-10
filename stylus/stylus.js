(function () {
  const globalFontFaces = `
    @font-face {
      font-family: "MyFont";
      unicode-range: U+00-024F;
      font-weight: normal;
      src: local("AvenirNextCondensed-Medium");
      src: local("BarlowCondensed-Regular");
      src: local("RobotoCondensed-Regular");
      src: local("Helvetica Condensed");
      src: local("FFGoodProNarr-News");
    }
    @font-face {
      font-family: "MyFont";
      font-weight: bold;
      unicode-range: U+4E00-9FFF;
      src: local("Heiti SC Medium");
    }
    @font-face {
      font-family: "MyFont";
      unicode-range: U+3040-30FF;
      font-weight: normal;
      src: local("Osaka");
    }
    @font-face {
      font-family: "MyFont";
      unicode-range: U+E000-F8FF;
      font-weight: normal;
      src: local("Font Awesome 5 Pro");
    }
    @font-face {
      font-family: "MyFontBold";
      unicode-range: U+00-024F;
      src: local("AvenirNextCondensed-Bold");
      src: local("BarlowCondensed-Bold");
      src: local("RobotoCondensed-Bold");
      src: local("Helvetica Condensed Bold");
      src: local("FFGoodProNarr-Bold");
    }
    @font-face {
      font-family: "MyFontBold";
      unicode-range: U+4E00-9FFF;
      src: local("Heiti SC Medium");
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
      src: local("Heiti SC Medium");
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
      .react-code-text, .react-code-text *,
      span[data-code-text]::before {
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
      .react-file-line.html-div {
        height: 20px;
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
      #book-content #sbo-rt-content h1,
      #book-content #sbo-rt-content h2,
      #book-content #sbo-rt-content h3,
      #book-content #sbo-rt-content h4,
      #book-content #sbo-rt-content h5,
      #book-content #sbo-rt-content h6,
      #book-content #sbo-rt-content .heading-1,
      #book-content #sbo-rt-content .paragraph-head,
      #book-content #sbo-rt-content .cn-chapter-number,
      #book-content #sbo-rt-content .heading-3,
      #book-content #sbo-rt-content .title_document,
      #book-content #sbo-rt-content .fm_title_document,
      #book-content #sbo-rt-content .box_title,
      #book-content #sbo-rt-content .chaptertitle,
      #book-content #sbo-rt-content .chapterTitle,
      #book-content #sbo-rt-content .chapterNumber,
      #book-content #sbo-rt-content a,
      #book-content #sbo-rt-content a:link,
      #book-content #sbo-rt-content a:visited,
      #book-content #sbo-rt-content ul li,
      #book-content #sbo-rt-content ol li,
      #book-content #sbo-rt-content ul li p,
      #book-content #sbo-rt-content ol li p,
      #book-content #sbo-rt-content table p,
      #book-content #sbo-rt-content table tr td,
      #book-content #sbo-rt-content thead,
      #book-content #sbo-rt-content thead th,
      #book-content #sbo-rt-content thead td,
      #book-content #sbo-rt-content dt,
      #book-content #sbo-rt-content .figure_legend h1,
      #book-content #sbo-rt-content .figure_legend h2,
      #book-content #sbo-rt-content .figure_legend h3,
      #book-content #sbo-rt-content .figure_legend h4,
      #book-content #sbo-rt-content .figure_legend h5,
      #book-content #sbo-rt-content .figure_legend h6,
      #book-content #sbo-rt-content .figure_legend p,
      #book-content #sbo-rt-content .figure h1,
      #book-content #sbo-rt-content .figure h2,
      #book-content #sbo-rt-content .figure h3,
      #book-content #sbo-rt-content .figure h4,
      #book-content #sbo-rt-content .figure h5,
      #book-content #sbo-rt-content .figure h6,
      #book-content #sbo-rt-content .figure p,
      #book-content #sbo-rt-content figcaption p,
      #book-content #sbo-rt-content table caption,
      span.orm-highlight, span.orm-annotation-highlight {
        font-family: "Noto Serif Condensed" !important;
      }
    `,

    "snowflake.com": `
      .cm-content * {
        font-family: MyFontSrc !important;
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

  // Force override <code> styles
  function overrideCodeFont() {
    const codes = document.querySelectorAll("code");
    codes.forEach((el, index) => {
      // console.log(`[%cCode Element ${index + 1}%c]`, 'color: green; font-weight: bold;', 'color: reset;');
      // console.log('Element:', el);
      // console.log('Inner Text:', el.innerText.slice(0, 100) + (el.innerText.length > 100 ? '…' : ''));
      el.style.setProperty("font-family", "MyFontSrc", "important");
    });
  }
  window.addEventListener("load", () => {
    overrideCodeFont();
    const observer = new MutationObserver(() => {
      overrideCodeFont(); // re-run whenever DOM changes
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
})();
