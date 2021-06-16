function slidesPlugin(current = 2) {
	const slides = document.querySelectorAll('.slide');

	slides[current].classList.add('active')

	slides.forEach(item => {
	
		item.addEventListener('click', () => {
			removeClass();
			item.classList.add('active');
		})
	})
	
	const removeClass = () => {
		slides.forEach(item => {
			item.classList.remove('active');
		})
	}
}

slidesPlugin();