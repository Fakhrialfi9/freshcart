<script lang="ts">
// Start Import Router Link & Router View
import { RouterLink } from 'vue-router'
// End Import Router Link & Router View

// Start Image Import
import LogoNavbar from './../assets/logo/logo-company/freshcart-logo.svg'
import categorydairybreadeggs from '../assets/image/category/categorydairybreadeggs.jpg'
// Start Image Import

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      LogoNavbar,
      categorydairybreadeggs,
      AllDepartmentDropdown: false,
      ShopDropdown: false,
      StoresDropdown: false,
      CategoryDropdown: false,
      ArticleDropdown: false,
      ProductDropdown: false,
      BrandDropdown: false,
      PromoDropdown: false,
      setMenuMobile: false,
      setBasketCartModals: false
    }
  },
  methods: {
    toggleDropdown() {
      ;(this.AllDepartmentDropdown = !this.AllDepartmentDropdown),
        (this.ShopDropdown = !this.ShopDropdown),
        (this.StoresDropdown = !this.StoresDropdown),
        (this.CategoryDropdown = !this.CategoryDropdown),
        (this.ArticleDropdown = !this.ArticleDropdown),
        (this.ProductDropdown = !this.ProductDropdown),
        (this.BrandDropdown = !this.BrandDropdown),
        (this.PromoDropdown = !this.PromoDropdown)
    },

    toggleAllDepartmentDropdown() {
      this.AllDepartmentDropdown = !this.AllDepartmentDropdown
    },

    toggleShopDropdown() {
      this.ShopDropdown = !this.ShopDropdown
    },

    toggleStoresDropdown() {
      this.StoresDropdown = !this.StoresDropdown
    },

    toggleCategoryDropdown() {
      this.CategoryDropdown = !this.CategoryDropdown
    },

    toggleArticleDropdown() {
      this.ArticleDropdown = !this.ArticleDropdown
    },

    toggleProductDropdown() {
      this.ProductDropdown = !this.ProductDropdown
    },

    toggleBrandDropdown() {
      this.BrandDropdown = !this.BrandDropdown
    },

    togglePromoDropdown() {
      this.PromoDropdown = !this.PromoDropdown
    },

    ToggleHamburgerMenu() {
      this.setMenuMobile = !this.setMenuMobile

      if (this.setMenuMobile) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
      }
    },

    ToggleBasketCartModals() {
      this.setBasketCartModals = !this.setBasketCartModals

      if (this.setBasketCartModals) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
      }
    }
  }
}
</script>

<script setup lang="ts">
import IconWishlist from '../assets/icon/IconWishlist.vue'
import IconUsers from '../assets/icon/IconUsers.vue'
import IconBagCart from '../assets/icon/IconBagCart.vue'
import IconGridSquare from '../assets/icon/IconGridSquare.vue'
import IconChevronDown from '../assets/icon/IconChevronDown.vue'
import IconHamburgerMenu from '../assets/icon/IconHamburgerMenu.vue'
import IconClose from '../assets/icon/IconClose.vue'
import IconSearch from '../assets/icon/IconSearch.vue'
import IconPinLocation from '../assets/icon/IconPinLocation.vue'
</script>

<template>
  <main id="Navbar">
    <nav class="Navbar">
      <div class="Container">
        <div class="NavbarContent">
          <!-- Start Navbar Top Content -->
          <div class="NavbarTopContent">
            <div class="LeftContent">
              <div class="LogoNavbarContent">
                <RouterLink to="/">
                  <img :src="LogoNavbar" alt="Local Image" />
                </RouterLink>
              </div>
              <div class="FormSearchNavbarContent DisplayNone-SM DisplayNone-MD DisplayNone-LG">
                <form>
                  <i className="IconInputSearch">
                    <IconSearch class="IconSearch" />
                  </i>
                  <input type="text" placeholder="Search For Product" />
                </form>
                <button><IconPinLocation class="IconPinLocation" /> Location</button>
              </div>
            </div>
            <div class="RightContent">
              <a class="DisplayNone-SM Tooltip">
                <IconWishlist class="IconNavbar" />
                <span class="BadgeContentNavbar">3</span>
                <span class="TooltipText">Wishlist</span>
              </a>

              <a class="DisplayNone-SM Tooltip">
                <IconUsers class="IconNavbar" />
                <span class="TooltipText">User Login</span>
              </a>

              <a @click="ToggleBasketCartModals" class="DisplayNone-SM Tooltip">
                <IconBagCart class="IconNavbar" />
                <span class="BadgeContentNavbar">3</span>
                <span class="TooltipText"> Cart</span>
              </a>

              <a
                @click="ToggleHamburgerMenu"
                class="DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG"
              >
                <IconHamburgerMenu class="IconHamburgerMenu" />
              </a>
            </div>
          </div>
          <!-- End Navbar Top Content -->

          <!-- Start Navbar Bottom Content -->
          <div class="NavbarBottomContent DisplayNone-SM DisplayNone-MD DisplayNone-LG">
            <ul>
              <!-- Start All Departement Menu & Dropdown -->
              <li
                @mouseenter="AllDepartmentDropdown = true"
                @mouseleave="AllDepartmentDropdown = false"
              >
                <button>
                  <IconGridSquare class="IconButtonAllDepartement" />
                  All Departement
                </button>

                <transition name="SlideFadeDropdown">
                  <div v-if="AllDepartmentDropdown" class="DropdownMenu">
                    <ul>
                      <li><RouterLink to="/">Dairy, Bread & Eggs</RouterLink></li>
                      <li><RouterLink to="/">Snacks & Munchies</RouterLink></li>
                      <li><RouterLink to="/">Fruits & Vegetables</RouterLink></li>
                      <li><RouterLink to="/">Cold Drinks & Juices</RouterLink></li>
                      <li><RouterLink to="/">Breakfast & Instant Food</RouterLink></li>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End All Departement Menu & Dropdown -->

              <!-- Start Home Menu  -->
              <li>
                <a>Home</a>
              </li>
              <!-- End Home Menu  -->

              <!-- Start Shop Menu & Dropdown -->
              <li @mouseenter="ShopDropdown = true" @mouseleave="ShopDropdown = false">
                <a>
                  Shop
                  <IconChevronDown class="IconDropdown" />
                </a>

                <transition name="SlideFadeDropdown">
                  <div v-if="ShopDropdown" class="DropdownMenu">
                    <ul>
                      <li><RouterLink to="/">Fruits & Vegetables</RouterLink></li>
                      <li><RouterLink to="/">Meat & Poultry</RouterLink></li>
                      <li><RouterLink to="/">Dairy & Eggs</RouterLink></li>
                      <li><RouterLink to="/">Bakery & Bread</RouterLink></li>
                      <li><RouterLink to="/">Pantry Staples</RouterLink></li>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End Shop Menu & Dropdown -->

              <!-- Start Stores Menu & Dropdown -->
              <li @mouseenter="StoresDropdown = true" @mouseleave="StoresDropdown = false">
                <a>
                  Stores
                  <IconChevronDown class="IconDropdown" />
                </a>

                <transition name="SlideFadeDropdown">
                  <div v-if="StoresDropdown" class="DropdownMenu">
                    <ul>
                      <li><RouterLink to="/">Tokyo, Jepang</RouterLink></li>
                      <li><RouterLink to="/">Paris, Prancis</RouterLink></li>
                      <li><RouterLink to="/">New York City, Amerika Serikat</RouterLink></li>
                      <li><RouterLink to="/">Sydney, Australia</RouterLink></li>
                      <li><RouterLink to="/">Cairo, Mesir</RouterLink></li>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End Stores Menu & Dropdown -->

              <!-- Start Category Menu & Dropdown -->
              <li @mouseenter="CategoryDropdown = true" @mouseleave="CategoryDropdown = false">
                <a>
                  Category
                  <IconChevronDown class="IconDropdown" />
                </a>

                <transition name="SlideFadeDropdown">
                  <div v-if="CategoryDropdown" class="DropdownMenuMegaMenu">
                    <ul>
                      <ol>
                        <span>Dairy, Bread and Eggs</span>
                        <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                        <li><RouterLink to="/">Seafood</RouterLink></li>
                        <li><RouterLink to="/">Health Foods</RouterLink></li>
                        <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                        <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
                      </ol>
                      <ol>
                        <span>Dairy, Bread and Eggs</span>
                        <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                        <li><RouterLink to="/">Seafood</RouterLink></li>
                        <li><RouterLink to="/">Health Foods</RouterLink></li>
                        <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                        <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
                      </ol>
                      <ol>
                        <span>Dairy, Bread and Eggs</span>
                        <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                        <li><RouterLink to="/">Seafood</RouterLink></li>
                        <li><RouterLink to="/">Health Foods</RouterLink></li>
                        <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                        <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
                      </ol>
                      <ol>
                        <span>Dairy, Bread and Eggs</span>
                        <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                        <li><RouterLink to="/">Seafood</RouterLink></li>
                        <li><RouterLink to="/">Health Foods</RouterLink></li>
                        <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                        <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
                      </ol>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End Category Menu & Dropdown -->

              <!-- Start Article Menu & Dropdown -->
              <li @mouseenter="ArticleDropdown = true" @mouseleave="ArticleDropdown = false">
                <a>
                  Article
                  <IconChevronDown class="IconDropdown" />
                </a>

                <transition name="SlideFadeDropdown">
                  <div v-if="ArticleDropdown" class="DropdownMenu">
                    <ul>
                      <li><RouterLink to="/">Fresh Fruits</RouterLink></li>
                      <li><RouterLink to="/">Fresh Vegetables</RouterLink></li>
                      <li><RouterLink to="/">Dairy Products</RouterLink></li>
                      <li><RouterLink to="/">Fresh Meat & Poultry</RouterLink></li>
                      <li><RouterLink to="/">Seafood</RouterLink></li>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End Article Menu & Dropdown -->

              <!-- Start Product Menu & Dropdown -->
              <li @mouseenter="ProductDropdown = true" @mouseleave="ProductDropdown = false">
                <a>
                  Product
                  <IconChevronDown class="IconDropdown" />
                </a>

                <transition name="SlideFadeDropdown">
                  <div v-if="ProductDropdown" class="DropdownMenu">
                    <ul>
                      <li><RouterLink to="/">Snacks & Sweets</RouterLink></li>
                      <li><RouterLink to="/">Beverages</RouterLink></li>
                      <li><RouterLink to="/">Frozen Foods</RouterLink></li>
                      <li><RouterLink to="/">Organic & Specialty</RouterLink></li>
                      <li><RouterLink to="/">International Cuisine</RouterLink></li>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End Product Menu & Dropdown -->

              <!-- Start Brand Menu & Dropdown -->
              <li @mouseenter="BrandDropdown = true" @mouseleave="BrandDropdown = false">
                <a>
                  Brand
                  <IconChevronDown class="IconDropdown" />
                </a>

                <transition name="SlideFadeDropdown">
                  <div v-if="BrandDropdown" class="DropdownMenu">
                    <ul>
                      <li><RouterLink to="/">Tech Brands</RouterLink></li>
                      <li><RouterLink to="/">Fashion Brands</RouterLink></li>
                      <li><RouterLink to="/">Book Publishers</RouterLink></li>
                      <li><RouterLink to="/">Gardening Brands</RouterLink></li>
                      <li><RouterLink to="/">Outdoor Brands</RouterLink></li>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End Brand Menu & Dropdown -->

              <!-- Start Promo Menu & Dropdown -->
              <li
                class="PromoBadge"
                @mouseenter="PromoDropdown = true"
                @mouseleave="PromoDropdown = false"
              >
                <a>
                  Promo
                  <IconChevronDown class="IconDropdown" />
                </a>

                <transition name="SlideFadeDropdown">
                  <div v-if="PromoDropdown" class="DropdownMenu">
                    <ul>
                      <li><RouterLink to="/">Fresh Fruit Deals</RouterLink></li>
                      <li><RouterLink to="/">Vegetable Discounts</RouterLink></li>
                      <li><RouterLink to="/">Dairy Product Sales</RouterLink></li>
                      <li><RouterLink to="/">Meat & Poultry Offers</RouterLink></li>
                      <li><RouterLink to="/">Seafood Specials</RouterLink></li>
                    </ul>
                  </div>
                </transition>
              </li>
              <!-- End Promo Menu & Dropdown -->
            </ul>
          </div>
          <!-- End Navbar Bottom Content -->

          <!-- Start Mobile Section -->

          <!-- Start Slider Menu Mobile -->
          <transition name="SlideFadeToggleMenu">
            <div v-if="setMenuMobile" class="MobileMenu">
              <ul>
                <!-- Start Logo Image Mobile -->
                <li>
                  <a
                    ><img :src="LogoNavbar" alt="Local Image" />
                    <span @click="ToggleHamburgerMenu" :class="{ active: setMenuMobile }">
                      <IconClose class="IconCloseToggle" />
                    </span>
                  </a>
                </li>
                <!-- End Logo Image Mobile -->

                <!-- Start Form & Button Mobile -->
                <li>
                  <form>
                    <i className="IconInputSearchMobile">
                      <IconSearch class="IconSearch" />
                    </i>
                    <input type="text" placeholder="Search For Product" />
                  </form>
                  <button><IconPinLocation class="IconPinLocation" /> Pick Location</button>
                </li>
                <!-- End Form & Button Mobile -->

                <!-- Start Menu Button All Departement Mobile -->
                <li>
                  <button
                    @click="toggleAllDepartmentDropdown"
                    @mouseleave="AllDepartmentDropdown = false"
                  >
                    All Departement
                  </button>

                  <transition name="SlideFadeDropdown">
                    <div v-if="AllDepartmentDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Dairy, Bread & Eggs</RouterLink></li>
                        <li><RouterLink to="/">Snacks & Munchies</RouterLink></li>
                        <li><RouterLink to="/">Fruits & Vegetables</RouterLink></li>
                        <li><RouterLink to="/">Cold Drinks & Juices</RouterLink></li>
                        <li><RouterLink to="/">Breakfast & Instant Food</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <!-- End Menu Button All Departement Mobile -->

                <!-- Start Menu Home Mobile -->
                <li><a>Home</a></li>
                <!-- End Menu Home Mobile -->

                <div class="diver"></div>

                <!-- Start Menu Shop Mobile -->
                <li>
                  <a @click="toggleShopDropdown" @mouseleave="ShopDropdown = false">
                    Shop
                    <span> <IconChevronDown class="IconDropdown" /></span>
                  </a>

                  <transition name="SlideFadeDropdown">
                    <div v-if="ShopDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Fruits & Vegetables</RouterLink></li>
                        <li><RouterLink to="/">Meat & Poultry</RouterLink></li>
                        <li><RouterLink to="/">Dairy & Eggs</RouterLink></li>
                        <li><RouterLink to="/">Bakery & Bread</RouterLink></li>
                        <li><RouterLink to="/">Pantry Staples</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <!-- End Menu Shop Mobile -->

                <div class="diver"></div>

                <!-- Start Menu Stores Mobile -->
                <li>
                  <a @click="toggleStoresDropdown" @mouseleave="StoresDropdown = false">
                    Stores
                    <span> <IconChevronDown class="IconDropdown" /></span>
                  </a>

                  <transition name="SlideFadeDropdown">
                    <div v-if="StoresDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Tokyo, Jepang</RouterLink></li>
                        <li><RouterLink to="/">Paris, Prancis</RouterLink></li>
                        <li><RouterLink to="/">New York City, Amerika Serikat</RouterLink></li>
                        <li><RouterLink to="/">Sydney, Australia</RouterLink></li>
                        <li><RouterLink to="/">Cairo, Mesir</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <!-- End Menu Stores Mobile -->

                <div class="diver"></div>

                <!-- Start Menu Category Mobile -->
                <li>
                  <a @click="toggleCategoryDropdown" @mouseleave="CategoryDropdown = false">
                    Category
                    <span> <IconChevronDown class="IconDropdown" /></span>
                  </a>

                  <transition name="SlideFadeDropdown">
                    <div v-if="CategoryDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                        <li><RouterLink to="/">Seafood</RouterLink></li>
                        <li><RouterLink to="/">Health Foods</RouterLink></li>
                        <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                        <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <!-- End Menu Category Mobile -->

                <div class="diver"></div>

                <!-- Start Menu Article Mobile -->
                <li>
                  <a @click="toggleArticleDropdown" @mouseleave="ArticleDropdown = false">
                    Article
                    <span> <IconChevronDown class="IconDropdown" /></span>
                  </a>

                  <transition name="SlideFadeDropdown">
                    <div v-if="ArticleDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Fresh Fruits</RouterLink></li>
                        <li><RouterLink to="/">Fresh Vegetables</RouterLink></li>
                        <li><RouterLink to="/">Dairy Products</RouterLink></li>
                        <li><RouterLink to="/">Fresh Meat & Poultry</RouterLink></li>
                        <li><RouterLink to="/">Seafood</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <!-- End Menu Article Mobile -->

                <div class="diver"></div>

                <!-- Start Menu Product Mobile -->
                <li>
                  <a @click="toggleProductDropdown" @mouseleave="ProductDropdown = false">
                    Product
                    <span> <IconChevronDown class="IconDropdown" /></span>
                  </a>

                  <transition name="SlideFadeDropdown">
                    <div v-if="ProductDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Snacks & Sweets</RouterLink></li>
                        <li><RouterLink to="/">Beverages</RouterLink></li>
                        <li><RouterLink to="/">Frozen Foods</RouterLink></li>
                        <li><RouterLink to="/">Organic & Specialty</RouterLink></li>
                        <li><RouterLink to="/">International Cuisine</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <!-- End Menu Product Mobile -->

                <div class="diver"></div>

                <!-- Start Menu Brand Mobile -->
                <li>
                  <a @click="toggleBrandDropdown" @mouseleave="BrandDropdown = false">
                    Brand
                    <span> <IconChevronDown class="IconDropdown" /></span>
                  </a>

                  <transition name="SlideFadeDropdown">
                    <div v-if="BrandDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                        <li><RouterLink to="/">Seafood</RouterLink></li>
                        <li><RouterLink to="/">Health Foods</RouterLink></li>
                        <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                        <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <!-- End Menu Brand Mobile -->

                <div class="diver"></div>

                <!-- Start Menu Promo Mobile -->
                <li>
                  <a @click="togglePromoDropdown" @mouseleave="PromoDropdown = false">
                    Promo
                    <span> <IconChevronDown class="IconDropdown" /></span>
                  </a>

                  <transition name="SlideFadeDropdown">
                    <div v-if="PromoDropdown" class="DropdownMenuMobile">
                      <ul>
                        <li><RouterLink to="/">Fresh Fruit Deals</RouterLink></li>
                        <li><RouterLink to="/">Vegetable Discounts</RouterLink></li>
                        <li><RouterLink to="/">Dairy Product Sales</RouterLink></li>
                        <li><RouterLink to="/">Meat & Poultry Offers</RouterLink></li>
                        <li><RouterLink to="/">Seafood Specials</RouterLink></li>
                      </ul>
                    </div>
                  </transition>
                </li>

                <!-- End Menu Promo Mobile -->
              </ul>
            </div>
          </transition>
          <!-- End Slider Menu Mobile -->

          <!-- Start Navbar Bottom Mobile Content -->
          <div class="NavbarBottomMobile DisplayNone DisplayBlock-SM">
            <div class="Container">
              <div class="NavbarBottomMobileContent">
                <ul>
                  <li>
                    <RouterLink to="/" active-class="ActiveNavbarBottomMobile">
                      <IconGridSquare class="IconGridSquareNavbarBottom" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/users" active-class="ActiveNavbarBottomMobile">
                      <IconUsers class="IconUsersNavbarBottom" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/wishlist" active-class="ActiveNavbarBottomMobile">
                      <IconWishlist class="IconWishlistNavbarBottom" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="" @click="ToggleBasketCartModals">
                      <IconBagCart class="IconBagCartNavbarBottom" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Navbar Bottom Mobile Content -->

          <!-- Start Blur Effect Mobile Menu -->
          <div
            @click="ToggleHamburgerMenu"
            :class="{ active: setMenuMobile }"
            class="BlurEffect"
          ></div>
          <!-- End Blur Effect Mobile Menu -->

          <!-- Start Modal Basket Cart -->
          <transition name="SlideFadeToggleModalBasketCart">
            <div v-if="setBasketCartModals" class="ModalBasketCart">
              <div class="ContentTopModalBasketCart">
                <ul class="HeadingContent-ModalBasketCart">
                  <li>
                    <h5>Shop Cart</h5>
                    <span>Location in 382480</span>
                  </li>
                  <li>
                    <span @click="ToggleBasketCartModals" :class="{ active: setBasketCartModals }">
                      <IconClose class="IconCloseToggle" />
                    </span>
                  </li>
                </ul>
              </div>

              <div class="ContentCardModalBasketCart">
                <div class="AlertModalBasketCart">
                  <div class="ContentAlertModalBasketCart">
                    <h5>
                      You’ve got FREE delivery. Start
                      <RouterLink class="LinkColor" to="">checkout now!</RouterLink>
                    </h5>
                  </div>
                </div>

                <div class="diver"></div>

                <!--Start  Card Checkout Product -->
                <ul class="CardBoxCheckoutProduct" v-for="index in 20" :key="index">
                  <li>
                    <div class="ImageInformasi-CardBoxCheckoutProduct">
                      <div class="ImageContent">
                        <img :src="categorydairybreadeggs" alt="" />
                      </div>
                      <div class="InformationContent">
                        <h6>Haldiram's Sev Bhujia</h6>
                        <span>250g</span>
                        <button>Remove</button>
                      </div>
                    </div>

                    <div class="InputQuantity-CardBoxCheckoutProduct">
                      <form class="FormInputQuantity" action="">
                        <button
                          class="QuantityUp"
                          type="button"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                          -
                        </button>
                        <input min="1" name="quantity" value="10" type="number" />
                        <button
                          class="QuantityDown"
                          type="button"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                          +
                        </button>
                      </form>
                    </div>

                    <div class="PriceContent-CardBoxCheckoutProduct">
                      <span>$5.00 </span>
                    </div>
                  </li>
                </ul>
                <!-- End Card Checkout Product -->
              </div>
              <div class="ContentBottomModalBasketCart">
                <ul class="HeadingContent-ModalBasketCart">
                  <li>
                    <b>Total</b>
                    <h5>$354</h5>
                  </li>
                  <li>
                    <span>
                      <button>Checkout</button>
                      <button>Cencle</button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </transition>
          <!-- End Modal Basket Cart -->

          <!-- Start Blur Effect Basket Cart Menu -->
          <div
            @click="ToggleBasketCartModals"
            :class="{ active: setBasketCartModals }"
            class="BlurEffect"
          ></div>
          <!-- End Blur Effect Basket Cart Menu -->

          <!-- Start Mobile Section -->
        </div>
      </div>
    </nav>
  </main>
</template>

<style scoped src="../assets/style/Components/NavbarComponents.css"></style>
<style scoped src="../assets/style/Components/ModalsCart.css"></style>
