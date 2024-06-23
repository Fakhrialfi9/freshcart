<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-left-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
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
