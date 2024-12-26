<script setup lang="ts">
import { ref } from 'vue'
const size = ref(.25)
function toggleRadius() {
  size.value = .4 - size.value
}
</script>
<template>
  <svg height="0">
    <mask id="mask-1">
      <linearGradient id="gradient-1" y2="1">
        <stop stop-color="white" offset="0" />
        <stop stop-opacity="0" offset="1" />
      </linearGradient>
      <circle cx=".25" cy=".25" r=".25" id="circle" fill="white" />
      <rect x=".5" y=".2" width="300" height="100" fill="url(#gradient-1)" />
    </mask>
  </svg>
  <p class="target" style="background:lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="target">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
  </p>
  <p class="clip" style="background:lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="clip">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
  </p>

  <button @click="toggleRadius()">Toggle radius</button>
  <svg height="0">
    <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
      <circle cx=".25" cy=".25" :r="size" id="circle"></circle>
      <rect x=".5" y=".2" width=".5" height=".8" />
    </clipPath>
  </svg>
  <br />
  <p class="filter" style="background: lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  </p>
  <pre class="filter">lorem</pre>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="filter">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
  </p>
  <svg height="0">
    <filter id="f1">
      <feGaussianBlur stdDeviation="3" />
    </filter>
    <filter id="f2">
      <feColorMatrix values=".3333 .3333 .3333 0 0
        .3333 .3333 .3333 0 0
        .3333 .3333 .3333 0 0
        0     0     0     1 0" />
    </filter>
    <filter id="f3">
      <feConvolveMatrix filterRes="100 100" style="color-interpolation-filters:sRGB" order="3" 
      kernelMatrix="0 -1 0 -1 4 -1 0 -1 0" preserveAlpha="true" />
    </filter>
    <filter id="f4">
      <feSpecularLighting surfaceScale="5" specularConstant="1" specularExponent="10" lighting-color="white">
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
    </filter>
    <filter id="f5">
      <feColorMatrix values="1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 1 0 0 0" style="color-interpolation-fliters: sRGB" />
    </filter>
  </svg>
  <br />
  <p class="blur">Time to clean my glasses</p>
  <svg height="0">
    <defs>
      <filter id="wherearemyglasses" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>
    </defs>
  </svg>
  <svg height="60" width="200">
    <text x="0" y="15" fill="blue" transform="rotate(30 20, 50)">Example text</text>
  </svg>
</template>
<style>
.target {
  mask: url(#mask-1);
}

p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}

.clip {
  clip-path: url(#clipping-path-1);
}
p.filter {
  filter: url(#f3);
}
p.filter:hover {
  filter: url(#f5);
}
b.filter {
  filter: url(#f1);
}
b.filter:hover {
  filter: url(#f4);
}
pre.filter {
  filter: url(#f2);
}
pre.filter:hover {
  filter: url(#f3);
}

.blur {
  filter: url(#wherearemyglasses);
}
</style>