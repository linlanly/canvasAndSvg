<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")

    ctx?.beginPath()
    ctx?.moveTo(25, 25)
    ctx?.lineTo(105, 25)
    ctx?.lineTo(25, 105)
    ctx?.fill()

    // ctx?.beginPath()
    ctx?.moveTo(125, 125)
    ctx?.lineTo(125, 45)
    ctx?.lineTo(45, 125)
    ctx?.closePath()
    ctx?.stroke()
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>