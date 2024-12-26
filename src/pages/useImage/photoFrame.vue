<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    const imgFrame = '/src/assets/photoFrame.png'
    const imgHeader = '/src/assets/cat.webp'
    
    Promise.all([onImage(imgFrame),onImage(imgHeader)]).then((result: Array<HTMLImageElement>) => {
      ctx.drawImage(result[1], 84, 68, 180, 180, 25, 25.2, 50, 70.5)
      ctx.drawImage(result[0], 0, 0, 100, 120)
    })
  }
}
function onImage(url: string) {
  return new Promise((resovle, reject) => {
    const image = new Image()
    image.src = url
    image.onload = function() {
      resovle(image)
    }
    image.onerror = function() {
      reject('图片加载失败')
    }
  })
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>