<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconCube from '../assets/icon/IconCube.vue'
</script>

<template>
  <main id="MainNotFound">
    <div class="ButtonBackHome">
      <RouterLink to="/home">
        <Button>Back Home</Button>
      </RouterLink>
    </div>
    <section class="NotFound">
      <div class="Container">
        <div class="ShapeBlur1"></div>
        <div class="Icon1">
          <IconCube class="IconCube" />
        </div>
        <div class="NotFoundContent">
          <h5>404</h5>
          <h5>|</h5>
          <h6>Not Found</h6>
        </div>
      </div>
      <div class="Icon2">
        <IconCube class="IconCube" />
      </div>
      <div class="ShapeBlur2"></div>
      <div class="CopyRight">
        <h5>Fresh Cart Enterprise</h5>
        <h5>x</h5>
        <h5>Vue Js 3</h5>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Components/404NotFoundComponents.css"></style>
