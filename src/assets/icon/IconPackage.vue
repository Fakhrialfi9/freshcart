<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.5 15.667l-15-8.65M35 26.667V13.333a3.333 3.333 0 00-1.667-2.883L21.667 3.784a3.334 3.334 0 00-3.334 0L6.667 10.45A3.333 3.333 0 005 13.334v13.333a3.333 3.333 0 001.667 2.883l11.666 6.667a3.333 3.333 0 003.334 0l11.666-6.667A3.334 3.334 0 0035 26.667z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.45 11.6L20 20.017 34.55 11.6M20 36.8V20"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<style scoped>
a {
  display: flex;
  place-items: center;
  place-content: center;
  color: inherit;
  font-size: inherit;
}

a > svg > path {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: inherit;
  padding: inherit;
  stroke-width: inherit;
  fill: transparent;
  stroke: inherit;
  stroke-linejoin: round;
  stroke-linecap: round;
}
</style>
