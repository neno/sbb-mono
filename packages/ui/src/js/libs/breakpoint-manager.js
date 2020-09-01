export const breakpoints = {
  zero: 0,
  small: 540,
  medium: 720,
  large: 960,
  wide: 1140,
  ultra: 2500
}

class Breakpointer {
  constructor() {
    this.breakpoints = breakpoints
    this.breakpointValues = Object.values(this.breakpoints)
  }

  testBreachkpoint(match, minmax = "min-width") {
    if (!this.breakpointValues.includes(match)) {
      throw new Error(
        `Breakpoint '${match}' is not defined. Available breakpoints are: ${this.breakpointValues.join(
          ", "
        )}`
      )
    }
    return window.matchMedia(`(${minmax}: ${match}px)`).matches
  }

  matches(match, minmax) {
    if (!match) {
      throw new Error("match() expected one parameter.")
    }

    if (typeof match === "string") {
      return this.testBreachkpoint(match, minmax)
    } else if (Array.isArray(match)) {
      let isMatching = false
      match.forEach(breakpoint => {
        if (this.testBreachkpoint(breakpoint, minmax)) {
          isMatching = true
        }
        return isMatching
      })
    }

    throw new Error(
      "Sorry, your given value must be either a string or an array."
    )
  }

  between(min, max) {
    return this.testBreachkpoint(min) && this.testBreachkpoint(max, "max-width")
  }

  except(smallerThan, biggerThan) {
    return (
      this.testBreachkpoint(smallerThan, "max-width") ||
      this.testBreachkpoint(biggerThan)
    )
  }
}

export default Breakpointer
