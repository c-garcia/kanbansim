module.exports = {
  'We have three stages': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .assert.elementPresent('.stage.todo')
      .assert.elementPresent('.stage.inprogress')
      .assert.elementPresent('.stage.done')
      .end()
  }
}
