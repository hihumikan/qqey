<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  data() {
    return {
      chartdata: {
        labels: ["みなさんの進捗","俺の進捗🥺", "俺のやる気"],
        datasets: [
          {
            label: ["Data One"],
            backgroundColor: "#f87979",
            data: [100,-100, 80],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>