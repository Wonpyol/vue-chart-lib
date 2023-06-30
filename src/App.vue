<template>
  <div>
    <h1>Chart.js</h1>
    <bat-chart v-on:chart:refresh="refreshData" v-bind:propsdata="datasets"></bat-chart>
    <line-chart ></line-chart>
  </div>
</template>

<script>
// import {Chart, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js';
// Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
import BatChart from "@/components/BatChart.vue";
import LineChart from "@/components/LineChart.vue";
import {CHART_COLORS, numbers, transparentize} from "@/utils/Utils";
export default {
  name: 'App',
  components: {
    LineChart,
    BatChart
  },
  data() {
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    return {
        datasets: [{
          label: 'Dataset 1',
          data: numbers(NUMBER_CFG),
          borderColor: CHART_COLORS.red,
          backgroundColor: transparentize(CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: numbers(NUMBER_CFG),
          borderColor: CHART_COLORS.blue,
          backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
        }]

    }
  },
  methods: {
    refreshData() {
      console.log('test')
      const DATA_COUNT = 3;
      const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
      this.datasets = [{
          label: 'Dataset 1',
          data: {count: 0, min: 0, max: 0},
          borderColor: CHART_COLORS.red,
          backgroundColor: transparentize(CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: {count: 0, min: 0, max: 0},
          borderColor: CHART_COLORS.blue,
          backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
        }]
    },
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
