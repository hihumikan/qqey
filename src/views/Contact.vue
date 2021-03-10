<template>
  <div>
    <div class="flex justify-center text-5xl mt-28">
      <div>
        <b-jumbotron header="工事中"> </b-jumbotron>
        <BarChart />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/barchart.vue";

export default {
  components: {
    BarChart,
  },
};
</script>

<style>
</style>