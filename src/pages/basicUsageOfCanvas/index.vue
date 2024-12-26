<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")

    ctx!.fillStyle = "rgb(200, 0, 0)"
    ctx!.fillRect(10, 10, 55, 50)

    ctx!.fillStyle = 'rgba(0, 0, 200, .5)'
    ctx?.fillRect(30, 30, 55, 50)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>