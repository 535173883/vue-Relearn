<template>
  <div ref="chartDom"></div>
</template>

<script>
import * as echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  watch: {
    option(newValue) {
      this.myChart.setOption(newValue);
    },
    // option: {
    //   handler(val) {
    //     this.myChart.setOption(val);
    //   },
    //   deep: true,
    // },
  },
  methods: {
    resize() {
      console.log("resize");
      this.myChart.resize();
    },
    rederChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.chartDom);
      this.myChart.setOption(this.option);
    },
  },
  beforeDestroy() {
    removeListener(this.$refs.myChart, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  mounted() {
    this.rederChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
};
</script>

<style></style>
