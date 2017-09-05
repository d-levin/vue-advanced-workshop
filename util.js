const { resolve, basename } = require('path')
const { JSDOM } = require('jsdom')

exports.createTestCase = (file, fn) => {
  const base = basename(file)
  it(base.replace(/\.test\.js$/, ''), done => {
    JSDOM.fromFile(
      resolve(file, `../../${base.replace(/\.test\.js$/, '.html')}`),
      {
        resources: 'usable',
        runScripts: "dangerously"
      }
    ).then(({ window }) => {
      window.addEventListener('load', () => {
        const log = window.console.log = jest.fn(() => {})
        if (window.Vue) {
          window.Vue.config.productionTip = false
        }
        fn(window, log.mock.calls, done)
      })
    })
  })
}
