<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    for(let i = 0; i < 6; i++) {
      for(let j = 0; j < 6; j++) {
        ctx.strokeStyle = `rgba(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, ${Math.random()})`
        ctx.beginPath()
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
        ctx.stroke()
      }
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>