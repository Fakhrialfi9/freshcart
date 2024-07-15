<script setup lang="ts">
// Start Import Components
import RevenueChartComponents from '../../../components/RevenueChartComponents.vue'
import TotalSalesChartComponents from '../../../components/TotalSalesChartComponents.vue'

// Start Import Icons
import IconDollar from '../../../assets/icon/IconDollar.vue'
import IconBagCart from '../../../assets/icon/IconBagCart.vue'
import IconUsers from '../../../assets/icon/IconUsers.vue'
import IconBell from '../../../assets/icon/IconBell.vue'
import IconLamp from '../../../assets/icon/IconLamp.vue'
import IconRocket from '../../../assets/icon/IconRocket.vue'
</script>

<template>
  <main id="MainDashboardUser">
    <section class="DashboardUser">
      <div class="DashboardUserContent">
        <!-- Start Banner Content -->
        <div class="BannerContentDashboardUser">
          <div class="ContentBannerContentDashboardUser">
            <h4>Welcome back! FreshCart</h4>
            <p>FreshCart is simple & clean design for developer and designer.</p>
            <button>Create Product</button>
          </div>
        </div>
        <!-- End Banner Content -->

        <!-- Start Insight Information -->
        <div class="InsightsInformation">
          <div class="CardBoxInsightsInformation">
            <div class="TopContentCardBoxInsightsInformation">
              <h5>Earnings</h5>
              <div class="IconTopContentCardBoxInsightsInformation">
                <IconDollar class="IconInsightsInformation" />
              </div>
            </div>
            <div class="BottomContentCardBoxInsightsInformation">
              <h4>$93,438.78</h4>
              <h6>Monthly revenue</h6>
            </div>
          </div>
          <div class="CardBoxInsightsInformation">
            <div class="TopContentCardBoxInsightsInformation">
              <h5>Orders</h5>
              <div class="IconTopContentCardBoxInsightsInformation">
                <IconBagCart class="IconInsightsInformation" />
              </div>
            </div>
            <div class="BottomContentCardBoxInsightsInformation">
              <h4>42,339</h4>
              <h6>35+ New Sales</h6>
            </div>
          </div>
          <div class="CardBoxInsightsInformation">
            <div class="TopContentCardBoxInsightsInformation">
              <h5>Customer</h5>
              <div class="IconTopContentCardBoxInsightsInformation">
                <IconUsers class="IconInsightsInformation" />
              </div>
            </div>
            <div class="BottomContentCardBoxInsightsInformation">
              <h4>39,354</h4>
              <h6>30+ new in 2 days</h6>
            </div>
          </div>
        </div>
        <!-- End Insight Information -->

        <!-- Start Content Chart -->
        <div class="ChartInformation">
          <div class="CardBoxChartInformation">
            <div class="TopContentCardBoxChartInformation">
              <div class="HeadlineTopContentCardBoxChartInformation">
                <h4>Revenue</h4>
                <h6>(+63%) than last year</h6>
              </div>
              <div class="YearsSelecrTopContentCardBoxChartInformation">
                <form action="">
                  <select name="yearsrevenue" id="yearsrevenue">
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </form>
              </div>
            </div>
            <div class="BottomContentCardBoxChartInformation">
              <RevenueChartComponents />
            </div>
          </div>
          <div class="CardBoxChartInformation">
            <div class="TopContentCardBoxChartInformation">
              <div class="HeadlineTopContentCardBoxChartInformation">
                <h4>Total Sales</h4>
              </div>
            </div>
            <div class="BottomContentCardBoxChartInformation">
              <TotalSalesChartComponents />
            </div>
          </div>
        </div>
        <!-- End Content Chart -->

        <!-- Start Bar Progress Sales Overview & Notification -->
        <div class="BarProgressSalesOverview">
          <div class="CardBoxBarProgressSalesOverview">
            <div class="TopContentCardBoxBarProgressSalesOverview">
              <div class="HeadlineTopContentCardBoxBarProgressSalesOverview">
                <h4>Sales Overview</h4>
              </div>
            </div>
            <div class="BottomContentCardBoxBarProgressSalesOverview">
              <!-- Total Profit -->
              <div class="ContainerBarProgress">
                <div class="HeadlineBarProgress">
                  <h5>Total Profit:</h5>
                  <h5>$1,619 (8.6%)</h5>
                </div>
                <div class="BarProgress">
                  <div class="BarProgressInner" style="width: 76.6%"></div>
                </div>
              </div>

              <!-- Total Income -->
              <div class="ContainerBarProgress">
                <div class="HeadlineBarProgress">
                  <h5>Total Income:</h5>
                  <h5>$3,571 (86.4%)</h5>
                </div>
                <div class="BarProgress">
                  <div class="BarProgressInner" style="width: 86.4%"></div>
                </div>
              </div>

              <!-- Total Expenses -->
              <div class="ContainerBarProgress">
                <div class="HeadlineBarProgress">
                  <h5>Total Expenses:</h5>
                  <h5>$3,430 (74.5%)</h5>
                </div>
                <div class="BarProgress">
                  <div class="BarProgressInner" style="width: 74.5%"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="CardBoxBarProgressSalesOverview">
            <div class="ContentNotificationMessage">
              <div class="IconNotificationMessage">
                <IconBell class="IconNotification" />
              </div>
              <div class="LabelNotificationMessage">
                <h5>Start your day with New Notification.</h5>
                <p>You have 2 new notification <a href="">Click This</a></p>
              </div>
            </div>
            <div class="ContentNotificationMessage">
              <div class="IconNotificationMessage">
                <IconLamp class="IconNotification" />
              </div>
              <div class="LabelNotificationMessage">
                <h5>Monitor your Sales and Profitability</h5>
                <p>Monitor sales trends and profitability metrics. <a href="">Click This</a></p>
              </div>
            </div>
            <div class="ContentNotificationMessage">
              <div class="IconNotificationMessage">
                <IconRocket class="IconNotification" />
              </div>
              <div class="LabelNotificationMessage">
                <h5>Explore New Features and Enhancements</h5>
                <p>Discover exciting updates and features. <a href="">Click This</a></p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Bar Progress Sales Overview & Notification -->

        <div class="ContentRecentOrder">
          <div class="CardBoxContentRecentOrder">
            <div class="TopContentCardBoxCardBoxContentRecentOrder">
              <div class="HeadlineTopContentCardBoxCardBoxContentRecentOrder">
                <h4>Recent Order</h4>
              </div>
            </div>
            <div class="BottomContentCardBoxCardBoxContentRecentOrder">
              <div v-for="index in 9" :key="index" class="CardBoxOrderProduct">
                <div class="CardBoxOrderInfoProduct">
                  <p><span>Order Number:</span> #FC0005</p>
                  <p><span>Product Name:</span> Haldiram's Sev Bhujia</p>
                  <p><span>Order Date:</span> 28 March 2023</p>
                  <p><span>Price:</span> $18.00</p>
                </div>
                <div class="CardBoxOrderStatusProduct">
                  <span>
                    <p>Shipped</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/DashboardUserView.css"></style>
