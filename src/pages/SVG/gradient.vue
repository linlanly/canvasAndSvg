<script lang="ts" setup>
</script>

<template>
  <svg version="1.1" baseProfile="full" width="120" height="360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="Gradient1">
        <stop class="stop1" offset="0%" />
        <stop class="stop2" offset="50%" />
        <stop class="stop3" offset="100%" />
      </linearGradient>
      <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
        <stop stop-color="red" offset="0%" />
        <stop stop-color="black" stop-opacity="0" offset="50%" />
        <stop stop-color="blue" offset="100%" />
      </linearGradient>
      <linearGradient id="Gradient3" x1="0" x2="1" y1="0" y2="1" xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#Gradient1">
        <stop stop-color="red" offset="0%" />
        <stop stop-color="black" stop-opacity="0" offset="50%" />
        <stop stop-color="blue" offset="100%" />
      </linearGradient>
    </defs>
    <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
    <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)" />
    <rect x="10" y="240" rx="15" ry="15" width="100" height="100" fill="url(#Gradient3)" />
  </svg>
  <svg version="1.1" baseProfile="full" width="120" height="360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="RadialGradient1">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="yellow" />
      </radialGradient>
      <radialGradient id="RadialGradient2" cx=".25" cy=".25" r=".25">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
    </defs>
    <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient1)" />
    <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient2)" />
    <rect x="10" y="240" width="100" height="100" fill="url(#RadialGradient1)" />
  </svg>
  <svg version="1.1" baseProfile="full" width="120" height="360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="Gradient" cx=".5" cy=".5" r=".5" fx=".25" fy=".25">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
      <radialGradient id="ReatGradient1" cx=".5" cy=".5" r=".5" fx=".15" fy=".15">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
      <radialGradient id="ReatGradient2" cx=".5" cy=".5" r=".5" fx=".10" fy=".10">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
    </defs>
    <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#Gradient)" stroke="black" stroke-width="2" />
    <circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2" />
    <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
    <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
    <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">(fx, fy)</text>
    <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx, cy)</text>

    <g transform="translate(0, 110)">
      <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#ReatGradient1)" stroke="black"
        stroke-width="2" />
      <circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2" />
      <circle cx="24.55" cy="24.55" r="2" fill="white" stroke="white" />
      <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
      <text x="28" y="30" fill="white" font-family="sans-serif" font-size="10pt">(fx, fy)</text>
      <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx, cy)</text>
    </g>
    <g transform="translate(0, 220)">
      <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#ReatGradient2)" stroke="black"
        stroke-width="2" />
      <circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2" />
      <circle cx="15" cy="15" r="2" fill="white" stroke="white" />
      <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
      <text x="18" y="20" fill="white" font-family="sans-serif" font-size="10pt">(fx, fy)</text>
      <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx, cy)</text>
    </g>
  </svg>
  <svg version="1.1" baseProfile="full" width="120" height="360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="GradientPad" cx=".5" cy=".5" r=".4" fx=".75" fy=".75" spreadMethod="pat">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
      <radialGradient id="GradientRepeat" cx=".5" cy=".5" r=".4" fx=".75" fy=".75" spreadMethod="repeat">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
      <radialGradient id="GradientReflect" cx=".5" cy=".5" r=".4" fx=".75" fy=".75" spreadMethod="reflect">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
    </defs>
    <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#GradientPad)" />
    <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientRepeat)" />
    <rect x="10" y="240" rx="15" ry="15" width="100" height="100" fill="url(#GradientReflect)" />
    <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">Pad</text>
    <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">Repeat</text>
    <text x="15" y="260" fill="white" font-family="sans-serif" font-size="12pt">Reflect</text>
  </svg>
</template>
<style scoped>
svg {
  margin-right: 10px;
  border: 1px solid black;
}

#rect1 {
  fill: url(#Gradient1);
}

.stop1 {
  stop-color: red;
}

.stop2 {
  stop-color: black;
  stop-opacity: 0;
}

.stop3 {
  stop-color: blue;
}</style>