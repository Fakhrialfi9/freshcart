<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M33.333 20v16.667H6.667V20m30-8.334H3.333V20h33.334v-8.334zM20 36.666v-25"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 11.667h-7.5a4.167 4.167 0 010-8.334c5.834 0 7.5 8.334 7.5 8.334zm0 0h7.5a4.167 4.167 0 100-8.334c-5.833 0-7.5 8.334-7.5 8.334z"
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
