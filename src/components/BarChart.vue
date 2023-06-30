<template>
  <div>
    <canvas ref="barChart" id="barChart"></canvas>
    <button @click="this.$emit('chart:refresh')">refresh</button>
  </div>
</template>

<script>
import {months} from "@/utils/Utils";
export default {
  name: "BarChart",
  props: ['propsdata'],
  mounted() {
    const labels = months({count: 7});
    const data = {
      labels: labels,
      datasets: this.propsdata
    };
    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },
    }
    new this.$_Chart(this.$refs.barChart, config)
  },
}
</script>

<style scoped>

</style>