<script lang="ts" setup>
import { onMounted } from 'vue'

const image = new Image()
image.src = '/src/assets/capitan_meadows_yosemite_national_park.jpg'

const canvasXSize = 800
const canvasYSize = 200
const speed = 30
const scale = 1.05
const y = -4.5

const dx = .75
let imgW, imgH, x = 0, clearX, clearY

image.onload = function() {
  imgW = image.width * scale
  imgH = image.height * scale
  
  if (imgW > canvasXSize) {
    x = canvasXSize - imgW
  }
  if (imgW > canvasXSize) {
    clearX = imgW
  } else {
    clearX = canvasXSize
  }
  if (imgH > canvasYSize) {
    clearX = imgH
  } else {
    clearX = canvasYSize
  }
  setInterval(draw, speed)
}

function draw() {
  const canvas = document.getElementById('tutorial')!
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!
    
    ctx.clearRect(0, 0, clearX, clearY)

    if (imgW <= canvasXSize) {
      if (x > canvasXSize) {
        x = -imgW + x
      }
      if (x > 0) {
        ctx.drawImage(image, -imgW + x, y, imgW, imgH)
      }
      if (x - imgW > 0) {
        ctx.drawImage(image, -imgW * 2 + x, y, imgW, imgH)
      }
    } else {
      if (x > canvasXSize) {
        x = canvasXSize - imgW
      }
      if (x > canvasXSize - imgW) {
        ctx.drawImage(image, x - imgW + 1, y, imgW, imgH)
      }
    }
    ctx.drawImage(image, x, y, imgW, imgH)
    x += dx
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="800" height="200"></canvas>
</template>
<style scoped>
#tutorial {
  margin-top: 0%;
  transform: translate(-60%, 10%);
}
</style>