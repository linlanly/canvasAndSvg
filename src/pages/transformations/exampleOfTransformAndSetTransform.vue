<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    const sin = Math.sin(Math.PI / 6)
    const cos = Math.cos(Math.PI / 6)
    ctx.translate(100, 100)
    let c = 0
    for (let i = 0; i <= 12; i++) {
      c = Math.floor(255 / 12) * i
      ctx.fillStyle = `rgb(${c}, ${c}, ${c})`
      ctx.fillRect(0, 0, 100, 10)
      ctx.transform(cos, sin, -sin, cos, 0, 0)
    }

    ctx.setTransform(-1, 0, 0, 1, 100, 100)
    ctx.fillStyle = 'rgba(255, 128, 255, .5)'
    ctx.fillRect(0, 50, 100, 100)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="350" height="350"></canvas>
</template>
<style scoped>
#tutorial {
  margin-top: 10%;
  transform: translateY(10%);
}
</style>