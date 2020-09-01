import createModule from "./create-module"
import BreakpointManager, { breakpoints } from "./breakpoint-manager"

const Nav = createModule({
  constructor: function({ el, state, options }) {
    const trigger = el.querySelector(options.triggerSelector)
    const target = el.querySelector(options.targetSelector)
    const activeTriggerCls =
      options.triggerSelector.replace(".", "") + options.activeClsModifier
    const activeTargetCls =
      options.targetSelector.replace(".", "") + options.activeClsModifier

    let isActive = false
    const breakpointManager = new BreakpointManager()

    function showNavigation() {
      trigger.classList.add(activeTriggerCls)
      target.classList.add(activeTargetCls)
      isActive = true
    }

    function hideNavigation() {
      trigger.classList.remove(activeTriggerCls)
      target.classList.remove(activeTargetCls)
      isActive = false
    }

    function toggle() {
      const isMobile = breakpointManager.between(
        breakpoints.zero,
        breakpoints.large
      )

      if (!isMobile) {
        return
      }

      if (isActive) {
        hideNavigation()
      } else {
        showNavigation()
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

export default Nav
