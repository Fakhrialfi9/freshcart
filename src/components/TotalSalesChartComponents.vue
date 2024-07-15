<template>
  <div class="ContainerChartTotalSales">
    <div class="ContentChartTotalSales" id="ContentChartTotalSales"></div>
    <div class="ContainerLabelsChart">
      <div class="ContentLabelsChart">
        <div class="Bullets"></div>
        <div class="TextLabels">
          <h5>Shippings $32.98 <span>(2%)</span></h5>
        </div>
      </div>
      <div class="ContentLabelsChart">
        <div class="Bullets"></div>
        <div class="TextLabels">
          <h5>Refunds $11 <span>(11%)</span></h5>
        </div>
      </div>
      <div class="ContentLabelsChart">
        <div class="Bullets"></div>
        <div class="TextLabels">
          <h5>Order $14.87 <span>(1%)</span></h5>
        </div>
      </div>
      <div class="ContentLabelsChart">
        <div class="Bullets"></div>
        <div class="TextLabels">
          <h5>Income 3,271 <span>(86%)</span></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ApexCharts from 'apexcharts'

const series = ref([6000, 2000, 1000, 600])
const chartOptions = ref({
  chart: {
    type: 'donut',
    width: '300px',
    height: '300px'
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      expandOnClick: false,
      offsetX: 0,
      offsetY: 0,
      offset: 0,
      customScale: 1,
      donut: {
        size: '70%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            color: undefined,
            offsetY: -10,
            formatter: function (val: string) {
              return val
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: 'Total',
            fontSize: '20px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            color: '#000000',
            formatter: function (w: any) {
              return w.globals.seriesTotals.reduce((a: number, b: number) => {
                return a + b
              }, 0)
            }
          },
          value: {
            show: true,
            fontSize: '35px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            color: undefined,
            offsetY: 18,
            formatter: function (val: number) {
              return val
            }
          }
        }
      },
      dataLabels: {
        show: false,
        enabled: false,
        offset: 0,
        minAngleToShowLabel: 0
      }
    }
  },
  legend: {
    show: false
  },
  labels: ['Shipping', 'Refunds', 'Orders', 'Income'],
  colors: ['#4caf50', '#ffc107', '#f44336', '#016bf8'],

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        }
      }
    }
  ]
})

onMounted(() => {
  const options = {
    series: series.value,
    ...chartOptions.value
  }

  const chart = new ApexCharts(document.querySelector('#ContentChartTotalSales'), options)
  chart.render()
})
</script>

<style scoped src="../assets/style/Views/DashboardUserView.css"></style>
