require('../../util').createTestCase(__filename, (window, logs, done) => {
  expect(window.document.getElementById('app').innerHTML).toMatch(
    `0 <button>+</button><button>-</button>`
  )
  window.$click('button')
  window.$click('button')
  setTimeout(() => {
    expect(window.document.getElementById('app').innerHTML).toMatch(
      `2 <button>+</button><button>-</button>`
    )
    window.$click('button:last-child')
    window.$click('button:last-child')
    setTimeout(() => {
      expect(window.document.getElementById('app').innerHTML).toMatch(
        `0 <button>+</button><button>-</button>`
      )
      done()
    }, 0)
  }, 0)
})
