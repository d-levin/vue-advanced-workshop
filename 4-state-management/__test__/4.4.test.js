require('../../util').createTestCase(__filename, (window, logs, done) => {
  expect(window.document.getElementById('app').innerHTML).toMatch(
    `<div>0</div> <div>0</div> <div>0</div>`
  )
  window.$click('button')
  setTimeout(() => {
    expect(window.document.getElementById('app').innerHTML).toMatch(
      `<div>1</div> <div>1</div> <div>1</div>`
    )
    window.$click('button')
    setTimeout(() => {
      expect(window.document.getElementById('app').innerHTML).toMatch(
        `<div>2</div> <div>2</div> <div>2</div>`
      )
      done()
    }, 0)
  }, 0)
})
