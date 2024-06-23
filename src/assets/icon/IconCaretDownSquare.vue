<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-caret-down-square-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6z"
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
