require('../../util').createTestCase(__filename, (window, logs, done) => {
  expect(window.document.getElementById('app').innerHTML).toMatch(
    `<div>foo</div>`
  )
  window.$click('button')
  setTimeout(() => {
    expect(window.document.getElementById('app').innerHTML).toMatch(
      `<div>bar</div>`
    )
    window.$click('button')
    setTimeout(() => {
      expect(window.document.getElementById('app').innerHTML).toMatch(
       `<div>foo</div>`
      )
      done()
    }, 0)
  }, 0)
})
