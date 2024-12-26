<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    const image = new Image()
    image.src = "/src/assets/vue.svg"
    image.onload = function() {
      ctx.drawImage(image, 0, 0)
      ctx.beginPath()
      ctx.moveTo(30, 96)
      ctx.lineTo(70, 66)
      ctx.lineTo(103, 76)
      ctx.lineTo(170, 15)
      ctx.stroke()
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>