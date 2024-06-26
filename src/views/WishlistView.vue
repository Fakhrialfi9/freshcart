<script setup lang="ts">
import Breadcrumbs from '../function/Breadcrumbs.vue'
</script>

<template>
  <main id="MainWishlist">
    <section class="Wishlist">
      <div class="Container">
        <Breadcrumbs />
        <div class="WishlistContent">
          <div class="HeadlineWishlistContent">
            <h5>My Wishlist</h5>
            <span>There are 21 products in this wishlist. </span>
          </div>
          <div class="NavigationWishlistContent">
            <form class="InputSearch-NavigationWishlistContent">
              <input type="text" placeholder="Search Your Product" />
            </form>
            <button class="CheckAllDelete DisplayNone-SM DisplayNone-MD DisplayNone-LG">
              Delete All
            </button>
          </div>
          <div
            class="NavigationWishlistContent DisplayNone DisplayBlock-LG DisplayBlock-MD DisplayBlock-SM"
          >
            <button class="Button-NavigationWishlistContent">
              <input type="checkbox" id="AllSelectProductToCheckOut" />
              <p>Select All</p>
            </button>
            <button>Filter Product</button>
            <button class="CheckAllDelete">Delete All</button>
          </div>
          <div class="ContainerCardBoxWishlistContent">
            <div class="CardBoxWishlistContent" v-for="index in 21" :key="index">
              <div class="CardBoxWishlistContentTop">
                <input
                  class="CheckBox-CardBoxWishlistContentTop"
                  type="checkbox"
                  id="SelectProductToCheckOut"
                />
                <div class="Image-CardBoxWishlistContentTop"></div>
                <ul class="Information-CardBoxWishlistContentTop">
                  <li>
                    <h6>Name:</h6>
                    <h5>Organic Banana</h5>
                  </li>
                  <li>
                    <h6>Price:</h6>
                    <h5>$.98 / lb</h5>
                  </li>
                </ul>
              </div>
              <div class="CardBoxWishlistContentBottom">
                <ul>
                  <li>
                    <p>Status</p>
                    <button class="StatusColor">In Stock</button>
                  </li>
                  <li>
                    <p>Actions</p>
                    <button class="ActionColor">Add To Cart</button>
                  </li>
                  <li>
                    <p>Quantity</p>
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
                  </li>
                  <li>
                    <p>Total Price</p>
                    <button class="TotalPrice">$400</button>
                  </li>
                </ul>
              </div>
              <button class="RemoveButtonCardBoxWishlistContent">Remove</button>
            </div>
          </div>

          <div class="NavigationButtonShortCut DisplayNone-LG DisplayNone-MD DisplayNone-SM">
            <button class="Button-NavigationWishlistContent">
              <input type="checkbox" id="AllSelectProductToCheckOut" />
              <p>Select All</p>
            </button>
            <button>Filter Product</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/WishlistView.css"></style>
