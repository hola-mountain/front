<template>
  <div style="width: 400px" class="q-ma-xl">
    <h4 class="text-bold">상세정보</h4>
    <PolarAreaChart v-bind="polarAreaChartProps" />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import { PolarAreaChart, usePolarAreaChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

const props = defineProps({
  chartData: {
    type: Array as PropType<number[]>,
    default: () => [0, 0, 0],
  },
});

Chart.register(...registerables);
// const dataLabels = ref(["경관", "경사도", "소요시간", "주변시설", "교통"]);
const dataLabels = ref(["경관", "경사도", "주변시설"]);

const setData = ref<ChartData<"polarArea">>({
  labels: dataLabels.value,
  datasets: [
    {
      data: props.chartData,
      backgroundColor: [
        "#ffcf9fba",
        "#a5dfdfba",
        "#9ad0f5ba",
        // "#ffe6aaba",
        // "#ffb1c1ba",
      ],
    },
  ],
});

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
  chartData: setData,
  options,
});
</script>
