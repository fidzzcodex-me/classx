const { launchBrowser } = require('./browser');

class Core {
  constructor() {
    this.browser = null;
  }

  async launch(options = {}) {
    this.browser = await launchBrowser(options);
    return this.browser;
  }

  async newPage() {
    if (!this.browser) throw new Error('Browser not launched');
    return await this.browser.newPage();
  }
}

module.exports = Core;

// Direct launch
module.exports.launch = async (options = {}) => {
  const { launchBrowser } = require('./browser');
  return await launchBrowser(options);
};
