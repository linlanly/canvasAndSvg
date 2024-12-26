<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.font = '18px serif'
    ctx.fillText('Hello world', 170, 20)

    ctx.textAlign = 'end'
    ctx.strokeText('text align end', 170, 40)

    ctx.textAlign = 'left'
    ctx.strokeText('text align left', 170, 60)

    ctx.textAlign = 'right'
    ctx.strokeText('text align right', 170, 80)

    ctx.textAlign = 'center'
    ctx.strokeText('text align center', 170, 100)

    ctx.textBaseline = 'top'
    ctx.strokeText('text base line top', 170, 120)

    ctx.textBaseline = 'hanging'
    ctx.strokeText('text base line hanging', 170, 140)

    ctx.textBaseline = 'middle'
    ctx.strokeText('text base line middle', 170, 160)

    ctx.textBaseline = 'alphabetic'
    ctx.strokeText('text base line alphabetic', 170, 180)

    ctx.textBaseline = 'ideographic'
    ctx.strokeText('text base line ideographic', 170, 200)

    ctx.textBaseline = 'bottom'
    ctx.strokeText('text base line bottom', 170, 220)

    ctx.direction = 'rtl'
    ctx.strokeText('direction rtl', 170, 240)

    ctx.direction = 'ltr'
    ctx.strokeText('direction ltr', 170, 260)

  }
}
onMounted(() => { draw() })
</script>

<template>
  <canvas id="tutorial" width="350" height="350" style="margin-top: 40%;"></canvas>
</template>