<script lang="ts" setup>
import { onMounted } from 'vue'
const sun = new Image()
sun.src = '/src/assets/canvas_sun.png'
const moon = new Image()
moon.src = '/src/assets/canvas_moon.png'
const earth = new Image()
earth.src = '/src/assets/canvas_earth.png'

function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, 300, 300)

    ctx.fillStyle = 'rgb(0 0 0 / 40%)'
    ctx.strokeStyle = 'rgb(0 153 255 / 40%)'
    ctx.save()
    ctx.translate(150, 150)

    const time = new Date()
    const rotateVal = ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds()
    const rotateVal1 = ((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds()
    ctx.rotate(rotateVal)
    ctx.translate(105, 0)
    ctx.fillRect(0, -12, 40, 24)
    ctx.drawImage(earth, -12, -12)

    ctx.save()
    ctx.rotate(rotateVal1)
    ctx.translate(0, 28.5)
    ctx.drawImage(moon, -3.5, -3.5)
    ctx.restore()

    ctx.restore()
    ctx.beginPath()
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false)
    ctx.stroke()

    ctx.drawImage(sun, 0, 0, 300, 300)
    window.requestAnimationFrame(draw)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="350" height="350"></canvas>
</template>
<style scoped>
#tutorial {
  margin-top: 10%;
  transform: translateY(10%);
}
</style>