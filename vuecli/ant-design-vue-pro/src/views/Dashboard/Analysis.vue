<template>
  <div>
    <Charts :option="chartOption" style="height: 400px"></Charts>
  </div>
</template>

<script>
import axios from "axios";
// import random from "lodash/random";
import Charts from "../../components/Charts.vue";
export default {
  components: {
    Charts,
  },
  data() {
    return {
      chartOption: {},
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getChartData() {
      axios
        .get("api/dashboard/chart", { params: { id: 12345 } })
        .then((response) => {
          this.chartOption = {
            title: {
              text: "ECharts 入门示例",
            },
            tooltip: {},
            legend: {
              data: ["销量"],
            },
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            yAxis: {},
            series: [
              {
                name: "销量",
                type: "bar",
                data: response.data,
              },
            ],
          };
        });
    },
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(
      //   () => random(100)
      // );
      // this.chartOption = { ...this.chartOption };
    }, 3000);
  },
};
</script>

<style></style>
