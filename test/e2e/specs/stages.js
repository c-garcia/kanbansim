module.exports = {
  before: function (browser, done) {
    this.DESIGN_CAPACIY = 4
    this.CODE_CAPACITY = 3
    this.QA_CAPACITY = 4
    done()
  },
  'We have a source with name "To do"': function (browser) {
    browser.url(browser.globals.devServerURL)
    browser.assert.containsText('.item-source.todo', 'To do')
    browser.end()
  },

  'We have three stages': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    browser.url(browser.globals.devServerURL)
    browser.assert.containsText('.stage.design', 'Design')
    browser.assert.containsText('.stage.code', 'Code')
    browser.assert.containsText('.stage.qa', 'Q&A')
    browser.end()
  },

  'We have a sink with name "Done"': function (browser) {
    browser.url(browser.globals.devServerURL)
    browser.assert.containsText('.item-sink.done', 'Done')
    browser.end()
  },

  'Stages show current capacity': function (browser) {
    browser.url(browser.globals.devServerURL)
    browser.assert.containsText('.stage.design', '(' + this.DESIGN_CAPACIY + ')')
    browser.assert.containsText('.stage.code', '(' + this.CODE_CAPACITY + ')')
    browser.assert.containsText('.stage.qa', '(' + this.QA_CAPACITY + ')')
    browser.end()
  },

  'We can configure design capacity': function (browser) {
    browser.url(browser.globals.devServerURL)
    browser.setValue('input.capacity.design', 5)
    browser.assert.containsText('.stage.design', '(' + 45 + ')')
  }
}
