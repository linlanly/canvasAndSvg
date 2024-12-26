<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const miterLimit = ref(10)
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.clearRect(0, 0, 150, 150)
    ctx.strokeStyle = '#09f'
    ctx.lineWidth = 2
    ctx.strokeRect(-5, 50, 160, 50)

    ctx.strokeStyle = '#000'
    ctx.lineWidth = 10

    ctx.miterLimit = miterLimit.value

    ctx.beginPath()
    ctx.moveTo(0, 100)
    for(let i = 0; i < 24; i++) {
      const dy = i % 2 == 0 ? 25 : -25
      ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy)
    }
    ctx.stroke()
    return false
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
  <input type="number" v-model="miterLimit" />
  <button @click="draw">重绘</button>
</template>