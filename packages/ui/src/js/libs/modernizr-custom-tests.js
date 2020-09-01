/* eslint-disable */

Modernizr.addTest("safari", function() {
  var isSafari = navigator.userAgent.indexOf("Safari") > -1,
    isChrome = navigator.userAgent.indexOf("Chrome") > -1

  return !isChrome && isSafari
})

Modernizr.addTest("mobilesafari", function() {
  return /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent)
})

Modernizr.addTest("ie", function() {
  return /*@cc_on!@*/ false || !!document.documentMode // eslint-disable-line spaced-comment
})

Modernizr.addTest("legacy-edge", function() {
  var isIE = /*@cc_on!@*/ false || !!document.documentMode // eslint-disable-line spaced-comment
  return !isIE && !!window.StyleMedia
})

Modernizr.addTest("firefox-lt-50", function() {
  if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    if (navigator.userAgent.split("Firefox/")[1].split(".")[0] < 50) {
      return true
    }
  }
  return false
})

Modernizr.addTest("firefox", function() {
  if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    return true
  }
  return false
})

/**
 * Touch
 *
 * Set Touchclass on first touch event.
 * Avoid wrong settings on hybrid devices (Mouse&Touch|e.g Surface).
 *
 */
;(function touchDetection() {
  document.documentElement.classList.add("no-touchdevice")
  Modernizr.touch = false

  window.addEventListener(
    "touchstart",
    function setHasTouch() {
      Modernizr.touch = true
      document.documentElement.classList.add("touchdevice")
      document.documentElement.classList.remove("no-touchdevice")

      // Remove event listener once fired, otherwise it'll kill scrolling performance
      window.removeEventListener("touchstart", setHasTouch)
    },
    false
  )
})()
