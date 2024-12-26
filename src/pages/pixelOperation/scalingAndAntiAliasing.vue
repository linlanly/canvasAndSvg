<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const enableSmoothing = ref(true)
const image = new Image(), canvasWidth = 450, canvasHeight = 300
image.src = "/src/assets/cat.webp"

let canvasDoc: HTMLCanvasElement | null
let ctx: CanvasRenderingContext2D | null

function draw() {
  const canvas = document.getElementById('tutorial')!
  canvasDoc = canvas as HTMLCanvasElement

  const zoom = document.getElementById('scaling')
  const zoomDoc = zoom as HTMLCanvasElement
  if (canvasDoc.getContext) {
    ctx = canvasDoc.getContext("2d")!
    const zoomCtx = zoomDoc.getContext('2d')!

    image.onload = function () {
      ctx!.drawImage(image, 0, 0, canvasWidth, canvasHeight)
    }

    canvasDoc.addEventListener('mousemove', function(e) {
      zoomCtx.imageSmoothingEnabled = enableSmoothing.value
      const x = e.layerX
      const y = e.layerY
      zoomCtx.drawImage(canvasDoc, Math.abs(x - 5), Math.abs(y - 5), 10, 10, 0, 0, 200, 200)
    })
  }
}

function changeStatus() {
  enableSmoothing.value = !enableSmoothing.value
}

function saveImage() {
  if (canvasDoc) {
    let data = canvasDoc.toDataURL('image/png', 1)
    const a = document.createElement('a')
    a.href = data
    a.download = '下载'
    a.click()
  }
}

onMounted(() => {
  draw()
})
</script>

<template>
  <label for="smoothbtn" class="enable-smoothing">
    <input type="checkbox" name="smoothbtn" :checked="enableSmoothing" @click="changeStatus" />
    Enable image smoothing
  </label>
  <button @click="saveImage">保存图片</button>
  <canvas id="tutorial" :width="canvasWidth" :height="canvasHeight"></canvas>
  <canvas id="scaling"></canvas>
</template>
<style scoped>
#tutorial {
  margin-top: 10px;
  margin-left: 10%;
  transform: translate(0, 0);
}
#scaling {
  margin-top: 24%;
}
.enable-smoothing {
  display: inline-block;
  margin-top: -1000px;
}
</style>