<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Menggunakan useRoute untuk mengakses informasi route saat ini
const route = useRoute()

// Menghitung breadcrumbs berdasarkan path dari route saat ini
const breadcrumbs = computed(() => {
  // Memisahkan path menjadi array dan menghapus elemen kosong
  const pathArray = route.path.split('/').filter((p) => p)

  // Array untuk menyimpan objek breadcrumb
  const breadcrumbArray = []

  // Iterasi untuk membuat setiap breadcrumb
  pathArray.forEach((path, index) => {
    // Membuat objek breadcrumb dengan nama dan link
    const breadcrumb = {
      name: path.charAt(0).toUpperCase() + path.slice(1), // Mengubah huruf pertama menjadi kapital
      link: '/' + pathArray.slice(0, index + 1).join('/') // Mengatur link breadcrumb
    }
    breadcrumbArray.push(breadcrumb) // Menambahkan breadcrumb ke dalam array
  })

  breadcrumbArray.unshift({ name: '..', link: '/home' }) // Menambahkan breadcrumb untuk home

  return breadcrumbArray // Mengembalikan array breadcrumbs
})
</script>

<template>
  <nav class="NavigationBreadcrumb" aria-label="breadcrumb">
    <ul>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        :class="{ active: route.path === breadcrumb.link }"
      >
        <RouterLink v-if="index !== breadcrumbs.length - 1" :to="breadcrumb.link">
          {{ breadcrumb.name }}
        </RouterLink>
        <span v-else>{{ breadcrumb.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.NavigationBreadcrumb {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem 0;
}

.NavigationBreadcrumb > ul {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: var(--gray-200);
  border-radius: var(--border-radius);
}

.NavigationBreadcrumb > ul > li {
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0;
  font-size: 1rem !important;
}

.NavigationBreadcrumb > ul > li::after {
  content: '/';
  margin-left: 0.5rem;
}

.NavigationBreadcrumb > ul > li:last-child::after {
  content: '';
}

.NavigationBreadcrumb > ul > li.active > span {
  font-weight: 600 !important;
  color: var(--primary-color);
}
</style>
