<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconArrowToLeft from '../assets/icon/IconArrowToLeft.vue'
</script>

<template>
  <main id="AlertBoxError">
    <section class="AlertBoxError">
      <div class="ContentAlertBoxError">
        <strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-exclamation-triangle"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"
            />
            <path
              d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"
            />
          </svg>
          This is an Error</strong
        >
        <span> <slot /></span>
        <RouterLink to="/home">
          <button><IconArrowToLeft class="IconBackHome" /> Back Home</button>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
}

.AlertBoxError {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
}

.ContentAlertBoxError {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 10rem !important;
  max-height: 100%;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 1rem;
  background-color: var(--white-color);
  border: 0.08rem solid var(--danger-color);
  border-radius: var(--border-radius-lg);
  gap: 1.5rem;
}

.ContentAlertBoxError strong {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--danger-color);
}

.ContentAlertBoxError span {
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: var(--black-color) !important;
}

.ContentAlertBoxError button {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  gap: 0.5rem;
}

.IconBackHome {
  width: 1rem;
}

/* ================================================================================================== */
/* ===============================  T H I S  R E S P O N S I V E  M A X - W I D T H 576px  =============================== */
/* ================================================================================================== */

@media (max-width: 576px) {
  .ContentAlertBoxError {
    min-height: 12rem !important;
    gap: 2rem;
  }
}
</style>
