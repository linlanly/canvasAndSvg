<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")

    ctx?.beginPath()
    ctx?.moveTo(75, 25)
    ctx?.quadraticCurveTo(25, 25, 25, 62.5)
    ctx?.quadraticCurveTo(25, 100, 50, 100)
    ctx?.quadraticCurveTo(50, 120, 30, 125)
    ctx?.quadraticCurveTo(60, 120, 65, 100)
    ctx?.quadraticCurveTo(125, 100, 125, 62.5)
    ctx?.quadraticCurveTo(125, 25, 75, 25)
    ctx?.stroke()
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>