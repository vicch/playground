// ==UserScript==
// @name         Raindrop.io Random Bookmark
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a Random button to Raindrop.io to navigate to random bookmarks
// @author       You
// @match        https://app.raindrop.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to wait for an element to appear on the page
    function waitForElement(selector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                return;
            }

            const observer = new MutationObserver((mutations, obs) => {
                const element = document.querySelector(selector);
                if (element) {
                    obs.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`Element ${selector} not found within ${timeout}ms`));
            }, timeout);
        });
    }

    // Function to add the Random button
    async function addRandomButton() {
        try {
            // Wait for the Add Bookmark button to appear
            const addButton = await waitForElement('div[role="button"][title="Add Bookmark"]');
            
            // Check if Random button already exists
            if (document.querySelector('div[role="button"][title="Random"]')) {
                return;
            }

            // Create the Random button
            const randomButton = document.createElement('div');
            randomButton.setAttribute('role', 'button');
            randomButton.setAttribute('tabindex', '0');
            randomButton.className = addButton.className;
            randomButton.setAttribute('data-variant', 'primary');
            randomButton.setAttribute('data-accent', 'default');
            randomButton.setAttribute('data-size', 'default');
            randomButton.setAttribute('title', 'Random');
            
            // Add the text content
            const span = document.createElement('span');
            span.className = 'hide-on-small-body';
            span.textContent = 'Random';
            randomButton.appendChild(span);

            // Add click event listener
            randomButton.addEventListener('click', handleRandomClick);
            randomButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleRandomClick();
                }
            });

            // Insert the Random button after the Add button
            addButton.parentNode.insertBefore(randomButton, addButton.nextSibling);

            console.log('Random button added to Raindrop.io');
        } catch (error) {
            console.error('Failed to add Random button:', error);
        }
    }

    // Function to handle Random button click
    function handleRandomClick() {
        // Find all article elements
        const articles = document.querySelectorAll('article[role="listitem"]');
        
        if (articles.length === 0) {
            alert('No bookmarks found on this page');
            return;
        }

        // Select a random article
        const randomIndex = Math.floor(Math.random() * articles.length);
        const randomArticle = articles[randomIndex];

        // Find the link within the article
        const link = randomArticle.querySelector('a');
        
        if (link && link.href) {
            // Open the link in a new tab
            window.open(link.href, '_blank');
            console.log('Opened random bookmark:', link.href);
        } else {
            alert('Could not find a valid link in the selected bookmark');
        }
    }

    // Initialize the script
    function init() {
        // Add the Random button when the page loads
        addRandomButton();

        // Also listen for navigation changes (SPA behavior)
        let lastUrl = location.href;
        new MutationObserver(() => {
            const url = location.href;
            if (url !== lastUrl) {
                lastUrl = url;
                // Wait a bit for the new page to load, then add the button
                setTimeout(addRandomButton, 1000);
            }
        }).observe(document, { subtree: true, childList: true });
    }

    // Start the script when the page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
