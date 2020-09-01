import createModule from "./create-module"

const Collapsible = createModule({
  constructor: function({ el, state, options }) {
    const trigger = el.querySelector(options.triggerSelector)
    const target = el.querySelector(options.targetSelector)
    const activeCls = options.triggerSelector.replace(".", "") + "--active"

    function showTarget() {
      trigger.setAttribute("aria-expanded", "true")
      trigger.classList.add(activeCls)
      target.setAttribute("aria-hidden", "false")
    }

    function hideTarget() {
      trigger.setAttribute("aria-expanded", "false")
      trigger.classList.remove(activeCls)
      target.setAttribute("aria-hidden", "true")
    }

    function toggle() {
      if (trigger.getAttribute("aria-expanded") === "true") {
        hideTarget()
      } else {
        showTarget()
      }
    }

    function bindEvents() {
      trigger.addEventListener("click", toggle)
    }

    function unbindEvents() {
      trigger.removeEventListener("click", toggle)
    }

    // Public Methods
    state.init = () => {
      bindEvents()
    }

    state.destroy = () => {
      unbindEvents()
    }

    state.init()
    return state
  }
})

export default Collapsible
