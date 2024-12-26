<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")

    ctx?.beginPath()
    ctx?.arc(75, 75, 50,0, Math.PI * 2, true)
    ctx?.moveTo(110, 75)
    ctx?.arc(75, 75, 35,0, Math.PI)
    ctx?.moveTo(65, 65)
    ctx?.arc(60, 65, 5, 0, Math.PI * 2, true)
    ctx?.moveTo(95, 65)
    ctx?.arc(90, 65, 5, 0, Math.PI * 2, true)
    ctx?.stroke()
  }
}

onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>