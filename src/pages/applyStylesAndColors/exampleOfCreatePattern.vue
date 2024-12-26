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
      const ptrn = ctx.createPattern(image, 'repeat')
      ctx.fillStyle = ptrn!
      ctx.fillRect(0, 0, 150, 150)
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>