// lostpixel.config.js

module.exports = {
  pageShots: {
    baseUrl: 'http://localhost:3000',        // change to the URL your app serves at
    pages: [
      { path: '/', name: 'landing' },
      // add more pages here if you want to test more
    ],
    // optional: mask elements if needed, breakpoints, etc.
  },

  // If you're using Lost Pixel Platform (cloud version)
  lostPixelProjectId: 'cmfm3yb5t0pxm3rwp173ahw4i',
  apiKey: process.env.LOST_PIXEL_API_KEY,

  // Local image storage (baseline / current / diff)
  imagePathBaseline: './.lostpixel/baseline',
  imagePathCurrent: './.lostpixel/current',
  imagePathDifference: './.lostpixel/difference',

  // Timing / control
  waitBeforeScreenshot: 1000,
  waitForLastRequest: 3000,
  failOnDifference: true,
  generateOnly: false,
};
