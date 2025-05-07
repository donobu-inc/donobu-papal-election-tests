// @ts-check
const { defineConfig } = require("@playwright/test");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  timeout: 120000, // Global timeout: 120 seconds

  /* Folder for test artifacts such as screenshots, videos, etc. */
  outputDir: "test-results/",

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        video: 'on',
        recordVideo: {
          dir: 'test-results/videos/',
          size: { width: 1280, height: 720 },
        },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        viewport: { width: 1280, height: 720 },
        screen: { width: 1920, height: 1080 },
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
      },
    },
  ],
});
