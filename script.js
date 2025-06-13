// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		if (this.getAttribute('href').startsWith('#')) {
			e.preventDefault()
			const target = document.querySelector(this.getAttribute('href'))
			window.scrollTo({
				top: target.offsetTop - 80,
				behavior: 'smooth',
			})
		}
		// External links will open normally due to target="_blank"
	})
})

// Animation on scroll
const animateOnScroll = () => {
	const elements = document.querySelectorAll('.project-card, .skills li')

	elements.forEach(element => {
		const elementPosition = element.getBoundingClientRect().top
		const screenPosition = window.innerHeight / 1.3

		if (elementPosition < screenPosition) {
			element.style.opacity = '1'
			element.style.transform = 'translateY(0)'
		}
	})
}

// Set initial state for animation
window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.project-card, .skills li').forEach(el => {
		el.style.opacity = '0'
		el.style.transform = 'translateY(20px)'
		el.style.transition = 'all 0.6s ease'
	})
})

// Trigger animation on scroll
window.addEventListener('scroll', animateOnScroll)

// Initialize animations on page load
animateOnScroll()
