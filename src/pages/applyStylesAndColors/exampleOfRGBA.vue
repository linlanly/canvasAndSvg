<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.fillStyle = 'rgb(255, 221, 0)'
    ctx.fillRect(0, 0, 150, 37.5)
    ctx.fillStyle = 'rgb(102, 204, 0)'
    ctx.fillRect(0, 37.5, 150, 37.5)
    ctx.fillStyle = 'rgb(0, 135, 255)'
    ctx.fillRect(0, 75, 150, 37.5)
    ctx.fillStyle = 'rgb(255, 51, 0)'
    ctx.fillRect(0, 112.5, 150, 37.5)

    for (let i = 0; i < 10; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${(i + 1) / 10})`
      for (let j = 0; j < 4; j++) {
        ctx.fillRect(5 + i * 14, 5 + j *37.5, 14, 27.5)
      }
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>