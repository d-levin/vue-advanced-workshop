const { resolve, basename } = require('path')
const { JSDOM } = require('jsdom')

exports.createTestCase = (file, fn) => {
  const base = basename(file)
  it(base.replace(/\.test\.js$/, ''), done => {
    JSDOM.fromFile(
      resolve(file, `../../${base.replace(/\.test\.js$/, '.html')}`),
      { runScripts: "dangerously" }
    ).then(({ window }) => {
      const log = window.console.log = jest.fn(() => {})
      fn(window, log.mock.calls, done)
    })
  })
}
