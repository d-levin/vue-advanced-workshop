jest.setTimeout(1000)

const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

function getFilename (file) {
  const dir = path.dirname(file)
  const base = path.basename(file)
  const files = fs.readdirSync(path.resolve(dir, '../'))
  const id = base.match(/^\d+\.\d+/)[0]
  return files.filter(f => f.startsWith(id) && f.endsWith('.html'))[0]
}

exports.createTestCase = (file, fn, extra) => {
  const fileToTest = getFilename(file)
  it(fileToTest.replace(/\.html$/, ''), done => {
    JSDOM.fromFile(
      path.resolve(file, `../../${fileToTest}`),
      {
        resources: 'usable',
        runScripts: "dangerously"
      }
    ).then(({ window }) => {

      // test helper
      window.$click = function (target) {
        var evt = window.document.createEvent('HTMLEvents')
        evt.initEvent('click', false, true)
        window.document.querySelector(target).dispatchEvent(evt)
      }

      if (extra) {
        extra(window)
      }

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
