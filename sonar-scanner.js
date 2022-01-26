const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000/',
    token : "dee7b544f0a094c59227f8a4b884f7ea9c16cef1",
    options: {
      'sonar.projectName': 'digitalfrontdoor-ui',
      'sonar.projectDescription': 'DigitalFrontDoor UI v1.0',
      'sonar.sources': '.',
      'sonar.exclusions':'.nuxt/**, build/**, dist/**, node_modules/**',
      'sonar.coverage.exclusions':'**/*.spec.js, **/*.spec.ts, **/*.test.js, config/**, lib/tests/jest.setup.js, src/locales/**, nuxt.config.js',
      'sonar.organization': 'wellstreet',
      'sonar.issue.ignore.multicriteria':'pcss1,pcss2',
      'sonar.issue.ignore.multicriteria.pcss1.ruleKey':'css:S4662',
      'sonar.issue.ignore.multicriteria.pcss1.resourceKey':'**/*.css',
      'sonar.issue.ignore.multicriteria.pcss2.ruleKey':'css:S4662',
      'sonar.issue.ignore.multicriteria.pcss2.resourceKey':'**/*.vue'
    }
  },
  () => process.exit()
)
