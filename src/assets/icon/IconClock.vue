<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.666-16.667-16.666-9.205 0-16.666 7.461-16.666 16.666S10.795 36.667 20 36.667z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 10v10l6.667 3.333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<style scoped>
a {
  display: flex !important;
  place-items: center !important;
  place-content: center !important;
  color: inherit !important;
  font-size: inherit !important;
}

a > svg > path {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: inherit !important;
  padding: inherit !important;
  stroke-width: inherit !important;
  fill: transparent !important;
  stroke: inherit !important;
  stroke-linejoin: round !important;
  stroke-linecap: round !important;
}
</style>
