function generate() {
	document.querySelector('h2').style.display = 'none'

	for (var i = 1; i <= 6; i++) {
		let side = document.querySelector('.side' + i)
		transform(side)
	}
}

function transform(side) {
	side.style.background = getColor()
	side.style.width = getPixels()
	side.style.height = getPixels()
	side.style['transform-origin'] = getRandomOrigin()
	document.querySelector('body').style.background = getColor()
	document.getElementsByTagName('meta')['theme-color'].content = getColor()
}

function getColor() {
	return '#' + Math.floor(Math.random() * 16777216).toString(16)
}

function getPixels() {
	return getRandomNumber(100, 250) + 'px'
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * max) + min
}

function getRandomOrigin() {
	let o = ['top', 'left', 'right', 'bottom', 'center'];
	return o[getRandomNumber(0, 4)]
}