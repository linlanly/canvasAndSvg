<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    for(let i = 0; i < 10; i++) {
      ctx.lineWidth = 1 + i
      ctx.beginPath()
      ctx.moveTo(5 + i * 14, 5)
      ctx.lineTo(5 + i * 14, 140)
      ctx.stroke()
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>