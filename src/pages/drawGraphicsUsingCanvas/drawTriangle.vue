<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")

    ctx?.beginPath()
    ctx?.moveTo(75, 50)
    ctx?.lineTo(100, 75)
    ctx?.lineTo(100, 25)
    ctx?.fill()
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>