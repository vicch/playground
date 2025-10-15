(function() {
  'use strict';

  // Step 1: Inject the custom font CSS
  function injectCSS() {
    const style = document.createElement('style');
    style.textContent = `
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
    `;
    document.head.appendChild(style);
  }

  // Step 2: Override the canvas font for a given canvas
  function overrideCanvasFont(canvas) {
    if (!canvas) {
      console.log('Canvas not found!');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('Canvas context not available!');
      return;
    }

    // Store the original fillText and strokeText methods
    const originalFillText = ctx.fillText;
    const originalStrokeText = ctx.strokeText;

    // Override fillText to use the custom font
    ctx.fillText = function(text, x, y, maxWidth) {
      const originalFont = this.font;
      this.font = originalFont.replace(/px .*$/, 'px MyFont');
      originalFillText.call(this, text, x, y, maxWidth);
      this.font = originalFont;
    };

    // Override strokeText to use the custom font (if used)
    ctx.strokeText = function(text, x, y, maxWidth) {
      const originalFont = this.font;
      this.font = originalFont.replace(/px .*$/, 'px MyFont');
      originalStrokeText.call(this, text, x, y, maxWidth);
      this.font = originalFont;
    };

    console.log('Canvas font overridden successfully!');
  }

  // Step 3: Apply override to all relevant canvases
  function applyFontOverride() {
    // Target all canvases under elements ending with grid-table-container
    const canvases = document.querySelectorAll('[id$="grid-table-container"] canvas, canvas.kix-canvas-tile-content');
    canvases.forEach(canvas => {
      overrideCanvasFont(canvas);
    });
  }

  // Step 4: Load the font and initialize
  function initialize() {
    injectCSS(); // Inject the font CSS
    // Wait for the font to load
    document.fonts.load('16px MyFont').then(() => {
      console.log('MyFont loaded successfully!');
      applyFontOverride(); // Apply override after font is loaded
    }).catch((err) => {
      console.error('Failed to load MyFont:', err);
    });
  }

  // Step 5: Detect tab switches and DOM changes
  function setupObservers() {
    // Observe DOM changes for canvas updates
    const observer = new MutationObserver(() => {
      applyFontOverride(); // Reapply override on DOM changes
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Detect tab switches via URL changes (Google Spreadsheets updates URL hash)
    let lastUrl = location.href;
    new MutationObserver(() => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        console.log('Tab switch detected, reapplying font override');
        applyFontOverride(); // Reapply override on tab switch
      }
    }).observe(document, { subtree: true, childList: true });
  }

  // Step 6: Run on page load and set up observers
  window.addEventListener('load', () => {
    initialize();
    setupObservers();
  });
})();
