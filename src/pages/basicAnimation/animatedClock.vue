<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')!
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!
    
    const now = new Date()
    ctx.save()
    ctx.clearRect(0, 0, 150, 150)
    ctx.translate(75, 75)
    ctx.scale(.4, .4)
    ctx.rotate(-Math.PI / 2)
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'white'
    ctx.lineWidth = 8
    ctx.lineCap = 'round'

    ctx.save()
    for(let i = 0; i < 12; i++) {
      ctx.beginPath()
      ctx.rotate(Math.PI / 6)
      ctx.moveTo(100, 0)
      ctx.lineTo(120, 0)
      ctx.stroke()
    }
    ctx.restore()

    ctx.save()
    ctx.lineWidth = 5
    for(let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        ctx.beginPath()
        ctx.moveTo(117, 0)
        ctx.lineTo(120, 0)
        ctx.stroke()
      }
      ctx.rotate(Math.PI / 30)
    }
    ctx.restore()

    // const sec = now.getSeconds()
    const sec = now.getSeconds() + now.getMilliseconds() / 1000
    const min = now.getMinutes()
    const hr = now.getHours() % 12

    ctx.fillStyle = 'black'
    canvas.innerText = `当时时间：${hr}:${min}`

    ctx.save()
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec)
    ctx.lineWidth = 14
    ctx.beginPath()
    ctx.moveTo(-20, 0)
    ctx.lineTo(80, 0)
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(-28, 0)
    ctx.lineTo(112, 0)
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.rotate((sec * Math.PI) / 30)
    ctx.strokeStyle = '#d40000'
    ctx.fillStyle = '#d40000'
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.moveTo(-30, 0)
    ctx.lineTo(83, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.fillStyle = 'rgb(0 0 0 / 0%)'
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.restore()

    ctx.beginPath()
    ctx.lineWidth = 14
    ctx.strokeStyle = '#325fa2'
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true)
    ctx.stroke()

    ctx.restore()
    window.requestAnimationFrame(draw)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>