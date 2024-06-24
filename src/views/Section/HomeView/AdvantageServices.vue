<script lang="ts">
import { defineComponent } from 'vue'

// Start Import Router
import { RouterLink } from 'vue-router'
// End Import Router

export default defineComponent({
  components: {
    RouterLink
  }
})
</script>

<script setup lang="ts">
import IconPackage from '../../../assets/icon/IconPackage.vue'
import IconBoxGift from '../../../assets/icon/IconBoxGift.vue'
import IconClock from '../../../assets/icon/IconClock.vue'
import IconRefresh from '../../../assets/icon/IconRefresh.vue'
</script>

<template>
  <main>
    <section class="AdvantageServices">
      <div class="ContentAdvantageServices">
        <!-- Start Headline Section Home -->
        <ul class="HeadlineSection-Home">
          <li><h5>Advantage Services</h5></li>
        </ul>
        <!-- End Headline Section Home -->

        <!-- Start Card Content Clock -->
        <ul class="CardBoxAdvantageServices">
          <li>
            <IconClock class="IconAdvantageServices" />
            <h5>10 minute grocery now</h5>
            <p>
              Get your order delivered to your doorstep at the earliest from FreshCart pickup stores
              near you.
            </p>
          </li>
          <!-- End Card Content Clock -->

          <!-- Start Card Content Gift -->
          <li>
            <IconBoxGift class="IconAdvantageServices" />
            <h5>Best Prices & Offers</h5>
            <p>
              Cheaper prices than your local supermarket, great cashback offers to top it off. Get
              best pricess & offers.
            </p>
          </li>
          <!-- End Card Content Gift -->

          <!-- Start Card Content Package -->
          <li>
            <IconPackage class="IconAdvantageServices" />
            <h5>Wide Assortment</h5>
            <p>
              Choose from 5000+ products across food, personal care, household, bakery, veg and
              non-veg & other categories.
            </p>
          </li>
          <!-- End Card Content Package -->

          <!-- Start Card Content Refreshcw -->
          <li>
            <IconRefresh class="IconAdvantageServices" />
            <h5>Easy Returns</h5>
            <p>
              Not satisfied with a product? Return it at the doorstep & get a refund within hours.
              No questions asked <RouterLink to="" class="LinkColorPrimary">policy</RouterLink> .
            </p>
          </li>
        </ul>
        <!-- End Card Content Refreshcw -->
      </div>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
