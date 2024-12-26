<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    const lineJoin = ['round', 'bevel', 'miter']
    
    ctx.lineWidth = 10

    for(let i = 0; i < lineJoin.length; i++) {
      ctx.lineWidth = 15
      ctx.lineJoin = lineJoin[i]
      ctx.beginPath()
      ctx.moveTo(-5, 5 + i * 40)
      ctx.lineTo(35, 45 + i * 40)
      ctx.lineTo(75, 5 + i * 40)
      ctx.lineTo(115, 45 + i * 40)
      ctx.lineTo(155, 5 + i * 40)
      ctx.stroke()
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>