<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const image = new Image()
image.src = "/src/assets/cat.webp"

const HoveredColor = ref('')
const SelectedColor = ref('')

let ctx: CanvasRenderingContext2D | null
function draw() {
  const canvas = document.getElementById('tutorial')!
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    ctx = canvasDoc.getContext("2d")!

    image.onload = function () {
      ctx!.drawImage(image, 0, 0, 450, 300)
    }

    canvasDoc.addEventListener('mousemove', function (event) {
      HoveredColor.value = pick(event)
    })
    canvasDoc.addEventListener('click', function (event) {
      SelectedColor.value = pick(event)
    })
  }
}

function pick(event) {
  if (!ctx) return ''
  const x = event.layerX
  const y = event.layerY
  const pixel = ctx.getImageData(x, y, 1, 1)
  const data = pixel.data

  return `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`
}

onMounted(() => {
  draw()
})
</script>

<template>
  <canvas id="tutorial" width="450" height="300"></canvas>
  <div class="color-box">Hovered color：
    <div :style="`background-color: ${HoveredColor}`">{{ HoveredColor }}</div>
  </div>
  <div class="color-box">Selected color：
    <div :style="`background-color: ${SelectedColor}`">{{ SelectedColor }}</div>
  </div>
</template>
<style scoped>
#tutorial {
  margin-top: 10%;
  margin-left: 10%;
  transform: translate(0, 0);
}

.color-box {
  margin-top: 20px;
  display: flex;
}

.color-box> {
  padding: 10px;
}
</style>