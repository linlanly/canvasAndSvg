<script lang="ts" setup>
import { onMounted } from 'vue'
function draw() {
  const canvas = document.getElementById('tutorial')
  const canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    const ctx = canvasDoc.getContext("2d")!

    ctx.fillStyle = '#FD0'
    ctx.fillRect(0, 0, 75, 75)
    ctx.fillStyle = '#6C0'
    ctx.fillRect(75, 0, 75, 75)
    ctx.fillStyle = '#09F'
    ctx.fillRect(0, 75, 75, 75)
    ctx.fillStyle = '#F30'
    ctx.fillRect(75, 75, 75, 75)
    ctx.fillStyle = '#FFF'

    ctx.globalAlpha = .2
    for (let i = 0; i < 7; i++) {
      ctx.beginPath()
      ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true)
      ctx.fill()
    }
  }
}
onMounted(() => {draw()})
</script>

<template>
  <canvas id="tutorial" width="150" height="150"></canvas>
  <div class="opacity">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style scoped>
.opacity {
  background-color: red;
  width: 150px;
  height: 150px;
  margin: auto;
  position: relative;
}
.opacity>div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .2;
  background-color: white;
  border-radius: 50%;
}
.opacity>div:first-child {
  width: 140px;
  height: 140px;
}
.opacity>div:nth-child(2) {
  width: 120px;
  height: 120px;
}
.opacity>div:nth-child(3) {
  width: 100px;
  height: 100px;
}
.opacity>div:nth-child(4) {
  width: 80px;
  height: 80px;
}
.opacity>div:nth-child(5) {
  width: 60px;
  height: 60px;
}
.opacity>div:nth-child(6) {
  width: 40px;
  height: 40px;
}
</style>