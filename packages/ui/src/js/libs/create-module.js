const createModule = config => (el, options_ = {}) => {
  const state = {}
  const options = {}
  let moduleOptions = {}

  // Assign default options
  if (config.options && config.options instanceof Function) {
    Object.assign(options, config.options())
  } else if (config.options) {
    throw new Error("options must be a Function returning an object")
  }

  const moduleName = el.getAttribute("data-module")

  // Assign options passed as data-attribute: [data-${moduleName}-options]
  if (el.dataset[`${moduleName}Options`]) {
    moduleOptions = JSON.parse(el.dataset[`${moduleName}Options`])
    // or alternatively assign options passed inside HTML by script tag (data-module-options)
  } else {
    const moduleOptionsContainer = el.querySelector(
      `[data-${moduleName}-options]`
    )
    if (moduleOptionsContainer) {
      moduleOptions = JSON.parse(moduleOptionsContainer.innerHTML)
    }
  }

  // Overwrite default options with passed dataModuleOptions and given options_
  Object.assign(options, moduleOptions, options_)

  return config.constructor({
    el,
    state,
    options
  })
}

export default createModule
