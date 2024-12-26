<template>
  <svg version="1.1" baseProfile="full" width="700" height="300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="Gradient1">
        <stop offset="5%" stop-color="white" />
        <stop offset="95%" stop-color="blue" />
      </linearGradient>
      <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="5%" stop-color="orange" />
        <stop offset="95%" stop-color="green" />
      </linearGradient>
      <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
        <rect x="0" y="0" width=".25" height=".25" fill="skyblue" />
        <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)" />
        <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5" />
      </pattern>
    </defs>
    <rect x="340" y="190" width="100" height="100" fill="url(#Pattern)" />
    <text x="300" y="50" font-weight="bolder" font-size="50">hello world!</text>
    <text x="300" y="100" font-weight="bolder" font-size="50" fill="url(#Gradient1)" text-anchor="start">hello
      world!</text>
    <text x="300" y="150" font-weight="bolder" font-size="50" stroke="url(#Gradient2)" stroke-width="1"
      text-anchor="middle">hello world!</text>
    <text x="300" y="200" font-weight="bolder" font-size="50" fill="url(#Pattern)" text-anchor="end">hello world!</text>
  </svg>
  <svg version="1.1" baseProfile="full" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="20">
      <tspan font-weight="bold" fill="red">This is bold and red</tspan>
      <tspan x="30" y="30" font-weight="bold" fill="red">This is bold and red</tspan>
      <tspan dx="50" dy="50" font-weight="bold" fill="red">This is bold and red</tspan>
      <tspan x="30" y="50" rotate="30" font-weight="bold" fill="red">This is bold and red</tspan>
      <tspan x="30" y="70" rotate="30 40 50 60 70 80 90 100 110 120" font-weight="bold" fill="red">This is bold and red</tspan>
      <tspan x="30" y="100" textLength="100" font-weight="bold" fill="red">This is bold and red</tspan>
    </text>
  </svg>
  <svg version="1.1" baseProfile="full" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <text id="example">This is an example text.</text>
    </defs>
    <text x="20" y="50">
      <tref xlink:href="#example" />
    </text>
  </svg>
  <svg version="1.1" baseProfile="full" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="textPaths" d="M 20 20, C 40 40 80 40 100 20" />
    </defs>
    <text x="20" y="50">
      <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#textPaths">
        This text follows a curve
      </textPath>
    </text>
  </svg>
</template>