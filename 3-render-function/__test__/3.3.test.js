require('../../util').createTestCase(__filename, (window, logs, done) => {
  expect(window.document.querySelector('img').src).toMatch(
    `http://via.placeholder.com/200x200`
  )
  setTimeout(() => {
    expect(window.document.querySelector('img').src).toMatch(
      `avatars3.githubusercontent.com`
    )
    done()
  }, 501)
})
