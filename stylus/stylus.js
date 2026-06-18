(function () {
  const fontFaces = `
    @font-face {
      font-family: "MyFont";
      unicode-range: U+00-024F;
      src: local("BarlowCondensed-Regular");
      src: local("RobotoCondensed-Regular");
      src: local("Helvetica Condensed");
      src: local("AvenirNextCondensed-Regular");
      src: local("FFGoodProNarr-News");
    }
    @font-face {
      font-family: "MyFont";
      unicode-range: U+4E00-9FFF;
      src: local("Heiti SC Medium");
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
      src: local("BarlowCondensed-Bold");
      src: local("RobotoCondensed-Bold");
      src: local("Helvetica Condensed Bold");
      src: local("AvenirNextCondensed-DemiBold");
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
      src: local("Iosevka Condensed");
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
    /* Base: one universal rule. font-family inherits, !important beats site styles.
       Targets elements only (not ::before/::after), so pseudo-element icon fonts
       (Font Awesome, glyphicons, etc.) are left intact automatically. */
    * {
      font-family: MyFont !important;
    }

    /* Bold */
    h1, h2, h3, h4, h5, h6,
    b, strong, em, th,
    [class*="bold" i],
    [class*="heading" i],
    [style*="font-weight:6"],
    [style*="font-weight:7"],
    [style*="font-weight:8"],
    [style*="font-weight:9"],
    [style*="font-weight: 6"],
    [style*="font-weight: 7"],
    [style*="font-weight: 8"],
    [style*="font-weight: 9"] {
      font-family: MyFontBold !important;
    }

    /* Monospace / code, across the common editors. Replaces the per-site code rules. */
    code, code *,
    pre, pre *,
    kbd, samp, tt, xmp,
    [style*="monospace"],
    [class*="monospace" i],
    [class*="hljs"],
    .monaco-editor .view-line,
    .monaco-editor .view-line *,
    [class*="CodeMirror"] *,
    [class*="cm-content"] *,
    [class*="cm-line"] *,
    [class*="ace_"],
    [class*="code-block" i] *,
    [class*="codeblock" i] * {
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
        unicode-range: U+4E00-9FFF;
        src: local("FZSong III-Z05");
      }
      @font-face {
        font-family: "MyFontBold";
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
