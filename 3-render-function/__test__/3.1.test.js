require('../../util').createTestCase(__filename, (window, logs, done) => {
  expect(window.document.getElementById('app').innerHTML).toMatch(
    `<div><h1>0</h1><h2>1</h2><h3>2</h3></div>`
  )
  done()
})
