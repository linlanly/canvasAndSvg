<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.save()
    ctx.scale(10, 3)
    ctx.fillRect(1, 10, 10, 10)
    ctx.restore()

    ctx.save()
    ctx.scale(-.7, 1)
    ctx.font = '48px serif'
    ctx.fillText('MDN', -135, 120)
    ctx.restore()

    ctx.save()
    ctx.scale(-1, -1)
    ctx.font = '22px serif'
    ctx.fillText('scale x negative and y negative', -345, -150)
    ctx.restore()
    ctx.scale(1, -2)
    ctx.font = '22px serif'
    ctx.fillText('scale y negative', 0, -100)
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