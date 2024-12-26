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
      for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 3;j++) {
          ctx.drawImage(image, j * 50, i * 38, 50, 38)
        }
      }
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>