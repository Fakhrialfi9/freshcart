<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.334 6.667v10h-10M1.667 33.334v-10h10"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.85 15A15 15 0 0130.6 9.4l7.733 7.267M1.667 23.333L9.4 30.6A15 15 0 0034.15 25"
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
  fill: inherit;
  stroke: inherit;
  stroke-linejoin: round;
  stroke-linecap: round;
}
</style>
