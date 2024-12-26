<script lang="ts" setup>
</script>

<template>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100" stroke="rgba(0, 0, 255, .3)" fill="rgba(255, 0, 0, .5)"
      stroke-width="5" />
    <rect x="10" y="10" width="100" height="100" stroke="rgba(0, 0, 255, .3)" fill="rgba(255, 0, 0, .5)" fill-opacity=".5"
      stroke-opacity=".5" stroke-width="5" transform="translate(120)" />
  </svg>
  <br />
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt" />
    <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square" />
    <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round" />
  </svg>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polyline points="10 60 50 20 90 60" stroke="black" stroke-width="20" stroke-linecap="butt" fill="none"
      stroke-linejoin="miter" />
    <polyline points="10 120 50 80 90 120" stroke="black" stroke-width="20" stroke-linecap="round" fill="none"
      stroke-linejoin="round" />
    <polyline points="10 180 50 140 90 180" stroke="black" stroke-width="20" stroke-linecap="squre" fill="none"
      stroke-linejoin="bevel" />

    <polyline points="10 60 50 20 90 60" stroke="black" stroke-width="20" stroke-linecap="butt" transform="translate(100)"
      fill="none" stroke-linejoin="round" />
    <polyline points="10 120 50 80 90 120" stroke="black" stroke-width="20" stroke-linecap="round"
      transform="translate(100)" fill="none" stroke-linejoin="bevel" />
    <polyline points="10 180 50 140 90 180" stroke="black" stroke-width="20" stroke-linecap="squre"
      transform="translate(100)" fill="none" stroke-linejoin="miter" />

    <polyline points="10 60 50 20 90 60" stroke="black" stroke-width="20" stroke-linecap="butt" transform="translate(200)"
      fill="none" stroke-linejoin="bevel" />
    <polyline points="10 120 50 80 90 120" stroke="black" stroke-width="20" stroke-linecap="round"
      transform="translate(200)" fill="none" stroke-linejoin="miter" />
    <polyline points="10 180 50 140 90 180" stroke="black" stroke-width="20" stroke-linecap="squre"
      transform="translate(200)" fill="none" stroke-linejoin="round" />
  </svg>

  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black" stroke-linecap="round" stroke-dasharray="5,10,5"
      fill="none" />
    <path d="M 10 75 L 190 75" stroke="red" stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none" />
    <path d="M 10 75 L 90 125" stroke="red" stroke-linecap="round" stroke-width="1" stroke-dasharray="6" fill="none" />
    <path d="M 200 5 L 200 46" stroke="blue" stroke-linecap="butt" stroke-width="5" stroke-dasharray="10" fill="none" />
    <path d="M 230 5 L 230 68" stroke="blue" stroke-linecap="round" stroke-width="5" stroke-dasharray="10,10"
      fill="none" />
    <path d="M 260 5 L 260 40" stroke="blue" stroke-linecap="square" stroke-width="5" stroke-dasharray="20" fill="none" />
  </svg>
  <br />

  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" height="100" y="10" width="180" style="stroke: black;fill: red;" />
  </svg>
  <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" height="180" y="10" width="180" id="MyRect" />
  </svg>
</template>
<style scoped>
svg {
  margin-right: 10px;
  border: 1px solid black;
}

#MyRect {
  stroke: black;
  fill: red;
}

#MyRect:hover {
  stroke: black;
  fill: blue;
}</style>