import {Chart} from "chart.js/auto";
export default {
    install: (app) => {
        app.config.globalProperties.$_Chart = Chart;
    }
}