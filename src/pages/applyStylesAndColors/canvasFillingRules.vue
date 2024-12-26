<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.beginPath()
    ctx.arc(50, 50, 30, 0, Math.PI * 2, true)
    ctx.arc(50, 50, 15, 0, Math.PI * 2, true)
    ctx.fill('evenodd')
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>