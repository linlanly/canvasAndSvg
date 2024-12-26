<template>
  <svg width="300" height="300">
    <title>Attribute Animation with SMIL</title>
    <rect width="300" height="100" stroke="black" stroke-width="1" />
    <circle cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
      <animate attributeName="cx" from="0" to="500" dur="5s" repeatCount="indefinite" />
    </circle>
  </svg>
  <svg width="300" height="100">
    <title>SVG sMIL Animate with transform</title>
    <rect width="300" height="100" stroke="black" stroke-width="1" />
    <rect y="50" width="15" height="34" fill="blue" stroke="black" stroke-width="1">
      <animateTransform attributeName="transform" begin="0" dur="20s" type="rotate" from="0 60 60" to="360 100 60"
        repeatCount="indefinite" />
    </rect>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
    <title>SVG SMIL Animate with Path</title>
    <rect width="300" height="100" stroke="black" stroke-width="1" />
    <circle cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
      <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
  <svg width="300" height="300">
    <title>SVG SMIL Animate with Path</title>
    <rect width="300" height="100" stroke="black" stroke-width="1" />
    <rect width="20" height="20" fill="blue" stroke="black" stroke-width="1">
      <animateMotion path="M 250 80 H 50 Q 30 80 30 50 Q 30 20 50 20 H 250 Q 280 20 280 50 Q 280 80 250 80 Z" dur="3s"
        repeatCount="indefinite" rotate="auto" />
    </rect>
  </svg>
</template>