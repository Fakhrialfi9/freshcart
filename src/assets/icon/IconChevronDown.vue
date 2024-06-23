<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
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
