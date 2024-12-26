<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")

    for (let i = 0; i < 4; i++) {
      for(let j = 0; j < 3; j++) {
        ctx?.beginPath()
        const x = 25 + j * 50
        const y = 25 + i * 50
        const radius = 20
        const startAngle = 0
        const endAngle = Math.PI + (Math.PI * j) / 2
        const anticlockwise = i % 2 == 0 ? false : true

        ctx?.arc(x, y, radius, startAngle, endAngle, anticlockwise)
        if (i > 1) {
          ctx?.fill()
        } else {
          ctx?.stroke()
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