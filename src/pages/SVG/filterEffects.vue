<template>
  <div id="info" class="info">
    <svg width="250" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="MyFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="200" height="120">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
          <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20"
            lighting-color="#bbbbbb" result="specOut">
            <fePointLight x="-5000" y="-10000" z="20000" />
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"
            result="litPaint" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="litPaint" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#MyFilter)">
        <path fill="none" stroke="#d90000" stroke-width="10"
          d="M 50 66 c -50 0 -50 -60 0 -60 h 100 c 50 0 50 60 0 60 z" />
        <path fill="#d90000" d="M 60 56 c -30 0 -30 -40 0 -40 h 80 c 30 0 30 40 0 40 z" />
        <g fill="#ffffff" stroke="black" font-size="45" font-family="Verdana">
          <text x="52" y="52">SVG</text>
        </g>
      </g>
    </svg>
    <p>dddd</p>
    <div class="border" style="color: red; font-weight: 800">ccc</div>
    <div style="color: green;background-color: purple;" class="border">SVG中的 &lt;foreignObject> 元素允许包含来自不同的 XML
      命名空间的元素。在浏览器的上下文中，很可能是 XHTML / HTML。</div>
  </div>
  <img id="contentShow" />
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
function toLowerLine(str: string): string {
  let temp = str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
  if (temp.slice(0, 6) === 'webkit') {
    temp = '-' + temp
  }
  return temp
}

type attributeType = {
  [key: string]: string | number
}
const defaultInfo = {
  zoom: '1',
  order: "0",
  display: "block",
  direction: "ltr",
  backfaceVisibility: 'visible',
  unicodeBidi: 'isolate',
  verticalAlign: 'baseline',
  viewTimelineAxis: 'block',
  visibility: 'visible',
  whiteSpaceCollapse: 'collapse',
  writingMode: 'horizontal-tb',
  boxSizing: 'content-box',
  captionSide: 'top',
  clipRule: 'nonzero',
  textWrap: 'wrap',
  textAlign: 'start',
  textAnchor: 'start',
  textEmphasisPosition: 'over',
  textOrientation: 'mixed',
  textOverflow: 'clip',
  textRendering: 'optimizelegibility',
  transformBox: 'view-box',
  position: 'static',
  positionVisibility: 'always',
  rubyAlign: 'space-around',
  rubyPosition: 'over',
  objectFit: 'fill',
  transformStyle: 'flat',
  widows: '2',
  scrollTimelineAxis: 'block',
  contentVisibility: 'visible',
  emptyCells: 'show',
  fieldSizing: 'fixed',
  hyphens: 'manual',
  imageOrientation: 'from-image',
  borderCollapse: 'separate',
  boxDecorationBreak: 'slice',
  colorInterpolation: 'srgb',
  colorInterpolationFilters: 'linearrgb',
  colorScheme: 'light dark'
}
const zeroPixelAttributes = ['x', 'y', 'cx', 'cy', 'rx', 'ry', 'r', 'baseline-shift',
  'margin', 'padding', 'wordSpacing', 'textIndent', 'scrollMargin', 'shapeMargin', 'baselineShift']
const noneStartAttributes = ['textEmphasis', 'textDecoration', 'offset', 'listStyle', 'border']
const zeroAndzero = ['borderSpacing', 'transformOrigin']
const zeroValue = ['shapeImageThreshold', 'order', 'mathDepth']
function dealAttribute(data, key: string) {
  let newKey = toLowerLine(key)
  let allWorld = newKey.split('-'), flag = true
  if (!data[key]) return '';
  if (key.startsWith('animation') && data['animationName'].startsWith("none")) return '';
  if (key.startsWith('contain') && data['containerName'].startsWith("none")) return '';
  if (key.startsWith('viewTransition') && data['viewTransitionName'].startsWith("none")) return '';
  if (key.startsWith('mask') && data['mask'].startsWith("none")) return '';
  if (key.startsWith('webkit')) return '';
  if ((key.startsWith('grid') || key === 'gap') && data.display !== 'grid') return '';
  if (key.startsWith('flex') && data.display !== 'flex') return '';
  if ((key.startsWith('align') || key.startsWith('justify') || key === 'gap') && ['flex', 'grid'].includes(data.display)) return '';
  if (key.startsWith('background') && key !== 'background' && data.backgroundImage === 'none') return '';
  if (key.startsWith('borderImage') && data.borderImage === 'none') return '';
  if (key.startsWith('stroke') && data.stroke === 'none') return '';
  if (key.startsWith('fill') && data.fill === 'rgb(0, 0, 0)') return '';
  if (data[key] === '0px' && (key.includes('Radius') || key.includes('min') || zeroPixelAttributes.includes(key))) return '';
  if (key.startsWith('column') && data.columns === 'auto auto') return '';
  if (key.startsWith('outline') && data.outlineStyle === 'none') return '';
  if (key.startsWith('overflow') && data.overflow === 'visible') return '';
  if (key.startsWith('transition') && data.transition === 'all') return '';
  if (Object.keys(defaultInfo).includes(key) && data[key] === defaultInfo[key]) return '';
  if (data[key].includes('none') && noneStartAttributes.includes(key)) return ''
  if (data[key].includes('0px 0px') && zeroAndzero.includes(key)) return ''
  if (data[key].includes('0') && zeroValue.includes(key)) return ''
  if (newKey.includes('opacity') && data[key] === '1') return ''
  if (allWorld.length > 1) {
    for (let i = 0; i < allWorld.length - 1; i++) {
      let currKey = allWorld.slice(0, i + 1).map((item, index) => {
        if (item.length < 1) {
          return ''
        }
        return (index ? item[0].toUpperCase() : item[0]) + item.slice(1)
      }).join('')
      if (data[currKey] && data[key] && data[currKey].includes(data[key])) {
        flag = false
        break;
      }
    }
  }
  if (!flag || /\d/.test(key) || ['none', 'normal', 'inhert'].includes(data[key])) return '';
  return `${newKey}:${data[key]};`
}
function toInlineStyle(doc: Element) {
  let style = document.defaultView!.getComputedStyle(doc, null)
  let styleStr = '';
  Object.keys(style).forEach(key => {
    let result = dealAttribute(style, key)
    styleStr += result
  })
  doc.style = styleStr
  let children = doc.children
  for (let i = 0; i < children.length; i++) {
    toInlineStyle(children[i])
  }
}

function svgPackageElement(doc: Element) {
  let svgNS = 'http://www.w3.org/2000/svg'
  let foreignObject = document.createElementNS(svgNS, 'foreignObject')
  foreignObject.setAttribute('width', '100%')
  foreignObject.setAttribute('height', '100%')
  toInlineStyle(doc)
  let paddingAndBorder = getPaddingAndBorder(doc)
  let dealWidth = doc.scrollWidth + paddingAndBorder.width
  let dealHeight = doc.scrollHeight + paddingAndBorder.height
  let svgBox = document.createElementNS(svgNS, 'svg')
  svgBox.setAttribute('width', dealWidth + 'px')
  svgBox.setAttribute('height', dealHeight + 'px')
  let copyDoc = doc.cloneNode(true)
  copyDoc.style.margin = '0'
  copyDoc.style.width = doc.scrollWidth + 'px'
  copyDoc.style.height = doc.scrollHeight + 'px'
  foreignObject.appendChild(copyDoc)
  svgBox.appendChild(foreignObject)
  let docStr = new XMLSerializer().serializeToString(svgBox)
  let btoaStr = btoa(unescape(encodeURIComponent(docStr)))
  let imgDoc = document.getElementById("contentShow") as HTMLImageElement
  imgDoc.src = 'data:image/svg+xml;base64,' + btoaStr
}
function getPaddingAndBorder(doc: Element) {
  let style = window.getComputedStyle(doc)
  let info = {
    width: 0,
    height: 0
  }
  let key = {
    width: ['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'],
    height: ['paddingTop', 'paddingBottom', 'borderTopWidth', 'borderBottomWidth']
  }
  type keyType = 'width' | 'height'
  Object.keys(info).forEach(item => {
    key[item as keyType].forEach((data: string) => {
      if (style[data]) {
        let num = Number(style[data].split('px')[0])
        if (!Number.isNaN(num)) {
          info[item] += num
        }
      }
    })
  })
  return info
}
onMounted(() => {
  let doc = document.getElementById('info')
  if (doc) {
    svgPackageElement(doc)
  }
})
</script>
<style lang="css">
.info {
  border: 20px solid orange;
  padding: 10px;
  width: 150px;
  height: 200px;
  overflow: auto;
}

.border {
  border: 2px solid red;
  color: purple;
  background-color: yellow;
  margin: 40px;
  padding: 20px;
}

img {
  height: 500px;
  width: 500px;
  border: 1px solid red;
  object-fit: contain;
}
</style>