<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Import komponen ikon dari file Vue
import IconInstagram from '../assets/icon/IconInstagram.vue'
import IconFacebook from '../assets/icon/IconFacebook.vue'
import IconTwitter from '../assets/icon/IconTwitter.vue'

// Import semua gambar logo brand dan tombol download dari folder assets
import AmazonPay from './../assets/logo/logo-brand/amazonpay.svg'
import AmericanExpress from './../assets/logo/logo-brand/american-express.svg'
import MasterCard from './../assets/logo/logo-brand/mastercard.svg'
import Paypal from './../assets/logo/logo-brand/paypal.svg'
import Visa from './../assets/logo/logo-brand/visa.svg'
import DownloadAppStore from './../assets/image/other/appstore-btn.svg'
import DownloadPlayStore from './../assets/image/other/googleplay-btn.svg'
</script>

<template>
  <main id="Footer">
    <footer class="Footer">
      <div class="Container">
        <div class="FooterContent">
          <div class="FooterTopContent">
            <ul>
              <li>
                <ol>
                  <span>Categories</span>
                  <RouterLink to="">Vegetables & Fruits</RouterLink>
                  <RouterLink to="">Breakfast & instant food</RouterLink>
                  <RouterLink to="">Bakery & Biscuits</RouterLink>
                  <RouterLink to="">Atta, rice & dal</RouterLink>
                  <RouterLink to="">Sauces & spreads</RouterLink>
                  <RouterLink to="">Organic & gourmet</RouterLink>
                  <RouterLink to="">Baby care</RouterLink>
                  <RouterLink to="">Cleaning essentials</RouterLink>
                  <RouterLink to="">Personal care</RouterLink>
                </ol>
                <ol>
                  <RouterLink to="">Dairy, bread & eggs</RouterLink>
                  <RouterLink to="">Cold drinks & juices</RouterLink>
                  <RouterLink to="">Tea, coffee & drinks</RouterLink>
                  <RouterLink to="">Masala, oil & more</RouterLink>
                  <RouterLink to="">Chicken, meat & fish</RouterLink>
                  <RouterLink to="">Paan corner</RouterLink>
                  <RouterLink to="">Pharma & wellness</RouterLink>
                  <RouterLink to="">Home & office</RouterLink>
                  <RouterLink to="">Pet care</RouterLink>
                </ol>
              </li>

              <li>
                <ol>
                  <span>Get to know us </span>
                  <RouterLink to="">Company</RouterLink>
                  <RouterLink to="">About</RouterLink>
                  <RouterLink to="">Blog</RouterLink>
                  <RouterLink to="">Help Center</RouterLink>
                  <RouterLink to="">Our Value</RouterLink>
                </ol>
              </li>

              <li>
                <ol>
                  <span>For Consumers</span>
                  <RouterLink to="">Payment</RouterLink>
                  <RouterLink to="">Shipping</RouterLink>
                  <RouterLink to="">Product Returns</RouterLink>
                  <RouterLink to="">FAQ</RouterLink>
                  <RouterLink to="">Shop Checkout</RouterLink>
                </ol>
              </li>

              <li>
                <ol>
                  <span>Become a Shopper </span>
                  <RouterLink to=""> Become a Shopper</RouterLink>
                  <RouterLink to="">Shopper Opportunities</RouterLink>
                  <RouterLink to="">Become a Shopper</RouterLink>
                  <RouterLink to="">Earnings</RouterLink>
                  <RouterLink to="">Ideas & Guides</RouterLink>
                  <RouterLink to="">New Retailers</RouterLink>
                </ol>
              </li>

              <li>
                <ol>
                  <span>Freshcart programs </span>
                  <RouterLink to="">Freshcart programs </RouterLink>
                  <RouterLink to="">Gift Card</RouterLink>
                  <RouterLink to="">Promos & Coupons</RouterLink>
                  <RouterLink to="">Freshcart Ads</RouterLink>
                  <RouterLink to="">Careers</RouterLink>
                </ol>
              </li>
            </ul>
          </div>

          <div class="FooterCenterContent">
            <ul>
              <li>
                <ol>
                  <span>Payment Partners:</span>
                </ol>
                <ol>
                  <img :src="AmazonPay" alt="Local Image" width="50" />
                  <img :src="AmericanExpress" alt="Local Image" width="35" />
                  <img :src="MasterCard" alt="Local Image" width="35" />
                  <img :src="Paypal" alt="Local Image" width="35" />
                  <img :src="Visa" alt="Local Image" width="35" />
                </ol>
              </li>

              <li>
                <ol>
                  <span>Get deliveries with FreshCart:</span>
                </ol>
                <ol>
                  <a> <img :src="DownloadAppStore" alt="Local Image" width="125" /></a>
                  <a> <img :src="DownloadPlayStore" alt="Local Image" width="125" /></a>
                </ol>
              </li>
            </ul>
          </div>

          <div class="FooterBottomContent">
            <ul>
              <li>
                <ol>
                  <span
                    >© 2022 - 2024 FreshCart eCommerce VUE Js Template. All rights reserved.
                    Powered by
                    <a href="/"> Muhammad akhri Alfi Syahrin H.</a>
                  </span>
                </ol>
              </li>
              <li>
                <ol>
                  <span> Follow us on </span>
                </ol>
                <ol>
                  <div class="SocialMediaFooter">
                    <a><IconFacebook class="IconSocialMediaFooter" /></a>
                  </div>
                  <div class="SocialMediaFooter">
                    <a><IconInstagram class="IconSocialMediaFooter" /></a>
                  </div>
                  <div class="SocialMediaFooter">
                    <a><IconTwitter class="IconSocialMediaFooter" /></a>
                  </div>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped src="../assets/style/Components/FooterComponents.css"></style>
