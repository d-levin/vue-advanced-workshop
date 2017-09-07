require('../../util').createTestCase(__filename, (window, logs, done) => {
  const { Vue } = window
  const vm = new Vue({
    data: { foo: 10 },
    rules: {
      foo: {
        validate: value => value > 1,
        message: 'foo must be greater than one'
      }
    }
  })

  vm.foo = 2
  setTimeout(() => {
    expect(logs[0]).toBe(undefined)

    vm.foo = 0
    setTimeout(() => {
      expect(logs[0][0]).toMatch(`foo must be greater than one`)
      done()
    })
  })
})
