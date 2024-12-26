<script lang="ts" setup>
import { onMounted } from 'vue'

let canvasDoc: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null, u = 10
const m = {
  x: innerWidth / 2,
  y: innerHeight / 2
}
window.onmousemove = function(e) {
  m.x = e.clientX
  m.y = e.clientY
}
function gc() {
  const s = '0123456789ABCDEF'
  let c = '#'
  for (let i = 0; i < 6; i++) {
    c += s[Math.ceil(Math.random() * 15)]
  }
  return c
}

const a = []
function draw() {
  const canvas = document.getElementById('tutorial')!
  canvasDoc = canvas as HTMLCanvasElement
  if (canvasDoc.getContext) {
    ctx = canvasDoc.getContext("2d")!

    for (let i = 0; i < 10; i++) {
      const t = new ob(innerWidth / 2, innerHeight / 2, 5, 'red', Math.random() * 200 + 20, 2)
      a.push(t)
    }
    ctx.lineWidth = 2
    ctx.globalAlpha = .5
    resize()
    anim()
  }
}

window.onresize = function() {
  resize()
}

function resize() {
  canvasDoc!.height = innerHeight
  canvasDoc!.width = innerWidth
  for (let i = 0; i < 101; i++) {
    a[i] = new ob(innerWidth / 2, innerHeight / 2, 4, gc(), Math.random() * 200 + 20, .02)
  }

}

function ob(x: number, y: number, r: number, cc: string, o: number, s: number) {
  this.x = x
  this.y = y
  this.r = r
  this.cc = cc
  this.theta = Math.random() * Math.PI * 2
  this.s = s
  this.o = o
  this.t = Math.random() * 150

  this.dr = function() {
    const ls = {
      x: this.x,
      y: this.y
    }
    this.theta += this.s
    this.x = m.x + Math.cos(this.theta) * this.t
    this.y = m.y + Math.sin(this.theta) * this.t

    ctx!.beginPath()
    ctx!.lineWidth = this.r
    ctx!.strokeStyle = this.cc
    ctx!.moveTo(ls.x, ls.y)
    ctx!.lineTo(this.x, this.y)
    ctx!.stroke()
    ctx!.closePath()
  }
}

function anim() {
  requestAnimationFrame(anim)
  ctx!.fillStyle = 'rgba(0, 0, 0, .05)'
  ctx!.fillRect(0, 0, canvasDoc!.width, canvasDoc!.height)
  a.forEach(function(e, i) {
    e.dr()
  })
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