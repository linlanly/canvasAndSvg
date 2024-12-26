<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")
    
    const rectangle = new Path2D()
    rectangle.rect(10, 10, 50, 50)

    const circle = new Path2D()
    circle.moveTo(125, 35)
    circle.arc(100, 35, 25, 0, 2 * Math.PI)

    ctx?.stroke(rectangle)
    ctx?.fill(circle)

    const svgPath = new Path2D("M 10 10 h 80 v 80 h -80 z")
    ctx?.stroke(svgPath)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>