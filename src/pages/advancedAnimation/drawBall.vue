<script lang="ts" setup>
import { onMounted } from 'vue'

let canvasDoc: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null
const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function () {
    if (!ctx) return;
    ctx.fillStyle = 'rgba(255, 255, 255, .3)'
    ctx.fillRect(0, 0, 600, 300)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

let running = false, raf: number | null
function draw(callback?: Function) {
  if (!canvasDoc) {
    const canvas = document.getElementById('tutorial')!
    canvasDoc = canvas as HTMLCanvasElement
  }
  if (canvasDoc.getContext) {
    ctx = canvasDoc.getContext("2d")!

    // ctx.clearRect(0, 0, canvasDoc.width, canvasDoc.height)
    ball.draw()
    ball.x += ball.vx
    ball.y += ball.vy
    ball.vy *= .99
    ball.vy += .25

    if (ball.y + ball.radius > canvasDoc.height || ball.y - ball.radius < 0) {
      ball.vy = -ball.vy
    }

    if (ball.x + ball.radius > canvasDoc.width || ball.x - ball.radius < 0) {
      ball.vx = -ball.vx
    }

    if (running) {
      raf = window.requestAnimationFrame(draw)
    }
    if (typeof callback === 'function') {
      callback()
    }
  }
}



onMounted(() => {
  draw(() => {
    canvasDoc!.addEventListener('click', function () {
      if (!running) {
        running = true
        draw()
      }
    })

    canvasDoc!.addEventListener('mousemove', function (e) {
      if (!running) {
        ball.x = e.offsetX
        ball.y = e.offsetY
        ball.draw()
      }
    })

    canvasDoc!.addEventListener('mouseout', function () {
      if (raf) {
        window.cancelAnimationFrame(raf)
      }

      running = false
    })
  })
})
</script>

<template>
  <canvas id="tutorial" width="600" height="300"></canvas>
</template>
<style scoped>
#tutorial {
  margin-top: 0%;
  transform: translate(-60%, 10%);
}
</style>