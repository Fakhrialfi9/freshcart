<script setup lang="ts">
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)

function generateRandomData(startValue: number) {
  const data = []
  let currentValue = startValue
  for (let i = 0; i < 12; i++) {
    const change = Math.floor(Math.random() * 40000 - 20000)
    currentValue += change
    data.push(currentValue)
  }
  return data
}

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Total Income',
      backgroundColor: 'rgba(10, 173, 10,1)',
      borderColor: '#0aad0a',
      fill: true,
      tension: 0.4,
      data: generateRandomData(120000)
    },
    {
      label: 'Total Expense',
      backgroundColor: 'rgba(255, 187, 40,1)',
      borderColor: '#ffbb28',
      fill: true,
      tension: 0.4,
      data: generateRandomData(80000)
    },
    {
      label: 'Total Sales',
      backgroundColor: 'rgba(1, 107, 248,1)',
      borderColor: '#016bf8',
      fill: true,
      tension: 0.4,
      data: generateRandomData(85000)
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true
      },
      ticks: {
        callback: function (value: any) {
          return value / 1000 + 'k'
        }
      }
    }
  }
})

const ChartStyle = {
  position: 'relative',
  width: '100%',
  height: '100%'
}
</script>

<template>
  <Line :data="chartData" :options="chartOptions" :style="ChartStyle" />
</template>

<style scoped src="../assets/style/Views/DashboardUserView.css"></style>
