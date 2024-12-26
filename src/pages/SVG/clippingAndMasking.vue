<template>
  <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <clipPath id="cut-off-bottom">
        <rect x="0" y="0" width="200" height="100" />
      </clipPath>
    </defs>
    <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
  </svg>
  <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="Gradient">
        <stop offset="0" stop-color="white" stop-opacity="0" />
        <stop offset="1" stop-color="orange" stop-opacity="1" />
      </linearGradient>
      <mask id="Mask">
        <circle cx="100" cy="100" r="100" fill="url(#Gradient)" />
      </mask>
    </defs>
    <rect width="200" height="200" fill="green" />
    <rect width="200" height="200" fill="red" mask="url(#Mask)" />
  </svg>
  <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="200" height="200" fill="blue" opacity=".5" />
    <circle cx="100" cy="100" r="50" stroke="yellow" fill="red" stroke-width="40" stroke-opacity=".5" />
  </svg>
</template>