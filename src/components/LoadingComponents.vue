<template>
  <section class="MainLoading">
    <div class="Container">
      <div class="LoadingContent">
        <div class="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
        <div class="HeadingLoading"><h6>Loading Components...</h6></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.MainLoading {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  height: 50vh;
  max-height: 50vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  background-color: var(--white-color) !important;
  z-index: 9999 !important;
}

.LoadingContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 2rem;
}

.HeadingLoading {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
}

.HeadingLoading > h6 {
  font-size: 1.15rem;
  font-weight: 500;
}

.container {
  width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
}

.loadingspinner {
  --square: 1.55rem;
  --offset: 30px;
  --duration: 2.4s;
  --delay: 0.2s;
  --timing-function: ease-in-out;
  --in-duration: 0.4s;
  --in-delay: 0.5s;
  --in-timing-function: ease-out;
  width: calc(3 * var(--offset) + var(--square));
  height: calc(2 * var(--offset) + var(--square));
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
}

.loadingspinner div {
  display: inline-block;
  background: var(--primary-color);
  border: none;
  border-radius: 2px;
  width: var(--square);
  height: var(--square);
  position: absolute;
  padding: 0px;
  margin: 0px;
  font-size: 6pt;
  color: black;
}

.loadingspinner #square1 {
  left: calc(0 * var(--offset));
  top: calc(0 * var(--offset));
  animation:
    square1 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square2 {
  left: calc(0 * var(--offset));
  top: calc(1 * var(--offset));
  animation:
    square2 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square3 {
  left: calc(1 * var(--offset));
  top: calc(1 * var(--offset));
  animation:
    square3 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(2 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square4 {
  left: calc(2 * var(--offset));
  top: calc(1 * var(--offset));
  animation:
    square4 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(3 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square5 {
  left: calc(3 * var(--offset));
  top: calc(1 * var(--offset));
  animation:
    square5 var(--duration) var(--delay) var(--timing-function) infinite,
    squarefadein var(--in-duration) calc(4 * var(--in-delay)) var(--in-timing-function) both;
}

@keyframes square1 {
  0% {
    left: calc(0 * var(--offset));
    top: calc(0 * var(--offset));
  }
  8.333% {
    left: calc(0 * var(--offset));
    top: calc(1 * var(--offset));
  }
  100% {
    left: calc(0 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes square2 {
  0% {
    left: calc(0 * var(--offset));
    top: calc(1 * var(--offset));
  }
  8.333% {
    left: calc(0 * var(--offset));
    top: calc(2 * var(--offset));
  }
  16.67% {
    left: calc(1 * var(--offset));
    top: calc(2 * var(--offset));
  }
  25.00% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }
  83.33% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }
  91.67% {
    left: calc(1 * var(--offset));
    top: calc(0 * var(--offset));
  }
  100% {
    left: calc(0 * var(--offset));
    top: calc(0 * var(--offset));
  }
}

@keyframes square3 {
  0%,
  100% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }
  16.67% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }
  25.00% {
    left: calc(1 * var(--offset));
    top: calc(0 * var(--offset));
  }
  33.33% {
    left: calc(2 * var(--offset));
    top: calc(0 * var(--offset));
  }
  41.67% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }
  66.67% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }
  75.00% {
    left: calc(2 * var(--offset));
    top: calc(2 * var(--offset));
  }
  83.33% {
    left: calc(1 * var(--offset));
    top: calc(2 * var(--offset));
  }
  91.67% {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes square4 {
  0% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }
  33.33% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }
  41.67% {
    left: calc(2 * var(--offset));
    top: calc(2 * var(--offset));
  }
  50.00% {
    left: calc(3 * var(--offset));
    top: calc(2 * var(--offset));
  }
  58.33% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }
  100% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes square5 {
  0% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }
  50.00% {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
  }
  58.33% {
    left: calc(3 * var(--offset));
    top: calc(0 * var(--offset));
  }
  66.67% {
    left: calc(2 * var(--offset));
    top: calc(0 * var(--offset));
  }
  75.00% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }
  100% {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
  }
}

@keyframes squarefadein {
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* ================================================================================================== */
/* ===============================  T H I S  R E S P O N S I V E  M A X - W I D T H 576px  =============================== */
/* ================================================================================================== */

@media (max-width: 576px) {
  .MainLoading {
    margin-top: 10rem !important;
  }
}

/* ================================================================================================== */
/* ===============================  T H I S  R E S P O N S I V E  M A X - W I D T H 768px  =============================== */
/* ================================================================================================== */

@media (min-width: 577px) and (max-width: 768px) {
  .MainLoading {
    margin-top: 10rem !important;
  }
}
</style>
