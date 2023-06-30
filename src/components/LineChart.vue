<template>
  <div><canvas ref="lineChart" id="lineChart"></canvas></div>
</template>

<script>
// import {Chart} from "chart.js/auto";
import {months, numbers, CHART_COLORS, transparentize} from "@/utils/Utils";
export default {
  name: "LineChart",
  mounted() {
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const labels = months({count: 7});

    const data = {
      labels: labels,
      datasets: [
        {
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
        }
      ]
    };
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    };
    new this.$_Chart(this.$refs.lineChart, config);


  }
}
</script>

<style scoped>

</style>