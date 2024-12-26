<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlinx" width="200" height="200">
    <image width="40" height="40" xlink:href="/src/assets/vue.svg" />
    <image width="120" height="140" xlink:href="/src/assets/cat.webp" />
    <image x="90" y="-65" width="128" height="146" transform="rotate(45)" xlink:href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
  </svg>
  <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5, 5, 195, 10, 185, 185, 10, 195" />
    <foreignObject x="20" y="20" width="160" height="160">
      <div xmlns="http://www.w3.org/1999/xhtml">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
      mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
      imperdiet eros. Aliquam erat volutpat.
      </div>
    </foreignObject>
    <text>ddd</text>
  </svg>
</template>
<style scoped>
svg {
  margin-right: 30px;
  margin-left: 30px;
  border: 1px solid black;
}
polygon {
  fill: black;
}
div {
  color: white;
  font: 18px serif;
  height: 100%;
  overflow: auto;
}
</style>