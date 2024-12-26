<script lang="ts" setup>
import { onMounted } from 'vue'

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

function draw() {
  const parentDoc = document.getElementById('gallery')
  const imgFrame = 'photoFrame.png'
  const imgPre = '/src/assets/'
  for (let i = 1; i < 9; i++) {
    const canvas = document.createElement('canvas')
    canvas.width = 132
    canvas.height = 150
    const ctx = canvas.getContext('2d')!
    // ctx.imageSmoothingEnabled = false
    Promise.all([onImage(imgPre + imgFrame),onImage(`${imgPre}gallery_${i}.jpg`)]).then(result => {
      ctx?.drawImage(result[1], 15, 20)
      ctx?.drawImage(result[0], 0, 0, 132, 150)
    })
    parentDoc?.appendChild(canvas)
  }
}
onMounted(() => {draw()})
</script>

<template>
  <div class="gallery" id="gallery"></div>
</template>
<style scoped>
.gallery {
  width: calc(100% - 160px);
  height: calc(100% - 160px);
  background-image: url(/src/assets/bg_gallery.png);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 80px;
  overflow: hidden;
}
</style>