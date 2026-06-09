const { launchBrowser } = require('./core/browser');

class Core {
  constructor() {
    this.browser = null;
  }

  async launch(options = {}) {
    this.browser = await launchBrowser(options);
    return this.browser;
  }
}

module.exports = Core;
module.exports.launch = async (options = {}) => {
  const { launchBrowser } = require('./core/browser');
  return await launchBrowser(options);
};

// Re-export common methods
module.exports.newPage = async (options) => {
  const browser = await module.exports.launch(options);
  return await browser.newPage();
};
