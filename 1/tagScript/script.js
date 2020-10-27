'use strict'

const pages = ['index8.html', 'index8.1.html']

setTimeout(() => {
  window.location.href = pages[(+document.body.id + 1) % 2]
}, 3000)
