// This is an extremely simplified version of the dependency tracking
// system used in Vue, Knockout, MobX and Meteor Tracker (each with different
// implementation details, of course). The goal is to better understand how
// the tracking takes place and how data becomes "reactive".

let activeJob = null

function observe (obj) {
  // iterate through all properties on the object
  // and convert them into getter/setters with
  // Object.defineProperty()
  Object.keys(obj).forEach(key => {
    let val = obj[key]
    const dependentJobs = new Set()

    Object.defineProperty(obj, key, {
      // The getter is responsible for "registering" a
      // computation that relies on this object
      get () {
        if (activeJob) {
          dependentJobs.add(activeJob)
        }
        return val
      },

      // The setter is responsible for triggering all
      // registered computation to execute again
      set (newVal) {
        val = newVal
        // triggering re-computation
        dependentJobs.forEach(job => job())
      }
    })
  })
  return obj
}

function autorun (computation) {
  // wrap the raw computation function into a "job" function that registers and
  // unregisters itself as the current active job when invoked
  const job = () => {
    activeJob = job
    computation()
    activeJob = null
  }
  job()
}
