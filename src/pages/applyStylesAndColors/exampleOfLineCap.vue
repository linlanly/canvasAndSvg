<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    const lineCap = ['butt', 'round', 'square']
    
    ctx.strokeStyle = '#09f'
    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(140, 10)
    ctx.moveTo(10, 140)
    ctx.lineTo(140, 140)
    ctx.stroke()

    ctx.strokeStyle = 'black'
    for(let i = 0; i < lineCap.length; i++) {
      ctx.lineWidth = 15
      ctx.lineCap = lineCap[i]
      ctx.beginPath()
      ctx.moveTo(25 + i * 50, 10)
      ctx.lineTo(25 + i * 50, 140)
      ctx.stroke()
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>