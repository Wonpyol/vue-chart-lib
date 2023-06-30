<template>
  <div>
    <canvas ref="barChart" id="barChart"></canvas>
    <button @click="refreshButton">refresh</button>
  </div>
</template>

<script>
import {months} from "@/utils/Utils";
export default {
  name: "BatChart",
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
  //TODO 데이터 리프레쉬 되도록 해보자!
  methods:{
    refreshButton() {
      this.$emit('chart:refresh')
    }
  }
}
</script>

<style scoped>

</style>