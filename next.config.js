const path = require('path');

module.exports = {
  future: {
    poweredByHeader: false,
    reactStrictMode: true,
    strictPostcssConfiguration: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
