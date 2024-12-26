<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.fillRect(0, 0, 150, 150)
    ctx.save()

    ctx.fillStyle = '#00F'
    ctx.fillRect(15,15,120, 120)
    ctx.save()

    ctx.fillStyle = '#fff'
    ctx.globalAlpha = .5
    ctx.fillRect(30, 30, 90, 90)

    ctx.restore()
    ctx.fillRect(45, 45, 60, 60)

    ctx.restore()
    ctx.fillRect(60, 60, 30, 30)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>