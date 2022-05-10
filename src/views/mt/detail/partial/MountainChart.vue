<template>
  <div style="width: 400px">
    <PolarAreaChart v-bind="polarAreaChartProps" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { PolarAreaChart, usePolarAreaChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
const dataValues = ref([2, 7, 4, 10, 5]);
const dataLabels = ref(["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"]);

const testData = computed<ChartData<"polarArea">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
}));

const options = computed<ChartOptions<"polarArea">>(() => ({
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: false,
      text: "등산",
    },
  },
}));

const { polarAreaChartProps } = usePolarAreaChart({
  chartData: testData,
  options,
});
</script>
