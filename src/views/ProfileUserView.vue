<script setup lang="ts">
import { onMounted } from 'vue'
import { user, getUser } from '../stores/AuthGetUserStores'
import { useAuthSignout } from '../stores/AuthSignoutStores'
import Breadcrumbs from '../components/BreadcrumbsComponents.vue'
import AlertBoxComponent from '../components/AlertBoxComponents.vue'
import { RouterLink, RouterView } from 'vue-router'

const { signOut } = useAuthSignout()

onMounted(() => {
  getUser()
})
</script>

<template>
  <main id="MainProfileUser">
    <section class="ProfileUser">
      <div class="Container">
        <Breadcrumbs />
        <div class="ProfileUserContent">
          <div class="HeadlineProfileUserContent">
            <h5>Seller Store</h5>
          </div>
          <section class="MainLayoutProfileUser" v-if="user">
            <nav class="MainSidebarProfileUser">
              <ul>
                <li>
                  <RouterLink
                    active-class="Active"
                    v-if="user"
                    :to="`/profileuser/${user.userName}/dashboarduser`"
                  >
                    Dashboard
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    active-class="Active"
                    v-if="user"
                    :to="`/profileuser/${user.userName}/Men`"
                  >
                    Product
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    active-class="Active"
                    v-if="user"
                    :to="`/profileuser/${user.userName}/Mun`"
                  >
                    Product Category
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    active-class="Active"
                    v-if="user"
                    :to="`/profileuser/${user.userName}/Min`"
                  >
                    Orders
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    active-class="Active"
                    v-if="user"
                    :to="`/profileuser/${user.userName}/Man`"
                  >
                    Review Product
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    active-class="Active"
                    v-if="user"
                    :to="`/profileuser/${user.userName}/detailaccount`"
                  >
                    Detail Account
                  </RouterLink>
                </li>
                <li>
                  <a class="Signout" @click="signOut">Sign Out</a>
                </li>
              </ul>
            </nav>
            <aside class="MainContentProfileUser">
              <!-- Start Content Dashboard View -->
              <RouterView :key="$route.fullPath" />
              <!-- End Content Dashboard View -->
            </aside>
          </section>
        </div>
      </div>
    </section>
    <AlertBoxComponent ref="alertBox" />
  </main>
</template>

<style scoped src="../assets/style/Views/ProfileUserView.css"></style>
