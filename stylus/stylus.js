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
      src: local("UniversNextPro-Cond");
      src: local("UniversLTStd-Cn");
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
      src: local("UniversNextPro-Cond");
      src: local("UniversLTStd-Cn");
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
        font-family: MyFontBold !important;
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

  // // --- TARGET WEIGHT LOGIC START ---
  // const targetRanges = [
  //   "\\u4E00-\\u9FFF", // CJK Unified Ideographs
  //   "\\u3040-\\u30FF"  // Japanese Hiragana & Katakana
  // ];
  
  // // Dynamically build the regex: /([\u4E00-\u9FFF\u3040-\u30FF]+)/g
  // const targetRegex = new RegExp(`([${targetRanges.join('')}]+)`, 'g');

  // function wrapTargetText(node) {
  //   const parent = node.parentNode;
    
  //   // Skip invalid parents, already wrapped elements, and code editors/inputs
  //   if (!parent ||
  //       ['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEXTAREA', 'TITLE'].includes(parent.nodeName) ||
  //       parent.classList.contains('custom-weight-wrap') ||
  //       parent.isContentEditable) {
  //     return;
  //   }

  //   const text = node.nodeValue;
  //   if (!targetRegex.test(text)) return;

  //   // Use a DocumentFragment to safely replace the text node without breaking site JS
  //   const fragment = document.createDocumentFragment();
  //   let lastIndex = 0;
  //   let match;
  //   targetRegex.lastIndex = 0; // Reset regex state

  //   while ((match = targetRegex.exec(text)) !== null) {
  //     // Append text before the target characters
  //     if (match.index > lastIndex) {
  //       fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
  //     }
      
  //     // Wrap the target characters
  //     const span = document.createElement("span");
  //     span.className = "custom-weight-wrap";
  //     span.style.fontWeight = "700";
  //     // span.style.webkitTextStroke = "0.35px currentColor";
  //     span.textContent = match[0];
  //     fragment.appendChild(span);
      
  //     lastIndex = targetRegex.lastIndex;
  //   }

  //   // Append any remaining text after the last match
  //   if (lastIndex < text.length) {
  //     fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  //   }

  //   parent.replaceChild(fragment, node);
  // }

  // function scanDOM(root) {
  //   const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
  //   const textNodes = [];
  //   while (walker.nextNode()) textNodes.push(walker.currentNode);
  //   textNodes.forEach(wrapTargetText);
  // }

  // const initScan = () => {
  //   // 1. Initial scan on load
  //   scanDOM(document.body);
    
  //   // 2. Observe dynamic changes (SPAs, lazy loading, infinite scroll)
  //   const observer = new MutationObserver((mutations) => {
  //     mutations.forEach((mutation) => {
  //       mutation.addedNodes.forEach((node) => {
  //         if (node.nodeType === Node.TEXT_NODE) {
  //           wrapTargetText(node);
  //         } else if (node.nodeType === Node.ELEMENT_NODE) {
  //           scanDOM(node);
  //         }
  //       });
  //     });
  //   });
    
  //   observer.observe(document.body, { childList: true, subtree: true });
  // };

  // // Wait for body to exist before scanning
  // if (document.body) {
  //   initScan();
  // } else {
  //   document.addEventListener('DOMContentLoaded', initScan);
  // }
  // // --- TARGET WEIGHT LOGIC END ---
})();
