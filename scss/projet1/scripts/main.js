/*
SWITCH MODE / light dark
*/
const switchButton = document.querySelectorAll(".switch_button_js")
// BUTTON
const roundButton = document.querySelector(".switch_button_round_js")
const lightButton = document.querySelector(".light_js")
const darkButton = document.querySelector(".dark_js")
/*
CV dl black or white?
*/
const resume = document.querySelector(".resume-js")
/*
Tools : color + typo + grid
*/
const color = document.querySelectorAll(".color")
const grid = document.querySelectorAll(".grid_js")
const typo = document.querySelectorAll(".typo_js")
/*
Scroll text
*/
const scrollText = document.querySelector(".scroll_js")
/*
Audio inch j'en met
*/
// const clickSound = new Audio('audio/click.mp3');

/*
Scroll
*/
window.addEventListener("scroll", () => {
  scrollText.classList.add("fadeOut")
})

/*
Colors picker
*/
color.forEach((button, i) => {
  const colorPos = color[i]
  button.addEventListener("click", () => {
    color.forEach((button) => {
      button.classList.remove("active")
    })
    // clickSound.play()
    setThemeColor(i)
    window.localStorage.setItem("colorTheme", i)

    colorPos.classList.add("active")
  })
})

/*
Grid switch
*/
grid.forEach((button, i) => {
  const gridPos = grid[i]
  button.addEventListener("click", () => {
    grid.forEach((button) => {
      // clickSound.play()
      button.classList.remove("active")
    })
    setThemeGrid(i)
    window.localStorage.setItem("gridTheme", i)

    gridPos.classList.add("active")
  })
})

/*
Typo switch
*/
typo.forEach((type, i) => {
  const typoPos = typo[i]
  type.addEventListener("click", () => {
    typo.forEach((type) => {
      // clickSound.play()
      type.classList.remove("active")
    })
    setThemeTypo(i)
    window.localStorage.setItem("typoTheme", i)
    typoPos.classList.add("active")
  })
})

/*
Switch typo function
*/

function setThemeTypo(i) {
  if (typo[i] === typo[0]) {
    document.documentElement.style.setProperty("--titleFont", "Lato")
  } else if (typo[i] === typo[1]) {
    document.documentElement.style.setProperty(
      "--titleFont",
      "Leitura"
    )
  }
}

/*
Switch grid function
*/
function setThemeGrid(i) {
  const logo_js = document.querySelector('.logo_js')
  if (grid[i] === grid[0]) {
    const middleLine = document.querySelectorAll(".middle_line_js")
    middleLine.forEach((line) => {
      line.classList.add("grid_active")
      line.classList.remove("grid_inactive")
      logo_js.classList.remove('remove_logo_grid')
    })
  } else if (grid[i] === grid[1]) {
    const middleLine = document.querySelectorAll(".middle_line_js")
    middleLine.forEach((line) => {
      line.classList.remove("grid_active")
      line.classList.add("grid_inactive")
      logo_js.classList.add('remove_logo_grid')
    })
  }
}

/*
Switch color
*/

function setThemeColor(i) {
  // main
  if (color[i] === color[0]) {
    document.documentElement.style.setProperty("--mainColor", "#6053ff")
  } else if (color[i] === color[1]) {
    document.documentElement.style.setProperty("--mainColor", "#84a2e9")
  } else if (color[i] === color[2]) {
    document.documentElement.style.setProperty("--mainColor", "#f150e4")
  } else if (color[i] === color[3]) {
    document.documentElement.style.setProperty("--mainColor", "#fa88ce")
  } else if (color[i] === color[4]) {
    document.documentElement.style.setProperty("--mainColor", "#2847f5")
  } else if (color[i] === color[5]) {
    document.documentElement.style.setProperty("--mainColor", "#5bcbff")
  } else if (color[i] === color[6]) {
    document.documentElement.style.setProperty(
      "--mainColor",
      "rgb(112, 224, 117)"
    )
  } else if (color[i] === color[7]) {
    document.documentElement.style.setProperty("--mainColor", "#ffca67")
  } else if (color[i] === color[8]) {
    document.documentElement.style.setProperty(
      "--mainColor",
      "rgb(255, 90, 90)"
    )
  } else if (color[i] === color[9]) {
    document.documentElement.style.setProperty("--mainColor", "#ff9c5b")
  } else {
    document.documentElement.style.setProperty("--mainColor", "#6053ff")
  }
}

/*
SWITCH MODE button dark light + local storage
*/
function setTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light")
    window.localStorage.setItem("dataTheme", "light")
    // BUTTON
    lightButton.classList.remove("hidden")
    darkButton.classList.add("hidden")
    roundButton.classList.remove("switch_active")
    resume.setAttribute("href", "resume/cathy_white_resume.pdf")
  } else {
    document.documentElement.removeAttribute("data-theme", "dark")
    window.localStorage.removeItem("dataTheme", "dark")
    // BUTTON
    lightButton.classList.add("hidden")
    darkButton.classList.remove("hidden")
    resume.setAttribute("href", "resume/cathy_black_resume.pdf")
    roundButton.classList.add("switch_active")
  }
}

switchButton.forEach((button) => {
  button.addEventListener("click", () => {
    const dataTheme = document.documentElement.getAttribute("data-theme")
    setTheme(dataTheme === "light" ? "dark" : "light")
  })
})

// LOCAL STORAGE SELECTED THEME
function initTheme() {
  var themeSelected = window.localStorage.getItem("dataTheme")
  var colorSelected = window.localStorage.getItem("colorTheme")
  var gridSelected = window.localStorage.getItem("gridTheme")
  var typoSelected = window.localStorage.getItem("typoTheme")

  setTheme(themeSelected)
  setThemeColor(colorSelected)
  setThemeGrid(gridSelected)
  setThemeTypo(typoSelected)
  color[0].classList.remove("active")
  color[parseInt(colorSelected)].classList.add("active")
  grid[0].classList.remove("active")
  grid[parseInt(gridSelected)].classList.add("active")
  typo[0].classList.remove("active")
  typo[parseInt(typoSelected)].classList.add("active")
}

initTheme()

/*
WORK > PROJECTS close
*/
const closeProject = document.querySelector(".close_project_js")

/**
 * SCROLLSPY for activate the good anchor position on the menu mon anglais de merde oulala
 */
const ratio = 0.6
const spies = document.querySelectorAll("[data-spy]")
let observer = null
const activate = function (e) {
  const t = e.getAttribute("id")
  const n = document.querySelector(`a[href="#${t}"]`)
  if (null === n) {
    return null
  }
  n.parentElement.querySelectorAll(".active").forEach((e) => {
    return e.classList.remove("active")
  })
  n.classList.add("active")
}
const callback = function (e) {
  e.forEach(function (o) {
    if (o.isIntersecting) {
      activate(o.target)
    }
  })
}
const observe = function (e) {
  if (null !== observer) {
    e.forEach((srcFileWithWorkspacePath) => {
      return observer.unobserve(srcFileWithWorkspacePath)
    })
  }
  const rowMargins = Math.round(0.6 * window.innerHeight)
  /** @type {!IntersectionObserver} */
  observer = new IntersectionObserver(callback, {
    rootMargin: `-${
      window.innerHeight - rowMargins - 1
    }px 0px -${rowMargins}px 0px`,
  })
  spies.forEach((e) => {
    return observer.observe(e)
  })
}
const debounce = function (fn, debounceDuration) {
  let _takingTooLongTimeout
  return function () {
    let __WEBPACK_AMD_REQUIRE_ARRAY__ = arguments
    let undefinedObserves = this
    clearTimeout(_takingTooLongTimeout)
    /** @type {number} */
    _takingTooLongTimeout = setTimeout(function () {
      fn.apply(undefinedObserves, __WEBPACK_AMD_REQUIRE_ARRAY__)
    }, debounceDuration)
  }
}
if (spies.length > 0) {
  observe(spies)
  let cachedOrientation = window.innerHeight
  window.addEventListener(
    "resize",
    debounce(function () {
      if (window.innerHeight !== cachedOrientation) {
        observe(spies)
        /** @type {number} */
        cachedOrientation = window.innerHeight
      }
    }, 500)
  )
}

/**
 * Active link menu to fill the bullet
 */
const menuLink = document.querySelectorAll(".menu_link_js")

menuLink.forEach((button, i) => {
  const menuLinkPos = menuLink[i]
  button.addEventListener("click", () => {
    menuLink.forEach((button) => {
      button.classList.remove("active")
    })
    menuLinkPos.classList.add("active")
  })
})
