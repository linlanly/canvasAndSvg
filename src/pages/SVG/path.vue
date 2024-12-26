<script lang="ts" setup>
const cubicBezierCurve = [
 [[10, 10], [20, 20], [40, 20], [50, 10]],
 [[70, 10], [70, 20], [110, 20], [110, 10]],
 [[130, 10], [120, 20], [180, 20], [170, 10]],
 [[10, 60], [20, 80], [40, 80], [50, 60]],
 [[70, 60], [70, 80], [110, 80], [110, 60]],
 [[130, 60], [120, 80], [180, 80], [170, 60]],
 [[10, 110], [20, 140], [40, 140], [50, 110]],
 [[70, 110], [70, 140], [110, 140], [110, 110]],
 [[130, 110], [120, 140], [180, 140], [170, 110]]
]
</script>

<template>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="m10 10" />
    <circle cx="10" cy="10" r="2" fill="red" />
  </svg>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 10 H 90 V 90 H 10 L 10 10" />
    <circle cx="10" cy="10" r="2" fill="red" />
    <circle cx="90" cy="10" r="2" fill="red" />
    <circle cx="90" cy="90" r="2" fill="red" />
    <circle cx="10" cy="90" r="2" fill="red" />
  </svg>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 10 H 90 V 90 H 10 Z 0 M 40 40 L 130 140 h 40 v -40 Z"  fill="none" stroke="black" />
    <circle cx="10" cy="10" r="2" fill="red" />
    <circle cx="90" cy="10" r="2" fill="red" />
    <circle cx="90" cy="90" r="2" fill="red" />
    <circle cx="10" cy="90" r="2" fill="red" />
    
    <path d="m 10 10 h 90 v 90 h -10 l 10 10 m 20 20 l 10 10" fill="none" stroke="green" />
  </svg>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path :d="`M ${item[0].join(' ')} C ${item[1].join(' ')}, ${item[2].join(' ')} ${item[3].join(' ')}`" stroke="black" fill="transparent" v-for="(item, index) in cubicBezierCurve" :key="index" />
    <circle :cx="item[0][0]" :cy="item[0][1]" r="2" fill="red" v-for="(item, index) in cubicBezierCurve" :key="'circle1' + index" />
    <circle :cx="item[1][0]" :cy="item[1][1]" r="2" fill="red" v-for="(item, index) in cubicBezierCurve" :key="'circle2' + index" />
    <circle :cx="item[2][0]" :cy="item[2][1]" r="2" fill="red" v-for="(item, index) in cubicBezierCurve" :key="'circle3' + index" />
    <circle :cx="item[3][0]" :cy="item[3][1]" r="2" fill="red" v-for="(item, index) in cubicBezierCurve" :key="'circle4' + index" />
    <line :x1="item[0][0]" :x2="item[1][0]" :y1="item[0][1]" :y2="item[1][1]" stroke="red" stroke-width="1" v-for="(item, index) in cubicBezierCurve" :key="'circle1' + index" />
    <line :x1="item[2][0]" :x2="item[3][0]" :y1="item[2][1]" :y2="item[3][1]" stroke="red" stroke-width="1" v-for="(item, index) in cubicBezierCurve" :key="'circle1' + index" />
  </svg>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 100 80" stroke="black" fill="transparent" />
  </svg>
  <br />
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
  </svg>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent" />
  </svg>
  <br />
  <svg version="1.1" baseProfile="full" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 315 
             L 110 215 
             A 30 50 0 0 1 162.55 162.45 
             L 172.55 152.45 
             A 30 50 -45 0 1 215.1 109.9 
             L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity=".5" />
  </svg>
  <svg version="1.1" baseProfile="full" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 315 
             L 110 215 
             A 36 60 0 0 1 150.71 170.29
             L 172.55 152.45 
             A 30 50 -45 0 1 215.1 109.9 
             L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity=".5" />
    <circle cx="150.71" cy="170.29" r="2" fill="red" />
    <circle cx="110" cy="215" r="2" fill="red" />
    <ellipse cx="144.931" cy="229.512" rx="36" ry="60" fill="transparent" stroke="blue" />
    <ellipse cx="115.779" cy="155.778" rx="36" ry="60" fill="transparent" stroke="blue" />
  </svg>
  <svg version="1.1" baseProfile="full" width="325" height="325" xmlns="http://www.w3.org/2000/svg">
    <path d="M 80 80
      A 45 45, 0, 0, 0, 125 125
      L 125 80 Z" fill="green" />
    <path d="M 230 80
      A 45 45, 0, 1, 0, 275 125
      L 275 80 Z" fill="red" />
    <path d="M 80 230
      A 45 45, 0, 0, 1, 125 275
      L 125 230 Z" fill="purple" />
    <path d="M 230 230
      A 45 45, 0, 1, 1, 275 275
      L 275 230 Z" fill="blue" />
  </svg>
</template>
<style scoped>
svg {
  margin-right: 10px;
  border: 1px solid black;
}
</style>