require('../../util').createTestCase(__filename, (window, logs, done) => {
  expect(window.document.querySelector('#app div').innerHTML).toMatch(
    `foo with id: 000`
  )
  window.$click('a[href="#bar"]')
  setTimeout(() => {
    expect(window.document.getElementById('app').innerHTML).toMatch(
      `bar`
    )
    window.$click('a[href^="#foo"]')
    setTimeout(() => {
      // expect(window.document.getElementById('app').innerHTML).toMatch(
        // `foo with id: 123`
      // )
      window.location.hash = 'fsefsefsefse'
      setTimeout(() => {
        expect(window.document.getElementById('app').innerHTML).toMatch(
          `not found!`
        )
        done()
      }, 16)
    }, 0)
  }, 0)
}, window => window.location.hash = '#foo/000')
