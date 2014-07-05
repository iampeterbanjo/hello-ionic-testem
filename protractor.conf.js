exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub'
  , specs: ['./tests/spec-e2e/**/*.js']
  , capabilities: {'browserName': 'chrome'}
}