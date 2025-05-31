AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
})


const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})


document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})


window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  }
})


const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex"
  } else {
    backToTopBtn.style.display = "none"
  }
})

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 70 
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})


window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})


const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
    }
  })
}, observerOptions)


document.querySelectorAll(".content-card, .char-card, .curiosity-card, .type-card").forEach((el) => {
  observer.observe(el)
})


window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero-background")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 150)
    }, 500)
  }
})

function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  const button = document.getElementById(contentId + "-btn");
  
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.textContent = "Mostrar menos";
  } else {
    content.style.display = "none";
    button.textContent = "Leia mais";
  }
}