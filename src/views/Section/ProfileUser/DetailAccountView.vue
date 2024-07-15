<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { user, getUser } from '../../../stores/AuthGetUserStores'

const isDisabled = ref(true)

onMounted(() => {
  getUser()
})
</script>

<template>
  <main id="MainDetailAccount">
    <transition name="slide">
      <div class="DetailAccountContent" v-if="user">
        <div class="ProfileImageContent">
          <div class="CardImageProfile"></div>
          <div class="InformationProfile">
            <h5>{{ user.firstName }} {{ user.lastName }}</h5>
            <h5>Username: @{{ user.userName }}</h5>
            <h5>Email: {{ user.email }}</h5>
          </div>
        </div>
        <div class="InformationUser">
          <form action="">
            <div class="ContainerForm">
              <label for="">Address</label>
              <input
                :disabled="isDisabled"
                type="text"
                id="address"
                name="address"
                :value="user.address"
              />
            </div>
            <div class="ContainerForm">
              <label for="">City</label>
              <input
                :disabled="isDisabled"
                type="text"
                id="address"
                name="address"
                :value="user.city"
              />
            </div>
            <div class="ContainerForm">
              <label for="">State</label>
              <input
                :disabled="isDisabled"
                type="text"
                id="address"
                name="address"
                :value="user.state"
              />
            </div>
            <div class="ContainerForm">
              <label for="">Country</label>
              <input
                :disabled="isDisabled"
                type="text"
                id="address"
                name="address"
                :value="user.country"
              />
            </div>
            <div class="ContainerForm">
              <label for="">Postal Code</label>
              <input
                :disabled="isDisabled"
                type="text"
                id="address"
                name="address"
                :value="user.postalCode"
              />
            </div>
          </form>
        </div>
      </div>
    </transition>
  </main>
</template>

<style scoped src="../../../assets/style/Views/DetailAccountView.css"></style>
