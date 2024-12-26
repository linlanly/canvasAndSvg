<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.shadowOffsetX = 20
    ctx.shadowOffsetY = 20
    ctx.shadowBlur = 5
    ctx.shadowColor = 'rgba(0, 0, 0, .5)'
    ctx.font = "20px Times New Roman"
    ctx.fillStyle = 'Black'
    ctx.fillText('Sample String', 5, 30)

    ctx.shadowColor = 'rgba(255, 255, 0, .3)'
    ctx.fillRect(45, 45, 20, 20)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>