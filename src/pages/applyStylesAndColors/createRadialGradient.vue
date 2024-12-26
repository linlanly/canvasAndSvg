<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    const radgrad = ctx.createRadialGradient(45, 45, 30, 92, 25, 10)
    radgrad.addColorStop(0, '#a7d30c')
    radgrad.addColorStop(.1, '#019f62')
    radgrad.addColorStop(1, 'red')

    const radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50)
    radgrad2.addColorStop(0, '#ff5f98')
    radgrad2.addColorStop(.75, '#ff0188')
    radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)')

    const radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40)
    radgrad3.addColorStop(0, '#00c9ff')
    radgrad3.addColorStop(.8, '#00b5e2')
    radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)')

    const radgrad4 = ctx.createRadialGradient(0, 150, 20, 0, 150, 90)
    radgrad4.addColorStop(0, '#ff0000')
    radgrad4.addColorStop(.8, '#e4c700')
    radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)')

    ctx.fillStyle = radgrad
    ctx.fillRect(0, 0, 150, 150)
    ctx.beginPath()
    ctx.arc(45, 45, 30, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(92, 25, 10, 0, Math.PI * 2, true)
    ctx.stroke()
    
    ctx.fillStyle = radgrad3
    ctx.fillRect(0, 0, 150, 150)
    ctx.fillStyle = radgrad2
    ctx.fillRect(0, 0, 150, 150)
    ctx.fillStyle = radgrad4
    ctx.fillRect(0, 0, 150, 150)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>