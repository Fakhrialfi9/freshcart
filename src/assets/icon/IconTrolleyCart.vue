<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-cart"
      viewBox="0 0 16 16"
    >
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
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
  fill: inherit !important;
  font-size: inherit !important;
}

a > svg {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: inherit !important;
  padding: inherit !important;
  stroke-width: inherit !important;
  stroke: currentColor !important;
  stroke-linejoin: round !important;
  stroke-linecap: round !important;
}
</style>
