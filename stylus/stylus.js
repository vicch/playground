(function () {
  const fontFaces = `
    @font-face {
      font-family: "MyFont";
      font-weight: 400;
      unicode-range: U+00-024F;
      src: local("Helvetica Condensed");
      src: local("FFGoodProNarr-News");
      src: local("UniversLTStd-Cn");
    }
    /* Bold Latin face. The browser picks 400 vs 700 from the computed font-weight,
       so headings, strong, th and site-defined weights need no selectors. */
    @font-face {
      font-family: "MyFont";
      font-weight: 700;
      unicode-range: U+00-024F;
      src: local("Helvetica Condensed Bold");
      src: local("FFGoodProNarr-Bold");
      src: local("UniversLTStd-Cn");
    }
    /* Single-weight faces are declared once per weight (400 and 700), never as a
       "400 700" range. Chrome picks the face by weight before it filters by
       unicode-range, so a range face wins the 400 match and the Latin 400 face above
       is never used (Latin falls back to the default serif). Faces with identical
       weight descriptors are merged, so each weight forms one face across all ranges. */
    @font-face {
      font-family: "MyFont";
      font-weight: 400;
      unicode-range: U+4E00-9FFF;
      src: local("Heiti SC Medium");
    }
    @font-face {
      font-family: "MyFont";
      font-weight: 700;
      unicode-range: U+4E00-9FFF;
      src: local("Heiti SC Medium");
    }
    @font-face {
      font-family: "MyFont";
      font-weight: 400;
      unicode-range: U+3040-30FF;
      src: local("Osaka");
    }
    @font-face {
      font-family: "MyFont";
      font-weight: 700;
      unicode-range: U+3040-30FF;
      src: local("Osaka");
    }
    @font-face {
      font-family: "MyFont";
      font-weight: 400;
      unicode-range: U+E000-F8FF;
      src: local("Font Awesome 5 Pro");
    }
    @font-face {
      font-family: "MyFont";
      font-weight: 700;
      unicode-range: U+E000-F8FF;
      src: local("Font Awesome 5 Pro");
    }

    @font-face {
      font-family: "MyFontSrc";
      unicode-range: U+00-024F;
      src: local("Iosevka Condensed");
      src: local("Berkeley Mono UltraCondensed");
    }
    @font-face {
      font-family: "MyFontSrc";
      font-weight: 700;
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
    /* Base: one universal rule. font-family inherits, !important beats site styles.
       Targets elements only (not ::before/::after), so pseudo-element icon fonts
       (Font Awesome, glyphicons, etc.) are left intact automatically. */
    * {
      font-family: MyFont !important;
    }

    /* Bold comes from the weight-aware MyFont faces, driven by computed font-weight.
       Only em needs a rule, since the faces have no italic. */
    em {
      font-weight: 700;
    }

    /* Monospace / code, across the common editors. Replaces the per-site code rules.
       Exact tag and class selectors only: the engine can reject "X *" by checking
       ancestor tags and classes, which it cannot do for [class*="..."] substrings. */
    code, code *,
    pre, pre *,
    kbd, samp, tt, xmp,
    [style*="monospace"],
    .monospace,
    .hljs, .hljs *,
    .monaco-editor .view-line,
    .monaco-editor .view-line *,
    .CodeMirror, .CodeMirror *,
    .cm-content, .cm-content *,
    .ace_editor, .ace_editor *,
    .code-block *,
    .codeblock * {
      font-family: MyFontSrc !important;
      font-variant-ligatures: none;
    }

    /* Icon rescue: re-assert standard element-text icon fonts so * doesn't clobber them.
       Pseudo-element icon fonts need no rescue (we never touch pseudos). */
    .material-icons {
      font-family: "Material Icons" !important;
    }
    .material-symbols-outlined,
    .material-symbols-rounded,
    .material-symbols-sharp,
    [class*="material-symbols"] {
      font-family: "Material Symbols Outlined" !important;
    }
    .google-material-icons {
      font-family: "Google Material Icons" !important;
    }
    [class*="codicon"] {
      font-family: "codicon" !important;
    }
    .glyphicon {
      font-family: "Glyphicons Halflings" !important;
    }
  `;

  // Genuinely site-specific overrides: nonstandard icon-font names,
  // or a deliberate font preference for that site. Everything else is global.
  const siteStyles = {
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

    "glean.com": `
      pre, pre * {
        font-family: MyFont !important;
      }
      .heading1, .heading2, .heading3, .heading4, .heading5, .heading6 {
        font-weight: 700 !important;
      }
    `,

    "google.com": `
      .material-icons-extended {
        font-family: "Material Icons Extended" !important;
      }
      .google-symbols,
      .material-symbols-outlined {
        font-family: "Google Symbols" !important;
      }
      mat-icon {
        font-family: "Luminous Symbols" !important;
      }
    `,

    "oreilly.com": `
      #book-content #sbo-rt-content,
      #book-content #sbo-rt-content * {
        font-family: "Noto Serif Condensed" !important;
      }
    `,

    "weread.qq.com": `
      @font-face {
        font-family: "MyFont";
        font-weight: 400;
        unicode-range: U+4E00-9FFF;
        src: local("FZSong III-Z05");
      }
      @font-face {
        font-family: "MyFont";
        font-weight: 700;
        unicode-range: U+4E00-9FFF;
        src: local("FZSong III-Z05");
      }
    `,

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
  };

  function getMatchingSiteStyle(hostname) {
    return Object.entries(siteStyles)
      .filter(([pattern]) => hostname === pattern || hostname.endsWith("." + pattern))
      .map(([, css]) => css)
      .join("\n");
  }

  const styleEl = document.createElement("style");
  styleEl.textContent = fontFaces + globalStyles + getMatchingSiteStyle(location.hostname);
  document.documentElement.append(styleEl);
})();
