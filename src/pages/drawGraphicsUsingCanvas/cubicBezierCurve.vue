<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")

    ctx?.beginPath()
    ctx?.moveTo(75, 40)
    ctx?.bezierCurveTo(75, 37, 70, 25, 50, 25)
    ctx?.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
    ctx?.bezierCurveTo(20, 80, 40, 102, 75, 120)
    ctx?.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
    ctx?.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
    ctx?.bezierCurveTo(85, 25, 75, 37, 75, 40)
    ctx?.stroke()
    
    ctx?.rect(20, 25, 110, 95)
    ctx?.lineTo(10, 15)
    ctx?.stroke()
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>