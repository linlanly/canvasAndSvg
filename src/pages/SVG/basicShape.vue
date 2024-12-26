<script lang="ts" setup>
</script>

<template>
  <svg version="1.1" baseProfile="full" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" stroke="black" fill="none" stroke-width="5" />
    <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="transparent" stroke="black" stroke-width="5" />
    <rect x="60" y="10" rx="30" ry="10" width="30" height="30" transform="translate(50, 0)" fill="transparent" stroke="black" stroke-width="5" />
    <rect x="60" y="10" rx="10" ry="50" width="30" height="30" transform="translate(100, 0)" fill="transparent" stroke="black" stroke-width="5" />
    <circle cx="25" cy="75" r="20" stroke="red" stroke-width="5" fill="transparent" />
    <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" stroke-width="5" fill="transparent" />
    <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5" fill="transparent" />
    <polyline points="60 110 65 120 70 115 130 80 125 85 140 90 135 95 30 180 45" stroke="green" stroke-width="5" fill="transparent" />
    <polyline points="60, 110 65, 120 70, 115 130, 80 125, 85 140, 90 135, 95 30, 180 45, 180" stroke="green" transform="translate(80, 0)" stroke-width="5" fill="transparent" />
    <polyline points="60 110, 65 120, 70 115, 130 80, 125 85, 140 90, 135 95, 30 180, 45 180" stroke="green" stroke-width="5" transform="translate(160, 0)" fill="transparent" />
    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" stroke="red" fill="yellow" stroke-width="10" />
    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" transform="translate(80, 0)" stroke="red" fill="yellow" stroke-width="5" />
    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" transform="translate(160, 0)" stroke="red" fill="yellow" stroke-width="0" />
    <path d="M20,230 Q40,205 50,230 T90,230" stroke="blue" stroke-width="5" fill="transparent" />
  </svg>
</template>
<style scoped>
svg {
  margin-right: 10px;
  border: 1px solid black;
  background-color: purple;
}
</style>