<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const image = new Image(), canvasWidth = 450, canvasHeight = 300
image.src = "/src/assets/cat.webp"

const typeList = ['Original', 'Grayscale', 'Inverted', 'Sepia']
const currentType = ref('Original')

let ctx: CanvasRenderingContext2D | null

const typeMethod = {
  Original: () => {
    if (!ctx) return;
    ctx!.drawImage(image, 0, 0, canvasWidth, canvasHeight)
  },
  Grayscale: () => {
    if (!ctx) return;
    ctx!.drawImage(image, 0, 0, canvasWidth, canvasHeight)
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
    const data = imageData.data
    for(let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
      data[i] = data[i + 1] = data[i + 2] = avg
    }
    ctx.putImageData(imageData, 0, 0)
  },
  Inverted: () => {
    if (!ctx) return;
    ctx!.drawImage(image, 0, 0, canvasWidth, canvasHeight)
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
    const data = imageData.data
    for(let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]
      data[i + 1] = 255 - data[i + 1]
      data[i + 2] = 255 - data[i + 2]
    }
    ctx.putImageData(imageData, 0, 0)
  },
  Sepia() {
    if (!ctx) return;
    ctx!.drawImage(image, 0, 0, canvasWidth, canvasHeight)
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
    const data = imageData.data
    for(let i = 0; i < data.length; i += 4) {
      let red = data[i], green = data[i + 1], blue = data[i + 2]
      data[i] = Math.min(Math.round(.393 * red + .769 * green + .189 * blue), 255)
      data[i + 1] = Math.min(Math.round(.349 * red + .686 * green + .168 * blue), 255)
      data[i + 2] = Math.min(Math.round(.272 * red + .534 * green + .131 * blue), 255)
    }
    ctx.putImageData(imageData, 0, 0)
  }
}
function draw() {
  const canvas = document.getElementById('tutorial')!
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    ctx = canvasDoc.getContext("2d")!

    image.onload = function () {
      ctx!.drawImage(image, 0, 0, canvasWidth, canvasHeight)
    }

  }
}

function changeType(data: string) {
  currentType.value = data
  if (typeof typeMethod[data] === 'function') {
    typeMethod[data]()
  } else {
    typeMethod.Original()
  }
}

onMounted(() => {
  draw()
})
</script>

<template>
  <canvas id="tutorial" :width="canvasWidth" :height="canvasHeight"></canvas>
  <div v-for="item in typeList" :key="item">
    <input type="radio" :value="item" :checked="item === currentType" @click="changeType(item)" name="type" />{{ item }}
  </div>
</template>
<style scoped>
#tutorial {
  margin-top: 10%;
  margin-left: 10%;
  transform: translate(0, 0);
}
</style>