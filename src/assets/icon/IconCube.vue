<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a fill="currentColor">
    <svg
      x-data="{
        initializeAnimation: false,
        init() {
            setTimeout(() => {
                this.initializeAnimation = true;
            }, 0);
        },
    }"
      class="text-red-600 animate-cube"
      width="46"
      height="53"
      viewBox="0 0 46 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404"
        stroke="currentColor"
        stroke-width="1.435"
        stroke-linejoin="bevel"
      ></path>
      <path
        d="m45.202 39.105-22.1 12.702L1 39.105"
        stroke="currentColor"
        stroke-width="1.435"
        stroke-linejoin="bevel"
      ></path>
      <path
        transform="matrix(.86698 .49834 .00003 1 1 13.699)"
        stroke="currentColor"
        stroke-width="1.435"
        stroke-linejoin="bevel"
        d="M0 0h25.491v25.405H0z"
      ></path>
      <path
        transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)"
        stroke="currentColor"
        stroke-width="1.435"
        stroke-linejoin="bevel"
        d="M0 0h25.491v25.405H0z"
      ></path>
      <path
        transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)"
        stroke="currentColor"
        stroke-width="1.435"
        stroke-linejoin="bevel"
        d="M0 0h25.491v25.491H0z"
      ></path>
    </svg>
  </a>
</template>

<style scoped>
a {
  display: flex;
  place-items: center;
  place-content: center;
  color: inherit;
  fill: inherit;
  font-size: inherit;
}

a > svg {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: inherit;
  padding: inherit;
  stroke-width: inherit;
  stroke: inherit;
  stroke-linejoin: round;
  stroke-linecap: round;
}
</style>
