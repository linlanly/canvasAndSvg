<script lang="ts" setup>
import { onMounted } from 'vue'
let offset = 0
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.clearRect(0, 0, 150, 150)
    ctx.setLineDash([4, 20])
    ctx.lineDashOffset = -offset
    ctx.strokeRect(10, 10, 100, 100)
  }
}

function march() {
  offset++
  if (offset > 16) {
    offset = 0
  }
  draw()
  setTimeout(march, 20);
}
onMounted(() => {march()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>