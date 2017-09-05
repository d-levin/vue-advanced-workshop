require('../../util').createTestCase(__filename, (window, logs, done) => {
  const { observe, autorun } = window

  const state = { count: 0 }

  observe(state)

  autorun(() => {
    window.console.log(`count is: ${state.count}`)
  })
  expect(logs[0][0]).toBe(`count is: 0`)

  state.count++
  expect(logs[1][0]).toBe(`count is: 1`)

  done()
})
