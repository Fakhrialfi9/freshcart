<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-right-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
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
