import createModule from "./create-module"

const Accordion = createModule({
  constructor: function({ el, state, options }) {
    const triggers = Array.from(el.querySelectorAll(options.triggerSelector))
    const targets = Array.from(el.querySelectorAll(options.targetSelector))
    const activeCls = `a-btn${options.activeClsModifier}`

    function getIndex(trigger) {
      return triggers.indexOf(trigger)
    }

    function showTarget(trigger) {
      trigger.setAttribute("aria-expanded", "true")
      trigger.classList.add(activeCls)
      targets[getIndex(trigger)].setAttribute("aria-hidden", "false")
    }

    function hideTarget(trigger) {
      trigger.setAttribute("aria-expanded", "false")
      trigger.classList.remove(activeCls)
      targets[getIndex(trigger)].setAttribute("aria-hidden", "true")
    }

    function toggle(event) {
      const trigger = event.target
      const cls = options.triggerSelector.replace(".", "")

      if (!trigger.classList.contains(cls)) {
        return
      }

      if (trigger.getAttribute("aria-expanded") === "true") {
        hideTarget(trigger)
      } else {
        showTarget(trigger)
      }
    }

    function bindEvents() {
      el.addEventListener("click", toggle)
    }

    function unbindEvents() {
      el.addEventListener("click", toggle)
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

export default Accordion
