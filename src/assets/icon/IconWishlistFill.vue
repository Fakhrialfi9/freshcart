<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-suit-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"
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
