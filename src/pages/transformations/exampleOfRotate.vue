<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.save()
    ctx.fillStyle = '#0095dd'
    ctx.fillRect(30, 30, 100, 100)
    ctx.rotate((Math.PI / 180) * 25)

    ctx.fillStyle = '#4d4e53'
    ctx.fillRect(30, 30, 100, 100)
    ctx.restore()

    ctx.fillStyle = '#0095dd'
    ctx.fillRect(150, 30, 100, 100)
    ctx.translate(200, 80)
    ctx.rotate(Math.PI * 25 / 180)
    ctx.translate(-200, -80)

    ctx.fillStyle = '#4d4e53'
    ctx.fillRect(150, 30, 100, 100)
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