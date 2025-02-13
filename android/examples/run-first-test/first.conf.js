exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'albertostevanato_hQ5VKX',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'ozmDzbzx7qtGmKaFRQ2x',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "Browserstack Unipol Lab",
    build: 'WDIO - Wikipedia Test',
    name: 'first_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://33e38ef0612dfbbe1f58329c5b06bfb0ec265729',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
