<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    const lingrad = ctx.createLinearGradient(20, 20, 130, 130)
    lingrad.addColorStop(0, '#00abeb')
    lingrad.addColorStop(.5, '#fff')
    lingrad.addColorStop(.5, '#26c000')
    lingrad.addColorStop(1, '#fff')

    const lingrad2 = ctx.createLinearGradient(0, 50, 0, 95)
    lingrad2.addColorStop(.5, '#000')
    lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)')

    ctx.fillStyle = lingrad
    ctx.strokeStyle = lingrad2
    
    ctx.fillRect(10, 10, 130, 130)
    ctx.strokeRect(50, 50, 50, 50)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>