<template>
  <div>
    <div class="flex justify-center text-5xl mt-28">
      <transition appear>
        <p>{{ message }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "qqey.net",
      show: true,
    };
  },
  methods: {},
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: 1.6s ease-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
