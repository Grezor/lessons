const container = document.getElementById('cursor')
const cursor = container.querySelector('.cursor-wrapper')
const pointer = container.querySelector('.pointer')
let cursorPos = { x: 0, y: 0 }
let cursorOffset = { x: 0, y: 0 }

function syncCursor(elem = cursor) {
	const transform = `translate(${cursorPos.x + cursorOffset.x}px, ${cursorPos.y + cursorOffset.y}px)`
  elem.style.transform = transform
}

document.addEventListener('mousemove', e => {
	cursorPos.x = e.clientX
  cursorPos.y = e.clientY
  syncCursor()
  syncCursor(pointer)
})

document.addEventListener('scroll', () => {
	cursorOffset.x = window.scrollX
  cursorOffset.y = window.scrollY
  syncCursor()
  syncCursor(pointer)
})

