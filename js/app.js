
var imges = document.querySelectorAll('.work li a')
var pop = document.querySelector('.pop')
var close = document.querySelector('.close')

imges.forEach(function(img) {
	img.addEventListener('click', function() {
		pop.classList.add('show')
		var actualImgClone = img.querySelector('img').cloneNode()
		pop.append(actualImgClone)
	})
})

close.addEventListener('click', function() {
	pop.classList.remove('show')
	pop.querySelector('img').remove()
})

