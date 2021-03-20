<template>
  <div>
    <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">
        <transition appear>
          <h2 class="display-2 font-weight-bold mb-3">{{ message }}</h2>
        </transition>
        <br />
        <router-link to="/about">
          <v-btn color="grey" outlined large>
            <span class="grey--text text--darken-1 font-weight-bold">
              About me
            </span>
          </v-btn>
        </router-link>
      </v-container>

      <div class="py-12"></div>
    </section>
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
