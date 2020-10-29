const canvas = document.createElement('canvas')

canvas.height = 500
canvas.width = 800

document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'red'
ctx.fillRect(5, 50, 140, 280)
ctx.fillStyle = 'green'
ctx.fillRect(20, 100, 50, 150)

ctx.beginPath()
ctx.moveTo(180, 0)
ctx.lineTo(350, 90)
ctx.lineTo(250, 350)
ctx.closePath()
ctx.fill()

ctx.fillStyle = 'blue'
ctx.beginPath()
ctx.moveTo(190, 20)
ctx.lineTo(310, 75)
ctx.lineTo(230, 220)
ctx.closePath()
ctx.fill()

ctx.lineWidth = 5
ctx.beginPath()
ctx.ellipse(600, 150, 100, 100, 0, 0, Math.PI * 2)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'pink'
ctx.beginPath()
ctx.ellipse(600, 150, 50, 50, 0, 0, Math.PI * 2)
ctx.closePath()
ctx.stroke()

